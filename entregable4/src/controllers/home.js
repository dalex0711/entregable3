
import { saveDate} from "/src/services/storage.js";

const $ = (selector) => document.querySelector(selector);


$('#saveBtn').addEventListener('click',() => {
    alert('hola')
    const nameInput = $('#name');
    const ageInput = $('#age');

    if(!nameInput || !ageInput){
        alert('No puedes ingresar campos vacios')
        return;
    };

    const name = nameInput.value.trim();
    const age = parseInt(ageInput.value);

    
    if(name && !isNaN(age)){
        saveDate(name,age)
    }
})
