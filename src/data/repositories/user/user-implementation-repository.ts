import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ContactEntity } from "@data/repositories/user/entities/contact-entity";
import { ContactImplementationRepositoryMapper } from "@data/repositories/user/mappers/contact-repository.mapper";
import { ContactModel } from "@domain/models/contact/contact.model";
import { ContactRepository } from "@domain/repositories/contact.repository";
import { Observable, map } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class NotificationImplementationRepository extends ContactRepository {
    contactMapper = new ContactImplementationRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    override getAllContacts(): Observable<ContactModel[]> {
        return this.http
          .get<ContactEntity[]>('https://example.com/contacts/get')
          .pipe(map(contactList => contactList.map(this.contactMapper.mapFrom)));
    }
}
