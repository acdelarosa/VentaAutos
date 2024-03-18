/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListaautosService } from './listaautos.service';

describe('Service: Listaautos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaautosService]
    });
  });

  it('should ...', inject([ListaautosService], (service: ListaautosService) => {
    expect(service).toBeTruthy();
  }));
});
