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

import Select from "../select/Select";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  storeAllUser,
  storeToken,
  storeTokenType,
} from "../../stores/storeAtoms";
import Alert from "../alert/Alert";
import { storeEtablissements, storeGetAllSectionName } from "../../stores/storeSelector";
import axios from "../../config/axios";
import { getData } from "../../config/apiFunctions";

export default function CreateUser({ setTableRows, allUsers }) {
  const etablissements = useRecoilValue(storeGetAllSectionName);

  const [nom, setNom] = useState("");
  const [adresse_mail, setEmail] = useState("");
  const [matricule, setMatricule] = useState("");
  const [etablissement, setEtablissement] = useState("");

  const [add, setAdd] = useState(false);
  const [select, setSelect] = useState(false);
  const [showRadio, setShowRadion] = useState(true);
  const [showAlertSucess, setShowAlertSucess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const [token, setToken] = useRecoilState(storeToken);
  const [tokenType, setTokenType] = useRecoilState(storeTokenType);

  const handleAdd = () => {
    setAdd(true);
    setSelect(false);
    setShowRadion(false);
  };
  const handleSelect = () => {
    setSelect(true);
    setAdd(false);
    setShowRadion(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    let users = allUsers;

    const user = {
      matricule: "KDK392",
      nom: "John Michael",
      etablissement: "Université Yaoundé I",
      section: {
        id: "string",
        nom: "Section 1",
      },
      age: 22,
      role: "Admin",
      sexe: "Masculin",
      specialite: "Math",
      nationalite: "Cammeroon",
      adresse_mail: "john@creative-tim.com",
      phone_number: "3829302082",
    };

    if (etablissement) {
      axios
        .post(
          "/user",
          { nom, adresse_mail, matricule, etablissement },
          {
            headers: {
              Authorization: `${tokenType} ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(res);
          setLoading(false);
          setTableRows(null);

          getData("/user/all", token, tokenType).then((res) => {
            setTableRows(res.data.items);
          });

          setEmail("");
          setMatricule("");
          setNom("");
          setEtablissement("");
          setAdd(false);
          setSelect(false);
          setShowRadion(true);
          setShowAlertSucess(true);

          setTimeout(() => {
            setShowAlertSucess(false);
          }, 5000);
        })
        .catch((err) => {
          console.log(err);
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
        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Ajouter un membre
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <div className="flex">
            <Typography variant="h4" color="blue-gray">
              Création d'un membre
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
            Erreur de creation d'un noubeau membre !
          </Alert>
          <Alert
            color="green"
            icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
            open={showAlertSucess}
            setOpen={setShowAlertSucess}
          >
            Creation d'un nouveau membre réussit !
          </Alert>
        </div>
        <DialogBody className="flex items-center justify-center" divider>
          <Card color="transparent" shadow={false}>
            <Typography color="gray" className="mt-1 font-normal">
              Entrer les détails pour créer un utilisateur
            </Typography>
            <form
              onSubmit={handleSubmit}
              className={`mt-8 mb-2 max-w-screen-lg ${
                showRadio ? "sm:w-fit" : "sm:w-[30rem]"
              }`}
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  onChange={(e) => setNom(e.target.value)}
                  value={nom}
                  color="orange"
                  size="lg"
                  label="Nom"
                  required
                />
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={adresse_mail}
                  color="orange"
                  size="lg"
                  label="Email"
                  type="email"
                  required
                />
                <Input
                  onChange={(e) => setMatricule(e.target.value)}
                  value={matricule}
                  color="orange"
                  size="lg"
                  label="Maticule"
                  required
                />
                {showRadio && (
                  <div className="flex justify-around">
                    <Radio
                      onClick={handleAdd}
                      id="add"
                      name="type"
                      label="Ajouter un Nouvel Etablissement"
                    />
                    <Radio
                      onClick={handleSelect}
                      id="select"
                      name="type"
                      label="Selectionner un Etablissement"
                    />
                  </div>
                )}

                {add && (
                  <Input
                    onChange={(e) => setEtablissement(e.target.value)}
                    value={etablissement}
                    color="orange"
                    size="lg"
                    label="Etablissement"
                    required
                  />
                )}

                {select && (
                  <Select
                    onSelectChange={setEtablissement}
                    options={etablissements}
                  />
                )}
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
