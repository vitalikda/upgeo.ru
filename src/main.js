// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faAngleDoubleRight,
  faAward,
  faLightbulb,
  faBusinessTime,
  faStamp,
  faGlobe,
  faPhone,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;
library.add(
  faBars,
  faAngleDoubleRight,
  faAward,
  faLightbulb,
  faBusinessTime,
  faStamp,
  faGlobe,
  faPhone,
  faEnvelope
);

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('font-awesome-icon', FontAwesomeIcon);
}
