import Footer from "../../../layouts/footer";

export default function Main() {
  return (
    <>
      <div className="ring">
        {/* <!-- Hero --> */}
        <div className="relative overflow-hidden bg-banner">
          {/* <!-- Gradients --> */}
          <div
            aria-hidden="true"
            className="flex absolute -top-96 left-1/2 transform -translate-x-1/2"
          >
            <div className="bg-gradient-to-r from-second to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-violet-900/50 dark:to-purple-900"></div>
            <div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div>
          </div>
          {/* <!-- End Gradients --> */}

          <div className="relative z-10">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
              <div className="max-w-2xl text-center mx-auto">
                <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-second to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                  Preline: A vision for 2023
                </p>

                {/* <!-- Title --> */}
                <div className="mt-5 max-w-2xl">
                  <h1 className="block font-semibold text-gray-200 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200">
                    Découvrez le <br /> Synes
                  </h1>
                </div>
                {/* <!-- End Title --> */}

                <div className="mt-5 max-w-3xl">
                  <p className="text-lg text-gray-300 dark:text-gray-400">
                    Synes (Syndicat National des Enseignants du Supérieur) est
                    un syndicat d'enseignant des écoles supérieur
                  </p>
                </div>

                {/* <!-- Buttons --> */}
                <div className="mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center">
                  <a
                    className="inline-flex justify-center items-center gap-x-3 text-center bg-second hover:bg-second border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-second focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                    href="javascript:;"
                  >
                    Get started
                    <svg
                      className="w-3 h-3"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </a>
                  <a
                    className="inline-flex justify-center items-center gap-x-3 text-center border-white hover:bg-second border hover:border-second text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-second focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                    href="/login"
                  >
                    Login
                    <svg
                      className="w-3 h-3"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                      />
                    </svg>
                  </a>
                </div>
                {/* <!-- End Buttons --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Hero --> */}

        {/* // <!-- Icon Blocks --> */}
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          <div class="max-w-xl mx-auto">
            <div class="text-center">
              <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl dark:text-white">
                Notre identité
              </h1>
              <p class="mt-1 text-gray-600 dark:text-gray-400">
                le Synes en 04 pricinpaux termes
              </p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12 mt-12">
            {/* <!-- Icon Block --> */}
            <div>
              <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-second before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
                <svg
                  className="w-7 h-7 text-second dark:text-second/70"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Responsive
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Responsive, and mobile-first project on the web
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div>
              <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-second before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
                <svg
                  className="w-7 h-7 text-second dark:text-second/70"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z" />
                  <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z" />
                  <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Customizable
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Components are easily customized and extendable
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div>
              <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-second before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
                <svg
                  className="w-7 h-7 text-second dark:text-second/70"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  Documentation
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Every component and plugin is well documented
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div>
              <div className="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-second before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
                <svg
                  className="w-7 h-7 text-second dark:text-second/70"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                  <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  24/7 Support
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-400">
                  Contact us 24 hours a day, 7 days a week
                </p>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}
          </div>
        </div>
        {/* // <!-- End Icon Blocks --> */}

        <div class="max-px-32 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto bg-dark">
          <div class="max-w-xl mx-auto">
            <div class="text-center">
              <h1 class="text-3xl font-bold sm:text-4xl text-white">
                Contact us
              </h1>
              <p class="mt-1 text-gray-400">
                We'd love to talk about how we can help you.
              </p>
            </div>
          </div>

          <div class="mt-12 max-w-lg mx-auto">
            {/* <!-- Card --> */}
            <div class="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 border-gray-700">
              <h2 class="mb-8 text-xl font-semibold text-gray-200">
                Fill in the form
              </h2>

              <form>
                <div class="grid gap-4 lg:gap-6">
                  {/* <!-- Grid --> */}
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        for="hs-firstname-contacts-1"
                        class="block text-sm font-medium text-white"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="hs-firstname-contacts-1"
                        id="hs-firstname-contacts-1"
                        class="py-3 px-4 block w-full rounded-md text-sm focus:border-second/70 focus:ring-second/70 dark:bg-slate-900 border-gray-700 text-gray-400"
                      />
                    </div>

                    <div>
                      <label
                        for="hs-lastname-contacts-1"
                        class="block text-sm font-medium text-white"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="hs-lastname-contacts-1"
                        id="hs-lastname-contacts-1"
                        class="py-3 px-4 block w-full rounded-md text-sm focus:border-second/70 focus:ring-second/70 dark:bg-slate-900 border-gray-700 text-gray-400"
                      />
                    </div>
                  </div>
                  {/* <!-- End Grid --> */}

                  {/* <!-- Grid --> */}
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <label
                        for="hs-email-contacts-1"
                        class="block text-sm font-medium text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="hs-email-contacts-1"
                        id="hs-email-contacts-1"
                        autocomplete="email"
                        class="py-3 px-4 block w-full rounded-md text-sm focus:border-second/70 focus:ring-second/70 dark:bg-slate-900 border-gray-700 text-gray-400"
                      />
                    </div>

                    <div>
                      <label
                        for="hs-phone-number-1"
                        class="block text-sm font-medium text-white"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="hs-phone-number-1"
                        id="hs-phone-number-1"
                        class="py-3 px-4 block w-full rounded-md text-sm focus:border-second/70 focus:ring-second/70 dark:bg-slate-900 border-gray-700 text-gray-400"
                      />
                    </div>
                  </div>
                  {/* <!-- End Grid --> */}

                  <div>
                    <label
                      for="hs-about-contacts-1"
                      class="block text-sm font-medium text-white"
                    >
                      Details
                    </label>
                    <textarea
                      id="hs-about-contacts-1"
                      name="hs-about-contacts-1"
                      rows="4"
                      class="py-3 px-4 block w-full rounded-md text-sm focus:border-second/70 focus:ring-second/70 dark:bg-slate-900 border-gray-700 text-gray-400"
                    ></textarea>
                  </div>
                </div>
                {/* <!-- End Grid --> */}

                <div class="mt-6 grid">
                  <button
                    type="submit"
                    class="inline-flex justify-center items-center gap-x-3 text-center bg-second hover:bg-second/70 border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-second focus:ring-offset-2 transition py-3 px-4 focus:ring-offset-gray-800"
                  >
                    Send inquiry
                  </button>
                </div>

                <div class="mt-3 text-center">
                  <p class="text-sm text-gray-500">
                    We'll get back to you in 1-2 business days.
                  </p>
                </div>
              </form>
            </div>
            {/* <!-- End Card --> */}
          </div>

          <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-4 lg:gap-8">
            {/* <!-- Icon Block --> */}
            <a
              class="flex flex-col h-full text-center rounded-md p-4 sm:p-6 hover:bg-white/[.05]"
              href="#"
            >
              <svg
                class="w-9 h-9 mx-auto text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
              </svg>
              <div class="grow">
                <h3 class="text-lg font-semibold text-gray-200">
                  Knowledgebase
                </h3>
                <p class="mt-1 text-gray-500">
                  We're here to help with any questions or code.
                </p>
                <p class="mt-5 inline-flex items-center gap-x-2 font-medium text-second">
                  Contact support
                  <svg
                    class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </p>
              </div>
            </a>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <a
              class="flex flex-col h-full text-center rounded-md p-4 sm:p-6 hover:bg-white/[.05]"
              href="#"
            >
              <svg
                class="w-9 h-9 mx-auto text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <div class="grow">
                <h3 class="text-lg font-semibold text-gray-200">
                  FAQ
                </h3>
                <p class="mt-1 text-gray-500">
                  Search our FAQ for answers to anything you might ask.
                </p>
                <p class="mt-5 inline-flex items-center gap-x-2 font-medium text-second/70">
                  Visit FAQ
                  <svg
                    class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </p>
              </div>
            </a>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <a
              class="flex flex-col h-full text-center rounded-md p-4 sm:p-6 hover:bg-white/[.05]"
              href="#"
            >
              <svg
                class="w-9 h-9 mx-auto text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M6 9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3A.5.5 0 0 1 6 9zM3.854 4.146a.5.5 0 1 0-.708.708L4.793 6.5 3.146 8.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12z" />
              </svg>
              <div class="grow">
                <h3 class="text-lg font-semibold text-gray-200">
                  Developer APIs
                </h3>
                <p class="mt-1 text-gray-500">
                  Check out our development quickstart guide.
                </p>
                <p class="mt-5 inline-flex items-center gap-x-2 font-medium text-second/70">
                  Contact sales
                  <svg
                    class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </p>
              </div>
            </a>
            {/* <!-- End Icon Block --> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
