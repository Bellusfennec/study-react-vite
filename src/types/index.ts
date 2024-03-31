export interface UserSignIn {
  onSubmit: (event: any) => void;
}
export type Size = "xs" | "sm" | "md" | "lg" | "xl";
export type TextFiledType = "text" | "email" | "password";
export type TextFiledVariant = "default" | "filled" | "unstyled";
export type RadioFiledVariant = "filled" | "outline";

export interface ObjectData {
  [key: string]: string;
}

export type Direction = "ASC" | "DESC";
