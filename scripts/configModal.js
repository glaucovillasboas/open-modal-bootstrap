const insertModalContent = (modalContainer, content, title, id) => {
    const modal = modalContainer.querySelector('.modal');
    modal.id = `modal-${id}`;
    const titleContainer = modal.querySelector('.modal-title');

    if (titleContainer) {
        titleContainer.innerHTML = title;
    } else {
        modal.querySelector('.modal-header').innerHTML = title;
    }
    document.querySelectorAll("*[data-dismiss='modal'],*[data-bs-dismiss='modal']").forEach((button) => {
        button.onclick = () => {
            closeModal();
        }
    })
    fetch(content).then((response) =>
        response.text()
    ).then((html) => {
        modal.querySelector('.modal-body').innerHTML = html;
    });
}

const createModal = (id, content, modal , title) => {
    fetch(modal).then((response) =>
        response.text()
    ).then((html) => {
        const modalContainer = document.createElement("div");
        modalContainer.innerHTML = html;
        document.body.appendChild(modalContainer);
        setTimeout(() => {
            insertModalContent(modalContainer, content, title, id);
        }, 50);
    });
}

const configModais = () => {
    openModalButtons = document.querySelectorAll('a.abrir-modal');

    openModalButtons.forEach((button, index) => {
        const content = button.getAttribute('content');
        const title = button.getAttribute('title');
        const modal = button.getAttribute('modal');

        createModal(index, content, modal, title);

        button.onclick = () => {
            openModal(index);
        }
    })
}

closeModal = () => {
    document.getElementById("backdrop").style.display = "none"
    document.querySelectorAll('.modal').forEach((modal) => {
        modal.style.display = "none"
        modal.classList.remove("show")
    })
}

openModal = (id) => {
    document.getElementById("backdrop").style.display = "block";
    const modal = document.querySelector(`#modal-${id}`);
    modal.style.display = "block"
    modal.classList.add("show")
}

window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        closeModal()
    }
}

configModais();