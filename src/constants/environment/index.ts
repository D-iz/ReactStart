export enum PAGE_NAME {
  HOME = "HOME",
  CREATIVES_TABLE = "CREATIVES_TABLE",
  LOGS = "LOGS",
}

export const DEPEND_BY_PRODUCT_PAGE = [
  PAGE_NAME.CREATIVES_TABLE,
  PAGE_NAME.LOGS,
];

export const CREATIVES_TABLE_HEADER = ["Video", "Preview", "Contained in"];

export const ALL_OPTIONS_SELECT = {
  label: "Select all",
  value: 0,
};

export const SERVER_URL = "http://127.0.0.1:9090";

export const DEFAULT_PREVIEW_PRODUCT =
  "https://d2fs58k4ez69fv.cloudfront.net/b1bc7ae1599690c8da3e1d2389d313738c22110af073a009295ef6e31c24623c";
