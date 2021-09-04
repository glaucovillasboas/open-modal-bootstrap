const insertModalContent = (modalContainer, content, title, id) => {
    const modal = modalContainer.querySelector('.modal');
    modal.id = `modal-${id}`;
    const titleContainer = modal.querySelector('.modal-title');

    if (titleContainer) {
        titleContainer.innerHTML = title;
    } else {
        modal.querySelector('.modal-header').innerHTML = title;
    }

    //WILL LOAD THE CONTENT FROM A SEPARATE FILE INTO THE MODAL
    fetch(content).then((response) =>
        response.text()
    ).then((html) => {
        modal.querySelector('.modal-body').innerHTML = html;
    });
}

const createModal = (id, content, modal , title) => {
    //WILL LOAD THE MODAL FROM THE SEPARATE FILE INTO THE BODY
    fetch(modal).then((response) =>
        response.text()
    ).then((html) => {
        const modalContainer = document.createElement("div");
        modalContainer.innerHTML = html;
        document.body.appendChild(modalContainer);
        setTimeout(() => {
            insertModalContent(modalContainer, content, title, id);
            const fragment = document.createDocumentFragment();
            while (modalContainer.firstChild) {
                fragment.appendChild(modalContainer.firstChild);
            }
            modalContainer.parentNode.replaceChild(fragment, modalContainer);
        }, 50);
    });
}

const configModais = () => {
    //GETS ALL TAGS WITH THE PROPS data-bs-toggle, modal AND content;
    const openModalButtons = document.querySelectorAll("*[data-bs-toggle='modal'][modal][content]");

    openModalButtons.forEach((button, index) => {
        button.style.cursor = "pointer";
        //ADD THE data-bs-target PROP TO THE BUTTON POINTING TO THE RIGHT ID 
        button.setAttribute('data-bs-target', `#modal-${index}`);
        const content = button.getAttribute('content');
        const title = button.getAttribute('title');
        const modal = button.getAttribute('modal');
        createModal(index, content, modal, title);
    })
}

configModais();