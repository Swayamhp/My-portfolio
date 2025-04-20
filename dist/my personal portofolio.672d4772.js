document.getElementById("year").textContent = new Date().getFullYear();
// Smooth scrolling for all anchor links in navbar
document.querySelectorAll('nav a[href^="#"]').forEach((anchor)=>{
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Remove #
        const targetSection = document.getElementById(targetId);
        if (targetSection) targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//# sourceMappingURL=my personal portofolio.672d4772.js.map
