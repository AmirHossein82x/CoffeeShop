const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuBtn = document.querySelector("#submenu-open-btn")
const barsMenuMobile = document.querySelector("#bars-mobile")
const xMark = document.querySelector("#x-mark-mobile-side-bar")
const cartBars = document.querySelector("#cart-bars")
const cartLogoMobile = document.querySelector("#cart-logo-mobile")
const overlay = document.querySelector(".overlay")
const sideMenu = document.querySelector("#side-menu")
const cartMobile = document.querySelector("#cart-mobile")


toggleThemeBtns.forEach(btn => {
    btn.addEventListener("click", function(){

        btn.addEventListener("click" , () => {
            if (localStorage.theme === "dark"){
                document.documentElement.classList.remove("dark");
                localStorage.theme = "light";
            } else {
                document.documentElement.classList.add("dark");
                localStorage.setItem("theme" , "dark");
            }
        })
    })

})


submenuBtn.addEventListener("click", function (e) {
    e.currentTarget.parentElement.classList.toggle("text-orange-300")
    submenuBtn.classList.toggle("-rotate-90")
    document.querySelector(".submenu").classList.toggle("submenu--open")  
      
})


barsMenuMobile.addEventListener("click", function (e) {

    sideMenu.classList.remove("-right-96")
    sideMenu.classList.add("right-0")
    overlay.classList.remove("hidden")
    overlay.classList.remove("invisible")
    overlay.classList.remove("opacity-0")

    
})

xMark.addEventListener("click", function() {
    sideMenu.classList.remove("right-0")
    sideMenu.classList.add("-right-96")
    overlay.classList.add("invisible")
    overlay.classList.add("opacity-0")
    

})

cartBars.addEventListener("click", function() {
    cartMobile.classList.remove("left-0")
    cartMobile.classList.add("-left-[260px]")
    overlay.classList.add("invisible")
    overlay.classList.add("opacity-0")
})

cartLogoMobile.addEventListener("click", function() {
    cartMobile.classList.remove("-left-[260px]")
    cartMobile.classList.add("left-0")
    overlay.classList.remove("invisible")
    overlay.classList.remove("opacity-0")

})
