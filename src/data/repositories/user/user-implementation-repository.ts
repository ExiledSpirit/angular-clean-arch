import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ContactModel } from 'src/domain/models/contact/contact.model';
import { ContactRepository } from 'src/domain/repositories/contact.repository';
import { ContactEntity } from './entities/contact-entity';
import { ContactImplementationRepositoryMapper } from './mappers/contact-repository.mapper';

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
