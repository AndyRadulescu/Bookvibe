export interface IndustryIdentifiersDto {
  type: string;
  identifier: string;
}

export interface BookVibeVolumeDto {
  id: string;
  title: string;
  subtitle?: string;
  authors: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  industryIdentifiers?: IndustryIdentifiersDto[];
  pageCount: number;
  categories?: string[];
  averageRating?: number;
  ratingCount?: number;
  maturityRating: string;
  imageLink: string;
  language?: string;
}
