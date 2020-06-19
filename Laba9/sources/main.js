function mod(a, b) {
    return ((a % b) + b) % b;
}

Vue.component('modal', {
    template: '#modal-template'
});

Vue.component('my-image', {
    props: ['url'],
    template: '#image-template'
});

Vue.component('my-preview', {
    props: ['url1', 'url2', 'url3'],
    template: '#preview-template'
});

new Vue({
    el: '#app',

    data: {
        showModal: false,
        modalFile: null,
        urls: [
            'resources/1.jpg',
            'resources/2.jpg',
            'resources/3.jpg',
            'resources/4.jpg',
            'resources/5.jpg',
            'resources/6.jpg',
            'resources/7.jpg',
            'resources/8.jpg',
        ],
        showPreview: false,
        idx1: -1,
        idx2: -1,
        idx3: -1,
    },

    methods: {
        onFileChange(event) {
            this.modalFile = event.target.files[0];
        },

        modalAdd() {
            this.urls.push(URL.createObjectURL(this.modalFile));
            this.showModal = false;
        },

        preview(url) {
            this.idx2 = this.urls.indexOf(url);
            this.idx1 = mod(this.idx2 - 1, this.urls.length);
            this.idx3 = mod(this.idx2 + 1, this.urls.length);
            this.showPreview = true;
        },

        previewPrev() {
            this.idx1 = mod(this.idx1 - 1, this.urls.length);
            this.idx2 = mod(this.idx2 - 1, this.urls.length);
            this.idx3 = mod(this.idx3 - 1, this.urls.length);
        },

        previewNext() {
            this.idx1 = mod(this.idx1 + 1, this.urls.length);
            this.idx2 = mod(this.idx2 + 1, this.urls.length);
            this.idx3 = mod(this.idx3 + 1, this.urls.length);
        },

        previewRemove() {
            this.urls.splice(this.idx2, 1);
            this.showPreview = false;
        },

        previewExit() {
            this.showPreview = false;
        }
    }
});