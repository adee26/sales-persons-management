import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesPersonsList } from './sales-persons-list';

describe('SalesPersonsList', () => {
  let component: SalesPersonsList;
  let fixture: ComponentFixture<SalesPersonsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesPersonsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesPersonsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
