import { getDataAPI } from '../../utils/getDataAPI';

class Card {

    async render(url) {
        const data = await getDataAPI.getData(url);

        const titleLink = 'Link on MyAnimeList';
        let CATALOG = data.data;
        let html = '';

        CATALOG.forEach(({ attributes }) => {
            const img = attributes.posterImage.medium;
            const synopsis = attributes.synopsis;
            const title = attributes.canonicalTitle;

            html += `
                    <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${img}">
                    </div>
                    <div class="card-content">
                        <span class="card-title grey-text text-darken-4">${title}
        
                        </span>
                        <p><a href="${titleLink}">${titleLink}</a>
                        <i class="material-icons right activator">more_vert</i>
                        </p>
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4">${title}<i class="material-icons right">close</i></span>
                        <p>${synopsis}</p>
                    </div>
                </div>
                `;
        });

        document.querySelector('.manga').innerHTML = html;
    }
}

export default new Card();