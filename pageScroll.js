window.onscroll = () => pageScroll();

function pageScroll(){
    let menu = document.getElementById("menu");
    if(document.documentElement.scrollTop > 50) {
        menu.className = "active";
    }
    else {
        menu.className = "";
    }
}