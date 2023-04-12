import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmetComponent } from './emet.component';

describe('EmetComponent', () => {
  let component: EmetComponent;
  let fixture: ComponentFixture<EmetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
