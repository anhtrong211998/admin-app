import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewKnowledgebasesDetailComponent } from './view-knowledgebases-detail.component';

describe('ViewKnowledgebasesDetailComponent', () => {
  let component: ViewKnowledgebasesDetailComponent;
  let fixture: ComponentFixture<ViewKnowledgebasesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewKnowledgebasesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewKnowledgebasesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
