import { Component, Input, OnInit } from '@angular/core';
import { RolesService } from '../../services/roles.service';

@Component({
  selector: 'app-team-roles',
  templateUrl: './team-roles.component.html',
  styleUrl: './team-roles.component.css'
})
export class TeamRolesComponent implements OnInit {

  @Input() gameCode: any = null;
  @Input() team: any = null;

  characterPFPSize: number = 80;

  constructor(private rolesService: RolesService) { }

  ngOnInit(): void { }

  getRole(roleCode: any) {
    return this.rolesService.getOne(roleCode);
  }

}

