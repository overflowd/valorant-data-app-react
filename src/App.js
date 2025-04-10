import Agents from "./components/Agents";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Weapons from "./components/Weapons";
import Maps from "./components/Maps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Agents /> },
      { path: "weapons", element: <Weapons /> },
      { path: "maps", element: <Maps /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
