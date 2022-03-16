import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { MaterialModule } from '../material/material/material.module';
import { NewsSearchComponent } from './news-search/news-search.component';
import { FilterPipe } from './filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    NewsListComponent,
    NewsDetailsComponent,
    NewsSearchComponent,
    FilterPipe,

  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class NewsModule { }
