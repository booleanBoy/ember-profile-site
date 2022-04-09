import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class RoleRoute extends Route {
  @service store;
  model(params) {
    console.log({ params });
    return this.store.peekRecord('role', params.role_id);
  }
}
