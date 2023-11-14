// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file cosmos/crypto/secp256k1/keys.proto (package cosmos.crypto.secp256k1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 *
 * @generated from message cosmos.crypto.secp256k1.PubKey
 */
export class PubKey extends Message<PubKey> {
  /**
   * @generated from field: bytes key = 1;
   */
  key = new Uint8Array(0);

  constructor(data?: PartialMessage<PubKey>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.crypto.secp256k1.PubKey";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PubKey {
    return new PubKey().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PubKey {
    return new PubKey().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PubKey {
    return new PubKey().fromJsonString(jsonString, options);
  }

  static equals(a: PubKey | PlainMessage<PubKey> | undefined, b: PubKey | PlainMessage<PubKey> | undefined): boolean {
    return proto3.util.equals(PubKey, a, b);
  }
}

/**
 * PrivKey defines a secp256k1 private key.
 *
 * @generated from message cosmos.crypto.secp256k1.PrivKey
 */
export class PrivKey extends Message<PrivKey> {
  /**
   * @generated from field: bytes key = 1;
   */
  key = new Uint8Array(0);

  constructor(data?: PartialMessage<PrivKey>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.crypto.secp256k1.PrivKey";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "key", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PrivKey {
    return new PrivKey().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PrivKey {
    return new PrivKey().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PrivKey {
    return new PrivKey().fromJsonString(jsonString, options);
  }

  static equals(a: PrivKey | PlainMessage<PrivKey> | undefined, b: PrivKey | PlainMessage<PrivKey> | undefined): boolean {
    return proto3.util.equals(PrivKey, a, b);
  }
}

