import { useRoutes } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./components/NavBar";
import Maps from "./routes/Map";
import SignupPage from "./routes/Signup";
import LoginPage from "./routes/Login";
import { Box } from "@mui/material";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/map",
      element: <Maps />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ]);

  return (
    <Box>
      <NavBar />
      {routes}
    </Box>
  );
}

export default App;
