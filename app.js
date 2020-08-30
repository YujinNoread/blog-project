new Glide('.glide').mount();

// mobile menu

let mobileMenu = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

mobileMenu.addEventListener("click",function(){
	mobileMenu.classList.toggle("active-menu");
	if(mobileMenu.classList.contains("active-menu")){
		mainMenu.classList.add("active-menu");
	}else{
		mainMenu.classList.remove("active-menu");
	}
})

// form-modal

let formButton = document.getElementById("touch__button");
let form = document.querySelector(".form");
let closeBtn = document.querySelector(".close-btn");
function openForm(){
	form.classList.add("show");
	form.classList.remove("hide");
}
function closeForm(){
	form.classList.remove("show");
	form.classList.add("hide");
}
formButton.addEventListener("click",openForm);
closeBtn.addEventListener("click",closeForm);
form.addEventListener("click", function(event){
	if(event.target === form){
		closeForm();
	}
})

// modal

let modal = document.querySelector(".modal");
let closeButton = document.querySelector(".close-button");
var scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight
 );
let count = 0;
let scrollPosition=0;
window.addEventListener('scroll', function() {
	scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
	if(count!=1){
		if(scrollPosition >= (scrollHeight/100*50)){
			count=1;
			openModal();
		}
	}
 });
 function openModal(){
	modal.classList.add("show");
	modal.classList.remove("hide");
}
function closeModal(){
	modal.classList.remove("show");
	modal.classList.add("hide");
}
closeButton.addEventListener("click",closeModal);
modal.addEventListener("click", function(event){
	if(event.target === modal){
		closeModal();
	}
})

AOS.init();