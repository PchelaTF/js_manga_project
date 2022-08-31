import './index.html';
import './styles/index.css';
import './styles/index.scss';

const greeting = "Hello";
console.log(greeting);

class Helper {

    render() {
        const div = document.createElement('div');
        div.classList.add('box');

        document.body.appendChild(div);
    }
}

const box = new Helper();

box.render();