import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistEditFormComponent } from './playlist-edit-form.component';

describe('PlaylistEditFormComponent', () => {
  let component: PlaylistEditFormComponent;
  let fixture: ComponentFixture<PlaylistEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
