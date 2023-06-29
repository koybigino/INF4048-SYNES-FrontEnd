import { Fragment, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogFooter,
  IconButton,
  Spinner,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  storeAllUser,
  storeToken,
  storeTokenType,
} from "../../stores/storeAtoms";
import axios from "../../config/axios";

export default function ConfirmDelete({
  nom,
  id,
  allUser,
  setShowAlertDanger,
  setShowAlertSucess,
  children,
  setAllUsers,
}) {
  const [open, setOpen] = useState(false);
  const token = useRecoilValue(storeToken);
  const tokenType = useRecoilValue(storeTokenType);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => setOpen(!open);

  const deleteUser = () => {
    let users = allUser.filter((u) => {
      if (id != u.id) {
        return u;
      }
    });

    console.log(allUser);

    setLoading(true);

    axios
      .delete(`/user`, {
        params: {
          id,
        },
        headers: {
          Authorization: `${tokenType} ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setShowAlertSucess(true);
        setAllUsers(users);

        setTimeout(() => {
          setShowAlertSucess(false);
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        handleOpen();
        setShowAlertDanger(true);

        setTimeout(() => {
          setShowAlertDanger(false);
        }, 5000);
      });
  };

  return (
    <Fragment>
      <IconButton onClick={handleOpen} variant="text" color="blue-gray">
        <TrashIcon color="red" className="h-4 w-4" />
      </IconButton>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>
          {children} {nom}
        </DialogHeader>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            onClick={deleteUser}
            className="bg-orange-500 flex text-white items-center justify-center gap-10 hover:bg-orange-500"
            variant="text"
            color="orange"
          >
            <span>Confirm</span> {loading && <Spinner />}
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
  );
}
