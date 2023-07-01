import React, { useEffect, useRef, useState } from "react";
import {
  storeSchools,
  storeToken,
  storeTokenType,
  storeUser,
} from "../../../../stores/storeAtoms";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Spinner,
} from "@material-tailwind/react";
import {
  storeEtablissements,
  storeGetAllSectionName,
  storeUserGet,
} from "../../../../stores/storeSelector";
import TelNumber from "../../../../components/telnumber/TelNumber";
import SelectTailwind from "../../../../components/select/SelectTailwind";
import Alert from "../../../../components/alert/Alert";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import account from "../../../../assets/img/account.png";
import axios from "../../../../config/axios";
import { putData } from "../../../../config/apiFunctions";

export default function EditProfile() {
  const currentUser = useRecoilValue(storeUserGet);
  const [user, setCurrentuser] = useRecoilState(storeUser);
  const imageref = useRef();
  const [imagePath, setImagePath] = useState(
    currentUser.photo ? currentUser.photo.image_link : ""
  );
  const [photo, setPhoto] = useState(new FormData());
  let schools = useRecoilValue(storeEtablissements);
  let etablissements = useRecoilValue(storeGetAllSectionName);
  const [etablissement, setEtablissement] = useState(currentUser.etablissement);
  const [sexe, setSexe] = useState(currentUser.sexe);
  const [phone_number, setTel] = useState(currentUser.phone_number);
  const [nationalite, setNationalite] = useState(currentUser.nationalite);
  const [nom, setNom] = useState(currentUser.nom);
  const [age, setAge] = useState(currentUser.age);
  const [specialite, setSpecialite] = useState(currentUser.specialite);
  const [password, setPassword] = useState("");
  const [ConfirmationPassword, setConfirmationPassword] = useState("");
  const [matricule, setMatricule] = useState(currentUser.matricule);
  const [adresse_mail, setEmail] = useState(currentUser.adresse_mail);
  const [showAlertSucess, setShowAlertSucess] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = useRecoilValue(storeToken);
  const tokenType = useRecoilValue(storeTokenType);
  const [showAlertDanger, setShowAlertDanger] = useState(false);

  const handleClick = () => {
    imageref.current.click();
  };

  const changeImage = (e) => {
    const fd = new FormData();
    if (e.target.files && e.target.files[0]) {
      setPhoto(e.target.files[0]);
      setImagePath(URL.createObjectURL(e.target.files[0]));

      fd.append("photo", e.target.files[0], e.target.files[0].name);

      setPhoto(fd);
    }
  };

  const updateProfile = async (user) => {
    setLoading(true);
    console.log(token, user);
    putData(`user/${currentUser.adresse_mail}`, token, tokenType, user)
      .then((res) => {
        console.log(res.data);
        putData("/user/photo", token, tokenType, photo)
          .then((res) => {
            console.log(res);
            putData(
              `/user/password/${password}/${ConfirmationPassword}`,
              token,
              tokenType
            )
              .then((res) => {
                console.log(res);
                setLoading(false);
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
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            setShowAlertDanger(true);
    
            setTimeout(() => {
              setShowAlertDanger(false);
            }, 5000);
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userR = {
      matricule,
      nom,
      etablissement,
      age,
      sexe,
      specialite,
      nationalite,
      adresse_mail,
      phone_number,
    };

    //setCurrentuser(userC);

    updateProfile(userR);

    setTimeout(() => {
      setShowAlertSucess(false);
      setShowAlertDanger(false);
    }, 5000);
  };

  return (
    <>
      {currentUser.nom ? (
        <div className="flex my-10 justify-center">
          <Card color="transparent" shadow={false}>
            <Typography variant="h2" color="blue-gray">
              Modifier votre Profile
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Entrez vos informations
            </Typography>
            <div className="mt-10">
              <img
                onClick={handleClick}
                className="h-96 w-96 duration-500 transition-all ease-in-out hover:opacity-90 cursor-pointer rounded-full"
                src={imagePath ? imagePath : account}
                alt="nature image"
              />
            </div>
            <form
              onSubmit={handleSubmit}
              className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            >
              <input
                hidden
                onChange={changeImage}
                ref={imageref}
                type="file"
                name=""
                id=""
              />
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  value={matricule}
                  onChange={(e) => setMatricule(e.target.value)}
                  required
                  color="orange"
                  size="lg"
                  label="Matricule"
                />
                <Input
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
                  required
                  color="orange"
                  size="lg"
                  label="Nom"
                />
                <Input
                  value={adresse_mail}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  color="orange"
                  size="lg"
                  label="Adresse Mail"
                />
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  color="orange"
                  type="password"
                  size="lg"
                  label="Ancient mot de passe"
                />
                <Input
                  value={ConfirmationPassword}
                  onChange={(e) => setConfirmationPassword(e.target.value)}
                  required
                  color="orange"
                  type="password"
                  size="lg"
                  label="Nouveau mot de passe"
                />
                <SelectTailwind
                  value={etablissement}
                  label="Selectionner votre etablissement"
                  onSelectChange={setEtablissement}
                  options={etablissements}
                />
                <Input
                  value={specialite}
                  onChange={(e) => setSpecialite(e.target.value)}
                  required
                  color="orange"
                  size="lg"
                  label="Spécialité"
                />
                <SelectTailwind
                  value={sexe}
                  label="Selectionner votre sexe"
                  onSelectChange={setSexe}
                  options={["Masculin", "Feminin"]}
                />
                <Input
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  type="number"
                  required
                  color="orange"
                  size="lg"
                  label="Age"
                />
                <TelNumber
                  value={phone_number}
                  setTel={setTel}
                  setcountry={setNationalite}
                />
              </div>
              <Button
                type="submit"
                color="pink"
                className="bg-main flex justify-center gap-10 normal-case text-xl text-black mx-auto w-10/12 py-3"
                size="lg"
              >
                Editer {loading && <Spinner color="amber" />}
              </Button>

              <div className="mt-10">
                <Alert
                  color="red"
                  icon={<ExclamationTriangleIcon className="h-6 w-6" />}
                  open={showAlertDanger}
                  setOpen={setShowAlertDanger}
                >
                  Erreur de la mise à jour des information du membre{" "}
                  <span className="font-semibold">{currentUser.nom}</span>{" "}
                  membre !
                </Alert>
                <Alert
                  color="green"
                  icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
                  open={showAlertSucess}
                  setOpen={setShowAlertSucess}
                >
                  Mise à jour des information du membre{" "}
                  <span className="font-semibold">{currentUser.nom}</span>{" "}
                  réussit !
                </Alert>
              </div>
            </form>
          </Card>
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner color="amber" className="w-20 h-20" />
        </div>
      )}
    </>
  );
}
