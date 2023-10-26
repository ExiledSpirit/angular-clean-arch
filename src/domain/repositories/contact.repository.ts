import { Observable } from "rxjs";
import { ContactModel } from "../models/contact/contact.model";

export abstract class ContactRepository {
  abstract getAllContacts(): Observable<ContactModel[]>
}
