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
