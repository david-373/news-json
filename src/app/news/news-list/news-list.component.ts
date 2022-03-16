import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Post } from 'src/app/models';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit, OnDestroy {
  public searchTerm!: number
  public posts!: Post[];
  private destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private newsService: NewsService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.newsService.getPosts().pipe(takeUntil(this.destroy$))
      .subscribe((data: Post[]) => {
        this.posts = data;


      })
  }

  logout() {
    this.authService.logout()
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe()
  }

  goToEditPage(id: number) {
    this.router.navigate(['/news', id])
  }
  setSearchTerm(value: number) {
    this.searchTerm = value
  }
  deletePost(post: Post) {
    let answer = window.confirm('Do you want to delete?')
    if (answer) {
      this.newsService.deletePost(post).subscribe(() => {
        alert('Deleted')
      })
    }

  }
}
