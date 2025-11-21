// Smooth Scroll
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document
            .querySelector(link.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
    } else {
        toggleBtn.textContent = "🌙";
    }
});

// Scroll Animation
const elements = document.querySelectorAll(".animate");

function showAnimation() {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 50) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showAnimation);
showAnimation();
// EmailJS Initialization
(function() {
    emailjs.init("YTAuHq_T627Oy9QKj");
})();

// Contact Form Submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_0jyqjkf", "template_53ckdbg", this)
        .then(() => {
            document.getElementById("statusMessage").innerText = "Message Sent Successfully!";
            document.getElementById("statusMessage").style.color = "green";
            this.reset();
        }, (error) => {
            document.getElementById("statusMessage").innerText = "Failed! Try Again.";
            document.getElementById("statusMessage").style.color = "red";
        });
});
