export interface HomeFanItem extends RecordAnyForList {
  id: number | string;
  open: boolean;
  title: string;
  icon: string;
  poems?: string[];
}
