import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { httpClientImplementation } from "@data/http-services/http-client.implementation";
import { HttpService } from "@data/http-services/http-service.interface";
import { ContactDataModule } from "@data/repositories/contact/contact-data.module";
import { PostDataModule } from "@data/repositories/post/post-data.module";

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
    PostDataModule,
    ContactDataModule
  ]
})
export class DataModule { }
