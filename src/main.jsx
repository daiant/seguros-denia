import "../i18n";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LegalPage from "./legal/legal";
import CookiesPage from "./legal/cookies";
import LOPDPage from "./legal/lopd";
import LayoutLegal from "./legal/layout";
import InsuranceInfoPage from "./insurance/insurance-info.jsx";
import { Toaster } from "sonner";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import LayoutCampaigns from "./campaigns/layout";
import VetPage from "./campaigns/asisa-asisencia-veterinaria";
import AsisaOcaso from "./campaigns/asisa-ocaso";
import OfertasPromocionesPage from "./campaigns/ofertas-promociones";
import AsisaInternational from "./campaigns/asisa-international.jsx";
import AsisaVida from "./campaigns/asisa-vida.jsx";
import AsisaTravel from "./campaigns/asisa-travel.jsx";
import AsisaMascotas from "./campaigns/asisa-mascotas.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "insurance",
    element: <InsuranceInfoPage />,
  },
  {
    path: "aviso-legal",
    element: (
      <LayoutLegal>
        <LegalPage />
      </LayoutLegal>
    ),
  },
  {
    path: "politica-de-cookies",
    element: (
      <LayoutLegal>
        <CookiesPage />
      </LayoutLegal>
    ),
  },
  {path: '/campaigns/asisa-international', element: (<LayoutCampaigns><AsisaInternational /></LayoutCampaigns>)},
  {path: '/campaigns/asisa-vida', element: (<LayoutCampaigns><AsisaVida /></LayoutCampaigns>)},
  {path: '/campaigns/asisa-travel', element: (<LayoutCampaigns><AsisaTravel /></LayoutCampaigns>)},
  {path: '/campaigns/asisa-mascotas', element: (<LayoutCampaigns><AsisaMascotas /></LayoutCampaigns>)},
  { path: "politica-de-proteccion-de-datos", element: ( <LayoutLegal> <LOPDPage /> </LayoutLegal> ), },
  {path: '/campaigns/asisa-international', element: (<LayoutCampaigns><AsisaInternational /></LayoutCampaigns>)},
  {path: '/campaigns/asisa-vida', element: (<LayoutCampaigns><AsisaVida /></LayoutCampaigns>)},
  {path: '/campaigns/asisa-travel', element: (<LayoutCampaigns><AsisaTravel /></LayoutCampaigns>)},
  {path: '/campaigns/asisa-mascotas', element: (<LayoutCampaigns><AsisaMascotas /></LayoutCampaigns>)},
  { path: "/campaigns/asisa-ocaso", element: ( <LayoutCampaigns> <AsisaOcaso /> </LayoutCampaigns> ), },
  { path: "campaigns/asisa-asistencia-veterinaria", element: ( <LayoutCampaigns> <VetPage /> </LayoutCampaigns> ), },
  { path: "campaigns/ofertas-promociones", element: ( <LayoutCampaigns> <OfertasPromocionesPage /> </LayoutCampaigns> ), },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6LfA8EsqAAAAALopUdPk3VpBJYxNsRVNY7WFlUOf">
      <Toaster richColors expand position="top-center" closeButton />
      <RouterProvider router={router}></RouterProvider>
    </GoogleReCaptchaProvider>
  </StrictMode>
);
