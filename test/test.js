import Menu from '../menu.js';

const menu = new Menu();
menu.add('button1', () => console.log('button1'));
menu.add('button2', () => console.log('button2'));
menu.add('button3', () => console.log('button3'));
menu.mount('body');

document.querySelector('.parent').addEventListener('contextmenu', (e) => {
  e.preventDefault();
  menu.updatePosition(e.pageX, e.pageY);
  menu.show();
});

document.querySelector('.parent').addEventListener('click', () => { menu.hide(); })
