//обёртка в скобки чтобы не было конфликтов с именами
{
    const scrollLink = document.querySelectorAll('a.scroll-link');
    for (let i = 0; i < scrollLink.length; i++) {
        scrollLink[i].addEventListener('click', function (event) {
            // console.log(event) //просмотр всех свойств event
            event.preventDefault(); // отмена события (обновления страницы)
            const id = scrollLink[i].getAttribute('href'); //вытаскиваем id для дальнейшего обращения
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        });
    }
    document.getElementsByClassName("eng")[0].addEventListener ("click",  function() {
        if (true) {
            setEnglishLanguage();
            isLanguageEnglish = true;
        }
    }
    );

    document.getElementsByClassName("ru")[0].onclick = function() {
        if (isLanguageEnglish) {
            setRusLanguage();
            isLanguageEnglish = false;
        }
    }
}

var isLanguageEnglish = false

function setEnglishLanguage() {
    document.getElementsByClassName("eng")[0].classList.add("chosed");
    document.getElementsByClassName("ru")[0].classList.remove("chosed");
    translateToEnglish();
}

function setRusLanguage() {
    document.getElementsByClassName("eng")[0].classList.remove("chosed");
    document.getElementsByClassName("ru")[0].classList.add("chosed");
}

function translateToEnglish() {
    translateNavigationToEnglish();
    translateHeaderToEnglish();
    translateAboutToEnglish();
    translateDescriptionsToEnglish();
    translateProjectsToEnglish();
    translateContactsToEnglish();
}

function translateNavigationToEnglish() {
    let navElementsTitles = ["Main", "About", "Skills", "Projects", "Contact"];
    let navElements = document.getElementsByClassName("nav-item");
    for (let i = 0; i < navElements.length; i++) {
        navElements[i].textContent = navElementsTitles[i];
    }

    let titleElements = document.getElementsByClassName("title");
    for (let i = 0; i < titleElements.length; i++) {
        titleElements[i].textContent = navElementsTitles[i+1];
    }
}

function translateHeaderToEnglish() {
    let name = "Egor Smolyaninov";
    document.getElementsByClassName("name")[0].textContent = name;

    let about = "Junior Android Developer <br> 21 year old, Saint-Petersburg";
    document.getElementsByClassName("short-about")[0].innerHTML = about;
}


function translateAboutToEnglish() {
    let title = "About";
    let facts = [
        "Hi! I'm Egor, Android Dev from Saint-Petersburg\nI'm interested in Mobile development and everything connected with it",
        "I'm studying at \"Information Systems and Technologies\"\n in SPbSUAI",
        "Ready to implement excellent projects\nwith interesting people"
    ]
    let factElements = document.getElementsByClassName("fact")
    for (let i = 0; i<factElements.length;i++) {
        factElements[i].textContent = facts[i];
    }
}

function translateDescriptionsToEnglish() {
    let skillsDescription = "I work with such technologies as";
    let contactDescription = "Want to know more or just chat?<br>You are welcome!"
    document.getElementsByClassName("description")[0].textContent = skillsDescription;
    document.getElementsByClassName("description")[1].innerHTML = contactDescription;
}

function translateProjectsToEnglish() {
    let projectDescriptions = [
        "Fitness app with a unique algorithm of exercise recognition via accelerometer, providing you ability to compete with another users nearby or worldwide, or you can create custom group of friends to show them your metal.<br>" +
         "Developed with Koin, Android Navigation Component, Firebase, Kotlin Coroutines.",
         "App for makeup and manicure masters, to fill out all the necessary forms and consents from clients in electronic form, with the ability to either send the form to the client by email for filling out, or fill it out directly on the device, after which the form is saved in pdf for printing.<br>"+
         "Developed with Dagger2, RxJava2, Retrofit.",
         "Small app to count amount of water you drink, calories you eat and time of daily exercise. You can also see your statistics, set your goals and read articles about fitness.<br>"+
         "Developed with Jetpack Compose, Retrofit, Room."
    ];

    let projectDescriptionElements = document.getElementsByClassName("project-description");
    for (let i = 0; i<projectDescriptionElements.length; i++) {
        projectDescriptionElements[i].innerHTML = projectDescriptions[i];
    }
}

function translateContactsToEnglish() {
    let contact = "Contact";
    let contactMe = "Contact me on<br>LinkedIn, Instagram, Telegram";
    document.getElementsByClassName("email")[0].textContent = contact;
    document.getElementsByClassName("last")[0].innerHTML = contactMe;
}
