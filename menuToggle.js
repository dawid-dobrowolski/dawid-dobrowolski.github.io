function toggleMenu() 
{
    let menu = document.getElementById("menu");
    if(menu.className === "hamburger-menu") {
        menu.className = "";
    }
    else 
    {
        menu.className = "hamburger-menu";
    }
    
}