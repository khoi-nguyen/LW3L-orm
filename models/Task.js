import Model from './Model.js';

export default class Task extends Model {

  static table = "schema.tasks";
  static primary = ["id"];
}
