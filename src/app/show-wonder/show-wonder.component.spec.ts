import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWonderComponent } from './show-wonder.component';

describe('ShowWonderComponent', () => {
  let component: ShowWonderComponent;
  let fixture: ComponentFixture<ShowWonderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowWonderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWonderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
