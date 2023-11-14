// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file cosmos/nft/v1beta1/event.proto (package cosmos.nft.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * EventSend is emitted on Msg/Send
 *
 * @generated from message cosmos.nft.v1beta1.EventSend
 */
export class EventSend extends Message<EventSend> {
  /**
   * @generated from field: string class_id = 1;
   */
  classId = "";

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  /**
   * @generated from field: string sender = 3;
   */
  sender = "";

  /**
   * @generated from field: string receiver = 4;
   */
  receiver = "";

  constructor(data?: PartialMessage<EventSend>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.EventSend";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventSend {
    return new EventSend().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventSend {
    return new EventSend().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventSend {
    return new EventSend().fromJsonString(jsonString, options);
  }

  static equals(a: EventSend | PlainMessage<EventSend> | undefined, b: EventSend | PlainMessage<EventSend> | undefined): boolean {
    return proto3.util.equals(EventSend, a, b);
  }
}

/**
 * EventMint is emitted on Mint
 *
 * @generated from message cosmos.nft.v1beta1.EventMint
 */
export class EventMint extends Message<EventMint> {
  /**
   * @generated from field: string class_id = 1;
   */
  classId = "";

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  /**
   * @generated from field: string owner = 3;
   */
  owner = "";

  constructor(data?: PartialMessage<EventMint>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.EventMint";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventMint {
    return new EventMint().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventMint {
    return new EventMint().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventMint {
    return new EventMint().fromJsonString(jsonString, options);
  }

  static equals(a: EventMint | PlainMessage<EventMint> | undefined, b: EventMint | PlainMessage<EventMint> | undefined): boolean {
    return proto3.util.equals(EventMint, a, b);
  }
}

/**
 * EventBurn is emitted on Burn
 *
 * @generated from message cosmos.nft.v1beta1.EventBurn
 */
export class EventBurn extends Message<EventBurn> {
  /**
   * @generated from field: string class_id = 1;
   */
  classId = "";

  /**
   * @generated from field: string id = 2;
   */
  id = "";

  /**
   * @generated from field: string owner = 3;
   */
  owner = "";

  constructor(data?: PartialMessage<EventBurn>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.nft.v1beta1.EventBurn";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "class_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EventBurn {
    return new EventBurn().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EventBurn {
    return new EventBurn().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EventBurn {
    return new EventBurn().fromJsonString(jsonString, options);
  }

  static equals(a: EventBurn | PlainMessage<EventBurn> | undefined, b: EventBurn | PlainMessage<EventBurn> | undefined): boolean {
    return proto3.util.equals(EventBurn, a, b);
  }
}

