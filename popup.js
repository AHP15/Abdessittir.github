const projectContainer = document.querySelector('.work-container');

const projects = [
  {
    name:'Mult-Post Stories Gain+Glory',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    images: {
      src:'./media/plaholder.png',
      alt: 'Mult-Post Stories Gain+Glory image'
    },
    technologies:['Ruby on rails', 'css', 'JavaScript', 'html'],
    liveLink:'#',
    codeLink:'#',
  },
  {
    name:'Mult-Post Stories Gain+Glory',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    images: {
      src:'./media/plaholder.png',
      alt: 'Mult-Post Stories Gain+Glory image'
    },
    technologies:['Ruby on rails', 'css', 'JavaScript', 'html'],
    liveLink:'#',
    codeLink:'#',
  },
  {
    name:'Mult-Post Stories Gain+Glory',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    images: {
      src:'./media/plaholder.png',
      alt: 'Mult-Post Stories Gain+Glory image'
    },
    technologies:['Ruby on rails', 'css', 'JavaScript', 'html'],
    liveLink:'#',
    codeLink:'#',
  },
  {
    name:'Mult-Post Stories Gain+Glory',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    images: {
      src:'./media/plaholder.png',
      alt: 'Mult-Post Stories Gain+Glory image'
    },
    technologies:['Ruby on rails', 'css', 'JavaScript', 'html'],
    liveLink:'#',
    codeLink:'#',
  },
  {
    name:'Mult-Post Stories Gain+Glory',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    images: {
      src:'./media/plaholder.png',
      alt: 'Mult-Post Stories Gain+Glory image'
    },
    technologies:['Ruby on rails', 'css', 'JavaScript', 'html'],
    liveLink:'#',
    codeLink:'#',
  },
  {
    name:'Mult-Post Stories Gain+Glory',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.',
    images: {
      src:'./media/plaholder.png',
      alt: 'Mult-Post Stories Gain+Glory image'
    },
    technologies:['Ruby on rails', 'css', 'JavaScript', 'html'],
    liveLink:'#',
    codeLink:'#',
  },
];

function generateList(arr){
  let htmlCode = '';
  arr.forEach(ele => {
    htmlCode += `<li>${ele}</li>`;
  });

  return htmlCode;
}

function generateItem(project, id) {

  return `
    <div class="work-item">
      <div class="work-text">
      <h3>${project.name}</h3>
      <ul class="ul-items">${generateList(project.technologies)}</ul>
      <button id=${id} type="button" class="btn">See Project</button>
     </div>
   </div>
  `;
}

function generateDetailPopup(id){
  const project = projects[id];

  return `
    <article class="project-info">
      <img class="project_preview_img" src=${project.images.src} alt=${project.images.alt}>
      <h1>${project.name}</h1>
      <ul class="ul-items">${generateList(project.technologies)}</ul>
      <p class="project_description">${project.description}</p>
      <div class="project_btns__container">
        <button class="btn project-btn">
          <span>See Live</span>
          <img src="./media/ArrowIcon.png" alt="arrow icon">
        </button>
        <button class="btn project-btn">
          <span>See Source</span>
          <img src="./media/Icon-GitHub.png" alt="arrow icon">
        </button>
      </div>
    </article>
  `;
}

window.onload = function() {
  projects.forEach((project, index) => {
    const item = generateItem(project, index);
      projectContainer.insertAdjacentHTML('beforeend', item);
    });

  const buttons = document.querySelectorAll('.btn');
  const detail = document.querySelector('.detail-container');
  const close = document.querySelector('.close-detail');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const detailInfo = generateDetailPopup(btn.id);
      detail.insertAdjacentHTML('beforeend', detailInfo);
      detail.classList.toggle('show');
    });
  });

  close.addEventListener('click', () => {
    detail.classList.toggle('show');
    detail.removeChild(detail.lastChild);
  });
}
