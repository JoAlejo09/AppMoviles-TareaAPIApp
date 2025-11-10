import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClimaApiPage } from './clima-api.page';

describe('ClimaApiPage', () => {
  let component: ClimaApiPage;
  let fixture: ComponentFixture<ClimaApiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClimaApiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
