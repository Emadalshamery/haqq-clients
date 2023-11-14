// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file cosmos/evidence/v1beta1/evidence.proto (package cosmos.evidence.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64, Timestamp } from "@bufbuild/protobuf";

/**
 * Equivocation implements the Evidence interface and defines evidence of double
 * signing misbehavior.
 *
 * @generated from message cosmos.evidence.v1beta1.Equivocation
 */
export class Equivocation extends Message<Equivocation> {
  /**
   * @generated from field: int64 height = 1;
   */
  height = protoInt64.zero;

  /**
   * @generated from field: google.protobuf.Timestamp time = 2;
   */
  time?: Timestamp;

  /**
   * @generated from field: int64 power = 3;
   */
  power = protoInt64.zero;

  /**
   * @generated from field: string consensus_address = 4;
   */
  consensusAddress = "";

  constructor(data?: PartialMessage<Equivocation>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.evidence.v1beta1.Equivocation";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "height", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 2, name: "time", kind: "message", T: Timestamp },
    { no: 3, name: "power", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
    { no: 4, name: "consensus_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Equivocation {
    return new Equivocation().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Equivocation {
    return new Equivocation().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Equivocation {
    return new Equivocation().fromJsonString(jsonString, options);
  }

  static equals(a: Equivocation | PlainMessage<Equivocation> | undefined, b: Equivocation | PlainMessage<Equivocation> | undefined): boolean {
    return proto3.util.equals(Equivocation, a, b);
  }
}

