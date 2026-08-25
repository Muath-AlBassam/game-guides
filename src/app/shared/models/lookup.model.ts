export interface LookupModel {
  gameCode: string;
  code: string;
  label: string;
  type: string;
  imageUrl: string;

  // EXTRA_FIELDS
  [key: string]: unknown;
}

export class Lookup implements LookupModel {
  gameCode = '';
  code = '';
  label = '';
  type = '';
  imageUrl = '';

  [key: string]: unknown;

  constructor(code = '', label = '') {
    this.code = code;
    this.label = label;
  }
}