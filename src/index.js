import './index.html';
import '../node_modules/materialize-css/dist/css/materialize.css';
import '../node_modules/materialize-css/dist/js/materialize.js';
import './styles/index.scss';

import Card from './components/Cards';
import Pagination from './components/Pagination/Pagination';
import Header from './components/Header/Header';
import PageSwitching from './components/PageSwitching/PageSwitching';

const url = `https://kitsu.io/api/edge/manga?page%5Blimit%5D=12&page%5Boffset%5D=0`;

function renderPage() {
    Header.render();
    Card.render(url);
    Pagination.render(url);
}
renderPage();

PageSwitching.swith();