import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Github from "./apps/github/page.tsx";
import Kanban from "./apps/kanban/page.tsx";
import Catalog from "./apps/catalog/page.tsx";
import FormBuilder from "./apps/form/page.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/github" element={<Github />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/formbuilder" element={<FormBuilder />} />        
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
