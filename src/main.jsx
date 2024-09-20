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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster richColors expand position="top-center" closeButton />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
