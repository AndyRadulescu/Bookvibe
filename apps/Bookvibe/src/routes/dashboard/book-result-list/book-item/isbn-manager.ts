import { IndustryIdentifiersDto } from '@bookvibe/shared';

export type ISBNType = 'ISBN_13' | 'ISBN_10'

export const getISBNTypeFromIndustryIdentifier = (isbnType: ISBNType, industryIdentifier: IndustryIdentifiersDto[]): string => {
  const isbn13 = industryIdentifier.find((it) => it.type === isbnType)?.identifier;
  if (!isbn13) {
    return industryIdentifier[0].identifier;
  }
  return isbn13;
};
