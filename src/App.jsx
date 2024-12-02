import {BrowserRouter, Route, Routes} from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee.jsx";
import ViewEmployee from "./pages/ViewEmployee.jsx";
import Page404 from "./pages/error/Page404.jsx";
function App() {

  return (
      <BrowserRouter>
          <Routes>
              <Route path="*" element={<Page404 />} />
              <Route path="/" element={<CreateEmployee />} />
              <Route path="/employee-list" element={<ViewEmployee />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
