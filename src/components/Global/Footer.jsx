import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdRocket } from "react-icons/io";

function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-t-slate-100 bg-slate-800 text-slate-200 p-6 flex flex-col items-center text-center">
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://www.facebook.com/naimul.abeer"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaFacebook className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/naimul-haq-abeer-5b3a311bb/"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaLinkedin className="icon" />
        </a>
        <a
          href="https://github.com/naimulabeer"
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <FaGithub className="icon" />
        </a>
      </div>
      <div className="mb-4">
        <span className="" onClick={handleScrollToTop}>
          <IoMdRocket className="text-3xl cursor-pointer" />
        </span>
      </div>
      <div>
        <span>&copy; Task Trello 2023</span>
      </div>
    </footer>
  );
}

export default Footer;
