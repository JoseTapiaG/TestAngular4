import {Component, OnInit} from '@angular/core';
import {OfertasService} from '../ofertas.service';
import {Oferta} from '../models/oferta';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  ofertas: Oferta[];

  constructor(private ofertasService: OfertasService) {
  }

  ngOnInit() {
    this.getOfertas();
  }

  getOfertas(): void {
    this.ofertasService.getOfertas()
      .subscribe(ofertas => this.ofertas = ofertas);
  }

}
