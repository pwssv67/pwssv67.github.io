//обёртка в скобки чтобы не было конфликтов с именами
function start(){
    console.log("start");
    const scrollLink = document.querySelectorAll('a.scroll-link');
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
        });
    }

    
    const hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
    document.getElementsByClassName("hamburger")[0].addEventListener("click", function() {
        console.log("osodojsod")
        if (hamburgerMenu.classList.contains("hide")) {
            hamburgerMenu.classList.remove("hide")
        } else {
            hamburgerMenu.classList.add("hide")
        }
    });

    const eng = document.getElementsByClassName("eng")
    eng.forEach(element, index => {
        element.addEventListener ("click",  function() {
            if (true) {
                setEnglishLanguage();
                isLanguageEnglish = true;
            }
    });
    });

    document.getElementsByClassName("ru")[0].onclick = function() {
        if (isLanguageEnglish) {
            setRusLanguage();
            isLanguageEnglish = false;
        }
    }
}
document.onload = start();

var isLanguageEnglish = false;

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
        titleElements[i].textContent = navElementsTitles[i+1];
    }
}

function translateHeader(name, about) {
    document.getElementsByClassName("name")[0].textContent = name;
    document.getElementsByClassName("short-about")[0].innerHTML = about;
}


function translateFacts(facts) {
    let factElements = document.getElementsByClassName("fact")
    for (let i = 0; i<factElements.length;i++) {
        factElements[i].innerHTML = facts[i];
    }
}

function translateDescriptions(skillsDescription, contactDescription) {
    document.getElementsByClassName("description")[0].textContent = skillsDescription;
    document.getElementsByClassName("description")[1].innerHTML = contactDescription;
}

function translateProjects(projectDescriptions) {
    let projectDescriptionElements = document.getElementsByClassName("project-description");
    for (let i = 0; i<projectDescriptionElements.length; i++) {
        projectDescriptionElements[i].innerHTML = projectDescriptions[i];
    }
}

function translateContacts(contact, contactMe) {
    document.getElementsByClassName("email")[0].textContent = contact;
    document.getElementsByClassName("last")[0].innerHTML = contactMe;
}
