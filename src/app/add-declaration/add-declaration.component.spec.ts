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
import { AddDeclarationComponent } from './add-declaration.component';

describe('Component: AddDeclaration', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [AddDeclarationComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([AddDeclarationComponent],
      (component: AddDeclarationComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(AddDeclarationComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(AddDeclarationComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-add-declaration></app-add-declaration>
  `,
  directives: [AddDeclarationComponent]
})
class AddDeclarationComponentTestController {
}

