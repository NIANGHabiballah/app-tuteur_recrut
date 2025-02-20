import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffrePopupComponent } from './offre-popup.component';

describe('OffrePopupComponent', () => {
  let component: OffrePopupComponent;
  let fixture: ComponentFixture<OffrePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffrePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffrePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
