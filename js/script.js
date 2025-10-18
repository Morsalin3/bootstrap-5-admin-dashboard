const sidebarToggle = document.querySelector("#sidebar-toggle");
    sidebarToggle.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("collapsed")

});

document.querySelector(".theme-toggle").addEventListener("click",()=>{
    toggleLocalStorage();
    toggleRootClass();
});

function toggleRootClass(){
    const current = document.documentElement.getAttribute('data-bs-theme');
    const inverted = current == 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme',inverted);
}

function toggleLocalStorage(){
    if(isLight()){
        localStorage.removeItem("light");
    }else{
        localStorage.setItem("light","set")
    }
}

function isLight(){
    return localStorage.getItem("light");
}

if(isLight()){
    toggleRootClass()
}


// for navbar dropdown option 

        document.addEventListener("DOMContentLoaded", function () {
        const userIcons = document.querySelectorAll(".user-icon");

        // Function to close all menus
        function closeAllMenus() {
            document.querySelectorAll(".submenu").forEach(menu => menu.classList.remove("show"));
        }

        userIcons.forEach(icon => {
            const toggle = icon.querySelector("a[id$='Toggle']"); // targets IDs like notificationToggle, mailToggle, userToggle
            const submenu = icon.querySelector(".submenu");

            // When clicking the toggle
            toggle.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Close others first
            document.querySelectorAll(".submenu").forEach(menu => {
                if (menu !== submenu) menu.classList.remove("show");
            });

            // Toggle this one
            submenu.classList.toggle("show");
            });

            // Prevent clicks inside submenu from closing it
            submenu.addEventListener("click", (e) => e.stopPropagation());
        });

        // Clicking outside closes all
        document.addEventListener("click", closeAllMenus);
        });
