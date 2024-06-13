import mediator from "./modules/mediator";

let header = document.getElementById('header')

const h11 = document.createElement('h1')
h11.textContent="press the button to add a project or todo idk "

let btn = document.createElement('button')
btn.textContent = "press here"

header.appendChild(h11)
header.appendChild(btn)
