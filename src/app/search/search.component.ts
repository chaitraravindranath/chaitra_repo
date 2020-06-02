import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { UserService } from './../services/user.service';
import { User} from '../model';
import {
   debounceTime, distinctUntilChanged, switchMap, map
 } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  title = "User Search";

  users$: Observable<User[]>;
  searchModel: string;

  constructor(private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  search(searchModel: string): void {
    this.router.navigate(['posts'], {queryParams: {search: searchModel}});
  }

  ngOnInit(){ 
    this.searchModel = this.route.snapshot.queryParams.search;

    this.users$ = this.route.queryParams.pipe(
      // take the search term from the query string
      map(query=>query.search || ''),

      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((searchModel: string) => this.userService.searchUsers(this.searchModel)),
    );
  }
 
}
