import { ROOT_PAGINATION } from '../../constants/root';
import { getDataAPI } from '../../utils/getDataAPI';
import './Pagination.scss';

class Pagination {

    async render(url) {
        const data = await getDataAPI.getData(url);

        let links = data.links;
        let URLCHECK = url;
        let mangaCount = data.meta.count;
        const mangaPerPage = 12;
        const countPage = Math.round(mangaCount / mangaPerPage);
        let pageLists = [];
        let currentPage = 0;

        for (let i = 1; i <= countPage; i++) {
            url = `https://kitsu.io/api/edge/manga?page%5Blimit%5D=12&page%5Boffset%5D=${(mangaPerPage * i) - 12}`;

            let li = `<li class="waves-effect ${(url === URLCHECK) ? "active" : ""}"><a href="${url}">${i}</a></li>`;

            pageLists.push(li);

            if (url === URLCHECK) {
                currentPage = i;
            }
        }

        let slicedPageListsArr = [];
        let visiblePageListsArr = [];

        if (window.matchMedia("(max-width: 540px)").matches) {
            slicedPageListsArr = pageLists.slice(currentPage - 1, currentPage + 5);
        }
        if (window.matchMedia("(max-width: 370.98px)").matches) {
            slicedPageListsArr = pageLists.slice(currentPage - 1, currentPage - 1);
        }
        if (window.matchMedia("(min-width: 540.98px)").matches) {
            slicedPageListsArr = pageLists.slice(currentPage - 1, currentPage + 9);
        }

        visiblePageListsArr = slicedPageListsArr.join('');

        let html = `
            <ul class="pagination">
                <li class="waves-effect"><a href="${links.first}" data-swith="true"><i class="material-icons">fast_rewind</i></a></li>
                <li class="${(links.prev) ? "waves-effect" : "disabled inactive"}"><a href="${(links.prev)}" data-swith="true"><i class="material-icons">chevron_left</i></a></li>
                ${visiblePageListsArr}
                <li class="${(links.next) ? "waves-effect" : "disabled inactive"}"><a href="${links.next}" data-swith="true"><i class="material-icons">chevron_right</i></a></li>
                <li class="waves-effect"><a href="https://kitsu.io/api/edge/manga?page%5Blimit%5D=12&page%5Boffset%5D=52320" data-swith="true"><i class="material-icons">fast_forward</i></a></li>
            </ul>
        `;

        ROOT_PAGINATION.innerHTML = html;
    }
}

export default new Pagination();