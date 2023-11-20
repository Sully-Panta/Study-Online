import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.component.html',
  styleUrls: ['./perfil-docente.component.css']
})
export class PerfilDocenteComponent {
  panelOpenState = false;
  imagenUrl: string | ArrayBuffer | null = null;
  
    onFileSelected(event: any): void {
      const file: File = event.target.files![0];
  
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagenUrl = e.target!.result;
        };
        reader.readAsDataURL(file);
      }
    }
}
