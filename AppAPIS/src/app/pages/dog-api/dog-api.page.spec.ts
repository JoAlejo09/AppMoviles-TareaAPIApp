import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogApiPage } from './dog-api.page';

describe('DogApiPage', () => {
  let component: DogApiPage;
  let fixture: ComponentFixture<DogApiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DogApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
