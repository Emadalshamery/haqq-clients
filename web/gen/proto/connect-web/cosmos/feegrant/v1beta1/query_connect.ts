// Since: cosmos-sdk 0.43

// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file cosmos/feegrant/v1beta1/query.proto (package cosmos.feegrant.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryAllowanceRequest, QueryAllowanceResponse, QueryAllowancesByGranterRequest, QueryAllowancesByGranterResponse, QueryAllowancesRequest, QueryAllowancesResponse } from "./query_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Query defines the gRPC querier service.
 *
 * @generated from service cosmos.feegrant.v1beta1.Query
 */
export const Query = {
  typeName: "cosmos.feegrant.v1beta1.Query",
  methods: {
    /**
     * Allowance returns fee granted to the grantee by the granter.
     *
     * @generated from rpc cosmos.feegrant.v1beta1.Query.Allowance
     */
    allowance: {
      name: "Allowance",
      I: QueryAllowanceRequest,
      O: QueryAllowanceResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Allowances returns all the grants for address.
     *
     * @generated from rpc cosmos.feegrant.v1beta1.Query.Allowances
     */
    allowances: {
      name: "Allowances",
      I: QueryAllowancesRequest,
      O: QueryAllowancesResponse,
      kind: MethodKind.Unary,
    },
    /**
     * AllowancesByGranter returns all the grants given by an address
     *
     * Since: cosmos-sdk 0.46
     *
     * @generated from rpc cosmos.feegrant.v1beta1.Query.AllowancesByGranter
     */
    allowancesByGranter: {
      name: "AllowancesByGranter",
      I: QueryAllowancesByGranterRequest,
      O: QueryAllowancesByGranterResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

