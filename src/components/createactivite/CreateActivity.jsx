import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Input,
  Typography,
  Radio,
  Spinner,
  Avatar,
} from "@material-tailwind/react";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

import { Fragment, useRef, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";

import { useRecoilValue } from "recoil";
import { storeToken, storeTokenType } from "../../stores/storeAtoms";
import Alert from "../alert/Alert";
import account from "../../assets/img/account.png";
import { getData, postData } from "../../config/apiFunctions";
import SelectTailwind from "../select/SelectTailwind";
import {
  storeGetAllSection,
  storeGetAllSectionName,
  storeGetAllUser,
  storeGetAllUserName,
  storeUserGet,
} from "../../stores/storeSelector";

export default function CreateActivity({ setTableRows, allActivites }) {
  const [email_createur, setEmailCreateur] = useState("");
  const [titre, setTitre] = useState("");
  const [lieu, setLieu] = useState("");
  const [moderateurs, setModerateurs] = useState([]);
  const [membre_convies, setMembreConvies] = useState([]);
  const [date_debut, setDateDebut] = useState("");
  const [date_fin, setDateFin] = useState("");
  const [heure_debut, setHeureDebut] = useState("");
  const [heure_fin, setHeureFin] = useState("");

  const [showAlertSucess, setShowAlertSucess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const items = useRecoilValue(storeGetAllSection);
  const biens = items.items;
  const sectionNames = useRecoilValue(storeGetAllSectionName);
  const usersItems = useRecoilValue(storeGetAllUser);
  const usersNames = useRecoilValue(storeGetAllUserName);
  const users = usersItems.items;
  const currentUser = useRecoilValue(storeUserGet);
  const sections = useRecoilValue(storeGetAllSection);
  const token = useRecoilValue(storeToken);
  const tokenType = useRecoilValue(storeTokenType);
  const imageref = useRef();
  const [photos, setPhoto] = useState(new FormData());
  const [imagePath, setImagePath] = useState([{ link: account }]);
  const [sect, setSection] = useState("");

  const changeImage = (e) => {
    const files = e.target.files;
    const imgs = [];
    const formdata = new FormData();

    if (files) {
      for (let index = 0; index < files.length; index++) {
        const file = files[index];

        const path = URL.createObjectURL(file);

        imgs.push({ link: path });

        formdata.append("photos", file, file.name);

        //imgsBinary.push(fileBinary);
      }
      setPhoto(formdata);

      setImagePath(imgs);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let section = {};

    for (let i = 0; i < sections.items.length; i++) {
      const element = sections.items[i];

      if (element.nom === sect) {
        section = element;
        break;
      }
    }

    setLoading(true);

    console.log({ nom, description, valeur_marchande, section, photos });

    if (nom) {
      postData("/bien", token, tokenType, {
        nom,
        description,
        valeur_marchande,
        section,
      })
        .then(() => {
          setTableRows(null);

          getData(
            `/bien/all?limit=1&offset=${allActivites.length}`,
            token,
            tokenType
          ).then((res) => {
            console.log(res);
            postData(
              "/bien/photos/" + res.data.items[0].id,
              token,
              tokenType,
              photos
            )
              .then((res) => {
                console.log(res);
                getData("/bien/all", token, tokenType).then((res) => {
                  setLoading(false);
                  console.log(res.data);
                  setTableRows(res.data.items);

                  setNom("");
                  setDescription("");
                  setValeur("");
                  setSection("");
                  setPhoto(new FormData());
                  setImagePath([{ link: account }]);
                  setShowAlertSucess(true);

                  setTimeout(() => {
                    setShowAlertSucess(false);
                  }, 5000);
                });
              })
              .catch((err) => {
                console.log(err);
              });
          });
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

  const handleClick = () => {
    imageref.current.click();
  };

  const setConvie = (e) => {
    console.log(e);
  };

  const setModer = (e) => {
    console.log(e);
  };

  return (
    <Fragment>
      <Button
        onClick={handleOpen}
        color="orange"
        className="flex items-center gap-3"
        size="sm"
      >
        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Plannifier une
        Activité
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <div className="flex">
            <Typography variant="h4" color="blue-gray">
              Création d'une Activité
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
            Erreur de plannification d'une nouvelle Activité !
          </Alert>
          <Alert
            color="green"
            icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
            open={showAlertSucess}
            setOpen={setShowAlertSucess}
          >
            Plannification d'une nouvelle Activité réussit !
          </Alert>
        </div>
        <DialogBody
          className="flex flex-col items-center justify-center"
          divider
        >
          <Typography color="gray" className="mt-1 font-normal">
            Entrer les détails pour créer un Activite
          </Typography>
          <form
            onSubmit={handleSubmit}
            className={`mt-8 mb-2 w-full max-w-screen-lg`}
          >
            <div className="mb-4 grid grid-cols-2 items-center  gap-6">
              <Input
                onChange={(e) => setTitre(e.target.value)}
                value={titre}
                color="orange"
                size="lg"
                label="Titre de l'Activite"
                required
              />
              <Input
                onChange={(e) => setLieu(e.target.value)}
                value={lieu}
                color="orange"
                size="lg"
                label="Lieu"
                required
              />
              <SelectTailwind
                onSelectChange={setModer}
                options={usersNames}
                label="Choisir les modérateurs"
                value={moderateurs}
              />
              <SelectTailwind
                onSelectChange={setConvie}
                options={usersNames}
                label="Choisir les membres conviées"
                value={membre_convies}
              />
              <Input
                onChange={(e) => setDateDebut(e.target.value)}
                value={date_debut}
                color="orange"
                size="lg"
                label="Date de début"
                required
                type="date"
              />
              <Input
                onChange={(e) => setDateFin(e.target.value)}
                value={date_fin}
                color="orange"
                size="lg"
                label="Date de Fin"
                required
                type="date"
              />
              <Input
                onChange={(e) => setHeureDebut(e.target.value)}
                value={heure_debut}
                color="orange"
                size="lg"
                label="Heure de début"
                required
                type="time"
              />
              <Input
                onChange={(e) => setHeureFin(e.target.value)}
                value={heure_fin}
                color="orange"
                size="lg"
                label="Heure de Fin"
                required
                type="time"
              />
              <div className="flex justify-center">
                {imagePath.map((src) => (
                  <Avatar
                    onClick={handleClick}
                    src={src.link}
                    alt="avatar"
                    size="lg"
                  />
                ))}
              </div>
              <input
                hidden
                onChange={changeImage}
                ref={imageref}
                type="file"
                name=""
                id=""
                multiple
              />
              <Button
                type="submit"
                color="orange"
                className="mt-6 bg-main  flex justify-center gap-10"
                fullWidth
              >
                Plannifier {loading && <Spinner color="amber" />}
              </Button>
            </div>
          </form>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
