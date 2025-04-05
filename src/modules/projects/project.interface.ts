export type TProject = {
  _id: string;
  name: string;
  thumbnail?: string;
  images?: TImages[];
  overview: string;
  link: string;
  imagesKey: {
    key: number;
    link: string;
  }[];
};

export type TImages = {
  key: number;
  link: string;
};
