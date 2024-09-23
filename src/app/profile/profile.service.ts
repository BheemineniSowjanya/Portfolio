import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'AI-Based Surveillance Drone Cloud Platform',
      desc: `Developed real-time SaaS application to create missions and monitor drone locations, speeds, telemetry data. ^
      Implemented the UI in ReactJS using the Material UI framework, and integrated APIs to allow users to construct missions and display dynamic drone data using Mapbox GL from the cloud for tracking. ^
      Established communication with virtual drone simulator via Python and Socket.io, WebRTC to acquire live telemetry data. ^
      Integrated MongoDB Atlas Cloud to store and retrieve mission and tracking related data. ^
      Published a research paper on AI-based surveillance drone cloud systems.`,
      livedemo: 'https://dronecloud.sowjanyabheemineni.com/',
      githurl: 'https://github.com/BheemineniSowjanya/AI_Based-Surveillance-Drone-Cloud-Platform',
      imgUrl: 'assets/images/MastersProject.png',
      tech: 'React 18, MaterialUI, MapBoxGL, WebRTC, Socket IO, Node JS, Express JS, Python, Drone Kit, Swiper Library, MongoDB Atlas'
    },
    {
      id: 2,
      title: 'React and Redux Powered Spotify Clone',
      desc: `Gained expertise in creating React functional components and their efficient reusability. ^
      Implemented a structured React file and folder organization to enhance code maintainability. ^
      Utilized Redux Toolkit for efficient application state management, ensuring smooth data flow. ^
      Applied proficiency in developing responsive user interfaces by leveraging the power of Tailwind CSS. ^
      Demonstrated the ability to seamlessly retrieve data from diverse sources using RapidAPI.`,
      livedemo: 'https://spotify.sowjanyabheemineni.com/',
      githurl: 'https://github.com/BheemineniSowjanya/React-Redux-powered-spotify-clone',
      imgUrl: 'assets/images/SpotifyCloneApp.png',
      tech: 'React 18, Redux Toolkit, Node JS, Express JS, Tailwind CSS, RapidAPI, Swiper Library'
    },
    {
      id: 3,
      title: 'Task Manager Application Using MEAN Stack',
      desc: `Developed a task-manager application from scratch using Angular-Material, Express JS and Mongo DB. ^
      Implemented the login and sign-up features using the JWT authentication technique where an access token is created for each user and refreshed every 15 min. ^
      Incorporated features to achieve basic CRUD operations on both lists as well as tasks. ^
      Engineered a responsive layout for the application to create a user-friendly and device-independent interface. ^
      Included drag-drop feature for the users to conveniently rearrange the lists and tasks. ^
      Devised a feature for the users to toggle a task as complete and incomplete by just clicking on that particular task. ^
      Deployed the whole database cluster onto the Mongo DB Atlas Cloud database service and pushed the node.js and angular deployable to a free-tier Express JS server and web server, respectively.`,
      livedemo: 'https://taskmanager.sowjanyabheemineni.com/',
      githurl: 'https://github.com/BheemineniSowjanya/TaskManager-Frontend',
      imgUrl: 'assets/images/tasksapp_screenshot.png',
      tech: 'Angular 15, Angular Material, Node JS, Express JS, Mongo DB, JWT Authentication, Mongo DB Atlas Cloud Service'
    },
    {
      id: 4,
      title: 'Cross Domain Enterprise Online Market Place',
      desc: `Designed, developed, and hosted an online marketplace created by merging three different company websites. ^
      Created a sign-up feature for the whole market place. ^
      Added a tracking feature to show where the user has visited in the marketplace. ^
      Included a feature where users can add a review/rating for any product/service offered in the marketplace. ^
      Created a widget to display the top five most visited and best-rated products from the whole marketplace. ^
      
      Future updations is to include responsive design.`,
      livedemo: 'https://marketsphere.sowjanyabheemineni.com/',
      githurl: 'https://github.com/BheemineniSowjanya/CrossDomain-Enterprise-Online-Market-Place-',
      imgUrl: 'assets/images/MarketSphere.png',
      tech: 'PHP, JavaScript, jQuery, HTML, Bootstrap, CSS, SQL, MySQL.'
    },

    {
      id: 5,
      title: 'Personal Portfolio Using Angular 15',
      desc: `Implemented a personal portfolio website using angular and bootstrap frameworks. ^In my view, portfolios are a great way to demonstrate the competencies you would list on a resume or talk about in an interview — they allow you to show and not just tell. ^ 
      During a job search, the portfolio showcases your work to potential employers. ^
      It presents evidence of your relevant skills and abilities. ^
      It took a while to complete the portfolio and I cannot wait for you all to know about me more.`,
      livedemo: 'https://sowjanyabheemineni.com/',
      githurl: 'https://github.com/BheemineniSowjanya/Portfolio',
      imgUrl: 'assets/images/portfolio_screenshot.png',
      tech: 'Angular 15, Node, Bootstrap, SCSS, HTML'
    }
  ]

  about2 = `Full Stack Software Developer with 4+ years of experience. ^
  Worked with Software Development Life Cycle(SDLC), Agile methodologies, and Low-code development. ^
  Expertise in Angular 2+ versions along with its material design, React, Javascript,  Node JS, Express JS, Java and UI with Responsive Designs. ^
  Have excellent knowledge in Python, Jquery, Bootstrap, MongoDB, and MySQL. ^
  My interests and extracurricular activities include but not limited to Badminton, Table-Tennis and learning new languages.
  `

  about = "I am intuitive in nature, lover of innovation and everything related to generating new knowledge. I tackle problems with a smile and solve them as soon as possible. Very calculative with respect to the time I spend and work I do."
  resumeurl = "https://drive.google.com/file/d/1QeVRzWsrCEDsE5Cy4UB0jKfI-SuXj42x/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'C++, Java, Python',
      'progress': '90%'
    },
    {
        'id': '2',
        'skill': 'PHP, Bootstrap',
        'progress': '90%'
    },
    {
        'id': '3',
        'skill': 'HTML, CSS, SCSS',
        'progress': '90%'
    },
    {
        'id': '4',
        'skill': 'Angular 2+, Angular Material',
        'progress': '90%'
    },
    {
        'id': '5',
        'skill': 'Javascript, React.js, Redux, Next.js, Vue.js',
        'progress': '85%'
    },
    {
        'id': '6',
        'skill': 'Eclipse IDE, Microsoft VSCode, Postman',
        'progress': '85%'
    },
    {
      'id': '7',
      'skill': 'Node.js, Express.js, JQuery',
      'progress': '90%'
    },
    {
      'id': '8',
      'skill': 'SQL, MySQL, Mongo DB, PostgreSQL, Oracle',
      'progress': '80%'
    },
    {
        'id': '9',
        'skill': 'GIT, SVN, REST APIs, GraphQL',
        'progress': '80%'
    },
    {
        'id': '10',
        'skill': 'Spring Boot, Docker, Kubernetes, AWS',
        'progress': '70%'
    }
  ];

  experienceData: any = [
    {
      id: 3,
      company: 'Tata Consultancy Services',
      location: 'Mumbai, India',
      timeline: 'Mar 2020 - Jul 2022',
      role: 'Full Stack Software Engineer',
      tech: 'Java, Angular, React, Vue, Low-code development, Spring-Boot, Bootstrap, NodeJS, ExpressJS, PostgreSQL, MongoDB, Kubernetes',
      work: `
      Led development of cloud-ready applications using microservices architecture and Kubernetes, enhancing scalability and flexibility. ^
      Developed responsive web apps with Spring Boot, Java, Angular, and React, ensuring WCAG accessibility compliance. ^
      Built cross-platform mobile apps with React Native, reducing development time and ensuring consistent UX across iOS and Android. ^
      Designed and implemented RESTful APIs and interservice communication using Apache Kafka and RabbitMQ for ideal integration. ^
      Facilitated low-code application development, enabling rapid prototyping and deployment with minimal coding.
      `
    },
    {
      id: 2,
      company: 'Tata Consultancy Services',
      location: 'Mumbai, India',
      timeline: 'Jul 2018 - Feb 2020',
      role: 'Associate Software Engineer',
      tech: 'Java, Angular 8, Node.js, ES6, Express.js, Bootstrap, Jenkins, Docker, PostgreSQL, MongoDB, REST APIs, CI/CD pipelines',
      work: `
      Modernized legacy PHP applications by migrating core services to Node.js/ES6, improving response by 40 percent. ^
      Redesigned customer-facing UIs with Angular 8 and Bootstrap, reducing page load times by 20 percent. ^
      Led migration of 15 SOAP services to Node.js/Express/MongoDB REST APIs, reducing latency by 50 percent. ^
      Resolved 80+ mission-critical bugs, reducing platform downtime by 30 percent. ^
      Introduced CI/CD pipelines using Jenkins to automate testing and deployments, enabling 5x more frequent releases. ^
      Championed standards like OpenAPI, Docker, and cloud architecture compliance, improving developer productivity.    
      `
    },

    {
      id: 1,
      company: 'Tata Consultancy Services',
      location: 'Mumbai, India',
      timeline: 'Nov 2017 - Jun 2018',
      role: 'Software Developer Intern',
      tech: 'PHP, JavaScript, JQuery, Drupal 8, AWS EC2, RDS, S3, MySQL, AWS CloudWatch, ELK Stack, Agile/Scrum, Test-Driven Development (TDD)',
      work: `
      Orchestrated migration of 50+ Drupal sites from Acquia to AWS using EC2, RDS, and S3, achieving seamless integration. ^
      Improved migration sprint efficiency by 70% through Gherkin-driven testing across unit, integration, and regression phases. ^
      Proficiently developed and managed Drupal 8 applications using XAMPP on Windows, Apache, MYSQL5, and PHP architecture. ^
      Partnered closely with cross-functional teams to ensure seamless integration and deployment of the Drupal sites on AWS. ^
      Implemented AWS CloudWatch and ELK stack for monitoring, halving incident response times and boosting operational visibility. ^
      Demonstrated robust problem-solving during migration, ensuring uninterrupted site functionality and performance. ^
      Competent in SDLC with a strong focus on Agile/Scrum and Test-Driven Development, ensuring rapid delivery of software.
      `
    },


  ]

  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }

  experience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.experienceData;
  }
}