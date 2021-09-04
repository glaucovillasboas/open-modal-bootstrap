const sendInfo = (event) => {
    const form = event.path.filter((element) =>  element.classList && element.classList.contains('modal-content'))[0];

    const nome = form.querySelector('.nome input').value;
    const email = form.querySelector('.email input').value;

    alert(`Nome: ${nome} \nEmail: ${email}`);
}