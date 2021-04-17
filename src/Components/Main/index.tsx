import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faWeixin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons';

import clients from '../../Assets/images/entherapy-clients-sections.png';
import logoElement from '../../Assets/images/logo-outline-shape.svg';
import team from '../../Assets/images/entherapy-team-sections.png';
import shanghai from '../../Assets/images/shanghai.jpg';

function Main(): JSX.Element {
  return (
    <main className="bg-secondary-500">
      <section className="h-screen about">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url("${shanghai}")` }}
        >
          <div className="container h-full mx-auto">
            <div className="flex items-center w-full h-full">
              <div className="w-full">
                <div
                  className="relative py-8 pl-28 mb-6 bg-no-repeat bg-left-top"
                  style={{ backgroundImage: `url("${logoElement}")` }}
                >
                  <h2>
                    <span className="absolute top-0 left-0 transform translate-y-14 font-heading text-6xl font-bold text-primary-500 uppercase">
                      We
                    </span>{' '}
                    <span className="inline-block px-6 pb-2 mb-2 border-b border-white text-5xl font-light text-white uppercase">
                      are EnTherapy
                    </span>
                  </h2>
                  <p className="px-6 text-5xl font-bold text-white uppercase">
                    Ensure The Best Known
                    <br /> Physiotherapy Service.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="p-6 bg-gray-600 bg-opacity-25 rounded">
                    <h3 className="text-2xl font-bold text-primary-500 uppercase">Mission</h3>
                    <p className="text-white">To improve the health & quality life of our clients.</p>
                  </div>

                  <div className="p-6 bg-gray-600 bg-opacity-25 rounded">
                    <h3 className="text-2xl font-bold text-primary-500 uppercase">Vision</h3>
                    <p className="text-white">World-class physiotherapy practice.</p>
                  </div>

                  <div className="p-6 bg-gray-600 bg-opacity-25 rounded">
                    <h3 className="text-2xl font-bold text-primary-500 uppercase">Value</h3>
                    <p className="text-white">Grow / Evolve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen border-t border-secondary-200 team">
        <div className="container h-full mx-auto">
          <div className="flex items-center w-full h-full">
            <div className="flex-auto w-1/2">
              <div className="flex justify-center">
                <img src={team} alt="" width="748" height="1010" style={{ maxWidth: '570px' }} />
              </div>
            </div>
            <div className="flex-auto w-1/2">
              <div className="pb-4 mb-4 border-b border-primary-500">
                <h2 className="font-heading text-6xl font-bold text-gray-400 uppercase">Team</h2>
                <p className="font-heading text-3xl font-light text-white">Join us, as long as you have a dream</p>
              </div>

              <h4 className="mb-2 font-light text-gray-400">Our partners graduated from:</h4>
              <ul className="list-circle list-inside font-light text-white">
                <li>University Of Sydney</li>
                <li>University Of Canberra</li>
                <li>University Of Southern California</li>
                <li>China Europe International Business School</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen border-t border-secondary-200 clients">
        <div className="container h-full mx-auto">
          <div className="flex items-center w-full h-full">
            <div className="flex-auto w-1/2">
              <div className="pb-4 mb-4 border-b border-primary-500">
                <h2 className="font-heading text-6xl font-bold text-gray-400 uppercase">Clients</h2>
                <p className="font-heading text-3xl font-light text-white">Successful collaborations</p>
              </div>

              <ul className="list-circle list-inside font-light text-white">
                <li>China Pacific Insurance Company</li>
                <li>Shanghai First Peoples Hospital</li>
                <li>Shanghai Jingju Theatre Company</li>
                <li>Shanghai Sixth People Hospital East</li>
                <li>Shanghai University Of Sport</li>
              </ul>
            </div>
            <div className="flex-auto w-1/2">
              <div className="flex justify-center">
                <img src={clients} alt="" width="748" height="1010" style={{ maxWidth: '570px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen border-t border-secondary-200 contact-us">
        <div className="container h-full mx-auto">
          <div className="flex items-center w-full h-full">
            <div className="w-full">
              <div>
                <h2 className="mb-4 font-heading text-6xl font-bold text-gray-400 uppercase">Contact Us</h2>
              </div>

              <div className="flex w-full">
                <div className="flex-auto w-1/2">
                  <div className="mb-4">
                    <h3 className="mb-2 font-bold text-white uppercase">Social</h3>
                    <nav className="social-nav">
                      <ul className="flex -mx-2">
                        <li className="px-2">
                          <a
                            href="https://www.facebook.com/EnTherapyInternational/"
                            target="_blank"
                            title="ENTherapy Official Facebook Page"
                            rel="noreferrer"
                            className="text-4xl text-white hover:text-primary-500"
                          >
                            <FontAwesomeIcon icon={faFacebookSquare} />
                          </a>
                        </li>
                        <li className="px-2">
                          <a
                            href="https://www.linkedin.com/company/entherapy/"
                            target="_blank"
                            title="ENTherapy Official Linkedin"
                            rel="noreferrer"
                            className="text-4xl text-white hover:text-primary-500"
                          >
                            <FontAwesomeIcon icon={faLinkedin} />
                          </a>
                        </li>
                        <li className="px-2">
                          <a
                            href="#wechat"
                            title="ENTherapy Official WeChat"
                            className="text-4xl text-white hover:text-primary-500"
                          >
                            <FontAwesomeIcon icon={faWeixin} />
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <h3 className="mb-2 font-bold text-white uppercase">Location</h3>
                  <address className="text-white mb-4">
                    <strong className="text-gray-400">
                      E<span className="text-primary-500">n</span>Therapy <span className="font-light">Shanghai</span>
                    </strong>
                    <br />
                    Building 39, Room 601, Vanke VMO Garden Plaza,
                    <br />
                    2049 Lane, Pujin Road, Shanghai, China
                  </address>
                  <address className="text-white">
                    <strong className="text-gray-400">
                      E<span className="text-primary-500">n</span>Therapy <span className="font-light">Sydney</span>
                    </strong>
                    <br />
                    7/345 Pacific Highway, Lindfield NSW,
                    <br />
                    2070, Sydney, Australia
                  </address>
                </div>

                <div className="flex-auto w-1/2">
                  <h3 className="mb-2 font-bold text-white uppercase">Contact Form</h3>
                  <form className="w-full">
                    <label className="block w-full text-secondary-100 uppercase mb-4" htmlFor="name">
                      <span className="block mb-2">Name</span>
                      <input
                        className="appearance-none outline-none w-full bg-secondary-500 text-white border-b border-secondary-100 focus:border-primary-500"
                        type="text"
                        name="name"
                        id="name"
                      />
                    </label>
                    <label className="w-full block text-secondary-100 uppercase mb-4" htmlFor="company">
                      <span className="block mb-2">Company</span>
                      <input
                        className="appearance-none outline-none w-full bg-secondary-500 text-white border-b border-secondary-100 focus:border-primary-500"
                        type="text"
                        name="company"
                        id="company"
                      />
                    </label>
                    <label className="w-full block text-secondary-100 uppercase mb-4" htmlFor="email">
                      <span className="block mb-2">Email</span>
                      <input
                        className="appearance-none outline-none w-full bg-secondary-500 text-white border-b border-secondary-100 focus:border-primary-500"
                        type="email"
                        name="email"
                        id="email"
                      />
                    </label>
                    <label className="block w-full block text-secondary-100 uppercase mb-4" htmlFor="message">
                      <span className="block mb-2">Message</span>
                      <textarea
                        className="appearance-none outline-none w-full bg-secondary-500 text-white border border-secondary-100 focus:border-primary-500"
                        name="message"
                        id="message"
                        cols={5}
                        rows={3}
                      />
                    </label>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
