import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { AuthService, KnowledgeBasesService } from '@app/shared/services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    public blockedPanel = false;
    userName: string;
    isAuthenticated: boolean;
    subscription: Subscription;
    public items: any;

    constructor(private translate: TranslateService, public router: Router,
        private authService: AuthService,private knowledgeBasesService: KnowledgeBasesService) {

        this.subscription = this.authService.authNavStatus$.subscribe(status => this.isAuthenticated = status);
        this.userName = this.authService.name;

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
        this.blockedPanel = true;
        this.subscription.add(this.knowledgeBasesService.getAllapprove()
      .subscribe((response: any) => {
          this.items = response;
          console.log(this.items);
        setTimeout(() => { this.blockedPanel = false; }, 1000);
      }, error => {
        setTimeout(() => { this.blockedPanel = false; }, 1000);
      }));
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    async signout() {
        await this.authService.signout();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}