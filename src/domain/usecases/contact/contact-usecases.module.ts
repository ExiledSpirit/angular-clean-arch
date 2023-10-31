import { NgModule, Provider } from "@angular/core";
import { ContactRepository } from "@domain/repositories/contact.repository";
import { GetAllContactsUseCase } from "@domain/usecases/contact/get-all-contacts.usecase";

const getAllContactsUseCaseFactory = (contactRepo: ContactRepository) => new GetAllContactsUseCase(contactRepo);
export const getAllContactsUseCaseProvider: Provider = {
  provide: GetAllContactsUseCase,
  useFactory: getAllContactsUseCaseFactory,
  deps: [ContactRepository]
}

@NgModule({
  providers: [
    getAllContactsUseCaseProvider,
  ],
})
export class ContactUsecasesModule { }
