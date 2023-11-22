import './style.css';
import {paintColorCircle, setColor, generateColors} from './setting.js';
import * as todayUpcomingFunctions from './today-upcoming.js';

const importAllImages = (function () {
    function importAll(r) {
        return r.keys().map(r);
    }
    const imgs = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));
})();

const launchTodayAtPageLoad = (function () {
    todayUpcomingFunctions.displayHeader('Today');
    todayUpcomingFunctions.createTodayAddTask();
    setColor();
})();

const toggleModule = function (moduleSection, isActive) {
    launchToday.todayActive = false;
    launchUpcoming.upcomingActive = false;
    launchConsolidated.consolidatedActive = false;
    launchPersonal.personalActive = false;
    launchWork.workActive = false;
    launchFamily.familyActive = false;
    launchOther.otherActive = false;
    launchSettings.settingsActive = false;

    isActive = true;
    if (isActive) {
        launchToday.todaySection.style.display = 'none';
        launchUpcoming.upcomingSection.style.display = 'none';
        launchConsolidated.consolidatedSection.style.display = 'none';
        launchPersonal.personalSection.style.display = 'none';
        launchWork.workSection.style.display = 'none';
        launchFamily.familySection.style.display = 'none';
        launchOther.otherSection.style.display = 'none';
        launchSettings.settingsSection.style.display = 'none';

        moduleSection.style.display = 'flex';
    }
}

const launchToday = (function () {
    const todayDiv = document.querySelectorAll('.today');
    const todaySection = document.querySelector('.today-module');
    const isFullSpan = document.querySelector('main > span');
    let todayActive = false;

    todayDiv.forEach((item) => {
        item.addEventListener('click', () => {
            toggleModule(launchToday.todaySection, launchToday.todayActive);

            isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Today');
            if (todaySection.textContent === '') {
                todayUpcomingFunctions.createTodayAddTask();
            }
        })
    })

    return {todayActive, todaySection, isFullSpan};
})();

const launchUpcoming = (function () {
    const upcomingDiv = document.querySelectorAll('.upcoming');
    const upcomingSection = document.querySelector('.upcoming-module');
    let upcomingActive = false;

    upcomingDiv.forEach((item) => {
        item.addEventListener('click', () => {
            toggleModule(launchUpcoming.upcomingSection, launchUpcoming.upcomingActive);

            launchToday.isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Upcoming');
            if (upcomingSection.textContent === '') {
                todayUpcomingFunctions.createUpcomingAddTask();
            }
        })
    })

    return {upcomingActive, upcomingSection};
})();

const launchConsolidated = (function () {
    const consolidatedDiv = document.querySelectorAll('.consolidated');
    const consolidatedSection = document.querySelector('.consolidated-module');
    let consolidatedActive = false;

    consolidatedDiv.forEach((item) => {
        item.addEventListener('click', () => {
            toggleModule(launchConsolidated.consolidatedSection, launchConsolidated.consolidatedActive);

            launchToday.isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Consolidated Tasks');
            consolidatedSection.innerHTML = `${todayUpcomingFunctions.consolidatedArray[0]} ${todayUpcomingFunctions.consolidatedArray[1]}`;
        })
    })
    return {consolidatedActive, consolidatedSection};
})();

const launchPersonal = (function () {
    const personalDiv = document.querySelectorAll('.personals');
    const personalSection = document.querySelector('.personal-module');
    
    let personalActive = false;
    personalDiv.forEach((item) => {
        item.addEventListener('click', () => {
            toggleModule(launchPersonal.personalSection, launchPersonal.personalActive);

            launchToday.isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Personal');
            personalSection.innerHTML = todayUpcomingFunctions.categories.personal;
        })
    })

    return {personalActive, personalSection};
})();

const launchWork = (function () {
    const workDiv = document.querySelectorAll('.works');
    const workSection = document.querySelector('.work-module');

    let workActive = false;
    workDiv.forEach((item) => {
        item.addEventListener('click', () => {
            toggleModule(launchWork.workSection, launchWork.workActive);

            launchToday.isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Work');
            workSection.innerHTML = todayUpcomingFunctions.categories.work;
        })
    })

    return {workActive, workSection};

})();

const launchFamily = (function () {
    const familyDiv = document.querySelectorAll('.families');
    const familySection = document.querySelector('.family-module');

    let familyActive = false;
    familyDiv.forEach((item) => {
        item.addEventListener('click', () => {
            toggleModule(launchFamily.familySection, launchFamily.familyActive);

            launchToday.isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Family');
            familySection.innerHTML = todayUpcomingFunctions.categories.family;
        })
    })

    return {familyActive, familySection};
})();

const launchOther = (function () {
    const otherDiv = document.querySelectorAll('.others');
    const otherSection = document.querySelector('.other-module');

    let otherActive = false;
    otherDiv.forEach((item) => {
        item.addEventListener('click', () => {
            toggleModule(launchOther.otherSection, launchOther.otherActive);

            launchToday.isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Other');
            otherSection.innerHTML = todayUpcomingFunctions.categories.other;
        })
    })

    return {otherActive, otherSection};
})();

const launchSettings = (function () {
    const settingsIcon = document.querySelector('.settings');
    const settingsSection = document.querySelector('.settings-module');
    const colorChangeText = document.createElement('p');
    const colorContainer = document.createElement('div');

    colorChangeText.textContent = 'Choose your desired color:';
    colorContainer.classList.add('colorContainer');

    for (let m = 0; m < 6; m++) {
        const colorCircle = document.createElement('span');
        colorCircle.classList.add(`colorCircle${m}`);
        colorContainer.appendChild(colorCircle);
    }

    let settingsActive = false;
    settingsIcon.addEventListener('click', () => {
        toggleModule(launchSettings.settingsSection, launchSettings.settingsActive);
        
        launchToday.isFullSpan.innerHTML = '';
        todayUpcomingFunctions.displayHeader('Settings');

        settingsSection.appendChild(colorChangeText);
        settingsSection.appendChild(colorContainer);
        paintColorCircle();
        setColor();
    })

    return {settingsActive, settingsSection};
})();

const generateInfo = (function () {
    const infoIcon = document.querySelector('.info');
    const infoContent = document.querySelector('nav > div:last-child > span');

    infoIcon.addEventListener('mouseover', () => {
        infoContent.style.border = '2px solid white';
        infoContent.style.padding = '5px';
        infoContent.innerHTML = "Add your tasks in 'Today' or 'Upcoming' section and they will be sorted according to their respective categories. You can add a maximum of 5 tasks per section."
    })
    infoIcon.addEventListener('mouseout', () => {
        infoContent.style.border = 'none';
        infoContent.style.padding = '0';
        infoContent.textContent = '';
    })
})();
