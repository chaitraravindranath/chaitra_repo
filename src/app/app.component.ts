import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  queryParams = [];

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient ) { }
  
  navigate(path) {
    this.router.navigate([path], { queryParams: {parameter: 'value1'}});
  }
}
