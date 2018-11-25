export interface Param {
  id: string;
  data: {
    gset: string,
    values: string[];
  };
  _set?: string[];
}
