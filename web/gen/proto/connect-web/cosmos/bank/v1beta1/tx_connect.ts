// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file cosmos/bank/v1beta1/tx.proto (package cosmos.bank.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgMultiSend, MsgMultiSendResponse, MsgSend, MsgSendResponse } from "./tx_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Msg defines the bank Msg service.
 *
 * @generated from service cosmos.bank.v1beta1.Msg
 */
export const Msg = {
  typeName: "cosmos.bank.v1beta1.Msg",
  methods: {
    /**
     * Send defines a method for sending coins from one account to another account.
     *
     * @generated from rpc cosmos.bank.v1beta1.Msg.Send
     */
    send: {
      name: "Send",
      I: MsgSend,
      O: MsgSendResponse,
      kind: MethodKind.Unary,
    },
    /**
     * MultiSend defines a method for sending coins from some accounts to other accounts.
     *
     * @generated from rpc cosmos.bank.v1beta1.Msg.MultiSend
     */
    multiSend: {
      name: "MultiSend",
      I: MsgMultiSend,
      O: MsgMultiSendResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

