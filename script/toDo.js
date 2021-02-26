const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    const input = document.querySelector('#input').value;
    const catalogue = document.querySelector('.catalogue');

    if(input==''){
        alert("Wpisz dane w pole tekstowe!");
    }
    else{
        const listEl = document.createElement('div');
        listEl.classList.add("catalogue__element");

        const content = document.createElement('h3');
        content.classList.add("catalogue__element-content");
        content.innerText = `${input}`;

        const doneBtn =  document.createElement('button');
        doneBtn.classList.add("catalogue__element-done");
        doneBtn.innerText = '✔️';

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("catalogue__element-delete");
        deleteBtn.innerText = `x`;

        listEl.appendChild(content);
        listEl.appendChild(doneBtn);
        listEl.appendChild(deleteBtn);
        

        deleteBtn.addEventListener('click', function () {
            listEl.remove();
        });

        doneBtn.addEventListener('click', function(){
            listEl.style.borderColor = 'rgb(4, 126, 0)';
            content.style.color = 'rgb(4, 126, 0)';
            catalogue.append(listEl);
            this.remove();
        })

        const inputReset = document.querySelector('#input').value = '';

        catalogue.appendChild(listEl);
    }

    

});