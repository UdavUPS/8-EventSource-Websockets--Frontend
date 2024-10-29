export class Messages {
    constructor() {
        this.title,
        this.height = 2.1 +'vw'
    }

    entryMessage() {

        let common = document.createElement('div');
        common.classList.add('show-message');

        let titleBlock = document.createElement('div');
        titleBlock.classList.add('show-message__title');
        titleBlock.innerText = 'Выберите псевдоним';
        common.append(titleBlock);

        var preview = document.createElement('input');
        preview.classList.add('show-message__preview');
        common.append(preview);


        

/*         let butRemov = document.createElement('button');
        butRemov.classList.add('show-message__But-remov');
        butRemov.innerText = 'Отмена';
        butRemov.addEventListener('click', () => {
            common.remove();
            Messages.remov();
        }); */

        let ButOk = document.createElement('button');
        ButOk.classList.add('show-message__But-ok');
        ButOk.innerText = 'Продолжить';
        ButOk.addEventListener('click', () => {
            //Отправка ника на сервер
            console.log('Отправка ника на сервер');
            common.remove();
            Messages.remov();
        });
        

        /* common.append(butRemov); */
        common.append(ButOk);

        return common;
    };



    static remov() {
        document.querySelector('.messages-box').classList.add('visually-hidden');
    }
}