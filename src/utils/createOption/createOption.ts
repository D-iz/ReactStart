type ICreateOption<L = string> = {
  (label: L, value?: string): { label: L; value: string };
  (label: L, value?: number): { label: L; value: number };
};

export const createOption: ICreateOption = (
  label: any,
  value: any = label
): any => ({ label, value });
