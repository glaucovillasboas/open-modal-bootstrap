const alertWhatITyped = (event) => {
    event.preventDefault();
    const modal = event.path.filter((element) => element.classList && element.classList.contains('modal'))[0];
    const title = modal.querySelector('.modal-title').innerHTML;
    const form = modal.querySelector('form');
    const data = serializeObject(form);
    console.log(data);

    let message = `${title}:\n`;

    Object.keys(data).forEach(key => {
        message += `${key}: ${data[key]}\n`;
    })
    
    alert(message);
}

const serializeObject = (form) => {
    //IT IS POSSIBLE TO USE A LIB WITH serialize() INSTEAD
    Array.fromList = (list) => {
        const array = new Array(list.length);
        for (var i = 0, n = list.length; i < n; i++)
            array[i] = list[i];
        return array;
    };

    const serializeObject = {}

    
    Array.fromList(form.querySelectorAll('input, select, textarea')).forEach((element) => {
        if (element.type !== 'checkbox') {
            serializeObject[element.name] = element.value;
        } else {
            serializeObject[element.name] = element.checked;
        }
    });

    return serializeObject;
}