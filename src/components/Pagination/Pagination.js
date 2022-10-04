import { getDataAPI } from '../../utils/getDataAPI';

// let url = `https://kitsu.io/api/edge/manga?page%5Blimit%5D=12&page%5Boffset%5D=0`;

class Pagination {

    async render(url) {
        const data = await getDataAPI.getData(url);
        let links = data.links;
        console.log(data);

        // let URLCHECK = url;

        // let mangaCount = data.meta.count;
        // console.log(mangaCount);

        // const mangaPerPage = 12;
        // const countPage = Math.round(mangaCount / mangaPerPage);
        // console.log(countPage);

        // let pageLists = '';

        // for (let i = 1; i <= countPage; i++) {
        //     url = `https://kitsu.io/api/edge/manga?page%5Blimit%5D=12&page%5Boffset%5D=${(mangaPerPage * i) - 12}`;

        //     let li = `<li class="waves-effect ${(url === URLCHECK) ? "active" : ""}"}}}"><a href="${url}">${i}</a></li>`;

        //     pageLists += li;
        // }

        let html = `
            <ul class="pagination">
                <li class="waves-effect"><a href="${links.first}"><i class="material-icons">fast_rewind</i></a></li>
                <li class="${(links.prev) ? "waves-effect" : "disabled inactive"}"><a href="${(links.prev)}"><i class="material-icons">chevron_left</i></a></li>
            
                <li class="${(links.next) ? "waves-effect" : "disabled inactive"}"><a href="${links.next}"><i class="material-icons">chevron_right</i></a></li>
                <li class="waves-effect"><a href="https://kitsu.io/api/edge/manga?page%5Blimit%5D=12&page%5Boffset%5D=52320"><i class="material-icons">fast_forward</i></a></li>
            </ul>
        `;

        document.querySelector('.pagination').innerHTML = html;
    }
}

export default new Pagination();

{/* <ul>
<li><a href="${links.first}">first</a></li>
<li><a href="${links.prev}">prev</a></li>
<li><a href="${links.next}">next</a></li>
<li><a href="${links.last}">last</a></li>
</ul> */}