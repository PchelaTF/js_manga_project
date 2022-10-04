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

        document.querySelector('.preloader').innerHTML = preloader;
    }
}

export default new Preloader();