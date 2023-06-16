import gitPic from './images/github-mark.svg'
export {home, inbox, footer};

function home() {
    const container = document.createElement('div');
    container.setAttribute('class', 'container');
  
    const head = document.createElement('div');
    head.setAttribute('class','head');
  
    const mainLogo = document.createElement('div');
    mainLogo.setAttribute('class', 'main-logo')
    mainLogo.textContent = 'TodoList';
  
    const taskBar = document.createElement('div');
    taskBar.setAttribute('class', 'taskBar');
  
    const inbox = document.createElement('button');
    inbox.setAttribute('class', 'inbox');
    inbox.setAttribute('type', 'button');
    inbox.textContent = 'Inbox';
  
    const week = document.createElement('button');
    week.setAttribute('class', 'week');
    week.setAttribute('type', 'button');
    week.textContent = 'This week';
  
    const projects = document.createElement('div');
    projects.setAttribute('class', 'projects')
    projects.textContent = 'Projects'
  
    const addProject = document.createElement('button');
    addProject.setAttribute('class', 'addProject');
    addProject.setAttribute('type', 'button');
    addProject.textContent = '+ Add Project';
  
    const main = document.createElement('div');
    main.setAttribute('id', 'main');
  
  
    head.append(mainLogo);
    projects.append(addProject);
    taskBar.append(inbox, week, projects);
    container.append(taskBar, main);
    document.body.append(head, container);
  }
  
  function inbox() {
    const main = document.getElementById('main');
    main.innerHTML = '';
  
    const inboxTitle = document.createElement('p');
    inboxTitle.textContent = 'Inbox';
    inboxTitle.setAttribute('class', 'inboxTitle');
  
    const inboxButton = document.createElement('button');
    inboxButton.setAttribute('class', 'inboxButton');
    inboxButton.setAttribute('type', 'button');
    inboxButton.textContent = '+ Add Task';
    
    main.append(inboxTitle, inboxButton);
  }

  function footer() {
    const foot = document.createElement('footer')
    foot.setAttribute('class', 'footer')
  
    const footP = document.createElement('p')
    footP.textContent = 'Copyright '+new Date().getFullYear()+' © Yuseph03'
  
    const gitLink = document.createElement('a')
    gitLink.href = "https://github.com/Yuseph03"
    const gitLogo = document.createElement('i')
    const img = new Image();
    img.src = gitPic;
    img.setAttribute('class', 'fa-github');
  
    gitLogo.append(img)
    gitLink.append(gitLogo);
    foot.append(footP, gitLink);
    document.body.append(foot);
  }