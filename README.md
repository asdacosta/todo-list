<div align='center'>
    <h1>Todo-List Web App</h1>
    <h4>Languages</h4>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML badge">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS badge">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript badge">
    <h4>Technologies</h4>
    <img src="https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black" alt="Linux badge">
    <img src="https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="VS Code badge">
    <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git badge">
    <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black" alt="Webpack badge">
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm badge">
</div>


[Todo Website](https://asdacosta.github.io/todo-list/)

![Live Demo](./todo-demo.gif)

## Origin
[The Odin Project](https://www.theodinproject.com/)

## Objective
Aims to build a todo list, and it stresses on the use of JavaScript

## Relevance
To solidify concepts of `Object Oriented Programming (OOP) Principles`, particularly `SOLID Principles` in JavaScript. 

## Intended Audience
Developers, users, recruiters.

> [!TIP]
> Users will need to run Webpack, install dependencies and set the configurations as done in `webpack.config.js`.

## Files
| File | Description |
| - | - |
|`src/*`| Source files that are bundled into the output directory `dist/`.|
|`src/index.js`| The main JavaScript entry point that bundling begins.|
|`dist/*`| Output files from bundling of files in directory `src/`.|
|`dist/main.js`| Main JavaScript output file that contains the bundled JavaScript code. Code is minified and optimized for deployment (Due to mode set to production in webpack config). |
|`algorithm.txt`| Contains JavaScript algorithm for some few part of entire code.|
|`webpack.config.js`| Configuration file for webpack. It enables the bundling of different assets.|
|`package*`| Contains details of project and dependencies versions.|

## Credit
| File | Description |
| - | - |
|`src/imgs/checklist.png`| Icon created by Graphics Plazza on [Flaticon](https://www.flaticon.com/free-icons/).|
|`src/imgs/*.svg`| Icons from [Material Design Icons](https://pictogrammers.com/library/mdi/).|

## Improvements
> [!NOTE]
> Most current features will also change in the future.

- [ ] Add date icon to be able to select date from calender.
- [ ] Add local storage for todos; continue in commented code in `src/storage.js`.
- [ ] Add edit icon to tasks. (Dialog should popup with contents and legend of Edit Task instead of task number)
- [ ] Make dialog have an exit 'X' at top to be able to cancel task. (You might need to replace dialog with another element, say div)
- [ ] When user returns to page, indicate previously selected color from local storage with border in settings. 
- [ ] Checked task should reflect in all categories it's in and it should be at the bottom. (Might need to replace checkbox input with <div> or another element and style as a check box).
- [ ] Add priority rank in form and indicate it on the task with a small box.
- [ ] Make website responsive in all screen sizes.
- [ ] Add a choice in settings to pick a random color for user.

## Contributors & Curator
1. [Abraham Da Costa Silvanus](https://github.com/asdacosta) :technologist:

**[🞁 Top](#todo-list)**
