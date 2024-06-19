import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoapiComponent } from './consumoapi.component';

describe('ConsumoapiComponent', () => {
  let component: ConsumoapiComponent;
  let fixture: ComponentFixture<ConsumoapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConsumoapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConsumoapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
