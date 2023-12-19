// Import images
// import WebImage1 from '../images/project-images/web-project-1.jpg'
// import WebImage2 from '../images/web-project-2.jpg'
// import MobileImage1 from '../images/mobile-project-1.jpg'
// import MobileImage2 from '../images/mobile-project-2.jpg'
// import UIImage1 from '../images/ui-project-1.jpg'
// import UIImage2 from '../images/ui-project-2.jpg'
import cinequeueImg from '../images/project-images/cinequeue.png'
import gpImg from '../images/project-images/gp-appointment.png'
import hailImg from '../images/project-images/hail.png'
import postgramImg from '../images/project-images/postgram-max.png'
import rcmndrImg from '../images/project-images/rcmndr.png'
import todosImg from '../images/project-images/todos.png'

export const projectsData = [
  {
    id: 3,
    title: 'CineQueue',
    category: 'UI/UX Design',
    description: [
      `This App was the final group project that was done during the DevAcademy bootcamp with 4 members in the team over 7 days.`,
      `This app gave users the ability to add movies and tv shows to their watchlist, completed list, and see the runtime. It gave users options to choose content based on if they wanted to see TV Shows or Movies, the different genres within them and categories like upcoming and top rated. The key feature we had for our app was that you could see the entire runtime of a tv show and be able to change your availability in minutes per day. If you say for example only had 60 minutes to watch a show that was 40 hours long, it will take you 40 days to complete the series. We utilised the data from an API that was free to use and filtered based on data points we needed. Auth0 was also implemented so that each user could add content to their own watchlist and completed list.`,
      `Recommendations were implemented based on the content clicked on and appeared at the bottom of the screen. There is also a search functionality within the app to search for your desired content.`,
      `The idea came from combining different ideas together, one for recommendations and another for displaying time to watch a series and the idea of viewing the content.`,
      `I was the product owner, team lead, git lead, designer, and planner for this project. I worked heavily on the front-end and backend for the SQL database creating the overall display of the website and functionality.
    `,
    ],
    skills: `*React
    *TypeScript
    *REST API
    *JavaScript
    *SQL Database(Knex)
    *Express
    *Superagent
    *HTML
    *Tailwind CSS
    *Auth0
    `,
    img: cinequeueImg,
    link: 'https://github.com/samir-lekinwala/CineQueue',
  },
  {
    id: 5,
    title: 'rcmndr',
    category: 'Mobile Application',
    description: [
      `This was a project done with the entire classroom and the facilitators acting as senior devs to mimic what it would be like in the work force as a developer during an almost week long period. Students either paired up or went solo to add features, fix bugs and create a functional app that lets you recommend songs to your friends. There was also the ability to report songs which then get sent to the moderator team who have their own admin logins to check the reports and deem them offensive or not.`,
      `Within this collaborative project I worked on adding loading based on data being fetched, PWA functionality, and worked on creating the moderation of reported songs.
    `,
    ],
    skills: `*React
    *TypeScript
    *Tailwind CSS
    *SQL Database(Knex)
    *Express
    *Superagent
    *HTML
    *HTMX
    `,
    img: rcmndrImg,
    link: 'https://github.com/samir-lekinwala/rcmndr',
  },
  {
    id: 1,
    title: 'GP-Appointment',
    category: 'Web Application',
    img: gpImg,
    description: [
      `This App is just as the title suggests, it was a means for patients to make appointments with their GP. This App was made collaboratively with 2 other fellow students in the span of 1 day. You could create a new appointment, adjusting the time and date, if the appointment was already taken for that time and with that GP then the APP would let you know that the timing was unavailable. You could also view your previous/current appointments by inserting your name into the Appointment History to get a view of all past appointments.`,

      `This app was created as a group we wanted to make an app that could serve some real purpose in the real world.`,
      `
    In this project I worked heavily on the front-end with HandleBars, HTML and CSS, creating the overall design for the app whilst also chipping in the backend with the team to assist where I could.
    `,
    ],
    skills: `*Handlebars
    *Javascript
    * HTML
    * CSS
    * Express
    `,
    link: 'https://github.com/samir-lekinwala/GP-Appointment',
    // ProjectHeader: {
    // 	title: 'Project Management UI - From Context',
    // 	publishDate: 'Jul 26, 2021',
    // 	tags: 'UI / Frontend',
    // },
  },
  {
    id: 2,
    title: 'HAiL',
    category: 'Mobile Application',
    description: [
      `This App was a collaborative project made in the span of 1 day with 2 others to utilise a REST API to create an App that displayed the weather based on location chosen. In this App you could see the initial location which was set to Auckland but on the top right there is a dropdown menu that reveals Locations. The Locations page reveals many different popular cities from across the globe. 
    `,
      `The weather data comes from an API which can display many different properties and it is up to the user how to interpret the data. In our case we had to determine that x amount level of clouds in the sky would mean that it is considered cloudy. We had to adjust the icons we chose to display under the temperature to adjust based on the conditions of this data.`,
      `
    I worked heavily on the front-end design using React, TypeScript, HTML & CSS.
    `,
    ],
    skills: `*React
    *TypeScript
    *HTML
    *CSS
    *REST API
    `,
    img: hailImg,
    link: 'https://github.com/samir-lekinwala/HAiL',
  },
  {
    id: 4,
    title: 'Todo List',
    category: 'UI/UX Design',
    description: [
      `This is a solo project done as a challenge part of DevAcademy to make a functioning todo list app. Within this app you can add, edit, delete, and complete a todo, see how many todos are left in your list and clear todos that you have already marked as completed.`,
      `The aim of the app is to create a full-stack web application using the skills we had learnt over the course of the bootcamp and deploying apps to the web.`,
      `The app functionality is basic as it is only a todo list but to achieve this many different technologies had to be utilised to create this full-stack app which was deployed for a short time on the web using dokku.
    `,
    ],
    skills: `*React
    *TypeScript
    *JavaScript
    *SQL Database(Knex)
    *Express
    *Superagent
    *HTML
    *Dokku
    `,
    img: todosImg,
    link: 'https://github.com/samir-lekinwala/todos-full-stack',
  },

  {
    id: 6,
    title: 'Postgram-Max',
    category: 'Web Application',
    description: [
      `This was originally a 4 man team project but two of the team members ended up getting sick so the team was reduced to 2 after the planning stage. The aim of this project was to make a gallery app where you could upload a photo and attach a caption to the photo. It had taken some inspiration from Instagram however functionality wise our app due to the reduced number of team members and lack of API knowledge at the time we had to compromise to just using local data instead of being able to upload data using a back-end server and api. This was before we had managed to learn about connecting the front-end and back-end with api so our app ended up having to be a very basic gallery app. However this project was still a good learning opportunity as we had reduced members both me and the one other team member had to wear many hats during this project.`,
    ],
    skills: `*React
    *TypeScript
    *CSS
    *HTML
    `,
    img: postgramImg,
    link: 'https://github.com/samir-lekinwala/postgram-max',
  },
]
