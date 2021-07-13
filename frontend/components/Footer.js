const Footer = () => {
  return (
    <div className="flex justify-between m-6">
      <p className="text-xs font-semibold text-gray-600">
        Copyright &copy; 2021 <a href="https://radioplusinfo.com">Radio Plus, Inc.</a>
      </p>
      <div className="flex gap-3 ml-4">
        <a href="https://twitter.com/radioplusinfo" className="max-w-xs ml-4">
          <img src="/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://www.facebook.com/Radio-Plus-Online-Bargains-102160326497490" className="ml-3">
          <img src="/facebook.svg" alt="Facebook" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
