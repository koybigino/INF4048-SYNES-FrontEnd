import { Spinner } from "@material-tailwind/react";
import React from "react";

export default function SpinnerDashboard() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Spinner className="h-20 w-20" color="amber" />
    </div>
  );
}
