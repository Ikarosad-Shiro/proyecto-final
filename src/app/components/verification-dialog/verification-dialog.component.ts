import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verification-dialog',
  templateUrl: './verification-dialog.component.html',
  styleUrls: ['./verification-dialog.component.css']
})
export class VerificationDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<VerificationDialogComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string }
  ) {}

  onClose(): void {
    this.dialogRef.close();
    if (this.data.message.includes('cuenta no está verificada')) {
      this.router.navigate(['/sesion']);
    }
  }
}
