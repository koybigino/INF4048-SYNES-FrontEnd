import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useRecoilValue } from "recoil";
import { storeGetAllActivite } from "../../stores/storeSelector";
import BienDetail from "../biendetails/BienDetails";
import ActivityDetails from "../biendetails/ActivityDetails";

export default function ShowActivity() {
  const items = useRecoilValue(storeGetAllActivite);
  const activites = items.items;
  return (
    <>
      <div className=" h-screen w-screen ">
        <div className="h-1/2 bg-banner bg-cover bg-blend-overlay bg-center backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-5xl font-bold">Activités du Synes</h1>
            <p className="text-2xl">
              Toute Activité du Synes listé contribue à la bonne marche du groupe.
            </p>
          </div>
          <div className="mt-12 mb-40 gap-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full p-16">
            {activites.map(
              (
                {
                  id,
                  date_creation,
                  titre,
                  lieu,
                  date_debut,
                  date_fin,
                  createur,
                  photos,
                  membre_convies,
                  moderateurs,
                },
                index
              ) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center mx-auto"
                  >
                    <Card className="mt-6 w-96">
                      <CardHeader color="blue-gray" className="relative h-56">
                        <img
                          src={photos.length > 0 ? photos[0].link : ""}
                          alt="img-blur-shadow"
                          className="duration-300 ease-in-out hover:scale-105"
                          layout="fill"
                        />
                      </CardHeader>
                      <CardBody className="mb-0">
                        <Typography
                          variant="h5"
                          color="blue-gray"
                          className="mb-2"
                        >
                          Titre : {titre}
                        </Typography>
                        <Typography>
                          Lieux : {lieu}
                        </Typography>
                        <Typography>
                          Date  : {date_fin}
                        </Typography>
                      </CardBody>
                      <CardFooter className="pt-0 mt-0">
                        <ActivityDetails
                          activite={{
                            id,
                            date_creation,
                            titre,
                            lieu,
                            date_debut,
                            date_fin,
                            createur,
                            photos,
                            membre_convies,
                            moderateurs,
                          }}
                        />
                      </CardFooter>
                    </Card>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
}
