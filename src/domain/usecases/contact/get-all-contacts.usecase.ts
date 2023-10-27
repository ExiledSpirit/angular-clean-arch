import { UseCase } from "@base/use-case";
import { ContactModel } from "@domain/models/contact/contact.model";
import { ContactRepository } from "@domain/repositories/contact.repository";
import { Observable } from "rxjs";

export class GetAllContactsUseCase implements UseCase<void, ContactModel[]> {
  constructor(private contactRepository: ContactRepository) { }

  execute(): Observable<ContactModel[]> {
    return this.contactRepository.getAllContacts();
  }
}
