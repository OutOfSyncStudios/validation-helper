declare module '@outofsync/validation-helper';

declare class Validator {
  constructor();
  validate(value: any, type: string, options: any): boolean;
  convert(value: any, type: string): any;
  strToBool(str: string): boolean;
}

declare const obj: Validator;
export default obj;