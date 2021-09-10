import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

import algoliasearch from 'algoliasearch/lite';

// Algiolia
const searchClient = algoliasearch(
  'GQ8AR65179',
  '7cce6becb32815592c8e2efe58a8800f'
);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-mission1';
  mode = environment.mode;

  // TODO: check Algolia Crawler works
  config = {
    indexName: 'demo_ecommerce',
    searchClient,
  };
}

// FIXME: fetch last last-1 commit [dont use Angular Component]
// Use NTL UI + .toml
