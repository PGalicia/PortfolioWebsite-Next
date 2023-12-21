import type { ProjectType } from '@/types/ProjectType'

export const PROJECTS: ProjectType[] = [
  {
    id: 'nook-doku',
    name: 'Nook Doku',
    category: 'Web App',
    description: `<p class="mb-6">A trivia-like web application that tests your knowledge about the Animal Crossing intellectual property. This app uses NookiPedia API to grab animal
      crossing villager's information</p>
      <p class="mb-6"><strong>How It Works</strong>: Similar to grid-based games such as PokeDoku or HoopGrids, you need to find answer that fits the category.
      Let's say that there's a cell in the grid with the categories of Penguin and Jock for example. You need to find a villager that is in penguin species and
      has a jock personality (in this example, one answer would be Roald). In the case, you got stuck, there is also a hint system</p>
      <p class="mb-6">The app also records all of your answers just to see which villagers you usually pick (aka your favorites)</p>
      <p class="mb-4 italic text-sm font-light">Note: As of December 2023, this project is currently still in development. You can check out the roadmap 
      <a class="underline font-thin hover:font-bold underline-offset-2" href="https://trello.com/b/TqnSl8Ul/nookdoku-development-roadmap" target="_blank">here</a></p>
    `,
    stack: ['ReactJs', 'NextJs', 'Redux', 'Javascript/Typescript', 'ESLint', 'Tailwind CSS/SASS'],
    images: ['filled-in-board.png', 'empty-board.png', 'modal.png', 'modal-with-hints.png', 'villager-stats.png'],
    githubRepoLink: 'https://github.com/PGalicia/NookDoku-Next',
    demoLink: {
      text: 'View App',
      link: 'https://nook-doku-next.vercel.app/'
    },
    backgroundColorHex: '#F7F4E8'
  },
  {
    id: 'boolder',
    name: 'Boolder',
    category: 'Web App',
    description: `<p class="mb-6">A web application that allows you to share your builds for Supergiant's game: Hades.</p>
      <p class="mb-6"><strong>How It Works</strong>: To start off, you click "Select A Boon". From there you can pick what boons you would like. Boons are grouped by
      gods and you filter out boons based which god is selected on top of the modal. Once you're satisfied with your build, you share it by pressing the share button. This essentially copies the url link. </p>
    `,
    stack: ['VueJs', 'NuxtJs', 'Pinia', 'Javascript/Typescript', 'ESLint', 'Tailwind CSS/SASS'],
    images: ['home-page.png', 'select-build-modal.png', 'home-page-with-build.png'],
    githubRepoLink: 'https://github.com/PGalicia/Hades-Boolder-Client-Nuxt',
    demoLink: {
      text: 'View App',
      link: 'https://hades-boolder-client-nuxt.vercel.app/'
    },
    backgroundColorHex: '#FF8181'
  },
  {
    id: 'aprl',
    name: 'APRL',
    category: 'Website',
    description: `<p class="mb-6">The website serves as an inviting gateway into the world of APRL, offering visitors a comprehensive view of the organization and its services.
      Designed as an informative platform, it showcases APRL's mission while highlighting the diverse range of services they provide. Additionally, the site acts as a promotional hub, spotlighting their innovative app and serving as a central point for visitors to connect and engage with the APRL team.</p>`,
    stack: ['ReactJs', 'Redux', 'HTML5', 'CSS/SASS'],
    images: ['home-page.png'],
    githubRepoLink: '',
    demoLink: {
      text: 'Visit Site',
      link: 'https://aprl.la/'
    },
    backgroundColorHex: '#FFF'
  },
  {
    id: 'event-planner',
    name: 'Event Planner',
    category: 'Event Planner App',
    description: `<p class="mb-6">A web application that lets users create and manage events, including the attendees, and items needed for the events. This side project was made to help organize events in my friend group.</p>
      <p class="mb-6"><strong>How It Works</strong>: For the homepage, the web app displays a “create an event” button and all the events the user has created. The top event section will always showcase the latest upcoming event <i>(if available)</i>, the middle section will always showcase the possible future events, and the last section would showcase the past events. In each event card, users can see the following information: event name, datetime, location, edit button, delete button, and “See more” button.</p>
      <p class="mb-6">If the user pressed “See more”, they will not only see the core information about the event <i>(as mentioned above)</i> but also additional information, such as the attendees and the needed items for the event <i>(as shown below)</i>. For the items section, each item is color coded and each item’s color(s) corresponds to the color associated with each attendee, displaying which users are responsible for what items. In addition, users can reassign item responsibility by pressing the “Reassign Items” located at the bottom of the event page.</p>
      <p class="mb-4 italic text-sm font-light">Note: As of December 2023, this is a proof of concept and would want to expand on it in the future.</p>
      `,
    stack: ['ReactJs', 'Redux', 'NodeJs', 'ExpressJs', 'HTML5', 'CSS/SASS', 'SQLite', 'Sequelize', 'Jest', 'Webpack'],
    images: ['home-page.png', 'view-event-page.png', 'edit-event-page.png', 'reassign-item-page.png', 'create-event-page.png'],
    githubRepoLink: 'https://github.com/PGalicia/EventPlanner',
    demoLink: {
      text: 'View Demo',
      link: 'https://eventplanner-ccb48.firebaseapp.com/'
    },
    backgroundColorHex: '#B4C5DC'
  },
  {
    id: 'wisely',
    name: 'Wisely',
    category: 'Budget Management App',
    description: `<p class="mb-6">A web application that takes a percentage amount of your total money as your “spending money” and allocate it to the items you want to use the money on.</p>
      <p class="mb-6"><strong>How It Works</strong>: The web app allows its users to input the items that they want to save up for and the users' total money <i>(ie the total money you have in your bank account)</i>. 
      A percentage is then taken out of the inputted "total money" and set it as your spending money. As the default, 30% of your total would be used but this can be changed based on your preference.</p>
      <p class="mb-6">The spending money is then allocated to the items the users listed, prioritizing items with higher priority. For example, consider you have a spending money of $100 and three items with their corresponding 
      cost: Item A($50), Item B($75), Item C($30). Item A will then be set to have priority 1, which is the highest priority, and this makes the other two items have a default priority of 2. 
      The spending money will then prioritize allocating to Item A and once its complete it will then allocate the rest of the money to the next priority item, in this case, Item B and Item C. Since the 
      last two items, have the same priority, the remaining spending money will then be split between the two.</p>
      <p class="mb-4 italic text-sm font-light">Note: As of December 2023, I am currently working on a version 2 of this web app, which you can see <a class="underline font-thin hover:font-bold underline-offset-2" href="https://drive.google.com/open?id=1BQDNJLEtZZiBB2hCC3bDnlWoYTrFS94E" target="_blank">here</a>. 
      I am planning to redo the project from the ground up, utilizing modern framework</p>
      `,
    stack: ['Python', 'Flask', 'HTML5', 'CSS3', 'JavaScript', 'JQuery', 'PySQL', 'MySQL'],
    images: ['home-page.png', 'edit-money-modal.png', 'edit-item-name-modal.png'],
    githubRepoLink: 'https://github.com/PGalicia/Wisely',
    demoLink: null,
    backgroundColorHex: '#A7B77D'
  },
  {
    id: 'cocktail-finder',
    name: 'Cocktail Finder',
    category: 'Web App',
    description: `<p class="mb-6">A web application that allows users to make a cocktail based on which alcohols and ingredients they currently have. This side project is an introduction to a bigger project that a friend and I designed in college, which we can discuss more about in person.</p>
      <p class="mb-6"><strong>How It Works</strong>: To the right of the home page, users can see all the available cocktails with each cocktail card presenting its ingredients. While the left side showcases the filtering feature. This feature allows users to choose which alcohol and/or ingredients they have and it will present
      them the result page <i>(as shown below)</i>. The result page contains two category: "You can make", and "You can almost make". As the name suggests, "You can make" category will display the cocktail(s) that exactly match the chosen alcohol/ingredients and "You can almost make" will display
      cocktail(s) that the user can <i>ALMOST</i> make.</p>
      `,
    stack: ['ReactJs', 'Redux', 'HTML5', 'CSS/SASS', 'Webpack'],
    images: ['home-page.png', 'filtered-result-page.png'],
    githubRepoLink: 'https://github.com/PGalicia/CocktailFinder',
    demoLink: {
      text: 'View Demo',
      link: 'https://pgalicia.github.io/CocktailFinder/'
    },
    backgroundColorHex: '#FAD8A8'
  },
  {
    id: 'uci',
    name: 'Healthy Campus Initiative',
    category: 'Website',
    description: `<p class="mb-6">A front-end prototype created for University of California, Irvine that serves as hub for all the resources available for both students and staff.</p>
      <p class="mb-6"><strong>How It Works</strong>: For the homepage, users can see the navigation buttons which consists of the home button and various working group page. The main feature of this page is the dropdown search <i>(as shown below)</i>, which list a couple of popular topics, determined by our group's reasearch, about health related topics on campus. Once the user chooses his/her desired topic, it will then lead him/her to a page that best suit their needs. For example, if a user chooses a topic about Sexual Assault, the website will redirect the user to UCI’s Campus Assault Resources and Education homepage.</p>
      <p class="mb-6">In addition, when scrolled down, users will see the About page which shows the website’s purpose and our supervisor’s contact information.</p>
      <p class="mb-6">For the working group page, All health related campus resources are categorized into five working groups: Physical Activity, Alcohol and Drugs, Mental Health, Sexual Health, and Nutrition.</p>
      <p class="mb-6">Each page is consist of the following:</p>
      <ul>
      <li>Description: Gives the overview of the page</li>
      <li>National Hotlines: List useful hotlines users can utilize</li>
      <li>Student Resource Links: Links that are useful for students</li>
      <li>Faculty Resource Links: Links that are useful for faculty</li>
      </ul>
      <p class="mb-6">In addition, when users press a link, a modal will pop <i>(as shown below)</i> that displays relevant information such as contact information and location of the resource.</p>
      `,
    stack: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'JQuery'],
    images: ['home-page.png', 'category-page.png', 'modal.png'],
    githubRepoLink: 'https://github.com/PGalicia/HealthyCampusWebsite',
    demoLink: null,
    backgroundColorHex: '#FFD200'
  },
  {
    id: 'scrapyard',
    name: 'Scrapyard',
    category: 'Pseudo E-Commerce Website',
    description: `<p class="mb-6">An pseudo-e-commerce website that allows users to “buy” mechanical keyboards.</p>
      <p class="mb-6"><strong>How It Works</strong>: Similar to other e-commerce websites, the website displays our product and allow users to buy them by specifying which product they want to buy and after they input their personal information <i>(i.e. billing and shipping address)</i>. Users will then be presented a receipt, signifying that they have bought the product.</p>`,
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Java', 'JDBC', 'MySQL', 'Apache Tomcat'],
    images: ['home.jpg'],
    githubRepoLink: 'https://github.com/PGalicia/ScrapYard',
    demoLink: null,
    backgroundColorHex: '#800080'
  },
  {
    id: 'seance',
    name: 'Seance',
    category: 'Game',
    description: `<p class="mb-6">A roguelike game let's you control of a bellhop, Esteban, as you keep your terrifying guest happy ... or else.</p>
      <p class="mb-6"><strong>How It Works</strong>: The player can control the bellhop which has one main ability, to throw food at their guests. His guests comprise of monsters: Frankenstein, Witch, and Ghost.</p>
      <p class="mb-6">The bellhop must throw food to each of the guests to lower their hunger because if not they will become enraged. This will emit an aura around each enraged monster, draining the player’s sanity when they are around them. The game ends when the player’s sanity reaches zero.</p>
      <p class="mb-4 italic text-sm font-light">Note: More details about each character and mechanic of the game can be found @ <a class="underline font-thin hover:font-bold underline-offset-2" href="https://github.com/PGalicia/Seance" target="_blank">Github Repo</a></p>
      `,
    stack: ['Lua', 'Love2D', 'Tiled', 'Aseprite'],
    images: ['game-photo.png', 'character-models.gif'],
    githubRepoLink: 'https://github.com/PGalicia/Seance',
    demoLink: null,
    backgroundColorHex: '#2A1322'
  }
]
