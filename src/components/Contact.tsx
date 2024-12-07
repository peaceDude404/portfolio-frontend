import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";

interface ContactProps {
  contactRef: React.RefObject<HTMLDivElement>;
}

const Contact = ({ contactRef }: ContactProps) => {
  return (
    <div className="contact" ref={contactRef}>
      <div className="form-container">
        <form className="contact-form">
          <div className="mb-3">
            <label className="form-label text-light">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-light">Message</label>
            <textarea
              className="form-control"
              id="exampleInputMessage"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-light">
            Submit
          </button>
        </form>
      </div>
      <footer className="footer">
        <a
          href="https://www.linkedin.com/in/aman-singh-1a1469197/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} className="icon" />
        </a>

        <a href="https://github.com/peaceDude404" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="icon" />
        </a>
        <a
          href="https://leetcode.com/u/leemtcoder/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode size={30} className="icon" />
        </a>
        <a
          href="https://www.codechef.com/users/code_hyper123"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiCodechef size={30} className="icon" />
        </a>
        <a
          href="https://codeforces.com/profile/pEacE_dudE404"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiCodeforces size={30} className="icon" />
        </a>
      </footer>
    </div>
  );
};

export default Contact;
