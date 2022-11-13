let images = [{
    url: "https://i.pinimg.com/originals/65/3e/dc/653edc4f8add1bb15461eb8f0d3efb1d.jpg",
    city: "Rostov-on-Don\n LCD admiral",
    Area: "81 m2",
    Time: "3.5 months",
    
}, {
    url: "https://i.pinimg.com/originals/b6/fb/18/b6fb18ee51ac1ff7f482d188361c5c7d.jpg",
    city: "Sochi\n Thieves",
    Area: "105 m2",
    Time: "4 months",

}, {
    url: "https://i.pinimg.com/originals/81/d2/51/81d251ea94c8ba90cc080240114c5a38.jpg",
    city: "Rostov-on-Don\n Patriotic",
    Area: "93 m2",
    Time: "3 months",
   
}];

function initSlider() {
    if ( !images || !images.length) return;

    let sliderImages = document.querySelector(".prj_img");
    let sliderArrows = document.querySelector(".slider");
    let sliderDots = document.querySelector(".slider_dots");
    let sliderDetails = document.querySelector(".prj_about");
    // let sliderCity = document.querySelector(".prj_city");

    initImages();
    initArrows();
    initDots();
    // initCity();

    function initImages(){
        images.forEach((image, index) =>{
            let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
            sliderImages.innerHTML += imageDiv;
        })
    }

   function initArrows(){
    sliderArrows.querySelectorAll(".slider_arrow").forEach(arrow => {
        arrow.addEventListener("click", function() {
            let curNumber = +sliderImages.querySelector(".active").dataset.index;
            let nextNumber;
            if (arrow.classList.contains("left")){
                nextNumber = curNumber === 0? images.length -1 : curNumber -1;
            } else {
                nextNumber = curNumber === images.length -1?0 : curNumber +1;
            }
            moveSlider(nextNumber);
        });

    });
   }

   function initDots() {
    
    images.forEach((image, index) => {
        let dot = `<div class="slider_dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
        sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".slider_dots-item").forEach(dot => {
        dot.addEventListener("click", function() {
            moveSlider(this.dataset.index);
            sliderDots.querySelector(".active").classList.remove("active") ;
            this.classList.add("active"); 
        })
    })
   }


//    function initCity() {
    
//     images.forEach((image, index) =>{
//         let city = document.getElementsByClassName("prj_city_link");
//         city.className += " city_item n${index}";
        
        

//         sliderCity.innerHTML += city;
//     });
//     sliderCity.querySelectorAll(".city-item").forEach(city => {
//         city.addEventListener("click", function() {
//             moveSlider(this.dataset.index);
//             sliderCity.querySelector(".active").classList.remove("active") ;
//             this.classList.add("active"); 
//         })
//     })
//    }



    function moveSlider(num) {
        sliderImages.querySelector(".active").classList.remove("active");
        sliderImages.querySelector('.n' + num).classList.add("active");
        sliderDots.querySelector(".active").classList.remove("active");
        sliderDots.querySelector(".n" + num).classList.add("active");
        changeCity(num);
        changeArea(num);
        changeTime(num);
    }
    function changeCity(num){
        let cityTitle = sliderDetails.querySelector(".details_city");
        cityTitle.innerText = images[num].city;

    
    }

    function changeArea(num){
        let areaTitle = sliderDetails.querySelector(".details_area");
        areaTitle.innerText = images[num].Area;

    
    }
    
    function changeTime(num){
        let timeTitle = sliderDetails.querySelector(".details_time");
        timeTitle.innerText = images[num].Time;
    }

   
  }

  

document.addEventListener("DOMContentLoaded",initSlider);