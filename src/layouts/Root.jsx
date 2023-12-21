import Navbar from "../components/Home/NavBar";
import Footer from "../components/Global/Footer";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="grid h-screen grid-rows-[0.12fr_1fr_auto]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
