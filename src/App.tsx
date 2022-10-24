import { BrowserRouter } from "react-router-dom";
import RouteConfig from "routes/RouteConfig";
import ScrollToTop from "utils/scrollToTop";
import LogRocket from "logrocket";
LogRocket.init("8xfukx/sanef-dev");

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteConfig />
    </BrowserRouter>
  );
}

export default App;
