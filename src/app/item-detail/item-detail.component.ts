import {Component, OnInit} from '@angular/core';
import {Oferta} from '../models/oferta';
import {OfertasService} from '../ofertas.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  oferta: Oferta;

  constructor(
    private ofertasService: OfertasService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.getOferta(id);
  }

  getOferta(id: number): void {
    this.ofertasService.getOferta(id)
      .subscribe(oferta => this.oferta = oferta);
  }

}
