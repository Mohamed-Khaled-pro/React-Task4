import { Route, Routes } from "react-router";
import Nav from "./Components/Nav";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Documentation from "./Pages/Documentation";
import Actions from "./Components/Nested/Actions";
import DataLoading from "./Components/Nested/DataLoading";
import Rendering from "./Components/Nested/Rendering";
import Testing from "./Components/Nested/Testing";
import Deploying from "./Components/Nested/Deploying";
import Installation from "./Components/Nested/Installation";
import Navigating from "./Components/Nested/Navigating";
function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documentation" element={<Documentation />}>
            <Route path="actions" element={<Actions />} />
            <Route path="dataloading" element={<DataLoading />} />
            <Route path="rendering" element={<Rendering />} />
            <Route path="testing" element={<Testing />} />
            <Route path="deploying" element={<Deploying />} />
            <Route index path="installation" element={<Installation />} />
            <Route index element={<Installation />} />
            <Route path="navigating" element={<Navigating />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
