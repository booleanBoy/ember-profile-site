import Model, { attr } from '@ember-data/model';

export default class EmployerModel extends Model {
  @attr('string') name;
  @attr('string') location;
}
