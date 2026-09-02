import { Component, ContentChild, Input, TemplateRef } from '@angular/core';
import { ListByCategoryModel } from '../../models/list-by-category.model';

@Component({
  selector: 'app-list-by-category',
  templateUrl: './list-by-category.component.html',
  styleUrl: './list-by-category.component.css'
})
// Record<string, any> -> roughly means: { [key: string]: any; }
export class ListByCategoryComponent<T extends Record<string, any>> {

  @Input() data: ListByCategoryModel<T>[] = [];
  @Input() showCategoryLabel = true;
  @Input() categoryLabelClass = '';
  @Input() listItemUniqueValueProperty: string = 'code';

  @ContentChild(TemplateRef)
  itemTemplate!: TemplateRef<{ $implicit: T }>;
}
