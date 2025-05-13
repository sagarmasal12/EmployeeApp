import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMultpleComponent } from './single-multple.component';

describe('SingleMultpleComponent', () => {
  let component: SingleMultpleComponent;
  let fixture: ComponentFixture<SingleMultpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleMultpleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleMultpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
