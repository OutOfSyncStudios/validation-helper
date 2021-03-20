// validation-helper.js
const validator = require('validator');

function isNullish(value) {
  return (value === undefined || value === null);
}

function isBase32ApiKey(value) {
  const test1 = /[a-zA-Z0-9]{28}/;
  const test2 = /[a-zA-Z0-9]{7}-[a-zA-Z0-9]{7}-[a-zA-Z0-9]{7}-[a-zA-Z0-9]{7}/;
  return (test1.test(value) || test2.test(value));
}

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
        test = isBase32ApiKey(value.toString());
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
    if (!isNullish(out)) {
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
