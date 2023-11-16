import './style.css';
import {displaySetting, paintColorCircle, generateColors} from './setting.js';
import {createAddTask, displayTodayHeader} from './today.js';

const importAllImages = (function () {
    function importAll(r) {
        return r.keys().map(r);
    }
    const imgs = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));
})();


const launchToday = (function () {
    const todayDiv = document.querySelectorAll('.today');
    const taskSection = document.querySelector('main > section');

    todayDiv.forEach((item) => {
        item.addEventListener('click', () => {
            displayTodayHeader();
            if (taskSection.textContent === '') {
                createAddTask();
            }
        })
    })
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