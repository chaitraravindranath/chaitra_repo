import { Component, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})

export class PostsComponent implements OnInit {
  posts: any[];
  public name: string;
  constructor(private service: PostService, private route: ActivatedRoute) {
    console.log ("Post component");
  }

  ngOnInit(): void {
    if (this.route && this.route.queryParams) {
      this.route.queryParams.subscribe((queryParams) => {
        this.name = queryParams['name'] || null;
        console.log(this.name);
      });
    }
  }
}


