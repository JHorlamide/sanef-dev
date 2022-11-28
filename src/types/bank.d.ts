import { IBaseResponse } from "./login";

export type IBank = {
  name: string;
  logo: string;
};

export interface IBankResponse extends IBaseResponse {
  data: any;
}

export type IBankRequest = {
  name: string;
  logo: string;
};
