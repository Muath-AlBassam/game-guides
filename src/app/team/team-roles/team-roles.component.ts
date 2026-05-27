import { Component, Input, OnInit } from '@angular/core';
import { LookupsService } from '../../services/lookups.service';
import { Constants } from '../../utils/constants';

@Component({
  selector: 'app-team-roles',
  templateUrl: './team-roles.component.html',
  styleUrl: './team-roles.component.css'
})
export class TeamRolesComponent implements OnInit {

  @Input() gameCode: any = null;
  @Input() team: any = null;

  roles: any[] = [];

  characterPFPSize: number = 80;

  constructor(private lookupsService: LookupsService) { }

  ngOnInit(): void {
    this.roles = this.lookupsService.getByType(null, Constants.lookupType.ROLE);
  }

  getRole(roleCode: any) {
    return this.roles.find(r => r.code == roleCode);
  }

}

