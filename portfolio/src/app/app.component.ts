import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marja Reponen Junior Front-end Developer';
  constructor(private titleService: Title, private metaService: Meta) {}

ngOnInit() {
  this.titleService.setTitle(this.title);
  this.metaService.addTags([
    {name: 'keywords', content: 'front-end web developer, front-end junior, portfolio, Maria Cassandra, Marja Reponen'},
    {name: 'description', content: 'Angular Front-end developer'},
    {name: 'robots', content: 'index, follow'},
    {property: 'og:title', content: 'Maria Cassandra front-end developer portfolio'},
    {property: 'og:url', content: 'https://www.mariacassandra.com'},
    {property: 'og:type', content: 'website'},
    {property: 'og:description', content: 'Portfolio Front-end developer'}
  ]);
}
}