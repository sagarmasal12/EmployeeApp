import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMultpleTemplateComponent } from './single-multple-template.component';

describe('SingleMultpleTemplateComponent', () => {
  let component: SingleMultpleTemplateComponent;
  let fixture: ComponentFixture<SingleMultpleTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleMultpleTemplateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMultpleTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
