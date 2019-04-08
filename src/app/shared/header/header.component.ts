import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import {filter, map  } from 'rxjs/operators';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
titulo: string;
clases: string;
  constructor(private router: Router) {
    this.getDataRoute().subscribe(event => {
      this.titulo = event.titulo;
      this.clases = event.clase;
      console.log(this.titulo);
   });
   }

  ngOnInit() {
  }
  getDataRoute() {
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );
  }
}
