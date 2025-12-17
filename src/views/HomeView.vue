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
        <nav class="horizontal-tabs d-flex bg-white rounded shadow-sm p-3 gap-2 mb-4 flex-wrap">
          <button
            @click="setActiveSection('about')"
            :class="['tab-button btn', { active: activeSection === 'about' }]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path
                d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
              />
            </svg>
            About
          </button>
          <button
            @click="setActiveSection('experience')"
            :class="['tab-button btn', { active: activeSection === 'experience' }]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M5 2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2h3a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1h3V2zm6 2h-1V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2H5v8a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4z"
              />
            </svg>
            Experience
          </button>
          <button
            @click="setActiveSection('education')"
            :class="['tab-button btn', { active: activeSection === 'education' }]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M4.5 13.5A1.5 1.5 0 0 0 6 15h4a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 0-1 0v6z"
              />
              <path
                d="M8.648.711A.5.5 0 0 1 9 .5l.5-.5.5.5a.5.5 0 0 1 .352.711L8.648.711zm.5-.25a.5.5 0 0 0-.5 0l-5 2.5v2.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-2.5l-5-2.5z"
              />
            </svg>
            Education
          </button>
          <button
            @click="setActiveSection('portfolio')"
            :class="['tab-button btn', { active: activeSection === 'portfolio' }]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"
              />
            </svg>
            Portfolio
          </button>
        </nav>

        <section class="content-section bg-white rounded shadow p-5">
          <div v-if="activeSection === 'about'" class="section-content fade-in">
            <h2>About Me</h2>
            <p class="intro-text">
              Hello! I'm Seth Bartel from the Indianapolis area. I've been working as a web
              developer since late 2019, specializing in Front-End development. Over the past two
              years at IVM Inc., I've expanded my skills to full-stack development.
            </p>
            <h3 class="section-subtitle">Technical Skills</h3>
            <div class="skills-grid">
              <div class="skill-item bg-light rounded p-3 border-start border-3 border-primary">
                <div class="skill-header d-flex justify-content-between mb-2">
                  <span class="skill-name">JavaScript</span>
                  <span class="skill-level">90%</span>
                </div>
                <div class="skill-bar"><div class="skill-progress" style="width: 90%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">Vue.js</span>
                  <span class="skill-level">90%</span>
                </div>
                <div class="skill-bar"><div class="skill-progress" style="width: 90%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">React</span>
                  <span class="skill-level">60%</span>
                </div>
                <div class="skill-bar"><div class="skill-progress" style="width: 60%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">TypeScript</span>
                  <span class="skill-level">85%</span>
                </div>
                <div class="skill-bar"><div class="skill-progress" style="width: 85%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">Node.js</span>
                  <span class="skill-level">75%</span>
                </div>
                <div class="skill-bar"><div class="skill-progress" style="width: 75%"></div></div>
              </div>
              <div class="skill-item">
                <div class="skill-header">
                  <span class="skill-name">C# / .NET</span>
                  <span class="skill-level">70%</span>
                </div>
                <div class="skill-bar"><div class="skill-progress" style="width: 70%"></div></div>
              </div>
            </div>
          </div>

          <div v-if="activeSection === 'experience'" class="section-content fade-in">
            <h2>Professional Experience</h2>
            <div class="experience-item">
              <div class="experience-header d-flex flex-column gap-1 mb-3">
                <span class="company-name">IVM Inc.</span>
                <span class="date-range">2021 - Present</span>
              </div>
              <p class="experience-description">
                Led front-end development and expanded into full-stack responsibilities with Vue.js,
                TypeScript, and .NET.
              </p>
              <ul class="experience-list">
                <li>Developed responsive web applications serving thousands of users</li>
                <li>Implemented real-time data visualization dashboards</li>
                <li>Mentored junior developers and led code reviews</li>
              </ul>
            </div>
            <div class="experience-item">
              <div class="experience-header d-flex flex-column gap-1 mb-3">
                <h3>Junior Web Developer</h3>
                <span class="company-name">Web Development Startup</span>
                <span class="date-range">2019 - 2021</span>
              </div>
              <p class="experience-description">
                Built websites and web applications using vanilla JavaScript and Vue.js for various
                clients.
              </p>
              <ul class="experience-list">
                <li>Built custom websites and web applications</li>
                <li>Learned modern web technologies and best practices</li>
              </ul>
            </div>
          </div>

          <div v-if="activeSection === 'education'" class="section-content fade-in">
            <h2>Education</h2>
            <div class="education-item">
              <div class="education-header d-flex flex-column gap-1 mb-3">
                <h3>Bachelor of Science in Computer Science</h3>
                <span class="school-name">Indiana State University</span>
                <span class="date-range">Graduated 2021</span>
              </div>
              <p class="education-description">
                Completed a comprehensive computer science curriculum with focus on software
                development, databases, and web technologies.
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
                <li>Advanced Vue.js Development</li>
                <li>Full Stack Web Development</li>
                <li>Modern TypeScript Practices</li>
              </ul>
            </div>
          </div>

          <div v-if="activeSection === 'portfolio'" class="section-content fade-in">
            <h2>Portfolio Projects</h2>
            <div class="portfolio-item bg-light rounded p-4 border-start border-3 border-success">
              <h3>This Resume Website</h3>
              <div class="tech-tags d-flex gap-2 flex-wrap my-2">
                <span class="tech-tag">Vue.js</span>
                <span class="tech-tag">TypeScript</span>
                <span class="tech-tag">Vite</span>
              </div>
              <p>A modern, responsive resume website built with Vue 3, TypeScript, and Vite.</p>
            </div>
            <div class="portfolio-item bg-light rounded p-4 border-start border-3 border-success">
              <h3>IVM SmartHub</h3>
              <div class="tech-tags d-flex gap-2 flex-wrap my-2">
                <span class="tech-tag">Vue.js</span>
                <span class="tech-tag">C#/.NET</span>
                <span class="tech-tag">SQL</span>
              </div>
              <p>
                Internal application featuring real-time data visualization and user management.
              </p>
            </div>
            <div class="portfolio-item bg-light rounded p-4 border-start border-3 border-success">
              <h3>Additional Projects</h3>
              <p>
                Check out my
                <a href="https://github.com/slabbylabby" target="_blank">GitHub profile</a> for more
                projects.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  </article>
</template>

<script lang="ts">
import '@/styles/global.css'

export default {
  name: 'HomeView',
  data() {
    return {
      darkMode: false,
      activeSection: 'about' as 'about' | 'experience' | 'education' | 'portfolio',
    }
  },
  methods: {
    setActiveSection(section: 'about' | 'experience' | 'education' | 'portfolio'): void {
      this.activeSection = section
    },
    downloadFile(): void {
      const fileUrl = new URL('@/assets/resumePdfs/SethBartelResumeCSITFeb1.pdf', import.meta.url)
        .href
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
