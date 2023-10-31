import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataModule } from '@data/data.module';
import { PostInMemoryRepository } from '@data/repositories/post/post-in-memory-repository';
import { PostRepository } from '@domain/repositories/post.repository';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataModule
  ],
  providers: [
    {provide: PostRepository, useClass: PostInMemoryRepository}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
