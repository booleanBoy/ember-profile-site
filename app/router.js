import EmberRouter from '@ember/routing/router';
import config from 'ember-profile-site/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('profile');
  this.route('demo');
  this.route('contact');
});
