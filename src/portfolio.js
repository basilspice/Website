const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://basilspice.github.io/Website/',
  title: 'BB',
}

const about = {
  // main info
  name: 'Basil Breton',
  role: 'Full-Stack Developer',
  description:
    //something about working with hands and enjoying using that and translating it to doign kinda the same thing but with tech

    "Hello! I'm Basil, a seasoned professional whose career has taken intriguing turns. My IT roots equipped me with a love for problem-solving and a knack for code. Seeking a hands-on adventure, I embraced the world of bicycle mechanics, where precision and craftsmanship became my daily tools. Now, as a Software Engineer, I blend my tech background with the tactile expertise acquired in the workshop. Let's connect and explore how the fusion of gears and code can lead to innovative solutions and exciting possibilities!",
  resume:
    'https://docs.google.com/document/d/e/2PACX-1vRjMnlfSLo3vAdIJm5Vbk2PycqWaBClVW55oe3axJcBZBNsh4crOKsGUr2QGY9D9Q/pub',
  social: {
    linkedin: 'https://www.linkedin.com/in/basil-breton/',
    github: 'https://github.com/basilspice',
  },
}

const projects = [
  // projects section
  {
    name: 'Right-Up',
    description:
      'Utilizing OpenAI this app will generate a recipe based off the parameters you gave it. This app was also built in React-Native and live on the Apple and Google app store',
    stack: ['Next', 'React-Native'],
    sourceCode: 'https://github.com/basilspice/right-up',
    livePreview: 'https://right-up.vercel.app',
    google:
      'https://play.google.com/store/apps/details?id=com.basilspice.rightup',
    apple: 'https://apps.apple.com/us/app/right-up/id6476583436',
  },
  {
    name: 'AirBnB Clone',
    description:
      'A clone of the popular Property Renter, AirBNB. Users can access all the properties without creating an account, but must create an account to post, favorite or rent properties. With an account you can post properties, delete properties, favorite properties, and see what properties you own have reservations',
    stack: ['Next', 'TypeScript', 'TailwindCSS'],
    sourceCode: 'https://github.com/basilspice/TheSpot',
    livePreview: 'https://property-renter.vercel.app',
  },
  {
    name: 'Deliveroo Clone',
    description:
      'A replica of the Deliveroo app (similiar to Uber Eats). Select a restaurant from the list of featured restaurants. A menu is loaded with dishes according to the selected restaurant. Once you have selected the dishes you want to order, the delivery screen will calculate the subtotal, add tax and delivery fee and give you your final total. Final screen will show a map with the location of the selected restaurant',
    stack: ['React-Native', 'Sanity', 'Redux', 'TailwindCSS'],
    sourceCode: 'https://github.com/basilspice/deliveroo-clone',
    livePreview: 'https://github.com/basilspice/deliveroo-clone',
  },
  {
    name: 'Uber Clone',
    description:
      'A clone of the client side Uber app. User wil pick their Starting and Endpoint. Different prices will be calculated depending on what "level" of service you want',
    stack: ['React-Native', 'TailwindCSS'],
    sourceCode: 'https://github.com/basilspice/uber-clone',
    livePreview: 'https://github.com/basilspice/uber-clone',
  },
  {
    name: 'Game Hub',
    description:
      'A react app using typescript that allows users to browse different games. Allow Users to search for games based off of; platform, rating, genre.',
    stack: ['React', 'TailwindCSS'],
    sourceCode: 'https://github.com/basilspice/uber-clone',
    livePreview: 'https://github.com/basilspice/uber-clone',
  },
  {
    name: 'the_spot',
    description:
      'A Full-Stack Mobile App allowing Users to get a feed of posts, edit posts, upload new posts with images, user auth',
    stack: ['React', 'React-Native'],
    sourceCode: 'https://github.com/basilspice/TheSpot',
    livePreview: 'https://expo.dev/@basilspice/projects/TheSpot',
    google:
      'https://play.google.com/store/apps/details?id=com.basilspice.thespot',
  },
  {
    name: 'Hey, Neighbour',
    description:
      'A Full-Stack application created with a team of four. Built in a 4 day sprint, this project had rotating project management roles, as well has utilized Githubs KANBAN for roles and assignments. This App has full CRUD and lets Users create listings for items as well as leave comments. ',
    stack: ['MONGO', 'Express', 'React', 'Node'],
    sourceCode: 'https://github.com/SABR-GA',
    livePreview: 'https://sabr-ga.github.io/hey-neighbor-client/',
  },
  {
    name: 'Rick and Morty API',
    description:
      'A Front-End react app built in a 5 day sprint that enables the App to make calls to an API and return information in a formatted card',
    stack: ['React'],
    sourceCode: 'https://github.com/basilspice/Project-2',
    livePreview: 'https://basilspice.github.io/Project-2/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up

  'JavaScript',
  'React',
  'React-Native',
  'Node',
  'Next',
  'Express',
  'MongoDB',
  'Django',
  'Vue',
  'Web3',
  'Moralis',
  'TailwindCSS',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'basil.breton@gmail.com',
}

export { header, about, projects, skills, contact }
