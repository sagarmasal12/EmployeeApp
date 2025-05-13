import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvFilterComponent } from './adv-filter.component';

describe('AdvFilterComponent', () => {
  let component: AdvFilterComponent;
  let fixture: ComponentFixture<AdvFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
