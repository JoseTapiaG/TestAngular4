import {Injectable} from '@angular/core';
import {Oferta} from './models/oferta';
import {OFERTAS} from './mocks/oferta-mock';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OfertasService {

  constructor() {
  }

  getOfertas(): Observable<Oferta[]> {
    return of(OFERTAS);
  }

  getOferta(id: number): Observable<Oferta> {
    return of(OFERTAS.find(oferta => oferta.id === id));
  }

}
