<template>
  <article class="modern-resume-container">
    <div class="main-layout">
      <!-- Left: Portrait Section -->
      <section class="left-portrait-section rounded">
        <div class="portrait-card bg-white rounded shadow">
          <div class="portrait-photo-container d-flex justify-content-center">
            <img
              src="@/assets/mainPhotos/meLinkedIn.png"
              alt="Seth Bartel"
              class="portrait-photo rounded"
            />
          </div>
          <div class="portrait-info">
            <h1 class="portrait-name">Seth Bartel</h1>
            <p class="portrait-title">Full Stack Web Developer</p>
            <div class="social-links d-flex justify-content-center gap-3 mb-3">
              <a
                href="https://www.linkedin.com/in/seth-bartel-20574313a/"
                class="social-link d-inline-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/slabbylabby"
                class="social-link d-inline-flex align-items-center justify-content-center"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                  />
                </svg>
              </a>
            </div>
            <div class="action-buttons d-flex flex-column gap-2 w-100">
              <button @click="downloadFile" class="btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                  />
                  <path
                    d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                  />
                </svg>
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Right: Tabs and Content -->
      <section class="right-content-section">
        <nav class="horizontal-tabs d-flex bg-white rounded shadow-sm mb-3 flex-wrap">
          <button
            @click="setActiveSection('about')"
            :class="['tab-button btn', { active: activeSection === 'about' }]"
          >
            <span>About</span>
          </button>
          <button
            @click="setActiveSection('experience')"
            :class="['tab-button btn', { active: activeSection === 'experience' }]"
          >
            <span>Experience</span>
          </button>
          <button
            @click="setActiveSection('education')"
            :class="['tab-button btn', { active: activeSection === 'education' }]"
          >
            <span>Education</span>
          </button>
          <button
            @click="setActiveSection('portfolio')"
            :class="['tab-button btn', { active: activeSection === 'portfolio' }]"
          >
            <span>Portfolio</span>
          </button>
        </nav>

        <section class="content-section bg-white rounded shadow p-5">
          <div v-if="activeSection === 'about'" class="section-content fade-in">
            <h2>About Me</h2>
            <p class="intro-text">
              Hello! I’m Seth Bartel, a full-stack developer with professional experience since
              2019. I started in front-end development and grew into full-stack engineering at IVM,
              later gaining deeper troubleshooting and client-focused experience as a Software
              Support Engineer at UCIS and through pro bono freelance work.
            </p>
            <h3 class="section-subtitle">Technical Skills</h3>
            <div class="skills-grid">
              <SkillItem v-for="skill in skills" :key="skill.name" :skill="skill" />
            </div>
          </div>

          <div v-if="activeSection === 'experience'" class="section-content fade-in">
            <h2>Professional Experience</h2>
            <div class="experience-item">
              <div class="experience-header d-flex flex-column gap-1 mb-3">
                <h3>Software Support Specialist</h3>
                <span class="company-name">UCIS</span>
                <span class="date-range">January 2025 - December 2025</span>
              </div>
              <p class="experience-description">
                Debugged and resolved defects across mobile and desktop applications by analyzing
                logs, reproducing issues, and validating fixes through functional and regression
                testing.
              </p>
              <ul class="experience-list">
                <li>
                  Investigated and identified an unauthorized third-party AI chatbot embedded by a
                  external vendor that was significantly degrading website performance.
                </li>
                <li>
                  Produced monthly bug reports with detailed, engineer-level analysis of issues
                  within a Java Spring Boot and Angular application, enabling efficient triage and
                  resolution.
                </li>
                <li>
                  Served as the primary technical resource for diagnosing complex software defects
                  and translating findings into actionable reports for external development teams.
                </li>
              </ul>
            </div>
            <div class="experience-item">
              <div class="experience-header d-flex flex-column gap-1 mb-3">
                <h3>Full Stack Developer</h3>
                <span class="company-name">Freelance</span>
                <span class="date-range">2024 - Present</span>
              </div>
              <p class="experience-description">
                Software Support Specialist with strong engineering insight and a track record of
                diagnosing and resolving complex application issues. Skilled at bridging support and
                development through root cause analysis and developer-ready diagnostics. Also
                provide pro bono freelance software and web development for individuals and small
                organizations. Known for clear communication and practical problem-solving.
              </p>
              <ul class="experience-list">
                <li>
                  Delivered tailored solutions based on client needs, industry best practices, and
                  project goals.
                </li>
                <li>
                  Provided ongoing support, troubleshooting, and enhancements as requested by
                  clients
                </li>
                <li>
                  Performed independent software and web development work on a volunteer and
                  favor-based basis for select clients.
                </li>
              </ul>
            </div>
            <div class="experience-item">
              <div class="experience-header d-flex flex-column gap-1 mb-3">
                <h3>Full Stack Developer</h3>
                <span class="company-name">IVM Inc.</span>
                <span class="date-range">2022 - 2024</span>
              </div>
              <p class="experience-description">
                Led the development of all front-end web applications written with Vue3, React, and
                MVC overseeing architecture and design to ensure alignment with business goals,
                client feedback, and technical requirements.
              </p>
              <ul class="experience-list">
                <li>
                  Revamped the login system with a token-based authentication mechanism and improved
                  session management, enhancing security, user experience, and reducing
                  login-related support tickets by 20%.
                </li>
                <li>
                  Designed and implemented a custom file input component with built-in validation,
                  streamlining user onboarding and maintenance, reducing onboarding time by 6 hours
                  and lowering related support tickets by 95%.
                </li>
                <li>
                  Worked with a team to redevelop a legacy system into a web application boosting
                  productivity for our office team and decreasing page load times by up to 50%.
                </li>
              </ul>
            </div>
            <div class="experience-item">
              <div class="experience-header d-flex flex-column gap-1 mb-3">
                <h3>Junior Web Developer</h3>
                <span class="company-name">Pedcor</span>
                <span class="date-range">2019 - 2022</span>
              </div>
              <p class="experience-description">
                Managed a portfolio of up to 6 web applications, overseeing development,
                maintenance, and updates to ensure optimal performance, functionality, and user
                experience across all projects.
              </p>
              <ul class="experience-list">
                <li>
                  Integrated Zendesk's API to develop custom metrics and dashboards, enabling the
                  management team to cut response time by 15% and improve decision-making through
                  data-driven insights.
                </li>
                <li>
                  Developed a React Native mobile app integrating Zendesk's API, enabling help desk
                  associates to track and manage support tickets, improving ticket resolution
                  efficiency by up to 30%.
                </li>
              </ul>
            </div>
          </div>

          <div v-if="activeSection === 'education'" class="section-content fade-in">
            <h2>Education</h2>
            <div class="education-item">
              <div class="education-header d-flex flex-column gap-1 mb-3">
                <h3>B.S. in Computer Science, Indiana State University</h3>
                <span class="school-name">Indiana State University</span>
                <span class="date-range">Graduated 2021</span>
              </div>
              <span>GPA: 3.7/4.0</span>
              <p class="education-description">
                Relevant Coursework: Web Development, Data Structures, Algorithms, Database Systems,
                Software Engineering
              </p>
            </div>
            <div class="education-item">
              <div class="education-header d-flex flex-column gap-1 mb-3">
                <h3>Certifications & Continuous Learning</h3>
                <span class="school-name">Various Online Platforms</span>
                <span class="date-range">Ongoing</span>
              </div>
              <p class="education-description">
                Actively pursuing professional development through online courses and
                certifications.
              </p>
              <ul class="education-list">
                <li>
                  Actively pursue ongoing education in modern web technologies, frameworks, and best
                  practices to stay current with industry standards.
                </li>
                <li>
                  Regularly build personal and experimental projects to evaluate emerging tools,
                  libraries, and design patterns.
                </li>
                <li>
                  Expand knowledge of cloud services, containerization, and CI/CD practices for
                  modern web deployments.
                </li>
              </ul>
            </div>
          </div>

          <div v-if="activeSection === 'portfolio'" class="section-content fade-in">
            <h2>Portfolio Projects</h2>
            <div class="portfolio-item bg-light rounded p-4 border-start border-3 border-success">
              <div class="row g-4">
                <div class="col-md-6">
                  <h3>This Website</h3>
                  <div class="tech-stack mb-3">
                    <div class="tech-section mb-3">
                      <h5 class="text-muted small mb-2">Frontend</h5>
                      <div class="tech-tags d-flex gap-2 flex-wrap">
                        <span class="tech-tag">Vue.js</span>
                        <span class="tech-tag">TypeScript</span>
                        <span class="tech-tag">Vite</span>
                      </div>
                      <div class="tech-section">
                        <h5 class="text-muted small mb-2">Backend</h5>
                        <div class="tech-tags d-flex gap-2 flex-wrap">
                          <span class="tech-tag">AWS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>A modern, responsive resume website built with Vue 3, TypeScript, and Vite.</p>
                </div>
                <div class="col-md-6">
                  <div class="portfolio-carousel bg-white rounded border p-3">
                    <!-- Bootstrap Carousel Placeholder -->
                    <div id="thisWebsiteCarousel" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img
                            src="@/assets/mainPhotos/mainSite.png"
                            alt="This Website"
                            class="d-block w-100 carousel-image-clickable"
                            style="height: 250px; object-fit: cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-item bg-light rounded p-4 border-start border-3 border-success">
              <div class="row g-4">
                <div class="col-md-6">
                  <h3>TKO Doxies</h3>
                  <div class="tech-stack mb-3">
                    <div class="tech-section mb-3">
                      <div class="tech-tags d-flex gap-2 flex-wrap">
                        <span class="tech-tag">Javascript</span>
                        <span class="tech-tag">Jquery</span>
                        <span class="tech-tag">Weebly</span>
                      </div>
                    </div>
                    <div class="tech-section">
                      <h5 class="text-muted small mb-2">Backend</h5>
                      <div class="tech-tags d-flex gap-2 flex-wrap">
                        <span class="tech-tag">Velo</span>
                        <span class="tech-tag">Wix</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Dachshund Breeder Website – A charming, responsive website showcasing available
                    puppies, breeding information, and care resources, designed to connect potential
                    owners with the breeder.
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="portfolio-carousel bg-white rounded border p-3">
                    <div id="doxiesCarousel" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div
                          v-for="(image, index) in doxiesImages"
                          :key="index"
                          :class="['carousel-item', { active: index === 0 }]"
                        >
                          <img
                            :src="image.src"
                            :alt="image.alt"
                            class="d-block w-100 carousel-image-clickable"
                            style="height: 250px; object-fit: cover"
                            @click="openImageModal(index, 'doxies')"
                          />
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#doxiesCarousel"
                        data-bs-slide="prev"
                      >
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#doxiesCarousel"
                        data-bs-slide="next"
                      >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-item bg-light rounded p-4 border-start border-3 border-success">
              <div class="row g-4">
                <div class="col-md-6">
                  <h3>McMichen Consulting LLC</h3>
                  <div class="tech-stack mb-3">
                    <div class="tech-section mb-3">
                      <h5 class="text-muted small mb-2">Frontend</h5>
                      <div class="tech-tags d-flex gap-2 flex-wrap">
                        <span class="tech-tag">Javascript</span>
                        <span class="tech-tag">Jquery</span>
                      </div>
                      <div class="tech-section">
                        <h5 class="text-muted small mb-2">Backend</h5>
                        <div class="tech-tags d-flex gap-2 flex-wrap">
                          <span class="tech-tag">AWS</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Consulting Company Website – A clean, professional site highlighting services,
                    expertise, and company vision, designed to establish an online presence for a
                    growing consulting business.
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="portfolio-carousel bg-white rounded border p-3">
                    <!-- Bootstrap Carousel Placeholder -->
                    <div id="thisWebsiteCarousel" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img
                            src="@/assets/mainPhotos/mcmichen.png"
                            alt="mcMichen Consulting LLC"
                            class="d-block w-100 carousel-image-clickable"
                            style="height: 250px; object-fit: cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-item bg-light rounded p-4 border-start border-3 border-success">
              <div class="row g-4">
                <div class="col-md-6">
                  <h3>IVM SmartHub</h3>
                  <div class="tech-stack mb-3">
                    <div class="tech-section mb-3">
                      <h5 class="text-muted small mb-2">Frontend</h5>
                      <div class="tech-tags d-flex gap-2 flex-wrap">
                        <span class="tech-tag">Vue.js</span>
                      </div>
                    </div>
                    <div class="tech-section">
                      <h5 class="text-muted small mb-2">Backend</h5>
                      <div class="tech-tags d-flex gap-2 flex-wrap">
                        <span class="tech-tag">C#/.NET</span>
                        <span class="tech-tag">SQL</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Smart Vending Inventory System – A web-based platform that tracks inventory,
                    monitors sales, and manages restocking for smart vending machines, providing
                    real-time insights and analytics to optimize operations.
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="portfolio-carousel bg-white rounded border p-3">
                    <div id="ivmSmartHubCarousel" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div
                          v-for="(image, index) in ivmImages"
                          :key="index"
                          :class="['carousel-item', { active: index === 0 }]"
                        >
                          <img
                            :src="image.src"
                            :alt="image.alt"
                            class="d-block w-100 carousel-image-clickable"
                            style="height: 250px; object-fit: cover"
                            @click="openImageModal(index, 'ivm')"
                          />
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#ivmSmartHubCarousel"
                        data-bs-slide="prev"
                      >
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#ivmSmartHubCarousel"
                        data-bs-slide="next"
                      >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-item bg-light rounded p-4 border-start border-3 border-success">
              <div class="row g-4">
                <div class="col-md-6">
                  <h3>IVM</h3>
                  <div class="tech-stack mb-3">
                    <div class="tech-section mb-3">
                      <h5 class="text-muted small mb-2">Frontend</h5>
                      <div class="tech-tags d-flex gap-2 flex-wrap">
                        <span class="tech-tag">Javascript</span>
                        <span class="tech-tag">Jquery</span>
                        <span class="tech-tag">Kendo</span>
                      </div>
                    </div>
                    <div class="tech-section">
                      <h5 class="text-muted small mb-2">Backend</h5>
                      <div class="tech-tags d-flex gap-2 flex-wrap">
                        <span class="tech-tag">C#/.NET</span>
                        <span class="tech-tag">SQL</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Internal Inventory Management System – A secure, internal platform for tracking
                    stock, managing orders, and generating reports, streamlining inventory
                    operations for company teams.
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="portfolio-carousel bg-white rounded border p-3">
                    <div id="ivmSmartHubCarousel" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <div
                            class="d-flex align-items-center justify-content-center"
                            style="height: 250px; background-color: #e9ecef"
                          >
                            <span class="text-muted">No photos available</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-item bg-light rounded p-4 border-start border-3 border-success">
              <div class="row g-4">
                <div class="col-md-6">
                  <h3>Pedcor Companies</h3>
                  <div class="tech-stack mb-3">
                    <div class="tech-section mb-3">
                      <h5 class="text-muted small mb-2">Frontend</h5>
                      <div class="tech-tags d-flex gap-2 flex-wrap">
                        <span class="tech-tag">Javascript</span>
                        <span class="tech-tag">Jquery</span>
                      </div>
                    </div>
                    <div class="tech-section">
                      <h5 class="text-muted small mb-2">Backend</h5>
                      <div class="tech-tags d-flex gap-2 flex-wrap">
                        <span class="tech-tag">C#/.NET</span>
                        <span class="tech-tag">SQL</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Apartment Company Website – A responsive, user-friendly website showcasing
                    available properties, amenities, and company information to enhance resident
                    engagement and brand presence.
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="portfolio-carousel bg-white rounded border p-3">
                    <div id="pedcor1Carousel" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div
                          v-for="(image, index) in pedcor1Images"
                          :key="index"
                          :class="['carousel-item', { active: index === 0 }]"
                        >
                          <img
                            :src="image.src"
                            :alt="image.alt"
                            class="d-block w-100 carousel-image-clickable"
                            style="height: 250px; object-fit: cover"
                            @click="openImageModal(index, 'pedcor1')"
                          />
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#pedcor1Carousel"
                        data-bs-slide="prev"
                      >
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#pedcor1Carousel"
                        data-bs-slide="next"
                      >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-item bg-light rounded p-4 border-start border-3 border-success">
              <div class="row g-4">
                <div class="col-md-6">
                  <h3>Pedcor Living</h3>
                  <div class="tech-stack mb-3">
                    <div class="tech-section mb-3">
                      <h5 class="text-muted small mb-2">Frontend</h5>
                      <div class="tech-tags d-flex gap-2 flex-wrap">
                        <span class="tech-tag">Javascript</span>
                        <span class="tech-tag">Jquery</span>
                      </div>
                    </div>
                    <div class="tech-section">
                      <h5 class="text-muted small mb-2">Backend</h5>
                      <div class="tech-tags d-flex gap-2 flex-wrap">
                        <span class="tech-tag">C#/.NET</span>
                        <span class="tech-tag">SQL</span>
                      </div>
                    </div>
                  </div>
                  <p>
                    Apartment Finder Platform – A web application that allows users to search,
                    filter, and compare apartment listings with interactive maps, detailed property
                    info, and contact tools for easy leasing.
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="portfolio-carousel bg-white rounded border p-3">
                    <div id="pedcorCarousel" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div
                          v-for="(image, index) in pedcorImages"
                          :key="index"
                          :class="['carousel-item', { active: index === 0 }]"
                        >
                          <img
                            :src="image.src"
                            :alt="image.alt"
                            class="d-block w-100 carousel-image-clickable"
                            style="height: 250px; object-fit: cover"
                            @click="openImageModal(index, 'pedcor')"
                          />
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#pedcorCarousel"
                        data-bs-slide="prev"
                      >
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#pedcorCarousel"
                        data-bs-slide="next"
                      >
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="portfolio-item bg-light rounded p-4 border-start border-3 border-success">
              <h3>Additional Projects</h3>
              <p>
                Check out my
                <a href="https://github.com/slabbylabby" target="_blank">GitHub profile</a> for more
                projects.
              </p>
            </div>
            <div class="portfolio-item bg-light rounded p-4 border-start border-3 border-success">
              <div class="row g-4">
                <div class="col-md-6">
                  <h3>Product IMS Software demo for Carrier</h3>
                  <div class="tech-stack mb-3">
                    <div class="tech-section mb-3">
                      <h5 class="text-muted small mb-2">Frontend</h5>
                      <div class="tech-tags d-flex gap-2 flex-wrap">
                        <span class="tech-tag">React Native</span>
                        <span class="tech-tag">TypeScript</span>
                      </div>
                      <div class="tech-section">
                        <h5 class="text-muted small mb-2">Backend</h5>
                        <div class="tech-tags d-flex gap-2 flex-wrap">
                          <span class="tech-tag">Vercel</span>
                          <span class="tech-tag">NoSQL</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Air Conditioner Inventory Management System – A web-based platform for tracking
                    stock, managing orders, and generating reports, streamlining inventory
                    operations for an air conditioning company.
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="portfolio-carousel bg-white rounded border p-3">
                    <!-- Bootstrap Carousel Placeholder -->
                    <div id="thisWebsiteCarousel" class="carousel slide" data-bs-ride="carousel">
                      <div class="carousel-inner">
                        <div class="carousel-item active">
                          <img
                            src="@/assets/mainPhotos/carrier.png"
                            alt="This Website"
                            class="d-block w-100 carousel-image-clickable"
                            style="height: 250px; object-fit: cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>

    <!-- Image Modal -->
    <div v-if="showImageModal" class="image-modal-overlay" @click="closeImageModal">
      <div class="image-modal-content" @click.stop>
        <button class="image-modal-close" @click="closeImageModal">&times;</button>
        <img :src="selectedImage" :alt="selectedImageAlt" class="image-modal-img" />
        <p class="image-modal-caption">{{ selectedImageAlt }}</p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import '@/styles/global.css'
import SkillItem from '@/components/SkillItem.vue'

export default {
  name: 'HomeView',
  components: {
    SkillItem,
  },
  data() {
    return {
      darkMode: false,
      activeSection: 'about' as 'about' | 'experience' | 'education' | 'portfolio',
      showImageModal: false,
      selectedImage: '',
      selectedImageAlt: '',
      ivmImages: [
        {
          src: new URL('@/assets/mainPhotos/ivmPhotos/smarthubLogin.png', import.meta.url).href,
          alt: 'IVM SmartHub Login Screen',
        },
        {
          src: new URL('@/assets/mainPhotos/ivmPhotos/smarthubMachineHealth.png', import.meta.url)
            .href,
          alt: 'IVM SmartHub Machine Health',
        },
        {
          src: new URL('@/assets/mainPhotos/ivmPhotos/smarthubReporting.jpg', import.meta.url).href,
          alt: 'IVM SmartHub Reporting',
        },
        {
          src: new URL('@/assets/mainPhotos/ivmPhotos/smarthubVendActivity.jpg', import.meta.url)
            .href,
          alt: 'IVM SmartHub Vend Activity',
        },
      ],
      doxiesImages: [
        {
          src: new URL('@/assets/mainPhotos/doxies/doxiesHome.png', import.meta.url).href,
          alt: 'Doxies Home Screenshot 1',
        },
        {
          src: new URL('@/assets/mainPhotos/doxies/doxiesHome2.png', import.meta.url).href,
          alt: 'Doxies Home Screenshot 2',
        },
      ],
      pedcorImages: [
        {
          src: new URL('@/assets/mainPhotos/pedcor2/pedcorAptScreen1.png', import.meta.url).href,
          alt: 'Pedcor Living Screenshot 1',
        },
        {
          src: new URL('@/assets/mainPhotos/pedcor2/pedcorAptScreen2.png', import.meta.url).href,
          alt: 'Pedcor Living Screenshot 2',
        },
        {
          src: new URL('@/assets/mainPhotos/pedcor2/pedcorAptScreen3.png', import.meta.url).href,
          alt: 'Pedcor Living Screenshot 3',
        },
      ],
      pedcor1Images: [
        {
          src: new URL('@/assets/mainPhotos/pedcor1/pedcorHomeScreen.png', import.meta.url).href,
          alt: 'Pedcor Company Website Screenshot 1',
        },
        {
          src: new URL('@/assets/mainPhotos/pedcor1/pedcorHomeScreen2.png', import.meta.url).href,
          alt: 'Pedcor Company Website Screenshot 2',
        },
        {
          src: new URL('@/assets/mainPhotos/pedcor1/pedcorHomeScreen3.png', import.meta.url).href,
          alt: 'Pedcor Company Website Screenshot 3',
        },
        {
          src: new URL('@/assets/mainPhotos/pedcor1/pedcorHomeScreen4.png', import.meta.url).href,
          alt: 'Pedcor Company Website Screenshot 4',
        },
      ],
      skills: [
        { name: 'JavaScript', level: 90 },
        { name: 'Vue.js', level: 90 },
        { name: 'React', level: 60 },
        { name: 'Angular', level: 60 },
        { name: 'TypeScript', level: 85 },
        { name: 'Node.js', level: 75 },
        { name: 'C# / .NET', level: 80 },
        { name: 'HTML5 & CSS3', level: 95 },
        { name: 'SQL & Databases', level: 70 },
        { name: 'Git & Version Control', level: 85 },
      ],
    }
  },
  methods: {
    setActiveSection(section: 'about' | 'experience' | 'education' | 'portfolio'): void {
      this.activeSection = section
    },
    openImageModal(index: number, portfolio: string = 'ivm'): void {
      let images: Array<{ src: string; alt: string }> = this.ivmImages
      if (portfolio === 'pedcor') {
        images = this.pedcorImages
      } else if (portfolio === 'pedcor1') {
        images = this.pedcor1Images
      } else if (portfolio === 'doxies') {
        images = this.doxiesImages
      }
      const image = images[index]
      this.selectedImage = image.src
      this.selectedImageAlt = image.alt
      this.showImageModal = true
      document.body.style.overflow = 'hidden'
    },
    closeImageModal(): void {
      this.showImageModal = false
      document.body.style.overflow = 'auto'
    },
    downloadFile(): void {
      const fileUrl = new URL('@/assets/resumePdfs/sethbartelcsresume.pdf', import.meta.url).href
      const fileName = 'SethBartelResume.pdf'
      const link = document.createElement('a')
      link.href = fileUrl
      link.download = fileName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    },
  },
}
</script>

<style scoped>
#ivmSmartHubCarousel .carousel-control-prev-icon,
#ivmSmartHubCarousel .carousel-control-next-icon,
#pedcor1Carousel .carousel-control-prev-icon,
#pedcor1Carousel .carousel-control-next-icon,
#pedcorCarousel .carousel-control-prev-icon,
#pedcorCarousel .carousel-control-next-icon {
  filter: brightness(0) saturate(100%);
}

.carousel-image-clickable {
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.carousel-image-clickable:hover {
  opacity: 0.8;
}

.image-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
}

.image-modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.image-modal-img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
  border-radius: 8px;
}

.image-modal-caption {
  color: white;
  margin-top: 1rem;
  text-align: center;
  font-size: 1rem;
}

.image-modal-close {
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2.5rem;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.image-modal-close:hover {
  transform: scale(1.2);
}
</style>
