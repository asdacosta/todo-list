import './style.css';
import {displaySetting, paintColorCircle, generateColors} from './setting.js';

const importAllImages = (function () {
    function importAll(r) {
        return r.keys().map(r);
    }
    const imgs = importAll(require.context('./imgs', false, /\.(png|jpe?g|svg)$/));
})();


const launchSettings = (function () {
    const settingsIcon = document.querySelector('.settings');
    settingsIcon.addEventListener('click', () => {
        displaySetting();
        paintColorCircle();
    })
})();