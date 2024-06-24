import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictMainImageComponent } from './district-main-image.component';

describe('DistrictMainImageComponent', () => {
  let component: DistrictMainImageComponent;
  let fixture: ComponentFixture<DistrictMainImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DistrictMainImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DistrictMainImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
