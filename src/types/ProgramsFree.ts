export type ProgramsList = {
  _type: string;
  data: Program[];
};

export type Program = {
  _type: string;
  id: string;
  title: string;
  isFree: boolean;
  isAvailable: boolean;
  isFeatured: boolean;
  banner: Banner;
  cover: Cover;
  headphones: boolean;
  descriptionHTML: string;
  tracks: Track[];
};

type Image<T> = {
  _type: string;
  url: string;
  thumbnail: string;
  resolutions: T[];
};

type Resolution<S> = {
  _type: string;
  url: string;
  size: S;
};

type BannerResolution = Resolution<{
  width: number;
  height: number;
}>;
type Banner = Image<BannerResolution>;

type CoverResolution = Resolution<number>;
type Cover = Image<CoverResolution>;

export type Track = {
  _type: string;
  key: string;
  title: string;
  order: number;
  duration: number;
  isAvailable: boolean;
  media: TrackMedia;
};

type TrackMedia = {
  _type: string;
  mp3: TrackMediaFile;
  flac: TrackMediaFile;
  m4a: TrackMediaFile;
};

type TrackMediaFile = {
  _type: string;
  url: string;
  headUrl: string;
};
