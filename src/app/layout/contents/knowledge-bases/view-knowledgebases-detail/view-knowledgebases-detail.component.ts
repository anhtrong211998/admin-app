import { Component, OnDestroy, OnInit } from '@angular/core';
import { KnowledgeBasesService, NotificationService, CategoriesService, UtilitiesService } from '@app/shared/services';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageConstants } from '@app/shared/constants';
import { Category, KnowledgeBase } from '@app/shared/models';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from '@environments/environment';
import { SelectItem } from 'primeng/api/selectitem';

@Component({
  selector: 'app-view-knowledgebases-detail',
  templateUrl: './view-knowledgebases-detail.component.html',
  styleUrls: ['./view-knowledgebases-detail.component.css']
})
export class ViewKnowledgebasesDetailComponent implements OnInit, OnDestroy {

  constructor(
    private knowledgeBasesService: KnowledgeBasesService,
    private categoriesService: CategoriesService,
    private notificationService: NotificationService,
    private utilitiesService: UtilitiesService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {
  }
  private subscriptionApproved = new Subscription();
  private subscription: Subscription[] = [];
  public entityForm: FormGroup;
  public dialogTitle: string;
  public entityId: string;
  public categories: SelectItem[] = [];
  public blockedPanel = false;
  public selectedFiles: File[] = [];
  public attachments: any[] = [];
  public backendApiUrl = environment.apiUrl;
  public knowledgebase: any;
  ngOnInit() {  
    this.subscription.push(this.activeRoute.params.subscribe(params => {
      this.entityId = params['knowledgeBaseId'];
    }));

    this.blockedPanel = true;
    this.subscription.push(this.knowledgeBasesService.getDetail(this.entityId).subscribe((response: any) => {
      this.knowledgebase = response;
      console.log(this.knowledgebase);
      this.attachments = response.attachments;
      setTimeout(() => { this.blockedPanel = false; }, 1000);
    }, error => {
      setTimeout(() => { this.blockedPanel = false; }, 1000);
    }));
  }

  goBackToList() {
    this.router.navigateByUrl('/contents/knowledge-bases');
  }

  Approved() {
    this.subscriptionApproved.add(this.knowledgeBasesService.appvoved(this.entityId)
    .subscribe(() => {
      this.notificationService.showSuccess(MessageConstants.UPDATED_OK_MSG);
      this.goBackToList();
      setTimeout(() => { this.blockedPanel = false;}, 1000);
    }, error => {
      setTimeout(() => { this.blockedPanel = false; }, 1000);
    }));
  }

  ngOnDestroy(): void {
    this.subscription.forEach(element => {
      element.unsubscribe();
    });
  }
}
