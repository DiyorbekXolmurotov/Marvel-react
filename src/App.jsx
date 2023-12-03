import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="layout">
      <Header/>
      <main className="layout__main">
      <Outlet/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
