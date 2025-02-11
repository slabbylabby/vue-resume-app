<template>
  <div
    class="d-block flex-container positive-relative z-n1"
    style="margin-top: 5%; overflow-x: hidden; overflow-y: hidden"
  >
    <div class="row" style="padding-left: 5%">
      <!-- nav card-->
      <div
        id="navContainer2"
        class="col-md-5 mt-5 position-absolute px-0"
        style="height: 60vh; left: 1%"
      >
        <div class="d-flex flex-row h-100 w-100 px-0 position-absolute">
          <!-- arrow container -->
          <div
            id="arrowContainer"
            class="d-flex flex-column justify-content-center px-2 position-relative z-1"
            @click="revealHideNavContent($event, 'arrowContainer')"
            style="
              height: 10%;
              width: 10%;
              background-color: #f7f7f7;
              border-radius: 40%;
              overflow: hidden;
              bottom: 5%;
              left: 42%;
            "
          >
            <div id="openArrow" class="text-center" style="display: flex; pointer-events: none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="40"
                fill="currentColor"
                class="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
            </div>

            <div id="closeArrow" class="text-center" style="display: none; pointer-events: none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="40"
                fill="currentColor"
                class="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
              </svg>
            </div>
          </div>
          <!-- nav items container-->
          <div
            id="navContainer"
            class="d-flex flex-column justify-content-center w-100 h-100 mt-3 z-n2"
            style=""
          >
            <div
              id="aboutContainer"
              @click="toggleBodyContent($event, 'aboutContainer')"
              class="d-flex flex-column justify-content-center mb-2 position-relative nav-Icons"
              style="transition: 1.5s ease"
            >
              <span class="text-center" style="pointer-events: none">About Me</span>
            </div>

            <div
              id="workContainer"
              @click="toggleBodyContent($event, 'workContainer')"
              class="d-flex flex-column justify-content-center mb-2 position-relative nav-Icons"
              style="transition: 1.3s ease"
            >
              <span class="text-center" style="pointer-events: none">Work Experience</span>
            </div>

            <div
              id="schoolContainer"
              @click="toggleBodyContent($event, 'schoolContainer')"
              class="d-flex flex-column justify-content-center mb-2 position-relative nav-Icons"
              style="transition: 1.1s ease"
            >
              <span class="text-center" style="pointer-events: none">School </span>
            </div>

            <div
              id="contactContainer"
              @click="toggleBodyContent($event, 'contactContainer')"
              class="d-flex flex-column justify-content-center mb-2 position-relative nav-Icons"
              style="transition: 0.9s ease"
            >
              <span class="text-center" style="pointer-events: none">Contact Info</span>
            </div>

            <div
              id="portfolioContainer"
              @click="toggleBodyContent($event, 'portfolioContainer')"
              class="d-flex flex-column justify-content-center position-relative nav-Icons"
              style="transition: 0.7s ease"
            >
              <span class="text-center" style="pointer-events: none">Portfolio</span>
            </div>
          </div>
        </div>
      </div>

      <!-- main card-->

      <div class="col-md-3 position-relative z-3" style="height: 75vh; left: 15%">
        <div
          class="container"
          style="
            height: 100%;
            width: 100%;
            border-bottom-right-radius: 5px;
            overflow: hidden;
            border-top-right-radius: 5px;
          "
        >
          <!-- top picture-->
          <section
            class="row px-0"
            style="height: 50%; border-radius: 10px; background-color: whitesmoke"
          >
            <div class="d-flex justify-content-center px-0" style="background-color: black">
              <img
                src="@/assets/mainPhotos/meLinkedIn.png"
                style="width: 90%; height: 100%; padding: 0"
              />
            </div>
          </section>

          <!-- bottom info-->
          <section
            class="row"
            style="
              height: 35%;
              background-color: #f7f7f7;
              font-family: 'Poppins', sans-serif; /* background-image: url('../src/assets/cropped-leaf.png'); background-repeat: no-repeat; background-size: 60%; background-position: 35% 65%;*/
            "
          >
            <div class="row pt-5">
              <div class="d-flex flex-column justify-content-top">
                <div class="align-self-center pt-5">
                  <h1 class="text-center">Seth Bartel2</h1>
                  <h4 class="text-center">Web Developer</h4>

                  <a
                    href="https://www.linkedin.com/in/seth-bartel-20574313a/"
                    class="me-2"
                    style="color: #000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-linkedin align-self-center"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/slabbylabby"
                    class="me-2"
                    style="color: #000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      class="bi bi-github align-self-center"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <!-- bottom links-->
          <section class="row" style="height: 10%; background-color: #f7f7f7">
            <!-- download button-->

            <div
              @click="downloadFile"
              class="d-flex flex-column col justify-content-center"
              style="border-right: 2px solid #d3d3d3; border-top: 2px solid #d3d3d3"
            >
              <span class="align-self-center"> Download CV</span>
            </div>

            <!-- contact me button-->
            <div
              class="d-flex flex-column col justify-content-center"
              style="border-top: 2px solid #d3d3d3"
            >
              <span class="btn align-self-center"> Contact Me</span>
            </div>
          </section>
        </div>
      </div>

      <!-- body card-->
      <div
        id="bodyCard"
        class="col-md-8 z-1 p-1 mt-2 position-relative"
        style="height: 70vh; right: 5%; display: none; overflow: hidden"
      >
        <div
          id="bodyContainer"
          class="container position-relative z-2"
          style="
            height: 100%;
            width: 60%;
            left: 8%;
            background-color: #f7f7f7;
            border: 1px solid black;
            border-top-right-radius: 5%;
            border-bottom-right-radius: 5%;
          "
        >
          <!-- header sections -->
          <div id="headerContent" class="row mt-4">
            <!-- headers -->
            <div
              class="col-md-12 d-flex p-1"
              style="height: 100%; width: 100%; border-bottom: 1px solid black"
            >
              <!-- about me header -->
              <div
                id="aboutHeader"
                class="justify-content-left"
                style="width: 90%; margin-left: 5%; display: none"
              >
                <h4 class="align-self-center" style="">About me</h4>
              </div>
              <!-- work experience header -->
              <div
                id="workHeader"
                class="justify-content-left"
                style="width: 90%; margin-left: 5%; display: none"
              >
                <h4 class="align-self-center">Work Experience</h4>
              </div>

              <!-- school header -->
              <div
                id="schoolHeader"
                class="justify-content-left"
                style="width: 90%; margin-left: 5%; display: none"
              >
                <h4 class="align-self-center">School</h4>
              </div>
              <!-- contact information header -->
              <!-- removed contact header changing this later
              <div
                id="aboutHeader"
                class="justify-content-left"
                style="width: 90%; margin-left: 5%; display: none"
              >
                <h4 class="align-self-center">Contact Information</h4>
              </div>
              -->
              <!-- portfolio header -->
              <div
                id="portfolioHeader"
                class="justify-content-left"
                style="width: 90%; margin-left: 5%; display: none"
              >
                <h4 class="align-self-center">Portfolio</h4>
              </div>
            </div>
          </div>

          <!-- Begin body sections-->
          <div
            id="bodyContent"
            class="container pt-1 p-4 ps-0 z-2"
            style="
              height: 90%;
              width: 100%;
              background-color: whitesmoke;
              display: flex;
              background-color: lightgray;
              border-bottom-right-radius: 5%;
            "
          >
            <div id="aboutBody" class="row" style="display: none; height: 60%; width: 100%">
              <div class="col-md-12 mt-1 mb-3 p-3 ms-2" style="height: 65%; width: 100%">
                <p
                  class="p-3"
                  style="
                    word-wrap: break-word;
                    height: 100%;
                    background-color: whitesmoke;
                    border-radius: 1%;
                  "
                >
                  Hello! I'm Seth Bartel from the Indianapolis area. I've been working as a web
                  developer since late 2019, specializing in Front-End development. Over the past
                  two years at IVM Inc., I've expanded my skills to full-stack development. While my
                  primary focus has been on the front end, I've quickly gained proficiency in
                  backend technologies as well. Please see my work history and portfolio for more
                  details.
                </p>
              </div>

              <div class="col-md-12 mt-2" style="height: 50%; width: 100%">
                <h4
                  class="text-center mb-5 p-2"
                  style="width: 100%; border-bottom: 1px solid gray; margin-left: 1%"
                >
                  Language proficiencies
                </h4>

                <div class="row mb-3">
                  <div class="d-flex col-md-5">
                    <span
                      class="mx-2"
                      style="width: 40%; flex: 1; text-align: right; white-space: nowrap"
                    >
                      JavaScript
                    </span>
                    <div class="progress mt-1" style="width: 60%">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 90%"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div class="d-flex col-md-6">
                    <span
                      class="mx-2"
                      style="width: 40%; flex: 1; text-align: right; white-space: nowrap"
                    >
                      HTML
                    </span>
                    <div class="progress mt-1" style="width: 60%">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 80%"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="d-flex col-md-5">
                    <span
                      class="mx-2"
                      style="width: 40%; flex: 1; text-align: right; white-space: nowrap"
                    >
                      .Net/MVC
                    </span>
                    <div class="progress mt-1" style="width: 60%">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 90%"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div class="d-flex col-md-6">
                    <span
                      class="mx-2"
                      style="width: 40%; flex: 1; text-align: right; white-space: nowrap"
                    >
                      CSS
                    </span>
                    <div class="progress mt-1" style="width: 60%">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 70%"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="d-flex col-md-5">
                    <span
                      class="mx-2"
                      style="width: 40%; flex: 1; text-align: right; white-space: nowrap"
                    >
                      SQL
                    </span>
                    <div class="progress mt-1" style="width: 60%">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 60%"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div class="d-flex col-md-6">
                    <span
                      class="mx-2"
                      style="width: 40%; flex: 1; text-align: right; white-space: nowrap"
                    >
                      Vue
                    </span>
                    <div class="progress mt-1" style="width: 60%">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 90%"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="d-flex col-md-5">
                    <span
                      class="mx-2"
                      style="width: 40%; flex: 1; text-align: right; white-space: nowrap"
                    >
                      PHP
                    </span>
                    <div class="progress mt-1" style="width: 60%">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 50%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div class="d-flex col-md-6">
                    <span
                      class="mx-2"
                      style="width: 40%; flex: 1; text-align: right; white-space: nowrap"
                    >
                      React
                    </span>
                    <div class="progress mt-1" style="width: 60%">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 60%"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>

                <div class="row mb-3">
                  <div class="d-flex col-md-5">
                    <span
                      class="mx-2"
                      style="width: 40%; flex: 1; text-align: right; white-space: nowrap"
                    >
                      C#
                    </span>
                    <div class="progress mt-1" style="width: 60%">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 70%"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>

                  <div class="d-flex col-md-6">
                    <span
                      class="mx-2"
                      style="width: 40%; flex: 1; text-align: right; white-space: nowrap"
                    >
                      Angular
                    </span>
                    <div class="progress mt-1" style="width: 60%">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style="width: 50%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="workBody" class="row" style="display: none; height: 95%; width: 100%">
              <div class="d-flex flex-column justify-content-top h-100 mt-3" style="display: flex">
                <!-- IVM Accordion -->
                <div
                  class="col-md-12 mt-3 w-100 p-3 h-100 overflow-scroll"
                  style="
                    background-color: white;
                    border-top-right-radius: 5%;
                    border-bottom-right-radius: 5%;
                  "
                >
                  <h2 class="text-center">IVM Inc.</h2>
                  <div id="ivmAccordion" class="accordion w-100" style="display: block">
                    <div class="accordion-item w-100 px-0">
                      <h2 id="ivmExperienceHeader" class="accordion-header">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#ivmExperience"
                          aria-expanded="false"
                          aria-controls="ivmExperience"
                        >
                          Daily Responsibilities/ Notable Accomplishments
                        </button>
                      </h2>
                      <div
                        id="ivmExperience"
                        class="accordion-collapse collapse show"
                        aria-labelledby="ivmHeader"
                        data-bs-parent="#ivmAccordion"
                      >
                        <div class="accordion-body overflow-y-scroll" style="height: 20rem">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                              <span
                                >Led the development of all front-end web applications written with
                                Vue3, React Native, and MVC overseeing architecture and design to
                                ensure alignment with business goals and technical requirements.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Acquired expertise in Vue.js through hands-on experience, quickly
                                adapting to the framework to contribute to the development of
                                dynamic and interactive web applications.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Refactored and optimized .NET API calls to improve performance and
                                reduce latency, enhancing application efficiency and ensuring faster
                                data retrieval and seamless user experiences.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Utilized Azure DevOps and Git for version control, continuous
                                integration, and deployment, streamlining development workflows and
                                ensuring efficient collaboration and delivery of high-quality
                                software.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Mentored junior developers in front-end web development, providing
                                guidance on industry standards, best practices, and efficient coding
                                techniques to improve code quality and maintainability.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Collaborated closely with fellow developers, sales teams,
                                management, and customers to gather requirements, deliver tailored
                                solutions, and ensure project success through effective
                                communication and cross-functional teamwork.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Analyzed and debugged large SQL databases and queries to resolve
                                data issues.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Actively participated in daily stand-ups, providing project
                                updates, addressing blockers, and collaborating with the team to
                                ensure smooth and efficient development progress.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Created unit tests and conducted thorough quality assurance (QA) on
                                my own commits, ensuring high code quality, functionality, and
                                minimizing defects before deployment.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item w-100 px-0" style="padding-right: 0px">
                      <h2 id="ivmProjectHeader" class="accordion-header">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#ivmProject"
                          aria-expanded="false"
                          aria-controls="ivmProject"
                        >
                          Notable Project Work
                        </button>
                      </h2>
                      <div
                        id="ivmProject"
                        class="accordion-collapse collapse"
                        aria-labelledby="ivmProjectHeader"
                        data-bs-parent="#ivmAccordion"
                      >
                        <div class="accordion-body overflow-y-scroll" style="height: 20rem">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                              <span
                                >Revamped the login system by implementing a token-based
                                authentication mechanism that securely refreshed user sessions,
                                enhancing security and improving the overall user experience and
                                reducing login-related support tickets by 20%.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Developed a custom component for reading file inputs with
                                validation, which significantly eased the process of onboarding new
                                users and maintenance of existing users from our clients which
                                reduced the onboarding process by up to 6 hours and reduced related
                                support tickets by up to 80%.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Developed custom in-house components, replacing third-party
                                subscription services, resulting in an annual savings of
                                approximately $8,000 while maintaining functionality and improving
                                long-term scalability.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Worked with a team to redevelop a legacy system into a web
                                application boosting productivity for our office team and decreasing
                                page load times by up to 50%.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Successfully led the migration of the application from Vue 2 to Vue
                                3, implementing composition API, optimizing performance, and
                                ensuring compatibility with existing features to enhance
                                maintainability and scalability.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Developed a system to efficiently upload, store, and retrieve
                                images and PDF files for products, streamlining content management
                                and enhancing the product catalog experience.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Pedcor Accordion -->
                  <h2 class="text-center">Pedcor</h2>
                  <div id="pedcorAccordion" class="accordion w-100" style="display: block">
                    <div class="accordion-item w-100 px-0">
                      <h2 id="pedcorHeader" class="accordion-header">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#pedcorExperience"
                          aria-expanded="false"
                          aria-controls="pedOne"
                        >
                          Daily Responsibilities/ Notable Accomplishments
                        </button>
                      </h2>
                      <div
                        id="pedcorExperience"
                        class="accordion-collapse collapse"
                        aria-labelledby="pedcorHeader"
                        data-bs-parent="#pedcorAccordion"
                      >
                        <div class="accordion-body overflow-y-scroll" style="height: 20rem">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                              <span
                                >Led the development of all front-end web applications written with
                                Vue3, React Native, and MVC overseeing architecture and design to
                                ensure alignment with business goals and technical requirements.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Acquired expertise in Vue.js through hands-on experience, quickly
                                adapting to the framework to contribute to the development of
                                dynamic and interactive web applications.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Refactored and optimized .NET API calls to improve performance and
                                reduce latency, enhancing application efficiency and ensuring faster
                                data retrieval and seamless user experiences.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Utilized Azure DevOps and Git for version control, continuous
                                integration, and deployment, streamlining development workflows and
                                ensuring efficient collaboration and delivery of high-quality
                                software.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Mentored junior developers in front-end web development, providing
                                guidance on industry standards, best practices, and efficient coding
                                techniques to improve code quality and maintainability.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Collaborated closely with fellow developers, sales teams,
                                management, and customers to gather requirements, deliver tailored
                                solutions, and ensure project success through effective
                                communication and cross-functional teamwork.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Analyzed and debugged large SQL databases and queries to resolve
                                data issues.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Actively participated in daily stand-ups, providing project
                                updates, addressing blockers, and collaborating with the team to
                                ensure smooth and efficient development progress.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Created unit tests and conducted thorough quality assurance (QA) on
                                my own commits, ensuring high code quality, functionality, and
                                minimizing defects before deployment.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item w-100 px-0" style="padding-right: 0px">
                      <h2 id="pedcorProjectHeader" class="accordion-header">
                        <button
                          class="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#pedcorProject"
                          aria-expanded="false"
                          aria-controls="pedcorProject"
                        >
                          Notable Project Work
                        </button>
                      </h2>
                      <div
                        id="pedcorProject"
                        class="accordion-collapse collapse"
                        aria-labelledby="pedcorProjectHeader"
                        data-bs-parent="#pedcorAccordion"
                      >
                        <div class="accordion-body overflow-y-scroll" style="height: 20rem">
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                              <span
                                >Revamped the login system by implementing a token-based
                                authentication mechanism that securely refreshed user sessions,
                                enhancing security and improving the overall user experience and
                                reducing login-related support tickets by 20%.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Developed a custom component for reading file inputs with
                                validation, which significantly eased the process of onboarding new
                                users and maintenance of existing users from our clients which
                                reduced the onboarding process by up to 6 hours and reduced related
                                support tickets by up to 80%.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Developed custom in-house components, replacing third-party
                                subscription services, resulting in an annual savings of
                                approximately $8,000 while maintaining functionality and improving
                                long-term scalability.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Worked with a team to redevelop a legacy system into a web
                                application boosting productivity for our office team and decreasing
                                page load times by up to 50%.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Successfully led the migration of the application from Vue 2 to Vue
                                3, implementing composition API, optimizing performance, and
                                ensuring compatibility with existing features to enhance
                                maintainability and scalability.
                              </span>
                            </li>

                            <li class="list-group-item">
                              <span
                                >Developed a system to efficiently upload, store, and retrieve
                                images and PDF files for products, streamlining content management
                                and enhancing the product catalog experience.
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="schoolBody" class="row" style="display: none; height: 60%; width: auto">
              <div class="col-md-12 mt-1 p-3 ms-2" style="height: 60%; width: 100%">
                <div
                  class="p-3"
                  style="
                    word-wrap: break-word;
                    height: 90%;
                    background-color: whitesmoke;
                    border-radius: 1%;
                  "
                >
                  <h1 class="text-center">Indiana State University</h1>
                  <h3 class="text-center">Bachelor of Science</h3>
                  <h5 class="text-center">
                    Information Technology with a focus in Web Design and Development
                  </h5>
                </div>
              </div>

              <div class="col-md-12" style="height: 90%; width: 100%">
                <h4
                  class="text-center p-2"
                  style="width: 100%; border-bottom: 1px solid gray; margin-left: 1%"
                >
                  School Photos
                </h4>

                <div
                  id="schoolCarousel"
                  class="carousel slide w-100 h-100 ms-2 overflow-hidden"
                  data-bs-ride="carousel"
                  style="background-color: whitesmoke; border-radius: 1%"
                >
                  <div class="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="0"
                      class="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleCaptions"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>
                  <div class="carousel-inner m-auto h-auto">
                    <div class="carousel-item active">
                      <img
                        src="@/assets/schoolPhotos/cropped-leaf.png"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="@/assets/schoolPhotos/ISUBuildingScaled.png"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img
                        src="@/assets/schoolPhotos/ISUDegreeScaled.png"
                        class="d-block w-100"
                        alt="..."
                      />
                      <div class="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                      </div>
                    </div>
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#schoolCarousel"
                    data-bs-slide="prev"
                  >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#schoolCarousel"
                    data-bs-slide="next"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            <div id="portfolioBody" class="row" style="display: none; height: auto; width: auto">
              <div class="col-md-12 mt-1 p-3 ms-2" style="width: 100%">
                <div class="text-center w-100">
                  <h3>Notable Sites I've created or contributed to:</h3>
                </div>
              </div>

              <div
                class="col-md-12 p-3"
                style="
                  height: 90%;
                  width: 100%;
                  background-color: whitesmoke;
                  border-top-right-radius: 5%;
                  border-bottom-right-radius: 5%;
                "
              >
                <ul class="list-group list-group-flush">
                  <div class="mb-3">
                    <h4 class="mb-2">Pedcor Management Home</h4>
                    <li class="list-group-item ms-3">
                      <span>
                        <a href="https://pedcorcompanies.com/">Pedcor</a>
                      </span>
                    </li>
                  </div>

                  <div class="mb-3">
                    <h4 class="mb-2">IVM Home Page</h4>
                    <li class="list-group-item ms-3">
                      <span>
                        <a href="https://ivminc.com/">IVM home page </a>
                      </span>
                    </li>
                  </div>
                  <div class="mb-3">
                    <h4 class="mb-2">IVM Smarthub Explanation</h4>
                    <li class="list-group-item ms-3">
                      <span>
                        <a href="https://ivminc.com/ivm-smarthub/">IVM internal app sneak peak</a>
                      </span>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'home',
  components: {},
  data() {
    return {
      darkMode: false,

      //body card vars and animations
      bodyCardVisible: false,
      headerVisible: false,
      bodyVisible: false,

      //arrow functions
      toggleNavMenu: false,
    }
  },
  watch: {},
  computed: {},
  methods: {
    toggleMode() {
      console.log(this.darkMode)
      this.darkMode = !this.darkMode
    },

    toggleBodyContent(e: MouseEvent, p0: string): void {
      const elementId = (e.target as HTMLElement)?.id

      const body = document.getElementById('bodyContainer') as HTMLElement
      const newIdHeader = elementId.replace('Container', 'Header') ?? ''
      const newIdBody = elementId.replace('Container', 'Body') ?? ''

      if (!this.bodyCardVisible) {
        const bodyCard = document.getElementById('bodyCard') as HTMLElement
        bodyCard.style.display = 'flex'
      }

      if (!this.headerVisible) {
        const headerContent = document.getElementById('headerContent') as HTMLElement
        headerContent.style.display = 'flex'
      }

      if (!this.bodyVisible) {
        const bodyContent = document.getElementById('bodyContent') as HTMLElement
        bodyContent.style.display = 'flex'
      }

      for (let i = 0; i < body.childElementCount; i++) {
        Array.from(body.children[i].children).forEach((el) => {
          if (el.id === newIdBody) {
            ;(el as HTMLElement).style.display = 'flex'
          } else {
            ;(el as HTMLElement).style.display = 'none'
          }
        })

        Array.from(body.children[i].children[i].children).forEach((el) => {
          console.log(el)
          if (el.id === newIdHeader) {
            ;(el as HTMLElement).style.display = 'flex'
          } else {
            ;(el as HTMLElement).style.display = 'none'
          }
        })
      }
    },

    revealHideNavContent($event: MouseEvent, p0: string) {
      const navContainer = document.getElementById('navContainer') as HTMLElement
      const openArrow = document.getElementById('openArrow') as HTMLElement
      const closeArrow = document.getElementById('closeArrow') as HTMLElement
      const navItems = document.getElementsByClassName('nav-Icons')

      navContainer.style.position = 'absolute'

      if (!this.toggleNavMenu) {
        ;(closeArrow as HTMLElement).style.display = 'flex'
        ;(openArrow as HTMLElement).style.display = 'none'

        Array.from(navItems).forEach((el) => {
          ;(el as HTMLElement).style.left = '22%'
        })
      } else {
        ;(closeArrow as HTMLElement).style.display = 'none'
        ;(openArrow as HTMLElement).style.display = 'flex'

        const bodyCard = document.getElementById('bodyCard') as HTMLElement
        bodyCard.style.display = 'none'

        Array.from(navContainer.children).forEach((el) => {
          ;(el as HTMLElement).style.left = '45%'
        })
      }
      navContainer.style.position = 'relative'
      this.toggleNavMenu = !this.toggleNavMenu
    },

    downloadFile() {
      const fileUrl = '@/assets/resumePdfs/SethBartelResumeCSITFeb1.pdf'
      const fileName = 'sethBartelResumeFeb1.pdf'

      const link = document.createElement('a')
      link.href = fileUrl
      link.download = fileName

      document.body.appendChild(link)
      link.click()

      document.body.removeChild(link)
    },

    collapseHelper(e: MouseEvent, el: HTMLElement) {
      console.log(e)
      console.log(el)

      //$('#el').accordion('show');
      const collapseElement = this.$refs
      console.log(collapseElement)
    },
  },
}
</script>
