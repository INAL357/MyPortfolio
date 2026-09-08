import LikedIn from "../../assets/image.png";
import Github from "../../assets/images.png";
import Mail from "../../assets/Mail.png"
import {useNavigate} from 'react-router-dom'
const Navbar = ({onContactClick, onProjectsClick, onEducation}) => {
  const navigate = useNavigate();
  const handleCertificateNavClick =(path)=>{
      navigate(path)
  }
  return (
    <nav className="w-full bg-[#0b1120] border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex items-center justify-between">

          <a
            href="/"
            className="text-xl font-bold tracking-wide whitespace-nowrap"
          >
            <span className="text-green-500">&lt;I/&gt;</span>{" "}
            <span className="text-white">INAL MENDONCA</span>
          </a>

       
          <div className="hidden lg:flex items-center gap-7">
            <a
              href="/"
              className="text-blue-600 font-medium transition hover:text-cyan-400"
            >
              Home
            </a>

            <button onClick={()=>handleCertificateNavClick("/certificates")}
              
              className="text-slate-300 transition hover:text-cyan-400"
            >
              certifications
            </button>

            <a
              href="#skills"
              className="text-slate-300 transition hover:text-cyan-400"
            >
              Skills
            </a>

            <button onClick={onEducation}
              href="#education"
              className="text-slate-300 transition hover:text-cyan-400"
            >
              Education
            </button>

            <button type="button" onClick={onProjectsClick}
              href="#Projects"
              className="text-slate-300 transition hover:text-cyan-400"
            >
              Projects
            </button>

            <button type="button" onClick={onContactClick} 
              // href="#contact"
              className="text-slate-300 transition hover:text-cyan-400"
            >
              Contact
            </button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">

             <a
    href="https://github.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      group relative flex items-center gap-2
      overflow-hidden
      rounded-lg
      border border-slate-700
      bg-slate-900
      px-4 py-2
      text-sm font-medium text-slate-300
      transition-all duration-300
      hover:-translate-y-1
      hover:border-transparent
      hover:text-white
      before:absolute
      before:inset-x-0
      before:top-full
      before:h-full
      before:bg-[#333]
      before:transition-all
      before:duration-500
      before:content-['']
      hover:before:top-0
    "
  >
    <img
      src={Github}
      alt="GitHub"
      className="
        relative z-10
        h-5 w-5
        object-contain
        transition-transform duration-500
        group-hover:rotate-y-360
      "
    />

    <span className="relative z-10">
      GitHub
    </span>
            </a>

            <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group relative flex items-center gap-2
              overflow-hidden
              rounded-lg
              border border-slate-700
              bg-slate-900
              px-4 py-2
              text-sm font-medium text-slate-300
              transition-all duration-300
              hover:-translate-y-1
              hover:border-transparent
              hover:text-white
              before:absolute
              before:inset-x-0
              before:top-full
              before:h-full
               before:bg-[#099cf7]
              before:transition-all
              before:duration-500
              before:content-['']
              hover:before:top-0
            "
          >
            <img
              src={LikedIn}
              alt="LinkedIn"
              className="
                relative z-10
                h-5 w-5
                object-contain
                transition-transform duration-500
                group-hover:rotate-y-360
              "
            />

            <span className="relative z-10">
              LinkedIn
            </span>
            </a>

            <a  href="mailto:yourname@gmail.com"
            className="
              group relative flex items-center gap-2
              overflow-hidden rounded-lg
              border border-slate-700
              bg-slate-900
              px-4 py-2
              text-sm font-medium text-slate-300
              transition-all duration-300
              hover:-translate-y-1
              hover:border-transparent
              hover:text-white

              before:absolute
              before:inset-x-0
              before:top-full
              before:h-full
              before:bg-[#ea4335]
              before:transition-all
              before:duration-500
              before:content-['']
              hover:before:top-0
            "
          >
 
            <img
                
                src={Mail}
                alt="Gamil"
                 className="
                relative z-10
                h-5 w-5
                object-contain
                transition-transform duration-500
                group-hover:rotate-y-360
              "
              />
              <span  className="relative z-10">
                Mail
              </span></a>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;