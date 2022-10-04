import './index.html';
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/materialize-css/dist/js/materialize.js';
import './styles/index.scss';

import Card from './components/Cards';
import Pagination from './components/Pagination/Pagination';

let url = `https://kitsu.io/api/edge/manga?page%5Blimit%5D=12&page%5Boffset%5D=0`;

(async () => await Card.render(url))();

// (async () => await Pagination.render(url))();

function render() {
    return Pagination.render(url);
}
render();

function swith() {

    document.querySelector('.pagination').addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;
        let url = target.href;
        let urlParent;

        if (!url) {
            urlParent = target.parentNode.href;
        }

        (url) ? Card.render(url) : Card.render(urlParent);
        (url) ? Pagination.render(url) : Pagination.render(urlParent);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

swith();