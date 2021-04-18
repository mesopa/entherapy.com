import logo from '../../Assets/images/entherapy-logo-orange-white-inline.svg';

function NavigationBar(): JSX.Element {
  return (
    <div className="fixed top-0 inset-x-0 w-full py-2 bg-secondary-500 z-50 navigationBar">
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center text-sm font-light text-white">
          <div
            className="flex-initial logo"
            style={{ backgroundImage: `url("${logo}")`, height: '60px', width: '210px' }}
          />

          <ul className="hidden md:flex flex-initial">
            <li className="flex-initial">
              <ul className="flex">
                <li className="flex-initial mx-2">
                  <a href="#home" className="uppercase">
                    Home
                  </a>
                </li>
                <li className="flex-initial mx-2">
                  <a href="#about" className="uppercase">
                    About
                  </a>
                </li>
                <li className="flex-initial mx-2">
                  <a href="#team" className="uppercase">
                    Team
                  </a>
                </li>
                <li className="flex-initial mx-2">
                  <a href="#clients" className="uppercase">
                    Clients
                  </a>
                </li>
                <li className="flex-initial mx-2">
                  <a href="#contactus" className="uppercase">
                    Contact Us
                  </a>
                </li>
                <li className="flex-initial mx-2">
                  <a href="#physioacademy" className="uppercase">
                    Physio Academy
                  </a>
                </li>
              </ul>
            </li>

            <li className="flex-initial">
              <ul className="flex language">
                <li className="flex-initial mx-2">
                  <a href="#english" className="uppercase">
                    English
                  </a>
                </li>
                <li className="flex-initial">
                  <a href="#chinese" className="uppercase">
                    简体中文
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavigationBar;
