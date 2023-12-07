document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".floating-button");
    const links = document.querySelector(".links");
    let timeout;

    button.addEventListener("mouseover", function() {
        clearTimeout(timeout); 
        links.style.display = "block";
    });

    button.addEventListener("mouseout", function() {
        
        timeout = setTimeout(function() {
            links.style.display = "none";
        }, 1500);
    });

    
    links.addEventListener("mouseover", function() {
        clearTimeout(timeout); 
    });

    links.addEventListener("mouseout", function() {
        
        timeout = setTimeout(function() {
            links.style.display = "none";
        }, 1500);
    });
});
