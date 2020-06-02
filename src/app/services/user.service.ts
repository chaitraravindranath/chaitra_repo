import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User} from '../model';

@Injectable()

export class UserService {

  url = 'https://jsonplaceholder.typicode.com/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  getUsers(){
    return this.http.get(this.url);
  }

    searchUsers(term: string): Observable<User[]> {
      console.log("---SearchUsers----");
      if (!term.trim()) {
        // if not search term, return empty hero array.
        return of([]);
      }
      return this.http.get<User[]>(`${this.url}/?name=${term}`)
    }

}


