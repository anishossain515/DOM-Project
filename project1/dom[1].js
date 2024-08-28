let framework = document.querySelector('#framework');
let btnAdd = document.querySelector('#btnAdd');

let list = document.querySelector('#list');
let btnRemove = document.querySelector('#btn-remove');

btnAdd.addEventListener('click',(event)=>{
    event.preventDefault();

    if(framework.value == ""){
        alert('input filed is empty')

        return;
    };

    const option = new Option(framework.value , framework.value) 

    list.add(option , undefined);

    framework.value = '';
});

btnRemove.addEventListener('click', (event)=>{
    event.preventDefault();

    let selected = [];

    for(let i = 0 ; i < list.options.length ; i++){
        selected[i] = list.options[i].selected;
    }

    let index = list.options.length;

    while(index--){
        if(selected[index]){
            list.remove(index)
        }
    }
})