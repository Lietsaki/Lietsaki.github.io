let iWelcome = 0;
let welcomeText = 'Welcome!';
let welcomeSpeed = 200;

function typeWelcome() {
  if (iWelcome < welcomeText.length) {
    document.getElementById('welcome').innerHTML += welcomeText.charAt(
      iWelcome
    );
    iWelcome++;
  }
  setTimeout(typeWelcome, welcomeSpeed);
}

let techText = 'Technologies I currently work with:';
let techSpeed = 200;
let iTech = 0;

function typeTech() {
  if (iTech < techText.length) {
    document.getElementById('technologies').innerHTML += techText.charAt(iTech);
    iTech++;
  }
  setTimeout(typeTech, techSpeed);
}

typeWelcome();
typeTech();

const aboutPage = document.getElementById('about');
const contactPage = document.getElementById('contact');
const noise = document.getElementById('noise');
const trainingMode = document.getElementById('trainingMode');
const whoolsoWebApp = document.getElementById('whoolsoWebApp');
const whoolsoAPI = document.getElementById('whoolsoAPI');

let viewingPage = aboutPage;

const aboutButton = document.getElementById('aboutButton');
const projectsButton = document.getElementById('projectsButton');
const contactButton = document.getElementById('contactButton');
const previousButton = document.getElementById('previousButton');
const nextButton = document.getElementById('nextButton');
let transitioning = false;

function switchPage(pageToSwitchTo) {
  if (transitioning) {
    return;
  }

  viewingPage.classList.add('hidden');
  noise.classList.remove('opacity-0');
  transitioning = true;

  setTimeout(function () {
    noise.classList.add('opacity-0');
    pageToSwitchTo.classList.remove('hidden');
    viewingPage = pageToSwitchTo;

    if (pageToSwitchTo === aboutPage) {
      iTech = 0;
      iWelcome = 0;
      document.getElementById('welcome').innerHTML = '';
      document.getElementById('technologies').innerHTML = '';
      typeWelcome();
      typeTech();
    }
    transitioning = false;
  }, 1000);
}

// LISTENERS
contactButton.addEventListener('click', function () {
  switchPage(contactPage);
});

aboutButton.addEventListener('click', function () {
  switchPage(aboutPage);
});

projectsButton.addEventListener('click', function () {
  switchPage(whoolsoAPI);
});

let projects = [whoolsoAPI, whoolsoWebApp, trainingMode];
let viewingProject = 0;

nextButton.addEventListener('click', function () {
  if (viewingPage === aboutPage || viewingPage === contactPage) {
    return;
  }

  viewingProject = viewingProject + 1;

  if (viewingProject > projects.length - 1) {
    viewingProject = 0;
  }

  switchPage(projects[viewingProject]);
});

previousButton.addEventListener('click', function () {
  if (viewingPage === aboutPage || viewingPage === contactPage) {
    return;
  }

  viewingProject = viewingProject - 1;

  if (viewingProject < 0) {
    viewingProject = projects.length - 1;
  }

  switchPage(projects[viewingProject]);
});
