import { UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  Input,
  Typography,
  Popover,
  PopoverHandler,
  PopoverContent,
  Select,
  Option,
} from "@material-tailwind/react";

import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
} from "@material-tailwind/react";

import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

export default function CreateUser() {
  const data = [
    {
      label: "Créer un nouvel etablissement",
      value: "create",
      desc: <Input color="orange" size="lg" label="Etablissement" />,
    },
    {
      label: "Selectionner un etablissemnt",
      value: "select",
      desc: <Select color='orange' className='z-50' label="choisir un etablissement">
            <Option>Etablissement I</Option>
            <Option>Etablissement II</Option>
            <Option>Etablissement III</Option>
            <Option>Etablissement IV</Option>
          </Select>,
    },
  ];

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
          <Typography variant="h4" color="blue-gray">
            Création d'un membre
          </Typography>
        </DialogHeader>
        <DialogBody className="flex items-center justify-center h-[40rem] overflow-scroll" divider>
          <Card color="transparent" shadow={false}>
            <Typography color="gray" className="mt-1 font-normal">
              Entrer les détails pour créer un utilisateur
            </Typography>
            <form className="mt-8 mb-2 max-w-screen-lg w-fit">
              <div className="mb-4 flex flex-col gap-6">
                <Input color="orange" size="lg" label="Name" />
                <Input color="orange" size="lg" label="Email" />
                <Input color="orange" size="lg" label="Maticule" />
                <Tabs value="html">
                  <TabsHeader>
                    {data.map(({ label, value }) => (
                      <Tab className="w-fit" key={value} value={value}>
                        {label}
                      </Tab>
                    ))}
                  </TabsHeader>
                  <TabsBody>
                    {data.map(({ value, desc }) => (
                      <TabPanel key={value} value={value}>
                        {desc}
                      </TabPanel>
                    ))}
                  </TabsBody>
                </Tabs>
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
