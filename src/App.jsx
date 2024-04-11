import { useRoutes } from "react-router-dom";
import routes from "./router";
import List from "components/Layout/index";

function App() {
  return (
    <>
      <div className="header">header</div>
      <div className="page">{useRoutes(routes)}</div>
      <div className="footer">footer</div>
      <ul>
        <List />
      </ul>
    </>
  );
}

export default App;
