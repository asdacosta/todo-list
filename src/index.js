import './style.css';
import {paintColorCircle, generateColors} from './setting.js';
import * as todayFunctions from './today.js';
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
})();

const launchToday = (function () {
    const todayDiv = document.querySelectorAll('.today');
    const todaySection = document.querySelector('.today-module');
    const isFullSpan = document.querySelector('main > span');
    let todayActive = false;

    todayDiv.forEach((item) => {
        item.addEventListener('click', () => {
            todayActive = true;
            launchUpcoming.upcomingActive = false;
            launchConsolidated.consolidatedActive = false;
            launchPersonal.personalActive = false;
            launchWork.workActive = false;
            launchFamily.familyActive = false;
            launchOther.otherActive = false;
            launchSettings.settingsActive = false;
            if (todayActive) {
                launchUpcoming.upcomingSection.style.display = 'none';
                launchConsolidated.consolidatedSection.style.display = 'none';
                launchPersonal.personalSection.style.display = 'none';
                launchWork.workSection.style.display = 'none';
                launchFamily.familySection.style.display = 'none';
                launchOther.otherSection.style.display = 'none';
                launchSettings.settingsSection.style.display = 'none';
                todaySection.style.display = 'flex';
            }

            isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Today');
            if (todaySection.textContent === '') {
                todayUpcomingFunctions.createTodayAddTask();
            }
        })
    })

    return {todayActive, todaySection};
})();

const launchUpcoming = (function () {
    const upcomingDiv = document.querySelectorAll('.upcoming');
    const upcomingSection = document.querySelector('.upcoming-module');
    const isFullSpan = document.querySelector('main > span');
    let upcomingActive = false;

    upcomingDiv.forEach((item) => {
        item.addEventListener('click', () => {
            upcomingActive = true;
            launchToday.todayActive = false;
            launchConsolidated.consolidatedActive = false;
            launchPersonal.personalActive = false;
            launchWork.workActive = false;
            launchFamily.familyActive = false;
            launchOther.otherActive = false;
            launchSettings.settingsActive = false;
            if (upcomingActive) {
                launchToday.todaySection.style.display = 'none';
                launchConsolidated.consolidatedSection.style.display = 'none';
                launchPersonal.personalSection.style.display = 'none';
                launchWork.workSection.style.display = 'none';
                launchFamily.familySection.style.display = 'none';
                launchOther.otherSection.style.display = 'none';
                launchSettings.settingsSection.style.display = 'none';
                upcomingSection.style.display = 'flex';
            }

            isFullSpan.innerHTML = '';
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
    const isFullSpan = document.querySelector('main > span');
    let consolidatedActive = false;

    consolidatedDiv.forEach((item) => {
        item.addEventListener('click', () => {
            consolidatedActive = true;
            launchToday.todayActive = false;
            launchUpcoming.upcomingActive = false;
            launchPersonal.personalActive = false;
            launchWork.workActive = false;
            launchFamily.familyActive = false;
            launchOther.otherActive = false;
            launchSettings.settingsActive = false;
            if (consolidatedActive) {
                launchToday.todaySection.style.display = 'none';
                launchUpcoming.upcomingSection.style.display = 'none';
                launchPersonal.personalSection.style.display = 'none';
                launchWork.workSection.style.display = 'none';
                launchFamily.familySection.style.display = 'none';
                launchOther.otherSection.style.display = 'none';
                launchSettings.settingsSection.style.display = 'none';
                consolidatedSection.style.display = 'flex';
            }

            isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Consolidated Tasks');
            consolidatedSection.innerHTML = `${todayUpcomingFunctions.consolidatedArray[0]} ${todayUpcomingFunctions.consolidatedArray[1]}`;
        })
    })
    return {consolidatedActive, consolidatedSection};
})();

const launchPersonal = (function () {
    const personalDiv = document.querySelectorAll('.personals');
    const personalSection = document.querySelector('.personal-module');
    const isFullSpan = document.querySelector('main > span');
    
    let personalActive = false;
    personalDiv.forEach((item) => {
        item.addEventListener('click', () => {
            personalActive = true;
            launchToday.todayActive = false;
            launchUpcoming.upcomingActive = false;
            launchConsolidated.consolidatedActive = false;
            launchWork.workActive = false;
            launchFamily.familyActive = false;
            launchOther.otherActive = false;
            launchSettings.settingsActive = false;
            if (personalActive) {
                launchToday.todaySection.style.display = 'none';
                launchUpcoming.upcomingSection.style.display = 'none';
                launchConsolidated.consolidatedSection.style.display = 'none';
                launchWork.workSection.style.display = 'none';
                launchFamily.familySection.style.display = 'none';
                launchOther.otherSection.style.display = 'none';
                launchSettings.settingsSection.style.display = 'none';
                personalSection.style.display = 'flex';
            }

            isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Personal');
            // console.log(todayUpcomingFunctions.categories);
            personalSection.innerHTML = todayUpcomingFunctions.categories.personal;
        })
    })

    return {personalActive, personalSection};
})();

const launchWork = (function () {
    const workDiv = document.querySelectorAll('.works');
    const workSection = document.querySelector('.work-module');
    const isFullSpan = document.querySelector('main > span');

    let workActive = false;
    workDiv.forEach((item) => {
        item.addEventListener('click', () => {
            workActive = true;
            launchToday.todayActive = false;
            launchUpcoming.upcomingActive = false;
            launchConsolidated.consolidatedActive = false;
            launchPersonal.personalActive = false;
            launchFamily.familyActive = false;
            launchOther.otherActive = false;
            launchSettings.settingsActive = false;
            if (workActive) {
                launchToday.todaySection.style.display = 'none';
                launchUpcoming.upcomingSection.style.display = 'none';
                launchConsolidated.consolidatedSection.style.display = 'none';
                launchPersonal.personalSection.style.display = 'none';
                launchFamily.familySection.style.display = 'none';
                launchOther.otherSection.style.display = 'none';
                launchSettings.settingsSection.style.display = 'none';
                workSection.style.display = 'flex';
            }

            isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Work');
            workSection.innerHTML = todayUpcomingFunctions.categories.work;
        })
    })

    return {workActive, workSection};

})();

const launchFamily = (function () {
    const familyDiv = document.querySelectorAll('.families');
    const familySection = document.querySelector('.family-module');
    const isFullSpan = document.querySelector('main > span');

    let familyActive = false;
    familyDiv.forEach((item) => {
        item.addEventListener('click', () => {
            familyActive = true;
            launchToday.todayActive = false;
            launchUpcoming.upcomingActive = false;
            launchConsolidated.consolidatedActive = false;
            launchPersonal.personalActive = false;
            launchWork.workActive = false;
            launchOther.otherActive = false;
            launchSettings.settingsActive = false;
            if (familyActive) {
                launchToday.todaySection.style.display = 'none';
                launchUpcoming.upcomingSection.style.display = 'none';
                launchConsolidated.consolidatedSection.style.display = 'none';
                launchPersonal.personalSection.style.display = 'none';
                launchWork.workSection.style.display = 'none';
                launchOther.otherSection.style.display = 'none';
                launchSettings.settingsSection.style.display = 'none';
                familySection.style.display = 'flex';
            }

            isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Family');
            familySection.innerHTML = todayUpcomingFunctions.categories.family;
        })
    })

    return {familyActive, familySection};
})();

const launchOther = (function () {
    const otherDiv = document.querySelectorAll('.others');
    const otherSection = document.querySelector('.other-module');
    const isFullSpan = document.querySelector('main > span');

    let otherActive = false;
    otherDiv.forEach((item) => {
        item.addEventListener('click', () => {
            otherActive = true;
            launchToday.todayActive = false;
            launchUpcoming.upcomingActive = false;
            launchConsolidated.consolidatedActive = false;
            launchPersonal.personalActive = false;
            launchWork.workActive = false;
            launchFamily.familyActive = false;
            launchSettings.settingsActive = false;
            if (otherActive) {
                launchToday.todaySection.style.display = 'none';
                launchUpcoming.upcomingSection.style.display = 'none';
                launchConsolidated.consolidatedSection.style.display = 'none';
                launchPersonal.personalSection.style.display = 'none';
                launchWork.workSection.style.display = 'none';
                launchFamily.familySection.style.display = 'none';
                launchSettings.settingsSection.style.display = 'none';
                otherSection.style.display = 'flex';
            }

            isFullSpan.innerHTML = '';
            todayUpcomingFunctions.displayHeader('Other');
            otherSection.innerHTML = todayUpcomingFunctions.categories.other;
        })
    })

    return {otherActive, otherSection};
})();

const launchSettings = (function () {
    const settingsIcon = document.querySelector('.settings');
    const settingsSection = document.querySelector('.settings-module');
    const isFullSpan = document.querySelector('main > span');
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
        settingsActive = true;
        launchToday.todayActive = false;
        launchUpcoming.upcomingActive = false;
        launchConsolidated.consolidatedActive = false;
        launchPersonal.personalActive = false;
        launchWork.workActive = false;
        launchFamily.familyActive = false;
        launchOther.otherActive = false;
        if (settingsActive) {
            launchToday.todaySection.style.display = 'none';
            launchUpcoming.upcomingSection.style.display = 'none';
            launchConsolidated.consolidatedSection.style.display = 'none';
            launchPersonal.personalSection.style.display = 'none';
            launchWork.workSection.style.display = 'none';
            launchFamily.familySection.style.display = 'none';
            launchOther.otherSection.style.display = 'none';
            settingsSection.style.display = 'flex';
        }
        
        isFullSpan.innerHTML = '';
        todayUpcomingFunctions.displayHeader('Settings');

        settingsSection.appendChild(colorChangeText);
        settingsSection.appendChild(colorContainer);
        paintColorCircle();
    })

    return {settingsActive, settingsSection};
})();

const generateInfo = (function () {
    const infoIcon = document.querySelector('.info');
    const infoContent = document.querySelector('nav > div:last-child > span');

    infoIcon.addEventListener('mouseover', () => {
        infoContent.innerHTML = "Add your tasks in 'Today' or 'Upcoming' section and they will be sorted according to their respective categories."
    })
    infoIcon.addEventListener('mouseout', () => {
        infoContent.textContent = '';
    })
})();