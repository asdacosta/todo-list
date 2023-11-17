import * as todayUpcomingFunctions from './today-upcoming.js';

const generateColors = (function () {
    const red = 'rgba(253, 111, 85, 0.7)';
    const yellow = 'rgba(252, 252, 106, 0.7)';
    const blue = 'rgba(115, 210, 253, 0.7)';
    const violet = 'rgba(250, 80, 250, 0.7)';
    const grey = 'rgba(158, 158, 158, 0.7)';
    const wood = 'rgba(223, 179, 123, 0.7)';

    return {red, yellow, blue, violet, grey, wood};
})();

const paintColorCircle = function () {
    const colorCircles = document.querySelectorAll('.colorContainer > span');

    colorCircles.forEach((circle) => {
        switch(circle.className) {
            case 'colorCircle0':
                circle.style.background = `${generateColors.red}`;
                break;
            case 'colorCircle1':
                circle.style.background = `${generateColors.yellow}`;
                break;
            case 'colorCircle2':
                circle.style.background = `${generateColors.blue}`;
                break;
            case 'colorCircle3':
                circle.style.background = `${generateColors.violet}`;
                break;
            case 'colorCircle4':
                circle.style.background = `${generateColors.grey}`;
                break;
            case 'colorCircle5':
                circle.style.background = `${generateColors.wood}`;
                break;
        }
    })
};

const displaySetting = function () {

    const settingSection = document.querySelector('.settings-module');
    todayUpcomingFunctions.displayHeader('Settings');

    const colorChangeText = document.createElement('p');
    colorChangeText.textContent = 'Choose your desired color:';

    const colorContainer = document.createElement('div');
    colorContainer.classList.add('colorContainer');
    for (let m = 0; m < 6; m++) {
        const colorCircle = document.createElement('span');
        colorCircle.classList.add(`colorCircle${m}`);
        colorContainer.appendChild(colorCircle);
    }

    settingSection.appendChild(colorChangeText);
    settingSection.appendChild(colorContainer);
};

export {displaySetting, paintColorCircle, generateColors};