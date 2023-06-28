import React from "react";
import { Alert } from "@material-tailwind/react";

export default function AlertSuccess({children, open, setOpen, icon, color}) {

  return (
    <Alert
      color={color}
      open={open}
      icon={icon}
      onClose={() => setOpen(false)}
    >
      {children}
    </Alert>
  );
}
