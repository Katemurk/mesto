export class Section {
  constructor(renderer, container) {
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  renderItems(items) {
    items.forEach((item) => {
      this._container.append(this._renderer(item));
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}
