import { getDataAPI } from '../../utils/getDataAPI';
import Preloader from '../Preloder/Preloader';

class Card {

    async render(url) {
        Preloader.render();
        const data = await getDataAPI.getData(url);
        let CATALOG = data.data;
        let html = '';

        CATALOG.forEach(({ attributes }) => {
            const img = attributes.posterImage.medium;
            const imgAlt = attributes.posterImage.original;
            const synopsis = attributes.synopsis;
            const canonicalTitle = attributes.canonicalTitle;

            html += `
                    <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${(img) ? img : imgAlt}">
                    </div>
                    <div class="card-content">
                        <span class="card-title grey-text text-darken-4">${canonicalTitle}<i class="material-icons right activator">more_vert</i></span>
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4">${canonicalTitle}<i class="material-icons right">close</i></span>
                        <p>${synopsis}</p>
                    </div>
                </div>
                `;
        });

        document.querySelector('.manga').innerHTML = html;
        Preloader.preloaderHide();
    }
}

export default new Card();