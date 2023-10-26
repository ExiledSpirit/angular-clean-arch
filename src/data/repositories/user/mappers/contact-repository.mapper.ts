import { Mapper } from "src/base/mapper";
import { ContactModel } from "src/domain/models/contact/contact.model";
import { ContactEntity } from "../entities/contact-entity";

export class ContactImplementationRepositoryMapper extends Mapper<ContactEntity, ContactModel> {
  override mapFrom(param: ContactEntity): ContactModel {
    return {
      id: param.id,
      nome: param.name,
      estado: param.state,
      cidade: param.city,
      assunto: param.subject,
      motivo: param.content,
      createdAt: param.date
    }
  }

  override mapTo(param: ContactModel): ContactEntity {
    return {
      id: param.id,
      name: param.nome,
      state: param.estado,
      city: param.cidade,
      subject: param.assunto,
      content: param.motivo,
      date: param.createdAt
    }
  }
}
