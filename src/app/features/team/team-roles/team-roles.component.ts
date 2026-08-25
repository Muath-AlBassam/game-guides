import { Component, Input, OnInit } from '@angular/core';
import { LookupsService } from '../../../shared/api/lookups.service';
import { Constants } from '../../../shared/utils/constants';
import { TeamModel } from '../../../shared/models/team.mode';
import { LookupModel } from '../../../shared/models/lookup.model';

@Component({
  selector: 'app-team-roles',
  templateUrl: './team-roles.component.html',
  styleUrl: './team-roles.component.css'
})
export class TeamRolesComponent implements OnInit {

  @Input() team!: TeamModel;

  roles: LookupModel[] = [];
  characterPFPSize: number = 80;

  constructor(private lookupsService: LookupsService) { }

  ngOnInit(): void {
    this.roles = this.lookupsService.getGeneralLookup(Constants.lookupType.ROLE);
  }

  getRole(roleCode: string): LookupModel | undefined {
    return this.roles.find(r => r.code == roleCode);
  }

}

