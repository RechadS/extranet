import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ExtranetAppComponent } from '../app/extranet.component';

beforeEachProviders(() => [ExtranetAppComponent]);

describe('App: Extranet', () => {
  it('should create the app',
      inject([ExtranetAppComponent], (app: ExtranetAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'extranet works!\'',
      inject([ExtranetAppComponent], (app: ExtranetAppComponent) => {
    expect(app.title).toEqual('extranet works!');
  }));
});
