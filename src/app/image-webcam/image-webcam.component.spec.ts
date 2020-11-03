import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWebcamComponent } from './image-webcam.component';

describe('ImageWebcamComponent', () => {
  let component: ImageWebcamComponent;
  let fixture: ComponentFixture<ImageWebcamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageWebcamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageWebcamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
