function start() {
    console.log("start");
    const scrollLink = document.querySelectorAll('a.scroll-link');
    const navMenu = document.getElementsByClassName("nav")[0];
    const hamburger = document.getElementsByClassName("hamburger")[0]

    if (window.innerWidth <= 800) {
        document.getElementsByClassName("nav")[0].classList.add("hide");
    }

    for (let i = 0; i < scrollLink.length; i++) {
        scrollLink[i].addEventListener('click', function (event) {
            console.log("sdfdsf")
            // console.log(event) //просмотр всех свойств event
            event.preventDefault(); // отмена события (обновления страницы)
            const id = scrollLink[i].getAttribute('href'); //вытаскиваем id для дальнейшего обращения
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
            if (window.getComputedStyle(hamburger).display != "none") {
                navMenu.classList.add("hide");
            }
        });
    }


    hamburger.addEventListener("click", function () {
        console.log("osodojsod")
        if (navMenu.classList.contains("hide")) {
            navMenu.classList.remove("hide")
        } else {
            navMenu.classList.add("hide")
        }
    });

    const eng = document.getElementsByClassName("eng");
    for (let i = 0; i < eng.length; i++) {
        eng[i].addEventListener("click", function () {
            if (!isLanguageEnglish) {
                setEnglishLanguage();
                isLanguageEnglish = true;
            }
        });
    }


    const ru = document.getElementsByClassName("ru");
    for (let i = 0; i < ru.length; i++) {
        ru[i].onclick = function () {
            if (isLanguageEnglish) {
                setRusLanguage();
                isLanguageEnglish = false;
            }
        }
    }
}
document.onload = start();

//TODO change all hide/show to animation-class-*

var isLanguageEnglish = false;

window.addEventListener("resize", function() {
    if (window.innerWidth <= 800) {
        document.getElementsByClassName("nav")[0].classList.add("hide");
    } else {
        document.getElementsByClassName("nav")[0].classList.remove("hide");
    }
})

const mobileLangSwitcher = document.getElementsByClassName("lang-mobile")[0];
window.addEventListener("scroll", function() {
    if (this.pageYOffset >= 200 ) {
        mobileLangSwitcher.classList.remove("animation-class-show");
        mobileLangSwitcher.classList.add("animation-class-hide"); 
    } else {
        mobileLangSwitcher.classList.remove("animation-class-hide");
        mobileLangSwitcher.classList.add("animation-class-show");

    }
})


function setEnglishLanguage() {
    document.getElementsByClassName("eng")[0].classList.add("chosed");
    document.getElementsByClassName("ru")[0].classList.remove("chosed");
    document.getElementsByClassName("eng")[1].classList.add("chosed");
    document.getElementsByClassName("ru")[1].classList.remove("chosed");
    translateToEnglish();
}

function setRusLanguage() {
    document.getElementsByClassName("eng")[0].classList.remove("chosed");
    document.getElementsByClassName("ru")[0].classList.add("chosed");
    document.getElementsByClassName("eng")[1].classList.remove("chosed");
    document.getElementsByClassName("ru")[1].classList.add("chosed");
    translateToRussian();
}

function translateToEnglish() {
    translateNavigation(navElementsTitlesEng);
    translateHeader(nameEng, aboutEng);
    translateFacts(factsEng);
    translateDescriptions(skillsDescriptionEng, contactDescriptionEng);
    translateProjects(projectDescriptionsEng);
    translateContacts(contactEng, contactMeEng);
}

function translateToRussian() {
    translateNavigation(navElementsTitlesRus);
    translateHeader(nameRus, aboutRus);
    translateFacts(factsRus);
    translateDescriptions(skillsDescriptionRus, contactDescriptionRus);
    translateProjects(projectDescriptionsRus);
    translateContacts(contactRus, contactMeRus);
}

function translateNavigation(navElementsTitles) {
    let navElements = document.querySelectorAll('a.scroll-link');
    for (let i = 0; i < navElements.length; i++) {
        navElements[i].textContent = navElementsTitles[i];

    }

    let titleElements = document.getElementsByClassName("title");
    for (let i = 0; i < titleElements.length; i++) {
        titleElements[i].textContent = navElementsTitles[i + 1];
    }
}

function translateHeader(name, about) {
    document.getElementsByClassName("name")[0].textContent = name;
    document.getElementsByClassName("short-about")[0].innerHTML = about;
}


function translateFacts(facts) {
    let factElements = document.getElementsByClassName("fact")
    for (let i = 0; i < factElements.length; i++) {
        factElements[i].innerHTML = facts[i];
    }
}

function translateDescriptions(skillsDescription, contactDescription) {
    document.getElementsByClassName("description")[0].textContent = skillsDescription;
    document.getElementsByClassName("description")[1].innerHTML = contactDescription;
}

function translateProjects(projectDescriptions) {
    let projectDescriptionElements = document.getElementsByClassName("project-description");
    for (let i = 0; i < projectDescriptionElements.length; i++) {
        projectDescriptionElements[i].innerHTML = projectDescriptions[i];
    }
}

function translateContacts(contact, contactMe) {
    document.getElementsByClassName("email")[0].textContent = contact;
    document.getElementsByClassName("last")[0].innerHTML = contactMe;
}
