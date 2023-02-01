import { useState } from "react";
import { CookiesModal } from "../routes/modalRoutes";

import "../styles/index.scss";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <CookiesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  );
}

export default App;
