import { BrowserRouter } from "react-router-dom";
import RouteConfig from "routes/RouteConfig";
import ScrollToTop from "utils/scrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteConfig />
    </BrowserRouter>
  );
}

export default App;
