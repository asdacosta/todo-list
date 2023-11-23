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

let chooseColorActive = false;
const setColor = function () {
    const elementsToChange = function (color) {
        const hoveringEffect = (function () {
            const hoveringDivs = document.querySelectorAll('.addTasksSection > div, .sortSection > div');
            const hoveringSettings = document.querySelector('.settings');

            hoveringDivs.forEach((div, index) => {
                div.classList.add(`div${index}`);
                const hoveringImg = document.querySelector(`.div${index} img`);
                const hoveringSpan = document.querySelector(`.div${index} span`);
                hoveringImg.addEventListener('mouseover', () => {
                    hoveringImg.style.background = color;
                    hoveringSpan.style.color = color;
                })
                hoveringImg.addEventListener('mouseout', () => {
                    hoveringImg.style.background = 'rgba(255, 255, 255, 0.7)';
                    hoveringSpan.style.color = 'white';
                })
                hoveringSpan.addEventListener('mouseover', () => {
                    hoveringImg.style.background = color;
                    hoveringSpan.style.color = color;
                })
                hoveringSpan.addEventListener('mouseout', () => {
                    hoveringImg.style.background = 'rgba(255, 255, 255, 0.7)';
                    hoveringSpan.style.color = 'white';
                })
            })

            hoveringSettings.addEventListener('mouseover', () => {
                hoveringSettings.style.background = color;
            })
            hoveringSettings.addEventListener('mouseout', () => {
                hoveringSettings.style.background = 'rgba(255, 255, 255, 0.7)';
            })
        })();

        const constantEffect = (function () {
            const backgroundconstantChangeElements = document.querySelectorAll('nav > section:empty, nav > div:last-child > span, .addTaskDiv, dialog, header');
            const descriptionBox = document.querySelector('main > div');
            const taskDivs = document.querySelectorAll('.taskDiv');

            backgroundconstantChangeElements.forEach((element) => {
                element.style.background = color;
            })
            taskDivs.forEach((div) => {
                div.style.border = `2px solid ${color}`;
            })
            descriptionBox.style.border = `5px solid ${color}`;
        })();
    }

    const setChooseColor = (function () {
        const colorCircles = document.querySelectorAll('.colorContainer > span');

        let computedColor = null;
        colorCircles.forEach((circle) => {
            circle.addEventListener('click', () => {
                chooseColorActive = true;

                colorCircles.forEach((otherCircle) => {
                    otherCircle.style.border = 'none';
                })
    
                circle.style.border = '2px solid white';
                const computedStyle = window.getComputedStyle(circle);
                computedColor = computedStyle.backgroundColor;
                elementsToChange(computedColor);
            })
        })
    })();

    const setDefaultColor = (function () {
        const savedColor = localStorage.getItem('color');

        if (chooseColorActive === false && !savedColor) {
            elementsToChange(generateColors.blue);
        }
    })();
};

export { paintColorCircle, setColor };