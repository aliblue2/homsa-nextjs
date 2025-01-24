export interface Place {
  Id: number;
  OwnerId: number;
  Name: string;
  Description: string;
  Price: string;
  City: string;
  State: string;
  Banner: string;
  Images: string;
  Latitude: string;
  Longitude: string;
  Rate: number;
}

export interface PlaceFeatures {
  Id: number;
  PlaceId: number;
  Space: number;
  Bedrooms: number;
  Bathrooms: number;
  Kitchen: number;
}

export interface PlaceComment {
  Id: number;
  PlaceId: number;
  UserId: number;
  Content: string;
  Rate: number;
}
