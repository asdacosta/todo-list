import './style.css';
import {displaySetting, paintColorCircle, generateColors} from './setting.js';
import * as todayFunctions from './today.js';
import * as todayUpcomingFunctions from './today-upcoming.js';

const importAllImages = (function () {
    function importAll(r) {
        return r.keys().map(r);
    }
    const imgs = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));
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
            if (todayActive) {
                launchUpcoming.upcomingSection.style.display = 'none';
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
            if (upcomingActive) {
                launchToday.todaySection.style.display = 'none';
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

const launchSettings = (function () {
    const settingsIcon = document.querySelector('.settings');
    settingsIcon.addEventListener('click', () => {
        displaySetting();
        paintColorCircle();
    })
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