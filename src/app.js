import {groupBy} from 'lodash/collection';
import './style.scss';
import people from './people';

const managerGroups = groupBy(people, 'manager');

const root = document.querySelector('#root');
root.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`;

if (module.hot) {
  module.hot.accept();
}

const routes = {
  dashboard: () => {
    System.import('./dashboard').then((dashboard) => {
      dashboard.draw();
    }).catch((err) => {
      console.log("Chunk loading failed");
    });
  }
};

// demo async loading with a timeout
setTimeout(routes.dashboard, 1000);