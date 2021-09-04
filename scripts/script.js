const sendInfo = (event) => {
    const modal = event.path.filter((element) => element.classList && element.classList.contains('modal'))[0];
    const title = (modal.querySelector('.modal-title')) ? modal.querySelector('.modal-title').innerHTML : modal.querySelector('.modal-header').innerHTML;
    const form = modal.querySelector('.modal-content');

    let data = {};
    let message = `${ title }: \n`;

    form.querySelectorAll('input').forEach((element) => {
        if (element.type !== 'checkbox') {
            data[element.name] = element.value;
        } else {
            data[element.name] = element.checked;
        }
    })

    Object.keys(data).forEach((key) => {
        message += `${key}: ${data[key]}\n`;
    })

    console.log({...data, title});

    alert(message);
}
