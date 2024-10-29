export function showUserList () {
    let lit = document.querySelector('.users-block');
    let chat = document.querySelector('.chat');

    if (lit.classList.contains('users-close')) {
        lit.classList.remove('users-close');
        lit.classList.add ('user-show-mobile');
        chat.style.width = 70 + 'vw';
        chat.classList.add ('user-show-mobile-b');
    } else {
        lit.classList.add('users-close');
        lit.classList.remove ('user-show-mobile');
        chat.classList.remove ('user-show-mobile-b');
        chat.style.width = 80 + 'vw';
    }
}