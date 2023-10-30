import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDaBubbleComponent } from './project-da-bubble.component';

describe('ProjectDaBubbleComponent', () => {
  let component: ProjectDaBubbleComponent;
  let fixture: ComponentFixture<ProjectDaBubbleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDaBubbleComponent]
    });
    fixture = TestBed.createComponent(ProjectDaBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
