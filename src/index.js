import './style.css';
import * as settingsFunctions from './setting.js';
import * as sectionFunctions from './sectionsLogic.js';
import storeHouse from './storage.js';

const importAllImages = (function () {
    function importAll(r) {
        return r.keys().map(r);
    }
    const imgs = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));
})();

const launchTodayAtPageLoad = (function () {
    sectionFunctions.displayHeader('Today');
    sectionFunctions.createTodayAddTask();
    settingsFunctions.setColor();
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
            sectionFunctions.displayHeader('Today');
            if (todaySection.textContent === '') {
                sectionFunctions.createTodayAddTask();
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
            sectionFunctions.displayHeader('Upcoming');
            if (upcomingSection.textContent === '') {
                sectionFunctions.createUpcomingAddTask();
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
            sectionFunctions.displayHeader('Consolidated Tasks');
            consolidatedSection.innerHTML = `${sectionFunctions.consolidatedArray[0]} ${sectionFunctions.consolidatedArray[1]}`;

            displayDescriptionInCategorySections('.consolidated-module');
            removeDeleteSpansInCategorySections('.consolidated-module');
            sectionFunctions.colorGeneratedTasks();
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
            sectionFunctions.displayHeader('Personal');
            personalSection.innerHTML = sectionFunctions.categories.personal;

            displayDescriptionInCategorySections('.personal-module');
            removeDeleteSpansInCategorySections('.personal-module');
            sectionFunctions.colorGeneratedTasks();
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
            sectionFunctions.displayHeader('Work');
            workSection.innerHTML = sectionFunctions.categories.work;

            displayDescriptionInCategorySections('.work-module');
            removeDeleteSpansInCategorySections('.work-module');
            sectionFunctions.colorGeneratedTasks();
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
            sectionFunctions.displayHeader('Family');
            familySection.innerHTML = sectionFunctions.categories.family;

            displayDescriptionInCategorySections('.family-module');
            removeDeleteSpansInCategorySections('.family-module');
            sectionFunctions.colorGeneratedTasks();
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
            sectionFunctions.displayHeader('Other');
            otherSection.innerHTML = sectionFunctions.categories.other;

            displayDescriptionInCategorySections('.other-module');
            removeDeleteSpansInCategorySections('.other-module');
            sectionFunctions.colorGeneratedTasks();
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
        sectionFunctions.displayHeader('Settings');

        settingsSection.appendChild(colorChangeText);
        settingsSection.appendChild(colorContainer);
        settingsFunctions.paintColorCircle();
        settingsFunctions.setColor();
    })

    return {settingsActive, settingsSection};
})();

const generateInfo = (function () {
    const infoIcon = document.querySelector('.info');
    const infoContent = document.querySelector('nav > div:last-child > span');

    infoIcon.addEventListener('mouseover', () => {
        infoContent.style.border = '2px solid white';
        infoContent.style.padding = '5px';
        infoContent.innerHTML = "Add tasks in 'Today' or 'Upcoming' section and they will be sorted according to their respective categories. You can add a maximum of 5 tasks in the named sections."
    })
    infoIcon.addEventListener('mouseout', () => {
        infoContent.style.border = 'none';
        infoContent.style.padding = '0';
        infoContent.textContent = '';
    })
})();

const displayDescriptionInCategorySections = function (sectionClass) {
    const descriptionBox = document.querySelector('main > div');
    const descriptionContent = document.querySelector('main > div > span');
    const categoryDescriptions = document.querySelectorAll(`${sectionClass} .description`);

    categoryDescriptions.forEach((element) => {
        element.addEventListener('mouseover', () => {
            descriptionBox.style.display = 'flex';
            descriptionContent.textContent = element.dataset.value;
        })
        element.addEventListener('mouseout', () => {
            descriptionBox.style.display = 'none';
            descriptionContent.textContent = '';
        })
    })
};

const removeDeleteSpansInCategorySections = function (sectionClass) {
    const categoryDeleteSpans = document.querySelectorAll(`${sectionClass} .deleteTask`);

    categoryDeleteSpans.forEach((element) => {
        element.style.display = 'none';
    })
}

const storeAndRetrieveLocalStorage = (function () {
    storeHouse();
})();