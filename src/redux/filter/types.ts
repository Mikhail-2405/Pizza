export type CategoryId = {
    sort: string;
    index: number;
  }
  
export type Sort = {
name: string;
sortProperty: string;
}
  
export  interface FilterSliceState {
    searchValue: string;
    categoryId: CategoryId;
    sort: Sort;
  };