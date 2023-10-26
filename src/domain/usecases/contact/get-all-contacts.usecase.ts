import { Observable } from "rxjs";
import { UseCase } from "src/base/use-case";
import { ContactModel } from "src/domain/models/contact/contact.model";
import { ContactRepository } from "src/domain/repositories/contact.repository";

export class GetAllContactsUseCase implements UseCase<void, ContactModel[]> {
  constructor(private contactRepository: ContactRepository) { }

  execute(): Observable<ContactModel[]> {
    return this.contactRepository.getAllContacts();
  }
}
