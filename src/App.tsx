import { BrowserRouter } from "react-router-dom";
import RouteConfig from "routes/RouteConfig";
import ScrollToTop from "utils/scrollToTop";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Toaster toastOptions={{ duration: 4000 }} />
      <RouteConfig />
    </BrowserRouter>
  );
}

export default App;
