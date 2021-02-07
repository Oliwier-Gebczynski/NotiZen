const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const input = document.querySelector('#input').value;

    const listEl = document.createElement('div');
    listEl.classList.add("catalogue__element");

    const content = document.createElement('h3');
    content.classList.add("catalogue__element-content");
    content.innerText = `${input}`;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add("catalogue__element-delete");
    deleteBtn.innerText = `x`;

    listEl.appendChild(content);
    listEl.appendChild(deleteBtn);

    deleteBtn.addEventListener('click', function () {
        listEl.remove();
    });

    const inputReset = document.querySelector('#input').value = '';

    document.querySelector('.catalogue').appendChild(listEl);

});