// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // Function to toggle project details
    function toggleProject(id) {
        var project = document.getElementById(id);
        if (project.style.display === "none" || project.style.display === "") {
            project.style.display = "block";
        } else {
            project.style.display = "none";
        }
    }

    // Dark mode toggle
    document.getElementById('darkModeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        this.innerHTML = document.body.classList.contains('dark-mode') ? 
            '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Typed.js initialization
    new Typed('#typed-summary', {
        strings: ["A passionate AI engineer with expertise in Generative AI and application development. I've conducted research in Generative AI and enjoy solving complex problems using AI-driven solutions. Strong experience in developing and deploying applications with minimal latency, and a proven track record of maintaining excellent client relationships."],
        typeSpeed: 30,
        loop: false
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle scroll animations
    function handleScrollAnimation() {
        document.querySelectorAll('.fade-in').forEach((element) => {
            if (isInViewport(element)) {
                element.style.opacity = '1';
            }
        });
    }

    // Add scroll and load event listeners for animations
    window.addEventListener('scroll', handleScrollAnimation);
    window.addEventListener('load', handleScrollAnimation);

    // Project modal functionality
    function openModal(projectId) {
        const modal = document.getElementById('projectModal');
        const title = document.getElementById('modalTitle');
        const description = document.getElementById('modalDescription');
        
        const projectInfo = {
            project1: {
                title: "Legacy Code Conversion (COBOL to JAVA)",
                description: "Converted extensive COBOL codebases to JAVA using Generative AI. Implemented Micro Services to reduce errors and ensure modularity in code conversion."
            },
            project2: {
                title: "Legal Draft Bot",
                description: "Developed a bot for drafting legal documents, providing document insights, a legal search engine, and image-based legal evidence extraction, streamlining legal processes."
            },
            project3: {
                title: "Fraud Detection Using Generative AI",
                description: "Designed a system to detect fraud with the support of a trained ML model, enhancing the accuracy and reliability of fraud detection mechanisms."
            }
            // Add more projects here as needed
        };
        
        title.textContent = projectInfo[projectId].title;
        description.textContent = projectInfo[projectId].description;
        modal.style.display = "block";
    }

    function closeModal() {
        document.getElementById('projectModal').style.display = "none";
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        const modal = document.getElementById('projectModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Make openModal and closeModal global so they can be called from HTML
    window.openModal = openModal;
    window.closeModal = closeModal;

    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For now, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });

    // Initialize particle.js
    particlesJS.load('particles-js', 'particles.json', function() {
        console.log('particles.js loaded');
    });

    // Skill bar animation
    function animateSkillBars() {
        const skillBars = document.querySelectorAll('.progress');
        skillBars.forEach(bar => {
            const targetWidth = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = targetWidth;
            }, 100);
        });
    }

    // Run skill bar animation when skills section is in view
    const skillsSection = document.getElementById('skills');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(skillsSection);
});