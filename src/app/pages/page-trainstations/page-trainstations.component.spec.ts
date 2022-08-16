import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTrainstationsComponent } from './page-trainstations.component';

describe('PageTrainstationsComponent', () => {
  let component: PageTrainstationsComponent;
  let fixture: ComponentFixture<PageTrainstationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTrainstationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTrainstationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
