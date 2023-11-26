<style>
.image-container:hover img {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
}
</style>


<div align='center' class="image-container">
    <h1>Todo-List Web App
    </h1>
        <img src="https://img.shields.io/static/v1?label=&message=HTML&color=E34F26&style=for-the-badge&logo=HTML5&logoColor=white&logoWidth=&labelColor=&link=" style="height: 35; border: 2px solid white; border-radius: 10px;">
		<img src="https://img.shields.io/static/v1?label=&message=CSS&color=1572B6&style=for-the-badge&logo=CSS3&logoColor=white&logoWidth=&labelColor=&link=" style="height: 35; border: 2px solid white; border-radius: 10px;">
		<img src="https://img.shields.io/static/v1?label=&message=Javascript&color=F7DF1E&style=for-the-badge&logo=Javascript&logoColor=black&logoWidth=&labelColor=&link=" style="height: 35; border: 2px solid black; border-radius: 10px;">
</div>


[Todo Website](https://asdacosta.github.io/todo-list/)

![Live Demo](./todo-demo.gif)

## Project Origin
[The Odin Project](https://www.theodinproject.com/)

## Project Objective
Aims to build a todo list, and it stresses on the use of JavaScript

## Project Relevance
To solidify concepts of `Object Oriented Programming (OOP) Principles`, particularly `SOLID Principles` in JavaScript. 

## Intended Audience
Developers, users, recruiters.

## Technologies
* `XUbuntu` in Terminal
* `VS Code`
* `Git`
* `Webpack`

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

## Imporvements
* Add date icon to be able to select date from calender.
* Add local storage for todos; continue in commented code in `src/storage.js`.
* Add edit icon to tasks. (Dialog should popup with contents and legend of Edit Task instead of task number)
* Make dialog have an exit 'X' at top to be able to cancel task. (You might need to replace dialog with another element, say div)
* When user returns to page, indicate previously selected color from local storage with border in settings. 
* Checked task should reflect in all categories it's in and it should be at the bottom. (Might need to replace checkbox input with <div> or another element and style as a check box).
* Add priority rank in form and indicate it on the task with a small box.
* Make website responsive in all screen sizes.
* Add a choice in settings to pick a random color for user.

## Contributors & Curator
1. [Abraham Da Costa Silvanus](https://github.com/asdacosta)

**[🞁 Top](#todo-list)**
