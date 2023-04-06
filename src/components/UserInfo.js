export class UserInfo {
  constructor({ nameProfile, jobProfile, imgProfile }) {
    this._name = document.querySelector(nameProfile);
    this._job = document.querySelector(jobProfile);
    this._avatar = document.querySelector(imgProfile);
  }

  getUserInfo() {
    return {
      hero: this._name.textContent,
      profession: this._job.textContent,
    };
  }

  setUserInfo({ hero, profession }) {
    this._name.textContent = hero;
    this._job.textContent = profession;
  }

  setAvatar(url) {
    this._avatar.src = url;
  }
}
