interface StrapiEntity {
  id: number;

  created_by: {
    id: number;
    firstname: string;
    lastname: string;
  };
  updated_by: {
    id: number;
    firstname: string;
    lastname: string;
  };
  created_at: string;
  updated_at: string;
}

export interface New extends StrapiEntity {
  title: string;
  description: string;
  slug: string;
}

export interface Testimonial extends StrapiEntity {
  name: string;
  role: string;
  statement: string;
  image: Image;
}

interface Image {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  url: string;
  formats: {
    large: ImageFormat;
    small: ImageFormat;
    medium: ImageFormat;
    thumbnail: ImageFormat;
  };
}

interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  size: number;
  width: number;
  height: number;
}
