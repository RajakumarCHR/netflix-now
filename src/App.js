import { RouterProvider } from "react-router-dom";
import appRouter from "./routes/appRouter";
import Layout from "./layout/Layout";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <RouterProvider router={appRouter} />
      </Layout>
    </>
  );
}

export default App;
