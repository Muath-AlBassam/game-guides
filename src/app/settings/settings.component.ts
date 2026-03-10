import { Component, OnInit } from '@angular/core';
import { DialogService } from '../services/dialog.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent implements OnInit {

  constructor(private dialogService: DialogService) {}

  ngOnInit(): void {}

  viewTextFormatterPopup() {
    this.dialogService.openTextFormatterDialog();
  }
}
