/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import img1 from "../../assets/banner1.jpg";
import { Link } from "react-router-dom";
import { FaHandPointRight } from "react-icons/fa";

function Banner() {
  return (
    <div>
      <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-[80vh] w-screen"
        src={img1}
        alt="banner"
      />

      <Link to="signin">
        <motion.button
          whileHover={{ scale: 1.1, boxShadow: "0 0 8px" }}
          className="absolute bottom-[150px] left-1/3 flex items-center bg-amber-700 text-white px-6 py-2 rounded-md"
        >
          Let's Explore <FaHandPointRight className="ml-2" />
        </motion.button>
      </Link>
    </div>
  );
}

export default Banner;
