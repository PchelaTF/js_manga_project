import Card from "../Cards/Card";
import Pagination from "../Pagination/Pagination";

class PageSwitching {
    constructor() {
        this.scrollTo = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };
    }

    swith() {
        document.querySelector('.pagination').addEventListener('click', (event) => {
            event.preventDefault();

            let target = event.target;
            let url = target.href;

            if (target.parentNode.dataset.swith === "true") {

                let url = target.parentNode.href;

                Card.render(url);
                Pagination.render(url);

                this.scrollTo();

                if (!url) {
                    return false;
                }

            } else if (!target.classList.contains('pagination')) {

                Card.render(url);
                Pagination.render(url);

                this.scrollTo();
            }
        });
    }
}

export default new PageSwitching();