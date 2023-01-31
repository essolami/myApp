import { useState } from "react";
import { Header, Meals } from "./components";
import CookiesModal from "./components/UI/CookiesModal";
// import TestPage from "./pages/testPage/testPage";
import "./styles/index.scss";
function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  return (
    <>
      <Header />
      <main className="main-content">
        <Meals />
      </main>
      {/* <CookiesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </>
    // <TestPage />
  );
}

export default App;
