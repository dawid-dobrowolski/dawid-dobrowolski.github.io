window.addEventListener("resize", function(){
    let menu = document.getElementById("menu");
    if(window.innerWidth > 980){
        if(menu.className === "hamburger-menu") {
            menu.className = "";
        }
    }
})