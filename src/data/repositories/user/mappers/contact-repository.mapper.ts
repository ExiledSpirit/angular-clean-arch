import { Mapper } from "@base/mapper"
import { ContactEntity } from "@data/repositories/user/entities/contact-entity"
import { ContactModel } from "@domain/models/contact/contact.model"

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
