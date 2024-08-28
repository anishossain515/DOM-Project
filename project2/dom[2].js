let password = document.querySelector('#password');
let toggle = document.querySelector('#toggle');

toggle.addEventListener('click',(e)=>{
    e.preventDefault();
    
    let type = password.getAttribute('type');

    if(type === 'password'){
        password.setAttribute('type','text');
        toggle.textContent = 'Hide';
    }else{
        password.setAttribute('type','password');
        toggle.textContent = 'Show'
    }
})