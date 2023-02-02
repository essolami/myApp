import { useState } from "react";
import "../styles/index.scss";
import { CookiesModal } from "../routes/modalRoutes";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    // <Icons.SpotifyIcon />
    <CookiesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  );
}

export default App;
