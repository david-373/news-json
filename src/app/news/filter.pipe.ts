import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], searchTerm: number): Post[] {
    if (!searchTerm) {
      return posts
    }
    return posts.filter(post => post.userId === searchTerm)
  }

}
