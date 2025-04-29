import { GraphQLResolveInfo } from "graphql";
import { AuthUser } from "./auth";

export type GraphQLContext = {
  user: AuthUser;
};

export type ResolverFn<Parent = any, Args = any, Context = GraphQLContext, Return = any> =
  (parent: Parent, args: Args, context: Context, info: GraphQLResolveInfo) => Promise<Return> | Return;
