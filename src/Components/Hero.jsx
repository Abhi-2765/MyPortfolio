import Discord from "../assets/Discord";
import Github from "../assets/Github";
import Linkedin from "../assets/Linkedin";
import Twitter from "../assets/Twitter";

const Hero = ({ mobile }) => {
  return (
    <div className="pl-5 h-screen flex flex-col justify-center items-start text-left space-y-4 relative">
      
      <div className="flex flex-col space-y-0.5">
        <p className="font-spartan text-lg pl-1 text-[#64ffda]">Hi, my name is</p>
        <span className="mb-0 p-0 font-poppins text-5xl text-white leading-tight">Sai Abhirama Varma</span>
        <span className="mt-0 font-poppins text-5xl text-white leading-tight">Buddaraju</span>
      </div>

      <div>
        <a 
          href="https://drive.google.com/file/d/1hHA5M_peAuccWuwrbPtlh2nS9YNFGdEC/view" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 inline-block px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] font-medium text-sm leading-tight rounded hover:bg-[#64ffda] hover:bg-opacity-10 hover:text-black focus:outline-none focus:ring-2 focus:ring-[#64ffda] transition duration-300 ease-in-out"
        >
          My Resume
        </a>
      </div>
      
      {/* Social Links */}
      <div className="flex space-x-6 mt-6">
        <a href="https://github.com/Abhi-2765" target="_blank" rel="noopener noreferrer">
          <Github />
        </a>
        <a href="https://www.linkedin.com/in/saiabhiramavarmabuddaraju/" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
        <a href="https://x.com/Abhiram1326848?t=2tebbkH1FS9KlIMhoxDAsw&s=09" target="_blank" rel="noopener noreferrer">
          <Twitter />
        </a>
        <a href="https://discord.com/users/abhi_2765" target="_blank" rel="noopener noreferrer">
          <Discord />
        </a>
      </div>

      {/* Blinking Scroll Down Animation (Only on Mobile) */}
      {mobile && (
        <div className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-white text-sm 
                        animate-pulse opacity-80">
          Scroll Down
        </div>
      )}
    </div>
  );
};

export default Hero;
