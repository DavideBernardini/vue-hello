/*
1. Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
2. Aggiungere alla pagina un’immagine, presa anch’essa da un data.
*/

var app = new Vue(
    {
        el: '#root',
        data: {
            message: 'Hello Vue',
            imgUrl: 'https://vueschool.io/img/svg/vueschool_hero.svg',
            imgAlt: 'Vue factory',
            imgClass: 'background',
            titleClass: 'title',
            logoSrc: 'img/logo.svg',
            logoClass: 'logo'
        }
    }
)