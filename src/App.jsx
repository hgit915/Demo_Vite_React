import { useRoutes } from "react-router-dom";
import routes from "./router";
import List from "components/Layout/index";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/Error";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Header count="1090" test={999999} />
        <div className="page">{useRoutes(routes)}</div>
        <ul>
          <List />
        </ul>
        <Footer />
      </ErrorBoundary>
    </>
  );
}

export default App;
