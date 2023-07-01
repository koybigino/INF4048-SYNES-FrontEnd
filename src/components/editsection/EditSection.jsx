import {
  Alert,
  Card,
  IconButton,
  Input,
  Spinner,
  Typography,
} from "@material-tailwind/react";

import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/outline";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  storeEtablissements,
  storeGetAllSection,
} from "../../stores/storeSelector";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { storeToken, storeTokenType } from "../../stores/storeAtoms";
import axios from "../../config/axios";
import { getData, putData } from "../../config/apiFunctions";

export default function EditSection({ section, allsection, setSection }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [etablissement, setEtablissement] = useState(section.etablissement);
  const [showAlertSucess, setShowAlertSucess] = useState(false);
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const [loading, setLoading] = useState(false);
  const token = useRecoilValue(storeToken);
  const tokenType = useRecoilValue(storeTokenType);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    let sections = allsection.filter((u) => {
      if (section.id != u.id) {
        return u;
      }
    });

    sections = [...sections, { nom: etablissement, etablissement }];

    putData("/section/" + section.id, token, tokenType, {
      nom: etablissement,
      etablissement,
    })
      .then((res) => {
        setLoading(false);

        setSection(null);

        getData("/section/all", token, tokenType).then((res) => {
          setSection(res.data.items);
        });

        setShowAlertSucess(true);

        setTimeout(() => {
          setShowAlertSucess(false);
        }, 5000);
      })
      .catch(() => {
        setLoading(false);

        setShowAlertSucess(true);

        setTimeout(() => {
          setShowAlertSucess(false);
        }, 5000);
      });
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
            Erreur lors de la modification des informations de la Section !
          </Alert>
          <Alert
            color="green"
            icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
            open={showAlertSucess}
            setOpen={setShowAlertSucess}
          >
            Modification des informations de la Section réussit !
          </Alert>
        </div>
        <DialogBody className="flex items-center justify-center" divider>
          <Card color="transparent" shadow={false}>
            <Typography color="gray" className="mt-1 font-normal">
              Entrer les détails pour modifier une Section
            </Typography>
            <form
              onSubmit={handleSubmit}
              className="mt-8 mb-2 max-w-screen-lg w-96"
            >
              <div className="mb-4 flex flex-col gap-6">
                <Input
                  onChange={(e) => setEtablissement(e.target.value)}
                  value={etablissement}
                  color="orange"
                  size="lg"
                  label="Etablissement"
                />
              </div>
              <Button
                type="submit"
                color="orange"
                className="mt-6 bg-main flex items-center gap-10 justify-center"
                fullWidth
              >
                Editer {loading && <Spinner color="amber" />}
              </Button>
            </form>
          </Card>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
