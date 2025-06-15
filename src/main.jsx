import "../i18n";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LegalPage from "./pages/legal/legal";
import CookiesPage from "./pages/legal/cookies";
import LOPDPage from "./pages/legal/lopd";
import LayoutLegal from "./pages/legal/layout";
import InsuranceInfoPage from "./pages/insurance-info/insurance-info";
import { Toaster } from "sonner";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import LayoutCampaigns from "./pages/campaigns/layout";
import VetPage from "./pages/campaigns/asisa-asisencia-veterinaria";
import AsisaOcaso from "./pages/campaigns/asisa-ocaso";
import OfertasPromocionesPage from "./pages/campaigns/ofertas-promociones";
import AsisaInternational from "./pages/campaigns/asisa-international.jsx";
import AsisaVida from "./pages/campaigns/asisa-vida.jsx";
import AsisaTravel from "./pages/campaigns/asisa-travel.jsx";
import AsisaMascotas from "./pages/campaigns/asisa-mascotas.jsx";

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
  {
    path: "politica-de-proteccion-de-datos",
    element: (
      <LayoutLegal>
        <LOPDPage />
      </LayoutLegal>
    ),
  },
  {
    path: "campaigns/asisa-international",
    element: (
      <LayoutCampaigns>
        <AsisaInternational />
      </LayoutCampaigns>
    ),
  },
  {
    path: "campaigns/asisa-vida",
    element: (
      <LayoutCampaigns>
        <AsisaVida />
      </LayoutCampaigns>
    ),
  },
  {
    path: "campaigns/asisa-travel",
    element: (
      <LayoutCampaigns>
        <AsisaTravel />
      </LayoutCampaigns>
    ),
  },
  {
    path: "campaigns/asisa-mascotas",
    element: (
      <LayoutCampaigns>
        <AsisaMascotas />
      </LayoutCampaigns>
    ),
  },
  {
    path: "campaigns/asisa-ocaso",
    element: (
      <LayoutCampaigns>
        <AsisaOcaso />
      </LayoutCampaigns>
    ),
  },
  {
    path: "campaigns/asisa-asistencia-veterinaria",
    element: (
      <LayoutCampaigns>
        <VetPage />
      </LayoutCampaigns>
    ),
  },
  {
    path: "campaigns/ofertas-promociones",
    element: (
      <LayoutCampaigns>
        <OfertasPromocionesPage />
      </LayoutCampaigns>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey="6LfA8EsqAAAAALopUdPk3VpBJYxNsRVNY7WFlUOf">
      <Toaster richColors expand position="top-center" closeButton />
      <RouterProvider router={router}></RouterProvider>
    </GoogleReCaptchaProvider>
  </StrictMode>
);
