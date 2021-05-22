import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories/categories.component';
import { KnowledgeBasesComponent } from './knowledge-bases/knowledge-bases.component';
import { CommentsComponent } from './comments/comments.component';
import { ReportsComponent } from './reports/reports.component';



@NgModule({
  declarations: [
    CategoriesComponent,
    KnowledgeBasesComponent,
    CommentsComponent,
    ReportsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ContentsModule { }
