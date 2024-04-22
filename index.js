const menu = document.getElementById("menu");
const close = document.getElementById("closebtn");
const resume = document.getElementById("resume");
const about = document.getElementById("about");
const aboutClick = document.getElementById("aboutClick");
const resumeClick = document.getElementById("resumeClick");

menu.addEventListener("click", openNav);
close.addEventListener("click", closeNav);

initSection();

resumeClick.addEventListener("click", () => changeSection(resume, "resume"));
aboutClick.addEventListener("click", () => changeSection(about, "about"));

function changeSection(section, sectionName) {
    clear();
    closeNav();
    section.classList.add(sectionName);
}

function initSection() {
    clear();
    resume.classList.add("resume");
}

function clear() {
    resume.classList.remove("resume");
    about.classList.remove("about");
}

function openNav() {
    document.getElementById("mySidenav").style.width = "160px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}