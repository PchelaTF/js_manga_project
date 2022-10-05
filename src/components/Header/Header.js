import { ROOT_HEADER } from "../../constants/root";
import './Header.scss';

class Header {

    render() {
        const header = `
        <nav style="background-color: grey">
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Manga Poject</a>
            </div>
        </nav>
        `;

        ROOT_HEADER.innerHTML = header;
    }
}

export default new Header();