import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Input,
  Typography,
  Radio,
  Spinner,
  Avatar,
  Popover,
  PopoverHandler,
  PopoverContent,
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

import { useRecoilState, useRecoilValue } from "recoil";
import { storeToken, storeTokenType } from "../../stores/storeAtoms";
import Alert from "../alert/Alert";
import account from "../../assets/img/account.png";
import { getData, postData } from "../../config/apiFunctions";
import SelectTailwind from "../select/SelectTailwind";
import {
  storeGetAllActivite,
  storeGetAllSection,
  storeGetAllSectionName,
  storeGetAllSectionUser,
  storeGetAllUser,
  storeGetAllUserName,
  storeGetAllUserPerSection,
  storeUserGet,
} from "../../stores/storeSelector";
import SelectItems from "../selectmembers/SelectItems";

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
  const sectionNames = useRecoilValue(storeGetAllSectionName);
  const usersItems = useRecoilValue(storeGetAllUser);
  const usersNames = useRecoilValue(storeGetAllUserName);
  const usersNamesPerSection = useRecoilValue(storeGetAllUserPerSection);
  const sectionUser = useRecoilValue(storeGetAllSectionUser);
  const users = usersItems.items;
  const currentUser = useRecoilValue(storeUserGet);
  const sections = useRecoilValue(storeGetAllSection);
  const [token, setToken] = useRecoilState(storeToken);
  const [tokenType, setTokenType] = useRecoilState(storeTokenType);
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
    console.log({
      titre,
      lieu,
      moderateurs,
      membre_convies,
      date_debut,
      date_fin,
      heure_debut,
      heure_fin
    })
    /*
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
                if (
                  err.response.data.detail === "Could not validate credentials"
                ) {
                  setToken("");
                  setTokenType("");
                  localStorage.clear();
                }
              });
          });
        })
        .catch((err) => {
          console.log(err);
          if (err.response.data.detail === "Could not validate credentials") {
            setToken("");
            setTokenType("");
            localStorage.clear();
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
    }*/
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
    <Popover placement="bottom">
      <PopoverHandler>
        <Button color="orange" className="flex items-center gap-3" size="sm">
          <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Planifier une
          Activité
        </Button>
      </PopoverHandler>
      <PopoverContent className="w-9/12 flex flex-col justify-center items-center">
        <div className="flex justify-start">
          <Typography variant="h4" color="blue-gray">
            Planification d'une Activité
          </Typography>
        </div>

        <div className="mx-10 mb-2">
          <Alert
            color="red"
            icon={<ExclamationTriangleIcon className="h-6 w-6" />}
            open={showAlertDanger}
            setOpen={setShowAlertDanger}
          >
            Erreur de Planification d'une nouvelle Activité !
          </Alert>
          <Alert
            color="green"
            icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
            open={showAlertSucess}
            setOpen={setShowAlertSucess}
          >
            Planification d'une nouvelle Activité réussit !
          </Alert>
        </div>

        <form
          onSubmit={handleSubmit}
          className={`mt-8 mb-2 w-full max-w-screen-lg`}
        >
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 items-center gap-6">
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
            <SelectItems
              sections={sectionNames}
              users={usersNames}
              userPerSection={usersNamesPerSection}
              sectionUser={sectionUser}
              setItems={setModerateurs}
            >Selectionné les modérateurs</SelectItems>
            <SelectItems
              sections={sectionNames}
              users={usersNames}
              userPerSection={usersNamesPerSection}
              sectionUser={sectionUser}
              setItems={setMembreConvies}
            >Selectionné les Membres conviées</SelectItems>
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
              Planifier {loading && <Spinner color="amber" />}
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
