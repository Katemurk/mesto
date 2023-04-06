export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getError(res) {
    if (!res.ok) {
      return Promise.reject(`Произошла ошибка ${res.status}`);
    }
    return res.json();
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}cards`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._getError(res));
  }

  setCard({ name, link }) {
    return fetch(`${this._baseUrl}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then((res) => this._getError(res));
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      method: "GET",
      headers: this._headers,
    }).then((res) => this._getError(res));
  }

  setUserInfo({ hero, profession }) {
    return fetch(`${this._baseUrl}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: hero,
        about: profession,
      }),
    }).then((res) => this._getError(res));
  }
  setAvatar(avatar) {
    return fetch(`${this._baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar,
      }),
    }).then((res) => this._getError(res));
  }

  deleteCard(_id) {
    return fetch(`${this._baseUrl}cards/${_id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._getError(res));
  }

  putLike(_id) {
    return fetch(`${this._baseUrl}cards/${_id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => this._getError(res));
  }

  deleteLike(_id) {
    return fetch(`${this._baseUrl}cards/${_id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._getError(res));
  }
}
