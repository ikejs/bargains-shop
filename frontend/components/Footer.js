const Footer = () => {
  return (
    <div className="flex justify-between m-6">
      <p className="text-xs font-semibold text-gray-600">
        Copyright &copy; {`${new Date().getFullYear()} `}
        <a href="https://radioplusinfo.com" target="_blank">
          Radio Plus, Inc.
        </a>
      </p>
      <a
        href="mailto:laurie@wfdl.com"
        className="max-w-xs text-xs font-semibold text-gray-600"
      >
        Contact Us
      </a>
      <div className="flex gap-3 ml-4">
        <a
          href="https://twitter.com/radioplusinfo"
          target="_blank"
          className="max-w-xs ml-4"
        >
          <img src="/twitter.svg" alt="Twitter" />
        </a>
        <a
          href="https://www.facebook.com/Radio-Plus-Online-Bargains-102160326497490"
          target="_blank"
          className="ml-3"
        >
          <img src="/facebook.svg" alt="Facebook" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
