import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheffingComponent } from './cheffing.component';

describe('CheffingComponent', () => {
  let component: CheffingComponent;
  let fixture: ComponentFixture<CheffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheffingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
