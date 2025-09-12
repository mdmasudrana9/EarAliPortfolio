// newsletter/types.ts

export interface INewsletter {
  _id: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  v: number;
}

// যদি সব newsletter এর API response হয়
export interface INewsletterResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: INewsletter[]; // multiple newsletters
}

// যদি single create response হয়
export interface INewsletterCreateResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: INewsletter; // single newsletter
}
