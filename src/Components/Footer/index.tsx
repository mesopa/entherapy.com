function Footer(): JSX.Element {
  return (
    <footer className="py-8 bg-secondary-500 border-t border-secondary-200">
      <div className="container mx-auto px-4">
        <div className="md:flex justify-between">
          <div className="md:flex-auto text-sm font-light text-white copyright">
            Copyright © 2018 E<span className="text-primary-500">N</span>THERAPY
          </div>

          <nav className="md:flex-auto -mx-2 font-zh text-sm font-light text-white icp">
            <a
              className="mx-2 text-secondary-100 hover:text-secondary-200"
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011202006369"
              target="_blank"
              rel="nofollow noreferrer"
            >
              沪公网安备 31011202006369号
            </a>
            <a
              className="mx-2 text-secondary-100 hover:text-secondary-200"
              href="http://beian.miit.gov.cn/"
              target="_blank"
              rel="nofollow noreferrer"
            >
              沪ICP备17000915号-2
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
