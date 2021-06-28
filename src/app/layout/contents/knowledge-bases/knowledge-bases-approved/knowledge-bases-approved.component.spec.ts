import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgeBasesApprovedComponent } from './knowledge-bases-approved.component';

describe('KnowledgeBasesApprovedComponent', () => {
  let component: KnowledgeBasesApprovedComponent;
  let fixture: ComponentFixture<KnowledgeBasesApprovedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnowledgeBasesApprovedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgeBasesApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
