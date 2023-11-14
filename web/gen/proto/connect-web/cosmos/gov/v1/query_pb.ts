// Since: cosmos-sdk 0.46

// @generated by protoc-gen-es v1.3.1 with parameter "target=ts"
// @generated from file cosmos/gov/v1/query.proto (package cosmos.gov.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, protoInt64 } from "@bufbuild/protobuf";
import { Deposit, DepositParams, Proposal, ProposalStatus, TallyParams, TallyResult, Vote, VotingParams } from "./gov_pb.js";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";

/**
 * QueryProposalRequest is the request type for the Query/Proposal RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryProposalRequest
 */
export class QueryProposalRequest extends Message<QueryProposalRequest> {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  constructor(data?: PartialMessage<QueryProposalRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryProposalRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryProposalRequest {
    return new QueryProposalRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryProposalRequest {
    return new QueryProposalRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryProposalRequest {
    return new QueryProposalRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryProposalRequest | PlainMessage<QueryProposalRequest> | undefined, b: QueryProposalRequest | PlainMessage<QueryProposalRequest> | undefined): boolean {
    return proto3.util.equals(QueryProposalRequest, a, b);
  }
}

/**
 * QueryProposalResponse is the response type for the Query/Proposal RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryProposalResponse
 */
export class QueryProposalResponse extends Message<QueryProposalResponse> {
  /**
   * @generated from field: cosmos.gov.v1.Proposal proposal = 1;
   */
  proposal?: Proposal;

  constructor(data?: PartialMessage<QueryProposalResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryProposalResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal", kind: "message", T: Proposal },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryProposalResponse {
    return new QueryProposalResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryProposalResponse {
    return new QueryProposalResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryProposalResponse {
    return new QueryProposalResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryProposalResponse | PlainMessage<QueryProposalResponse> | undefined, b: QueryProposalResponse | PlainMessage<QueryProposalResponse> | undefined): boolean {
    return proto3.util.equals(QueryProposalResponse, a, b);
  }
}

/**
 * QueryProposalsRequest is the request type for the Query/Proposals RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryProposalsRequest
 */
export class QueryProposalsRequest extends Message<QueryProposalsRequest> {
  /**
   * proposal_status defines the status of the proposals.
   *
   * @generated from field: cosmos.gov.v1.ProposalStatus proposal_status = 1;
   */
  proposalStatus = ProposalStatus.UNSPECIFIED;

  /**
   * voter defines the voter address for the proposals.
   *
   * @generated from field: string voter = 2;
   */
  voter = "";

  /**
   * depositor defines the deposit addresses from the proposals.
   *
   * @generated from field: string depositor = 3;
   */
  depositor = "";

  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 4;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryProposalsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryProposalsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_status", kind: "enum", T: proto3.getEnumType(ProposalStatus) },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryProposalsRequest {
    return new QueryProposalsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryProposalsRequest {
    return new QueryProposalsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryProposalsRequest {
    return new QueryProposalsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryProposalsRequest | PlainMessage<QueryProposalsRequest> | undefined, b: QueryProposalsRequest | PlainMessage<QueryProposalsRequest> | undefined): boolean {
    return proto3.util.equals(QueryProposalsRequest, a, b);
  }
}

/**
 * QueryProposalsResponse is the response type for the Query/Proposals RPC
 * method.
 *
 * @generated from message cosmos.gov.v1.QueryProposalsResponse
 */
export class QueryProposalsResponse extends Message<QueryProposalsResponse> {
  /**
   * @generated from field: repeated cosmos.gov.v1.Proposal proposals = 1;
   */
  proposals: Proposal[] = [];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryProposalsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryProposalsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposals", kind: "message", T: Proposal, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryProposalsResponse {
    return new QueryProposalsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryProposalsResponse {
    return new QueryProposalsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryProposalsResponse {
    return new QueryProposalsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryProposalsResponse | PlainMessage<QueryProposalsResponse> | undefined, b: QueryProposalsResponse | PlainMessage<QueryProposalsResponse> | undefined): boolean {
    return proto3.util.equals(QueryProposalsResponse, a, b);
  }
}

/**
 * QueryVoteRequest is the request type for the Query/Vote RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryVoteRequest
 */
export class QueryVoteRequest extends Message<QueryVoteRequest> {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * voter defines the voter address for the proposals.
   *
   * @generated from field: string voter = 2;
   */
  voter = "";

  constructor(data?: PartialMessage<QueryVoteRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryVoteRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "voter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVoteRequest {
    return new QueryVoteRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVoteRequest {
    return new QueryVoteRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVoteRequest {
    return new QueryVoteRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryVoteRequest | PlainMessage<QueryVoteRequest> | undefined, b: QueryVoteRequest | PlainMessage<QueryVoteRequest> | undefined): boolean {
    return proto3.util.equals(QueryVoteRequest, a, b);
  }
}

/**
 * QueryVoteResponse is the response type for the Query/Vote RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryVoteResponse
 */
export class QueryVoteResponse extends Message<QueryVoteResponse> {
  /**
   * vote defined the queried vote.
   *
   * @generated from field: cosmos.gov.v1.Vote vote = 1;
   */
  vote?: Vote;

  constructor(data?: PartialMessage<QueryVoteResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryVoteResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "vote", kind: "message", T: Vote },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVoteResponse {
    return new QueryVoteResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVoteResponse {
    return new QueryVoteResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVoteResponse {
    return new QueryVoteResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryVoteResponse | PlainMessage<QueryVoteResponse> | undefined, b: QueryVoteResponse | PlainMessage<QueryVoteResponse> | undefined): boolean {
    return proto3.util.equals(QueryVoteResponse, a, b);
  }
}

/**
 * QueryVotesRequest is the request type for the Query/Votes RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryVotesRequest
 */
export class QueryVotesRequest extends Message<QueryVotesRequest> {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryVotesRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryVotesRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVotesRequest {
    return new QueryVotesRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVotesRequest {
    return new QueryVotesRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVotesRequest {
    return new QueryVotesRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryVotesRequest | PlainMessage<QueryVotesRequest> | undefined, b: QueryVotesRequest | PlainMessage<QueryVotesRequest> | undefined): boolean {
    return proto3.util.equals(QueryVotesRequest, a, b);
  }
}

/**
 * QueryVotesResponse is the response type for the Query/Votes RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryVotesResponse
 */
export class QueryVotesResponse extends Message<QueryVotesResponse> {
  /**
   * votes defined the queried votes.
   *
   * @generated from field: repeated cosmos.gov.v1.Vote votes = 1;
   */
  votes: Vote[] = [];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryVotesResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryVotesResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "votes", kind: "message", T: Vote, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryVotesResponse {
    return new QueryVotesResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryVotesResponse {
    return new QueryVotesResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryVotesResponse {
    return new QueryVotesResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryVotesResponse | PlainMessage<QueryVotesResponse> | undefined, b: QueryVotesResponse | PlainMessage<QueryVotesResponse> | undefined): boolean {
    return proto3.util.equals(QueryVotesResponse, a, b);
  }
}

/**
 * QueryParamsRequest is the request type for the Query/Params RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryParamsRequest
 */
export class QueryParamsRequest extends Message<QueryParamsRequest> {
  /**
   * params_type defines which parameters to query for, can be one of "voting",
   * "tallying" or "deposit".
   *
   * @generated from field: string params_type = 1;
   */
  paramsType = "";

  constructor(data?: PartialMessage<QueryParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "params_type", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsRequest {
    return new QueryParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined, b: QueryParamsRequest | PlainMessage<QueryParamsRequest> | undefined): boolean {
    return proto3.util.equals(QueryParamsRequest, a, b);
  }
}

/**
 * QueryParamsResponse is the response type for the Query/Params RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryParamsResponse
 */
export class QueryParamsResponse extends Message<QueryParamsResponse> {
  /**
   * voting_params defines the parameters related to voting.
   *
   * @generated from field: cosmos.gov.v1.VotingParams voting_params = 1;
   */
  votingParams?: VotingParams;

  /**
   * deposit_params defines the parameters related to deposit.
   *
   * @generated from field: cosmos.gov.v1.DepositParams deposit_params = 2;
   */
  depositParams?: DepositParams;

  /**
   * tally_params defines the parameters related to tally.
   *
   * @generated from field: cosmos.gov.v1.TallyParams tally_params = 3;
   */
  tallyParams?: TallyParams;

  constructor(data?: PartialMessage<QueryParamsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryParamsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "voting_params", kind: "message", T: VotingParams },
    { no: 2, name: "deposit_params", kind: "message", T: DepositParams },
    { no: 3, name: "tally_params", kind: "message", T: TallyParams },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryParamsResponse {
    return new QueryParamsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined, b: QueryParamsResponse | PlainMessage<QueryParamsResponse> | undefined): boolean {
    return proto3.util.equals(QueryParamsResponse, a, b);
  }
}

/**
 * QueryDepositRequest is the request type for the Query/Deposit RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryDepositRequest
 */
export class QueryDepositRequest extends Message<QueryDepositRequest> {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * depositor defines the deposit addresses from the proposals.
   *
   * @generated from field: string depositor = 2;
   */
  depositor = "";

  constructor(data?: PartialMessage<QueryDepositRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryDepositRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "depositor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDepositRequest {
    return new QueryDepositRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDepositRequest {
    return new QueryDepositRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDepositRequest {
    return new QueryDepositRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDepositRequest | PlainMessage<QueryDepositRequest> | undefined, b: QueryDepositRequest | PlainMessage<QueryDepositRequest> | undefined): boolean {
    return proto3.util.equals(QueryDepositRequest, a, b);
  }
}

/**
 * QueryDepositResponse is the response type for the Query/Deposit RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryDepositResponse
 */
export class QueryDepositResponse extends Message<QueryDepositResponse> {
  /**
   * deposit defines the requested deposit.
   *
   * @generated from field: cosmos.gov.v1.Deposit deposit = 1;
   */
  deposit?: Deposit;

  constructor(data?: PartialMessage<QueryDepositResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryDepositResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "deposit", kind: "message", T: Deposit },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDepositResponse {
    return new QueryDepositResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDepositResponse {
    return new QueryDepositResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDepositResponse {
    return new QueryDepositResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDepositResponse | PlainMessage<QueryDepositResponse> | undefined, b: QueryDepositResponse | PlainMessage<QueryDepositResponse> | undefined): boolean {
    return proto3.util.equals(QueryDepositResponse, a, b);
  }
}

/**
 * QueryDepositsRequest is the request type for the Query/Deposits RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryDepositsRequest
 */
export class QueryDepositsRequest extends Message<QueryDepositsRequest> {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryDepositsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryDepositsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDepositsRequest {
    return new QueryDepositsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDepositsRequest {
    return new QueryDepositsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDepositsRequest {
    return new QueryDepositsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDepositsRequest | PlainMessage<QueryDepositsRequest> | undefined, b: QueryDepositsRequest | PlainMessage<QueryDepositsRequest> | undefined): boolean {
    return proto3.util.equals(QueryDepositsRequest, a, b);
  }
}

/**
 * QueryDepositsResponse is the response type for the Query/Deposits RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryDepositsResponse
 */
export class QueryDepositsResponse extends Message<QueryDepositsResponse> {
  /**
   * @generated from field: repeated cosmos.gov.v1.Deposit deposits = 1;
   */
  deposits: Deposit[] = [];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryDepositsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryDepositsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "deposits", kind: "message", T: Deposit, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryDepositsResponse {
    return new QueryDepositsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryDepositsResponse {
    return new QueryDepositsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryDepositsResponse {
    return new QueryDepositsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryDepositsResponse | PlainMessage<QueryDepositsResponse> | undefined, b: QueryDepositsResponse | PlainMessage<QueryDepositsResponse> | undefined): boolean {
    return proto3.util.equals(QueryDepositsResponse, a, b);
  }
}

/**
 * QueryTallyResultRequest is the request type for the Query/Tally RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryTallyResultRequest
 */
export class QueryTallyResultRequest extends Message<QueryTallyResultRequest> {
  /**
   * proposal_id defines the unique id of the proposal.
   *
   * @generated from field: uint64 proposal_id = 1;
   */
  proposalId = protoInt64.zero;

  constructor(data?: PartialMessage<QueryTallyResultRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryTallyResultRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "proposal_id", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTallyResultRequest {
    return new QueryTallyResultRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTallyResultRequest {
    return new QueryTallyResultRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTallyResultRequest {
    return new QueryTallyResultRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTallyResultRequest | PlainMessage<QueryTallyResultRequest> | undefined, b: QueryTallyResultRequest | PlainMessage<QueryTallyResultRequest> | undefined): boolean {
    return proto3.util.equals(QueryTallyResultRequest, a, b);
  }
}

/**
 * QueryTallyResultResponse is the response type for the Query/Tally RPC method.
 *
 * @generated from message cosmos.gov.v1.QueryTallyResultResponse
 */
export class QueryTallyResultResponse extends Message<QueryTallyResultResponse> {
  /**
   * tally defines the requested tally.
   *
   * @generated from field: cosmos.gov.v1.TallyResult tally = 1;
   */
  tally?: TallyResult;

  constructor(data?: PartialMessage<QueryTallyResultResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.gov.v1.QueryTallyResultResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "tally", kind: "message", T: TallyResult },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryTallyResultResponse {
    return new QueryTallyResultResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryTallyResultResponse {
    return new QueryTallyResultResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryTallyResultResponse {
    return new QueryTallyResultResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryTallyResultResponse | PlainMessage<QueryTallyResultResponse> | undefined, b: QueryTallyResultResponse | PlainMessage<QueryTallyResultResponse> | undefined): boolean {
    return proto3.util.equals(QueryTallyResultResponse, a, b);
  }
}

