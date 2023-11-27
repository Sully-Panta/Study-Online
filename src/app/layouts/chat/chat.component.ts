import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ChatComponent>,
    private _fb: FormBuilder,
    private _alert: AlertService
  ) {
    this.form = this._fb.group({
      mensaje: ['', Validators.required]
    })
  }

  submit() {
    if (this.form.invalid) {
      this._alert.error("Mensaje vacío");
      return;
    }

    this.dialogRef.close('success');
  }

}
