// Code generated by Prisma (prisma@1.32.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  route: (where?: RouteWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  route: (where: RouteWhereUniqueInput) => RouteNullablePromise;
  routes: (args?: {
    where?: RouteWhereInput;
    orderBy?: RouteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Route>;
  routesConnection: (args?: {
    where?: RouteWhereInput;
    orderBy?: RouteOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => RouteConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createRoute: (data: RouteCreateInput) => RoutePromise;
  updateRoute: (args: {
    data: RouteUpdateInput;
    where: RouteWhereUniqueInput;
  }) => RoutePromise;
  updateManyRoutes: (args: {
    data: RouteUpdateManyMutationInput;
    where?: RouteWhereInput;
  }) => BatchPayloadPromise;
  upsertRoute: (args: {
    where: RouteWhereUniqueInput;
    create: RouteCreateInput;
    update: RouteUpdateInput;
  }) => RoutePromise;
  deleteRoute: (where: RouteWhereUniqueInput) => RoutePromise;
  deleteManyRoutes: (where?: RouteWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  route: (
    where?: RouteSubscriptionWhereInput
  ) => RouteSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type RouteOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "title_ASC"
  | "title_DESC"
  | "points_ASC"
  | "points_DESC"
  | "attempts_ASC"
  | "attempts_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type RouteWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface RouteWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  title?: Maybe<String>;
  title_not?: Maybe<String>;
  title_in?: Maybe<String[] | String>;
  title_not_in?: Maybe<String[] | String>;
  title_lt?: Maybe<String>;
  title_lte?: Maybe<String>;
  title_gt?: Maybe<String>;
  title_gte?: Maybe<String>;
  title_contains?: Maybe<String>;
  title_not_contains?: Maybe<String>;
  title_starts_with?: Maybe<String>;
  title_not_starts_with?: Maybe<String>;
  title_ends_with?: Maybe<String>;
  title_not_ends_with?: Maybe<String>;
  points?: Maybe<Int>;
  points_not?: Maybe<Int>;
  points_in?: Maybe<Int[] | Int>;
  points_not_in?: Maybe<Int[] | Int>;
  points_lt?: Maybe<Int>;
  points_lte?: Maybe<Int>;
  points_gt?: Maybe<Int>;
  points_gte?: Maybe<Int>;
  attempts?: Maybe<Int>;
  attempts_not?: Maybe<Int>;
  attempts_in?: Maybe<Int[] | Int>;
  attempts_not_in?: Maybe<Int[] | Int>;
  attempts_lt?: Maybe<Int>;
  attempts_lte?: Maybe<Int>;
  attempts_gt?: Maybe<Int>;
  attempts_gte?: Maybe<Int>;
  AND?: Maybe<RouteWhereInput[] | RouteWhereInput>;
  OR?: Maybe<RouteWhereInput[] | RouteWhereInput>;
  NOT?: Maybe<RouteWhereInput[] | RouteWhereInput>;
}

export interface RouteCreateInput {
  id?: Maybe<ID_Input>;
  title: String;
  points: Int;
  attempts: Int;
}

export interface RouteUpdateInput {
  title?: Maybe<String>;
  points?: Maybe<Int>;
  attempts?: Maybe<Int>;
}

export interface RouteUpdateManyMutationInput {
  title?: Maybe<String>;
  points?: Maybe<Int>;
  attempts?: Maybe<Int>;
}

export interface RouteSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<RouteWhereInput>;
  AND?: Maybe<RouteSubscriptionWhereInput[] | RouteSubscriptionWhereInput>;
  OR?: Maybe<RouteSubscriptionWhereInput[] | RouteSubscriptionWhereInput>;
  NOT?: Maybe<RouteSubscriptionWhereInput[] | RouteSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Route {
  id: ID_Output;
  createdAt: DateTimeOutput;
  title: String;
  points: Int;
  attempts: Int;
}

export interface RoutePromise extends Promise<Route>, Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  points: () => Promise<Int>;
  attempts: () => Promise<Int>;
}

export interface RouteSubscription
  extends Promise<AsyncIterator<Route>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  points: () => Promise<AsyncIterator<Int>>;
  attempts: () => Promise<AsyncIterator<Int>>;
}

export interface RouteNullablePromise
  extends Promise<Route | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  points: () => Promise<Int>;
  attempts: () => Promise<Int>;
}

export interface RouteConnection {
  pageInfo: PageInfo;
  edges: RouteEdge[];
}

export interface RouteConnectionPromise
  extends Promise<RouteConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<RouteEdge>>() => T;
  aggregate: <T = AggregateRoutePromise>() => T;
}

export interface RouteConnectionSubscription
  extends Promise<AsyncIterator<RouteConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<RouteEdgeSubscription>>>() => T;
  aggregate: <T = AggregateRouteSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface RouteEdge {
  node: Route;
  cursor: String;
}

export interface RouteEdgePromise extends Promise<RouteEdge>, Fragmentable {
  node: <T = RoutePromise>() => T;
  cursor: () => Promise<String>;
}

export interface RouteEdgeSubscription
  extends Promise<AsyncIterator<RouteEdge>>,
    Fragmentable {
  node: <T = RouteSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateRoute {
  count: Int;
}

export interface AggregateRoutePromise
  extends Promise<AggregateRoute>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateRouteSubscription
  extends Promise<AsyncIterator<AggregateRoute>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface RouteSubscriptionPayload {
  mutation: MutationType;
  node: Route;
  updatedFields: String[];
  previousValues: RoutePreviousValues;
}

export interface RouteSubscriptionPayloadPromise
  extends Promise<RouteSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = RoutePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = RoutePreviousValuesPromise>() => T;
}

export interface RouteSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<RouteSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = RouteSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = RoutePreviousValuesSubscription>() => T;
}

export interface RoutePreviousValues {
  id: ID_Output;
  createdAt: DateTimeOutput;
  title: String;
  points: Int;
  attempts: Int;
}

export interface RoutePreviousValuesPromise
  extends Promise<RoutePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  title: () => Promise<String>;
  points: () => Promise<Int>;
  attempts: () => Promise<Int>;
}

export interface RoutePreviousValuesSubscription
  extends Promise<AsyncIterator<RoutePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  title: () => Promise<AsyncIterator<String>>;
  points: () => Promise<AsyncIterator<Int>>;
  attempts: () => Promise<AsyncIterator<Int>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Route",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const prisma: Prisma;