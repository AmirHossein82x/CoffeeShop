const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const submenuBtn = document.querySelector("#submenu-open-btn")
const barsMenuMobile = document.querySelector("#bars-mobile")
const xMark = document.querySelector("#x-mark-mobile-side-bar")

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

    document.querySelector("#side-menu").classList.remove("-right-96")
    document.querySelector("#side-menu").classList.add("right-0")
    document.querySelector(".overlay").classList.remove("hidden")
    let overlay = document.querySelector(".overlay")
    overlay.classList.remove("invisible")
    overlay.classList.remove("opacity-0")

    
})

xMark.addEventListener("click", function() {
    document.querySelector("#side-menu").classList.add("-right-96")
    let overlay = document.querySelector(".overlay")
    overlay.classList.add("invisible")
    overlay.classList.add("opacity-0")
    

})