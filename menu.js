/**
 * 
 * Menu
 * 
 */
const CLASS_PREFIX = 'tiny_context_menu';

export default class Menu {
  constructor () {
    this._base = null;
    this.items = [];
    this.x = 0;
    this.y = 0;
    this.display = 'none';
  }

  mount(selector) {
    const elem = document.createElement('div');
    elem.setAttribute('class', CLASS_PREFIX);
    elem.setAttribute('style', 'display:none');
    for (let i = 0; i < this.items.length; i += 1) {
      const child = document.createElement('div');
      this.items[i].dom = child;
      child.setAttribute('class', 'menu-item');
      child.textContent = this.items[i].name;
      child.addEventListener('click', () => {
        this.items[i].click.apply(null);
        this.hide();
      });
      elem.appendChild(child);
    }
    const parent = document.querySelector(selector);
    parent.appendChild(elem);
    this._base = elem;
  }

  add(name, click, condition) {
    this.items.push({ name, click, condition });
  }

  computeStyle() {
    return `position:absolute;top:${this.y}px;left:${this.x}px;display:${this.display};`;
  }

  updatePosition(x, y) {
    this.x = x;
    this.y = y;
    this._base.style = this.computeStyle();
  }

  show() {
    this.display = 'block';
    this._base.style = this.computeStyle();
  }

  hide() {
    this.display = 'none';
    this._base.style = this.computeStyle();
  }
}
