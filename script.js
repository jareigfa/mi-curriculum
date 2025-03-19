// Scroll suave
document.querySelectorAll('.top-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); 

        const targetId = this.getAttribute('href'); 
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'      
            });
        }
    });
});

// Mostrar/ocultar experiencia
document.getElementById("show-more").addEventListener("click", function() {
    const moreExperience = document.getElementById("more-experience");
    const button = document.getElementById("show-more");
    if (moreExperience.classList.contains("hidden")) {
        moreExperience.classList.remove("hidden");
        button.textContent = "Ver menos";
    } else {
        moreExperience.classList.add("hidden");
        button.textContent = "Ver más";
    }
});