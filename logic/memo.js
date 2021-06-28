class Modal {
    constructor(heading, allContent) {
        // properties of each instance.
        this.heading = heading;
        this.allImages = allContent.children[0];
        this.link = allContent.children[1];
        // modal
        this.modalWindow = document.querySelector('.modal-open');
        this.closebtn = this.modalWindow.children[0];
        this.modalImages = this.modalWindow.children[1];
        this.moreLink = this.modalWindow.children[2];
        // Create properties of instance with value == methods of instance (important otherwise you won't be able to use those methods) binded to instance.
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.heading.addEventListener('click', this.openModal);
    }
    openModal() {
        this.moreLink.setAttribute('href', this.link);
        [...this.modalImages.children].forEach((img, index) => img.setAttribute('src', this.allImages.children[index].getAttribute('src')));
        this.modalWindow.classList.toggle('modal-close');
        this.closebtn.addEventListener('click', this.closeModal);
        // above event listener isn't added in constructor because it's subsequently removed once closebtn (closeModal) is clicked, hence from second time onwards closebtn won't work if event listener is added in constructor (instead of here where each time heading is clicked).
    }
    closeModal() {
        this.moreLink.setAttribute('href', "");
        [...this.modalImages.children].forEach(img => img.setAttribute('src', ""));
        this.modalWindow.classList.toggle('modal-close');
        this.closebtn.removeEventListener('click', this.closeModal);
    }
}

document.querySelectorAll('.container').forEach(container => new Modal(container.children[0], container.children[1]));