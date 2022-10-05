import { ROOT_PRELOADER } from "../../constants/root";
import './Preloader.scss';

class Preloader {

    preloaderHide() {
        document.querySelector('.preloader').innerHTML = '';
    }

    render() {
        const preloader = `
            <div class="progress preloader__container">
                <div class="indeterminate"></div>
            </div>
        `;

        ROOT_PRELOADER.innerHTML = preloader;
    }
}

export default new Preloader();