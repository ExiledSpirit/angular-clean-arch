import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { httpClientImplementation } from "@data/http-services/http-client.implementation";
import { HttpService } from "@data/http-services/http-service.interface";
import { ContactUsecasesModule } from "@domain/usecases/contact/contact-usecases.module";
import { PostUsecasesModule } from "@domain/usecases/posts/post-usecases.module";

@NgModule({
  providers: [
    {
      provide: HttpService,
      useExisting: httpClientImplementation
    }
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    PostUsecasesModule,
    ContactUsecasesModule
  ]
})
export class DataModule { }
