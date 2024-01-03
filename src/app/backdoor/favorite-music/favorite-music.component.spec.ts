import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteMusicComponent } from './favorite-music.component';

describe('FavoriteMusicComponent', () => {
  let component: FavoriteMusicComponent;
  let fixture: ComponentFixture<FavoriteMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoriteMusicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
