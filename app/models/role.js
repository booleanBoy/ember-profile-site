import Model, { attr } from '@ember-data/model';

export default class RoleModel extends Model {
  @attr title;
  @attr description;
  @attr employer;
  @attr startdate;
  @attr enddate;
  @attr tags;
}
