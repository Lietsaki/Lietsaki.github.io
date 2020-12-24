function typeMessage(id, message, i, speed) {
  if (i < message.length) {
    document.getElementById(id).innerHTML += message.charAt(i);
    i++;
  }
  setTimeout(typeMessage, speed, id, message, i, speed);
}

typeMessage('welcome', 'Welcome!', 0, 200);
typeMessage('technologies', 'Technologies I currently work with:', 0, 200);

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
      document.getElementById('welcome').innerHTML = '';
      typeMessage('welcome', 'Welcome!', 0, 200);
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
