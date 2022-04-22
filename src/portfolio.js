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
      'I bring a unique and different perspective to logical and human problems. Years of face to face interactions have sculpted my understanding of people, as well as my approach to logical solutions. Having worked with a wide variety of backgrounds, I am able to empathize and grow with my soft and hard skills, no matter the environment . ',
    resume: 'https://docs.google.com/document/d/1YuefXejQH4ke0fcSy_GA4891O7DJ3NDwWfiFDiEbvfo/edit?usp=sharing',
    social: {
      linkedin: 'https://www.linkedin.com/in/basil-breton/',
      github: 'https://github.com/basilspice',
    },
  }
  
  const projects = [
    // projects section
    {
      name: 'Portfolio',
      description:
        'My first ever attempt at building a webpage. I created this page using just HTML and JS after having only been using the Languages for about 3 weeks',
      stack: ['HTML', 'JS'],
      sourceCode: 'https://github.com/basilspice/Portfolio-1',
      livePreview: 'https://basilspice.github.io/Portfolio-1/',
    },
    {
      name: 'Rick and Morty API',
      description:
        'I built this Front-End react app in under 5 days that enables the App to make calls to an API and return information in a formatted card',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com/basilspice/Project-2',
      livePreview: 'https://basilspice.github.io/Project-2/',
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
      name: 'the_spot',
      description:
        'A Full-Stack Mobile App allowing Users to get a feed of posts, edit posts, upload new posts with images, user auth',
      stack: ['SASS', 'TypeScript', 'React'],
      sourceCode: 'https://github.com/basilspice/TheSpot',
      livePreview: 'https://expo.dev/@basilspice/projects/TheSpot'
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'Express',
    'MongoDB',
    'Django',
    'React-Native'
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'basil.breton@gmail.com',
  }
  
  export { header, about, projects, skills, contact }
  