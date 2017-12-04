import './style.css';
import Icon from './icon.png';

var element = document.createElement('h1');
element.innerHTML = "Hello world!";
element.classList.add('hello');
document.body.appendChild(element);

var myIcon = new Image();
myIcon.src = Icon;
document.body.appendChild(myIcon);

