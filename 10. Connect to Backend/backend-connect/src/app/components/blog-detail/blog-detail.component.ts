import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { IPost } from '../../interfaces/post';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  post: IPost;
  constructor(
      private route: ActivatedRoute,
  private postService: PostService
) {}

ngOnInit() {
  const id = +this.route.snapshot.paramMap.get('id');
  this.postService.getPostById(id).subscribe(
      next => (this.post = next),
      error => {
          console.log(error);
          this.post = null;
      }
  );
}
}
