// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file evmos/erc20/v1/genesis.proto (package evmos.erc20.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { TokenPair } from "./erc20_pb.js";

/**
 * GenesisState defines the module's genesis state.
 *
 * @generated from message evmos.erc20.v1.GenesisState
 */
export class GenesisState extends Message<GenesisState> {
  /**
   * params are the erc20 module parameters at genesis
   *
   * @generated from field: evmos.erc20.v1.Params params = 1;
   */
  params?: Params;

  /**
   * token_pairs is a slice of the registered token pairs at genesis
   *
   * @generated from field: repeated evmos.erc20.v1.TokenPair token_pairs = 2;
   */
  tokenPairs: TokenPair[] = [];

  constructor(data?: PartialMessage<GenesisState>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.erc20.v1.GenesisState";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params", kind: "message", T: Params },
    { no: 2, name: "token_pairs", kind: "message", T: TokenPair, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenesisState {
    return new GenesisState().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenesisState {
    return new GenesisState().fromJsonString(jsonString, options);
  }

  static equals(a: GenesisState | PlainMessage<GenesisState> | undefined, b: GenesisState | PlainMessage<GenesisState> | undefined): boolean {
    return proto3.util.equals(GenesisState, a, b);
  }
}

/**
 * Params defines the erc20 module params
 *
 * @generated from message evmos.erc20.v1.Params
 */
export class Params extends Message<Params> {
  /**
   * enable_erc20 is the parameter to enable the conversion of Cosmos coins <--> ERC20 tokens.
   *
   * @generated from field: bool enable_erc20 = 1;
   */
  enableErc20 = false;

  /**
   * enable_evm_hook is the parameter to enable the EVM hook that converts an ERC20 token to a Cosmos
   * Coin by transferring the Tokens through a MsgEthereumTx to the ModuleAddress Ethereum address.
   *
   * @generated from field: bool enable_evm_hook = 2;
   */
  enableEvmHook = false;

  constructor(data?: PartialMessage<Params>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "evmos.erc20.v1.Params";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "enable_erc20", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
    { no: 2, name: "enable_evm_hook", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Params {
    return new Params().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Params {
    return new Params().fromJsonString(jsonString, options);
  }

  static equals(a: Params | PlainMessage<Params> | undefined, b: Params | PlainMessage<Params> | undefined): boolean {
    return proto3.util.equals(Params, a, b);
  }
}

