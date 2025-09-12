// Type define for video object
export interface Video {
  _id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category?: string;
  createdAt: string;
  updatedAt: string;
}

export type VideoFormData = {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
};
