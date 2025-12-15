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

<style scoped>
:root {
  --primary-color: #2c3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  --light-bg: #ecf0f1;
  --dark-text: #2c3e50;
  --border-color: #bdc3c7;
  --success-color: #27ae60;
}

.modern-resume-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh;
  position: relative;
}

/* background handled globally to cover full scroll area */

.main-layout {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.left-portrait-section {
  flex: 0 0 300px;
  position: sticky;
  top: 20px;
  margin-bottom: 12px;
}

.portrait-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 12px;
  overflow: hidden;
  text-align: center;
}

.portrait-photo {
  width: 100%;
  max-width: 250px;
  aspect-ratio: 1;
  object-fit: cover;
  border: 4px solid var(--secondary-color);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
}

.portrait-photo:hover {
  transform: scale(1.03);
}

.portrait-name {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0 0 8px 0;
}

.portrait-title {
  font-size: 1rem;
  color: var(--secondary-color);
  font-weight: 600;
  margin: 0 0 20px 0;
}

.social-links {
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 20px;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--light-bg);
  border-radius: 50%;
  color: var(--primary-color);
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--secondary-color);
  color: white;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.action-buttons {
  display: flex;
  gap: 10px;
  flex-direction: column;
  width: 100%;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 20px;
  font-weight: 600;
  font-size: 0.9rem;
  border: none;
  cursor: pointer;
  transition:
    background 150ms ease,
    transform 150ms ease,
    box-shadow 200ms ease,
    filter 150ms ease;
  width: 100%;
  color: white;
}

.btn svg {
  color: white;
  fill: white;
}

.btn-primary {
  background: linear-gradient(135deg, #2b6fb6 0%, #1f5fa0 100%);
  color: white;
  box-shadow: 0 6px 20px rgba(15, 76, 120, 0.25);
  transition:
    background 150ms ease,
    transform 150ms ease,
    box-shadow 200ms ease,
    filter 150ms ease;
}

.btn-primary:hover {
  /* darken using filter so gradient transition is smooth */
  filter: brightness(0.9);
  color: white;
  box-shadow: 0 8px 28px rgba(15, 76, 120, 0.3) !important;
}

/* higher specificity to override framework defaults when needed */
.btn.btn-primary:hover {
  filter: brightness(0.86);
}

/* stronger specificity to override Bootstrap or other rules */
.portrait-card .action-buttons .btn.btn-primary:hover,
.portrait-card .action-buttons .btn.btn-primary:focus,
.portrait-card .action-buttons .btn.btn-primary:active {
  -webkit-filter: brightness(0.86) !important;
  filter: brightness(0.86) !important;
}

/* keyboard focus visible state */
.portrait-card .action-buttons .btn.btn-primary:focus-visible {
  outline: 3px solid rgba(255, 255, 255, 0.12);
  outline-offset: 2px;
}

.right-content-section {
  flex: 1;
  min-width: 0;
}

.horizontal-tabs {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  background: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  flex-wrap: wrap;
}

.tab-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 18px;
  border: 2px solid transparent;
  background: var(--light-bg);
  color: var(--dark-text);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  flex: 1;
  min-width: 130px;
}

.tab-button:hover {
  /* background: var(--secondary-color); */
  /* color: white; */
  transform: translateY(-2px);
}

.content-section {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  padding: 40px;
  min-height: 500px;
  animation: slideInRight 0.4s ease-out;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.section-content {
  animation: fadeIn 0.3s ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.section-content h2 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 30px;
  padding-bottom: 15px;
  border-bottom: 3px solid var(--secondary-color);
  display: inline-block;
}

.section-content h3 {
  font-size: 1.2rem;
  color: var(--primary-color);
  margin: 20px 0 10px 0;
}

.section-subtitle {
  font-size: 1.1rem;
  color: var(--primary-color);
  margin: 30px 0 20px 0;
  font-weight: 600;
  border-bottom: 2px solid var(--light-bg);
  padding-bottom: 10px;
}

.intro-text {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--dark-text);
  margin-bottom: 30px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.skill-item {
  background: var(--light-bg);
  padding: 18px;
  border-radius: 8px;
  border-left: 4px solid var(--secondary-color);
  transition: all 0.3s ease;
}

.skill-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.skill-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.skill-name {
  font-weight: 600;
  color: var(--primary-color);
}

.skill-level {
  font-size: 0.85rem;
  color: var(--secondary-color);
  font-weight: 700;
}

.skill-bar {
  height: 8px;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.skill-progress {
  height: 100%;
  background: var(--secondary-color);
  border-radius: 10px;
}

.experience-item,
.education-item {
  margin-bottom: 35px;
  padding-bottom: 30px;
  border-bottom: 2px solid var(--light-bg);
}

.experience-item:last-child,
.education-item:last-child {
  border-bottom: none;
}

.experience-header,
.education-header {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 15px;
}

.experience-header h3,
.education-header h3 {
  margin: 0;
  color: var(--primary-color);
  font-size: 1.15rem;
}

.company-name,
.school-name {
  font-weight: 600;
  color: var(--secondary-color);
  font-size: 0.9rem;
}

.date-range {
  font-size: 0.85rem;
  color: var(--border-color);
  font-weight: 500;
}

.experience-description,
.education-description {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--dark-text);
  margin-bottom: 15px;
}

.experience-list,
.education-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.experience-list li,
.education-list li {
  padding: 8px 0 8px 25px;
  position: relative;
  color: var(--dark-text);
  font-size: 0.95rem;
  line-height: 1.6;
}

.experience-list li:before,
.education-list li:before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--secondary-color);
  font-weight: bold;
}

.portfolio-item {
  margin-bottom: 25px;
  padding: 20px;
  background: var(--light-bg);
  border-radius: 8px;
  border-left: 4px solid var(--success-color);
  transition: all 0.3s ease;
}

.portfolio-item:last-child {
  margin-bottom: 0;
}

.portfolio-item:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.portfolio-item h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: var(--primary-color);
}

.portfolio-item p {
  font-size: 0.95rem;
  line-height: 1.7;
  color: var(--dark-text);
  margin: 10px 0;
}

.portfolio-item a {
  color: var(--secondary-color);
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.portfolio-item a:hover {
  color: var(--accent-color);
  text-decoration: underline;
}

.tech-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 10px 0;
}

.tech-tag {
  display: inline-block;
  background: var(--secondary-color);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .modern-resume-container {
    max-width: 100%;
    padding: 10px;
    min-height: 100vh;
  }

  .main-layout {
    flex-direction: column;
    gap: 0;
    align-items: stretch;
    height: 100%;
  }

  .left-portrait-section {
    flex: 0 0 auto;
    position: sticky;
    top: 0;
    z-index: 10;
    max-height: auto;
    overflow: hidden;
    background: white;
    margin-bottom: 12px;
  }

  .portrait-card {
    padding: 20px;
    gap: 15px;
    border-radius: 12px;
    margin: 8px;
  }

  .portrait-photo {
    max-width: 150px;
  }

  .portrait-name {
    font-size: 1.4rem;
  }

  .right-content-section {
    flex: 1;
    min-width: 0;
    max-height: auto;
    overflow: visible;
  }

  .horizontal-tabs {
    position: sticky;
    top: auto;
    z-index: 9;
    flex-direction: row;
    gap: 8px;
    padding: 10px;
    margin-bottom: 0;
    background: white;
    flex-wrap: nowrap;
    overflow-x: auto;
  }

  .tab-button {
    flex: 0 0 auto;
    min-width: 80px;
    padding: 10px 12px;
    font-size: 0.75rem;
    white-space: nowrap;
  }

  .content-section {
    padding: 20px;
    min-height: auto;
    margin-bottom: 20px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .section-content h2 {
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  .section-content h3 {
    font-size: 1rem;
  }
}

@media (min-width: 769px) {
  .modern-resume-container {
    max-width: 1400px;
    max-height: auto;
    margin: 0 auto;
    padding: 20px;
    min-height: auto;
  }

  .main-layout {
    display: flex;
    gap: 30px;
    align-items: flex-start;
  }

  .left-portrait-section {
    flex: 0 0 300px;
    position: sticky;
    top: 20px;
    max-height: auto;
    overflow: visible;
  }

  .portrait-card {
    padding: 30px;
    gap: 20px;
  }

  .portrait-photo {
    max-width: 250px;
  }

  .portrait-name {
    font-size: 1.8rem;
  }

  .right-content-section {
    flex: 1;
    min-width: 0;
    max-height: none;
    overflow: visible;
  }

  .horizontal-tabs {
    flex-direction: row;
    gap: 10px;
    padding: 15px;
    margin-bottom: 20px;
    flex-wrap: wrap;
  }

  .tab-button {
    flex: 1;
    min-width: 130px;
    padding: 12px 18px;
    font-size: 0.9rem;
  }

  .content-section {
    padding: 40px;
    min-height: 500px;
  }

  .skills-grid {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .section-content h2 {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  .section-content h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .portrait-card {
    padding: 20px;
  }

  .portrait-photo {
    max-width: 180px;
  }

  .portrait-name {
    font-size: 1.4rem;
  }

  .content-section {
    padding: 15px;
  }

  .tab-button {
    flex: 1;
    min-width: 0;
    padding: 8px 10px;
    font-size: 0.75rem;
  }
}

.fade-in {
  animation: fadeIn 0.3s ease-in;
}
</style>
