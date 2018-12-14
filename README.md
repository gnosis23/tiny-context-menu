# tiny-context-menu
yet another context menu

## Usage
add following styles to your css/less/sass file.
```css
.tiny_context_menu {
  border: 1px solid #e3e4e5;
  background: #fff;
  width: 250px;
  box-shadow: 2px 2px 12px #e3e4e5;
  padding: 5px 0;
}
.tiny_context_menu .menu-item {
  padding: 5px 35px;
  font-size: 14px;
  user-select: none;
}
.tiny_context_menu .menu-item:hover {
  background: #e3e4e5;
}
```

```js
import Menu from 'tiny-context-menu';

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
```

## API

<i>menu</i>.<b>add</b>(<i>name</i>, <i>click</i>, <i>condition</i>)

add name, click event to the context menu.

```js
menu.add('button', () => { console.log('button'); })
```

<i>menu</i>.<b>updatePosition</b>(<i>x</i>, <i>y</i>)

update positon of the context menu

```js
menu.update(0, 0);
```


<i>menu</i>.<b>show</b>()

show context menu;


<i>menu</i>.<b>hide</b>()

hide context menu
