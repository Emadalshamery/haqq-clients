// @generated by protoc-gen-connect-es v1.1.3 with parameter "target=ts"
// @generated from file haqq/coinomics/v1/query.proto (package haqq.coinomics.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { QueryEraClosingSupplyRequest, QueryEraClosingSupplyResponse, QueryEraRequest, QueryEraResponse, QueryInflationRateRequest, QueryInflationRateResponse, QueryMaxSupplyRequest, QueryMaxSupplyResponse, QueryParamsRequest, QueryParamsResponse } from "./query_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * Query provides defines the gRPC querier service.
 *
 * @generated from service haqq.coinomics.v1.Query
 */
export const Query = {
  typeName: "haqq.coinomics.v1.Query",
  methods: {
    /**
     * Era retrieves current era.
     *
     * @generated from rpc haqq.coinomics.v1.Query.Era
     */
    era: {
      name: "Era",
      I: QueryEraRequest,
      O: QueryEraResponse,
      kind: MethodKind.Unary,
    },
    /**
     * EraTargetSupply retrieves current era target supply.
     *
     * @generated from rpc haqq.coinomics.v1.Query.EraClosingSupply
     */
    eraClosingSupply: {
      name: "EraClosingSupply",
      I: QueryEraClosingSupplyRequest,
      O: QueryEraClosingSupplyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * MaxSupply retrieves total coins of all eras and when mint ended.
     *
     * @generated from rpc haqq.coinomics.v1.Query.MaxSupply
     */
    maxSupply: {
      name: "MaxSupply",
      I: QueryMaxSupplyRequest,
      O: QueryMaxSupplyResponse,
      kind: MethodKind.Unary,
    },
    /**
     * InflationRate retrieves current era inflation rate.
     *
     * @generated from rpc haqq.coinomics.v1.Query.InflationRate
     */
    inflationRate: {
      name: "InflationRate",
      I: QueryInflationRateRequest,
      O: QueryInflationRateResponse,
      kind: MethodKind.Unary,
    },
    /**
     * Params retrieves coinomics moudle params.
     *
     * @generated from rpc haqq.coinomics.v1.Query.Params
     */
    params: {
      name: "Params",
      I: QueryParamsRequest,
      O: QueryParamsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

