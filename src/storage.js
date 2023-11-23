export default function createLocalStorage () {
    function takeColor () {
        const emptySection = document.querySelector('nav > section:empty');
        const currentColor = window.getComputedStyle(emptySection).backgroundColor;
        localStorage.setItem('color', currentColor);
    }

    function setColor (color) {
        const constantEffect = (function () {
            const backgroundconstantChangeElements = document.querySelectorAll('nav > section:empty, nav > div:last-child > span, .addTaskDiv, dialog');
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
    }

    // function populateStorage () {
    //     takeColor();
    // }

    const populateOrSet = (function () {
        const savedColor = localStorage.getItem('color');
        if (savedColor) {
            setColor(savedColor);
        }
    })();

    const dynamic = (function () {
        setInterval(() => {
            takeColor();
        }, 1000);
    })();
}