import { Messages } from './components.js';
import { showUserList } from './otherFunctions.js'
const usersBlock = document.querySelector('.users-block');
const messagesBox = document.querySelector('.messages-box');
const Mess = new Messages();

/* window.addEventListener('load', ()=>{
    messagesBox.classList.remove('visually-hidden');
    messagesBox.append(Mess.entryMessage());
}); */

usersBlock.addEventListener ('click', showUserList);