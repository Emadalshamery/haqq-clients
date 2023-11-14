// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file cosmos/staking/v1beta1/query.proto (package cosmos.staking.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryDelegationRequest, QueryDelegationResponse, QueryDelegatorDelegationsRequest, QueryDelegatorDelegationsResponse, QueryDelegatorUnbondingDelegationsRequest, QueryDelegatorUnbondingDelegationsResponse, QueryDelegatorValidatorRequest, QueryDelegatorValidatorResponse, QueryDelegatorValidatorsRequest, QueryDelegatorValidatorsResponse, QueryHistoricalInfoRequest, QueryHistoricalInfoResponse, QueryParamsRequest, QueryParamsResponse, QueryPoolRequest, QueryPoolResponse, QueryRedelegationsRequest, QueryRedelegationsResponse, QueryUnbondingDelegationRequest, QueryUnbondingDelegationResponse, QueryValidatorDelegationsRequest, QueryValidatorDelegationsResponse, QueryValidatorRequest, QueryValidatorResponse, QueryValidatorsRequest, QueryValidatorsResponse, QueryValidatorUnbondingDelegationsRequest, QueryValidatorUnbondingDelegationsResponse } from "./query_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Query defines the gRPC querier service.
 *
 * @generated from service cosmos.staking.v1beta1.Query
 */
export const Query = {
  typeName: "cosmos.staking.v1beta1.Query",
  methods: {
    /**
     * Validators queries all validators that match the given status.
     *
     * @generated from rpc cosmos.staking.v1beta1.Query.Validators
     */
    validators: {
      name: "Validators",
      I: QueryValidatorsRequest,
      O: QueryValidatorsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Validator queries validator info for given validator address.
     *
     * @generated from rpc cosmos.staking.v1beta1.Query.Validator
     */
    validator: {
      name: "Validator",
      I: QueryValidatorRequest,
      O: QueryValidatorResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ValidatorDelegations queries delegate info for given validator.
     *
     * @generated from rpc cosmos.staking.v1beta1.Query.ValidatorDelegations
     */
    validatorDelegations: {
      name: "ValidatorDelegations",
      I: QueryValidatorDelegationsRequest,
      O: QueryValidatorDelegationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ValidatorUnbondingDelegations queries unbonding delegations of a validator.
     *
     * @generated from rpc cosmos.staking.v1beta1.Query.ValidatorUnbondingDelegations
     */
    validatorUnbondingDelegations: {
      name: "ValidatorUnbondingDelegations",
      I: QueryValidatorUnbondingDelegationsRequest,
      O: QueryValidatorUnbondingDelegationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Delegation queries delegate info for given validator delegator pair.
     *
     * @generated from rpc cosmos.staking.v1beta1.Query.Delegation
     */
    delegation: {
      name: "Delegation",
      I: QueryDelegationRequest,
      O: QueryDelegationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UnbondingDelegation queries unbonding info for given validator delegator
     * pair.
     *
     * @generated from rpc cosmos.staking.v1beta1.Query.UnbondingDelegation
     */
    unbondingDelegation: {
      name: "UnbondingDelegation",
      I: QueryUnbondingDelegationRequest,
      O: QueryUnbondingDelegationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DelegatorDelegations queries all delegations of a given delegator address.
     *
     * @generated from rpc cosmos.staking.v1beta1.Query.DelegatorDelegations
     */
    delegatorDelegations: {
      name: "DelegatorDelegations",
      I: QueryDelegatorDelegationsRequest,
      O: QueryDelegatorDelegationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DelegatorUnbondingDelegations queries all unbonding delegations of a given
     * delegator address.
     *
     * @generated from rpc cosmos.staking.v1beta1.Query.DelegatorUnbondingDelegations
     */
    delegatorUnbondingDelegations: {
      name: "DelegatorUnbondingDelegations",
      I: QueryDelegatorUnbondingDelegationsRequest,
      O: QueryDelegatorUnbondingDelegationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Redelegations queries redelegations of given address.
     *
     * @generated from rpc cosmos.staking.v1beta1.Query.Redelegations
     */
    redelegations: {
      name: "Redelegations",
      I: QueryRedelegationsRequest,
      O: QueryRedelegationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DelegatorValidators queries all validators info for given delegator
     * address.
     *
     * @generated from rpc cosmos.staking.v1beta1.Query.DelegatorValidators
     */
    delegatorValidators: {
      name: "DelegatorValidators",
      I: QueryDelegatorValidatorsRequest,
      O: QueryDelegatorValidatorsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DelegatorValidator queries validator info for given delegator validator
     * pair.
     *
     * @generated from rpc cosmos.staking.v1beta1.Query.DelegatorValidator
     */
    delegatorValidator: {
      name: "DelegatorValidator",
      I: QueryDelegatorValidatorRequest,
      O: QueryDelegatorValidatorResponse,
      kind: MethodKind.Unary,
    },
    /**
     * HistoricalInfo queries the historical info for given height.
     *
     * @generated from rpc cosmos.staking.v1beta1.Query.HistoricalInfo
     */
    historicalInfo: {
      name: "HistoricalInfo",
      I: QueryHistoricalInfoRequest,
      O: QueryHistoricalInfoResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Pool queries the pool info.
     *
     * @generated from rpc cosmos.staking.v1beta1.Query.Pool
     */
    pool: {
      name: "Pool",
      I: QueryPoolRequest,
      O: QueryPoolResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Parameters queries the staking parameters.
     *
     * @generated from rpc cosmos.staking.v1beta1.Query.Params
     */
    params: {
      name: "Params",
      I: QueryParamsRequest,
      O: QueryParamsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

