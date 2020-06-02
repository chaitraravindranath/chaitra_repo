import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { User} from '../model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(res => this.users = res as any);
  }

}
