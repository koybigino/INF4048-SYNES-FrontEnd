import { Card, IconButton, Input, Typography } from "@material-tailwind/react";

import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";
import { PencilIcon } from "@heroicons/react/24/outline";

export default function EditUser() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <Fragment>
      <IconButton
        onClick={handleOpen}
        variant="text"
        color="blue-gray"
      >
        <PencilIcon className="h-4 w-4" />
      </IconButton>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          <Typography variant="h4" color="blue-gray">
            Modifier le membre
          </Typography>
        </DialogHeader>
        <DialogBody className="flex items-center justify-center" divider>
          <Card color="transparent" shadow={false}>
            <Typography color="gray" className="mt-1 font-normal">
              Entrer les détails pour modifier un utilisateur
            </Typography>
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
              <div className="mb-4 flex flex-col gap-6">
                <Input color="orange" size="lg" label="Name" />
                <Input color="orange" size="lg" label="Email" />
                <Input color="orange" size="lg" label="Maticule" />
                <Input
                  color="orange"
                  size="lg"
                  label="Etablissement"
                />
              </div>
              <Button color="orange" className="mt-6 bg-main" fullWidth>
                Créer
              </Button>
            </form>
          </Card>
        </DialogBody>
      </Dialog>
    </Fragment>
  );
}
