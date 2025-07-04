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
import salesLedgerImg from '../images/project-images/sales-ledger-small.png'
import charmWebsiteImg from '../images/project-images/charm-website-screenshot.jpg'
import templateBarberImg from '../images/project-images/templatebarber-mobile.png'
import charmNextJSImg from '../images/project-images/charm-nextjs.png'
import sanskritiImg from '../images/project-images/sanskriti-wordpress.png'
import chatAppImg from '../images/project-images/chatapp-image.png'
import cinequeueNextjsImg from '../images/project-images/cinequeue-nextjs-image.jpg'
// import cinequeueNative from '../images/project-images/cinequeue-native.gif'

export const projectsData = [
  {
    id: 15,
    title: 'Plate it Pal',
    category: 'UI/UX Design',
    description: [
      'Plate it Pal is a lightweight smart kitchen app designed for users to input ingredients that they have laying around their kitchen and turn them into dishes. Utlising the power of AI, recipes are generated based on selected/inputted ingredients.',

      'This idea actually came from a casual stroll through Sylvia Park with a friend last week. He mentioned how helpful it would be to have an app that could suggest recipes based on ingredients he had left over utilising AI. I knew at that point I wanted to try building myself. While there are definitely other apps in this space, I wanted to create my own version as a fun challenge.',

      'Before starting any of the coding on the app I used Figma to create a wireframe of what I wanted the app to look like. This gave me a clearer view of what I would need in terms of functionality to make MVP too. Once the initial wireframe was made I went into the coding and was able to churn out the functional MVP app over the course of a long weekend. It was a fun project for me and I look forward to where this app may go or if I develop it further. I’ll try to get this app on the play store as my next challenge after some fixes.',
    ],
    skills: `*React Native Expo
    *TypeScript
    *JavaScript
    *Gemini 2.5 API


    `,

    youtubeLink: 'R7dDPfamht0',
  },
  {
    id: 14,
    title: 'CineQueue React Native',
    category: 'UI/UX Design',
    description: [
      'I’ve been wanting to create a project or recreate a project using React Native. I was trying to integrate Sonarr and Radarr into the React based app however due to limitations of the browser and accessing local networks I decided to pause the React development and switched to learning how to use React Native so I could implement Sonarr and Radarr effectively.',

      'Throughout the development of this project, the trajectory it has held has changed over the course of time. Initially it was developed to find and view TV show runtimes and Movie runtimes whilst being able to track how long all the content in your ‘Watchlist’ or ‘Seen List’ would take to watch. Although this feature is also one of the points of focus in the project, I moved towards being able to integrate Sonarr and Radarr functionality into this project as I heavily use these servers to manage content in my own personal life. I’m now able to see who is watching content on my Plex server using Tautulli API, find new shows and movies to add to my Sonarr and Radarr instances respectively and have a place to track what has been downloaded recently too.',
      'This project is a way for me to develop more in depth skills as a developer whilst utilising various technologies. I want to make a nice and seamless experience for users, including myself and learn from the whole process.',
      'There are more features I’d like to implement and UI changes and fixes that need to happen all which help me grow and advance my skills and I hope to be able to one day publish this app when It’s more polished into the mobile app stores.',
    ],
    skills: `*React Native Expo
    *TypeScript
    *JavaScript


    `,
    // img: cinequeueNative,
    youtubeLink: '3P1z3fMyTDI',
    // websiteLink: 'https://cinequeue-nextjs.netlify.app/',
  },
  {
    id: 13,
    title: 'CineQueue NextJS',
    category: 'UI/UX Design',
    description: [
      'Cinequeue NextJS is a recreation of a previous project that was made as a group using React and Tailwind with a SQL database utilising Knex. I wanted to recreate the project so that I can showcase my current skills and be able to host the project with a working database and authentication with firebase so that anyone can sign up and start using it. The original project was hosted for a short amount of time and also the hosting of the database was causing some issues so I wanted to change providers.',

      'I’m still currently working on this project however in it’s current stage it provides you with runtime per movie or tv show. Clicking on view more on an item sends you to the details page with a trailer/video related to the content, actors list and the ability to add the movie to your watch list and seen list. The watch list/seen list pages also provides you with a total runtime in the watchlist which can help users see how much time they need to get through all their content. Clicking on a member of the cast of the TV show/movie will send you to the individuals biography page which holds the content that the individual is credited for as a cast member.',
      'Runtime for items in the hero slider are visible as every time the slider changes the api is called to get the details. Search functionality has also been implemented and improved on utilising an infinity scroll component rather than page based.',

      'The aim of the web app is to provide users with a site that they can track their total runtime watched for movies/shows and how long a movie/show is whilst also providing discovery of new content using different parameters with a smooth experience with the UI/UX.',
    ],
    skills: `*React
    *NextJS
    *Tailwind CSS
    *JavaScript
    *HTML
    *Firebase/Firestore
    `,
    img: cinequeueNextjsImg,
    websiteLink: 'https://cinequeue-nextjs.netlify.app/',
  },
  {
    id: 12,
    title: 'ChatApp',
    category: 'UI/UX Design',
    description: [
      'Following the website I had created using Wordpress I wanted to go back to coding projects which is where I found myself starting off with researching and understanding how to use Firebase and Firestore to create a realtime database. I didn’t want to make a big project just yet but wanted to figure out the ins and outs of Firebase/Firestore.',

      'I used the knowledge I had learned from my research to then create a chat app which utilizes Firebase for authorization using Google pop up sign in services. And the backend with Firestore for the database.',

      'This is a simple app and it works simply as it should. It is more of a chat room as opposed to a one-on-one chat. Anyone can sign in with their Google account and write messages in the chat.',

      'The app is currently live and hosted on Netlify, you can see the example conversation being had in the chat and are able to enter your own messages if you wanted.',
    ],
    skills: `*React
    *NextJS
    *Tailwind CSS
    *JavaScript
    *HTML
    *Firebase/Firestore
    `,
    img: chatAppImg,
    websiteLink: 'https://chatapp2024.netlify.app/',
  },
  {
    id: 11,
    title: 'Sanskriti School Of Passion',
    category: 'UI/UX Design',
    description: [
      'Sanskriti School Of Passion is a site which I had made for a client using WordPress. This was my first time using WordPress so it took me getting some used to but in the end I believe I was able to make a website that was modern, user friendly and most importantly one that the client and I were both happy with.',

      'The site consists of 15 pages so it is the largest site I have made to date. Because of the size of the website I was able to learn a whole lot from my experiences. A lot of troubleshooting and figuring out the ins and outs of WordPress. It was a good experience to say the least.',

      'This was also the first time I was dealing with CMS(content management system). The client required parts of their website to be manageable by them. When I first started the project I was looking at creating something React based with NextJS and using WordPress as a headless CMS however I opted to make the website in full WordPress so I could get some more learning as there are a plethora of websites that are based off of WordPress.',

      'I went into this project thinking there would be no aspect from my previous knowledgebase that would come in handy however, as it turns out knowing HTML and CSS made the project go a lot smoother when it came to styling and any finer adjustments that were required.',
    ],
    skills: `*WordPress
    *HTML
    *CSS
    `,
    img: sanskritiImg,
    websiteLink: 'https://sanskriti.ac.nz',
  },
  {
    id: 10,
    title: 'Charm Beauty Parlour NextJS',
    category: 'UI/UX Design',
    description: [
      `I decided to experiment and try out NextJS. Utilising it’s routing capabilities and optimizations in SEO(Search engine optimization) I decided to take the plunge and also recreate the previous Charm Beauty Parlour website and also implement a new design for the hero.`,
      'The plan was to recreate the hero and adding services, making it more simple and more optimized as the last one was a slider and was making the website noticeably lag on Firefox on my mobile. I had a look into this and found that it’s better to have a static and minimal hero. They perform better and visibly look more appealing. Same goes with services on the page. Adding in 3 points just below the hero so customers can immediately see what to expect from the shop. I also spent a big proportion of time looking and researching about SEO to get this website performing as well as it could.',
      'This project was also a means for me to then go about buying, registering and then hosting a website with the domain name. I have learnt a lot from this project and I can see this information sticking with me to help me for future projects.',
    ],
    skills: `*React
    *NextJS
    *TypeScript
    *JavaScript
    *HTML
    *Tailwind CSS
    *Material Tailwind
    `,
    img: charmNextJSImg,
    websiteLink: 'https://charmbeautyparlour.co.nz',
  },
  {
    id: 9,
    title: 'Template Barbers',
    category: 'UI/UX Design',
    description: [
      `Template is a project I created based on wanting to create a website for barbers which could use this as a template for their own businesses. I wanted to use this to showcase where my skills are currently too. I started off designing the website in Figma and then when I was happy with how it looked, I started working on different components of the website and putting them together.`,
      'Template is fully responsive so please do check the link and see how it plays on different screen sizes. I put in a lot of effort to make the team members flow nicely on different screen sizes.',
      'This website surprisingly didn’t take me too long to create. This is a product that I am quite happy with. It shows my skills as a developer are indeed getting stronger. I’m sticking to using React with Tailwind CSS for the most part and even making components on my own, e.g the slideshow on mobile screens was made completely from scratch. However, I’m not currently happy with how the slideshow is, I would like for there to be a smooth animation in between the change of team members. Having that would make the website look a bit smoother.',
    ],
    skills: `*React
    *TypeScript
    *JavaScript
    *HTML
    *Tailwind CSS
    *Material Tailwind
    *Framer-Motion
    *EmailJS
    `,
    img: templateBarberImg,
    websiteLink: 'https://templatebarber.netlify.app/',
  },
  {
    id: 8,
    title: 'Charm Beauty Parlour',
    category: 'UI/UX Design',
    description: [
      `Charm Beauty Parlour is a website that I created for my mums business so that she could showcase her business, her skills and her legacy.`,
      `This website is built using React and Tailwind CSS. This is something I surprised my mum with, she didn’t know I had been working on creating a way for her to display her business and a bit about how the business has come to fruition. I’ve currently hosted the project using Netlify and I will be working on getting a custom domain however for the meantime I can at least showcase to you all the fruits of my labour.`,
      `It is a fairly simple website in the grand scheme of things – it has the main page, price list, and about page but each component of the website has been made with the utmost care.`,
      `The website is fully responsive – I built this with mobile first in mind as most of the target audience is likely using their smartphones to access the site.`,
      'Working on this project has helped me learn more about Tailwind CSS and I hope to continue to improve my knowledge in this field too. As with most people, Tailwind CSS is something that people may start off on a rocky foot with, it might seem a bit cumbersome to use but overtime it grows on you. I currently very much enjoy using Tailwind CSS.',
      'I’d like to continue developing websites to improve my skills and have more projects under my belt to showcase. Being able to showcase these projects here and in my portfolio helps me see the progress I have been making throughout my time of being a developer. I can see myself and how far I have come and I am looking forward to where I can go from here.',
    ],
    skills: `*React
    *TypeScript
    *JavaScript
    *HTML
    *Tailwind CSS
    *Material Tailwind
    `,
    img: charmWebsiteImg,
    websiteLink: 'https://charmbeautyparlour.netlify.app/',
  },
  {
    id: 7,
    title: 'Sales Ledger',
    category: 'UI/UX Design',
    description: [
      `A solo project that I had envisioned while I was at Dev Academy. This was a project that I wanted to work on after I had graduated so I continued to have a project to work on. I am currently still working on this project however now that it is in a state that I would consider past MVP (minimal viable product) I have decided to show the public.`,
      `I worked on this project during my free time and had found myself changing the design and functionality as time went on to further develop my skills and also as I went on I realised the app needed more functionality to be useful.`,
      `I like to keep track of my buying and selling and seeing how much profit I am currently on. This app helps me keep track of my inventory, the value of the inventory and where I had done the sales and dates. Specifically with TradeMe, it does not store data for very long so any user data like sold items or won items etc are not kept track of for more than a few months. It also does not have a way for me to check how much I have made in profit. Rather it only shows per sale. This along with using Facebook as my other primary source of trading I decided to make an app that encompasses what I had been doing with Excel spreadsheet which wasn’t very tidy looking. I wanted to make sure I could have a nice UI and UX so that it would not be cumbersome to use.`,
      `I am looking into switching from React to React Native so that I can have the Sales Ledger on my mobile as I had already designed the Sales Ledger with mobile first in mind.
    `,
    ],
    skills: `*React
    *TypeScript
    *JavaScript
    *SQL Database(Knex)
    *Express
    *Superagent
    *HTML
    *Tailwind CSS
    *Material Tailwind
    *Toastify
    `,
    img: salesLedgerImg,
    // link: 'https://github.com/samir-lekinwala/CineQueue',
    youtubeLink: 'PfpudzcNp5M',
  },
  {
    id: 3,
    title: 'CineQueue',
    category: 'UI/UX Design',
    description: [
      `This App was the final group project that was done during the DevAcademy bootcamp with 4 members in the team over 7 days.`,
      `This app gave users the ability to add movies and tv shows to their watchlist, completed list, and see the runtime. It gave users options to choose content based on if they wanted to see TV Shows or Movies, the different genres within them and categories like upcoming and top rated. The key feature we had for our app was that you could see the entire runtime of a tv show and be able to change your availability in minutes per day. If you say for example only had 60 minutes to watch a show that was 40 hours long, it will take you 40 days to complete the series. We utilised the data from an API that was free to use and filtered based on data points we needed. Auth0 was also implemented so that each user could add content to their own watchlist and completed list.`,
      `Recommendations were implemented based on the content clicked on and appeared at the bottom of the screen. There is also a search functionality within the app to search for your desired content.`,
      `The idea came from combining different ideas together, one for recommendations and another for displaying time to watch a series and the idea of viewing the content. I personally was really wanting to create this app because I have a huge interest in movies and TV shows and wanted to have somewhere I could search and find the runtime of a show. This was a huge motivation for me to do this project. There are plans to continue doing this project and implementing new features such as adding friends and seeing their watchlist/completed lists.`,
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
      `All the tickets that I worked on was for areas that I had not worked in before, so it was a good learning opportunity. I especially enjoyed the satisfaction of being able to download the app to our mobile phones and being able to display it on there.`,
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

      `As a group we wanted to utilize the skills we had learnt so far at the bootcamp. This was at a point before we learned about SQL databases so as a substitute we used JSON data. It was a good learning opportunity. We wanted to make an app that could serve some real purpose in the real world. I believe we achieved this to some degree although it is a bit unpolished, the basic functionality is there. We wanted to have a separate admin page which requires some sort of passcode or login so the doctors practice could see who would becoming to be seen on any given day but we did not have enough time to create that function.`,
      `
      In this project I worked heavily on the front-end with HandleBars, HTML and CSS, creating the overall design for the app whilst also chipping in the backend with the team to assist where I could. Within this project I got quite a bit of knowledge using Handlebars and CSS..
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

      `The reason we chose to do this project was because we wanted to be able to utilize an API. It was one of our first times using them and as it turns out it worked out well. We wanted to be able to originally be able to give the temperature based on any location, this would use longitude and latitude data based on a person’s current location or being able to search a country which would in the backend look at the longitude and latitude data which in turn would display the cities temperature. To do this it would be required to find a data set of cities and their coordinates. As far as I can tell this is doable and the resources are out there. Unfortunately doing so would have required a lot more time which we did not have.`,
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
      `This was my first time using Dokku so it was a good learning opportunity for when it comes to deploying apps. It was a bit of a struggle due to some syntax issues but it felt good to have to have it successfully deploy.`,
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
      `If we were to redo this project, I would focus more on the front end and making it look better, more responsive using Tailwind and having more functionality such as commenting but last but not least, being able to have a proper backend where users could upload directly to the server instead of having to use local images.`,
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
