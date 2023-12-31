import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { useRecoilValue } from "recoil";
import { storeGetAllBiens } from "../../../stores/storeSelector";
import BienDetail from "../../../components/biendetails/BienDetails";

export default function Main() {
  const items = useRecoilValue(storeGetAllBiens);
  const biens = items.items;
  return (
    <>
      <div className=" h-screen w-screen ">
        <div className="h-1/2 bg-banner bg-cover bg-blend-overlay bg-center backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full text-white">
            <h1 className="text-5xl font-bold">Biens du Synes</h1>
            <p className="text-2xl">
              Tout bien du Synes listé contribue à la bonne marche du groupe.
            </p>
          </div>
          <div className="mt-12 mb-40 gap-10 grid grid-cols-1 lg:grid-cols-2 justify-center items-center w-full p-16">
            {biens.map(
              (
                {
                  id,
                  nom,
                  description,
                  valeur_marchande,
                  section,
                  photos,
                  date_creation,
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
                          Nom : {nom}
                        </Typography>
                        <Typography>
                          Valeur marchante : {valeur_marchande}
                        </Typography>
                        <Typography>
                          Date d'obtention : {date_creation}
                        </Typography>
                      </CardBody>
                      <CardFooter className="pt-0 mt-0">
                        <BienDetail
                          bien={{
                            id,
                            nom,
                            description,
                            valeur_marchande,
                            section,
                            photos,
                            date_creation,
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
