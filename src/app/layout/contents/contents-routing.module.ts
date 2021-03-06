import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KnowledgeBasesComponent } from './knowledge-bases/knowledge-bases.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthGuard } from '@app/shared';
import { KnowledgeBasesDetailComponent } from './knowledge-bases/knowledge-bases-detail/knowledge-bases-detail.component';
import { CommentsComponent } from './knowledge-bases/comments/comments.component';
import { ReportsComponent } from './knowledge-bases/reports/reports.component';
import { KnowledgeBasesApprovedComponent } from './knowledge-bases/knowledge-bases-approved/knowledge-bases-approved.component';
import { ViewKnowledgebasesDetailComponent } from './knowledge-bases/view-knowledgebases-detail/view-knowledgebases-detail.component';

const routes: Routes = [
    {
        path: '',
        component: KnowledgeBasesComponent,
        data: {
            functionCode: 'CONTENT_KNOWLEDGEBASE'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'knowledge-bases',
        component: KnowledgeBasesComponent,
        data: {
            functionCode: 'CONTENT_KNOWLEDGEBASE'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'knowledge-bases-detail/:id',
        component: KnowledgeBasesDetailComponent,
        data: {
            functionCode: 'CONTENT_KNOWLEDGEBASE'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'categories',
        component: CategoriesComponent,
        data: {
            functionCode: 'CONTENT_CATEGORY'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'knowledge-bases/:knowledgeBaseId/comments',
        component: CommentsComponent,
        data: {
            functionCode: 'CONTENT_COMMENT'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'knowledge-bases/:knowledgeBaseId/details',
        component: ViewKnowledgebasesDetailComponent,
        data: {
            functionCode: 'CONTENT_KNOWLEDGEBASE'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'knowledge-bases/comments',
        component: CommentsComponent,
        data: {
            functionCode: 'CONTENT_COMMENT'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'knowledge-bases/:knowledgeBaseId/reports',
        component: ReportsComponent,
        data: {
            functionCode: 'CONTENT_REPORT'
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'knowledge-bases/reports',
        component: ReportsComponent,
        data: {
            functionCode: 'CONTENT_REPORT'
        },
        canActivate: [AuthGuard]
    }
    ,
    {
        path: 'knowledge-bases/approved',
        component: KnowledgeBasesApprovedComponent,
        data: {
            functionCode: 'CONTENT_KNOWLEDGEBASE'
        },
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentsRoutingModule { }
