var typed = new Typed("#typed", {
    strings: ["I'm Sneha Goyal, a Full Stack Developer,", "I build real-time web applications", "I build AI-powered tools", "I love MERN Stack"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
})

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// ParticlesJS config
particlesJS("particles-js", {
    particles: {
        number: { value: 250 },
        color: { value: ["#4ea8de", "#ff4c60", "#3deabf", "#c084fc", "#facc15"] },
        shape: { type: "circle" },
        opacity: {
            value: 0.8,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                opacity_min: 0.3,
                sync: false
            }
        },
        size: { value: 3 },
        line_linked: {
            enable: true,
            distance: 130,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 10,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab" // cool interactive effect
            },
            onclick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 0.4
                }
            },
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }
    },
    retina_detect: true,
});