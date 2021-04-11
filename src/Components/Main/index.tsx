function Main(): JSX.Element {
  return (
    <main className="bg-secondary-500">
      <section className="h-screen about">
        <div className="container mx-auto">
          <h2>
            <span className="font-heading text-6xl font-bold text-primary-500 uppercase">We</span> are ENTherapy
          </h2>
          <p>Ensure The Best Known Physiotherapy Service.</p>

          <div>
            <div>
              <h3>Mission</h3>
              <p>To improve the health & quality life of our clients.</p>
            </div>

            <div>
              <h3>Vision</h3>
              <p>World-class physiotherapy practice.</p>
            </div>

            <div>
              <h3>Value</h3>
              <p>Grow / Evolve</p>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen border-t border-secondary-200 team">
        <div className="container mx-auto">
          <div className="flex w-full">
            <div className="flex-auto w-1/2" />
            <div className="flex-auto w-1/2">
              <div className="pb-4 mb-4 border-b border-primary-500">
                <h2 className="font-heading text-6xl font-bold text-primary-500 uppercase">Team</h2>
                <p className="font-heading text-3xl font-light text-white">Join us, as long as you have a dream</p>
              </div>

              <h4>Our partners graduated from:</h4>
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
        <div className="container mx-auto">
          <div className="flex w-full">
            <div className="flex-auto w-1/2">
              <div className="pb-4 mb-4 border-b border-primary-500">
                <h2 className="font-heading text-6xl font-bold text-primary-500 uppercase">Clients</h2>
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
            <div className="flex-auto w-1/2" />
          </div>
        </div>
      </section>
      <section className="h-screen border-t border-secondary-200 contact-us">
        <div className="container mx-auto">
          <div>
            <h2 className="font-heading text-6xl font-bold text-primary-500 uppercase">Contact Us</h2>
          </div>

          <div className="flex w-full">
            <div className="flex-auto w-1/2">
              <h3 className="font-bold text-white uppercase">Location</h3>
              <address>
                <strong>
                  ENTherapy<span>Shanghai</span>
                </strong>
                <br />
                Building 39, Room 601, Vanke VMO Garden Plaza,
                <br />
                2049 Lane, Pujin Road, Shanghai, China
              </address>
              <address>
                <strong>
                  ENTherapy <span>Sydney</span>
                </strong>
                <br />
                7/345 Pacific Highway, Lindfield NSW,
                <br />
                2070, Sydney, Australia
              </address>
            </div>

            <div className="flex-auto w-1/2">
              <h3 className="font-bold text-white uppercase">Contact Form</h3>
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
      </section>
    </main>
  );
}

export default Main;
