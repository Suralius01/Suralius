import { FaInstagramSquare, FaTelegram, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--background))] mt-5 py-5 border-t-2 border-dotted">
      <div>
        <h2 className="font-semibold text-lg">👨‍💻 Get in Touch</h2>
        <p>You can contact me through various channels.</p>
      </div>
      <div className="flex flex-row gap-2 my-3 text-2xl">
        <a href="https://www.instagram.com/surafel.sunara">
          <FaInstagramSquare />
        </a>
        <a href="https://wa.me/251978584038">
          <FaWhatsapp />
        </a>
        <a href="https://t.me/SUR4FE1">
          <FaTelegram />
        </a>
        <a href="suralius1@gmail.com">
          <FaEnvelope />
        </a>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
