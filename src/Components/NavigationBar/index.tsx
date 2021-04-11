function NavigationBar(): JSX.Element {
  return (
    <div className="py-1 px-2 bg-gray-800 navigationBar">
      <nav className="flex justify-between text-white">
        <div className="flex-initial logo">
          <a href="#home">Entherapy</a>
        </div>

        <ul className="flex flex-initial">
          <li className="flex-initial">
            <ul className="flex">
              <li className="flex-initial">
                <a href="#about" className="uppercase">
                  About
                </a>
              </li>
              <li className="flex-initial">
                <a href="#team" className="uppercase">
                  Team
                </a>
              </li>
              <li className="flex-initial">
                <a href="#clients" className="uppercase">
                  Clients
                </a>
              </li>
              <li className="flex-initial">
                <a href="#contactus" className="uppercase">
                  Contact Us
                </a>
              </li>
              <li className="flex-initial">
                <a href="#physioacademy" className="uppercase">
                  Physio Academy
                </a>
              </li>
            </ul>
          </li>

          <li className="flex-initial">
            <ul className="flex language">
              <li className="flex-initial">
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
  );
}

export default NavigationBar;
