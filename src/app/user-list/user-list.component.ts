import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User} from '../model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input()
  public users;
  
  public currentUser: User;
  
  searchModel: string;
  
  
  @Output() public select: EventEmitter<{}> = new EventEmitter();
  
  public onSelect(user: User): void {
    this.currentUser = user; 
    this.select.emit(user);
  }
}
