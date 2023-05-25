export interface updateAxisPointerType {
  seriesIndex: number;
  dataIndexInside: number;
  dataIndex: number;
  axesInfo: AxesInfo[];
  type: string;
}

export interface AxesInfo {
  axisDim: string;
  axisIndex: number;
  value: number;
}
