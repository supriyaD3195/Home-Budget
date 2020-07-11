import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeBudgetPage } from './home-budget.page';

describe('HomeBudgetPage', () => {
  let component: HomeBudgetPage;
  let fixture: ComponentFixture<HomeBudgetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBudgetPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeBudgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
