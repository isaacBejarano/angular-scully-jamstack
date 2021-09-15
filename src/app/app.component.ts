import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
// import algoliasearch from 'algoliasearch/lite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-mission1';
  mode = environment.mode;
  /* ALGOLIA */
  // algoliaConfig = {
  //   indexName: 'angular-missions-search',
  //   searchClient: algoliasearch(
  //     'S6R1UCM89C',
  //     '9faf263189cf1ab601a62bbd0bc48039'
  //   ),
  // };
}
