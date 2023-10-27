import { ContactModel } from "@domain/models/contact/contact.model";
import { Observable } from "rxjs";

export abstract class ContactRepository {
  abstract getAllContacts(): Observable<ContactModel[]>
}
