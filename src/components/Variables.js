// import { MyLink } from "./links";

// const arrLinks = [new MyLink({ name: 'Google', link: 'https://www.google.ru/?hl=ru'}),
//                         new MyLink({ name: 'Metanit', link: 'https://metanit.com/'}),
//                         new MyLink({ name: 'Webformyself', link: 'https://webformyself.com/'})];

const arrLinks = [{ name: 'Google', link: 'https://www.google.ru/?hl=ru'},
                   { name: 'Metanit', link: 'https://metanit.com/'},
                   { name: 'Webformyself', link: 'https://webformyself.com/'}];

const arrWords = ['FOOTER:','СПАСИБО','ЗА','ВНИМАНИЕ!'];

const myHeader = "Компоненты";

const paragpafFillings = `ReactElement, который был рассмотрен в прошлой теме, позволяет создавать элементы, которые встраиваются на веб-страницу. Однако ReactElement плохо подходит для создания комплексной разметки HTML. Объекты ReactElement сложно использовать повторно в других аналогичных ситуациях, сложнее поддерживать.
                                И для решения этой проблемы в React используются компоненты. Компоненты проще обновлять и использовать повторно.
                                Компоненты аналогичны функциям JavaScript. Они хранят состояние с помощью свойств и возвращают элементы React, которые затем появляются на веб-странице.`;

export {arrLinks, arrWords, myHeader, paragpafFillings}