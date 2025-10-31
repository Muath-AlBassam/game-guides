import { Component, Input, OnInit } from '@angular/core';
import { SetsService } from '../../services/sets.service';

@Component({
  selector: 'app-set-details',
  templateUrl: './set-details.component.html',
  styleUrl: './set-details.component.css'
})
export class SetDetailsComponent implements OnInit {

  @Input() gameCode = null;
  @Input() setName = null;
  @Input() pieceCount = null;
  set: any = null;

  constructor(private setsService: SetsService) { }

  ngOnInit(): void {
    this.loadSet();
  }

  loadSet() {
    this.set = this.setsService.getOne(this.gameCode, this.setName);
  }
}
