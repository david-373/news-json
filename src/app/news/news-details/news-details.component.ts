import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { Post } from 'src/app/models';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit, OnDestroy {
  post!: Post;
  @ViewChild('autosize') autosize!: CdkTextareaAutosize;
  editForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl('')
  })
  subscription!: Subscription
  constructor(private route: ActivatedRoute,
    private newsService: NewsService,
    private _ngZone: NgZone,
    private router: Router) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const postId = Number(routeParams.get('id'));

    this.subscription = this.newsService.getPostById(postId)
      .subscribe((data: Post) => {
        this.post = data
        this.editForm.setValue({
          title: data.title,
          body: data.body
        })
      })
  }



  triggerResize() {

    this._ngZone.onStable.pipe(take(1)).subscribe(() => this.autosize.resizeToFitContent(true));
  }


  editPost() {
    this.newsService.editPost(this.editForm.value).subscribe((data: Post) => {
      console.log(`Post title modified to ${data.title}`)
      this.router.navigate(['/news'])
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
