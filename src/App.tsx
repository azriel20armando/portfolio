import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home";

import { Portfolio } from "./pages/portfolio";
import { Certificacoes } from "./pages/certifications";
import { Servicos } from "./pages/servicos";
import { Competencias } from "./pages/competencias";
import { Trilha } from "./pages/trilha";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/servicos/:serviceId",
    element: <Servicos />,
  },
  {
    path: "/competencias/:competenciasId",
    element: <Competencias />,
  },
  {
    path: "/portfolio/:portfolioId",
    element: <Portfolio />,
  },
  {
    path: "/trilha/:trilhaId",
    element: <Trilha />,
  },
  {
    path: "/certificacoes/:certificacoesId",
    element: <Certificacoes />
  },


]);


export function App() {
  return (
    <RouterProvider router={router} />
  );
}