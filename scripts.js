// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});

// Initialize AOS
AOS.init({
    duration: 500,
    easing: "ease-out",
    once: true,
    offset: 80
});
projectList.innerHTML += `

<div class="project-card" data-aos="fade-up">

<h3>${project.title}</h3>

<p>${project.description}</p>

<a href="${project.link}" target="_blank">
View on GitHub
</a>

</div>

`;
