import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ProfileRoute extends Route {
  @service store;

  async model() {
    const data = this.store.peekAll('role');
    console.log(data);
    return data;
  }
}
