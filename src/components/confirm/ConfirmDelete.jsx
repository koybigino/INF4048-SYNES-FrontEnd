import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
  IconButton,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRecoilState } from "recoil";
import { storeAllUser } from "../../stores/storeAtoms";

export default function ConfirmDelete({nom, id, setShowAlertDanger, setShowAlertSucess}) {
  const [open, setOpen] = useState(false);
  const [allUser, setAllUsers] = useRecoilState(storeAllUser);

  const handleOpen = () => setOpen(!open);

  const deleteUser = () => {
    handleOpen()
    let users = allUser.filter((u) => {
      if(id != u.id){
        return u;
      }
    });

    setAllUsers(users);

    setShowAlertSucess(true)

    setTimeout(() => {
      setShowAlertSucess(false)
    }, 5000);
  }

  return (
    <Fragment>
      <IconButton onClick={handleOpen} variant="text" color="blue-gray">
        <TrashIcon color="red" className="h-4 w-4" />
      </IconButton>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Voulez vous supprimer le membre {nom}</DialogHeader>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button onClick={deleteUser} className="bg-orange-500 text-white hover:bg-orange-500" variant="text" color="orange">
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
