import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DutyrosterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [DutyrosterSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [DutyrosterSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DutyrosterSharedModule {
  static forRoot() {
    return {
      ngModule: DutyrosterSharedModule
    };
  }
}
