const projectContainer = document.querySelector('.work-container');

const projects = [
  {
    name:'Mult-Post Stories Gain+Glory',
    description:'',
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
    description:'',
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
    description:'',
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
    description:'',
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
    description:'',
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
    description:'',
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
    <h1>Hello</h1>
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
