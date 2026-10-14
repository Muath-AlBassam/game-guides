import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrl: './image-dialog.component.css'
})
export class ImageDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ImageDialogComponent>
  ) {}

  ngOnInit(): void {
  }

  closeOnOutsideClick(event: MouseEvent): void {
    const image = (event.currentTarget as HTMLElement)
      .querySelector('.dialog-image');
    if (image && !image.contains(event.target as Node)) {
      this.dialogRef.close();
    }
  }
}
