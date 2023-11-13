function openNav() {
    document.getElementById("sideNavBar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("sideNavBar").style.padding = "15px 20px 15px 20px";
}

function closeNav() {
    document.getElementById("sideNavBar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("sideNavBar").style.padding = "0px";
}