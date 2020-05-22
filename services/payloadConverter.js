import { parseString } from 'react-native-xml2js';

const XMLtoJSON = xml => {
  let json;
  parseString(xml, (err, result) => {
    if (err) throw err;
    json = result;
  });
  return json;
};

const payloadConverter = {
  XMLtoJSON,
};

export default payloadConverter;
