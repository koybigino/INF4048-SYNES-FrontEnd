import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import account from "../../assets/img/account.png";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  CardFooter,
  Avatar,
  Tooltip,
  Spinner,
  Alert,
} from "@material-tailwind/react";
import CreateUser from "../createuser/CreateUser";
import EditUser from "../../modules/dashboard/pages/profile/EditUser";
import EditUser from "../edituser/EditUser";
import ConfirmDelete from "../confirm/ConfirmDelete";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  storeHeadTableSections,
  storeToken,
  storeTokenType,
} from "../../stores/storeAtoms";
import {
  ExclamationTriangleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { storeGetAllSection } from "../../stores/storeSelector";
import EditSection from "../editsection/EditSection";
import CreateSection from "../createsection/CreateSection";
import UserFilter from "../usersfilter/UserFilter";
import { deleteData, getData } from "../../config/apiFunctions";
import SpinnerDashboard from "../spinner/SpinnerDashboard";

export default function ActiviteList() {
  const TABLE_HEAD = useRecoilValue(storeHeadTableSections);
  const items = useRecoilValue(storeGetAllSection);
  const getSections = items.items;

  const [TABLE_ROWS, setTableRows] = useState(getSections);
  const [showAlertSucess, setShowAlertSucess] = useState(false);
  const [showAlertDanger, setShowAlertDanger] = useState(false);
  const token = useRecoilValue(storeToken);
  const tokenType = useRecoilValue(storeTokenType);

  const handleChange = (e) => {
    e.preventDefault();

    const searchSections = getSections.filter((user) => {
      if (user.nom.includes(e.target.value)) return user;
    });

    setTableRows(searchSections);
  };

  const deleteSection = (id) => {
    deleteData(`/section/${id}`, token, tokenType);

    setTableRows(null);

    getData("/section/all", token, tokenType).then((res) => {
      setTableRows(res.items);
    });
  };

  return (
    <>
      <Card className="h-full w-full">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none h-auto"
        >
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <Typography variant="h5" color="blue-gray">
                Liste des Sections
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Voir les informations sur les différents Sections
              </Typography>
              <div className="mx-10 mb-2">
                <Alert
                  color="red"
                  icon={<ExclamationTriangleIcon className="h-6 w-6" />}
                  open={showAlertDanger}
                  setOpen={setShowAlertDanger}
                >
                  Erreur lors de la supression du Section !
                </Alert>
                <Alert
                  color="green"
                  icon={<CheckCircleIcon className="mt-px h-6 w-6" />}
                  open={showAlertSucess}
                  setOpen={setShowAlertSucess}
                >
                  Suppression du Section réussit !
                </Alert>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <CreateSection
                allSections={TABLE_ROWS}
                setTableRows={setTableRows}
              />
            </div>
          </div>
        </CardHeader>

        <div className="flex flex-col items-center justify-between mx-5 gap-4 md:flex-row">
          <div className="w-full md:w-72">
            <Input
              onChange={handleChange}
              color="orange"
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>

        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={index}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                    >
                      {head}{" "}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            {TABLE_ROWS ? (
              <tbody>
                {TABLE_ROWS.map(
                  ({ nom, date_creation, etablissement, id }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <Link to="/">
                            <div className="flex items-center gap-3">
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  Nom : {nom}
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal opacity-70"
                                >
                                  ID : {id}
                                </Typography>
                              </div>
                            </div>
                          </Link>
                        </td>
                        <td className={classes}>
                          <Link to="/">
                            <div className="w-max">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                Etablissement : {etablissement}
                              </Typography>
                            </div>
                          </Link>
                        </td>
                        <td className={classes}>
                          <Link to="/">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {date_creation}
                            </Typography>
                          </Link>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Modifier">
                            <EditSection
                              section={{
                                nom,
                                etablissement,
                                id,
                              }}
                              allsection={TABLE_ROWS}
                              setSection={setTableRows}
                            />
                          </Tooltip>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Supprimer">
                            <ConfirmDelete
                              nom={nom}
                              id={id}
                              deleteElement={deleteSection}
                            >
                              Voulez vous supprimer la section {nom}
                            </ConfirmDelete>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            ) : (
              <SpinnerDashboard />
            )}
          </table>
        </CardBody>

        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Typography variant="small" color="blue-gray" className="font-normal">
            Page 1 of 10
          </Typography>
          <div className="flex gap-2">
            <Button variant="outlined" color="blue-gray" size="sm">
              Previous
            </Button>
            <Button variant="outlined" color="blue-gray" size="sm">
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
