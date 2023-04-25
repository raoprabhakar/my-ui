import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsDisplayerComponent } from './ads-displayer.component';

describe('AdsDisplayerComponent', () => {
  let component: AdsDisplayerComponent;
  let fixture: ComponentFixture<AdsDisplayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdsDisplayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsDisplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
