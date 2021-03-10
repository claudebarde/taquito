import { Decoder } from '../decoder';
import { Uint8ArrayConsumer } from '../uint8array-consumer';
import { kindMapping, kindMappingReverse } from '../constants';

export const ManagerOperationSchema = {
  branch: 'branch',
  contents: ['operation'],
};

export const ActivationSchema = {
  pkh: 'tz1',
  secret: 'secret',
};

export const RevealSchema = {
  source: 'pkh',
  fee: 'zarith',
  counter: 'zarith',
  gas_limit: 'zarith',
  storage_limit: 'zarith',
  public_key: 'public_key',
};

export const DelegationSchema = {
  source: 'pkh',
  fee: 'zarith',
  counter: 'zarith',
  gas_limit: 'zarith',
  storage_limit: 'zarith',
  delegate: 'delegate',
};

export const TransactionSchema = {
  source: 'pkh',
  fee: 'zarith',
  counter: 'zarith',
  gas_limit: 'zarith',
  storage_limit: 'zarith',
  amount: 'zarith',
  destination: 'address',
  parameters: 'parameters',
};

export const OriginationSchema = {
  source: 'pkh',
  fee: 'zarith',
  counter: 'zarith',
  gas_limit: 'zarith',
  storage_limit: 'zarith',
  balance: 'zarith',
  delegate: 'delegate',
  script: 'script',
};

export const BallotSchema = {
  source: 'pkh',
  period: 'int32',
  proposal: 'proposal',
  ballot: 'ballotStmt',
};

export const EndorsementSchema = {
  level: 'int32',
};

export const SeedNonceRevelationSchema = {
  level: 'int32',
  nonce: 'raw',
};

export const ProposalsSchema = {
  source: 'pkh',
  period: 'int32',
  proposals: 'proposalArr',
};

export const operationEncoder = (encoders: { [key: string]: (val: {}, protocol?: string) => string }) => (operation: {
  kind: string;
}, protocol?: string) => {
  if (!(operation.kind in encoders) || !(operation.kind in kindMappingReverse)) {
    throw new Error(`Unsupported operation kind: ${operation.kind}`);
  }

  const kind = (operation.kind === 'delegation' && 'version' in operation)? 'delegationSg1': operation.kind
  console.log("Operation: ", operation.kind);
  console.log(operation);
  console.log("Protocol in operation", protocol);
  return kindMappingReverse[kind] + encoders[operation.kind](operation, protocol);
};

export const operationDecoder = (decoders: { [key: string]: Decoder }) => (
  value: Uint8ArrayConsumer
) => {
  const op = value.consume(1);

  const operationName = (op[0] === 0xd2)? 'delegation': kindMapping[op[0]];
  
  const decodedObj = decoders[operationName](value);

if(op[0] === 0xd2) {
    Object.assign(decodedObj, { version: '1' });
  } 

  if (typeof decodedObj !== 'object') {
    throw new Error('Decoded invalid operation');
  }

  if (operationName) {
    return {
      kind: operationName,
      ...decodedObj,
    };
  } else {
    throw new Error(`Unsupported operation ${op[0]}`);
  }
};

export const schemaEncoder = (encoders: { [key: string]: (val: {}, protocol?: string) => string }) => (schema: {
  [key: string]: string | string[];
}) => <T extends { [key: string]: any }> (value: T, protocol?: string) => {
  console.log("Schema: ", schema);
  console.log("Value: ", value);
  console.log("Protocol: ", protocol);

  const keys = Object.keys(schema);
  return keys.reduce((prev, key) => {
    const valueToEncode = schema[key];
    console.log("Key to encode: ", key);
    if (Array.isArray(valueToEncode)) {
      const encoder = encoders[valueToEncode[0]];
      const values = value[key];
      console.log("value to encode: ", valueToEncode[0]);
      console.log(encoder.toString());

      if (!Array.isArray(values)) {
        throw new Error(`Exepected value to be Array ${JSON.stringify(values)}`);
      }
      console.log("values: ", values);
      console.log("return: ", prev + values.reduce((prevBytes, current) => prevBytes + encoder(current, protocol), ''));
      return prev + values.reduce((prevBytes, current) => prevBytes + encoder(current, protocol), '');
    } else {
      console.log("Value: ", value);
      console.log("valuencode: ", valueToEncode);
      console.log("Key: ", key);
      console.log("Protocol: ", protocol);
      console.log("Prev: "+prev);
      
      const encoder = encoders[valueToEncode];
      
      console.log("return 2: ", prev + encoder(value[key], protocol));
      return prev + encoder(value[key], protocol);
    }
  });
};

export const schemaDecoder = (decoders: { [key: string]: Decoder }) => (schema: {
  [key: string]: string | string[];
}) => (value: Uint8ArrayConsumer) => {
  const keys = Object.keys(schema);
  return keys.reduce((prev, key) => {
    const valueToEncode = schema[key];

    if (Array.isArray(valueToEncode)) {
      const decoder = decoders[valueToEncode[0]];

      const decoded = [];
      let lastLength = value.length();
      while (value.length() > 0) {
        decoded.push(decoder(value));

        if (lastLength === value.length()) {
          throw new Error('Unable to decode value')
        }
      }

      return {
        ...prev,
        [key]: decoded,
      };
    } else {
      const decoder = decoders[valueToEncode];

      const result = decoder(value);

      if (result) {
        return {
          ...prev,
          [key]: result,
        };
      } else {
        return {
          ...prev,
        };
      }
    }
  }, {});
};
