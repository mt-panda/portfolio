import { TiSocialLinkedin } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient text-white px-16 py-2 selection">
      <div className="flex-center justify-between">
        {/* left side of the footer */}
        <div className="flex-center gap-2">
          <p>&copy;{new Date().getFullYear()}</p>
          <p>Muhammad Tahir.</p>
        </div>

        {/* center of the footer */}
        <div className="flex gap-2 items-center">
          <img src="/images/active.png" alt="" className="h-4" />
          <p>Available for work</p>
        </div>

        {/* right side of the footer */}
        <div className="flex gap-2 items-center">
          <p>Made with</p>
          <img src="/images/love.png" alt="" className="h-4" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
