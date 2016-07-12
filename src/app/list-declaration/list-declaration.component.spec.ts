import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ListDeclarationComponent } from './list-declaration.component';

describe('Component: ListDeclaration', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ListDeclarationComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([ListDeclarationComponent],
      (component: ListDeclarationComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(ListDeclarationComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(ListDeclarationComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-list-declaration></app-list-declaration>
  `,
  directives: [ListDeclarationComponent]
})
class ListDeclarationComponentTestController {
}

