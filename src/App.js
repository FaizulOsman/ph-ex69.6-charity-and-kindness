import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./Routes/Router";

function App() {
  return (
    <div className="bg-neutral min-h-screen">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
