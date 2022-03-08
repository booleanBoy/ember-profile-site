import Route from '@ember/routing/route';

export default class ProfileRoute extends Route {
  async model() {
    let response = await fetch('/api/profile/jobs/index.json');
    let { data } = await response.json();
    return data;
  }
}
