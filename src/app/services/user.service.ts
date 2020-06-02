import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
// import { Observable, of } from 'rxjs';
// import { tap, pluck, withLatestFrom, map } from 'rxjs/operators';

// export interface User {
//   id: number;
//   name: string;
//   email: string;
// }

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()

export class UserService {
  // data: Observable<User[]>;
  // filtered_data$: Observable<User[]>;
  url = 'https://jsonplaceholder.typicode.com/users';
  // users: User[];

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  //   this.http.get(this.url).subscribe((data: User[]) => {
  //   this.users = data;
  //   this.data = of(this.users);

  //   this.filtered_data$ = this.route.queryParams.pipe(
  //     tap(params => console.log(params)),
  //     pluck('name'),
  //     map(_filter => name ? name : ''),
  //     withLatestFrom(this.data),
  //     map(([name, data]: [string, User[]]) => {
  //       return data.filter((user: User) => {
  //         return user.name.toLowerCase().startsWith(name.toLowerCase())
  //       })
  //     }),
  //     tap(users => console.log(users))
  //   )
  //   console.log("------filtered_data-------", this.filtered_data$);
  // });
  }

  getUsers(){
    return this.http.get(this.url);
  }

}


