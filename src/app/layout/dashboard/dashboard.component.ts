import { Component, OnInit } from '@angular/core';
import { CommentsService, ReportsService, StatisticsService, UsersService } from '@app/shared/services';
import { routerTransition } from '../../router.animations';
import { BaseComponent } from '../base/base.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
     // Default
  public blockedPanel = false;
    public items: any[];
    public year: number = new Date().getFullYear();
    public totalKbs = 0;
    public totalMember = 0;
    public totalComment = 0;
    public totalReport = 0;
    constructor(
      private statisticService: StatisticsService,
      private usersService: UsersService,
      private commentsService: CommentsService,
      private reportsService: ReportsService) {
    }

    ngOnInit() {
        this.loadData();

    }

    loadData() {
        this.blockedPanel = true;
        this.statisticService.getMonthlyNewKbs(this.year)
          .subscribe((response: any) => {
            this.totalKbs = 0;
            this.items = response;
            response.forEach(element => {
              this.totalKbs += element.numberOfNewKbs;
            });
            setTimeout(() => { this.blockedPanel = false; }, 1000);
          }, error => {
            setTimeout(() => { this.blockedPanel = false; }, 1000);
        });

        this.usersService.getAll()
            .subscribe((response: any) => {
            this.totalMember = 0;
            this.items = response;
            response.forEach(element => {
                this.totalMember += 1;
            });
            setTimeout(() => { this.blockedPanel = false; }, 1000);
            }, error => {
            setTimeout(() => { this.blockedPanel = false; }, 1000);
        });

        this.commentsService.getAll(undefined)
            .subscribe((response: any) => {
            this.totalComment = 0;
            this.items = response;
            response.forEach(element => {
                this.totalComment += 1;
            });
            setTimeout(() => { this.blockedPanel = false; }, 1000);
            }, error => {
            setTimeout(() => { this.blockedPanel = false; }, 1000);
        });

        this.reportsService.getAll(undefined)
            .subscribe((response: any) => {
            this.totalReport = 0;
            this.items = response;
            response.forEach(element => {
                this.totalReport += 1;
            });
            setTimeout(() => { this.blockedPanel = false; }, 1000);
            }, error => {
            setTimeout(() => { this.blockedPanel = false; }, 1000);
        });
      }
}
