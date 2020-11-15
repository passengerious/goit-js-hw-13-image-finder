const BASE_URL = 'https://pixabay.com/api/';

export default class ImagesApiSevise {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    async fetchImages() {
        const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=19125225-7dee0ee7ebb4766682ccd7b12`;

        const response = await fetch(url);
        const images = await response.json();
        this.page += 1;
        return images;
    }

    resetPage() {
        this.page = 1;
    }

    get query() {
        return this.searchQuery;
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}



