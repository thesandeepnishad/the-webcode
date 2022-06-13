let btn = document.querySelector(".nav-btn");
let navList = document.querySelector(".nav-list");
let span =document.querySelector("span")
btn.addEventListener("click",function(){
    navList.classList.toggle("active");
    span.classList.toggle("active");
});

// ------Close Nav when clicking on link------
let listItems = document.querySelectorAll(".list-item");
for(let i = 0; i <= listItems.length; i++){
    listItems[i].addEventListener("click", function(){
        navList.classList.remove("active");
        span.classList.remove("active");
    });
};