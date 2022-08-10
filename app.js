const carousel = document.querySelector('.carousel')
let sliders = [];
let slideIndex=0;

const createSlide = ()=>{
  if(slideIndex>=movies.length){
    slideIndex=0;
  }
  // creating dom elements
  let slide =document.createElement('div')
  var imageElement = document.createElement('img')
  let content = document.createElement('div')
  let h1 = document.createElement('h1')
  let p = document.createElement('p')

  //attaching all elements
  imageElement.appendChild(document.createTextNode(''));
  h1.appendChild(document.createTextNode(movies[slideIndex].name));
  p.appendChild(document.createTextNode(movies[slideIndex].des));
  content.appendChild(h1)
  content.appendChild(p)
  slide.appendChild(content)
  slide.appendChild(imageElement)
  carousel.appendChild(slide)

  //adding up images
  imageElement.src = movies[slideIndex].image
  slideIndex++

  //setting up the element class Names
  slide.className = 'slider'
  content.className = 'slide-content'
  h1.className = 'movie-title'
  p.className = 'movie-des'


  sliders.push(slide)

  if(sliders.length){
    sliders[0].style.marginLeft =`calc(-${100 *(sliders.length-2)}% - ${30 *(sliders.length-2)}px)`;
  }
}
createSlide()

for(let i=0;i<3;i++){
  createSlide();
}
setInterval(()=>{
  createSlide();
},3000);

//video cards

const videoCards = document.querySelectorAll('.video-card')

// console.log(videoCards)

videoCards.forEach(item=>{
  item.addEventListener('mouseover',()=>{
    let video = item.children[1]

    video.play()
  })
  item.addEventListener('mouseleave',()=>{
    let video = item.children[1]
    video.pause()
  })
})

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 220;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 220;
    })
})
let posters = [
  {src:'images/poster 1.png'},
  {src:'images/poster 2.png'},
  {src:'images/poster 3.png'},
  {src:'images/poster 4.png'},
  {src:'images/poster 5.png'},
  {src:'images/poster 6.png'},
  {src:'images/poster 7.png'},
  {src:'images/poster 8.png'},
  {src:'images/poster 9.png'},
  {src:'images/poster 10.png'},
  {src:'images/poster 11.png'},
  {src:'images/poster 12.png'}
]


cardContainers.forEach(container=>{

  let cardsDiv = posters.map(poster=>{
    return `<div class="card">
      <img src="${poster.src}" class="card-img" alt="">
      <div class="card-body">
        <h2 class="name">movie-name</h2>
        <h6 class="des">Lorem ipsum dolor sit amet, consectetur</h6>
        <button type="button" class="watchlist-btn">add to watchlist</button>
      </div>
    </div>`
  }).join('')
  container.innerHTML = cardsDiv
})
