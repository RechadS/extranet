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
import { LeftsidebarComponent } from './leftsidebar.component';

describe('Component: Leftsidebar', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [LeftsidebarComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([LeftsidebarComponent],
      (component: LeftsidebarComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(LeftsidebarComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(LeftsidebarComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <leftsidebar></leftsidebar>
  `,
  directives: [LeftsidebarComponent]
})
class LeftsidebarComponentTestController {
}

