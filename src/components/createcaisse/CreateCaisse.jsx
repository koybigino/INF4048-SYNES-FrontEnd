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

import { useRecoilValue } from "recoil";
import { storeToken, storeTokenType } from "../../stores/storeAtoms";
import Alert from "../alert/Alert";
import axios from "../../config/axios";
import { getData, postData } from "../../config/apiFunctions";

export default function CreateCaisse({ setTableRows, allCaisses }) {
  const [etablissement, setEtablissement] = useState("");

  const [showAlertSucess, setShowAlertSucess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const [token, setToken] = useRecoilState(storeToken);
  const [tokenType, setTokenType] = useRecoilState(storeTokenType);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    let caisses = allCaisses;

    caisses = [...caisses, { nom: etablissement, etablissement }];

    if (etablissement) {
      postData("/caisse", token, tokenType, {
        nom: etablissement,
        etablissement,
      })
        .then(() => {
          setLoading(false);

          setTableRows(null);

          getData("/caisse/all", token, tokenType).then((res) => {
            setTableRows(res.items);
          });

          setEtablissement("");
          setShowAlertSucess(true);

          setTimeout(() => {
            setShowAlertSucess(false);
          }, 5000);
        })
        .catch(() => {
          if(err.response.data.detail === "Could not validate credentials"){
            setToken("")
            setTokenType("")
            localStorage.clear()
          }
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
        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Ajouter une Section
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <div className="flex">
            <Typography variant="h4" color="blue-gray">
              Création d'une Section
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
            Erreur de creation d'un nouvelle Section !
          </Alert>
          <Alert
            color="green"
            icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
            open={showAlertSucess}
            setOpen={setShowAlertSucess}
          >
            Creation d'un nouvelle Section réussit !
          </Alert>
        </div>
        <DialogBody className="flex items-center justify-center" divider>
          <Card color="transparent" shadow={false}>
            <Typography color="gray" className="mt-1 font-normal">
              Entrer les détails pour créer un Section
            </Typography>
            <form
              onSubmit={handleSubmit}
              className={`mt-8 mb-2 w-80 max-w-screen-lg`}
            >
              <div className="mb-4 flex  flex-col gap-6">
                <Input
                  onChange={(e) => setEtablissement(e.target.value)}
                  value={etablissement}
                  color="orange"
                  size="lg"
                  label="Etablissement"
                  required
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
