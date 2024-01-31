import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-vista-detalle',
  templateUrl: './vista-detalle.component.html',
  styleUrl: './vista-detalle.component.css'
})

export class VistaDetalleComponent implements OnInit {
	episodio: any  = null;
	characters: any[] = [];
	@Input() url: string = '';
 	constructor(private http: HttpClient, public activeModal: NgbActiveModal) {}

  ngOnInit() {
    this.obtenerDetalle();
  }

  obtenerDetalle() {
    this.http.get<any>(this.url).subscribe(data => {
    	this.episodio = data;

	for(const urlPersonaje of this.episodio.characters){
    		this.http.get<any>(urlPersonaje).subscribe(data => {
			console.log(data);
			this.characters.push(data);
    		});
	}
    });

  }
}
