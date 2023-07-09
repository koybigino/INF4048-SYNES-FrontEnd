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
  storeGetAllCaisse,
  storeGetAllCaisseName,
  storeGetAllFond,
  storeGetAllFondName,
  storeGetAllUserName,
  storeUserGet,
} from "../../stores/storeSelector";

export default function CreateDepense({ setTableRows, allSections }) {
  const [montant, setMontant] = useState("");

  const [showAlertSucess, setShowAlertSucess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [caisse, setCaisse] = useState("");
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const [token, setToken] = useRecoilState(storeToken);
  const caissesNames = useRecoilValue(storeGetAllCaisseName);
  const caisses = useRecoilValue(storeGetAllCaisse);
  const user = useRecoilValue(storeUserGet);
  const [tokenType, setTokenType] = useRecoilState(storeTokenType);
  const [titre, setTitre] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    let id_caisse = null;

    for (let i = 0; i < caisses.items.length; i++) {
      const element = caisses.items[i];

      if (element.nom === caisse) {
        id_caisse = element.id;
        break;
      }
    }

    if (id_caisse) {
      postData("/depense", token, tokenType, {
        id_caisse,
        email_createur: user.adresse_mail,
        titre,
        description,
        montant,
      })
        .then((r) => {
          console.log(r);
          setLoading(false);

          setTableRows(null);

          getData("/depense/all", token, tokenType).then((res) => {
            setTableRows(res.data.items);
          });

          setCaisse("")
          setDescription("");
          setMontant("")
          setTitre("");
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
        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Ajouter une Depense
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <div className="flex">
            <Typography variant="h4" color="blue-gray">
              Création d'une Depense
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
            Erreur de creation d'un nouvelle Depense !
          </Alert>
          <Alert
            color="green"
            icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
            open={showAlertSucess}
            setOpen={setShowAlertSucess}
          >
            Creation d'un nouvelle Depense réussit !
          </Alert>
        </div>
        <DialogBody className="flex items-center justify-center" divider>
          <Card color="transparent" shadow={false}>
            <Typography color="gray" className="mt-1 font-normal">
              Entrer les détails pour créer un Depense
            </Typography>
            <form
              onSubmit={handleSubmit}
              className={`mt-8 mb-2 w-80 max-w-screen-lg`}
            >
              <div className="mb-4 flex  flex-col gap-6">
                <SelectTailwind
                  options={caissesNames}
                  label="choisir une Caisse"
                  value=""
                  onSelectChange={setCaisse}
                />
                <Input
                  onChange={(e) => setTitre(e.target.value)}
                  value={titre}
                  color="orange"
                  size="lg"
                  label="Titre de la dépense"
                  required
                />
                <Input
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  color="orange"
                  size="lg"
                  label="description de la dépense"
                  required
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
