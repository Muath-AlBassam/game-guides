import { Component, Input, OnInit } from '@angular/core';
import { LookupsService } from '@shared/api/lookups.service';
import { LookupModel } from '@shared/models/lookup.model';
import { Constants } from '@shared/utils/constants';

@Component({
  selector: 'app-team-tags',
  templateUrl: './team-tags.component.html',
  styleUrl: './team-tags.component.css'
})
export class TeamTagsComponent implements OnInit {

  @Input('tags') tagCodeList: string[] = [];
  @Input() containerClass: string = '';
  allTags: LookupModel[] = [];
  tags: LookupModel[] = [];

  constructor(
    private lookupsService: LookupsService
  ) {}

  ngOnInit(): void {
    this.loadTags();
  }

  loadTags(): void {
    this.allTags = this.lookupsService.getByType(Constants.lookupType.TAG);
    if (this.tagCodeList) {
      this.tags = this.tagCodeList
        .map((tt: any) => this.allTags.find((at: any) => tt == at.code))
        .filter((t): t is LookupModel => t !== undefined);
    }
  }
}
