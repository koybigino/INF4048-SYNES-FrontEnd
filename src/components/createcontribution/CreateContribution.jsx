import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Input,
  Typography,
  Radio,
  Spinner,
} from "@material-tailwind/react";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";

import { useRecoilState, useRecoilValue } from "recoil";
import { storeToken, storeTokenType } from "../../stores/storeAtoms";
import Alert from "../alert/Alert";
import { getData, postData } from "../../config/apiFunctions";
import SelectTailwind from "../select/SelectTailwind";
import {
  storeGetAllCaisseName,
  storeGetAllFond,
  storeGetAllFondName,
  storeGetAllUser,
  storeGetAllUserName,
} from "../../stores/storeSelector";

export default function CreateContribution({ setTableRows, allSections }) {
  const [montant, setMontant] = useState("");

  const [showAlertSucess, setShowAlertSucess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [contributor, setContributor] = useState([]);
  const [caisse, setCaisse] = useState("");
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const [token, setToken] = useRecoilState(storeToken);
  const fonds = useRecoilValue(storeGetAllFond);
  const fondNames = useRecoilValue(storeGetAllFondName);
  const usersNames = useRecoilValue(storeGetAllUserName);
  const usersItems = useRecoilValue(storeGetAllUser);
  const users = usersItems.items;
  const [tokenType, setTokenType] = useRecoilState(storeTokenType);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    let id_fond = null;
    let email_user = null;

    for (let i = 0; i < fonds.items.length; i++) {
      const element = fonds.items[i];

      if (element.titre === caisse) {
        id_fond = element.id;
        break;
      }
    }

    for (let i = 0; i < users.length; i++) {
      const element = users[i];

      if (element.nom === contributor) {
        email_user = element.adresse_mail;
        break;
      }
    }

    console.log(id_fond, email_user);

    if (id_fond && email_user) {
      postData("/contribution", token, tokenType, {
        id_fond: parseInt(id_fond),
        email_user,
        montant,
      })
        .then((r) => {
          console.log(r);
          setLoading(false);

          setTableRows(null);

          const contribus = [];

          for (let i = 0; i < fonds.items.length; i++) {
            const element = fonds.items[i];

            if (i === fonds.items.length - 1) {
              getData("/contribution/" + element.id, token, tokenType)
                .then((res) => {
                  console.log(res);
                  if (res?.data?.items.length > 0) {
                    res.data.items.forEach((i) => {
                      contribus.push(i);
                    });
                    setTableRows(contribus);
                  }
                })
                .catch((e) => {
                  console.log(e);
                });
            } else {
              getData("/contribution/" + element.id, token, tokenType)
                .then((res) => {
                  if (res?.data?.items.length > 0) {
                    res.data.items.forEach((i) => {
                      contribus.push(i);
                    });
                  }
                })
                .catch((e) => {
                  console.log(e);
                });
            }
          }

          setMontant("");

          setShowAlertSucess(true);

          setTimeout(() => {
            setShowAlertSucess(false);
          }, 5000);
        })
        .catch((e) => {
          console.log(e);
          setLoading(false);
          setShowAlertDanger(true);

          setTimeout(() => {
            setShowAlertDanger(false);
          }, 5000);
        });
    } else {
      setLoading(false);
      setShowAlertDanger(true);

      setTimeout(() => {
        setShowAlertDanger(false);
      }, 5000);
    }
  };

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <Button
        onClick={handleOpen}
        color="orange"
        className="flex items-center gap-3"
        size="sm"
      >
        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Ajouter une
        Contribution
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <div className="flex">
            <Typography variant="h4" color="blue-gray">
              Création d'une Contribution
            </Typography>
          </div>
        </DialogHeader>
        <div className="mx-10 mb-2">
          <Alert
            color="red"
            icon={<ExclamationTriangleIcon className="h-6 w-6" />}
            open={showAlertDanger}
            setOpen={setShowAlertDanger}
          >
            Erreur de creation d'un nouvelle Contribution !
          </Alert>
          <Alert
            color="green"
            icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
            open={showAlertSucess}
            setOpen={setShowAlertSucess}
          >
            Creation d'un nouvelle Contribution réussit !
          </Alert>
        </div>
        <DialogBody className="flex items-center justify-center" divider>
          <Card color="transparent" shadow={false}>
            <Typography color="gray" className="mt-1 font-normal">
              Entrer les détails pour créer un Contribution
            </Typography>
            <form
              onSubmit={handleSubmit}
              className={`mt-8 mb-2 w-80 max-w-screen-lg`}
            >
              <div className="mb-4 flex  flex-col gap-6">
                <SelectTailwind
                  options={fondNames}
                  label="choisir une caisse"
                  value=""
                  onSelectChange={setCaisse}
                />
                <Input
                  onChange={(e) => setMontant(e.target.value)}
                  value={montant}
                  color="orange"
                  size="lg"
                  label="Montant"
                  required
                  type="number"
                />
                <SelectTailwind
                  options={usersNames}
                  label="choisir un membre"
                  value=""
                  onSelectChange={setContributor}
                />
              </div>
              <Button
                type="submit"
                color="orange"
                className="mt-6 bg-main  flex justify-center gap-10"
                fullWidth
              >
                Créer {loading && <Spinner color="amber" />}
              </Button>
            </form>
          </Card>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
