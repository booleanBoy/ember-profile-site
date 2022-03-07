import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RolesGridRoleCardComponent extends Component {
  @tracked isSelected = false;
  @action toggleSelected() {
    this.isSelected = !this.isSelected;
  }
}
