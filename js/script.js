// MOBILE MENU
const icon = document.querySelector('.icon');
const menu = document.querySelector('.menu-mobile')
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    menu.classList.toggle("show");
    menu.classList.toggle("hide");
});

const mobLinks = document.querySelectorAll('.menu-mobile li')
mobLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    menu.classList.toggle("show");
    icon.classList.toggle("open");
    menu.classList.toggle("hide");
});
});
console.log(mobLinks)
// GET ARRAY for every Rect,IMG,COntent
const rectArr = document.querySelectorAll('.rect-cl')
const imgArr = document.querySelectorAll('.imgC')
const imgContArr = document.querySelectorAll('.img-content')


// Change SLIDE every 4 seconds
let counter = 1

setInterval(function(){
  if(counter == 3){
    counter = 1
  }else{
    counter++
  }
  changeRect(counter)
}, 4000);


// Function for changing img 
const changeRect = ( id ) => {
  counter = id
  rectArr.forEach(rect => {
    rect.classList.remove('active-rect')
    if(rect.id == `r${id}`){
      rect.classList.add('active-rect')
    }
  });
  imgArr.forEach(img => {
    img.classList.remove('active-img')
    if(img.id == `content${id}`){
      img.classList.add('active-img')
    }
  });
  imgContArr.forEach(con => {
    con.classList.remove('active-con')
    if(con.id == `text-${id}`){
      con.classList.add('active-con')
    }
  });
}

