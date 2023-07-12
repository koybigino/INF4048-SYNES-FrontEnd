import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  List,
  ListItem,
} from "@material-tailwind/react";

import { Fragment, useState } from "react";
import Container from "../container/Container";

export default function ActivityDetails({ activite }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="text" color="amber">
        SeeDetails
      </Button>
      <Dialog size="xxl" className="w-screen" open={open} handler={handleOpen}>
        <DialogHeader>Détails du activite</DialogHeader>
        <DialogBody className="w-full" divider>
          <Card className="flex-row justify-center w-full">
            <CardHeader
              shadow={false}
              floated={false}
              className="w-2/5 shrink-0 m-0 rounded-r-none"
            >
              <img
                src={activite?.photos[0]?.link}
                alt="image"
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="">
              <Typography variant="h6" color="blue" className="uppercase mb-4">
                NOM : {activite.titre} <br />
              </Typography>
              <Typography color="gray" className="font-normal mb-8">
                <span className="font-bold">Lieu</span> : {activite.lieu}
              </Typography>
              <Typography color="gray" className="font-normal mb-8">
                <span className="font-bold">Date de Debut</span> :{" "}
                {activite.date_debut}
              </Typography>
              <Typography color="gray" className="font-normal mb-8">
                <span className="font-bold">Date de Fin</span> :{" "}
                {activite.date_fin}
              </Typography>
              <Typography color="gray" className="font-normal mb-8">
                <span className="font-bold">Modérateur</span>
                <List>
                  {activite.moderateurs.map((m, i) => (
                    <ListItem key={i}>{m.nom}</ListItem>
                  ))}
                </List>
              </Typography>
              <Typography color="gray" className="font-normal mb-8">
                <span className="font-bold">Membre conviés</span>
                <List>
                  {activite.membre_convies.map((m, i) => (
                    <ListItem key={i}>{m.nom}</ListItem>
                  ))}
                </List>
              </Typography>
            </CardBody>
          </Card>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
