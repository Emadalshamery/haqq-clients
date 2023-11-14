// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file cosmos/staking/v1beta1/authz.proto (package cosmos.staking.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Coin } from "../../base/v1beta1/coin_pb.js";

/**
 * AuthorizationType defines the type of staking module authorization type
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from enum cosmos.staking.v1beta1.AuthorizationType
 */
export enum AuthorizationType {
  /**
   * AUTHORIZATION_TYPE_UNSPECIFIED specifies an unknown authorization type
   *
   * @generated from enum value: AUTHORIZATION_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * AUTHORIZATION_TYPE_DELEGATE defines an authorization type for Msg/Delegate
   *
   * @generated from enum value: AUTHORIZATION_TYPE_DELEGATE = 1;
   */
  DELEGATE = 1,

  /**
   * AUTHORIZATION_TYPE_UNDELEGATE defines an authorization type for Msg/Undelegate
   *
   * @generated from enum value: AUTHORIZATION_TYPE_UNDELEGATE = 2;
   */
  UNDELEGATE = 2,

  /**
   * AUTHORIZATION_TYPE_REDELEGATE defines an authorization type for Msg/BeginRedelegate
   *
   * @generated from enum value: AUTHORIZATION_TYPE_REDELEGATE = 3;
   */
  REDELEGATE = 3,
}
// Retrieve enum metadata with: proto3.getEnumType(AuthorizationType)
proto3.util.setEnumType(AuthorizationType, "cosmos.staking.v1beta1.AuthorizationType", [
  { no: 0, name: "AUTHORIZATION_TYPE_UNSPECIFIED" },
  { no: 1, name: "AUTHORIZATION_TYPE_DELEGATE" },
  { no: 2, name: "AUTHORIZATION_TYPE_UNDELEGATE" },
  { no: 3, name: "AUTHORIZATION_TYPE_REDELEGATE" },
]);

/**
 * StakeAuthorization defines authorization for delegate/undelegate/redelegate.
 *
 * Since: cosmos-sdk 0.43
 *
 * @generated from message cosmos.staking.v1beta1.StakeAuthorization
 */
export class StakeAuthorization extends Message<StakeAuthorization> {
  /**
   * max_tokens specifies the maximum amount of tokens can be delegate to a validator. If it is
   * empty, there is no spend limit and any amount of coins can be delegated.
   *
   * @generated from field: cosmos.base.v1beta1.Coin max_tokens = 1;
   */
  maxTokens?: Coin;

  /**
   * validators is the oneof that represents either allow_list or deny_list
   *
   * @generated from oneof cosmos.staking.v1beta1.StakeAuthorization.validators
   */
  validators: {
    /**
     * allow_list specifies list of validator addresses to whom grantee can delegate tokens on behalf of granter's
     * account.
     *
     * @generated from field: cosmos.staking.v1beta1.StakeAuthorization.Validators allow_list = 2;
     */
    value: StakeAuthorization_Validators;
    case: "allowList";
  } | {
    /**
     * deny_list specifies list of validator addresses to whom grantee can not delegate tokens.
     *
     * @generated from field: cosmos.staking.v1beta1.StakeAuthorization.Validators deny_list = 3;
     */
    value: StakeAuthorization_Validators;
    case: "denyList";
  } | { case: undefined; value?: undefined } = { case: undefined };

  /**
   * authorization_type defines one of AuthorizationType.
   *
   * @generated from field: cosmos.staking.v1beta1.AuthorizationType authorization_type = 4;
   */
  authorizationType = AuthorizationType.UNSPECIFIED;

  constructor(data?: PartialMessage<StakeAuthorization>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.staking.v1beta1.StakeAuthorization";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "max_tokens", kind: "message", T: Coin },
    { no: 2, name: "allow_list", kind: "message", T: StakeAuthorization_Validators, oneof: "validators" },
    { no: 3, name: "deny_list", kind: "message", T: StakeAuthorization_Validators, oneof: "validators" },
    { no: 4, name: "authorization_type", kind: "enum", T: proto3.getEnumType(AuthorizationType) },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StakeAuthorization {
    return new StakeAuthorization().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StakeAuthorization {
    return new StakeAuthorization().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StakeAuthorization {
    return new StakeAuthorization().fromJsonString(jsonString, options);
  }

  static equals(a: StakeAuthorization | PlainMessage<StakeAuthorization> | undefined, b: StakeAuthorization | PlainMessage<StakeAuthorization> | undefined): boolean {
    return proto3.util.equals(StakeAuthorization, a, b);
  }
}

/**
 * Validators defines list of validator addresses.
 *
 * @generated from message cosmos.staking.v1beta1.StakeAuthorization.Validators
 */
export class StakeAuthorization_Validators extends Message<StakeAuthorization_Validators> {
  /**
   * @generated from field: repeated string address = 1;
   */
  address: string[] = [];

  constructor(data?: PartialMessage<StakeAuthorization_Validators>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.staking.v1beta1.StakeAuthorization.Validators";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "address", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StakeAuthorization_Validators {
    return new StakeAuthorization_Validators().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StakeAuthorization_Validators {
    return new StakeAuthorization_Validators().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StakeAuthorization_Validators {
    return new StakeAuthorization_Validators().fromJsonString(jsonString, options);
  }

  static equals(a: StakeAuthorization_Validators | PlainMessage<StakeAuthorization_Validators> | undefined, b: StakeAuthorization_Validators | PlainMessage<StakeAuthorization_Validators> | undefined): boolean {
    return proto3.util.equals(StakeAuthorization_Validators, a, b);
  }
}

