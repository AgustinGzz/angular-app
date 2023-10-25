import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunThingComponent } from './fun-thing.component';

describe('FunComponentComponent', () => {
  let component: FunThingComponent;
  let fixture: ComponentFixture<FunThingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunThingComponent],
    });
    fixture = TestBed.createComponent(FunThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
