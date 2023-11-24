# Todo List

[Todo Website](https://asdacosta.github.io/todo-list/)

![Live Demo](./todo-demo.gif)

## Project Origin
The Odin Project

## Project Objective
Aims to build a todo list, and it stresses on the use of JavaScript

## Project Relevance
To solidify concepts of `Object Oriented Programming (OOP) Principles`, particularly `SOLID Principles` in JavaScript. 

## Intended Audience
Developers, users, recruiters.

## Technologies
* `XUbuntu` in Terminal
* `VS` Code
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
* Add edit icon to tasks. (Dialog should popup with contents and <legend> Edit Task</legend> instead of task number)
* Make dialog have an exit 'X' at top to be able to cancel task. (You might need to replace dialog with <div>)
* When user returns to page, indicate previously selected color from local storage with border in settings. 
* Checked task should reflect in all categories it's in and it should be at the bottom. (Might need to replace checkbox input with <div> or another element and style as a check box).
* Add priority rank in form and indicate it on the task with a small box.
* Make website responsive in all screen sizes.
