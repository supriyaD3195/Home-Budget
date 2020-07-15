import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartingPagesPage } from './starting-pages.page';

describe('StartingPagesPage', () => {
  let component: StartingPagesPage;
  let fixture: ComponentFixture<StartingPagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartingPagesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartingPagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
