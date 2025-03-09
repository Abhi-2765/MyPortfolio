import Discord from "../assets/Discord";
import Github from "../assets/Github";
import Linkedin from "../assets/Linkedin";
import Twitter from "../assets/Twitter";

const Hero = () => {
  return (
    <div className="pl-5 h-screen flex flex-col justify-center items-start text-left space-y-4">
      
      <div className="flex flex-col space-y-0.5">
        <p className="font-spartan text-lg pl-1 text-[#64ffda]">Hi, my name is</p>
        <span className="mb-0 p-0 font-poppins text-5xl text-white leading-tight">Sai Abhirama Varma</span>
        <span className="mt-0 font-poppins text-5xl text-white leading-tight">Buddaraju</span>
      </div>

      <div>
      </div>
      
      {/* Social Links */}
      <div className="flex space-x-6 mt-6">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github/>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin/>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter/>
        </a>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <Discord/>
        </a>
      </div>
    </div>
  );
};

export default Hero;
