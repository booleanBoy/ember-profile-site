import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  async model() {
    let response = await fetch('/api/index.json');
    let { role } = await response.json();
    console.log({ role });
    this.store.push({ data: role });
    return role;
  }
}
