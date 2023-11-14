// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file cosmos/distribution/v1beta1/tx.proto (package cosmos.distribution.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MsgFundCommunityPool, MsgFundCommunityPoolResponse, MsgSetWithdrawAddress, MsgSetWithdrawAddressResponse, MsgWithdrawDelegatorReward, MsgWithdrawDelegatorRewardResponse, MsgWithdrawValidatorCommission, MsgWithdrawValidatorCommissionResponse } from "./tx_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Msg defines the distribution Msg service.
 *
 * @generated from service cosmos.distribution.v1beta1.Msg
 */
export const Msg = {
  typeName: "cosmos.distribution.v1beta1.Msg",
  methods: {
    /**
     * SetWithdrawAddress defines a method to change the withdraw address
     * for a delegator (or validator self-delegation).
     *
     * @generated from rpc cosmos.distribution.v1beta1.Msg.SetWithdrawAddress
     */
    setWithdrawAddress: {
      name: "SetWithdrawAddress",
      I: MsgSetWithdrawAddress,
      O: MsgSetWithdrawAddressResponse,
      kind: MethodKind.Unary,
    },
    /**
     * WithdrawDelegatorReward defines a method to withdraw rewards of delegator
     * from a single validator.
     *
     * @generated from rpc cosmos.distribution.v1beta1.Msg.WithdrawDelegatorReward
     */
    withdrawDelegatorReward: {
      name: "WithdrawDelegatorReward",
      I: MsgWithdrawDelegatorReward,
      O: MsgWithdrawDelegatorRewardResponse,
      kind: MethodKind.Unary,
    },
    /**
     * WithdrawValidatorCommission defines a method to withdraw the
     * full commission to the validator address.
     *
     * @generated from rpc cosmos.distribution.v1beta1.Msg.WithdrawValidatorCommission
     */
    withdrawValidatorCommission: {
      name: "WithdrawValidatorCommission",
      I: MsgWithdrawValidatorCommission,
      O: MsgWithdrawValidatorCommissionResponse,
      kind: MethodKind.Unary,
    },
    /**
     * FundCommunityPool defines a method to allow an account to directly
     * fund the community pool.
     *
     * @generated from rpc cosmos.distribution.v1beta1.Msg.FundCommunityPool
     */
    fundCommunityPool: {
      name: "FundCommunityPool",
      I: MsgFundCommunityPool,
      O: MsgFundCommunityPoolResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

