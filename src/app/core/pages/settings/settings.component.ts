import { Component, OnInit } from '@angular/core';
import { DialogService } from '@shared/services/dialog.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  viewTextFormatterPopup(): void {
    this.dialogService.openTextFormatterDialog();
  }
}
