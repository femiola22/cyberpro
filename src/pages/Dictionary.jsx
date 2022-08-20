function Dictionary() {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Smart Home
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Smart</span>
          </span>{" "}
          home cyber threats and vulnerabilities
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Here we discuss the cyber threats and vulnerabilities associated with smart home devices.
        </p>
      </div>
      <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            15 Aug 2022
          </p>
          <a
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-blue-400"
            aria-label="Read article"
            title=" Distributed Denial of Service (DDoS)"
          >
            Distributed Denial of Service (DDoS)
          </a>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
          A Distributed Denial of Service (DDoS) attack saturates a network device(s) with 
          traffic from several sources in an effort to render them unusable.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800"
          >
            Read more
          </a>
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
          15 Aug 2022
          </p>
          <a
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-blue-400"
            aria-label="Read article"
            title="Ransomware"
          >
            Ransomware
          </a>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
          Ransomware is a type of malware that prevents or restricts users' access to their system, either by locking the system's 
          screen or by locking the users' files, typically by encryption, until a ransom is paid.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800"
          >
            Read more
          </a>
        </div>
        <div className="px-10 py-20 text-center border rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
          15 Aug 2022
          </p>
          <a
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-blue-400"
            aria-label="Read article"
            title="Spear Phishing"
          >
            Spear Phishing
          </a>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
          A spear phishing attack is a social engineering attack in which a perpetrator, disguised as a trusted individual, tricks a targeted individual or user into 
          clicking a link embedded in a spoofed email, text message, or instant message.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800"
          >
            Read more
          </a>
        </div>
      </div>

      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-blue-400 hover:text-blue-800"
        >
          Load more articles
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Dictionary;
