import bannerBackground from '../../Assets/images/entherapy-banner-one-background.jpg';
import fingerPrint from '../../Assets/images/entherapy-banner-two-element-fingerprint.svg';
import overlay from '../../Assets/images/entherapy-banner-one-element-one.png';

function Header(): JSX.Element {
  return (
    <header className="h-screen bg-secondary-500">
      <div
        className="w-full h-full bg-fixed bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${bannerBackground}")` }}
      >
        <div
          className="w-full h-full bg-fixed bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${fingerPrint}")` }}
        >
          <div
            className="w-full h-full bg-fixed bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${overlay}")` }}
          >
            <div className="container h-full mx-auto">
              <div className="flex items-center w-full h-full">
                <div className="px-2 md:px-24">
                  <h1 className="text-6xl md:text-8xl uppercase text-white">
                    E<span className="text-primary-500">n</span>Therapy
                  </h1>
                  <h2 className="text-2xl font-light text-white">
                    Pathway to connect the
                    <br /> international physiotherapy
                    <br /> standard.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
