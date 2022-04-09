import Route from '@ember/routing/route';
import { service } from '@ember/service';
import Typography from 'typography';
import lincolnTheme from 'typography-theme-lincoln';

// moragaTheme.baseFontSize = '16px';
const typography = new Typography(lincolnTheme);
typography.injectStyles();

export default class ApplicationRoute extends Route {
  @service store;

  async model() {
    let response = await fetch('/api/index.json');
    let { role } = await response.json();
    this.store.push({ data: role });
    return role;
  }
}
