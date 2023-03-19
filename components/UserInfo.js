export class UserInfo {
  constructor({nameProfile, jobProfile}) {
    this._name = document.querySelector(nameProfile);
    this._job = document.querySelector(jobProfile);
  }

  getUserInfo() {
  return {
  hero: this._name.textContent,
  profession: this._job.textContent,
};
}

  setUserInfo({ hero, profession }) {
    this._name.textContent = hero;
    this._job.textContent = profession
  }
}
