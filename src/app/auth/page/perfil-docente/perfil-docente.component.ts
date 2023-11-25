import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatComponent } from 'src/app/layouts/chat/chat.component';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-perfil-docente',
  templateUrl: './perfil-docente.component.html',
  styleUrls: ['./perfil-docente.component.css']
})
export class PerfilDocenteComponent {
  panelOpenState = false;
  imagenUrl: string | ArrayBuffer | null = null;

  constructor(
    private dialog: MatDialog,
    private _alert: AlertService
  ) { }

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

  open() {
    this.dialog.open(ChatComponent, {
      autoFocus: false,
      disableClose: false,
      width: 'auto'
    }).afterClosed().subscribe(
      (result: string) => {
        this.handleDialogClose(result);
      }
    )
  }

  private handleDialogClose(messageType: string): void {
    if (messageType === 'success') {
      this._alert.success("Mensaje envíado");
    } else if (messageType === 'error') {
      this._alert.error("Error en la operación");
    }
  }

}
