import { Card, IconButton, Input, Typography } from "@material-tailwind/react";

import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useRecoilState, useRecoilValue } from "recoil";
import { storeEtablissements, storeGetAllSection } from "../../stores/storeSelector";
import Select from "../select/Select";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import Alert from "../alert/Alert";

export default function EditSection({ section }) {
  const etablissements = useRecoilValue(storeEtablissements);
  const [allsection, setAllsections] = useRecoilState(storeGetAllSection);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [nom, setNom] = useState(section.nom);
  const [etablissement, setEtablissement] = useState(section.etablissement);
  const [showAlertSucess, setShowAlertSucess] = useState(false);
  const [showAlertDanger, setShowAlertDanger] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let sections = allsection.filter((u) => {
      if (section.id != u.id) {
        return u;
      }
    });

    setAllsections(sections);

    sections = [
      ...sections,
      { ...section, nom, adresse_mail, matricule, etablissement },
    ];

    setAllsections(sections);

    setShowAlertSucess(true);

    setTimeout(() => {
      setShowAlertSucess(false);
    }, 5000);
  };

  return (
    <Fragment>
      <IconButton onClick={handleOpen} variant="text" color="blue-gray">
        <PencilIcon className="h-4 w-4" />
      </IconButton>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h4" color="blue-gray">
            Modifier la section {section.nom}
          </Typography>
        </DialogHeader>
        <div className="mx-10 mb-2">
          <Alert
            color="red"
            icon={<ExclamationTriangleIcon className="h-6 w-6" />}
            open={showAlertDanger}
            setOpen={setShowAlertDanger}
          >
            Erreur lors de la modification des informations du membre !
          </Alert>
          <Alert
            color="green"
            icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
            open={showAlertSucess}
            setOpen={setShowAlertSucess}
          >
            Modification des informations du membre réussit !
          </Alert>
        </div>
        <DialogBody className="flex items-center justify-center" divider>
          <Card color="transparent" shadow={false}>
            <Typography color="gray" className="mt-1 font-normal">
              Entrer les détails pour créer un utilisateur
            </Typography>
            <form
              onSubmit={handleSubmit}
              className="mt-8 mb-2 max-w-screen-lg w-96"
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  onChange={(e) => setNom(e.target.value)}
                  value={nom}
                  color="orange"
                  size="lg"
                  label="Nom"
                />
                <Select
                  onSelectChange={setEtablissement}
                  value={etablissement}
                  options={etablissements}
                />
              </div>
              <Button
                type="submit"
                color="orange"
                className="mt-6 bg-main"
                fullWidth
              >
                Editer
              </Button>
            </form>
          </Card>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
