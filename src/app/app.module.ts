import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { ActionCableService } from 'angular2-actioncable';

import { FormsModule } from '@angular/forms'

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { LayoutComponent } from './layout/layout.component'; // CLI imports router
import { UsernameGuard } from './username.guard'
import { Page404Component } from './page404/page404.component';



const routes: Routes =
  [{
    path: '', component: LayoutComponent,
    children: [{
      path: '', component: LoginComponent
    },

    {
      path: 'chat',
      component: ChatComponent,
      canActivate: [UsernameGuard],




    },
    ]

  },
  {
    path: '**',
    component: Page404Component

  }
  ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],



})
export class AppRoutingModule { }


@NgModule({
  declarations: [
    ChatComponent,
    LayoutComponent,
    Page404Component,
    AppComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ActionCableService],
  bootstrap: [AppComponent]
})
export class AppModule { }


