export type CardProps = {
  item: GetCollectionData;
  contract: Contract;
  display?: string;
};
export type Contract = {
  address: string;
  chain: string;
};

export type GetCollectionData = {
  collection: string;
  name: string;
  image_url: string;
  description: string;
  item: string;
  identifier: number;
  contracts: Contract[];
};
export interface GetNftState {
  data: GetNftData | null;
  isLoading: boolean;
  isError: string | null;
}

export interface GetNftData {
  collection: string;
  name: string;
  image_url: string;
  description: string;
  item: string;
  identifier: number;
}

export interface GetNftImagesParams {
  chain: string;
  address: string;
  identifier: string;
}

export interface GetNftByCollectionState {
  data: GetNftByCollectionData[];
  isLoading: boolean;
  isError: string | null;
}

export interface GetNftByCollectionData {
  collection: string;
  name: string;
  image_url: string;
  description: string;
  item: string;
  identifier: number;
  is_nsfw: boolean;
  contracts: Contract[];
}

export interface CollectionsState {
  data: CollectionsData[];
  isLoading: boolean;
  isError: string | null;
}

export interface CollectionsData {
  collection: string;
  name: string;
  image_url: string;
  description: string;
  is_nsfw: boolean;
  identifier: number;
  item: string;
}

export interface CollectionsState {
  data: CollectionsData[];
  isLoading: boolean;
  isError: string | null;
}

export interface CollectionsData {
  collection: string;
  name: string;
  image_url: string;
  description: string;
  is_nsfw: boolean;
  identifier: number;
  item: string;
}

export interface GetCollectionState {
  data: GetCollectionData | null;
  isLoading: boolean;
  isError: string | null;
}
export interface DiscoverCardProps {
  item: any;
  display?: string;
}
