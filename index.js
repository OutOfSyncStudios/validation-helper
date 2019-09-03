// validation-helper.js

const __ = require('@outofsync/lodash-ex');
const validator = require('validator');
const uuidAPIKey = require('uuid-apikey');

class Validator {
  constructor() {}

  validate(value, type, options) {
    let test = true;
    switch (type) {
      case 'int':
      case 'integer':
        test = validator.isInt(value.toString(), options);
        break;
      case 'float':
        test = validator.isFloat(value.toString(), options);
        break;
      case 'bool':
      case 'boolean':
        test = validator.isBoolean(value.toString());
        break;
      case 'email':
        test = validator.isEmail(value.toString(), options);
        break;
      case 'currency':
        test = validator.isCurrency(value.toString(), options);
        break;
      case 'uuid':
        test = validator.isUUID(value.toString());
        break;
      case 'url':
        test = validator.isURL(value.toString(), options);
        break;
      case 'fqdn':
        test = validator.isFQDN(value.toString(), options);
        break;
      case 'apikey':
        test = uuidAPIKey.isAPIKey(value.toString());
        break;
      case 'string':
      case 'any':
      default:
        break;
    }
    return test;
  }

  convert(value, type) {
    let out = value;
    if (__.hasValue(out)) {
      switch (type) {
        case 'int':
        case 'integer':
          out = parseInt(value);
          break;
        case 'float':
          out = parseFloat(value);
          break;
        case 'bool':
        case 'boolean':
          out = this.strToBool(value);
          break;
        default:
          break;
      }
    }
    return out;
  }

  strToBool(str) {
    switch (str.toString().toLowerCase()
      .trim()) {
      case 'true':
      case 'yes':
      case '1':
        return true;
      case 'false':
      case 'no':
      case '0':
      case '':
      case null:
        return false;
      default:
        return false;
    }
  }
}

module.exports = new Validator();
