import { ContactModel } from "@domain/models/contact.models";
import { Observable } from "rxjs";

export abstract class ContactRepository {
  abstract getAllContacts(): Observable<ContactModel[]>
}
