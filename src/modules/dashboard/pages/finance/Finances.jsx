import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Typography,
} from "@material-tailwind/react";
import Bien from "./pages/Bien";
import Caisse from "./pages/Caisse";
import Contribution from "./pages/Contribution";
import Depense from "./pages/Depense";
import Fond from "./pages/Fond";
import Container from "../../../../components/container/Container";

export default function Finances() {
  const data = [
    {
      label: "Bien",
      value: "bien",
    },
    {
      label: "Caisse",
      value: "caisse",
    },
    {
      label: "Contribution",
      value: "contribution",
    },
    {
      label: "Depense",
      value: "depense",
    },
    {
      label: "Fond",
      value: "fond",
    },
  ];

  return (
    <Container>
      <Typography className="mb-5" variant="h2">
        Gestion des Finances
      </Typography>
      <Tabs value="finance">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="relative">
          {data.map(({ value }) => (
            <TabPanel key={value} value={value}>
              {value === "bien" && <Bien />}
              {value === "caisse" && <Caisse />}
              {value === "depense" && <Depense />}
              {value === "contribution" && <Contribution />}
              {value === "fond" && <Fond />}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </Container>
  );
}
