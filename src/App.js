import Agents from "./components/Agents";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Weapons from "./components/Weapons";
import Maps from "./components/Maps";
import { WeaponsContextProvider } from "./contexts/WeaponsContext";
import { AgentsContextProvider } from "./contexts/AgentsContext";
import { MapsContextProvider } from "./contexts/MapsContext";

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
  return (
    <AgentsContextProvider>
      <WeaponsContextProvider>
        <MapsContextProvider>
          <RouterProvider router={router} />
        </MapsContextProvider>
      </WeaponsContextProvider>
    </AgentsContextProvider>
  );
}

export default App;
