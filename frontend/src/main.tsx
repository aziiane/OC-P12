import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { Provider } from "./components/ui/provider.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/homepage.tsx";
import ProfilePage from "./pages/profilepage.tsx";
import NotFound from "./pages/notFound.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="/profil" element={<ProfilePage />} />
          <Route path="/profil/:id" element={<ProfilePage />} />
          <Route path="/404" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
