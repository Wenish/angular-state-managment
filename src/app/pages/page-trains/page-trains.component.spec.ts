import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTrainsComponent } from './page-trains.component';

describe('PageTrainsComponent', () => {
  let component: PageTrainsComponent;
  let fixture: ComponentFixture<PageTrainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTrainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTrainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
