export class Section {
  constructor({ items, renderer }, container) {
    this._initialCards = items;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  renderItems() {
    this._initialCards.forEach((item) => {
      this._container.append(this._renderer(item));
    });
  }

  addItem(item) {
    this._container.prepend(item);
  }
}
