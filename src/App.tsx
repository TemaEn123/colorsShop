import { RouterProvider } from "react-router-dom";
import { router } from "./components/routes/AppRouter";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
