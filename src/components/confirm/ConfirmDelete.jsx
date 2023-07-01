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

export default function ConfirmDelete({ nom, id, children, deleteElement }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClick = async (id) => {
    setLoading(true);
    console.log(id);
    deleteElement(id).then(() => {
      setLoading(false);
      handleOpen();
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
            onClick={() => handleClick(id)}
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
