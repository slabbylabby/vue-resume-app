<template>
  <div id="app">
    <main class="min-vh-100 p-1">
      <header class="d-flex flex-column justify-content-center" style=""> 
        <span class="text-center" style="color: #FFF"> Under Construction! come back soon for more planned features</span>
      </header>
      <div class="flex-container" style="margin-top: 5%; display: block ">
        <div class="row" style="padding-left: 5%">
          <!-- nav card-->
          <div class="col-md-1 mt-5 z-2" style="height: 60vh; padding-left: 0%; padding-right: 0%; position: relative; left: 0%;">
            <div class="d-flex flex-row " style="height: 100%; width: 100%; padding-left: 0px; padding-right: 0px;">
              <div class="d-flex flex-column col justify-content-right z-3" style="width: 40%; height: 100%; margin-top: 70%">
                <div id="aboutMeContainer" class="d-flex flex-column justify-content-center" style="width: 80%; height: 15%; border: 1px solid black; background-color: #f7f7f7; float: right; margin-left: 20%">
                  <div id="openArrow" class="text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                  </svg>
                  </div>
                  
                  <div id="closeArrow" class="text-center" style="display: none">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                  </div>
                
                </div>
            </div>

            <div class="d-flex flex-column col justify-content-center z-3" style="width: 50%; height: 100%; float: right">

                <div id="aboutContainer" @click="toggleBodyContent($event, 'aboutContainer')" class="d-flex flex-column justify-content-center" style="width: 100%; height: 15%; border: 1px solid black; background-color: #f7f7f7;">
                  <span class="text-center" style="pointer-events: none">About Me</span>
                </div>

                <div id="workContainer" @click="toggleBodyContent($event, 'workContainer')" class="d-flex flex-column justify-content-center" style="width: 100%; height: 15%; border: 1px solid black; background-color: #f7f7f7;">
                  <span class="text-center" style="pointer-events: none">Work Experience</span>
                </div>

                <div id="schoolContainer" @click="toggleBodyContent($event, 'schoolContainer')"  class="d-flex flex-column justify-content-center" style="width: 100%; height: 15%; border: 1px solid black; background-color: #f7f7f7;">
                  <span class="text-center" style="pointer-events: none">School </span>
                </div>

                <div id="contactContainer" @click="toggleBodyContent($event, 'contactContainer')" class="d-flex flex-column justify-content-center" style="width: 100%; height: 15%; border: 1px solid black; background-color: #f7f7f7;">
                  <span class="text-center" style="pointer-events: none">Contact Information</span>
                </div>
                <div id="portfolioContainer" @click="toggleBodyContent($event, 'portfolioContainer')" class="d-flex flex-column justify-content-center" style="width: 100%; height: 15%; border: 1px solid black; background-color: #f7f7f7;">
                  <span class="text-center" style="pointer-events: none">Portfolio</span>
                </div>
            </div>
            </div>
 
          </div>

           <!-- main card-->
           <div class="col-md-3 z-4" style="height: 75vh;">

            <div class="container" style="height: 100%; width: 100%; border: 1px solid black; border-bottom-right-radius: 5px; overflow: hidden; border-top-right-radius: 5px;"
            
            >
            <!-- top picture-->
            <section class="row" style="height: 55%; border-radius: 10px;">
              <img src="/workspaces/vue-resume-app/src/assets/confused.png" style=" width: 100%; height: 100%; padding: 0;">
            </section>
            
            <!-- bottom info-->
            <section class="row" style="height: 35%; background-color: #f7f7f7;font-family: 'Poppins', sans-serif; /* background-image: url('../src/assets/cropped-leaf.png'); background-repeat: no-repeat; background-size: 60%; background-position: 35% 65%;*/" >
              <div class="row pt-5">
                <div class="d-flex flex-column justify-content-top"> 
                  <div class="align-self-center pt-5">
                    <h1 class="text-center">Seth Bartel</h1>
                    <h4 class="text-center">Web Developer</h4>
                    <a href="https://www.linkedin.com/in/seth-bartel-20574313a/" class="me-2" style="color: #000;">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin align-self-center" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>
                    </a>
                
                    <a href="https://github.com/slabbylabby" class="me-2" style="color: #000">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github align-self-center" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                      </svg>
                    </a>
                  
                  </div>
                </div>
              </div>
            </section>

            <!-- bottom links-->
            <section class="row" style=" height:10%; background-color: #f7f7f7"> 
              <!-- download button-->
              <div class="d-flex flex-column col justify-content-center" style="border-right: 2px solid #D3D3D3; border-top: 2px solid #D3D3D3">
                <span class="align-self-center"> Download CV</span>
              </div>
              <!-- contact me button-->
              <div class="d-flex flex-column col justify-content-center" style=" border-top: 2px solid #D3D3D3;">
                <span class="btn align-self-center"> Contact ME</span>
              </div>
            </section>
          </div>
          </div>

          <!-- body card-->
          <div id="bodyCard" class="col-md-5 border z-1 p-1 mt-5" style="height: 70vh; background-color: #f7f7f7; display: none">
            <div id="bodyContainer" class="container" style="height: 100%; background-color: #D7D7D7;">
              <!-- header sections -->
              <div id="headerContent" class="row" style="display: none">
                <div id="aboutHeader" class="row" style="display: none">
                  <div class="d-flex flex-column justify-content-center p-4 mt-5" style="height: 25%; width: 90%; margin-left:5%; background-color: #f7f7f7;">
                    <h4 class="align-self-center"> About me</h4>
                  </div>
                
                </div>

              <div id="workHeader" class="row" style="display:none">
                <div class="d-flex flex-column justify-content-center p-4 mt-5" style="height: 25%; width: 90%; margin-left:5%; background-color: #f7f7f7;">
                  <h4 class="align-self-center"> Work Experience</h4>
                </div>
                
              </div>

              <div id="schoolHeader" class="row" style="display:none">
                <div class="d-flex flex-column justify-content-center p-4 mt-5" style="height: 25%; width: 90%; margin-left:5%; background-color: #f7f7f7;">
                  <h4 class="align-self-center"> School</h4>
                </div>
                
              </div>

              <div id="contactHeader" class="row" style="display:none">
                <div class="d-flex flex-column justify-content-center p-4 mt-5" style="height: 25%; width: 90%; margin-left:5%; background-color: #f7f7f7;">
                  <h4 class="align-self-center"> Contact Information</h4>
                </div>
                
              </div>

              <div id="portfolioHeader" class="row" style="display:none">
                <div class="d-flex flex-column justify-content-center p-4 mt-5" style="height: 25%; width: 90%; margin-left:5%; background-color: #f7f7f7">
                  <h4 class="align-self-center"> Portfolio </h4>
                </div>
                
              </div>
              </div>


              <!-- Begin body sections-->
              <div id="bodyContent" class="row" style="height: 70%; width: 90%; margin-left: 5%; background-color: #f7f7f7; display: none; overflow: auto;" > 
                <div id="aboutBody" class="row" style="display:none">
                  <div  class="d-flex flex-column justify-content-center mt-5" >
                    <p style="word-wrap: break-word;"> 
                      Hello! I'm Seth Bartel from Indianapolis Indiana. I've been working as a web developer since late 2019 and specialize in 
                      Front End development. For the past two years at IVM inc. I've been working as a full stack developer. Although, I'm still
                      considered Junior in backend development I've picked it up rather quickly. See my work history and Portfolio content for more
                      information.
                    </p>
                  </div>
                </div>
               
                <div id="workBody" class="row" style="display:none" >
                  <div class="d-flex flex-column justify-content-center mt-5">
                  <div>
                    <h4> IVM Inc.</h4>
                    <div>
                      <h3> Daily Responsibilities/ Notable Accomplishments</h3>

                      <ul>
                        <li><span>Led the development of all front-end web applications written with Vue3, React Native, and MVC overseeing architecture and design 
                          to ensure alignment with business goals and technical requirements.
                        </span></li>

                        <li><span>Acquired expertise in Vue.js through hands-on experience, quickly adapting to the framework to contribute to the development of 
                          dynamic and interactive web applications.
                        </span></li>

                        <li><span>Refactored and optimized .NET API calls to improve performance and reduce latency, enhancing application efficiency and ensuring 
                          faster data retrieval and seamless user experiences.
                        </span></li>

                        <li><span>Utilized Azure DevOps and Git for version control, continuous integration, and deployment, streamlining development workflows and 
                          ensuring efficient collaboration and delivery of high-quality software.
                        </span></li>

                        <li><span>Mentored junior developers in front-end web development, providing guidance on industry standards, best practices, and efficient 
                          coding techniques to improve code quality and maintainability.
                        </span></li>

                        <li><span>Collaborated closely with fellow developers, sales teams, management, and customers to gather requirements, deliver tailored 
                          solutions, and ensure project success through effective communication and cross-functional teamwork.
                        </span></li>

                        <li><span>Analyzed and debugged large SQL databases and queries to resolve data issues.
                        </span></li>
                        <li><span>Actively participated in daily stand-ups, providing project updates, addressing blockers, and collaborating with the team to ensure 
                          smooth and efficient development progress.
                        </span></li>

                        <li><span>Created unit tests and conducted thorough quality assurance (QA) on my own commits, ensuring high code quality, functionality, and 
                          minimizing defects before deployment.
                        </span></li>
                      </ul>
                    </div>

                    <div>
                      <h3>Notable Project Work</h3>
                      <ol>
                        <li><span>Revamped the login system by implementing a token-based authentication mechanism that securely refreshed user sessions, 
                          enhancing security and improving the overall user experience and reducing login-related support tickets by 20%.
                        </span></li>

                        <li><span>Developed a custom component for reading file inputs with validation, which significantly eased the process of onboarding new users 
                          and maintenance of existing users from our clients which reduced the onboarding process by up to 6 hours and reduced related 
                          support tickets by up to 80%.
                        </span></li>

                        <li><span>Developed custom in-house components, replacing third-party subscription services, resulting in an annual savings of approximately 
                          $8,000 while maintaining functionality and improving long-term scalability.
                        </span></li>

                        <li><span>Worked with a team to redevelop a legacy system into a web application boosting productivity for our office team and decreasing 
                          page load times by up to 50%.
                        </span></li>

                        <li><span>Successfully led the migration of the application from Vue 2 to Vue 3, implementing composition API, optimizing performance, and 
                          ensuring compatibility with existing features to enhance maintainability and scalability.
                        </span></li>

                        <li><span>Developed a system to efficiently upload, store, and retrieve images and PDF files for products, streamlining content management and 
                          enhancing the product catalog experience.
                        </span></li>
                      </ol>
                    </div>
                  </div>

                  <div>
                    <h4> Pedcor</h4>
                    <div>
                      <h3> Daily Responsibilities/ Notable Accomplishments </h3>

                      <ol>
                        <li><span>Managed a portfolio of up to 6 web applications, overseeing development, maintenance, and updates to ensure optimal performance, 
                          functionality, and user experience across all projects.
                        </span></li>
                        <li><span>Delivered polished design mockups to clients using collaborative interface design tools like Figma, ensuring seamless communication, 
                          real-time feedback, and alignment with client requirements and brand standards.
                        </span></li>
                        <li><span>Gained proficiency in C#, React Native, Angular, and MVC through hands-on experience, quickly adapting to new technologies to 
                          contribute to the development of scalable and efficient applications.
                        </span></li>
                        <li><span>Assisted in the development and maintenance of responsive websites using HTML, CSS, and JavaScript, ensuring cross-browser 
                          compatibility and mobile-friendly designs.
                        </span></li>
                        <li><span>Collaborated with senior developers to implement features and enhancements on web applications, following coding standards and 
                          best practices.
                        </span></li>
                        <li><span>Created and optimized front-end components using React and Angular, improving application performance and user experience.

                        </span></li>
                        <li><span>Contributed to the debugging and troubleshooting of web applications, identifying and resolving issues to improve functionality and 
                        user satisfaction.
                        </span></li>
                      </ol>
                    </div>

                    <div>
                      <h3>Notable Project Work</h3>

                      <ol>
                        <li><span>Integrated the support software's API to develop custom metrics and dashboards, enabling the management team to cut response 
                          time by 15% and improve decision-making through data-driven insights.
                        </span></li>

                        <li><span>Integrated the support software's API to develop custom metrics and dashboards, providing the management team with actionable 
                          insights and data-driven decision-making capabilities to optimize operations.
                        </span></li>

                      </ol>
                    </div>

                  </div>
                    
                  
                  </div>
                </div>
        
                <div id="schoolBody" class="row" style="display:none">
                  <div class="d-flex flex-column justify-content-center mt-5" >
                    <div>
                      <h3> School Information</h3>
                        <span>Indiana State University</span>
                      <h3>Degree Earned</h3>
                        <span>Bachelor's of Science in Information Technology with a focus in Web Development</span>
                    </div>
                  </div>
                </div>
                
                <div id="contactBody" class="row" style="display:none">
                  <div  class="d-flex flex-column justify-content-center mt-5" >
                    <div>
                      <h3> Emails:</h3>
                        <span><a href="mailto:sethrbartel@gmail.com">Professional and Job inquiries</a></span><br>
                        <span><a href="mailto:devsethbartel@gmail.com">Freelance Inquiries </a></span>
                    </div>
                  </div>
                </div>
                
                <div id="portfolioBody" class="row" style="display:none">
                  <div class="d-flex flex-column justify-content-center mt-5">
                    <div>
                      <h3> Notable Sites I've created or contributed to:</h3>
                        <span><a href="https://pedcorcompanies.com/">Pedcor</a></span><br>
                        <span><a href="https://ivminc.com/">IVM home page </a></span><br>
                        <span><a href="https://ivminc.com/ivm-smarthub/">IVM internal app sneak peak </a></span>
                    </div>
                  </div>
                </div>
                
              </div>

           
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet"></link>
<script>

export default {
  name: 'app',
  data() {
    return {
      darkMode: false,

      //body card vars and animations
      bodyCardVisible: false,
      headerVisible: false,
      bodyVisible: false,
    };
  },
  methods: {
    toggleMode() {
      console.log(this.darkMode)
      this.darkMode = !this.darkMode;
    },

    toggleBodyContent(e) {
      const elementId = e.target.id;
      console.log('clicked el ' + elementId)
      const body = document.getElementById('bodyContainer');
      let newIdHeader = elementId.replace('Container', 'Header');
      let newIdBody = elementId.replace('Container', 'Body');
      
      if(!this.bodyCardVisible){
        document.getElementById('bodyCard').style.display = "flex";
      }

      if(!this.headerVisible){
        document.getElementById('headerContent').style.display = "flex";
      }

      if(!this.bodyVisible){
        document.getElementById('bodyContent').style.display = "flex";
      }

      for(let i = 0; i < body.childElementCount; i++){

        Array.from(body.children[i].children).forEach((el => {
    
          if(el.id === newIdHeader || el.id === newIdBody){
            console.log('element id ' + el.id)
            console.log('new header ' + newIdHeader)
            console.log('new body ' + newIdBody)
            el.style.display = 'flex'
          } else {
            console.log('bad hit')
            el.style.display = 'none';
          }

        }));
      }
    },
  },
};
</script>
