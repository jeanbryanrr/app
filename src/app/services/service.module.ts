import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginGuard } from './guards/login.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [LoginGuard]
})
export class ServiceModule { }
