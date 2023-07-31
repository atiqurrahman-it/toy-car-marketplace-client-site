import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { FaMapMarkerAlt,FaFacebookF,FaGithub, FaPhoneAlt, FaMailBulk ,FaLinkedinIn} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-[#202325] text-white">
        <div className="space-y-2">
          <img src={logo} alt="" />
          <p>
            KidzCarLand
            <br />
            <br />
            KidzCarLand Marketplace - Where Little Wheels Lead to Big
            Adventures!
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">custom design</a>
        </div>
        <div>
          <span className="footer-title">Contact us</span>
          <a>
            <FaMapMarkerAlt className="inline-block me-1" /> 1207
            Street,Adabor,Dhaka,Bangladesh
          </a>
          <a className="link link-hover">
            <FaPhoneAlt className="inline-block  me-1" /> +880 1712 345678
          </a>
          <a className="link link-hover">
            <FaMailBulk className="inline-block me-2" /> info@kidzcarland.com
          </a>
        </div>
        <div>
          <span className="footer-title">Connect with us</span>
          <div className="grid grid-cols-3 gap-4 md:place-self-center md:justify-self-end">
            <Link to={'https://www.linkedin.com/in/atiqur-cse/'} rel="noreferrer" target={'_blank'}  >
              <FaLinkedinIn fontSize="1.5em" />
            </Link>
            <Link to={"https://github.com/atiqurrahman-it"} rel="noreferrer" target={'_blank'} >
             <FaGithub fontSize="1.5em"/>
            </Link>
            <Link to={'https://www.facebook.com/'} rel="noreferrer" target={'_blank'}>
            <FaFacebookF fontSize="1.5em"  />
            </Link>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center p-4 bg-[#121415] text-warning ">
        <div>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            KidzCarLand
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
