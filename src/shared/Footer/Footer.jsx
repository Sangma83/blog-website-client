import { FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoGoogle, IoLogoPinterest } from "react-icons/io";
import { RiBehanceFill, RiLinkedinFill } from "react-icons/ri";
import pay from '../../assets/payment-icon.png';



const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-slate-700 text-white">
  <nav>
    <h6 className="footer-title text-[#faf9f8]">Importent link</h6> 
    <a className="link link-hover ">Help Center</a>
    <a className="link link-hover">Market Place</a>
    <a className="link link-hover">Author Terms</a>
    <a className="link link-hover">Licences</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">About Us</a>
  </nav> 
  <nav>
    <h6 className="footer-title text-[#fcfcfb]">Support</h6> 
    <a className="link link-hover">Home</a>
    <a className="link link-hover">Forums</a>
    <a className="link link-hover">FAQs</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Privacy Policy</a>
  </nav> 
  <nav>
    
    <h6 className="footer-title text-[#fcfbfb]">Follow Us</h6> 
    <div className="grid grid-flow-col gap-4">
      <a><GrFacebookOption className="text-2xl border-2" /></a>
      <a><IoLogoGoogle className="text-2xl border-2" /></a>
      <a><FaXTwitter className="text-2xl border-2" /></a>
      <a><RiLinkedinFill className="text-2xl border-2" /></a>
      <a><IoLogoPinterest className="text-2xl border-2" /></a>
      <a><RiBehanceFill className="text-2xl border-2" /></a>
    </div>
    <div>
    <h6 className="footer-title text-[#f8f7f6] mt-10">Payment Method</h6> 
    <img src={pay} alt="" />
    </div>
  </nav>
  
</footer>
<footer className="footer footer-center p-4 bg-slate-800 text-white border-t-2">
  <aside>
    <p>Copyright © 2024 - All right reserved by TravelTime Ltd.</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;