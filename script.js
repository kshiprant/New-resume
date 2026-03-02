function toggleSection(element) {
    const section = element.parentElement;
    section.classList.toggle("active");
}

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

document.getElementById("downloadBtn").addEventListener("click", function() {
    window.print();
});
