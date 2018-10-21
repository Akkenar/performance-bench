import { NgModule } from '@angular/core';
import { AddToBasketModalComponent } from './add-to-basket-modal.component';

@NgModule({
  declarations: [AddToBasketModalComponent],
  exports: [AddToBasketModalComponent],
  entryComponents: [AddToBasketModalComponent],
})
export class AddToBasketModalModule {
  static entry = AddToBasketModalComponent;
}
