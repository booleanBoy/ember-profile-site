import Model, { belongsTo, hasMany } from '@ember-data/model';

export default class TagsModel extends Model {
  @belongsTo('job') job;
  @hasMany('string') technologies;
  @hasMany('string') competencies;
  @hasMany('string') industries;
}
