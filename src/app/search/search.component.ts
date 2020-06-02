import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{
  title = "User Search";

  @Input() searchModel;

  @Output() searchModelChange: EventEmitter<any> = new EventEmitter();

  constructor(private router: Router) {
    // this.myGroup = fb.group({
    //   name: ['', Validators.required]
    // })

    // this.myGroup.controls['name'].valueChanges.pipe(
    //   debounceTime(300),
    //   distinctUntilChanged(),
    //   tap(name => console.log(name))
    // ).subscribe((name: string) => {
    //   this.router.navigate([''], { queryParams: { name } })
    // });
  }

  ngOnInit(){ }

  updateSearchModel(value) {
    this.searchModel = value;
    this.searchModelChange.emit(this.searchModel);
  }
  

}
