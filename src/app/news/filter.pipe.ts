import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(posts: Post[], searchTerm: string): Post[] {
    if (!searchTerm.trim()) {
      return posts
    }
    return posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }

}
