
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Gym
 * 
 */
export type Gym = $Result.DefaultSelection<Prisma.$GymPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Asistencia
 * 
 */
export type Asistencia = $Result.DefaultSelection<Prisma.$AsistenciaPayload>
/**
 * Model Pago
 * 
 */
export type Pago = $Result.DefaultSelection<Prisma.$PagoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.gym`: Exposes CRUD operations for the **Gym** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gyms
    * const gyms = await prisma.gym.findMany()
    * ```
    */
  get gym(): Prisma.GymDelegate<ExtArgs>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs>;

  /**
   * `prisma.asistencia`: Exposes CRUD operations for the **Asistencia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Asistencias
    * const asistencias = await prisma.asistencia.findMany()
    * ```
    */
  get asistencia(): Prisma.AsistenciaDelegate<ExtArgs>;

  /**
   * `prisma.pago`: Exposes CRUD operations for the **Pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pago.findMany()
    * ```
    */
  get pago(): Prisma.PagoDelegate<ExtArgs>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 78caf6feeaed953168c64e15a249c3e9a033ebe2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    Gym: 'Gym',
    Plan: 'Plan',
    Member: 'Member',
    Asistencia: 'Asistencia',
    Pago: 'Pago',
    Usuario: 'Usuario'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'role' | 'gym' | 'plan' | 'member' | 'asistencia' | 'pago' | 'usuario'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Gym: {
        payload: Prisma.$GymPayload<ExtArgs>
        fields: Prisma.GymFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GymFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GymPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GymFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          findFirst: {
            args: Prisma.GymFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GymPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GymFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          findMany: {
            args: Prisma.GymFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GymPayload>[]
          }
          create: {
            args: Prisma.GymCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          createMany: {
            args: Prisma.GymCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GymDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          update: {
            args: Prisma.GymUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          deleteMany: {
            args: Prisma.GymDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GymUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GymUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GymPayload>
          }
          aggregate: {
            args: Prisma.GymAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGym>
          }
          groupBy: {
            args: Prisma.GymGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GymGroupByOutputType>[]
          }
          count: {
            args: Prisma.GymCountArgs<ExtArgs>,
            result: $Utils.Optional<GymCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>,
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>,
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Asistencia: {
        payload: Prisma.$AsistenciaPayload<ExtArgs>
        fields: Prisma.AsistenciaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsistenciaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsistenciaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          findFirst: {
            args: Prisma.AsistenciaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsistenciaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          findMany: {
            args: Prisma.AsistenciaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>[]
          }
          create: {
            args: Prisma.AsistenciaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          createMany: {
            args: Prisma.AsistenciaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AsistenciaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          update: {
            args: Prisma.AsistenciaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          deleteMany: {
            args: Prisma.AsistenciaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AsistenciaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AsistenciaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AsistenciaPayload>
          }
          aggregate: {
            args: Prisma.AsistenciaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAsistencia>
          }
          groupBy: {
            args: Prisma.AsistenciaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AsistenciaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsistenciaCountArgs<ExtArgs>,
            result: $Utils.Optional<AsistenciaCountAggregateOutputType> | number
          }
        }
      }
      Pago: {
        payload: Prisma.$PagoPayload<ExtArgs>
        fields: Prisma.PagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findFirst: {
            args: Prisma.PagoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findMany: {
            args: Prisma.PagoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          create: {
            args: Prisma.PagoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          createMany: {
            args: Prisma.PagoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PagoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          update: {
            args: Prisma.PagoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          deleteMany: {
            args: Prisma.PagoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PagoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PagoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          aggregate: {
            args: Prisma.PagoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePago>
          }
          groupBy: {
            args: Prisma.PagoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagoCountArgs<ExtArgs>,
            result: $Utils.Optional<PagoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    Member: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Member?: boolean | PlanCountOutputTypeCountMemberArgs
  }

  // Custom InputTypes

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
  }



  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    Asistencia: number
    Pago: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Asistencia?: boolean | MemberCountOutputTypeCountAsistenciaArgs
    Pago?: boolean | MemberCountOutputTypeCountPagoArgs
  }

  // Custom InputTypes

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountAsistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
  }


  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountPagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Usuario?: boolean | Role$UsuarioArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Usuario?: boolean | Role$UsuarioArgs<ExtArgs>
  }


  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      Usuario: Prisma.$UsuarioPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }


  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleCreateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     *     @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     *     @example
     *     // Create many Roles
     *     const role = await prisma.role.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Usuario<T extends Role$UsuarioArgs<ExtArgs> = {}>(args?: Subset<T, Role$UsuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly nombre: FieldRef<"Role", 'String'>
    readonly descripcion: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }


  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }


  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }


  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }


  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }


  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }


  /**
   * Role.Usuario
   */
  export type Role$UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }


  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
  }



  /**
   * Model Gym
   */

  export type AggregateGym = {
    _count: GymCountAggregateOutputType | null
    _avg: GymAvgAggregateOutputType | null
    _sum: GymSumAggregateOutputType | null
    _min: GymMinAggregateOutputType | null
    _max: GymMaxAggregateOutputType | null
  }

  export type GymAvgAggregateOutputType = {
    id: number | null
  }

  export type GymSumAggregateOutputType = {
    id: number | null
  }

  export type GymMinAggregateOutputType = {
    id: number | null
    ruc: string | null
    nombre: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
  }

  export type GymMaxAggregateOutputType = {
    id: number | null
    ruc: string | null
    nombre: string | null
    direccion: string | null
    telefono: string | null
    email: string | null
  }

  export type GymCountAggregateOutputType = {
    id: number
    ruc: number
    nombre: number
    direccion: number
    telefono: number
    email: number
    _all: number
  }


  export type GymAvgAggregateInputType = {
    id?: true
  }

  export type GymSumAggregateInputType = {
    id?: true
  }

  export type GymMinAggregateInputType = {
    id?: true
    ruc?: true
    nombre?: true
    direccion?: true
    telefono?: true
    email?: true
  }

  export type GymMaxAggregateInputType = {
    id?: true
    ruc?: true
    nombre?: true
    direccion?: true
    telefono?: true
    email?: true
  }

  export type GymCountAggregateInputType = {
    id?: true
    ruc?: true
    nombre?: true
    direccion?: true
    telefono?: true
    email?: true
    _all?: true
  }

  export type GymAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gym to aggregate.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Gyms
    **/
    _count?: true | GymCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GymAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GymSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GymMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GymMaxAggregateInputType
  }

  export type GetGymAggregateType<T extends GymAggregateArgs> = {
        [P in keyof T & keyof AggregateGym]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGym[P]>
      : GetScalarType<T[P], AggregateGym[P]>
  }




  export type GymGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GymWhereInput
    orderBy?: GymOrderByWithAggregationInput | GymOrderByWithAggregationInput[]
    by: GymScalarFieldEnum[] | GymScalarFieldEnum
    having?: GymScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GymCountAggregateInputType | true
    _avg?: GymAvgAggregateInputType
    _sum?: GymSumAggregateInputType
    _min?: GymMinAggregateInputType
    _max?: GymMaxAggregateInputType
  }

  export type GymGroupByOutputType = {
    id: number
    ruc: string
    nombre: string
    direccion: string
    telefono: string
    email: string
    _count: GymCountAggregateOutputType | null
    _avg: GymAvgAggregateOutputType | null
    _sum: GymSumAggregateOutputType | null
    _min: GymMinAggregateOutputType | null
    _max: GymMaxAggregateOutputType | null
  }

  type GetGymGroupByPayload<T extends GymGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GymGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GymGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GymGroupByOutputType[P]>
            : GetScalarType<T[P], GymGroupByOutputType[P]>
        }
      >
    >


  export type GymSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ruc?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
  }, ExtArgs["result"]["gym"]>

  export type GymSelectScalar = {
    id?: boolean
    ruc?: boolean
    nombre?: boolean
    direccion?: boolean
    telefono?: boolean
    email?: boolean
  }


  export type $GymPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Gym"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ruc: string
      nombre: string
      direccion: string
      telefono: string
      email: string
    }, ExtArgs["result"]["gym"]>
    composites: {}
  }


  type GymGetPayload<S extends boolean | null | undefined | GymDefaultArgs> = $Result.GetResult<Prisma.$GymPayload, S>

  type GymCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GymFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GymCountAggregateInputType | true
    }

  export interface GymDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Gym'], meta: { name: 'Gym' } }
    /**
     * Find zero or one Gym that matches the filter.
     * @param {GymFindUniqueArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GymFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GymFindUniqueArgs<ExtArgs>>
    ): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Gym that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GymFindUniqueOrThrowArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GymFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GymFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Gym that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindFirstArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GymFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GymFindFirstArgs<ExtArgs>>
    ): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Gym that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindFirstOrThrowArgs} args - Arguments to find a Gym
     * @example
     * // Get one Gym
     * const gym = await prisma.gym.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GymFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GymFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Gyms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gyms
     * const gyms = await prisma.gym.findMany()
     * 
     * // Get first 10 Gyms
     * const gyms = await prisma.gym.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gymWithIdOnly = await prisma.gym.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GymFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GymFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Gym.
     * @param {GymCreateArgs} args - Arguments to create a Gym.
     * @example
     * // Create one Gym
     * const Gym = await prisma.gym.create({
     *   data: {
     *     // ... data to create a Gym
     *   }
     * })
     * 
    **/
    create<T extends GymCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GymCreateArgs<ExtArgs>>
    ): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Gyms.
     *     @param {GymCreateManyArgs} args - Arguments to create many Gyms.
     *     @example
     *     // Create many Gyms
     *     const gym = await prisma.gym.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GymCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GymCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Gym.
     * @param {GymDeleteArgs} args - Arguments to delete one Gym.
     * @example
     * // Delete one Gym
     * const Gym = await prisma.gym.delete({
     *   where: {
     *     // ... filter to delete one Gym
     *   }
     * })
     * 
    **/
    delete<T extends GymDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GymDeleteArgs<ExtArgs>>
    ): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Gym.
     * @param {GymUpdateArgs} args - Arguments to update one Gym.
     * @example
     * // Update one Gym
     * const gym = await prisma.gym.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GymUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GymUpdateArgs<ExtArgs>>
    ): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Gyms.
     * @param {GymDeleteManyArgs} args - Arguments to filter Gyms to delete.
     * @example
     * // Delete a few Gyms
     * const { count } = await prisma.gym.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GymDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GymDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gyms
     * const gym = await prisma.gym.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GymUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GymUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gym.
     * @param {GymUpsertArgs} args - Arguments to update or create a Gym.
     * @example
     * // Update or create a Gym
     * const gym = await prisma.gym.upsert({
     *   create: {
     *     // ... data to create a Gym
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gym we want to update
     *   }
     * })
    **/
    upsert<T extends GymUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GymUpsertArgs<ExtArgs>>
    ): Prisma__GymClient<$Result.GetResult<Prisma.$GymPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Gyms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymCountArgs} args - Arguments to filter Gyms to count.
     * @example
     * // Count the number of Gyms
     * const count = await prisma.gym.count({
     *   where: {
     *     // ... the filter for the Gyms we want to count
     *   }
     * })
    **/
    count<T extends GymCountArgs>(
      args?: Subset<T, GymCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GymCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GymAggregateArgs>(args: Subset<T, GymAggregateArgs>): Prisma.PrismaPromise<GetGymAggregateType<T>>

    /**
     * Group by Gym.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GymGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GymGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GymGroupByArgs['orderBy'] }
        : { orderBy?: GymGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GymGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGymGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Gym model
   */
  readonly fields: GymFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Gym.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GymClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Gym model
   */ 
  interface GymFieldRefs {
    readonly id: FieldRef<"Gym", 'Int'>
    readonly ruc: FieldRef<"Gym", 'String'>
    readonly nombre: FieldRef<"Gym", 'String'>
    readonly direccion: FieldRef<"Gym", 'String'>
    readonly telefono: FieldRef<"Gym", 'String'>
    readonly email: FieldRef<"Gym", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Gym findUnique
   */
  export type GymFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where: GymWhereUniqueInput
  }


  /**
   * Gym findUniqueOrThrow
   */
  export type GymFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where: GymWhereUniqueInput
  }


  /**
   * Gym findFirst
   */
  export type GymFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gyms.
     */
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }


  /**
   * Gym findFirstOrThrow
   */
  export type GymFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Filter, which Gym to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Gyms.
     */
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }


  /**
   * Gym findMany
   */
  export type GymFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Filter, which Gyms to fetch.
     */
    where?: GymWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Gyms to fetch.
     */
    orderBy?: GymOrderByWithRelationInput | GymOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Gyms.
     */
    cursor?: GymWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Gyms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Gyms.
     */
    skip?: number
    distinct?: GymScalarFieldEnum | GymScalarFieldEnum[]
  }


  /**
   * Gym create
   */
  export type GymCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * The data needed to create a Gym.
     */
    data: XOR<GymCreateInput, GymUncheckedCreateInput>
  }


  /**
   * Gym createMany
   */
  export type GymCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Gyms.
     */
    data: GymCreateManyInput | GymCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Gym update
   */
  export type GymUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * The data needed to update a Gym.
     */
    data: XOR<GymUpdateInput, GymUncheckedUpdateInput>
    /**
     * Choose, which Gym to update.
     */
    where: GymWhereUniqueInput
  }


  /**
   * Gym updateMany
   */
  export type GymUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Gyms.
     */
    data: XOR<GymUpdateManyMutationInput, GymUncheckedUpdateManyInput>
    /**
     * Filter which Gyms to update
     */
    where?: GymWhereInput
  }


  /**
   * Gym upsert
   */
  export type GymUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * The filter to search for the Gym to update in case it exists.
     */
    where: GymWhereUniqueInput
    /**
     * In case the Gym found by the `where` argument doesn't exist, create a new Gym with this data.
     */
    create: XOR<GymCreateInput, GymUncheckedCreateInput>
    /**
     * In case the Gym was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GymUpdateInput, GymUncheckedUpdateInput>
  }


  /**
   * Gym delete
   */
  export type GymDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
    /**
     * Filter which Gym to delete.
     */
    where: GymWhereUniqueInput
  }


  /**
   * Gym deleteMany
   */
  export type GymDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Gyms to delete
     */
    where?: GymWhereInput
  }


  /**
   * Gym without action
   */
  export type GymDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gym
     */
    select?: GymSelect<ExtArgs> | null
  }



  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    duracion: number | null
  }

  export type PlanSumAggregateOutputType = {
    id: number | null
    valor: Decimal | null
    duracion: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    valor: Decimal | null
    duracion: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
    valor: Decimal | null
    duracion: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    valor: number
    duracion: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    id?: true
    valor?: true
    duracion?: true
  }

  export type PlanSumAggregateInputType = {
    id?: true
    valor?: true
    duracion?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    valor?: true
    duracion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    valor?: true
    duracion?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    valor?: true
    duracion?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string
    valor: Decimal
    duracion: number
    createdAt: Date
    updatedAt: Date
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    valor?: boolean
    duracion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Member?: boolean | Plan$MemberArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    valor?: boolean
    duracion?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Member?: boolean | Plan$MemberArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      Member: Prisma.$MemberPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string
      valor: Prisma.Decimal
      duracion: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }


  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlanFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Plan that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlanFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlanFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
    **/
    create<T extends PlanCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlanCreateArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Plans.
     *     @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     *     @example
     *     // Create many Plans
     *     const plan = await prisma.plan.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlanCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
    **/
    delete<T extends PlanDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlanUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlanDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlanUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
    **/
    upsert<T extends PlanUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>
    ): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Member<T extends Plan$MemberArgs<ExtArgs> = {}>(args?: Subset<T, Plan$MemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Plan model
   */ 
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'Int'>
    readonly nombre: FieldRef<"Plan", 'String'>
    readonly descripcion: FieldRef<"Plan", 'String'>
    readonly valor: FieldRef<"Plan", 'Decimal'>
    readonly duracion: FieldRef<"Plan", 'Int'>
    readonly createdAt: FieldRef<"Plan", 'DateTime'>
    readonly updatedAt: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }


  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }


  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }


  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }


  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
  }


  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }


  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }


  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
  }


  /**
   * Plan.Member
   */
  export type Plan$MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    cursor?: MemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }


  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
  }



  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    id: number | null
    estado: number | null
    planId: number | null
  }

  export type MemberSumAggregateOutputType = {
    id: number | null
    estado: number | null
    planId: number | null
  }

  export type MemberMinAggregateOutputType = {
    id: number | null
    cedula: string | null
    nombre: string | null
    apellido: string | null
    email: string | null
    telefono: string | null
    telefonoEmergencia: string | null
    fechaNacimiento: Date | null
    sexo: string | null
    direccion: string | null
    nacionalidad: string | null
    fechaInscripcion: Date | null
    estado: number | null
    planId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberMaxAggregateOutputType = {
    id: number | null
    cedula: string | null
    nombre: string | null
    apellido: string | null
    email: string | null
    telefono: string | null
    telefonoEmergencia: string | null
    fechaNacimiento: Date | null
    sexo: string | null
    direccion: string | null
    nacionalidad: string | null
    fechaInscripcion: Date | null
    estado: number | null
    planId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    cedula: number
    nombre: number
    apellido: number
    email: number
    telefono: number
    telefonoEmergencia: number
    fechaNacimiento: number
    sexo: number
    direccion: number
    nacionalidad: number
    fechaInscripcion: number
    estado: number
    planId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    id?: true
    estado?: true
    planId?: true
  }

  export type MemberSumAggregateInputType = {
    id?: true
    estado?: true
    planId?: true
  }

  export type MemberMinAggregateInputType = {
    id?: true
    cedula?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    telefonoEmergencia?: true
    fechaNacimiento?: true
    sexo?: true
    direccion?: true
    nacionalidad?: true
    fechaInscripcion?: true
    estado?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    cedula?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    telefonoEmergencia?: true
    fechaNacimiento?: true
    sexo?: true
    direccion?: true
    nacionalidad?: true
    fechaInscripcion?: true
    estado?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    cedula?: true
    nombre?: true
    apellido?: true
    email?: true
    telefono?: true
    telefonoEmergencia?: true
    fechaNacimiento?: true
    sexo?: true
    direccion?: true
    nacionalidad?: true
    fechaInscripcion?: true
    estado?: true
    planId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: number
    cedula: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    telefonoEmergencia: string
    fechaNacimiento: Date
    sexo: string
    direccion: string
    nacionalidad: string
    fechaInscripcion: Date
    estado: number | null
    planId: number
    createdAt: Date
    updatedAt: Date
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cedula?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    telefonoEmergencia?: boolean
    fechaNacimiento?: boolean
    sexo?: boolean
    direccion?: boolean
    nacionalidad?: boolean
    fechaInscripcion?: boolean
    estado?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean | Member$planArgs<ExtArgs>
    Asistencia?: boolean | Member$AsistenciaArgs<ExtArgs>
    Pago?: boolean | Member$PagoArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>

  export type MemberSelectScalar = {
    id?: boolean
    cedula?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    telefono?: boolean
    telefonoEmergencia?: boolean
    fechaNacimiento?: boolean
    sexo?: boolean
    direccion?: boolean
    nacionalidad?: boolean
    fechaInscripcion?: boolean
    estado?: boolean
    planId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | Member$planArgs<ExtArgs>
    Asistencia?: boolean | Member$AsistenciaArgs<ExtArgs>
    Pago?: boolean | Member$PagoArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      plan: Prisma.$PlanPayload<ExtArgs> | null
      Asistencia: Prisma.$AsistenciaPayload<ExtArgs>[]
      Pago: Prisma.$PagoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cedula: string
      nombre: string
      apellido: string
      email: string
      telefono: string
      telefonoEmergencia: string
      fechaNacimiento: Date
      sexo: string
      direccion: string
      nacionalidad: string
      fechaInscripcion: Date
      estado: number | null
      planId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["member"]>
    composites: {}
  }


  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MemberFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Member that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MemberFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MemberFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
    **/
    create<T extends MemberCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MemberCreateArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Members.
     *     @param {MemberCreateManyArgs} args - Arguments to create many Members.
     *     @example
     *     // Create many Members
     *     const member = await prisma.member.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MemberCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
    **/
    delete<T extends MemberDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MemberUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MemberDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MemberUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
    **/
    upsert<T extends MemberUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>
    ): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    plan<T extends Member$planArgs<ExtArgs> = {}>(args?: Subset<T, Member$planArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    Asistencia<T extends Member$AsistenciaArgs<ExtArgs> = {}>(args?: Subset<T, Member$AsistenciaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, 'findMany'> | Null>;

    Pago<T extends Member$PagoArgs<ExtArgs> = {}>(args?: Subset<T, Member$PagoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Member model
   */ 
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'Int'>
    readonly cedula: FieldRef<"Member", 'String'>
    readonly nombre: FieldRef<"Member", 'String'>
    readonly apellido: FieldRef<"Member", 'String'>
    readonly email: FieldRef<"Member", 'String'>
    readonly telefono: FieldRef<"Member", 'String'>
    readonly telefonoEmergencia: FieldRef<"Member", 'String'>
    readonly fechaNacimiento: FieldRef<"Member", 'DateTime'>
    readonly sexo: FieldRef<"Member", 'String'>
    readonly direccion: FieldRef<"Member", 'String'>
    readonly nacionalidad: FieldRef<"Member", 'String'>
    readonly fechaInscripcion: FieldRef<"Member", 'DateTime'>
    readonly estado: FieldRef<"Member", 'Int'>
    readonly planId: FieldRef<"Member", 'Int'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }


  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }


  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }


  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }


  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
  }


  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }


  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }


  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
  }


  /**
   * Member.plan
   */
  export type Member$planArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlanInclude<ExtArgs> | null
    where?: PlanWhereInput
  }


  /**
   * Member.Asistencia
   */
  export type Member$AsistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AsistenciaInclude<ExtArgs> | null
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    cursor?: AsistenciaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }


  /**
   * Member.Pago
   */
  export type Member$PagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagoInclude<ExtArgs> | null
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    cursor?: PagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }


  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MemberInclude<ExtArgs> | null
  }



  /**
   * Model Asistencia
   */

  export type AggregateAsistencia = {
    _count: AsistenciaCountAggregateOutputType | null
    _avg: AsistenciaAvgAggregateOutputType | null
    _sum: AsistenciaSumAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  export type AsistenciaAvgAggregateOutputType = {
    id: number | null
    miembroId: number | null
  }

  export type AsistenciaSumAggregateOutputType = {
    id: number | null
    miembroId: number | null
  }

  export type AsistenciaMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    miembroId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsistenciaMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    miembroId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsistenciaCountAggregateOutputType = {
    id: number
    fecha: number
    miembroId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AsistenciaAvgAggregateInputType = {
    id?: true
    miembroId?: true
  }

  export type AsistenciaSumAggregateInputType = {
    id?: true
    miembroId?: true
  }

  export type AsistenciaMinAggregateInputType = {
    id?: true
    fecha?: true
    miembroId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsistenciaMaxAggregateInputType = {
    id?: true
    fecha?: true
    miembroId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsistenciaCountAggregateInputType = {
    id?: true
    fecha?: true
    miembroId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AsistenciaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asistencia to aggregate.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Asistencias
    **/
    _count?: true | AsistenciaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AsistenciaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AsistenciaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsistenciaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsistenciaMaxAggregateInputType
  }

  export type GetAsistenciaAggregateType<T extends AsistenciaAggregateArgs> = {
        [P in keyof T & keyof AggregateAsistencia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsistencia[P]>
      : GetScalarType<T[P], AggregateAsistencia[P]>
  }




  export type AsistenciaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsistenciaWhereInput
    orderBy?: AsistenciaOrderByWithAggregationInput | AsistenciaOrderByWithAggregationInput[]
    by: AsistenciaScalarFieldEnum[] | AsistenciaScalarFieldEnum
    having?: AsistenciaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsistenciaCountAggregateInputType | true
    _avg?: AsistenciaAvgAggregateInputType
    _sum?: AsistenciaSumAggregateInputType
    _min?: AsistenciaMinAggregateInputType
    _max?: AsistenciaMaxAggregateInputType
  }

  export type AsistenciaGroupByOutputType = {
    id: number
    fecha: Date
    miembroId: number
    createdAt: Date
    updatedAt: Date
    _count: AsistenciaCountAggregateOutputType | null
    _avg: AsistenciaAvgAggregateOutputType | null
    _sum: AsistenciaSumAggregateOutputType | null
    _min: AsistenciaMinAggregateOutputType | null
    _max: AsistenciaMaxAggregateOutputType | null
  }

  type GetAsistenciaGroupByPayload<T extends AsistenciaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsistenciaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsistenciaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
            : GetScalarType<T[P], AsistenciaGroupByOutputType[P]>
        }
      >
    >


  export type AsistenciaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    miembroId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    miembro?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asistencia"]>

  export type AsistenciaSelectScalar = {
    id?: boolean
    fecha?: boolean
    miembroId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AsistenciaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembro?: boolean | MemberDefaultArgs<ExtArgs>
  }


  export type $AsistenciaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Asistencia"
    objects: {
      miembro: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      miembroId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["asistencia"]>
    composites: {}
  }


  type AsistenciaGetPayload<S extends boolean | null | undefined | AsistenciaDefaultArgs> = $Result.GetResult<Prisma.$AsistenciaPayload, S>

  type AsistenciaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AsistenciaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AsistenciaCountAggregateInputType | true
    }

  export interface AsistenciaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asistencia'], meta: { name: 'Asistencia' } }
    /**
     * Find zero or one Asistencia that matches the filter.
     * @param {AsistenciaFindUniqueArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AsistenciaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AsistenciaFindUniqueArgs<ExtArgs>>
    ): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Asistencia that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AsistenciaFindUniqueOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AsistenciaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AsistenciaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Asistencia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindFirstArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AsistenciaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AsistenciaFindFirstArgs<ExtArgs>>
    ): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Asistencia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindFirstOrThrowArgs} args - Arguments to find a Asistencia
     * @example
     * // Get one Asistencia
     * const asistencia = await prisma.asistencia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AsistenciaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AsistenciaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Asistencias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Asistencias
     * const asistencias = await prisma.asistencia.findMany()
     * 
     * // Get first 10 Asistencias
     * const asistencias = await prisma.asistencia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asistenciaWithIdOnly = await prisma.asistencia.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AsistenciaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AsistenciaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Asistencia.
     * @param {AsistenciaCreateArgs} args - Arguments to create a Asistencia.
     * @example
     * // Create one Asistencia
     * const Asistencia = await prisma.asistencia.create({
     *   data: {
     *     // ... data to create a Asistencia
     *   }
     * })
     * 
    **/
    create<T extends AsistenciaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AsistenciaCreateArgs<ExtArgs>>
    ): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Asistencias.
     *     @param {AsistenciaCreateManyArgs} args - Arguments to create many Asistencias.
     *     @example
     *     // Create many Asistencias
     *     const asistencia = await prisma.asistencia.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AsistenciaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AsistenciaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Asistencia.
     * @param {AsistenciaDeleteArgs} args - Arguments to delete one Asistencia.
     * @example
     * // Delete one Asistencia
     * const Asistencia = await prisma.asistencia.delete({
     *   where: {
     *     // ... filter to delete one Asistencia
     *   }
     * })
     * 
    **/
    delete<T extends AsistenciaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AsistenciaDeleteArgs<ExtArgs>>
    ): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Asistencia.
     * @param {AsistenciaUpdateArgs} args - Arguments to update one Asistencia.
     * @example
     * // Update one Asistencia
     * const asistencia = await prisma.asistencia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AsistenciaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AsistenciaUpdateArgs<ExtArgs>>
    ): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Asistencias.
     * @param {AsistenciaDeleteManyArgs} args - Arguments to filter Asistencias to delete.
     * @example
     * // Delete a few Asistencias
     * const { count } = await prisma.asistencia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AsistenciaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AsistenciaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Asistencias
     * const asistencia = await prisma.asistencia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AsistenciaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AsistenciaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Asistencia.
     * @param {AsistenciaUpsertArgs} args - Arguments to update or create a Asistencia.
     * @example
     * // Update or create a Asistencia
     * const asistencia = await prisma.asistencia.upsert({
     *   create: {
     *     // ... data to create a Asistencia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Asistencia we want to update
     *   }
     * })
    **/
    upsert<T extends AsistenciaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AsistenciaUpsertArgs<ExtArgs>>
    ): Prisma__AsistenciaClient<$Result.GetResult<Prisma.$AsistenciaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Asistencias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaCountArgs} args - Arguments to filter Asistencias to count.
     * @example
     * // Count the number of Asistencias
     * const count = await prisma.asistencia.count({
     *   where: {
     *     // ... the filter for the Asistencias we want to count
     *   }
     * })
    **/
    count<T extends AsistenciaCountArgs>(
      args?: Subset<T, AsistenciaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsistenciaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsistenciaAggregateArgs>(args: Subset<T, AsistenciaAggregateArgs>): Prisma.PrismaPromise<GetAsistenciaAggregateType<T>>

    /**
     * Group by Asistencia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsistenciaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsistenciaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsistenciaGroupByArgs['orderBy'] }
        : { orderBy?: AsistenciaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsistenciaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsistenciaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Asistencia model
   */
  readonly fields: AsistenciaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Asistencia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsistenciaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    miembro<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Asistencia model
   */ 
  interface AsistenciaFieldRefs {
    readonly id: FieldRef<"Asistencia", 'Int'>
    readonly fecha: FieldRef<"Asistencia", 'DateTime'>
    readonly miembroId: FieldRef<"Asistencia", 'Int'>
    readonly createdAt: FieldRef<"Asistencia", 'DateTime'>
    readonly updatedAt: FieldRef<"Asistencia", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Asistencia findUnique
   */
  export type AsistenciaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where: AsistenciaWhereUniqueInput
  }


  /**
   * Asistencia findUniqueOrThrow
   */
  export type AsistenciaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where: AsistenciaWhereUniqueInput
  }


  /**
   * Asistencia findFirst
   */
  export type AsistenciaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }


  /**
   * Asistencia findFirstOrThrow
   */
  export type AsistenciaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencia to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Asistencias.
     */
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }


  /**
   * Asistencia findMany
   */
  export type AsistenciaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter, which Asistencias to fetch.
     */
    where?: AsistenciaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Asistencias to fetch.
     */
    orderBy?: AsistenciaOrderByWithRelationInput | AsistenciaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Asistencias.
     */
    cursor?: AsistenciaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Asistencias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Asistencias.
     */
    skip?: number
    distinct?: AsistenciaScalarFieldEnum | AsistenciaScalarFieldEnum[]
  }


  /**
   * Asistencia create
   */
  export type AsistenciaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The data needed to create a Asistencia.
     */
    data: XOR<AsistenciaCreateInput, AsistenciaUncheckedCreateInput>
  }


  /**
   * Asistencia createMany
   */
  export type AsistenciaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Asistencias.
     */
    data: AsistenciaCreateManyInput | AsistenciaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Asistencia update
   */
  export type AsistenciaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The data needed to update a Asistencia.
     */
    data: XOR<AsistenciaUpdateInput, AsistenciaUncheckedUpdateInput>
    /**
     * Choose, which Asistencia to update.
     */
    where: AsistenciaWhereUniqueInput
  }


  /**
   * Asistencia updateMany
   */
  export type AsistenciaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Asistencias.
     */
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyInput>
    /**
     * Filter which Asistencias to update
     */
    where?: AsistenciaWhereInput
  }


  /**
   * Asistencia upsert
   */
  export type AsistenciaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * The filter to search for the Asistencia to update in case it exists.
     */
    where: AsistenciaWhereUniqueInput
    /**
     * In case the Asistencia found by the `where` argument doesn't exist, create a new Asistencia with this data.
     */
    create: XOR<AsistenciaCreateInput, AsistenciaUncheckedCreateInput>
    /**
     * In case the Asistencia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsistenciaUpdateInput, AsistenciaUncheckedUpdateInput>
  }


  /**
   * Asistencia delete
   */
  export type AsistenciaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AsistenciaInclude<ExtArgs> | null
    /**
     * Filter which Asistencia to delete.
     */
    where: AsistenciaWhereUniqueInput
  }


  /**
   * Asistencia deleteMany
   */
  export type AsistenciaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Asistencias to delete
     */
    where?: AsistenciaWhereInput
  }


  /**
   * Asistencia without action
   */
  export type AsistenciaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Asistencia
     */
    select?: AsistenciaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AsistenciaInclude<ExtArgs> | null
  }



  /**
   * Model Pago
   */

  export type AggregatePago = {
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  export type PagoAvgAggregateOutputType = {
    id: number | null
    miembroId: number | null
  }

  export type PagoSumAggregateOutputType = {
    id: number | null
    miembroId: number | null
  }

  export type PagoMinAggregateOutputType = {
    id: number | null
    fecha: Date | null
    miembroId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PagoMaxAggregateOutputType = {
    id: number | null
    fecha: Date | null
    miembroId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PagoCountAggregateOutputType = {
    id: number
    fecha: number
    miembroId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PagoAvgAggregateInputType = {
    id?: true
    miembroId?: true
  }

  export type PagoSumAggregateInputType = {
    id?: true
    miembroId?: true
  }

  export type PagoMinAggregateInputType = {
    id?: true
    fecha?: true
    miembroId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PagoMaxAggregateInputType = {
    id?: true
    fecha?: true
    miembroId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PagoCountAggregateInputType = {
    id?: true
    fecha?: true
    miembroId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pago to aggregate.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagos
    **/
    _count?: true | PagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoMaxAggregateInputType
  }

  export type GetPagoAggregateType<T extends PagoAggregateArgs> = {
        [P in keyof T & keyof AggregatePago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePago[P]>
      : GetScalarType<T[P], AggregatePago[P]>
  }




  export type PagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithAggregationInput | PagoOrderByWithAggregationInput[]
    by: PagoScalarFieldEnum[] | PagoScalarFieldEnum
    having?: PagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoCountAggregateInputType | true
    _avg?: PagoAvgAggregateInputType
    _sum?: PagoSumAggregateInputType
    _min?: PagoMinAggregateInputType
    _max?: PagoMaxAggregateInputType
  }

  export type PagoGroupByOutputType = {
    id: number
    fecha: Date
    miembroId: number
    createdAt: Date
    updatedAt: Date
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  type GetPagoGroupByPayload<T extends PagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoGroupByOutputType[P]>
            : GetScalarType<T[P], PagoGroupByOutputType[P]>
        }
      >
    >


  export type PagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fecha?: boolean
    miembroId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    miembro?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>

  export type PagoSelectScalar = {
    id?: boolean
    fecha?: boolean
    miembroId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    miembro?: boolean | MemberDefaultArgs<ExtArgs>
  }


  export type $PagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pago"
    objects: {
      miembro: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fecha: Date
      miembroId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pago"]>
    composites: {}
  }


  type PagoGetPayload<S extends boolean | null | undefined | PagoDefaultArgs> = $Result.GetResult<Prisma.$PagoPayload, S>

  type PagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PagoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PagoCountAggregateInputType | true
    }

  export interface PagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pago'], meta: { name: 'Pago' } }
    /**
     * Find zero or one Pago that matches the filter.
     * @param {PagoFindUniqueArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PagoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PagoFindUniqueArgs<ExtArgs>>
    ): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pago that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PagoFindUniqueOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PagoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PagoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PagoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PagoFindFirstArgs<ExtArgs>>
    ): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PagoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PagoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pago.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pago.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagoWithIdOnly = await prisma.pago.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PagoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PagoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pago.
     * @param {PagoCreateArgs} args - Arguments to create a Pago.
     * @example
     * // Create one Pago
     * const Pago = await prisma.pago.create({
     *   data: {
     *     // ... data to create a Pago
     *   }
     * })
     * 
    **/
    create<T extends PagoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PagoCreateArgs<ExtArgs>>
    ): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pagos.
     *     @param {PagoCreateManyArgs} args - Arguments to create many Pagos.
     *     @example
     *     // Create many Pagos
     *     const pago = await prisma.pago.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PagoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PagoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pago.
     * @param {PagoDeleteArgs} args - Arguments to delete one Pago.
     * @example
     * // Delete one Pago
     * const Pago = await prisma.pago.delete({
     *   where: {
     *     // ... filter to delete one Pago
     *   }
     * })
     * 
    **/
    delete<T extends PagoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PagoDeleteArgs<ExtArgs>>
    ): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pago.
     * @param {PagoUpdateArgs} args - Arguments to update one Pago.
     * @example
     * // Update one Pago
     * const pago = await prisma.pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PagoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PagoUpdateArgs<ExtArgs>>
    ): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pagos.
     * @param {PagoDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PagoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PagoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PagoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PagoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pago.
     * @param {PagoUpsertArgs} args - Arguments to update or create a Pago.
     * @example
     * // Update or create a Pago
     * const pago = await prisma.pago.upsert({
     *   create: {
     *     // ... data to create a Pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pago we want to update
     *   }
     * })
    **/
    upsert<T extends PagoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PagoUpsertArgs<ExtArgs>>
    ): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pago.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends PagoCountArgs>(
      args?: Subset<T, PagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagoAggregateArgs>(args: Subset<T, PagoAggregateArgs>): Prisma.PrismaPromise<GetPagoAggregateType<T>>

    /**
     * Group by Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagoGroupByArgs['orderBy'] }
        : { orderBy?: PagoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pago model
   */
  readonly fields: PagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    miembro<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Pago model
   */ 
  interface PagoFieldRefs {
    readonly id: FieldRef<"Pago", 'Int'>
    readonly fecha: FieldRef<"Pago", 'DateTime'>
    readonly miembroId: FieldRef<"Pago", 'Int'>
    readonly createdAt: FieldRef<"Pago", 'DateTime'>
    readonly updatedAt: FieldRef<"Pago", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Pago findUnique
   */
  export type PagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }


  /**
   * Pago findUniqueOrThrow
   */
  export type PagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }


  /**
   * Pago findFirst
   */
  export type PagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }


  /**
   * Pago findFirstOrThrow
   */
  export type PagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }


  /**
   * Pago findMany
   */
  export type PagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }


  /**
   * Pago create
   */
  export type PagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pago.
     */
    data: XOR<PagoCreateInput, PagoUncheckedCreateInput>
  }


  /**
   * Pago createMany
   */
  export type PagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagos.
     */
    data: PagoCreateManyInput | PagoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Pago update
   */
  export type PagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pago.
     */
    data: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
    /**
     * Choose, which Pago to update.
     */
    where: PagoWhereUniqueInput
  }


  /**
   * Pago updateMany
   */
  export type PagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagos.
     */
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyInput>
    /**
     * Filter which Pagos to update
     */
    where?: PagoWhereInput
  }


  /**
   * Pago upsert
   */
  export type PagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pago to update in case it exists.
     */
    where: PagoWhereUniqueInput
    /**
     * In case the Pago found by the `where` argument doesn't exist, create a new Pago with this data.
     */
    create: XOR<PagoCreateInput, PagoUncheckedCreateInput>
    /**
     * In case the Pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
  }


  /**
   * Pago delete
   */
  export type PagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter which Pago to delete.
     */
    where: PagoWhereUniqueInput
  }


  /**
   * Pago deleteMany
   */
  export type PagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagos to delete
     */
    where?: PagoWhereInput
  }


  /**
   * Pago without action
   */
  export type PagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PagoInclude<ExtArgs> | null
  }



  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    estado: number | null
    rolId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    estado: number | null
    rolId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    password: string | null
    estado: number | null
    rolId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    password: string | null
    estado: number | null
    rolId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    email: number
    password: number
    estado: number
    rolId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    estado?: true
    rolId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    estado?: true
    rolId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    estado?: true
    rolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    estado?: true
    rolId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    estado?: true
    rolId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    apellido: string
    email: string
    password: string
    estado: number | null
    rolId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    estado?: boolean
    rolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rol?: boolean | Usuario$rolArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    estado?: boolean
    rolId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rol?: boolean | Usuario$rolArgs<ExtArgs>
  }


  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      rol: Prisma.$RolePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      apellido: string
      email: string
      password: string
      estado: number | null
      rolId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }


  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsuarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
    **/
    create<T extends UsuarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuarios.
     *     @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuario = await prisma.usuario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsuarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
    **/
    delete<T extends UsuarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
    **/
    upsert<T extends UsuarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    rol<T extends Usuario$rolArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$rolArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly apellido: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly estado: FieldRef<"Usuario", 'Int'>
    readonly rolId: FieldRef<"Usuario", 'Int'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }


  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }


  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario.rol
   */
  export type Usuario$rolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
  }


  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const GymScalarFieldEnum: {
    id: 'id',
    ruc: 'ruc',
    nombre: 'nombre',
    direccion: 'direccion',
    telefono: 'telefono',
    email: 'email'
  };

  export type GymScalarFieldEnum = (typeof GymScalarFieldEnum)[keyof typeof GymScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion',
    valor: 'valor',
    duracion: 'duracion',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    cedula: 'cedula',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    telefono: 'telefono',
    telefonoEmergencia: 'telefonoEmergencia',
    fechaNacimiento: 'fechaNacimiento',
    sexo: 'sexo',
    direccion: 'direccion',
    nacionalidad: 'nacionalidad',
    fechaInscripcion: 'fechaInscripcion',
    estado: 'estado',
    planId: 'planId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const AsistenciaScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    miembroId: 'miembroId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AsistenciaScalarFieldEnum = (typeof AsistenciaScalarFieldEnum)[keyof typeof AsistenciaScalarFieldEnum]


  export const PagoScalarFieldEnum: {
    id: 'id',
    fecha: 'fecha',
    miembroId: 'miembroId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    password: 'password',
    estado: 'estado',
    rolId: 'rolId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    nombre?: StringFilter<"Role"> | string
    descripcion?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    Usuario?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Usuario?: UsuarioOrderByWithRelationInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    descripcion?: StringFilter<"Role"> | string
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    Usuario?: XOR<UsuarioNullableRelationFilter, UsuarioWhereInput> | null
  }, "id" | "nombre">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    nombre?: StringWithAggregatesFilter<"Role"> | string
    descripcion?: StringWithAggregatesFilter<"Role"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type GymWhereInput = {
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    id?: IntFilter<"Gym"> | number
    ruc?: StringFilter<"Gym"> | string
    nombre?: StringFilter<"Gym"> | string
    direccion?: StringFilter<"Gym"> | string
    telefono?: StringFilter<"Gym"> | string
    email?: StringFilter<"Gym"> | string
  }

  export type GymOrderByWithRelationInput = {
    id?: SortOrder
    ruc?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
  }

  export type GymWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GymWhereInput | GymWhereInput[]
    OR?: GymWhereInput[]
    NOT?: GymWhereInput | GymWhereInput[]
    ruc?: StringFilter<"Gym"> | string
    nombre?: StringFilter<"Gym"> | string
    direccion?: StringFilter<"Gym"> | string
    telefono?: StringFilter<"Gym"> | string
    email?: StringFilter<"Gym"> | string
  }, "id">

  export type GymOrderByWithAggregationInput = {
    id?: SortOrder
    ruc?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
    _count?: GymCountOrderByAggregateInput
    _avg?: GymAvgOrderByAggregateInput
    _max?: GymMaxOrderByAggregateInput
    _min?: GymMinOrderByAggregateInput
    _sum?: GymSumOrderByAggregateInput
  }

  export type GymScalarWhereWithAggregatesInput = {
    AND?: GymScalarWhereWithAggregatesInput | GymScalarWhereWithAggregatesInput[]
    OR?: GymScalarWhereWithAggregatesInput[]
    NOT?: GymScalarWhereWithAggregatesInput | GymScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Gym"> | number
    ruc?: StringWithAggregatesFilter<"Gym"> | string
    nombre?: StringWithAggregatesFilter<"Gym"> | string
    direccion?: StringWithAggregatesFilter<"Gym"> | string
    telefono?: StringWithAggregatesFilter<"Gym"> | string
    email?: StringWithAggregatesFilter<"Gym"> | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: IntFilter<"Plan"> | number
    nombre?: StringFilter<"Plan"> | string
    descripcion?: StringFilter<"Plan"> | string
    valor?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    duracion?: IntFilter<"Plan"> | number
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    Member?: MemberListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    valor?: SortOrder
    duracion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Member?: MemberOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    descripcion?: StringFilter<"Plan"> | string
    valor?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    duracion?: IntFilter<"Plan"> | number
    createdAt?: DateTimeFilter<"Plan"> | Date | string
    updatedAt?: DateTimeFilter<"Plan"> | Date | string
    Member?: MemberListRelationFilter
  }, "id" | "nombre">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    valor?: SortOrder
    duracion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Plan"> | number
    nombre?: StringWithAggregatesFilter<"Plan"> | string
    descripcion?: StringWithAggregatesFilter<"Plan"> | string
    valor?: DecimalWithAggregatesFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    duracion?: IntWithAggregatesFilter<"Plan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: IntFilter<"Member"> | number
    cedula?: StringFilter<"Member"> | string
    nombre?: StringFilter<"Member"> | string
    apellido?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    telefono?: StringFilter<"Member"> | string
    telefonoEmergencia?: StringFilter<"Member"> | string
    fechaNacimiento?: DateTimeFilter<"Member"> | Date | string
    sexo?: StringFilter<"Member"> | string
    direccion?: StringFilter<"Member"> | string
    nacionalidad?: StringFilter<"Member"> | string
    fechaInscripcion?: DateTimeFilter<"Member"> | Date | string
    estado?: IntNullableFilter<"Member"> | number | null
    planId?: IntFilter<"Member"> | number
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    plan?: XOR<PlanNullableRelationFilter, PlanWhereInput> | null
    Asistencia?: AsistenciaListRelationFilter
    Pago?: PagoListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    cedula?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    telefonoEmergencia?: SortOrder
    fechaNacimiento?: SortOrder
    sexo?: SortOrder
    direccion?: SortOrder
    nacionalidad?: SortOrder
    fechaInscripcion?: SortOrder
    estado?: SortOrderInput | SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: PlanOrderByWithRelationInput
    Asistencia?: AsistenciaOrderByRelationAggregateInput
    Pago?: PagoOrderByRelationAggregateInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    cedula?: StringFilter<"Member"> | string
    nombre?: StringFilter<"Member"> | string
    apellido?: StringFilter<"Member"> | string
    telefono?: StringFilter<"Member"> | string
    telefonoEmergencia?: StringFilter<"Member"> | string
    fechaNacimiento?: DateTimeFilter<"Member"> | Date | string
    sexo?: StringFilter<"Member"> | string
    direccion?: StringFilter<"Member"> | string
    nacionalidad?: StringFilter<"Member"> | string
    fechaInscripcion?: DateTimeFilter<"Member"> | Date | string
    estado?: IntNullableFilter<"Member"> | number | null
    planId?: IntFilter<"Member"> | number
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
    plan?: XOR<PlanNullableRelationFilter, PlanWhereInput> | null
    Asistencia?: AsistenciaListRelationFilter
    Pago?: PagoListRelationFilter
  }, "id" | "email">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    cedula?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    telefonoEmergencia?: SortOrder
    fechaNacimiento?: SortOrder
    sexo?: SortOrder
    direccion?: SortOrder
    nacionalidad?: SortOrder
    fechaInscripcion?: SortOrder
    estado?: SortOrderInput | SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MemberCountOrderByAggregateInput
    _avg?: MemberAvgOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
    _sum?: MemberSumOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Member"> | number
    cedula?: StringWithAggregatesFilter<"Member"> | string
    nombre?: StringWithAggregatesFilter<"Member"> | string
    apellido?: StringWithAggregatesFilter<"Member"> | string
    email?: StringWithAggregatesFilter<"Member"> | string
    telefono?: StringWithAggregatesFilter<"Member"> | string
    telefonoEmergencia?: StringWithAggregatesFilter<"Member"> | string
    fechaNacimiento?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    sexo?: StringWithAggregatesFilter<"Member"> | string
    direccion?: StringWithAggregatesFilter<"Member"> | string
    nacionalidad?: StringWithAggregatesFilter<"Member"> | string
    fechaInscripcion?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    estado?: IntNullableWithAggregatesFilter<"Member"> | number | null
    planId?: IntWithAggregatesFilter<"Member"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Member"> | Date | string
  }

  export type AsistenciaWhereInput = {
    AND?: AsistenciaWhereInput | AsistenciaWhereInput[]
    OR?: AsistenciaWhereInput[]
    NOT?: AsistenciaWhereInput | AsistenciaWhereInput[]
    id?: IntFilter<"Asistencia"> | number
    fecha?: DateTimeFilter<"Asistencia"> | Date | string
    miembroId?: IntFilter<"Asistencia"> | number
    createdAt?: DateTimeFilter<"Asistencia"> | Date | string
    updatedAt?: DateTimeFilter<"Asistencia"> | Date | string
    miembro?: XOR<MemberRelationFilter, MemberWhereInput>
  }

  export type AsistenciaOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    miembroId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    miembro?: MemberOrderByWithRelationInput
  }

  export type AsistenciaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AsistenciaWhereInput | AsistenciaWhereInput[]
    OR?: AsistenciaWhereInput[]
    NOT?: AsistenciaWhereInput | AsistenciaWhereInput[]
    fecha?: DateTimeFilter<"Asistencia"> | Date | string
    miembroId?: IntFilter<"Asistencia"> | number
    createdAt?: DateTimeFilter<"Asistencia"> | Date | string
    updatedAt?: DateTimeFilter<"Asistencia"> | Date | string
    miembro?: XOR<MemberRelationFilter, MemberWhereInput>
  }, "id">

  export type AsistenciaOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    miembroId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AsistenciaCountOrderByAggregateInput
    _avg?: AsistenciaAvgOrderByAggregateInput
    _max?: AsistenciaMaxOrderByAggregateInput
    _min?: AsistenciaMinOrderByAggregateInput
    _sum?: AsistenciaSumOrderByAggregateInput
  }

  export type AsistenciaScalarWhereWithAggregatesInput = {
    AND?: AsistenciaScalarWhereWithAggregatesInput | AsistenciaScalarWhereWithAggregatesInput[]
    OR?: AsistenciaScalarWhereWithAggregatesInput[]
    NOT?: AsistenciaScalarWhereWithAggregatesInput | AsistenciaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Asistencia"> | number
    fecha?: DateTimeWithAggregatesFilter<"Asistencia"> | Date | string
    miembroId?: IntWithAggregatesFilter<"Asistencia"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Asistencia"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Asistencia"> | Date | string
  }

  export type PagoWhereInput = {
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    id?: IntFilter<"Pago"> | number
    fecha?: DateTimeFilter<"Pago"> | Date | string
    miembroId?: IntFilter<"Pago"> | number
    createdAt?: DateTimeFilter<"Pago"> | Date | string
    updatedAt?: DateTimeFilter<"Pago"> | Date | string
    miembro?: XOR<MemberRelationFilter, MemberWhereInput>
  }

  export type PagoOrderByWithRelationInput = {
    id?: SortOrder
    fecha?: SortOrder
    miembroId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    miembro?: MemberOrderByWithRelationInput
  }

  export type PagoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    fecha?: DateTimeFilter<"Pago"> | Date | string
    miembroId?: IntFilter<"Pago"> | number
    createdAt?: DateTimeFilter<"Pago"> | Date | string
    updatedAt?: DateTimeFilter<"Pago"> | Date | string
    miembro?: XOR<MemberRelationFilter, MemberWhereInput>
  }, "id">

  export type PagoOrderByWithAggregationInput = {
    id?: SortOrder
    fecha?: SortOrder
    miembroId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PagoCountOrderByAggregateInput
    _avg?: PagoAvgOrderByAggregateInput
    _max?: PagoMaxOrderByAggregateInput
    _min?: PagoMinOrderByAggregateInput
    _sum?: PagoSumOrderByAggregateInput
  }

  export type PagoScalarWhereWithAggregatesInput = {
    AND?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    OR?: PagoScalarWhereWithAggregatesInput[]
    NOT?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pago"> | number
    fecha?: DateTimeWithAggregatesFilter<"Pago"> | Date | string
    miembroId?: IntWithAggregatesFilter<"Pago"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Pago"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Pago"> | Date | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    estado?: IntNullableFilter<"Usuario"> | number | null
    rolId?: IntNullableFilter<"Usuario"> | number | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    rol?: XOR<RoleNullableRelationFilter, RoleWhereInput> | null
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    estado?: SortOrderInput | SortOrder
    rolId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rol?: RoleOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    rolId?: number
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    estado?: IntNullableFilter<"Usuario"> | number | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    rol?: XOR<RoleNullableRelationFilter, RoleWhereInput> | null
  }, "id" | "email" | "rolId">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    estado?: SortOrderInput | SortOrder
    rolId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    apellido?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    estado?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
    rolId?: IntNullableWithAggregatesFilter<"Usuario"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type RoleCreateInput = {
    nombre: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Usuario?: UsuarioCreateNestedOneWithoutRolInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Usuario?: UsuarioUncheckedCreateNestedOneWithoutRolInput
  }

  export type RoleUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Usuario?: UsuarioUpdateOneWithoutRolNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Usuario?: UsuarioUncheckedUpdateOneWithoutRolNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GymCreateInput = {
    ruc: string
    nombre: string
    direccion: string
    telefono: string
    email: string
  }

  export type GymUncheckedCreateInput = {
    id?: number
    ruc: string
    nombre: string
    direccion: string
    telefono: string
    email: string
  }

  export type GymUpdateInput = {
    ruc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type GymUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ruc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type GymCreateManyInput = {
    id?: number
    ruc: string
    nombre: string
    direccion: string
    telefono: string
    email: string
  }

  export type GymUpdateManyMutationInput = {
    ruc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type GymUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ruc?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type PlanCreateInput = {
    nombre: string
    descripcion: string
    valor: Decimal | DecimalJsLike | number | string
    duracion: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Member?: MemberCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion: string
    valor: Decimal | DecimalJsLike | number | string
    duracion: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Member?: MemberUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Member?: MemberUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Member?: MemberUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: number
    nombre: string
    descripcion: string
    valor: Decimal | DecimalJsLike | number | string
    duracion: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateInput = {
    cedula: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    telefonoEmergencia: string
    fechaNacimiento: Date | string
    sexo: string
    direccion: string
    nacionalidad: string
    fechaInscripcion?: Date | string
    estado?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: PlanCreateNestedOneWithoutMemberInput
    Asistencia?: AsistenciaCreateNestedManyWithoutMiembroInput
    Pago?: PagoCreateNestedManyWithoutMiembroInput
  }

  export type MemberUncheckedCreateInput = {
    id?: number
    cedula: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    telefonoEmergencia: string
    fechaNacimiento: Date | string
    sexo: string
    direccion: string
    nacionalidad: string
    fechaInscripcion?: Date | string
    estado?: number | null
    planId?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Asistencia?: AsistenciaUncheckedCreateNestedManyWithoutMiembroInput
    Pago?: PagoUncheckedCreateNestedManyWithoutMiembroInput
  }

  export type MemberUpdateInput = {
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    telefonoEmergencia?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    fechaInscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneWithoutMemberNestedInput
    Asistencia?: AsistenciaUpdateManyWithoutMiembroNestedInput
    Pago?: PagoUpdateManyWithoutMiembroNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    telefonoEmergencia?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    fechaInscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    planId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Asistencia?: AsistenciaUncheckedUpdateManyWithoutMiembroNestedInput
    Pago?: PagoUncheckedUpdateManyWithoutMiembroNestedInput
  }

  export type MemberCreateManyInput = {
    id?: number
    cedula: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    telefonoEmergencia: string
    fechaNacimiento: Date | string
    sexo: string
    direccion: string
    nacionalidad: string
    fechaInscripcion?: Date | string
    estado?: number | null
    planId?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateManyMutationInput = {
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    telefonoEmergencia?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    fechaInscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    telefonoEmergencia?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    fechaInscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    planId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateInput = {
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    miembro: MemberCreateNestedOneWithoutAsistenciaInput
  }

  export type AsistenciaUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    miembroId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsistenciaUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    miembro?: MemberUpdateOneRequiredWithoutAsistenciaNestedInput
  }

  export type AsistenciaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    miembroId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateManyInput = {
    id?: number
    fecha: Date | string
    miembroId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsistenciaUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    miembroId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoCreateInput = {
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    miembro: MemberCreateNestedOneWithoutPagoInput
  }

  export type PagoUncheckedCreateInput = {
    id?: number
    fecha: Date | string
    miembroId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PagoUpdateInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    miembro?: MemberUpdateOneRequiredWithoutPagoNestedInput
  }

  export type PagoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    miembroId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoCreateManyInput = {
    id?: number
    fecha: Date | string
    miembroId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PagoUpdateManyMutationInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    miembroId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateInput = {
    nombre: string
    apellido: string
    email: string
    password: string
    estado?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rol?: RoleCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    password: string
    estado?: number | null
    rolId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rol?: RoleUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    rolId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    password: string
    estado?: number | null
    rolId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    rolId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuarioNullableRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GymCountOrderByAggregateInput = {
    id?: SortOrder
    ruc?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
  }

  export type GymAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GymMaxOrderByAggregateInput = {
    id?: SortOrder
    ruc?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
  }

  export type GymMinOrderByAggregateInput = {
    id?: SortOrder
    ruc?: SortOrder
    nombre?: SortOrder
    direccion?: SortOrder
    telefono?: SortOrder
    email?: SortOrder
  }

  export type GymSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type MemberListRelationFilter = {
    every?: MemberWhereInput
    some?: MemberWhereInput
    none?: MemberWhereInput
  }

  export type MemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    valor?: SortOrder
    duracion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    duracion?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    valor?: SortOrder
    duracion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
    valor?: SortOrder
    duracion?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    id?: SortOrder
    valor?: SortOrder
    duracion?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PlanNullableRelationFilter = {
    is?: PlanWhereInput | null
    isNot?: PlanWhereInput | null
  }

  export type AsistenciaListRelationFilter = {
    every?: AsistenciaWhereInput
    some?: AsistenciaWhereInput
    none?: AsistenciaWhereInput
  }

  export type PagoListRelationFilter = {
    every?: PagoWhereInput
    some?: PagoWhereInput
    none?: PagoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AsistenciaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PagoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    cedula?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    telefonoEmergencia?: SortOrder
    fechaNacimiento?: SortOrder
    sexo?: SortOrder
    direccion?: SortOrder
    nacionalidad?: SortOrder
    fechaInscripcion?: SortOrder
    estado?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberAvgOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    planId?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    cedula?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    telefonoEmergencia?: SortOrder
    fechaNacimiento?: SortOrder
    sexo?: SortOrder
    direccion?: SortOrder
    nacionalidad?: SortOrder
    fechaInscripcion?: SortOrder
    estado?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    cedula?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    telefono?: SortOrder
    telefonoEmergencia?: SortOrder
    fechaNacimiento?: SortOrder
    sexo?: SortOrder
    direccion?: SortOrder
    nacionalidad?: SortOrder
    fechaInscripcion?: SortOrder
    estado?: SortOrder
    planId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MemberSumOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    planId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MemberRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type AsistenciaCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    miembroId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsistenciaAvgOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
  }

  export type AsistenciaMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    miembroId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsistenciaMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    miembroId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsistenciaSumOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
  }

  export type PagoCountOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    miembroId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PagoAvgOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
  }

  export type PagoMaxOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    miembroId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PagoMinOrderByAggregateInput = {
    id?: SortOrder
    fecha?: SortOrder
    miembroId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PagoSumOrderByAggregateInput = {
    id?: SortOrder
    miembroId?: SortOrder
  }

  export type RoleNullableRelationFilter = {
    is?: RoleWhereInput | null
    isNot?: RoleWhereInput | null
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    estado?: SortOrder
    rolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    estado?: SortOrder
    rolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    estado?: SortOrder
    rolId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    estado?: SortOrder
    rolId?: SortOrder
  }

  export type UsuarioCreateNestedOneWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUncheckedCreateNestedOneWithoutRolInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput
    connect?: UsuarioWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UsuarioUpdateOneWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput
    upsert?: UsuarioUpsertWithoutRolInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRolInput, UsuarioUpdateWithoutRolInput>, UsuarioUncheckedUpdateWithoutRolInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUncheckedUpdateOneWithoutRolNestedInput = {
    create?: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutRolInput
    upsert?: UsuarioUpsertWithoutRolInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutRolInput, UsuarioUpdateWithoutRolInput>, UsuarioUncheckedUpdateWithoutRolInput>
  }

  export type MemberCreateNestedManyWithoutPlanInput = {
    create?: XOR<MemberCreateWithoutPlanInput, MemberUncheckedCreateWithoutPlanInput> | MemberCreateWithoutPlanInput[] | MemberUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutPlanInput | MemberCreateOrConnectWithoutPlanInput[]
    createMany?: MemberCreateManyPlanInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type MemberUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<MemberCreateWithoutPlanInput, MemberUncheckedCreateWithoutPlanInput> | MemberCreateWithoutPlanInput[] | MemberUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutPlanInput | MemberCreateOrConnectWithoutPlanInput[]
    createMany?: MemberCreateManyPlanInputEnvelope
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type MemberUpdateManyWithoutPlanNestedInput = {
    create?: XOR<MemberCreateWithoutPlanInput, MemberUncheckedCreateWithoutPlanInput> | MemberCreateWithoutPlanInput[] | MemberUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutPlanInput | MemberCreateOrConnectWithoutPlanInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutPlanInput | MemberUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: MemberCreateManyPlanInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutPlanInput | MemberUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutPlanInput | MemberUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type MemberUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<MemberCreateWithoutPlanInput, MemberUncheckedCreateWithoutPlanInput> | MemberCreateWithoutPlanInput[] | MemberUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MemberCreateOrConnectWithoutPlanInput | MemberCreateOrConnectWithoutPlanInput[]
    upsert?: MemberUpsertWithWhereUniqueWithoutPlanInput | MemberUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: MemberCreateManyPlanInputEnvelope
    set?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    disconnect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    delete?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    connect?: MemberWhereUniqueInput | MemberWhereUniqueInput[]
    update?: MemberUpdateWithWhereUniqueWithoutPlanInput | MemberUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: MemberUpdateManyWithWhereWithoutPlanInput | MemberUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: MemberScalarWhereInput | MemberScalarWhereInput[]
  }

  export type PlanCreateNestedOneWithoutMemberInput = {
    create?: XOR<PlanCreateWithoutMemberInput, PlanUncheckedCreateWithoutMemberInput>
    connectOrCreate?: PlanCreateOrConnectWithoutMemberInput
    connect?: PlanWhereUniqueInput
  }

  export type AsistenciaCreateNestedManyWithoutMiembroInput = {
    create?: XOR<AsistenciaCreateWithoutMiembroInput, AsistenciaUncheckedCreateWithoutMiembroInput> | AsistenciaCreateWithoutMiembroInput[] | AsistenciaUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutMiembroInput | AsistenciaCreateOrConnectWithoutMiembroInput[]
    createMany?: AsistenciaCreateManyMiembroInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type PagoCreateNestedManyWithoutMiembroInput = {
    create?: XOR<PagoCreateWithoutMiembroInput, PagoUncheckedCreateWithoutMiembroInput> | PagoCreateWithoutMiembroInput[] | PagoUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutMiembroInput | PagoCreateOrConnectWithoutMiembroInput[]
    createMany?: PagoCreateManyMiembroInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type AsistenciaUncheckedCreateNestedManyWithoutMiembroInput = {
    create?: XOR<AsistenciaCreateWithoutMiembroInput, AsistenciaUncheckedCreateWithoutMiembroInput> | AsistenciaCreateWithoutMiembroInput[] | AsistenciaUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutMiembroInput | AsistenciaCreateOrConnectWithoutMiembroInput[]
    createMany?: AsistenciaCreateManyMiembroInputEnvelope
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
  }

  export type PagoUncheckedCreateNestedManyWithoutMiembroInput = {
    create?: XOR<PagoCreateWithoutMiembroInput, PagoUncheckedCreateWithoutMiembroInput> | PagoCreateWithoutMiembroInput[] | PagoUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutMiembroInput | PagoCreateOrConnectWithoutMiembroInput[]
    createMany?: PagoCreateManyMiembroInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlanUpdateOneWithoutMemberNestedInput = {
    create?: XOR<PlanCreateWithoutMemberInput, PlanUncheckedCreateWithoutMemberInput>
    connectOrCreate?: PlanCreateOrConnectWithoutMemberInput
    upsert?: PlanUpsertWithoutMemberInput
    disconnect?: PlanWhereInput | boolean
    delete?: PlanWhereInput | boolean
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutMemberInput, PlanUpdateWithoutMemberInput>, PlanUncheckedUpdateWithoutMemberInput>
  }

  export type AsistenciaUpdateManyWithoutMiembroNestedInput = {
    create?: XOR<AsistenciaCreateWithoutMiembroInput, AsistenciaUncheckedCreateWithoutMiembroInput> | AsistenciaCreateWithoutMiembroInput[] | AsistenciaUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutMiembroInput | AsistenciaCreateOrConnectWithoutMiembroInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutMiembroInput | AsistenciaUpsertWithWhereUniqueWithoutMiembroInput[]
    createMany?: AsistenciaCreateManyMiembroInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutMiembroInput | AsistenciaUpdateWithWhereUniqueWithoutMiembroInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutMiembroInput | AsistenciaUpdateManyWithWhereWithoutMiembroInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type PagoUpdateManyWithoutMiembroNestedInput = {
    create?: XOR<PagoCreateWithoutMiembroInput, PagoUncheckedCreateWithoutMiembroInput> | PagoCreateWithoutMiembroInput[] | PagoUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutMiembroInput | PagoCreateOrConnectWithoutMiembroInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutMiembroInput | PagoUpsertWithWhereUniqueWithoutMiembroInput[]
    createMany?: PagoCreateManyMiembroInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutMiembroInput | PagoUpdateWithWhereUniqueWithoutMiembroInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutMiembroInput | PagoUpdateManyWithWhereWithoutMiembroInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type AsistenciaUncheckedUpdateManyWithoutMiembroNestedInput = {
    create?: XOR<AsistenciaCreateWithoutMiembroInput, AsistenciaUncheckedCreateWithoutMiembroInput> | AsistenciaCreateWithoutMiembroInput[] | AsistenciaUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: AsistenciaCreateOrConnectWithoutMiembroInput | AsistenciaCreateOrConnectWithoutMiembroInput[]
    upsert?: AsistenciaUpsertWithWhereUniqueWithoutMiembroInput | AsistenciaUpsertWithWhereUniqueWithoutMiembroInput[]
    createMany?: AsistenciaCreateManyMiembroInputEnvelope
    set?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    disconnect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    delete?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    connect?: AsistenciaWhereUniqueInput | AsistenciaWhereUniqueInput[]
    update?: AsistenciaUpdateWithWhereUniqueWithoutMiembroInput | AsistenciaUpdateWithWhereUniqueWithoutMiembroInput[]
    updateMany?: AsistenciaUpdateManyWithWhereWithoutMiembroInput | AsistenciaUpdateManyWithWhereWithoutMiembroInput[]
    deleteMany?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
  }

  export type PagoUncheckedUpdateManyWithoutMiembroNestedInput = {
    create?: XOR<PagoCreateWithoutMiembroInput, PagoUncheckedCreateWithoutMiembroInput> | PagoCreateWithoutMiembroInput[] | PagoUncheckedCreateWithoutMiembroInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutMiembroInput | PagoCreateOrConnectWithoutMiembroInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutMiembroInput | PagoUpsertWithWhereUniqueWithoutMiembroInput[]
    createMany?: PagoCreateManyMiembroInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutMiembroInput | PagoUpdateWithWhereUniqueWithoutMiembroInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutMiembroInput | PagoUpdateManyWithWhereWithoutMiembroInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type MemberCreateNestedOneWithoutAsistenciaInput = {
    create?: XOR<MemberCreateWithoutAsistenciaInput, MemberUncheckedCreateWithoutAsistenciaInput>
    connectOrCreate?: MemberCreateOrConnectWithoutAsistenciaInput
    connect?: MemberWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutAsistenciaNestedInput = {
    create?: XOR<MemberCreateWithoutAsistenciaInput, MemberUncheckedCreateWithoutAsistenciaInput>
    connectOrCreate?: MemberCreateOrConnectWithoutAsistenciaInput
    upsert?: MemberUpsertWithoutAsistenciaInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutAsistenciaInput, MemberUpdateWithoutAsistenciaInput>, MemberUncheckedUpdateWithoutAsistenciaInput>
  }

  export type MemberCreateNestedOneWithoutPagoInput = {
    create?: XOR<MemberCreateWithoutPagoInput, MemberUncheckedCreateWithoutPagoInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPagoInput
    connect?: MemberWhereUniqueInput
  }

  export type MemberUpdateOneRequiredWithoutPagoNestedInput = {
    create?: XOR<MemberCreateWithoutPagoInput, MemberUncheckedCreateWithoutPagoInput>
    connectOrCreate?: MemberCreateOrConnectWithoutPagoInput
    upsert?: MemberUpsertWithoutPagoInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutPagoInput, MemberUpdateWithoutPagoInput>, MemberUncheckedUpdateWithoutPagoInput>
  }

  export type RoleCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<RoleCreateWithoutUsuarioInput, RoleUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsuarioInput
    connect?: RoleWhereUniqueInput
  }

  export type RoleUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<RoleCreateWithoutUsuarioInput, RoleUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsuarioInput
    upsert?: RoleUpsertWithoutUsuarioInput
    disconnect?: RoleWhereInput | boolean
    delete?: RoleWhereInput | boolean
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsuarioInput, RoleUpdateWithoutUsuarioInput>, RoleUncheckedUpdateWithoutUsuarioInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UsuarioCreateWithoutRolInput = {
    nombre: string
    apellido: string
    email: string
    password: string
    estado?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutRolInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    password: string
    estado?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutRolInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
  }

  export type UsuarioUpsertWithoutRolInput = {
    update: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
    create: XOR<UsuarioCreateWithoutRolInput, UsuarioUncheckedCreateWithoutRolInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutRolInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutRolInput, UsuarioUncheckedUpdateWithoutRolInput>
  }

  export type UsuarioUpdateWithoutRolInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutRolInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateWithoutPlanInput = {
    cedula: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    telefonoEmergencia: string
    fechaNacimiento: Date | string
    sexo: string
    direccion: string
    nacionalidad: string
    fechaInscripcion?: Date | string
    estado?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Asistencia?: AsistenciaCreateNestedManyWithoutMiembroInput
    Pago?: PagoCreateNestedManyWithoutMiembroInput
  }

  export type MemberUncheckedCreateWithoutPlanInput = {
    id?: number
    cedula: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    telefonoEmergencia: string
    fechaNacimiento: Date | string
    sexo: string
    direccion: string
    nacionalidad: string
    fechaInscripcion?: Date | string
    estado?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Asistencia?: AsistenciaUncheckedCreateNestedManyWithoutMiembroInput
    Pago?: PagoUncheckedCreateNestedManyWithoutMiembroInput
  }

  export type MemberCreateOrConnectWithoutPlanInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutPlanInput, MemberUncheckedCreateWithoutPlanInput>
  }

  export type MemberCreateManyPlanInputEnvelope = {
    data: MemberCreateManyPlanInput | MemberCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithWhereUniqueWithoutPlanInput = {
    where: MemberWhereUniqueInput
    update: XOR<MemberUpdateWithoutPlanInput, MemberUncheckedUpdateWithoutPlanInput>
    create: XOR<MemberCreateWithoutPlanInput, MemberUncheckedCreateWithoutPlanInput>
  }

  export type MemberUpdateWithWhereUniqueWithoutPlanInput = {
    where: MemberWhereUniqueInput
    data: XOR<MemberUpdateWithoutPlanInput, MemberUncheckedUpdateWithoutPlanInput>
  }

  export type MemberUpdateManyWithWhereWithoutPlanInput = {
    where: MemberScalarWhereInput
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyWithoutPlanInput>
  }

  export type MemberScalarWhereInput = {
    AND?: MemberScalarWhereInput | MemberScalarWhereInput[]
    OR?: MemberScalarWhereInput[]
    NOT?: MemberScalarWhereInput | MemberScalarWhereInput[]
    id?: IntFilter<"Member"> | number
    cedula?: StringFilter<"Member"> | string
    nombre?: StringFilter<"Member"> | string
    apellido?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    telefono?: StringFilter<"Member"> | string
    telefonoEmergencia?: StringFilter<"Member"> | string
    fechaNacimiento?: DateTimeFilter<"Member"> | Date | string
    sexo?: StringFilter<"Member"> | string
    direccion?: StringFilter<"Member"> | string
    nacionalidad?: StringFilter<"Member"> | string
    fechaInscripcion?: DateTimeFilter<"Member"> | Date | string
    estado?: IntNullableFilter<"Member"> | number | null
    planId?: IntFilter<"Member"> | number
    createdAt?: DateTimeFilter<"Member"> | Date | string
    updatedAt?: DateTimeFilter<"Member"> | Date | string
  }

  export type PlanCreateWithoutMemberInput = {
    nombre: string
    descripcion: string
    valor: Decimal | DecimalJsLike | number | string
    duracion: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanUncheckedCreateWithoutMemberInput = {
    id?: number
    nombre: string
    descripcion: string
    valor: Decimal | DecimalJsLike | number | string
    duracion: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlanCreateOrConnectWithoutMemberInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutMemberInput, PlanUncheckedCreateWithoutMemberInput>
  }

  export type AsistenciaCreateWithoutMiembroInput = {
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsistenciaUncheckedCreateWithoutMiembroInput = {
    id?: number
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsistenciaCreateOrConnectWithoutMiembroInput = {
    where: AsistenciaWhereUniqueInput
    create: XOR<AsistenciaCreateWithoutMiembroInput, AsistenciaUncheckedCreateWithoutMiembroInput>
  }

  export type AsistenciaCreateManyMiembroInputEnvelope = {
    data: AsistenciaCreateManyMiembroInput | AsistenciaCreateManyMiembroInput[]
    skipDuplicates?: boolean
  }

  export type PagoCreateWithoutMiembroInput = {
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PagoUncheckedCreateWithoutMiembroInput = {
    id?: number
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PagoCreateOrConnectWithoutMiembroInput = {
    where: PagoWhereUniqueInput
    create: XOR<PagoCreateWithoutMiembroInput, PagoUncheckedCreateWithoutMiembroInput>
  }

  export type PagoCreateManyMiembroInputEnvelope = {
    data: PagoCreateManyMiembroInput | PagoCreateManyMiembroInput[]
    skipDuplicates?: boolean
  }

  export type PlanUpsertWithoutMemberInput = {
    update: XOR<PlanUpdateWithoutMemberInput, PlanUncheckedUpdateWithoutMemberInput>
    create: XOR<PlanCreateWithoutMemberInput, PlanUncheckedCreateWithoutMemberInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutMemberInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutMemberInput, PlanUncheckedUpdateWithoutMemberInput>
  }

  export type PlanUpdateWithoutMemberInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    valor?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    duracion?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaUpsertWithWhereUniqueWithoutMiembroInput = {
    where: AsistenciaWhereUniqueInput
    update: XOR<AsistenciaUpdateWithoutMiembroInput, AsistenciaUncheckedUpdateWithoutMiembroInput>
    create: XOR<AsistenciaCreateWithoutMiembroInput, AsistenciaUncheckedCreateWithoutMiembroInput>
  }

  export type AsistenciaUpdateWithWhereUniqueWithoutMiembroInput = {
    where: AsistenciaWhereUniqueInput
    data: XOR<AsistenciaUpdateWithoutMiembroInput, AsistenciaUncheckedUpdateWithoutMiembroInput>
  }

  export type AsistenciaUpdateManyWithWhereWithoutMiembroInput = {
    where: AsistenciaScalarWhereInput
    data: XOR<AsistenciaUpdateManyMutationInput, AsistenciaUncheckedUpdateManyWithoutMiembroInput>
  }

  export type AsistenciaScalarWhereInput = {
    AND?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
    OR?: AsistenciaScalarWhereInput[]
    NOT?: AsistenciaScalarWhereInput | AsistenciaScalarWhereInput[]
    id?: IntFilter<"Asistencia"> | number
    fecha?: DateTimeFilter<"Asistencia"> | Date | string
    miembroId?: IntFilter<"Asistencia"> | number
    createdAt?: DateTimeFilter<"Asistencia"> | Date | string
    updatedAt?: DateTimeFilter<"Asistencia"> | Date | string
  }

  export type PagoUpsertWithWhereUniqueWithoutMiembroInput = {
    where: PagoWhereUniqueInput
    update: XOR<PagoUpdateWithoutMiembroInput, PagoUncheckedUpdateWithoutMiembroInput>
    create: XOR<PagoCreateWithoutMiembroInput, PagoUncheckedCreateWithoutMiembroInput>
  }

  export type PagoUpdateWithWhereUniqueWithoutMiembroInput = {
    where: PagoWhereUniqueInput
    data: XOR<PagoUpdateWithoutMiembroInput, PagoUncheckedUpdateWithoutMiembroInput>
  }

  export type PagoUpdateManyWithWhereWithoutMiembroInput = {
    where: PagoScalarWhereInput
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyWithoutMiembroInput>
  }

  export type PagoScalarWhereInput = {
    AND?: PagoScalarWhereInput | PagoScalarWhereInput[]
    OR?: PagoScalarWhereInput[]
    NOT?: PagoScalarWhereInput | PagoScalarWhereInput[]
    id?: IntFilter<"Pago"> | number
    fecha?: DateTimeFilter<"Pago"> | Date | string
    miembroId?: IntFilter<"Pago"> | number
    createdAt?: DateTimeFilter<"Pago"> | Date | string
    updatedAt?: DateTimeFilter<"Pago"> | Date | string
  }

  export type MemberCreateWithoutAsistenciaInput = {
    cedula: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    telefonoEmergencia: string
    fechaNacimiento: Date | string
    sexo: string
    direccion: string
    nacionalidad: string
    fechaInscripcion?: Date | string
    estado?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: PlanCreateNestedOneWithoutMemberInput
    Pago?: PagoCreateNestedManyWithoutMiembroInput
  }

  export type MemberUncheckedCreateWithoutAsistenciaInput = {
    id?: number
    cedula: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    telefonoEmergencia: string
    fechaNacimiento: Date | string
    sexo: string
    direccion: string
    nacionalidad: string
    fechaInscripcion?: Date | string
    estado?: number | null
    planId?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Pago?: PagoUncheckedCreateNestedManyWithoutMiembroInput
  }

  export type MemberCreateOrConnectWithoutAsistenciaInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutAsistenciaInput, MemberUncheckedCreateWithoutAsistenciaInput>
  }

  export type MemberUpsertWithoutAsistenciaInput = {
    update: XOR<MemberUpdateWithoutAsistenciaInput, MemberUncheckedUpdateWithoutAsistenciaInput>
    create: XOR<MemberCreateWithoutAsistenciaInput, MemberUncheckedCreateWithoutAsistenciaInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutAsistenciaInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutAsistenciaInput, MemberUncheckedUpdateWithoutAsistenciaInput>
  }

  export type MemberUpdateWithoutAsistenciaInput = {
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    telefonoEmergencia?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    fechaInscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneWithoutMemberNestedInput
    Pago?: PagoUpdateManyWithoutMiembroNestedInput
  }

  export type MemberUncheckedUpdateWithoutAsistenciaInput = {
    id?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    telefonoEmergencia?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    fechaInscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    planId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Pago?: PagoUncheckedUpdateManyWithoutMiembroNestedInput
  }

  export type MemberCreateWithoutPagoInput = {
    cedula: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    telefonoEmergencia: string
    fechaNacimiento: Date | string
    sexo: string
    direccion: string
    nacionalidad: string
    fechaInscripcion?: Date | string
    estado?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: PlanCreateNestedOneWithoutMemberInput
    Asistencia?: AsistenciaCreateNestedManyWithoutMiembroInput
  }

  export type MemberUncheckedCreateWithoutPagoInput = {
    id?: number
    cedula: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    telefonoEmergencia: string
    fechaNacimiento: Date | string
    sexo: string
    direccion: string
    nacionalidad: string
    fechaInscripcion?: Date | string
    estado?: number | null
    planId?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Asistencia?: AsistenciaUncheckedCreateNestedManyWithoutMiembroInput
  }

  export type MemberCreateOrConnectWithoutPagoInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutPagoInput, MemberUncheckedCreateWithoutPagoInput>
  }

  export type MemberUpsertWithoutPagoInput = {
    update: XOR<MemberUpdateWithoutPagoInput, MemberUncheckedUpdateWithoutPagoInput>
    create: XOR<MemberCreateWithoutPagoInput, MemberUncheckedCreateWithoutPagoInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutPagoInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutPagoInput, MemberUncheckedUpdateWithoutPagoInput>
  }

  export type MemberUpdateWithoutPagoInput = {
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    telefonoEmergencia?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    fechaInscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneWithoutMemberNestedInput
    Asistencia?: AsistenciaUpdateManyWithoutMiembroNestedInput
  }

  export type MemberUncheckedUpdateWithoutPagoInput = {
    id?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    telefonoEmergencia?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    fechaInscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    planId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Asistencia?: AsistenciaUncheckedUpdateManyWithoutMiembroNestedInput
  }

  export type RoleCreateWithoutUsuarioInput = {
    nombre: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nombre: string
    descripcion: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleCreateOrConnectWithoutUsuarioInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsuarioInput, RoleUncheckedCreateWithoutUsuarioInput>
  }

  export type RoleUpsertWithoutUsuarioInput = {
    update: XOR<RoleUpdateWithoutUsuarioInput, RoleUncheckedUpdateWithoutUsuarioInput>
    create: XOR<RoleCreateWithoutUsuarioInput, RoleUncheckedCreateWithoutUsuarioInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsuarioInput, RoleUncheckedUpdateWithoutUsuarioInput>
  }

  export type RoleUpdateWithoutUsuarioInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MemberCreateManyPlanInput = {
    id?: number
    cedula: string
    nombre: string
    apellido: string
    email: string
    telefono: string
    telefonoEmergencia: string
    fechaNacimiento: Date | string
    sexo: string
    direccion: string
    nacionalidad: string
    fechaInscripcion?: Date | string
    estado?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MemberUpdateWithoutPlanInput = {
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    telefonoEmergencia?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    fechaInscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Asistencia?: AsistenciaUpdateManyWithoutMiembroNestedInput
    Pago?: PagoUpdateManyWithoutMiembroNestedInput
  }

  export type MemberUncheckedUpdateWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    telefonoEmergencia?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    fechaInscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Asistencia?: AsistenciaUncheckedUpdateManyWithoutMiembroNestedInput
    Pago?: PagoUncheckedUpdateManyWithoutMiembroNestedInput
  }

  export type MemberUncheckedUpdateManyWithoutPlanInput = {
    id?: IntFieldUpdateOperationsInput | number
    cedula?: StringFieldUpdateOperationsInput | string
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefono?: StringFieldUpdateOperationsInput | string
    telefonoEmergencia?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    nacionalidad?: StringFieldUpdateOperationsInput | string
    fechaInscripcion?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaCreateManyMiembroInput = {
    id?: number
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PagoCreateManyMiembroInput = {
    id?: number
    fecha: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsistenciaUpdateWithoutMiembroInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaUncheckedUpdateWithoutMiembroInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsistenciaUncheckedUpdateManyWithoutMiembroInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoUpdateWithoutMiembroInput = {
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoUncheckedUpdateWithoutMiembroInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoUncheckedUpdateManyWithoutMiembroInput = {
    id?: IntFieldUpdateOperationsInput | number
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PlanCountOutputTypeDefaultArgs instead
     */
    export type PlanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemberCountOutputTypeDefaultArgs instead
     */
    export type MemberCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemberCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GymDefaultArgs instead
     */
    export type GymArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GymDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlanDefaultArgs instead
     */
    export type PlanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MemberDefaultArgs instead
     */
    export type MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MemberDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AsistenciaDefaultArgs instead
     */
    export type AsistenciaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AsistenciaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PagoDefaultArgs instead
     */
    export type PagoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PagoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}