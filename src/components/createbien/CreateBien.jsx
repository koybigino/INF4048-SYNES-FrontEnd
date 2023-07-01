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
} from "../../stores/storeSelector";

export default function CreateBien({ setTableRows, allBiens }) {
  const [nom, setNom] = useState("");
  const [valeur_marchande, setValeur] = useState("");
  const [description, setDescription] = useState("");

  const [showAlertSucess, setShowAlertSucess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const items = useRecoilValue(storeGetAllSection);
  const biens = items.items;
  const sectionNames = useRecoilValue(storeGetAllSectionName);
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
            `/bien/all?limit=1&offset=${allBiens.length}`,
            token,
            tokenType
          ).then((res) => {
            console.log(res)
            postData("/bien/photos/" + res.data.items[0].id, token, tokenType, photos)
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

  return (
    <Fragment>
      <Button
        onClick={handleOpen}
        color="orange"
        className="flex items-center gap-3"
        size="sm"
      >
        <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Ajouter un Bien
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <div className="flex">
            <Typography variant="h4" color="blue-gray">
              Création d'un Bien
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
            Erreur de creation d'un nouveau Bien !
          </Alert>
          <Alert
            color="green"
            icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
            open={showAlertSucess}
            setOpen={setShowAlertSucess}
          >
            Creation d'un nouveau Bien réussit !
          </Alert>
        </div>
        <DialogBody className="flex items-center justify-center" divider>
          <Card color="transparent" shadow={false}>
            <Typography color="gray" className="mt-1 font-normal">
              Entrer les détails pour créer un Bien
            </Typography>
            <form
              onSubmit={handleSubmit}
              className={`mt-8 mb-2 w-80 max-w-screen-lg`}
            >
              <div className="mb-4 flex  flex-col gap-6">
                <Input
                  onChange={(e) => setNom(e.target.value)}
                  value={nom}
                  color="orange"
                  size="lg"
                  label="Nom du Bien"
                  required
                />
                <Input
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  color="orange"
                  size="lg"
                  label="Description"
                  required
                />
                <Input
                  onChange={(e) => setValeur(e.target.value)}
                  value={valeur_marchande}
                  color="orange"
                  size="lg"
                  type="number"
                  label="Valeur marchante"
                  required
                />
                <SelectTailwind
                  onSelectChange={setSection}
                  options={sectionNames}
                  label="Choisir une section"
                  value={sect}
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
