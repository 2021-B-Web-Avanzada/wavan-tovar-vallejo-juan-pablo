import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoExplorarComponent } from './video-explorar.component';

describe('VideoExplorarComponent', () => {
  let component: VideoExplorarComponent;
  let fixture: ComponentFixture<VideoExplorarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoExplorarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoExplorarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
