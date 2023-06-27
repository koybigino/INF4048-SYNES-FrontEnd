import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import CreateUser from "../createuser/CreateUser";
import UserFilter from "../usersfilter/UserFilter";
import EditUser from "../edituser/EditUser";
import ConfirmDelete from "../confirm/ConfirmDelete";
import { Link } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { storeAllUser, storeHeadTableUsers } from "../../stores/storeAtoms";
import { useState } from "react";

export default function UserList() {
  const TABLE_HEAD = useRecoilValue(storeHeadTableUsers);

  const [allUsers, setAllUsers] = useRecoilState(storeAllUser);

  const [TABLE_ROWS, setTableRows] = useState(allUsers);

  const handleChange = (e) => {
    e.preventDefault();

    const searchUser = allUsers.filter((user) => {
      if (user.nom.includes(e.target.value)) return user;
    });

    setTableRows(searchUser);
  };

  return (
    <Card className="h-full w-full">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none h-auto"
      >
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Liste des Membres
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Voir les informations sur les différents membres
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <CreateUser />
          </div>
        </div>
      </CardHeader>

      <div className="flex flex-col items-center justify-between mx-5 gap-4 md:flex-row">
        <UserFilter setTableRows={setTableRows} />
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
                  key={head}
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
          <tbody>
            {TABLE_ROWS.map(
              (
                {
                  nom,
                  adresse_mail,
                  age,
                  matricule,
                  section,
                  nationalite,
                  role,
                  sexe,
                  specialite,
                  phone_number,
                  photo,
                  date_creation,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={nom}>
                    <td className={classes}>
                      <Link to="/">
                        <div className="flex items-center gap-3">
                          <Avatar
                            variant="circular"
                            size="sm"
                            alt="candice wu"
                            className="border border-main p-0.5"
                            src={photo.image_link}
                          />
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
                              Email : {adresse_mail}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              Tel : {phone_number}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              Matricule : {matricule}
                            </Typography>
                          </div>
                        </div>
                      </Link>
                    </td>
                    <td className={classes}>
                      <Link to="/">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            Nationalité : {nationalite}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            Sexe : {sexe}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            Age : {age}
                          </Typography>
                        </div>
                      </Link>
                    </td>
                    <td className={classes}>
                      <Link to="/">
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {role}
                          </Typography>
                        </div>
                      </Link>
                    </td>
                    <td className={classes}>
                      <Link to="/">
                        <div className="w-max">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            Section : {section.nom}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            Spécialité : {specialite}
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
                        <EditUser />
                      </Tooltip>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Supprimer">
                        <ConfirmDelete />
                      </Tooltip>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
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
  );
}
