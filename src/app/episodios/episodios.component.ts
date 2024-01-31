import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { VistaDetalleComponent } from '../vista-detalle/vista-detalle.component';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.css'
})

export class EpisodiosComponent {

	episodios: any[] = [];
	constructor(private http: HttpClient, private modalService: NgbModal) {}

  obtenerEpisodios() {

    this.http.get<any>('https://rickandmortyapi.com/api/episode').subscribe(data => {
      this.episodios = data.results;
      console.log('Episodios obtenidos:', this.episodios);
    });

  }

  abrirModal(url: string) {
    const modalRef = this.modalService.open(VistaDetalleComponent);
    modalRef.componentInstance.url = url;
  }

}
