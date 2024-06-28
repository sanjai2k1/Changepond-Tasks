import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleImgComponent } from './toggle-img.component';

describe('ToggleImgComponent', () => {
  let component: ToggleImgComponent;
  let fixture: ComponentFixture<ToggleImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
