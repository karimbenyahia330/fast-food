let logo_menu_img = document.querySelector('.logo-menu-img')
let logo_menuu_bool = true;
let menu_category = document.querySelector('.menu-category')
let main_content =document.querySelector('.main-content')
let overlay=document.querySelector('.overlay')

let bestseller_list = [{ imgsrc:'https://media.istockphoto.com/id/2061716709/fr/photo/burger-de-c%C3%B4tes-grill%C3%A9es.jpg?s=612x612&w=0&k=20&c=rIJwACSTZ-dNn2nYtpLrLV-dkXkhhiEk1iWTWDHTihI=', name:'tacos poulet',descriptions:'poulet,sauce,...',prix:'650 DA'},{ imgsrc:'https://www.cookomix.com/wp-content/uploads/2022/10/pizza-algerienne-thermomix-800x600.jpg', name:'Pizza carre',descriptions:'tomate,sauce,...',prix:'250 DA'}]
let burger_list = [{ imgsrc:'https://media.istockphoto.com/id/2061716709/fr/photo/burger-de-c%C3%B4tes-grill%C3%A9es.jpg?s=612x612&w=0&k=20&c=rIJwACSTZ-dNn2nYtpLrLV-dkXkhhiEk1iWTWDHTihI=', name:'tacos poulet',descriptions:'poulet,sauce,...',prix:'650 DA'}]
let poulet_list=[{ imgsrc:'https://www.cookomix.com/wp-content/uploads/2022/06/poulet-roti-peruvien-thermomix-800x600.jpg', name:'tacos poulet',descriptions:'poulet,sauce,...',prix:'650 DA'}]
const bestsellers = document.querySelector('.best-sellers');


const burgers=document.querySelector('.burgers')


const poulet = document.querySelector('.poulet')

const frite=document.querySelector('.frite')

const boissons = document.querySelector('.boissons')

const desserts = document.querySelector('.desserts')

const bestsellersmenu = document.querySelector('.bestsellers');

logo_menu_img.addEventListener("click",()=>{
  if(logo_menuu_bool){
    logo_menu_img.setAttribute("src","img-logos/icons8-effacer-50.png")
    logo_menuu_bool=!logo_menuu_bool;
    menu_category.style.transform = 'translateX(0%)';
    //main_content.style.transform='translateX(0%)';
    overlay.classList.remove('hidden')
  }else{
    logo_menu_img.setAttribute("src","img-logos/icons8-menu-60.png")
    logo_menuu_bool=!logo_menuu_bool;
    menu_category.style.transform = 'translateX(-100%)';
    //main_content.style.transform='translateX(-20%)';
    overlay.classList.add('hidden')
  }
})

function resetAll() {
  bestsellers.style.backgroundColor = '';
  burgers.style.backgroundColor = '';
  poulet.style.backgroundColor = '';
  frite.style.backgroundColor = '';
  boissons.style.backgroundColor = '';
  desserts.style.backgroundColor = '';
}

bestsellers.addEventListener('click', () => {

  resetAll();
  bestsellers.style.backgroundColor = 'orange';
  
  //let bestsellersmenu=document.querySelector('.bestsellers')
 // bestsellersmenu.setAttribute("class","bestsellermenu")
 bestsellersmenu.innerHTML = '';

  bestseller_list.forEach(plat =>{
    
    let menu1 = document.createElement('div')
    menu1.setAttribute("class","menu")
    

    let imgsrc = document.createElement('img')
    imgsrc.setAttribute("class",'imgprdct')
    imgsrc.src=plat["imgsrc"];

    let nameprdct = document.createElement('h2')
    nameprdct.setAttribute("class","nameprdct")
    nameprdct.textContent=plat["name"]

    let description = document.createElement('p')
    description.setAttribute("class","description")
    description.textContent=plat["descriptions"]

    let prix = document.createElement('h5')
    prix.setAttribute("class","prix")
    prix.textContent=plat["prix"]

    menu1.appendChild(imgsrc)
    menu1.appendChild(nameprdct)
    menu1.appendChild(description)
    menu1.appendChild(prix)

    bestsellersmenu.appendChild(menu1)

  })

  

   


});

burgers.addEventListener('click', () => {
  resetAll();
  burgers.style.backgroundColor = 'orange';
  
  bestsellersmenu.innerHTML="";

  burger_list.forEach(plat =>{
    
    let menu1 = document.createElement('div')
    menu1.setAttribute("class","menu")
    

    let imgsrc = document.createElement('img')
    imgsrc.setAttribute("class",'imgprdct')
    imgsrc.src=plat["imgsrc"];

    let nameprdct = document.createElement('h2')
    nameprdct.setAttribute("class","nameprdct")
    nameprdct.textContent=plat["name"]

    let description = document.createElement('p')
    description.setAttribute("class","description")
    description.textContent=plat["descriptions"]

    let prix = document.createElement('h5')
    prix.setAttribute("class","prix")
    prix.textContent=plat["prix"]

    menu1.appendChild(imgsrc)
    menu1.appendChild(nameprdct)
    menu1.appendChild(description)
    menu1.appendChild(prix)

    bestsellersmenu.appendChild(menu1)

  })

});

poulet.addEventListener('click', () => {
  resetAll();
  poulet.style.backgroundColor = 'orange';
  bestsellersmenu.innerHTML = '';

  poulet_list.forEach(plat =>{
    
    let menu1 = document.createElement('div')
    menu1.setAttribute("class","menu")
    

    let imgsrc = document.createElement('img')
    imgsrc.setAttribute("class",'imgprdct')
    imgsrc.src=plat["imgsrc"];

    let nameprdct = document.createElement('h2')
    nameprdct.setAttribute("class","nameprdct")
    nameprdct.textContent=plat["name"]

    let description = document.createElement('p')
    description.setAttribute("class","description")
    description.textContent=plat["descriptions"]

    let prix = document.createElement('h5')
    prix.setAttribute("class","prix")
    prix.textContent=plat["prix"]

    menu1.appendChild(imgsrc)
    menu1.appendChild(nameprdct)
    menu1.appendChild(description)
    menu1.appendChild(prix)

    bestsellersmenu.appendChild(menu1)

  })
});

frite.addEventListener('click', () => {
  resetAll();
  frite.style.backgroundColor = 'orange';
  bestsellersmenu.innerHTML = '';
});

boissons.addEventListener('click', () => {
  resetAll();
  boissons.style.backgroundColor = 'orange';
  bestsellersmenu.innerHTML = '';
});

desserts.addEventListener('click', () => {
  resetAll();
  desserts.style.backgroundColor = 'orange';
  bestsellersmenu.innerHTML = '';
});



