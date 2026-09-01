export interface LookupModel {
  gameCode: string;
  code: string;
  label: string;
  type: string;
  imageUrl: string;

  // EXTRA_FIELDS
  [key: string]: unknown;
}