import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleList } from './list.component';

describe('ListComponent', () => {
  let component: ArticleList;
  let fixture: ComponentFixture<ArticleList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
