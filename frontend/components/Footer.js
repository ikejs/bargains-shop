import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="mb-6 mt-20">
      <div className="glass-panel flex flex-col items-center justify-between gap-4 px-6 py-5 sm:flex-row">
        <p className="text-xs text-indigo-100/60">
          Copyright &copy; {`${new Date().getFullYear()} `}
          <a
            href="https://radioplusinfo.com"
            target="_blank"
            rel="noreferrer"
            className="font-semibold transition-colors hover:text-white"
          >
            Radio Plus, Inc.
          </a>
        </p>
        <a
          href="mailto:support@rpbargains.com"
          className="text-xs font-semibold text-indigo-100/60 transition-colors hover:text-white"
        >
          Contact Us
        </a>
        <div className="flex gap-2">
          <a
            href="https://twitter.com/radioplusinfo"
            target="_blank"
            rel="noreferrer"
            aria-label="Radio Plus on X (Twitter)"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-indigo-200 transition-all duration-300 hover:bg-[#1f2aff]/25 hover:text-white hover:shadow-[0_0_20px_rgba(31,42,255,0.4)]"
          >
            <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" />
          </a>
          <a
            href="https://www.facebook.com/Radio-Plus-Online-Bargains-102160326497490"
            target="_blank"
            rel="noreferrer"
            aria-label="Radio Plus Online Bargains on Facebook"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-indigo-200 transition-all duration-300 hover:bg-[#1f2aff]/25 hover:text-white hover:shadow-[0_0_20px_rgba(31,42,255,0.4)]"
          >
            <FontAwesomeIcon icon={faFacebookF} className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
