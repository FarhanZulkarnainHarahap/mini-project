
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Point
 * 
 */
export type Point = $Result.DefaultSelection<Prisma.$PointPayload>
/**
 * Model ReferralCode
 * 
 */
export type ReferralCode = $Result.DefaultSelection<Prisma.$ReferralCodePayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventCategory
 * 
 */
export type EventCategory = $Result.DefaultSelection<Prisma.$EventCategoryPayload>
/**
 * Model EventImage
 * 
 */
export type EventImage = $Result.DefaultSelection<Prisma.$EventImagePayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model Voucher
 * 
 */
export type Voucher = $Result.DefaultSelection<Prisma.$VoucherPayload>
/**
 * Model Discount
 * 
 */
export type Discount = $Result.DefaultSelection<Prisma.$DiscountPayload>
/**
 * Model Transaction
 * 
 */
export type Transaction = $Result.DefaultSelection<Prisma.$TransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ORGANIZER: 'ORGANIZER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const CategoryRole: {
  THEATER: 'THEATER',
  SPORTS: 'SPORTS',
  ACADEMY: 'ACADEMY',
  CONCERNT: 'CONCERNT',
  TRAVEL: 'TRAVEL'
};

export type CategoryRole = (typeof CategoryRole)[keyof typeof CategoryRole]


export const TicketRole: {
  REGULAR: 'REGULAR',
  VIP: 'VIP',
  VVIP: 'VVIP'
};

export type TicketRole = (typeof TicketRole)[keyof typeof TicketRole]


export const StatusRole: {
  AVAILABLE: 'AVAILABLE',
  REDEEMED: 'REDEEMED',
  EXPIRED: 'EXPIRED'
};

export type StatusRole = (typeof StatusRole)[keyof typeof StatusRole]


export const StatusPaid: {
  SUCCESS: 'SUCCESS',
  PENDING: 'PENDING',
  FAILED: 'FAILED'
};

export type StatusPaid = (typeof StatusPaid)[keyof typeof StatusPaid]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type CategoryRole = $Enums.CategoryRole

export const CategoryRole: typeof $Enums.CategoryRole

export type TicketRole = $Enums.TicketRole

export const TicketRole: typeof $Enums.TicketRole

export type StatusRole = $Enums.StatusRole

export const StatusRole: typeof $Enums.StatusRole

export type StatusPaid = $Enums.StatusPaid

export const StatusPaid: typeof $Enums.StatusPaid

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.point`: Exposes CRUD operations for the **Point** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Points
    * const points = await prisma.point.findMany()
    * ```
    */
  get point(): Prisma.PointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referralCode`: Exposes CRUD operations for the **ReferralCode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferralCodes
    * const referralCodes = await prisma.referralCode.findMany()
    * ```
    */
  get referralCode(): Prisma.ReferralCodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventCategory`: Exposes CRUD operations for the **EventCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventCategories
    * const eventCategories = await prisma.eventCategory.findMany()
    * ```
    */
  get eventCategory(): Prisma.EventCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventImage`: Exposes CRUD operations for the **EventImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventImages
    * const eventImages = await prisma.eventImage.findMany()
    * ```
    */
  get eventImage(): Prisma.EventImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voucher`: Exposes CRUD operations for the **Voucher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vouchers
    * const vouchers = await prisma.voucher.findMany()
    * ```
    */
  get voucher(): Prisma.VoucherDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.discount`: Exposes CRUD operations for the **Discount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Discounts
    * const discounts = await prisma.discount.findMany()
    * ```
    */
  get discount(): Prisma.DiscountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **Transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.TransactionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Point: 'Point',
    ReferralCode: 'ReferralCode',
    Category: 'Category',
    Event: 'Event',
    EventCategory: 'EventCategory',
    EventImage: 'EventImage',
    Image: 'Image',
    Review: 'Review',
    Ticket: 'Ticket',
    Voucher: 'Voucher',
    Discount: 'Discount',
    Transaction: 'Transaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "point" | "referralCode" | "category" | "event" | "eventCategory" | "eventImage" | "image" | "review" | "ticket" | "voucher" | "discount" | "transaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Point: {
        payload: Prisma.$PointPayload<ExtArgs>
        fields: Prisma.PointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findFirst: {
            args: Prisma.PointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          findMany: {
            args: Prisma.PointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          create: {
            args: Prisma.PointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          createMany: {
            args: Prisma.PointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          delete: {
            args: Prisma.PointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          update: {
            args: Prisma.PointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          deleteMany: {
            args: Prisma.PointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>[]
          }
          upsert: {
            args: Prisma.PointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PointPayload>
          }
          aggregate: {
            args: Prisma.PointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePoint>
          }
          groupBy: {
            args: Prisma.PointGroupByArgs<ExtArgs>
            result: $Utils.Optional<PointGroupByOutputType>[]
          }
          count: {
            args: Prisma.PointCountArgs<ExtArgs>
            result: $Utils.Optional<PointCountAggregateOutputType> | number
          }
        }
      }
      ReferralCode: {
        payload: Prisma.$ReferralCodePayload<ExtArgs>
        fields: Prisma.ReferralCodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralCodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralCodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCodePayload>
          }
          findFirst: {
            args: Prisma.ReferralCodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralCodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCodePayload>
          }
          findMany: {
            args: Prisma.ReferralCodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCodePayload>[]
          }
          create: {
            args: Prisma.ReferralCodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCodePayload>
          }
          createMany: {
            args: Prisma.ReferralCodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferralCodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCodePayload>[]
          }
          delete: {
            args: Prisma.ReferralCodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCodePayload>
          }
          update: {
            args: Prisma.ReferralCodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCodePayload>
          }
          deleteMany: {
            args: Prisma.ReferralCodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralCodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReferralCodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCodePayload>[]
          }
          upsert: {
            args: Prisma.ReferralCodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralCodePayload>
          }
          aggregate: {
            args: Prisma.ReferralCodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferralCode>
          }
          groupBy: {
            args: Prisma.ReferralCodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralCodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferralCodeCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralCodeCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventCategory: {
        payload: Prisma.$EventCategoryPayload<ExtArgs>
        fields: Prisma.EventCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>
          }
          findFirst: {
            args: Prisma.EventCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>
          }
          findMany: {
            args: Prisma.EventCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>[]
          }
          create: {
            args: Prisma.EventCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>
          }
          createMany: {
            args: Prisma.EventCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>[]
          }
          delete: {
            args: Prisma.EventCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>
          }
          update: {
            args: Prisma.EventCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>
          }
          deleteMany: {
            args: Prisma.EventCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventCategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>[]
          }
          upsert: {
            args: Prisma.EventCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventCategoryPayload>
          }
          aggregate: {
            args: Prisma.EventCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventCategory>
          }
          groupBy: {
            args: Prisma.EventCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<EventCategoryCountAggregateOutputType> | number
          }
        }
      }
      EventImage: {
        payload: Prisma.$EventImagePayload<ExtArgs>
        fields: Prisma.EventImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          findFirst: {
            args: Prisma.EventImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          findMany: {
            args: Prisma.EventImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>[]
          }
          create: {
            args: Prisma.EventImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          createMany: {
            args: Prisma.EventImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>[]
          }
          delete: {
            args: Prisma.EventImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          update: {
            args: Prisma.EventImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          deleteMany: {
            args: Prisma.EventImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>[]
          }
          upsert: {
            args: Prisma.EventImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventImagePayload>
          }
          aggregate: {
            args: Prisma.EventImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventImage>
          }
          groupBy: {
            args: Prisma.EventImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventImageCountArgs<ExtArgs>
            result: $Utils.Optional<EventImageCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      Voucher: {
        payload: Prisma.$VoucherPayload<ExtArgs>
        fields: Prisma.VoucherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoucherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoucherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findFirst: {
            args: Prisma.VoucherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoucherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          findMany: {
            args: Prisma.VoucherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          create: {
            args: Prisma.VoucherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          createMany: {
            args: Prisma.VoucherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoucherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          delete: {
            args: Prisma.VoucherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          update: {
            args: Prisma.VoucherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          deleteMany: {
            args: Prisma.VoucherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoucherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoucherUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>[]
          }
          upsert: {
            args: Prisma.VoucherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoucherPayload>
          }
          aggregate: {
            args: Prisma.VoucherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoucher>
          }
          groupBy: {
            args: Prisma.VoucherGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoucherGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoucherCountArgs<ExtArgs>
            result: $Utils.Optional<VoucherCountAggregateOutputType> | number
          }
        }
      }
      Discount: {
        payload: Prisma.$DiscountPayload<ExtArgs>
        fields: Prisma.DiscountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DiscountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DiscountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          findFirst: {
            args: Prisma.DiscountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DiscountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          findMany: {
            args: Prisma.DiscountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[]
          }
          create: {
            args: Prisma.DiscountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          createMany: {
            args: Prisma.DiscountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DiscountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[]
          }
          delete: {
            args: Prisma.DiscountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          update: {
            args: Prisma.DiscountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          deleteMany: {
            args: Prisma.DiscountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DiscountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DiscountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>[]
          }
          upsert: {
            args: Prisma.DiscountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DiscountPayload>
          }
          aggregate: {
            args: Prisma.DiscountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDiscount>
          }
          groupBy: {
            args: Prisma.DiscountGroupByArgs<ExtArgs>
            result: $Utils.Optional<DiscountGroupByOutputType>[]
          }
          count: {
            args: Prisma.DiscountCountArgs<ExtArgs>
            result: $Utils.Optional<DiscountCountAggregateOutputType> | number
          }
        }
      }
      Transaction: {
        payload: Prisma.$TransactionPayload<ExtArgs>
        fields: Prisma.TransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findFirst: {
            args: Prisma.TransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          findMany: {
            args: Prisma.TransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          create: {
            args: Prisma.TransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          createMany: {
            args: Prisma.TransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          delete: {
            args: Prisma.TransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          update: {
            args: Prisma.TransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          deleteMany: {
            args: Prisma.TransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>[]
          }
          upsert: {
            args: Prisma.TransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.TransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    point?: PointOmit
    referralCode?: ReferralCodeOmit
    category?: CategoryOmit
    event?: EventOmit
    eventCategory?: EventCategoryOmit
    eventImage?: EventImageOmit
    image?: ImageOmit
    review?: ReviewOmit
    ticket?: TicketOmit
    voucher?: VoucherOmit
    discount?: DiscountOmit
    transaction?: TransactionOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Event: number
    Ticket: number
    Transaction: number
    Review: number
    Point: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | UserCountOutputTypeCountEventArgs
    Ticket?: boolean | UserCountOutputTypeCountTicketArgs
    Transaction?: boolean | UserCountOutputTypeCountTransactionArgs
    Review?: boolean | UserCountOutputTypeCountReviewArgs
    Point?: boolean | UserCountOutputTypeCountPointArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    EventCategory: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventCategory?: boolean | CategoryCountOutputTypeCountEventCategoryArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountEventCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventCategoryWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    EventCategory: number
    Voucher: number
    Transaction: number
    Review: number
    EventImage: number
    Discount: number
    Ticket: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventCategory?: boolean | EventCountOutputTypeCountEventCategoryArgs
    Voucher?: boolean | EventCountOutputTypeCountVoucherArgs
    Transaction?: boolean | EventCountOutputTypeCountTransactionArgs
    Review?: boolean | EventCountOutputTypeCountReviewArgs
    EventImage?: boolean | EventCountOutputTypeCountEventImageArgs
    Discount?: boolean | EventCountOutputTypeCountDiscountArgs
    Ticket?: boolean | EventCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventCategoryWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountVoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventImageWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountDiscountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    ImagePreview: number
    ImageContent: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ImagePreview?: boolean | ImageCountOutputTypeCountImagePreviewArgs
    ImageContent?: boolean | ImageCountOutputTypeCountImageContentArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountImagePreviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventImageWhereInput
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountImageContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventImageWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    Transaction: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | TicketCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type VoucherCountOutputType
   */

  export type VoucherCountOutputType = {
    Transaction: number
  }

  export type VoucherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | VoucherCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoucherCountOutputType
     */
    select?: VoucherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VoucherCountOutputType without action
   */
  export type VoucherCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Count Type DiscountCountOutputType
   */

  export type DiscountCountOutputType = {
    Transaction: number
  }

  export type DiscountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Transaction?: boolean | DiscountCountOutputTypeCountTransactionArgs
  }

  // Custom InputTypes
  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DiscountCountOutputType
     */
    select?: DiscountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DiscountCountOutputType without action
   */
  export type DiscountCountOutputTypeCountTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    username: string | null
    password: string | null
    phoneNumber: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    username: string | null
    password: string | null
    phoneNumber: string | null
    role: $Enums.Role | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    username: number
    password: number
    phoneNumber: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    username?: true
    password?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    username?: true
    password?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    username?: true
    password?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber: string | null
    role: $Enums.Role
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    Event?: boolean | User$EventArgs<ExtArgs>
    Ticket?: boolean | User$TicketArgs<ExtArgs>
    Transaction?: boolean | User$TransactionArgs<ExtArgs>
    Review?: boolean | User$ReviewArgs<ExtArgs>
    ReferralCode?: boolean | User$ReferralCodeArgs<ExtArgs>
    Point?: boolean | User$PointArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "username" | "password" | "phoneNumber" | "role" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | User$EventArgs<ExtArgs>
    Ticket?: boolean | User$TicketArgs<ExtArgs>
    Transaction?: boolean | User$TransactionArgs<ExtArgs>
    Review?: boolean | User$ReviewArgs<ExtArgs>
    ReferralCode?: boolean | User$ReferralCodeArgs<ExtArgs>
    Point?: boolean | User$PointArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>[]
      Ticket: Prisma.$TicketPayload<ExtArgs>[]
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
      Review: Prisma.$ReviewPayload<ExtArgs>[]
      ReferralCode: Prisma.$ReferralCodePayload<ExtArgs> | null
      Point: Prisma.$PointPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      username: string
      password: string
      phoneNumber: string | null
      role: $Enums.Role
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends User$EventArgs<ExtArgs> = {}>(args?: Subset<T, User$EventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Ticket<T extends User$TicketArgs<ExtArgs> = {}>(args?: Subset<T, User$TicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Transaction<T extends User$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, User$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Review<T extends User$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, User$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ReferralCode<T extends User$ReferralCodeArgs<ExtArgs> = {}>(args?: Subset<T, User$ReferralCodeArgs<ExtArgs>>): Prisma__ReferralCodeClient<$Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Point<T extends User$PointArgs<ExtArgs> = {}>(args?: Subset<T, User$PointArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Event
   */
  export type User$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.Ticket
   */
  export type User$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.Transaction
   */
  export type User$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * User.Review
   */
  export type User$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.ReferralCode
   */
  export type User$ReferralCodeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCode
     */
    select?: ReferralCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCode
     */
    omit?: ReferralCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCodeInclude<ExtArgs> | null
    where?: ReferralCodeWhereInput
  }

  /**
   * User.Point
   */
  export type User$PointArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    where?: PointWhereInput
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    cursor?: PointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Point
   */

  export type AggregatePoint = {
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  export type PointAvgAggregateOutputType = {
    amount: number | null
  }

  export type PointSumAggregateOutputType = {
    amount: number | null
  }

  export type PointMinAggregateOutputType = {
    id: string | null
    amount: number | null
    userId: string | null
    expiredAt: Date | null
    createAt: Date | null
  }

  export type PointMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    userId: string | null
    expiredAt: Date | null
    createAt: Date | null
  }

  export type PointCountAggregateOutputType = {
    id: number
    amount: number
    userId: number
    expiredAt: number
    createAt: number
    _all: number
  }


  export type PointAvgAggregateInputType = {
    amount?: true
  }

  export type PointSumAggregateInputType = {
    amount?: true
  }

  export type PointMinAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    expiredAt?: true
    createAt?: true
  }

  export type PointMaxAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    expiredAt?: true
    createAt?: true
  }

  export type PointCountAggregateInputType = {
    id?: true
    amount?: true
    userId?: true
    expiredAt?: true
    createAt?: true
    _all?: true
  }

  export type PointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Point to aggregate.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Points
    **/
    _count?: true | PointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PointMaxAggregateInputType
  }

  export type GetPointAggregateType<T extends PointAggregateArgs> = {
        [P in keyof T & keyof AggregatePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePoint[P]>
      : GetScalarType<T[P], AggregatePoint[P]>
  }




  export type PointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PointWhereInput
    orderBy?: PointOrderByWithAggregationInput | PointOrderByWithAggregationInput[]
    by: PointScalarFieldEnum[] | PointScalarFieldEnum
    having?: PointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PointCountAggregateInputType | true
    _avg?: PointAvgAggregateInputType
    _sum?: PointSumAggregateInputType
    _min?: PointMinAggregateInputType
    _max?: PointMaxAggregateInputType
  }

  export type PointGroupByOutputType = {
    id: string
    amount: number
    userId: string
    expiredAt: Date
    createAt: Date
    _count: PointCountAggregateOutputType | null
    _avg: PointAvgAggregateOutputType | null
    _sum: PointSumAggregateOutputType | null
    _min: PointMinAggregateOutputType | null
    _max: PointMaxAggregateOutputType | null
  }

  type GetPointGroupByPayload<T extends PointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PointGroupByOutputType[P]>
            : GetScalarType<T[P], PointGroupByOutputType[P]>
        }
      >
    >


  export type PointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    userId?: boolean
    expiredAt?: boolean
    createAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    userId?: boolean
    expiredAt?: boolean
    createAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    userId?: boolean
    expiredAt?: boolean
    createAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["point"]>

  export type PointSelectScalar = {
    id?: boolean
    amount?: boolean
    userId?: boolean
    expiredAt?: boolean
    createAt?: boolean
  }

  export type PointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "userId" | "expiredAt" | "createAt", ExtArgs["result"]["point"]>
  export type PointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Point"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      userId: string
      expiredAt: Date
      createAt: Date
    }, ExtArgs["result"]["point"]>
    composites: {}
  }

  type PointGetPayload<S extends boolean | null | undefined | PointDefaultArgs> = $Result.GetResult<Prisma.$PointPayload, S>

  type PointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PointCountAggregateInputType | true
    }

  export interface PointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Point'], meta: { name: 'Point' } }
    /**
     * Find zero or one Point that matches the filter.
     * @param {PointFindUniqueArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PointFindUniqueArgs>(args: SelectSubset<T, PointFindUniqueArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Point that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PointFindUniqueOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PointFindUniqueOrThrowArgs>(args: SelectSubset<T, PointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PointFindFirstArgs>(args?: SelectSubset<T, PointFindFirstArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Point that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindFirstOrThrowArgs} args - Arguments to find a Point
     * @example
     * // Get one Point
     * const point = await prisma.point.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PointFindFirstOrThrowArgs>(args?: SelectSubset<T, PointFindFirstOrThrowArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Points that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Points
     * const points = await prisma.point.findMany()
     * 
     * // Get first 10 Points
     * const points = await prisma.point.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pointWithIdOnly = await prisma.point.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PointFindManyArgs>(args?: SelectSubset<T, PointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Point.
     * @param {PointCreateArgs} args - Arguments to create a Point.
     * @example
     * // Create one Point
     * const Point = await prisma.point.create({
     *   data: {
     *     // ... data to create a Point
     *   }
     * })
     * 
     */
    create<T extends PointCreateArgs>(args: SelectSubset<T, PointCreateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Points.
     * @param {PointCreateManyArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PointCreateManyArgs>(args?: SelectSubset<T, PointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Points and returns the data saved in the database.
     * @param {PointCreateManyAndReturnArgs} args - Arguments to create many Points.
     * @example
     * // Create many Points
     * const point = await prisma.point.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Points and only return the `id`
     * const pointWithIdOnly = await prisma.point.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PointCreateManyAndReturnArgs>(args?: SelectSubset<T, PointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Point.
     * @param {PointDeleteArgs} args - Arguments to delete one Point.
     * @example
     * // Delete one Point
     * const Point = await prisma.point.delete({
     *   where: {
     *     // ... filter to delete one Point
     *   }
     * })
     * 
     */
    delete<T extends PointDeleteArgs>(args: SelectSubset<T, PointDeleteArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Point.
     * @param {PointUpdateArgs} args - Arguments to update one Point.
     * @example
     * // Update one Point
     * const point = await prisma.point.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PointUpdateArgs>(args: SelectSubset<T, PointUpdateArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Points.
     * @param {PointDeleteManyArgs} args - Arguments to filter Points to delete.
     * @example
     * // Delete a few Points
     * const { count } = await prisma.point.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PointDeleteManyArgs>(args?: SelectSubset<T, PointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PointUpdateManyArgs>(args: SelectSubset<T, PointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Points and returns the data updated in the database.
     * @param {PointUpdateManyAndReturnArgs} args - Arguments to update many Points.
     * @example
     * // Update many Points
     * const point = await prisma.point.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Points and only return the `id`
     * const pointWithIdOnly = await prisma.point.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PointUpdateManyAndReturnArgs>(args: SelectSubset<T, PointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Point.
     * @param {PointUpsertArgs} args - Arguments to update or create a Point.
     * @example
     * // Update or create a Point
     * const point = await prisma.point.upsert({
     *   create: {
     *     // ... data to create a Point
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Point we want to update
     *   }
     * })
     */
    upsert<T extends PointUpsertArgs>(args: SelectSubset<T, PointUpsertArgs<ExtArgs>>): Prisma__PointClient<$Result.GetResult<Prisma.$PointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Points.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointCountArgs} args - Arguments to filter Points to count.
     * @example
     * // Count the number of Points
     * const count = await prisma.point.count({
     *   where: {
     *     // ... the filter for the Points we want to count
     *   }
     * })
    **/
    count<T extends PointCountArgs>(
      args?: Subset<T, PointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PointAggregateArgs>(args: Subset<T, PointAggregateArgs>): Prisma.PrismaPromise<GetPointAggregateType<T>>

    /**
     * Group by Point.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PointGroupByArgs} args - Group by arguments.
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
      T extends PointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PointGroupByArgs['orderBy'] }
        : { orderBy?: PointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Point model
   */
  readonly fields: PointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Point.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Point model
   */
  interface PointFieldRefs {
    readonly id: FieldRef<"Point", 'String'>
    readonly amount: FieldRef<"Point", 'Int'>
    readonly userId: FieldRef<"Point", 'String'>
    readonly expiredAt: FieldRef<"Point", 'DateTime'>
    readonly createAt: FieldRef<"Point", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Point findUnique
   */
  export type PointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findUniqueOrThrow
   */
  export type PointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point findFirst
   */
  export type PointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findFirstOrThrow
   */
  export type PointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Point to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Points.
     */
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point findMany
   */
  export type PointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter, which Points to fetch.
     */
    where?: PointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Points to fetch.
     */
    orderBy?: PointOrderByWithRelationInput | PointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Points.
     */
    cursor?: PointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Points from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Points.
     */
    skip?: number
    distinct?: PointScalarFieldEnum | PointScalarFieldEnum[]
  }

  /**
   * Point create
   */
  export type PointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to create a Point.
     */
    data: XOR<PointCreateInput, PointUncheckedCreateInput>
  }

  /**
   * Point createMany
   */
  export type PointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Point createManyAndReturn
   */
  export type PointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * The data used to create many Points.
     */
    data: PointCreateManyInput | PointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point update
   */
  export type PointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The data needed to update a Point.
     */
    data: XOR<PointUpdateInput, PointUncheckedUpdateInput>
    /**
     * Choose, which Point to update.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point updateMany
   */
  export type PointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
  }

  /**
   * Point updateManyAndReturn
   */
  export type PointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * The data used to update Points.
     */
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyInput>
    /**
     * Filter which Points to update
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Point upsert
   */
  export type PointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * The filter to search for the Point to update in case it exists.
     */
    where: PointWhereUniqueInput
    /**
     * In case the Point found by the `where` argument doesn't exist, create a new Point with this data.
     */
    create: XOR<PointCreateInput, PointUncheckedCreateInput>
    /**
     * In case the Point was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PointUpdateInput, PointUncheckedUpdateInput>
  }

  /**
   * Point delete
   */
  export type PointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
    /**
     * Filter which Point to delete.
     */
    where: PointWhereUniqueInput
  }

  /**
   * Point deleteMany
   */
  export type PointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Points to delete
     */
    where?: PointWhereInput
    /**
     * Limit how many Points to delete.
     */
    limit?: number
  }

  /**
   * Point without action
   */
  export type PointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Point
     */
    select?: PointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Point
     */
    omit?: PointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PointInclude<ExtArgs> | null
  }


  /**
   * Model ReferralCode
   */

  export type AggregateReferralCode = {
    _count: ReferralCodeCountAggregateOutputType | null
    _min: ReferralCodeMinAggregateOutputType | null
    _max: ReferralCodeMaxAggregateOutputType | null
  }

  export type ReferralCodeMinAggregateOutputType = {
    id: string | null
    userId: string | null
    code: string | null
    createdAt: Date | null
  }

  export type ReferralCodeMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    code: string | null
    createdAt: Date | null
  }

  export type ReferralCodeCountAggregateOutputType = {
    id: number
    userId: number
    code: number
    createdAt: number
    _all: number
  }


  export type ReferralCodeMinAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    createdAt?: true
  }

  export type ReferralCodeMaxAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    createdAt?: true
  }

  export type ReferralCodeCountAggregateInputType = {
    id?: true
    userId?: true
    code?: true
    createdAt?: true
    _all?: true
  }

  export type ReferralCodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralCode to aggregate.
     */
    where?: ReferralCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralCodes to fetch.
     */
    orderBy?: ReferralCodeOrderByWithRelationInput | ReferralCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferralCodes
    **/
    _count?: true | ReferralCodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralCodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralCodeMaxAggregateInputType
  }

  export type GetReferralCodeAggregateType<T extends ReferralCodeAggregateArgs> = {
        [P in keyof T & keyof AggregateReferralCode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferralCode[P]>
      : GetScalarType<T[P], AggregateReferralCode[P]>
  }




  export type ReferralCodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralCodeWhereInput
    orderBy?: ReferralCodeOrderByWithAggregationInput | ReferralCodeOrderByWithAggregationInput[]
    by: ReferralCodeScalarFieldEnum[] | ReferralCodeScalarFieldEnum
    having?: ReferralCodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralCodeCountAggregateInputType | true
    _min?: ReferralCodeMinAggregateInputType
    _max?: ReferralCodeMaxAggregateInputType
  }

  export type ReferralCodeGroupByOutputType = {
    id: string
    userId: string
    code: string
    createdAt: Date
    _count: ReferralCodeCountAggregateOutputType | null
    _min: ReferralCodeMinAggregateOutputType | null
    _max: ReferralCodeMaxAggregateOutputType | null
  }

  type GetReferralCodeGroupByPayload<T extends ReferralCodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralCodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralCodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralCodeGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralCodeGroupByOutputType[P]>
        }
      >
    >


  export type ReferralCodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralCode"]>

  export type ReferralCodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralCode"]>

  export type ReferralCodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    code?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralCode"]>

  export type ReferralCodeSelectScalar = {
    id?: boolean
    userId?: boolean
    code?: boolean
    createdAt?: boolean
  }

  export type ReferralCodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "code" | "createdAt", ExtArgs["result"]["referralCode"]>
  export type ReferralCodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralCodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReferralCodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReferralCodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReferralCode"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      code: string
      createdAt: Date
    }, ExtArgs["result"]["referralCode"]>
    composites: {}
  }

  type ReferralCodeGetPayload<S extends boolean | null | undefined | ReferralCodeDefaultArgs> = $Result.GetResult<Prisma.$ReferralCodePayload, S>

  type ReferralCodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralCodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralCodeCountAggregateInputType | true
    }

  export interface ReferralCodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferralCode'], meta: { name: 'ReferralCode' } }
    /**
     * Find zero or one ReferralCode that matches the filter.
     * @param {ReferralCodeFindUniqueArgs} args - Arguments to find a ReferralCode
     * @example
     * // Get one ReferralCode
     * const referralCode = await prisma.referralCode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralCodeFindUniqueArgs>(args: SelectSubset<T, ReferralCodeFindUniqueArgs<ExtArgs>>): Prisma__ReferralCodeClient<$Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReferralCode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralCodeFindUniqueOrThrowArgs} args - Arguments to find a ReferralCode
     * @example
     * // Get one ReferralCode
     * const referralCode = await prisma.referralCode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralCodeFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralCodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralCodeClient<$Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralCode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCodeFindFirstArgs} args - Arguments to find a ReferralCode
     * @example
     * // Get one ReferralCode
     * const referralCode = await prisma.referralCode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralCodeFindFirstArgs>(args?: SelectSubset<T, ReferralCodeFindFirstArgs<ExtArgs>>): Prisma__ReferralCodeClient<$Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralCode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCodeFindFirstOrThrowArgs} args - Arguments to find a ReferralCode
     * @example
     * // Get one ReferralCode
     * const referralCode = await prisma.referralCode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralCodeFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralCodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralCodeClient<$Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReferralCodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferralCodes
     * const referralCodes = await prisma.referralCode.findMany()
     * 
     * // Get first 10 ReferralCodes
     * const referralCodes = await prisma.referralCode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralCodeWithIdOnly = await prisma.referralCode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralCodeFindManyArgs>(args?: SelectSubset<T, ReferralCodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReferralCode.
     * @param {ReferralCodeCreateArgs} args - Arguments to create a ReferralCode.
     * @example
     * // Create one ReferralCode
     * const ReferralCode = await prisma.referralCode.create({
     *   data: {
     *     // ... data to create a ReferralCode
     *   }
     * })
     * 
     */
    create<T extends ReferralCodeCreateArgs>(args: SelectSubset<T, ReferralCodeCreateArgs<ExtArgs>>): Prisma__ReferralCodeClient<$Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReferralCodes.
     * @param {ReferralCodeCreateManyArgs} args - Arguments to create many ReferralCodes.
     * @example
     * // Create many ReferralCodes
     * const referralCode = await prisma.referralCode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralCodeCreateManyArgs>(args?: SelectSubset<T, ReferralCodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReferralCodes and returns the data saved in the database.
     * @param {ReferralCodeCreateManyAndReturnArgs} args - Arguments to create many ReferralCodes.
     * @example
     * // Create many ReferralCodes
     * const referralCode = await prisma.referralCode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReferralCodes and only return the `id`
     * const referralCodeWithIdOnly = await prisma.referralCode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferralCodeCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferralCodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReferralCode.
     * @param {ReferralCodeDeleteArgs} args - Arguments to delete one ReferralCode.
     * @example
     * // Delete one ReferralCode
     * const ReferralCode = await prisma.referralCode.delete({
     *   where: {
     *     // ... filter to delete one ReferralCode
     *   }
     * })
     * 
     */
    delete<T extends ReferralCodeDeleteArgs>(args: SelectSubset<T, ReferralCodeDeleteArgs<ExtArgs>>): Prisma__ReferralCodeClient<$Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReferralCode.
     * @param {ReferralCodeUpdateArgs} args - Arguments to update one ReferralCode.
     * @example
     * // Update one ReferralCode
     * const referralCode = await prisma.referralCode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralCodeUpdateArgs>(args: SelectSubset<T, ReferralCodeUpdateArgs<ExtArgs>>): Prisma__ReferralCodeClient<$Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReferralCodes.
     * @param {ReferralCodeDeleteManyArgs} args - Arguments to filter ReferralCodes to delete.
     * @example
     * // Delete a few ReferralCodes
     * const { count } = await prisma.referralCode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralCodeDeleteManyArgs>(args?: SelectSubset<T, ReferralCodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferralCodes
     * const referralCode = await prisma.referralCode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralCodeUpdateManyArgs>(args: SelectSubset<T, ReferralCodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralCodes and returns the data updated in the database.
     * @param {ReferralCodeUpdateManyAndReturnArgs} args - Arguments to update many ReferralCodes.
     * @example
     * // Update many ReferralCodes
     * const referralCode = await prisma.referralCode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReferralCodes and only return the `id`
     * const referralCodeWithIdOnly = await prisma.referralCode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReferralCodeUpdateManyAndReturnArgs>(args: SelectSubset<T, ReferralCodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReferralCode.
     * @param {ReferralCodeUpsertArgs} args - Arguments to update or create a ReferralCode.
     * @example
     * // Update or create a ReferralCode
     * const referralCode = await prisma.referralCode.upsert({
     *   create: {
     *     // ... data to create a ReferralCode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferralCode we want to update
     *   }
     * })
     */
    upsert<T extends ReferralCodeUpsertArgs>(args: SelectSubset<T, ReferralCodeUpsertArgs<ExtArgs>>): Prisma__ReferralCodeClient<$Result.GetResult<Prisma.$ReferralCodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReferralCodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCodeCountArgs} args - Arguments to filter ReferralCodes to count.
     * @example
     * // Count the number of ReferralCodes
     * const count = await prisma.referralCode.count({
     *   where: {
     *     // ... the filter for the ReferralCodes we want to count
     *   }
     * })
    **/
    count<T extends ReferralCodeCountArgs>(
      args?: Subset<T, ReferralCodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralCodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferralCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferralCodeAggregateArgs>(args: Subset<T, ReferralCodeAggregateArgs>): Prisma.PrismaPromise<GetReferralCodeAggregateType<T>>

    /**
     * Group by ReferralCode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralCodeGroupByArgs} args - Group by arguments.
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
      T extends ReferralCodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralCodeGroupByArgs['orderBy'] }
        : { orderBy?: ReferralCodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferralCodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralCodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferralCode model
   */
  readonly fields: ReferralCodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferralCode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralCodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReferralCode model
   */
  interface ReferralCodeFieldRefs {
    readonly id: FieldRef<"ReferralCode", 'String'>
    readonly userId: FieldRef<"ReferralCode", 'String'>
    readonly code: FieldRef<"ReferralCode", 'String'>
    readonly createdAt: FieldRef<"ReferralCode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReferralCode findUnique
   */
  export type ReferralCodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCode
     */
    select?: ReferralCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCode
     */
    omit?: ReferralCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCodeInclude<ExtArgs> | null
    /**
     * Filter, which ReferralCode to fetch.
     */
    where: ReferralCodeWhereUniqueInput
  }

  /**
   * ReferralCode findUniqueOrThrow
   */
  export type ReferralCodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCode
     */
    select?: ReferralCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCode
     */
    omit?: ReferralCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCodeInclude<ExtArgs> | null
    /**
     * Filter, which ReferralCode to fetch.
     */
    where: ReferralCodeWhereUniqueInput
  }

  /**
   * ReferralCode findFirst
   */
  export type ReferralCodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCode
     */
    select?: ReferralCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCode
     */
    omit?: ReferralCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCodeInclude<ExtArgs> | null
    /**
     * Filter, which ReferralCode to fetch.
     */
    where?: ReferralCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralCodes to fetch.
     */
    orderBy?: ReferralCodeOrderByWithRelationInput | ReferralCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralCodes.
     */
    cursor?: ReferralCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralCodes.
     */
    distinct?: ReferralCodeScalarFieldEnum | ReferralCodeScalarFieldEnum[]
  }

  /**
   * ReferralCode findFirstOrThrow
   */
  export type ReferralCodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCode
     */
    select?: ReferralCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCode
     */
    omit?: ReferralCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCodeInclude<ExtArgs> | null
    /**
     * Filter, which ReferralCode to fetch.
     */
    where?: ReferralCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralCodes to fetch.
     */
    orderBy?: ReferralCodeOrderByWithRelationInput | ReferralCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralCodes.
     */
    cursor?: ReferralCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralCodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralCodes.
     */
    distinct?: ReferralCodeScalarFieldEnum | ReferralCodeScalarFieldEnum[]
  }

  /**
   * ReferralCode findMany
   */
  export type ReferralCodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCode
     */
    select?: ReferralCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCode
     */
    omit?: ReferralCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCodeInclude<ExtArgs> | null
    /**
     * Filter, which ReferralCodes to fetch.
     */
    where?: ReferralCodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralCodes to fetch.
     */
    orderBy?: ReferralCodeOrderByWithRelationInput | ReferralCodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferralCodes.
     */
    cursor?: ReferralCodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralCodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralCodes.
     */
    skip?: number
    distinct?: ReferralCodeScalarFieldEnum | ReferralCodeScalarFieldEnum[]
  }

  /**
   * ReferralCode create
   */
  export type ReferralCodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCode
     */
    select?: ReferralCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCode
     */
    omit?: ReferralCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCodeInclude<ExtArgs> | null
    /**
     * The data needed to create a ReferralCode.
     */
    data: XOR<ReferralCodeCreateInput, ReferralCodeUncheckedCreateInput>
  }

  /**
   * ReferralCode createMany
   */
  export type ReferralCodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferralCodes.
     */
    data: ReferralCodeCreateManyInput | ReferralCodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReferralCode createManyAndReturn
   */
  export type ReferralCodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCode
     */
    select?: ReferralCodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCode
     */
    omit?: ReferralCodeOmit<ExtArgs> | null
    /**
     * The data used to create many ReferralCodes.
     */
    data: ReferralCodeCreateManyInput | ReferralCodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralCode update
   */
  export type ReferralCodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCode
     */
    select?: ReferralCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCode
     */
    omit?: ReferralCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCodeInclude<ExtArgs> | null
    /**
     * The data needed to update a ReferralCode.
     */
    data: XOR<ReferralCodeUpdateInput, ReferralCodeUncheckedUpdateInput>
    /**
     * Choose, which ReferralCode to update.
     */
    where: ReferralCodeWhereUniqueInput
  }

  /**
   * ReferralCode updateMany
   */
  export type ReferralCodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferralCodes.
     */
    data: XOR<ReferralCodeUpdateManyMutationInput, ReferralCodeUncheckedUpdateManyInput>
    /**
     * Filter which ReferralCodes to update
     */
    where?: ReferralCodeWhereInput
    /**
     * Limit how many ReferralCodes to update.
     */
    limit?: number
  }

  /**
   * ReferralCode updateManyAndReturn
   */
  export type ReferralCodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCode
     */
    select?: ReferralCodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCode
     */
    omit?: ReferralCodeOmit<ExtArgs> | null
    /**
     * The data used to update ReferralCodes.
     */
    data: XOR<ReferralCodeUpdateManyMutationInput, ReferralCodeUncheckedUpdateManyInput>
    /**
     * Filter which ReferralCodes to update
     */
    where?: ReferralCodeWhereInput
    /**
     * Limit how many ReferralCodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReferralCode upsert
   */
  export type ReferralCodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCode
     */
    select?: ReferralCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCode
     */
    omit?: ReferralCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCodeInclude<ExtArgs> | null
    /**
     * The filter to search for the ReferralCode to update in case it exists.
     */
    where: ReferralCodeWhereUniqueInput
    /**
     * In case the ReferralCode found by the `where` argument doesn't exist, create a new ReferralCode with this data.
     */
    create: XOR<ReferralCodeCreateInput, ReferralCodeUncheckedCreateInput>
    /**
     * In case the ReferralCode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralCodeUpdateInput, ReferralCodeUncheckedUpdateInput>
  }

  /**
   * ReferralCode delete
   */
  export type ReferralCodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCode
     */
    select?: ReferralCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCode
     */
    omit?: ReferralCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCodeInclude<ExtArgs> | null
    /**
     * Filter which ReferralCode to delete.
     */
    where: ReferralCodeWhereUniqueInput
  }

  /**
   * ReferralCode deleteMany
   */
  export type ReferralCodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralCodes to delete
     */
    where?: ReferralCodeWhereInput
    /**
     * Limit how many ReferralCodes to delete.
     */
    limit?: number
  }

  /**
   * ReferralCode without action
   */
  export type ReferralCodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCode
     */
    select?: ReferralCodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralCode
     */
    omit?: ReferralCodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralCodeInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: $Enums.CategoryRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: $Enums.CategoryRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: $Enums.CategoryRole
    createdAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    EventCategory?: boolean | Category$EventCategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventCategory?: boolean | Category$EventCategoryArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      EventCategory: Prisma.$EventCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.CategoryRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    EventCategory<T extends Category$EventCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Category$EventCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'CategoryRole'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.EventCategory
   */
  export type Category$EventCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    where?: EventCategoryWhereInput
    orderBy?: EventCategoryOrderByWithRelationInput | EventCategoryOrderByWithRelationInput[]
    cursor?: EventCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventCategoryScalarFieldEnum | EventCategoryScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    title: string | null
    description: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    description: number
    location: number
    startDate: number
    endDate: number
    createdAt: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    location?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    location?: true
    startDate?: true
    endDate?: true
    createdAt?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    description?: true
    location?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    userId: string
    title: string
    description: string
    location: string
    startDate: Date
    endDate: Date
    createdAt: Date
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    EventCategory?: boolean | Event$EventCategoryArgs<ExtArgs>
    Voucher?: boolean | Event$VoucherArgs<ExtArgs>
    Transaction?: boolean | Event$TransactionArgs<ExtArgs>
    Review?: boolean | Event$ReviewArgs<ExtArgs>
    EventImage?: boolean | Event$EventImageArgs<ExtArgs>
    Discount?: boolean | Event$DiscountArgs<ExtArgs>
    Ticket?: boolean | Event$TicketArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    description?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "description" | "location" | "startDate" | "endDate" | "createdAt", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    EventCategory?: boolean | Event$EventCategoryArgs<ExtArgs>
    Voucher?: boolean | Event$VoucherArgs<ExtArgs>
    Transaction?: boolean | Event$TransactionArgs<ExtArgs>
    Review?: boolean | Event$ReviewArgs<ExtArgs>
    EventImage?: boolean | Event$EventImageArgs<ExtArgs>
    Discount?: boolean | Event$DiscountArgs<ExtArgs>
    Ticket?: boolean | Event$TicketArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      EventCategory: Prisma.$EventCategoryPayload<ExtArgs>[]
      Voucher: Prisma.$VoucherPayload<ExtArgs>[]
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
      Review: Prisma.$ReviewPayload<ExtArgs>[]
      EventImage: Prisma.$EventImagePayload<ExtArgs>[]
      Discount: Prisma.$DiscountPayload<ExtArgs>[]
      Ticket: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      title: string
      description: string
      location: string
      startDate: Date
      endDate: Date
      createdAt: Date
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
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
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    EventCategory<T extends Event$EventCategoryArgs<ExtArgs> = {}>(args?: Subset<T, Event$EventCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Voucher<T extends Event$VoucherArgs<ExtArgs> = {}>(args?: Subset<T, Event$VoucherArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Transaction<T extends Event$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Event$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Review<T extends Event$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, Event$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EventImage<T extends Event$EventImageArgs<ExtArgs> = {}>(args?: Subset<T, Event$EventImageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Discount<T extends Event$DiscountArgs<ExtArgs> = {}>(args?: Subset<T, Event$DiscountArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Ticket<T extends Event$TicketArgs<ExtArgs> = {}>(args?: Subset<T, Event$TicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly userId: FieldRef<"Event", 'String'>
    readonly title: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly location: FieldRef<"Event", 'String'>
    readonly startDate: FieldRef<"Event", 'DateTime'>
    readonly endDate: FieldRef<"Event", 'DateTime'>
    readonly createdAt: FieldRef<"Event", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.EventCategory
   */
  export type Event$EventCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    where?: EventCategoryWhereInput
    orderBy?: EventCategoryOrderByWithRelationInput | EventCategoryOrderByWithRelationInput[]
    cursor?: EventCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventCategoryScalarFieldEnum | EventCategoryScalarFieldEnum[]
  }

  /**
   * Event.Voucher
   */
  export type Event$VoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    cursor?: VoucherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Event.Transaction
   */
  export type Event$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Event.Review
   */
  export type Event$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Event.EventImage
   */
  export type Event$EventImageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    where?: EventImageWhereInput
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    cursor?: EventImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventImageScalarFieldEnum | EventImageScalarFieldEnum[]
  }

  /**
   * Event.Discount
   */
  export type Event$DiscountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    where?: DiscountWhereInput
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    cursor?: DiscountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Event.Ticket
   */
  export type Event$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventCategory
   */

  export type AggregateEventCategory = {
    _count: EventCategoryCountAggregateOutputType | null
    _min: EventCategoryMinAggregateOutputType | null
    _max: EventCategoryMaxAggregateOutputType | null
  }

  export type EventCategoryMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    categoryId: string | null
    createdAt: Date | null
  }

  export type EventCategoryMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    categoryId: string | null
    createdAt: Date | null
  }

  export type EventCategoryCountAggregateOutputType = {
    id: number
    eventId: number
    categoryId: number
    createdAt: number
    _all: number
  }


  export type EventCategoryMinAggregateInputType = {
    id?: true
    eventId?: true
    categoryId?: true
    createdAt?: true
  }

  export type EventCategoryMaxAggregateInputType = {
    id?: true
    eventId?: true
    categoryId?: true
    createdAt?: true
  }

  export type EventCategoryCountAggregateInputType = {
    id?: true
    eventId?: true
    categoryId?: true
    createdAt?: true
    _all?: true
  }

  export type EventCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventCategory to aggregate.
     */
    where?: EventCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCategories to fetch.
     */
    orderBy?: EventCategoryOrderByWithRelationInput | EventCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventCategories
    **/
    _count?: true | EventCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventCategoryMaxAggregateInputType
  }

  export type GetEventCategoryAggregateType<T extends EventCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateEventCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventCategory[P]>
      : GetScalarType<T[P], AggregateEventCategory[P]>
  }




  export type EventCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventCategoryWhereInput
    orderBy?: EventCategoryOrderByWithAggregationInput | EventCategoryOrderByWithAggregationInput[]
    by: EventCategoryScalarFieldEnum[] | EventCategoryScalarFieldEnum
    having?: EventCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCategoryCountAggregateInputType | true
    _min?: EventCategoryMinAggregateInputType
    _max?: EventCategoryMaxAggregateInputType
  }

  export type EventCategoryGroupByOutputType = {
    id: string
    eventId: string
    categoryId: string
    createdAt: Date
    _count: EventCategoryCountAggregateOutputType | null
    _min: EventCategoryMinAggregateOutputType | null
    _max: EventCategoryMaxAggregateOutputType | null
  }

  type GetEventCategoryGroupByPayload<T extends EventCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], EventCategoryGroupByOutputType[P]>
        }
      >
    >


  export type EventCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventCategory"]>

  export type EventCategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventCategory"]>

  export type EventCategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    categoryId?: boolean
    createdAt?: boolean
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventCategory"]>

  export type EventCategorySelectScalar = {
    id?: boolean
    eventId?: boolean
    categoryId?: boolean
    createdAt?: boolean
  }

  export type EventCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "categoryId" | "createdAt", ExtArgs["result"]["eventCategory"]>
  export type EventCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventCategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type EventCategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $EventCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventCategory"
    objects: {
      Category: Prisma.$CategoryPayload<ExtArgs>
      Event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      categoryId: string
      createdAt: Date
    }, ExtArgs["result"]["eventCategory"]>
    composites: {}
  }

  type EventCategoryGetPayload<S extends boolean | null | undefined | EventCategoryDefaultArgs> = $Result.GetResult<Prisma.$EventCategoryPayload, S>

  type EventCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCategoryCountAggregateInputType | true
    }

  export interface EventCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventCategory'], meta: { name: 'EventCategory' } }
    /**
     * Find zero or one EventCategory that matches the filter.
     * @param {EventCategoryFindUniqueArgs} args - Arguments to find a EventCategory
     * @example
     * // Get one EventCategory
     * const eventCategory = await prisma.eventCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventCategoryFindUniqueArgs>(args: SelectSubset<T, EventCategoryFindUniqueArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventCategoryFindUniqueOrThrowArgs} args - Arguments to find a EventCategory
     * @example
     * // Get one EventCategory
     * const eventCategory = await prisma.eventCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, EventCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryFindFirstArgs} args - Arguments to find a EventCategory
     * @example
     * // Get one EventCategory
     * const eventCategory = await prisma.eventCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventCategoryFindFirstArgs>(args?: SelectSubset<T, EventCategoryFindFirstArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryFindFirstOrThrowArgs} args - Arguments to find a EventCategory
     * @example
     * // Get one EventCategory
     * const eventCategory = await prisma.eventCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, EventCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventCategories
     * const eventCategories = await prisma.eventCategory.findMany()
     * 
     * // Get first 10 EventCategories
     * const eventCategories = await prisma.eventCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventCategoryWithIdOnly = await prisma.eventCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventCategoryFindManyArgs>(args?: SelectSubset<T, EventCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventCategory.
     * @param {EventCategoryCreateArgs} args - Arguments to create a EventCategory.
     * @example
     * // Create one EventCategory
     * const EventCategory = await prisma.eventCategory.create({
     *   data: {
     *     // ... data to create a EventCategory
     *   }
     * })
     * 
     */
    create<T extends EventCategoryCreateArgs>(args: SelectSubset<T, EventCategoryCreateArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventCategories.
     * @param {EventCategoryCreateManyArgs} args - Arguments to create many EventCategories.
     * @example
     * // Create many EventCategories
     * const eventCategory = await prisma.eventCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCategoryCreateManyArgs>(args?: SelectSubset<T, EventCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventCategories and returns the data saved in the database.
     * @param {EventCategoryCreateManyAndReturnArgs} args - Arguments to create many EventCategories.
     * @example
     * // Create many EventCategories
     * const eventCategory = await prisma.eventCategory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventCategories and only return the `id`
     * const eventCategoryWithIdOnly = await prisma.eventCategory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventCategory.
     * @param {EventCategoryDeleteArgs} args - Arguments to delete one EventCategory.
     * @example
     * // Delete one EventCategory
     * const EventCategory = await prisma.eventCategory.delete({
     *   where: {
     *     // ... filter to delete one EventCategory
     *   }
     * })
     * 
     */
    delete<T extends EventCategoryDeleteArgs>(args: SelectSubset<T, EventCategoryDeleteArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventCategory.
     * @param {EventCategoryUpdateArgs} args - Arguments to update one EventCategory.
     * @example
     * // Update one EventCategory
     * const eventCategory = await prisma.eventCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventCategoryUpdateArgs>(args: SelectSubset<T, EventCategoryUpdateArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventCategories.
     * @param {EventCategoryDeleteManyArgs} args - Arguments to filter EventCategories to delete.
     * @example
     * // Delete a few EventCategories
     * const { count } = await prisma.eventCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventCategoryDeleteManyArgs>(args?: SelectSubset<T, EventCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventCategories
     * const eventCategory = await prisma.eventCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventCategoryUpdateManyArgs>(args: SelectSubset<T, EventCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventCategories and returns the data updated in the database.
     * @param {EventCategoryUpdateManyAndReturnArgs} args - Arguments to update many EventCategories.
     * @example
     * // Update many EventCategories
     * const eventCategory = await prisma.eventCategory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventCategories and only return the `id`
     * const eventCategoryWithIdOnly = await prisma.eventCategory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventCategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, EventCategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventCategory.
     * @param {EventCategoryUpsertArgs} args - Arguments to update or create a EventCategory.
     * @example
     * // Update or create a EventCategory
     * const eventCategory = await prisma.eventCategory.upsert({
     *   create: {
     *     // ... data to create a EventCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventCategory we want to update
     *   }
     * })
     */
    upsert<T extends EventCategoryUpsertArgs>(args: SelectSubset<T, EventCategoryUpsertArgs<ExtArgs>>): Prisma__EventCategoryClient<$Result.GetResult<Prisma.$EventCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryCountArgs} args - Arguments to filter EventCategories to count.
     * @example
     * // Count the number of EventCategories
     * const count = await prisma.eventCategory.count({
     *   where: {
     *     // ... the filter for the EventCategories we want to count
     *   }
     * })
    **/
    count<T extends EventCategoryCountArgs>(
      args?: Subset<T, EventCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventCategoryAggregateArgs>(args: Subset<T, EventCategoryAggregateArgs>): Prisma.PrismaPromise<GetEventCategoryAggregateType<T>>

    /**
     * Group by EventCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCategoryGroupByArgs} args - Group by arguments.
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
      T extends EventCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventCategoryGroupByArgs['orderBy'] }
        : { orderBy?: EventCategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventCategory model
   */
  readonly fields: EventCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventCategory model
   */
  interface EventCategoryFieldRefs {
    readonly id: FieldRef<"EventCategory", 'String'>
    readonly eventId: FieldRef<"EventCategory", 'String'>
    readonly categoryId: FieldRef<"EventCategory", 'String'>
    readonly createdAt: FieldRef<"EventCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventCategory findUnique
   */
  export type EventCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventCategory to fetch.
     */
    where: EventCategoryWhereUniqueInput
  }

  /**
   * EventCategory findUniqueOrThrow
   */
  export type EventCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventCategory to fetch.
     */
    where: EventCategoryWhereUniqueInput
  }

  /**
   * EventCategory findFirst
   */
  export type EventCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventCategory to fetch.
     */
    where?: EventCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCategories to fetch.
     */
    orderBy?: EventCategoryOrderByWithRelationInput | EventCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventCategories.
     */
    cursor?: EventCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventCategories.
     */
    distinct?: EventCategoryScalarFieldEnum | EventCategoryScalarFieldEnum[]
  }

  /**
   * EventCategory findFirstOrThrow
   */
  export type EventCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventCategory to fetch.
     */
    where?: EventCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCategories to fetch.
     */
    orderBy?: EventCategoryOrderByWithRelationInput | EventCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventCategories.
     */
    cursor?: EventCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventCategories.
     */
    distinct?: EventCategoryScalarFieldEnum | EventCategoryScalarFieldEnum[]
  }

  /**
   * EventCategory findMany
   */
  export type EventCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * Filter, which EventCategories to fetch.
     */
    where?: EventCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventCategories to fetch.
     */
    orderBy?: EventCategoryOrderByWithRelationInput | EventCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventCategories.
     */
    cursor?: EventCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventCategories.
     */
    skip?: number
    distinct?: EventCategoryScalarFieldEnum | EventCategoryScalarFieldEnum[]
  }

  /**
   * EventCategory create
   */
  export type EventCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a EventCategory.
     */
    data: XOR<EventCategoryCreateInput, EventCategoryUncheckedCreateInput>
  }

  /**
   * EventCategory createMany
   */
  export type EventCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventCategories.
     */
    data: EventCategoryCreateManyInput | EventCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventCategory createManyAndReturn
   */
  export type EventCategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * The data used to create many EventCategories.
     */
    data: EventCategoryCreateManyInput | EventCategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventCategory update
   */
  export type EventCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a EventCategory.
     */
    data: XOR<EventCategoryUpdateInput, EventCategoryUncheckedUpdateInput>
    /**
     * Choose, which EventCategory to update.
     */
    where: EventCategoryWhereUniqueInput
  }

  /**
   * EventCategory updateMany
   */
  export type EventCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventCategories.
     */
    data: XOR<EventCategoryUpdateManyMutationInput, EventCategoryUncheckedUpdateManyInput>
    /**
     * Filter which EventCategories to update
     */
    where?: EventCategoryWhereInput
    /**
     * Limit how many EventCategories to update.
     */
    limit?: number
  }

  /**
   * EventCategory updateManyAndReturn
   */
  export type EventCategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * The data used to update EventCategories.
     */
    data: XOR<EventCategoryUpdateManyMutationInput, EventCategoryUncheckedUpdateManyInput>
    /**
     * Filter which EventCategories to update
     */
    where?: EventCategoryWhereInput
    /**
     * Limit how many EventCategories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventCategory upsert
   */
  export type EventCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the EventCategory to update in case it exists.
     */
    where: EventCategoryWhereUniqueInput
    /**
     * In case the EventCategory found by the `where` argument doesn't exist, create a new EventCategory with this data.
     */
    create: XOR<EventCategoryCreateInput, EventCategoryUncheckedCreateInput>
    /**
     * In case the EventCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventCategoryUpdateInput, EventCategoryUncheckedUpdateInput>
  }

  /**
   * EventCategory delete
   */
  export type EventCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
    /**
     * Filter which EventCategory to delete.
     */
    where: EventCategoryWhereUniqueInput
  }

  /**
   * EventCategory deleteMany
   */
  export type EventCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventCategories to delete
     */
    where?: EventCategoryWhereInput
    /**
     * Limit how many EventCategories to delete.
     */
    limit?: number
  }

  /**
   * EventCategory without action
   */
  export type EventCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCategory
     */
    select?: EventCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventCategory
     */
    omit?: EventCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventCategoryInclude<ExtArgs> | null
  }


  /**
   * Model EventImage
   */

  export type AggregateEventImage = {
    _count: EventImageCountAggregateOutputType | null
    _min: EventImageMinAggregateOutputType | null
    _max: EventImageMaxAggregateOutputType | null
  }

  export type EventImageMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    imagePreviewId: string | null
    imageContentId: string | null
    createdAt: Date | null
  }

  export type EventImageMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    imagePreviewId: string | null
    imageContentId: string | null
    createdAt: Date | null
  }

  export type EventImageCountAggregateOutputType = {
    id: number
    eventId: number
    imagePreviewId: number
    imageContentId: number
    createdAt: number
    _all: number
  }


  export type EventImageMinAggregateInputType = {
    id?: true
    eventId?: true
    imagePreviewId?: true
    imageContentId?: true
    createdAt?: true
  }

  export type EventImageMaxAggregateInputType = {
    id?: true
    eventId?: true
    imagePreviewId?: true
    imageContentId?: true
    createdAt?: true
  }

  export type EventImageCountAggregateInputType = {
    id?: true
    eventId?: true
    imagePreviewId?: true
    imageContentId?: true
    createdAt?: true
    _all?: true
  }

  export type EventImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventImage to aggregate.
     */
    where?: EventImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventImages to fetch.
     */
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventImages
    **/
    _count?: true | EventImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventImageMaxAggregateInputType
  }

  export type GetEventImageAggregateType<T extends EventImageAggregateArgs> = {
        [P in keyof T & keyof AggregateEventImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventImage[P]>
      : GetScalarType<T[P], AggregateEventImage[P]>
  }




  export type EventImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventImageWhereInput
    orderBy?: EventImageOrderByWithAggregationInput | EventImageOrderByWithAggregationInput[]
    by: EventImageScalarFieldEnum[] | EventImageScalarFieldEnum
    having?: EventImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventImageCountAggregateInputType | true
    _min?: EventImageMinAggregateInputType
    _max?: EventImageMaxAggregateInputType
  }

  export type EventImageGroupByOutputType = {
    id: string
    eventId: string
    imagePreviewId: string | null
    imageContentId: string | null
    createdAt: Date
    _count: EventImageCountAggregateOutputType | null
    _min: EventImageMinAggregateOutputType | null
    _max: EventImageMaxAggregateOutputType | null
  }

  type GetEventImageGroupByPayload<T extends EventImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventImageGroupByOutputType[P]>
            : GetScalarType<T[P], EventImageGroupByOutputType[P]>
        }
      >
    >


  export type EventImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    imagePreviewId?: boolean
    imageContentId?: boolean
    createdAt?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
    ImagePreview?: boolean | EventImage$ImagePreviewArgs<ExtArgs>
    ImageContent?: boolean | EventImage$ImageContentArgs<ExtArgs>
  }, ExtArgs["result"]["eventImage"]>

  export type EventImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    imagePreviewId?: boolean
    imageContentId?: boolean
    createdAt?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
    ImagePreview?: boolean | EventImage$ImagePreviewArgs<ExtArgs>
    ImageContent?: boolean | EventImage$ImageContentArgs<ExtArgs>
  }, ExtArgs["result"]["eventImage"]>

  export type EventImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    imagePreviewId?: boolean
    imageContentId?: boolean
    createdAt?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
    ImagePreview?: boolean | EventImage$ImagePreviewArgs<ExtArgs>
    ImageContent?: boolean | EventImage$ImageContentArgs<ExtArgs>
  }, ExtArgs["result"]["eventImage"]>

  export type EventImageSelectScalar = {
    id?: boolean
    eventId?: boolean
    imagePreviewId?: boolean
    imageContentId?: boolean
    createdAt?: boolean
  }

  export type EventImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "imagePreviewId" | "imageContentId" | "createdAt", ExtArgs["result"]["eventImage"]>
  export type EventImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
    ImagePreview?: boolean | EventImage$ImagePreviewArgs<ExtArgs>
    ImageContent?: boolean | EventImage$ImageContentArgs<ExtArgs>
  }
  export type EventImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
    ImagePreview?: boolean | EventImage$ImagePreviewArgs<ExtArgs>
    ImageContent?: boolean | EventImage$ImageContentArgs<ExtArgs>
  }
  export type EventImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
    ImagePreview?: boolean | EventImage$ImagePreviewArgs<ExtArgs>
    ImageContent?: boolean | EventImage$ImageContentArgs<ExtArgs>
  }

  export type $EventImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventImage"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>
      ImagePreview: Prisma.$ImagePayload<ExtArgs> | null
      ImageContent: Prisma.$ImagePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      imagePreviewId: string | null
      imageContentId: string | null
      createdAt: Date
    }, ExtArgs["result"]["eventImage"]>
    composites: {}
  }

  type EventImageGetPayload<S extends boolean | null | undefined | EventImageDefaultArgs> = $Result.GetResult<Prisma.$EventImagePayload, S>

  type EventImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventImageCountAggregateInputType | true
    }

  export interface EventImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventImage'], meta: { name: 'EventImage' } }
    /**
     * Find zero or one EventImage that matches the filter.
     * @param {EventImageFindUniqueArgs} args - Arguments to find a EventImage
     * @example
     * // Get one EventImage
     * const eventImage = await prisma.eventImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventImageFindUniqueArgs>(args: SelectSubset<T, EventImageFindUniqueArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventImageFindUniqueOrThrowArgs} args - Arguments to find a EventImage
     * @example
     * // Get one EventImage
     * const eventImage = await prisma.eventImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventImageFindUniqueOrThrowArgs>(args: SelectSubset<T, EventImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageFindFirstArgs} args - Arguments to find a EventImage
     * @example
     * // Get one EventImage
     * const eventImage = await prisma.eventImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventImageFindFirstArgs>(args?: SelectSubset<T, EventImageFindFirstArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageFindFirstOrThrowArgs} args - Arguments to find a EventImage
     * @example
     * // Get one EventImage
     * const eventImage = await prisma.eventImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventImageFindFirstOrThrowArgs>(args?: SelectSubset<T, EventImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventImages
     * const eventImages = await prisma.eventImage.findMany()
     * 
     * // Get first 10 EventImages
     * const eventImages = await prisma.eventImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventImageWithIdOnly = await prisma.eventImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventImageFindManyArgs>(args?: SelectSubset<T, EventImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventImage.
     * @param {EventImageCreateArgs} args - Arguments to create a EventImage.
     * @example
     * // Create one EventImage
     * const EventImage = await prisma.eventImage.create({
     *   data: {
     *     // ... data to create a EventImage
     *   }
     * })
     * 
     */
    create<T extends EventImageCreateArgs>(args: SelectSubset<T, EventImageCreateArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventImages.
     * @param {EventImageCreateManyArgs} args - Arguments to create many EventImages.
     * @example
     * // Create many EventImages
     * const eventImage = await prisma.eventImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventImageCreateManyArgs>(args?: SelectSubset<T, EventImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventImages and returns the data saved in the database.
     * @param {EventImageCreateManyAndReturnArgs} args - Arguments to create many EventImages.
     * @example
     * // Create many EventImages
     * const eventImage = await prisma.eventImage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventImages and only return the `id`
     * const eventImageWithIdOnly = await prisma.eventImage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventImageCreateManyAndReturnArgs>(args?: SelectSubset<T, EventImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventImage.
     * @param {EventImageDeleteArgs} args - Arguments to delete one EventImage.
     * @example
     * // Delete one EventImage
     * const EventImage = await prisma.eventImage.delete({
     *   where: {
     *     // ... filter to delete one EventImage
     *   }
     * })
     * 
     */
    delete<T extends EventImageDeleteArgs>(args: SelectSubset<T, EventImageDeleteArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventImage.
     * @param {EventImageUpdateArgs} args - Arguments to update one EventImage.
     * @example
     * // Update one EventImage
     * const eventImage = await prisma.eventImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventImageUpdateArgs>(args: SelectSubset<T, EventImageUpdateArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventImages.
     * @param {EventImageDeleteManyArgs} args - Arguments to filter EventImages to delete.
     * @example
     * // Delete a few EventImages
     * const { count } = await prisma.eventImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventImageDeleteManyArgs>(args?: SelectSubset<T, EventImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventImages
     * const eventImage = await prisma.eventImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventImageUpdateManyArgs>(args: SelectSubset<T, EventImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventImages and returns the data updated in the database.
     * @param {EventImageUpdateManyAndReturnArgs} args - Arguments to update many EventImages.
     * @example
     * // Update many EventImages
     * const eventImage = await prisma.eventImage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventImages and only return the `id`
     * const eventImageWithIdOnly = await prisma.eventImage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventImageUpdateManyAndReturnArgs>(args: SelectSubset<T, EventImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventImage.
     * @param {EventImageUpsertArgs} args - Arguments to update or create a EventImage.
     * @example
     * // Update or create a EventImage
     * const eventImage = await prisma.eventImage.upsert({
     *   create: {
     *     // ... data to create a EventImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventImage we want to update
     *   }
     * })
     */
    upsert<T extends EventImageUpsertArgs>(args: SelectSubset<T, EventImageUpsertArgs<ExtArgs>>): Prisma__EventImageClient<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageCountArgs} args - Arguments to filter EventImages to count.
     * @example
     * // Count the number of EventImages
     * const count = await prisma.eventImage.count({
     *   where: {
     *     // ... the filter for the EventImages we want to count
     *   }
     * })
    **/
    count<T extends EventImageCountArgs>(
      args?: Subset<T, EventImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EventImageAggregateArgs>(args: Subset<T, EventImageAggregateArgs>): Prisma.PrismaPromise<GetEventImageAggregateType<T>>

    /**
     * Group by EventImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventImageGroupByArgs} args - Group by arguments.
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
      T extends EventImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventImageGroupByArgs['orderBy'] }
        : { orderBy?: EventImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EventImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventImage model
   */
  readonly fields: EventImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ImagePreview<T extends EventImage$ImagePreviewArgs<ExtArgs> = {}>(args?: Subset<T, EventImage$ImagePreviewArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ImageContent<T extends EventImage$ImageContentArgs<ExtArgs> = {}>(args?: Subset<T, EventImage$ImageContentArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventImage model
   */
  interface EventImageFieldRefs {
    readonly id: FieldRef<"EventImage", 'String'>
    readonly eventId: FieldRef<"EventImage", 'String'>
    readonly imagePreviewId: FieldRef<"EventImage", 'String'>
    readonly imageContentId: FieldRef<"EventImage", 'String'>
    readonly createdAt: FieldRef<"EventImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventImage findUnique
   */
  export type EventImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImage to fetch.
     */
    where: EventImageWhereUniqueInput
  }

  /**
   * EventImage findUniqueOrThrow
   */
  export type EventImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImage to fetch.
     */
    where: EventImageWhereUniqueInput
  }

  /**
   * EventImage findFirst
   */
  export type EventImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImage to fetch.
     */
    where?: EventImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventImages to fetch.
     */
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventImages.
     */
    cursor?: EventImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventImages.
     */
    distinct?: EventImageScalarFieldEnum | EventImageScalarFieldEnum[]
  }

  /**
   * EventImage findFirstOrThrow
   */
  export type EventImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImage to fetch.
     */
    where?: EventImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventImages to fetch.
     */
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventImages.
     */
    cursor?: EventImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventImages.
     */
    distinct?: EventImageScalarFieldEnum | EventImageScalarFieldEnum[]
  }

  /**
   * EventImage findMany
   */
  export type EventImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter, which EventImages to fetch.
     */
    where?: EventImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventImages to fetch.
     */
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventImages.
     */
    cursor?: EventImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventImages.
     */
    skip?: number
    distinct?: EventImageScalarFieldEnum | EventImageScalarFieldEnum[]
  }

  /**
   * EventImage create
   */
  export type EventImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * The data needed to create a EventImage.
     */
    data: XOR<EventImageCreateInput, EventImageUncheckedCreateInput>
  }

  /**
   * EventImage createMany
   */
  export type EventImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventImages.
     */
    data: EventImageCreateManyInput | EventImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventImage createManyAndReturn
   */
  export type EventImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * The data used to create many EventImages.
     */
    data: EventImageCreateManyInput | EventImageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventImage update
   */
  export type EventImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * The data needed to update a EventImage.
     */
    data: XOR<EventImageUpdateInput, EventImageUncheckedUpdateInput>
    /**
     * Choose, which EventImage to update.
     */
    where: EventImageWhereUniqueInput
  }

  /**
   * EventImage updateMany
   */
  export type EventImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventImages.
     */
    data: XOR<EventImageUpdateManyMutationInput, EventImageUncheckedUpdateManyInput>
    /**
     * Filter which EventImages to update
     */
    where?: EventImageWhereInput
    /**
     * Limit how many EventImages to update.
     */
    limit?: number
  }

  /**
   * EventImage updateManyAndReturn
   */
  export type EventImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * The data used to update EventImages.
     */
    data: XOR<EventImageUpdateManyMutationInput, EventImageUncheckedUpdateManyInput>
    /**
     * Filter which EventImages to update
     */
    where?: EventImageWhereInput
    /**
     * Limit how many EventImages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventImage upsert
   */
  export type EventImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * The filter to search for the EventImage to update in case it exists.
     */
    where: EventImageWhereUniqueInput
    /**
     * In case the EventImage found by the `where` argument doesn't exist, create a new EventImage with this data.
     */
    create: XOR<EventImageCreateInput, EventImageUncheckedCreateInput>
    /**
     * In case the EventImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventImageUpdateInput, EventImageUncheckedUpdateInput>
  }

  /**
   * EventImage delete
   */
  export type EventImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    /**
     * Filter which EventImage to delete.
     */
    where: EventImageWhereUniqueInput
  }

  /**
   * EventImage deleteMany
   */
  export type EventImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventImages to delete
     */
    where?: EventImageWhereInput
    /**
     * Limit how many EventImages to delete.
     */
    limit?: number
  }

  /**
   * EventImage.ImagePreview
   */
  export type EventImage$ImagePreviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * EventImage.ImageContent
   */
  export type EventImage$ImageContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
  }

  /**
   * EventImage without action
   */
  export type EventImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageMinAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
  }

  export type ImageMaxAggregateOutputType = {
    id: string | null
    url: string | null
    createdAt: Date | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    url: number
    createdAt: number
    _all: number
  }


  export type ImageMinAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    url?: true
    createdAt?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: string
    url: string
    createdAt: Date
    _count: ImageCountAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
    ImagePreview?: boolean | Image$ImagePreviewArgs<ExtArgs>
    ImageContent?: boolean | Image$ImageContentArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    url?: boolean
    createdAt?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "createdAt", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ImagePreview?: boolean | Image$ImagePreviewArgs<ExtArgs>
    ImageContent?: boolean | Image$ImageContentArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      ImagePreview: Prisma.$EventImagePayload<ExtArgs>[]
      ImageContent: Prisma.$EventImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      createdAt: Date
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
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
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ImagePreview<T extends Image$ImagePreviewArgs<ExtArgs> = {}>(args?: Subset<T, Image$ImagePreviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ImageContent<T extends Image$ImageContentArgs<ExtArgs> = {}>(args?: Subset<T, Image$ImageContentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'String'>
    readonly url: FieldRef<"Image", 'String'>
    readonly createdAt: FieldRef<"Image", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image.ImagePreview
   */
  export type Image$ImagePreviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    where?: EventImageWhereInput
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    cursor?: EventImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventImageScalarFieldEnum | EventImageScalarFieldEnum[]
  }

  /**
   * Image.ImageContent
   */
  export type Image$ImageContentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventImage
     */
    select?: EventImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventImage
     */
    omit?: EventImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventImageInclude<ExtArgs> | null
    where?: EventImageWhereInput
    orderBy?: EventImageOrderByWithRelationInput | EventImageOrderByWithRelationInput[]
    cursor?: EventImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventImageScalarFieldEnum | EventImageScalarFieldEnum[]
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    imageReview: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    userId: string | null
    imageReview: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    eventId: number
    userId: number
    imageReview: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    imageReview?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    imageReview?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    eventId?: true
    userId?: true
    imageReview?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    eventId: string
    userId: string
    imageReview: string
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    imageReview?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    imageReview?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    userId?: boolean
    imageReview?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    eventId?: boolean
    userId?: boolean
    imageReview?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "userId" | "imageReview" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Event: Prisma.$EventPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      userId: string
      imageReview: string
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly eventId: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly imageReview: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    price: number | null
  }

  export type TicketSumAggregateOutputType = {
    price: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    ticketType: $Enums.TicketRole | null
    price: number | null
    quantity: string | null
    userId: string | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    ticketType: $Enums.TicketRole | null
    price: number | null
    quantity: string | null
    userId: string | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    eventId: number
    ticketType: number
    price: number
    quantity: number
    userId: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    price?: true
  }

  export type TicketSumAggregateInputType = {
    price?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    eventId?: true
    ticketType?: true
    price?: true
    quantity?: true
    userId?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    eventId?: true
    ticketType?: true
    price?: true
    quantity?: true
    userId?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    eventId?: true
    ticketType?: true
    price?: true
    quantity?: true
    userId?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    eventId: string
    ticketType: $Enums.TicketRole
    price: number
    quantity: string
    userId: string | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    ticketType?: boolean
    price?: boolean
    quantity?: boolean
    userId?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
    Transaction?: boolean | Ticket$TransactionArgs<ExtArgs>
    User?: boolean | Ticket$UserArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    ticketType?: boolean
    price?: boolean
    quantity?: boolean
    userId?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
    User?: boolean | Ticket$UserArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    ticketType?: boolean
    price?: boolean
    quantity?: boolean
    userId?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
    User?: boolean | Ticket$UserArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    eventId?: boolean
    ticketType?: boolean
    price?: boolean
    quantity?: boolean
    userId?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "ticketType" | "price" | "quantity" | "userId", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
    Transaction?: boolean | Ticket$TransactionArgs<ExtArgs>
    User?: boolean | Ticket$UserArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
    User?: boolean | Ticket$UserArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
    User?: boolean | Ticket$UserArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      ticketType: $Enums.TicketRole
      price: number
      quantity: string
      userId: string | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Transaction<T extends Ticket$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Ticket$UserArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly eventId: FieldRef<"Ticket", 'String'>
    readonly ticketType: FieldRef<"Ticket", 'TicketRole'>
    readonly price: FieldRef<"Ticket", 'Float'>
    readonly quantity: FieldRef<"Ticket", 'String'>
    readonly userId: FieldRef<"Ticket", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.Transaction
   */
  export type Ticket$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Ticket.User
   */
  export type Ticket$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model Voucher
   */

  export type AggregateVoucher = {
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  export type VoucherAvgAggregateOutputType = {
    discountPercent: number | null
    maxUses: number | null
  }

  export type VoucherSumAggregateOutputType = {
    discountPercent: number | null
    maxUses: number | null
  }

  export type VoucherMinAggregateOutputType = {
    id: string | null
    eventId: string | null
    description: string | null
    code: string | null
    discountPercent: number | null
    maxUses: number | null
    status: $Enums.StatusRole | null
    validUntil: Date | null
  }

  export type VoucherMaxAggregateOutputType = {
    id: string | null
    eventId: string | null
    description: string | null
    code: string | null
    discountPercent: number | null
    maxUses: number | null
    status: $Enums.StatusRole | null
    validUntil: Date | null
  }

  export type VoucherCountAggregateOutputType = {
    id: number
    eventId: number
    description: number
    code: number
    discountPercent: number
    maxUses: number
    status: number
    validUntil: number
    _all: number
  }


  export type VoucherAvgAggregateInputType = {
    discountPercent?: true
    maxUses?: true
  }

  export type VoucherSumAggregateInputType = {
    discountPercent?: true
    maxUses?: true
  }

  export type VoucherMinAggregateInputType = {
    id?: true
    eventId?: true
    description?: true
    code?: true
    discountPercent?: true
    maxUses?: true
    status?: true
    validUntil?: true
  }

  export type VoucherMaxAggregateInputType = {
    id?: true
    eventId?: true
    description?: true
    code?: true
    discountPercent?: true
    maxUses?: true
    status?: true
    validUntil?: true
  }

  export type VoucherCountAggregateInputType = {
    id?: true
    eventId?: true
    description?: true
    code?: true
    discountPercent?: true
    maxUses?: true
    status?: true
    validUntil?: true
    _all?: true
  }

  export type VoucherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Voucher to aggregate.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vouchers
    **/
    _count?: true | VoucherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VoucherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VoucherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoucherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoucherMaxAggregateInputType
  }

  export type GetVoucherAggregateType<T extends VoucherAggregateArgs> = {
        [P in keyof T & keyof AggregateVoucher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoucher[P]>
      : GetScalarType<T[P], AggregateVoucher[P]>
  }




  export type VoucherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoucherWhereInput
    orderBy?: VoucherOrderByWithAggregationInput | VoucherOrderByWithAggregationInput[]
    by: VoucherScalarFieldEnum[] | VoucherScalarFieldEnum
    having?: VoucherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoucherCountAggregateInputType | true
    _avg?: VoucherAvgAggregateInputType
    _sum?: VoucherSumAggregateInputType
    _min?: VoucherMinAggregateInputType
    _max?: VoucherMaxAggregateInputType
  }

  export type VoucherGroupByOutputType = {
    id: string
    eventId: string
    description: string
    code: string
    discountPercent: number
    maxUses: number
    status: $Enums.StatusRole
    validUntil: Date
    _count: VoucherCountAggregateOutputType | null
    _avg: VoucherAvgAggregateOutputType | null
    _sum: VoucherSumAggregateOutputType | null
    _min: VoucherMinAggregateOutputType | null
    _max: VoucherMaxAggregateOutputType | null
  }

  type GetVoucherGroupByPayload<T extends VoucherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoucherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoucherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoucherGroupByOutputType[P]>
            : GetScalarType<T[P], VoucherGroupByOutputType[P]>
        }
      >
    >


  export type VoucherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    description?: boolean
    code?: boolean
    discountPercent?: boolean
    maxUses?: boolean
    status?: boolean
    validUntil?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    Transaction?: boolean | Voucher$TransactionArgs<ExtArgs>
    _count?: boolean | VoucherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    description?: boolean
    code?: boolean
    discountPercent?: boolean
    maxUses?: boolean
    status?: boolean
    validUntil?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventId?: boolean
    description?: boolean
    code?: boolean
    discountPercent?: boolean
    maxUses?: boolean
    status?: boolean
    validUntil?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["voucher"]>

  export type VoucherSelectScalar = {
    id?: boolean
    eventId?: boolean
    description?: boolean
    code?: boolean
    discountPercent?: boolean
    maxUses?: boolean
    status?: boolean
    validUntil?: boolean
  }

  export type VoucherOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "eventId" | "description" | "code" | "discountPercent" | "maxUses" | "status" | "validUntil", ExtArgs["result"]["voucher"]>
  export type VoucherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    Transaction?: boolean | Voucher$TransactionArgs<ExtArgs>
    _count?: boolean | VoucherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VoucherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type VoucherIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $VoucherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Voucher"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventId: string
      description: string
      code: string
      discountPercent: number
      maxUses: number
      status: $Enums.StatusRole
      validUntil: Date
    }, ExtArgs["result"]["voucher"]>
    composites: {}
  }

  type VoucherGetPayload<S extends boolean | null | undefined | VoucherDefaultArgs> = $Result.GetResult<Prisma.$VoucherPayload, S>

  type VoucherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoucherFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoucherCountAggregateInputType | true
    }

  export interface VoucherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Voucher'], meta: { name: 'Voucher' } }
    /**
     * Find zero or one Voucher that matches the filter.
     * @param {VoucherFindUniqueArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoucherFindUniqueArgs>(args: SelectSubset<T, VoucherFindUniqueArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Voucher that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoucherFindUniqueOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoucherFindUniqueOrThrowArgs>(args: SelectSubset<T, VoucherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoucherFindFirstArgs>(args?: SelectSubset<T, VoucherFindFirstArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Voucher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindFirstOrThrowArgs} args - Arguments to find a Voucher
     * @example
     * // Get one Voucher
     * const voucher = await prisma.voucher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoucherFindFirstOrThrowArgs>(args?: SelectSubset<T, VoucherFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vouchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vouchers
     * const vouchers = await prisma.voucher.findMany()
     * 
     * // Get first 10 Vouchers
     * const vouchers = await prisma.voucher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voucherWithIdOnly = await prisma.voucher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoucherFindManyArgs>(args?: SelectSubset<T, VoucherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Voucher.
     * @param {VoucherCreateArgs} args - Arguments to create a Voucher.
     * @example
     * // Create one Voucher
     * const Voucher = await prisma.voucher.create({
     *   data: {
     *     // ... data to create a Voucher
     *   }
     * })
     * 
     */
    create<T extends VoucherCreateArgs>(args: SelectSubset<T, VoucherCreateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vouchers.
     * @param {VoucherCreateManyArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoucherCreateManyArgs>(args?: SelectSubset<T, VoucherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vouchers and returns the data saved in the database.
     * @param {VoucherCreateManyAndReturnArgs} args - Arguments to create many Vouchers.
     * @example
     * // Create many Vouchers
     * const voucher = await prisma.voucher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoucherCreateManyAndReturnArgs>(args?: SelectSubset<T, VoucherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Voucher.
     * @param {VoucherDeleteArgs} args - Arguments to delete one Voucher.
     * @example
     * // Delete one Voucher
     * const Voucher = await prisma.voucher.delete({
     *   where: {
     *     // ... filter to delete one Voucher
     *   }
     * })
     * 
     */
    delete<T extends VoucherDeleteArgs>(args: SelectSubset<T, VoucherDeleteArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Voucher.
     * @param {VoucherUpdateArgs} args - Arguments to update one Voucher.
     * @example
     * // Update one Voucher
     * const voucher = await prisma.voucher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoucherUpdateArgs>(args: SelectSubset<T, VoucherUpdateArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vouchers.
     * @param {VoucherDeleteManyArgs} args - Arguments to filter Vouchers to delete.
     * @example
     * // Delete a few Vouchers
     * const { count } = await prisma.voucher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoucherDeleteManyArgs>(args?: SelectSubset<T, VoucherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoucherUpdateManyArgs>(args: SelectSubset<T, VoucherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vouchers and returns the data updated in the database.
     * @param {VoucherUpdateManyAndReturnArgs} args - Arguments to update many Vouchers.
     * @example
     * // Update many Vouchers
     * const voucher = await prisma.voucher.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vouchers and only return the `id`
     * const voucherWithIdOnly = await prisma.voucher.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VoucherUpdateManyAndReturnArgs>(args: SelectSubset<T, VoucherUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Voucher.
     * @param {VoucherUpsertArgs} args - Arguments to update or create a Voucher.
     * @example
     * // Update or create a Voucher
     * const voucher = await prisma.voucher.upsert({
     *   create: {
     *     // ... data to create a Voucher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Voucher we want to update
     *   }
     * })
     */
    upsert<T extends VoucherUpsertArgs>(args: SelectSubset<T, VoucherUpsertArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vouchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherCountArgs} args - Arguments to filter Vouchers to count.
     * @example
     * // Count the number of Vouchers
     * const count = await prisma.voucher.count({
     *   where: {
     *     // ... the filter for the Vouchers we want to count
     *   }
     * })
    **/
    count<T extends VoucherCountArgs>(
      args?: Subset<T, VoucherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoucherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoucherAggregateArgs>(args: Subset<T, VoucherAggregateArgs>): Prisma.PrismaPromise<GetVoucherAggregateType<T>>

    /**
     * Group by Voucher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoucherGroupByArgs} args - Group by arguments.
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
      T extends VoucherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoucherGroupByArgs['orderBy'] }
        : { orderBy?: VoucherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoucherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoucherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Voucher model
   */
  readonly fields: VoucherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Voucher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoucherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Transaction<T extends Voucher$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Voucher$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Voucher model
   */
  interface VoucherFieldRefs {
    readonly id: FieldRef<"Voucher", 'String'>
    readonly eventId: FieldRef<"Voucher", 'String'>
    readonly description: FieldRef<"Voucher", 'String'>
    readonly code: FieldRef<"Voucher", 'String'>
    readonly discountPercent: FieldRef<"Voucher", 'Int'>
    readonly maxUses: FieldRef<"Voucher", 'Int'>
    readonly status: FieldRef<"Voucher", 'StatusRole'>
    readonly validUntil: FieldRef<"Voucher", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Voucher findUnique
   */
  export type VoucherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findUniqueOrThrow
   */
  export type VoucherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher findFirst
   */
  export type VoucherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findFirstOrThrow
   */
  export type VoucherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Voucher to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vouchers.
     */
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher findMany
   */
  export type VoucherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter, which Vouchers to fetch.
     */
    where?: VoucherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vouchers to fetch.
     */
    orderBy?: VoucherOrderByWithRelationInput | VoucherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vouchers.
     */
    cursor?: VoucherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vouchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vouchers.
     */
    skip?: number
    distinct?: VoucherScalarFieldEnum | VoucherScalarFieldEnum[]
  }

  /**
   * Voucher create
   */
  export type VoucherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to create a Voucher.
     */
    data: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
  }

  /**
   * Voucher createMany
   */
  export type VoucherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Voucher createManyAndReturn
   */
  export type VoucherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to create many Vouchers.
     */
    data: VoucherCreateManyInput | VoucherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voucher update
   */
  export type VoucherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The data needed to update a Voucher.
     */
    data: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
    /**
     * Choose, which Voucher to update.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher updateMany
   */
  export type VoucherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
  }

  /**
   * Voucher updateManyAndReturn
   */
  export type VoucherUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * The data used to update Vouchers.
     */
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyInput>
    /**
     * Filter which Vouchers to update
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Voucher upsert
   */
  export type VoucherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * The filter to search for the Voucher to update in case it exists.
     */
    where: VoucherWhereUniqueInput
    /**
     * In case the Voucher found by the `where` argument doesn't exist, create a new Voucher with this data.
     */
    create: XOR<VoucherCreateInput, VoucherUncheckedCreateInput>
    /**
     * In case the Voucher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoucherUpdateInput, VoucherUncheckedUpdateInput>
  }

  /**
   * Voucher delete
   */
  export type VoucherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    /**
     * Filter which Voucher to delete.
     */
    where: VoucherWhereUniqueInput
  }

  /**
   * Voucher deleteMany
   */
  export type VoucherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vouchers to delete
     */
    where?: VoucherWhereInput
    /**
     * Limit how many Vouchers to delete.
     */
    limit?: number
  }

  /**
   * Voucher.Transaction
   */
  export type Voucher$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Voucher without action
   */
  export type VoucherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
  }


  /**
   * Model Discount
   */

  export type AggregateDiscount = {
    _count: DiscountCountAggregateOutputType | null
    _avg: DiscountAvgAggregateOutputType | null
    _sum: DiscountSumAggregateOutputType | null
    _min: DiscountMinAggregateOutputType | null
    _max: DiscountMaxAggregateOutputType | null
  }

  export type DiscountAvgAggregateOutputType = {
    discountPercent: number | null
  }

  export type DiscountSumAggregateOutputType = {
    discountPercent: number | null
  }

  export type DiscountMinAggregateOutputType = {
    id: string | null
    discountPercent: number | null
    validUntil: Date | null
    eventId: string | null
  }

  export type DiscountMaxAggregateOutputType = {
    id: string | null
    discountPercent: number | null
    validUntil: Date | null
    eventId: string | null
  }

  export type DiscountCountAggregateOutputType = {
    id: number
    discountPercent: number
    validUntil: number
    eventId: number
    _all: number
  }


  export type DiscountAvgAggregateInputType = {
    discountPercent?: true
  }

  export type DiscountSumAggregateInputType = {
    discountPercent?: true
  }

  export type DiscountMinAggregateInputType = {
    id?: true
    discountPercent?: true
    validUntil?: true
    eventId?: true
  }

  export type DiscountMaxAggregateInputType = {
    id?: true
    discountPercent?: true
    validUntil?: true
    eventId?: true
  }

  export type DiscountCountAggregateInputType = {
    id?: true
    discountPercent?: true
    validUntil?: true
    eventId?: true
    _all?: true
  }

  export type DiscountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discount to aggregate.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Discounts
    **/
    _count?: true | DiscountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DiscountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DiscountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DiscountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DiscountMaxAggregateInputType
  }

  export type GetDiscountAggregateType<T extends DiscountAggregateArgs> = {
        [P in keyof T & keyof AggregateDiscount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDiscount[P]>
      : GetScalarType<T[P], AggregateDiscount[P]>
  }




  export type DiscountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DiscountWhereInput
    orderBy?: DiscountOrderByWithAggregationInput | DiscountOrderByWithAggregationInput[]
    by: DiscountScalarFieldEnum[] | DiscountScalarFieldEnum
    having?: DiscountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DiscountCountAggregateInputType | true
    _avg?: DiscountAvgAggregateInputType
    _sum?: DiscountSumAggregateInputType
    _min?: DiscountMinAggregateInputType
    _max?: DiscountMaxAggregateInputType
  }

  export type DiscountGroupByOutputType = {
    id: string
    discountPercent: number
    validUntil: Date
    eventId: string
    _count: DiscountCountAggregateOutputType | null
    _avg: DiscountAvgAggregateOutputType | null
    _sum: DiscountSumAggregateOutputType | null
    _min: DiscountMinAggregateOutputType | null
    _max: DiscountMaxAggregateOutputType | null
  }

  type GetDiscountGroupByPayload<T extends DiscountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DiscountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DiscountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DiscountGroupByOutputType[P]>
            : GetScalarType<T[P], DiscountGroupByOutputType[P]>
        }
      >
    >


  export type DiscountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discountPercent?: boolean
    validUntil?: boolean
    eventId?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
    Transaction?: boolean | Discount$TransactionArgs<ExtArgs>
    _count?: boolean | DiscountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discount"]>

  export type DiscountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discountPercent?: boolean
    validUntil?: boolean
    eventId?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discount"]>

  export type DiscountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    discountPercent?: boolean
    validUntil?: boolean
    eventId?: boolean
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["discount"]>

  export type DiscountSelectScalar = {
    id?: boolean
    discountPercent?: boolean
    validUntil?: boolean
    eventId?: boolean
  }

  export type DiscountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "discountPercent" | "validUntil" | "eventId", ExtArgs["result"]["discount"]>
  export type DiscountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
    Transaction?: boolean | Discount$TransactionArgs<ExtArgs>
    _count?: boolean | DiscountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DiscountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }
  export type DiscountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | EventDefaultArgs<ExtArgs>
  }

  export type $DiscountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Discount"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>
      Transaction: Prisma.$TransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      discountPercent: number
      validUntil: Date
      eventId: string
    }, ExtArgs["result"]["discount"]>
    composites: {}
  }

  type DiscountGetPayload<S extends boolean | null | undefined | DiscountDefaultArgs> = $Result.GetResult<Prisma.$DiscountPayload, S>

  type DiscountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DiscountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DiscountCountAggregateInputType | true
    }

  export interface DiscountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Discount'], meta: { name: 'Discount' } }
    /**
     * Find zero or one Discount that matches the filter.
     * @param {DiscountFindUniqueArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DiscountFindUniqueArgs>(args: SelectSubset<T, DiscountFindUniqueArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Discount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DiscountFindUniqueOrThrowArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DiscountFindUniqueOrThrowArgs>(args: SelectSubset<T, DiscountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DiscountFindFirstArgs>(args?: SelectSubset<T, DiscountFindFirstArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Discount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindFirstOrThrowArgs} args - Arguments to find a Discount
     * @example
     * // Get one Discount
     * const discount = await prisma.discount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DiscountFindFirstOrThrowArgs>(args?: SelectSubset<T, DiscountFindFirstOrThrowArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Discounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Discounts
     * const discounts = await prisma.discount.findMany()
     * 
     * // Get first 10 Discounts
     * const discounts = await prisma.discount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const discountWithIdOnly = await prisma.discount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DiscountFindManyArgs>(args?: SelectSubset<T, DiscountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Discount.
     * @param {DiscountCreateArgs} args - Arguments to create a Discount.
     * @example
     * // Create one Discount
     * const Discount = await prisma.discount.create({
     *   data: {
     *     // ... data to create a Discount
     *   }
     * })
     * 
     */
    create<T extends DiscountCreateArgs>(args: SelectSubset<T, DiscountCreateArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Discounts.
     * @param {DiscountCreateManyArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discount = await prisma.discount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DiscountCreateManyArgs>(args?: SelectSubset<T, DiscountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Discounts and returns the data saved in the database.
     * @param {DiscountCreateManyAndReturnArgs} args - Arguments to create many Discounts.
     * @example
     * // Create many Discounts
     * const discount = await prisma.discount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Discounts and only return the `id`
     * const discountWithIdOnly = await prisma.discount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DiscountCreateManyAndReturnArgs>(args?: SelectSubset<T, DiscountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Discount.
     * @param {DiscountDeleteArgs} args - Arguments to delete one Discount.
     * @example
     * // Delete one Discount
     * const Discount = await prisma.discount.delete({
     *   where: {
     *     // ... filter to delete one Discount
     *   }
     * })
     * 
     */
    delete<T extends DiscountDeleteArgs>(args: SelectSubset<T, DiscountDeleteArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Discount.
     * @param {DiscountUpdateArgs} args - Arguments to update one Discount.
     * @example
     * // Update one Discount
     * const discount = await prisma.discount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DiscountUpdateArgs>(args: SelectSubset<T, DiscountUpdateArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Discounts.
     * @param {DiscountDeleteManyArgs} args - Arguments to filter Discounts to delete.
     * @example
     * // Delete a few Discounts
     * const { count } = await prisma.discount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DiscountDeleteManyArgs>(args?: SelectSubset<T, DiscountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Discounts
     * const discount = await prisma.discount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DiscountUpdateManyArgs>(args: SelectSubset<T, DiscountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Discounts and returns the data updated in the database.
     * @param {DiscountUpdateManyAndReturnArgs} args - Arguments to update many Discounts.
     * @example
     * // Update many Discounts
     * const discount = await prisma.discount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Discounts and only return the `id`
     * const discountWithIdOnly = await prisma.discount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DiscountUpdateManyAndReturnArgs>(args: SelectSubset<T, DiscountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Discount.
     * @param {DiscountUpsertArgs} args - Arguments to update or create a Discount.
     * @example
     * // Update or create a Discount
     * const discount = await prisma.discount.upsert({
     *   create: {
     *     // ... data to create a Discount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Discount we want to update
     *   }
     * })
     */
    upsert<T extends DiscountUpsertArgs>(args: SelectSubset<T, DiscountUpsertArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Discounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountCountArgs} args - Arguments to filter Discounts to count.
     * @example
     * // Count the number of Discounts
     * const count = await prisma.discount.count({
     *   where: {
     *     // ... the filter for the Discounts we want to count
     *   }
     * })
    **/
    count<T extends DiscountCountArgs>(
      args?: Subset<T, DiscountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DiscountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DiscountAggregateArgs>(args: Subset<T, DiscountAggregateArgs>): Prisma.PrismaPromise<GetDiscountAggregateType<T>>

    /**
     * Group by Discount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DiscountGroupByArgs} args - Group by arguments.
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
      T extends DiscountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DiscountGroupByArgs['orderBy'] }
        : { orderBy?: DiscountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DiscountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDiscountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Discount model
   */
  readonly fields: DiscountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Discount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DiscountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Transaction<T extends Discount$TransactionArgs<ExtArgs> = {}>(args?: Subset<T, Discount$TransactionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Discount model
   */
  interface DiscountFieldRefs {
    readonly id: FieldRef<"Discount", 'String'>
    readonly discountPercent: FieldRef<"Discount", 'Int'>
    readonly validUntil: FieldRef<"Discount", 'DateTime'>
    readonly eventId: FieldRef<"Discount", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Discount findUnique
   */
  export type DiscountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount findUniqueOrThrow
   */
  export type DiscountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount findFirst
   */
  export type DiscountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount findFirstOrThrow
   */
  export type DiscountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discount to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Discounts.
     */
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount findMany
   */
  export type DiscountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter, which Discounts to fetch.
     */
    where?: DiscountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Discounts to fetch.
     */
    orderBy?: DiscountOrderByWithRelationInput | DiscountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Discounts.
     */
    cursor?: DiscountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Discounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Discounts.
     */
    skip?: number
    distinct?: DiscountScalarFieldEnum | DiscountScalarFieldEnum[]
  }

  /**
   * Discount create
   */
  export type DiscountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The data needed to create a Discount.
     */
    data: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>
  }

  /**
   * Discount createMany
   */
  export type DiscountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Discounts.
     */
    data: DiscountCreateManyInput | DiscountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Discount createManyAndReturn
   */
  export type DiscountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * The data used to create many Discounts.
     */
    data: DiscountCreateManyInput | DiscountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Discount update
   */
  export type DiscountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The data needed to update a Discount.
     */
    data: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>
    /**
     * Choose, which Discount to update.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount updateMany
   */
  export type DiscountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Discounts.
     */
    data: XOR<DiscountUpdateManyMutationInput, DiscountUncheckedUpdateManyInput>
    /**
     * Filter which Discounts to update
     */
    where?: DiscountWhereInput
    /**
     * Limit how many Discounts to update.
     */
    limit?: number
  }

  /**
   * Discount updateManyAndReturn
   */
  export type DiscountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * The data used to update Discounts.
     */
    data: XOR<DiscountUpdateManyMutationInput, DiscountUncheckedUpdateManyInput>
    /**
     * Filter which Discounts to update
     */
    where?: DiscountWhereInput
    /**
     * Limit how many Discounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Discount upsert
   */
  export type DiscountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * The filter to search for the Discount to update in case it exists.
     */
    where: DiscountWhereUniqueInput
    /**
     * In case the Discount found by the `where` argument doesn't exist, create a new Discount with this data.
     */
    create: XOR<DiscountCreateInput, DiscountUncheckedCreateInput>
    /**
     * In case the Discount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DiscountUpdateInput, DiscountUncheckedUpdateInput>
  }

  /**
   * Discount delete
   */
  export type DiscountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    /**
     * Filter which Discount to delete.
     */
    where: DiscountWhereUniqueInput
  }

  /**
   * Discount deleteMany
   */
  export type DiscountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Discounts to delete
     */
    where?: DiscountWhereInput
    /**
     * Limit how many Discounts to delete.
     */
    limit?: number
  }

  /**
   * Discount.Transaction
   */
  export type Discount$TransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    cursor?: TransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Discount without action
   */
  export type DiscountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
  }


  /**
   * Model Transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    totalPrice: number | null
    totalTicket: number | null
  }

  export type TransactionSumAggregateOutputType = {
    totalPrice: number | null
    totalTicket: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    ticketId: string | null
    voucherId: string | null
    discountId: string | null
    statusPaid: $Enums.StatusPaid | null
    totalPrice: number | null
    totalTicket: number | null
    createdAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    eventId: string | null
    ticketId: string | null
    voucherId: string | null
    discountId: string | null
    statusPaid: $Enums.StatusPaid | null
    totalPrice: number | null
    totalTicket: number | null
    createdAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    userId: number
    eventId: number
    ticketId: number
    voucherId: number
    discountId: number
    statusPaid: number
    totalPrice: number
    totalTicket: number
    createdAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    totalPrice?: true
    totalTicket?: true
  }

  export type TransactionSumAggregateInputType = {
    totalPrice?: true
    totalTicket?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    ticketId?: true
    voucherId?: true
    discountId?: true
    statusPaid?: true
    totalPrice?: true
    totalTicket?: true
    createdAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    ticketId?: true
    voucherId?: true
    discountId?: true
    statusPaid?: true
    totalPrice?: true
    totalTicket?: true
    createdAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    userId?: true
    eventId?: true
    ticketId?: true
    voucherId?: true
    discountId?: true
    statusPaid?: true
    totalPrice?: true
    totalTicket?: true
    createdAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transaction to aggregate.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type TransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionWhereInput
    orderBy?: TransactionOrderByWithAggregationInput | TransactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: TransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    userId: string
    eventId: string
    ticketId: string
    voucherId: string | null
    discountId: string | null
    statusPaid: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends TransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type TransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    ticketId?: boolean
    voucherId?: boolean
    discountId?: boolean
    statusPaid?: boolean
    totalPrice?: boolean
    totalTicket?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Voucher?: boolean | Transaction$VoucherArgs<ExtArgs>
    Discount?: boolean | Transaction$DiscountArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    ticketId?: boolean
    voucherId?: boolean
    discountId?: boolean
    statusPaid?: boolean
    totalPrice?: boolean
    totalTicket?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Voucher?: boolean | Transaction$VoucherArgs<ExtArgs>
    Discount?: boolean | Transaction$DiscountArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    eventId?: boolean
    ticketId?: boolean
    voucherId?: boolean
    discountId?: boolean
    statusPaid?: boolean
    totalPrice?: boolean
    totalTicket?: boolean
    createdAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Voucher?: boolean | Transaction$VoucherArgs<ExtArgs>
    Discount?: boolean | Transaction$DiscountArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type TransactionSelectScalar = {
    id?: boolean
    userId?: boolean
    eventId?: boolean
    ticketId?: boolean
    voucherId?: boolean
    discountId?: boolean
    statusPaid?: boolean
    totalPrice?: boolean
    totalTicket?: boolean
    createdAt?: boolean
  }

  export type TransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "eventId" | "ticketId" | "voucherId" | "discountId" | "statusPaid" | "totalPrice" | "totalTicket" | "createdAt", ExtArgs["result"]["transaction"]>
  export type TransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Voucher?: boolean | Transaction$VoucherArgs<ExtArgs>
    Discount?: boolean | Transaction$DiscountArgs<ExtArgs>
  }
  export type TransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Voucher?: boolean | Transaction$VoucherArgs<ExtArgs>
    Discount?: boolean | Transaction$DiscountArgs<ExtArgs>
  }
  export type TransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    Event?: boolean | EventDefaultArgs<ExtArgs>
    Ticket?: boolean | TicketDefaultArgs<ExtArgs>
    Voucher?: boolean | Transaction$VoucherArgs<ExtArgs>
    Discount?: boolean | Transaction$DiscountArgs<ExtArgs>
  }

  export type $TransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Transaction"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      Event: Prisma.$EventPayload<ExtArgs>
      Ticket: Prisma.$TicketPayload<ExtArgs>
      Voucher: Prisma.$VoucherPayload<ExtArgs> | null
      Discount: Prisma.$DiscountPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      eventId: string
      ticketId: string
      voucherId: string | null
      discountId: string | null
      statusPaid: $Enums.StatusPaid
      totalPrice: number
      totalTicket: number
      createdAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type TransactionGetPayload<S extends boolean | null | undefined | TransactionDefaultArgs> = $Result.GetResult<Prisma.$TransactionPayload, S>

  type TransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface TransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Transaction'], meta: { name: 'Transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {TransactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionFindUniqueArgs>(args: SelectSubset<T, TransactionFindUniqueArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionFindFirstArgs>(args?: SelectSubset<T, TransactionFindFirstArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionFindManyArgs>(args?: SelectSubset<T, TransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {TransactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends TransactionCreateArgs>(args: SelectSubset<T, TransactionCreateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {TransactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCreateManyArgs>(args?: SelectSubset<T, TransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {TransactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {TransactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends TransactionDeleteArgs>(args: SelectSubset<T, TransactionDeleteArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {TransactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionUpdateArgs>(args: SelectSubset<T, TransactionUpdateArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {TransactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionDeleteManyArgs>(args?: SelectSubset<T, TransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionUpdateManyArgs>(args: SelectSubset<T, TransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {TransactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {TransactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends TransactionUpsertArgs>(args: SelectSubset<T, TransactionUpsertArgs<ExtArgs>>): Prisma__TransactionClient<$Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends TransactionCountArgs>(
      args?: Subset<T, TransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionGroupByArgs} args - Group by arguments.
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
      T extends TransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionGroupByArgs['orderBy'] }
        : { orderBy?: TransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Transaction model
   */
  readonly fields: TransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Voucher<T extends Transaction$VoucherArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$VoucherArgs<ExtArgs>>): Prisma__VoucherClient<$Result.GetResult<Prisma.$VoucherPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Discount<T extends Transaction$DiscountArgs<ExtArgs> = {}>(args?: Subset<T, Transaction$DiscountArgs<ExtArgs>>): Prisma__DiscountClient<$Result.GetResult<Prisma.$DiscountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Transaction model
   */
  interface TransactionFieldRefs {
    readonly id: FieldRef<"Transaction", 'String'>
    readonly userId: FieldRef<"Transaction", 'String'>
    readonly eventId: FieldRef<"Transaction", 'String'>
    readonly ticketId: FieldRef<"Transaction", 'String'>
    readonly voucherId: FieldRef<"Transaction", 'String'>
    readonly discountId: FieldRef<"Transaction", 'String'>
    readonly statusPaid: FieldRef<"Transaction", 'StatusPaid'>
    readonly totalPrice: FieldRef<"Transaction", 'Float'>
    readonly totalTicket: FieldRef<"Transaction", 'Int'>
    readonly createdAt: FieldRef<"Transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Transaction findUnique
   */
  export type TransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findUniqueOrThrow
   */
  export type TransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction findFirst
   */
  export type TransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findFirstOrThrow
   */
  export type TransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transaction to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction findMany
   */
  export type TransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter, which Transactions to fetch.
     */
    where?: TransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Transactions to fetch.
     */
    orderBy?: TransactionOrderByWithRelationInput | TransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Transactions.
     */
    cursor?: TransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * Transaction create
   */
  export type TransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Transaction.
     */
    data: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
  }

  /**
   * Transaction createMany
   */
  export type TransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Transaction createManyAndReturn
   */
  export type TransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to create many Transactions.
     */
    data: TransactionCreateManyInput | TransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction update
   */
  export type TransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Transaction.
     */
    data: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
    /**
     * Choose, which Transaction to update.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction updateMany
   */
  export type TransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
  }

  /**
   * Transaction updateManyAndReturn
   */
  export type TransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * The data used to update Transactions.
     */
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyInput>
    /**
     * Filter which Transactions to update
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Transaction upsert
   */
  export type TransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Transaction to update in case it exists.
     */
    where: TransactionWhereUniqueInput
    /**
     * In case the Transaction found by the `where` argument doesn't exist, create a new Transaction with this data.
     */
    create: XOR<TransactionCreateInput, TransactionUncheckedCreateInput>
    /**
     * In case the Transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionUpdateInput, TransactionUncheckedUpdateInput>
  }

  /**
   * Transaction delete
   */
  export type TransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
    /**
     * Filter which Transaction to delete.
     */
    where: TransactionWhereUniqueInput
  }

  /**
   * Transaction deleteMany
   */
  export type TransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Transactions to delete
     */
    where?: TransactionWhereInput
    /**
     * Limit how many Transactions to delete.
     */
    limit?: number
  }

  /**
   * Transaction.Voucher
   */
  export type Transaction$VoucherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Voucher
     */
    select?: VoucherSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Voucher
     */
    omit?: VoucherOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VoucherInclude<ExtArgs> | null
    where?: VoucherWhereInput
  }

  /**
   * Transaction.Discount
   */
  export type Transaction$DiscountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Discount
     */
    select?: DiscountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Discount
     */
    omit?: DiscountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DiscountInclude<ExtArgs> | null
    where?: DiscountWhereInput
  }

  /**
   * Transaction without action
   */
  export type TransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Transaction
     */
    select?: TransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Transaction
     */
    omit?: TransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    username: 'username',
    password: 'password',
    phoneNumber: 'phoneNumber',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PointScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    userId: 'userId',
    expiredAt: 'expiredAt',
    createAt: 'createAt'
  };

  export type PointScalarFieldEnum = (typeof PointScalarFieldEnum)[keyof typeof PointScalarFieldEnum]


  export const ReferralCodeScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    code: 'code',
    createdAt: 'createdAt'
  };

  export type ReferralCodeScalarFieldEnum = (typeof ReferralCodeScalarFieldEnum)[keyof typeof ReferralCodeScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    description: 'description',
    location: 'location',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventCategoryScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    categoryId: 'categoryId',
    createdAt: 'createdAt'
  };

  export type EventCategoryScalarFieldEnum = (typeof EventCategoryScalarFieldEnum)[keyof typeof EventCategoryScalarFieldEnum]


  export const EventImageScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    imagePreviewId: 'imagePreviewId',
    imageContentId: 'imageContentId',
    createdAt: 'createdAt'
  };

  export type EventImageScalarFieldEnum = (typeof EventImageScalarFieldEnum)[keyof typeof EventImageScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    url: 'url',
    createdAt: 'createdAt'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    userId: 'userId',
    imageReview: 'imageReview',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    ticketType: 'ticketType',
    price: 'price',
    quantity: 'quantity',
    userId: 'userId'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const VoucherScalarFieldEnum: {
    id: 'id',
    eventId: 'eventId',
    description: 'description',
    code: 'code',
    discountPercent: 'discountPercent',
    maxUses: 'maxUses',
    status: 'status',
    validUntil: 'validUntil'
  };

  export type VoucherScalarFieldEnum = (typeof VoucherScalarFieldEnum)[keyof typeof VoucherScalarFieldEnum]


  export const DiscountScalarFieldEnum: {
    id: 'id',
    discountPercent: 'discountPercent',
    validUntil: 'validUntil',
    eventId: 'eventId'
  };

  export type DiscountScalarFieldEnum = (typeof DiscountScalarFieldEnum)[keyof typeof DiscountScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    eventId: 'eventId',
    ticketId: 'ticketId',
    voucherId: 'voucherId',
    discountId: 'discountId',
    statusPaid: 'statusPaid',
    totalPrice: 'totalPrice',
    totalTicket: 'totalTicket',
    createdAt: 'createdAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'CategoryRole'
   */
  export type EnumCategoryRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryRole'>
    


  /**
   * Reference to a field of type 'CategoryRole[]'
   */
  export type ListEnumCategoryRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CategoryRole[]'>
    


  /**
   * Reference to a field of type 'TicketRole'
   */
  export type EnumTicketRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketRole'>
    


  /**
   * Reference to a field of type 'TicketRole[]'
   */
  export type ListEnumTicketRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'StatusRole'
   */
  export type EnumStatusRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusRole'>
    


  /**
   * Reference to a field of type 'StatusRole[]'
   */
  export type ListEnumStatusRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusRole[]'>
    


  /**
   * Reference to a field of type 'StatusPaid'
   */
  export type EnumStatusPaidFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPaid'>
    


  /**
   * Reference to a field of type 'StatusPaid[]'
   */
  export type ListEnumStatusPaidFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusPaid[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    Event?: EventListRelationFilter
    Ticket?: TicketListRelationFilter
    Transaction?: TransactionListRelationFilter
    Review?: ReviewListRelationFilter
    ReferralCode?: XOR<ReferralCodeNullableScalarRelationFilter, ReferralCodeWhereInput> | null
    Point?: PointListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    Event?: EventOrderByRelationAggregateInput
    Ticket?: TicketOrderByRelationAggregateInput
    Transaction?: TransactionOrderByRelationAggregateInput
    Review?: ReviewOrderByRelationAggregateInput
    ReferralCode?: ReferralCodeOrderByWithRelationInput
    Point?: PointOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    Event?: EventListRelationFilter
    Ticket?: TicketListRelationFilter
    Transaction?: TransactionListRelationFilter
    Review?: ReviewListRelationFilter
    ReferralCode?: XOR<ReferralCodeNullableScalarRelationFilter, ReferralCodeWhereInput> | null
    Point?: PointListRelationFilter
  }, "id" | "email" | "username" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PointWhereInput = {
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    id?: StringFilter<"Point"> | string
    amount?: IntFilter<"Point"> | number
    userId?: StringFilter<"Point"> | string
    expiredAt?: DateTimeFilter<"Point"> | Date | string
    createAt?: DateTimeFilter<"Point"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PointOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    expiredAt?: SortOrder
    createAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type PointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PointWhereInput | PointWhereInput[]
    OR?: PointWhereInput[]
    NOT?: PointWhereInput | PointWhereInput[]
    amount?: IntFilter<"Point"> | number
    userId?: StringFilter<"Point"> | string
    expiredAt?: DateTimeFilter<"Point"> | Date | string
    createAt?: DateTimeFilter<"Point"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PointOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    expiredAt?: SortOrder
    createAt?: SortOrder
    _count?: PointCountOrderByAggregateInput
    _avg?: PointAvgOrderByAggregateInput
    _max?: PointMaxOrderByAggregateInput
    _min?: PointMinOrderByAggregateInput
    _sum?: PointSumOrderByAggregateInput
  }

  export type PointScalarWhereWithAggregatesInput = {
    AND?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    OR?: PointScalarWhereWithAggregatesInput[]
    NOT?: PointScalarWhereWithAggregatesInput | PointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Point"> | string
    amount?: IntWithAggregatesFilter<"Point"> | number
    userId?: StringWithAggregatesFilter<"Point"> | string
    expiredAt?: DateTimeWithAggregatesFilter<"Point"> | Date | string
    createAt?: DateTimeWithAggregatesFilter<"Point"> | Date | string
  }

  export type ReferralCodeWhereInput = {
    AND?: ReferralCodeWhereInput | ReferralCodeWhereInput[]
    OR?: ReferralCodeWhereInput[]
    NOT?: ReferralCodeWhereInput | ReferralCodeWhereInput[]
    id?: StringFilter<"ReferralCode"> | string
    userId?: StringFilter<"ReferralCode"> | string
    code?: StringFilter<"ReferralCode"> | string
    createdAt?: DateTimeFilter<"ReferralCode"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReferralCodeOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type ReferralCodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    code?: string
    AND?: ReferralCodeWhereInput | ReferralCodeWhereInput[]
    OR?: ReferralCodeWhereInput[]
    NOT?: ReferralCodeWhereInput | ReferralCodeWhereInput[]
    createdAt?: DateTimeFilter<"ReferralCode"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId" | "code">

  export type ReferralCodeOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
    _count?: ReferralCodeCountOrderByAggregateInput
    _max?: ReferralCodeMaxOrderByAggregateInput
    _min?: ReferralCodeMinOrderByAggregateInput
  }

  export type ReferralCodeScalarWhereWithAggregatesInput = {
    AND?: ReferralCodeScalarWhereWithAggregatesInput | ReferralCodeScalarWhereWithAggregatesInput[]
    OR?: ReferralCodeScalarWhereWithAggregatesInput[]
    NOT?: ReferralCodeScalarWhereWithAggregatesInput | ReferralCodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReferralCode"> | string
    userId?: StringWithAggregatesFilter<"ReferralCode"> | string
    code?: StringWithAggregatesFilter<"ReferralCode"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ReferralCode"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: EnumCategoryRoleFilter<"Category"> | $Enums.CategoryRole
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    EventCategory?: EventCategoryListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    EventCategory?: EventCategoryOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: EnumCategoryRoleFilter<"Category"> | $Enums.CategoryRole
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    EventCategory?: EventCategoryListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: EnumCategoryRoleWithAggregatesFilter<"Category"> | $Enums.CategoryRole
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    userId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    EventCategory?: EventCategoryListRelationFilter
    Voucher?: VoucherListRelationFilter
    Transaction?: TransactionListRelationFilter
    Review?: ReviewListRelationFilter
    EventImage?: EventImageListRelationFilter
    Discount?: DiscountListRelationFilter
    Ticket?: TicketListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
    EventCategory?: EventCategoryOrderByRelationAggregateInput
    Voucher?: VoucherOrderByRelationAggregateInput
    Transaction?: TransactionOrderByRelationAggregateInput
    Review?: ReviewOrderByRelationAggregateInput
    EventImage?: EventImageOrderByRelationAggregateInput
    Discount?: DiscountOrderByRelationAggregateInput
    Ticket?: TicketOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    userId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    EventCategory?: EventCategoryListRelationFilter
    Voucher?: VoucherListRelationFilter
    Transaction?: TransactionListRelationFilter
    Review?: ReviewListRelationFilter
    EventImage?: EventImageListRelationFilter
    Discount?: DiscountListRelationFilter
    Ticket?: TicketListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    userId?: StringWithAggregatesFilter<"Event"> | string
    title?: StringWithAggregatesFilter<"Event"> | string
    description?: StringWithAggregatesFilter<"Event"> | string
    location?: StringWithAggregatesFilter<"Event"> | string
    startDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Event"> | Date | string
  }

  export type EventCategoryWhereInput = {
    AND?: EventCategoryWhereInput | EventCategoryWhereInput[]
    OR?: EventCategoryWhereInput[]
    NOT?: EventCategoryWhereInput | EventCategoryWhereInput[]
    id?: StringFilter<"EventCategory"> | string
    eventId?: StringFilter<"EventCategory"> | string
    categoryId?: StringFilter<"EventCategory"> | string
    createdAt?: DateTimeFilter<"EventCategory"> | Date | string
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type EventCategoryOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    Category?: CategoryOrderByWithRelationInput
    Event?: EventOrderByWithRelationInput
  }

  export type EventCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventCategoryWhereInput | EventCategoryWhereInput[]
    OR?: EventCategoryWhereInput[]
    NOT?: EventCategoryWhereInput | EventCategoryWhereInput[]
    eventId?: StringFilter<"EventCategory"> | string
    categoryId?: StringFilter<"EventCategory"> | string
    createdAt?: DateTimeFilter<"EventCategory"> | Date | string
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type EventCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
    _count?: EventCategoryCountOrderByAggregateInput
    _max?: EventCategoryMaxOrderByAggregateInput
    _min?: EventCategoryMinOrderByAggregateInput
  }

  export type EventCategoryScalarWhereWithAggregatesInput = {
    AND?: EventCategoryScalarWhereWithAggregatesInput | EventCategoryScalarWhereWithAggregatesInput[]
    OR?: EventCategoryScalarWhereWithAggregatesInput[]
    NOT?: EventCategoryScalarWhereWithAggregatesInput | EventCategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventCategory"> | string
    eventId?: StringWithAggregatesFilter<"EventCategory"> | string
    categoryId?: StringWithAggregatesFilter<"EventCategory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EventCategory"> | Date | string
  }

  export type EventImageWhereInput = {
    AND?: EventImageWhereInput | EventImageWhereInput[]
    OR?: EventImageWhereInput[]
    NOT?: EventImageWhereInput | EventImageWhereInput[]
    id?: StringFilter<"EventImage"> | string
    eventId?: StringFilter<"EventImage"> | string
    imagePreviewId?: StringNullableFilter<"EventImage"> | string | null
    imageContentId?: StringNullableFilter<"EventImage"> | string | null
    createdAt?: DateTimeFilter<"EventImage"> | Date | string
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
    ImagePreview?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
    ImageContent?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }

  export type EventImageOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    imagePreviewId?: SortOrderInput | SortOrder
    imageContentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    Event?: EventOrderByWithRelationInput
    ImagePreview?: ImageOrderByWithRelationInput
    ImageContent?: ImageOrderByWithRelationInput
  }

  export type EventImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventImageWhereInput | EventImageWhereInput[]
    OR?: EventImageWhereInput[]
    NOT?: EventImageWhereInput | EventImageWhereInput[]
    eventId?: StringFilter<"EventImage"> | string
    imagePreviewId?: StringNullableFilter<"EventImage"> | string | null
    imageContentId?: StringNullableFilter<"EventImage"> | string | null
    createdAt?: DateTimeFilter<"EventImage"> | Date | string
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
    ImagePreview?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
    ImageContent?: XOR<ImageNullableScalarRelationFilter, ImageWhereInput> | null
  }, "id">

  export type EventImageOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    imagePreviewId?: SortOrderInput | SortOrder
    imageContentId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: EventImageCountOrderByAggregateInput
    _max?: EventImageMaxOrderByAggregateInput
    _min?: EventImageMinOrderByAggregateInput
  }

  export type EventImageScalarWhereWithAggregatesInput = {
    AND?: EventImageScalarWhereWithAggregatesInput | EventImageScalarWhereWithAggregatesInput[]
    OR?: EventImageScalarWhereWithAggregatesInput[]
    NOT?: EventImageScalarWhereWithAggregatesInput | EventImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventImage"> | string
    eventId?: StringWithAggregatesFilter<"EventImage"> | string
    imagePreviewId?: StringNullableWithAggregatesFilter<"EventImage"> | string | null
    imageContentId?: StringNullableWithAggregatesFilter<"EventImage"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"EventImage"> | Date | string
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: StringFilter<"Image"> | string
    url?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    ImagePreview?: EventImageListRelationFilter
    ImageContent?: EventImageListRelationFilter
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    ImagePreview?: EventImageOrderByRelationAggregateInput
    ImageContent?: EventImageOrderByRelationAggregateInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    url?: StringFilter<"Image"> | string
    createdAt?: DateTimeFilter<"Image"> | Date | string
    ImagePreview?: EventImageListRelationFilter
    ImageContent?: EventImageListRelationFilter
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Image"> | string
    url?: StringWithAggregatesFilter<"Image"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Image"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    eventId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    imageReview?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    imageReview?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
    Event?: EventOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    eventId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    imageReview?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    imageReview?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    eventId?: StringWithAggregatesFilter<"Review"> | string
    userId?: StringWithAggregatesFilter<"Review"> | string
    imageReview?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    eventId?: StringFilter<"Ticket"> | string
    ticketType?: EnumTicketRoleFilter<"Ticket"> | $Enums.TicketRole
    price?: FloatFilter<"Ticket"> | number
    quantity?: StringFilter<"Ticket"> | string
    userId?: StringNullableFilter<"Ticket"> | string | null
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
    Transaction?: TransactionListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketType?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    userId?: SortOrderInput | SortOrder
    Event?: EventOrderByWithRelationInput
    Transaction?: TransactionOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    eventId?: StringFilter<"Ticket"> | string
    ticketType?: EnumTicketRoleFilter<"Ticket"> | $Enums.TicketRole
    price?: FloatFilter<"Ticket"> | number
    quantity?: StringFilter<"Ticket"> | string
    userId?: StringNullableFilter<"Ticket"> | string | null
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
    Transaction?: TransactionListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketType?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    eventId?: StringWithAggregatesFilter<"Ticket"> | string
    ticketType?: EnumTicketRoleWithAggregatesFilter<"Ticket"> | $Enums.TicketRole
    price?: FloatWithAggregatesFilter<"Ticket"> | number
    quantity?: StringWithAggregatesFilter<"Ticket"> | string
    userId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
  }

  export type VoucherWhereInput = {
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    id?: StringFilter<"Voucher"> | string
    eventId?: StringFilter<"Voucher"> | string
    description?: StringFilter<"Voucher"> | string
    code?: StringFilter<"Voucher"> | string
    discountPercent?: IntFilter<"Voucher"> | number
    maxUses?: IntFilter<"Voucher"> | number
    status?: EnumStatusRoleFilter<"Voucher"> | $Enums.StatusRole
    validUntil?: DateTimeFilter<"Voucher"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    Transaction?: TransactionListRelationFilter
  }

  export type VoucherOrderByWithRelationInput = {
    id?: SortOrder
    eventId?: SortOrder
    description?: SortOrder
    code?: SortOrder
    discountPercent?: SortOrder
    maxUses?: SortOrder
    status?: SortOrder
    validUntil?: SortOrder
    event?: EventOrderByWithRelationInput
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type VoucherWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: VoucherWhereInput | VoucherWhereInput[]
    OR?: VoucherWhereInput[]
    NOT?: VoucherWhereInput | VoucherWhereInput[]
    eventId?: StringFilter<"Voucher"> | string
    description?: StringFilter<"Voucher"> | string
    discountPercent?: IntFilter<"Voucher"> | number
    maxUses?: IntFilter<"Voucher"> | number
    status?: EnumStatusRoleFilter<"Voucher"> | $Enums.StatusRole
    validUntil?: DateTimeFilter<"Voucher"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    Transaction?: TransactionListRelationFilter
  }, "id" | "code">

  export type VoucherOrderByWithAggregationInput = {
    id?: SortOrder
    eventId?: SortOrder
    description?: SortOrder
    code?: SortOrder
    discountPercent?: SortOrder
    maxUses?: SortOrder
    status?: SortOrder
    validUntil?: SortOrder
    _count?: VoucherCountOrderByAggregateInput
    _avg?: VoucherAvgOrderByAggregateInput
    _max?: VoucherMaxOrderByAggregateInput
    _min?: VoucherMinOrderByAggregateInput
    _sum?: VoucherSumOrderByAggregateInput
  }

  export type VoucherScalarWhereWithAggregatesInput = {
    AND?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    OR?: VoucherScalarWhereWithAggregatesInput[]
    NOT?: VoucherScalarWhereWithAggregatesInput | VoucherScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Voucher"> | string
    eventId?: StringWithAggregatesFilter<"Voucher"> | string
    description?: StringWithAggregatesFilter<"Voucher"> | string
    code?: StringWithAggregatesFilter<"Voucher"> | string
    discountPercent?: IntWithAggregatesFilter<"Voucher"> | number
    maxUses?: IntWithAggregatesFilter<"Voucher"> | number
    status?: EnumStatusRoleWithAggregatesFilter<"Voucher"> | $Enums.StatusRole
    validUntil?: DateTimeWithAggregatesFilter<"Voucher"> | Date | string
  }

  export type DiscountWhereInput = {
    AND?: DiscountWhereInput | DiscountWhereInput[]
    OR?: DiscountWhereInput[]
    NOT?: DiscountWhereInput | DiscountWhereInput[]
    id?: StringFilter<"Discount"> | string
    discountPercent?: IntFilter<"Discount"> | number
    validUntil?: DateTimeFilter<"Discount"> | Date | string
    eventId?: StringFilter<"Discount"> | string
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
    Transaction?: TransactionListRelationFilter
  }

  export type DiscountOrderByWithRelationInput = {
    id?: SortOrder
    discountPercent?: SortOrder
    validUntil?: SortOrder
    eventId?: SortOrder
    Event?: EventOrderByWithRelationInput
    Transaction?: TransactionOrderByRelationAggregateInput
  }

  export type DiscountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DiscountWhereInput | DiscountWhereInput[]
    OR?: DiscountWhereInput[]
    NOT?: DiscountWhereInput | DiscountWhereInput[]
    discountPercent?: IntFilter<"Discount"> | number
    validUntil?: DateTimeFilter<"Discount"> | Date | string
    eventId?: StringFilter<"Discount"> | string
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
    Transaction?: TransactionListRelationFilter
  }, "id">

  export type DiscountOrderByWithAggregationInput = {
    id?: SortOrder
    discountPercent?: SortOrder
    validUntil?: SortOrder
    eventId?: SortOrder
    _count?: DiscountCountOrderByAggregateInput
    _avg?: DiscountAvgOrderByAggregateInput
    _max?: DiscountMaxOrderByAggregateInput
    _min?: DiscountMinOrderByAggregateInput
    _sum?: DiscountSumOrderByAggregateInput
  }

  export type DiscountScalarWhereWithAggregatesInput = {
    AND?: DiscountScalarWhereWithAggregatesInput | DiscountScalarWhereWithAggregatesInput[]
    OR?: DiscountScalarWhereWithAggregatesInput[]
    NOT?: DiscountScalarWhereWithAggregatesInput | DiscountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Discount"> | string
    discountPercent?: IntWithAggregatesFilter<"Discount"> | number
    validUntil?: DateTimeWithAggregatesFilter<"Discount"> | Date | string
    eventId?: StringWithAggregatesFilter<"Discount"> | string
  }

  export type TransactionWhereInput = {
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    eventId?: StringFilter<"Transaction"> | string
    ticketId?: StringFilter<"Transaction"> | string
    voucherId?: StringNullableFilter<"Transaction"> | string | null
    discountId?: StringNullableFilter<"Transaction"> | string | null
    statusPaid?: EnumStatusPaidFilter<"Transaction"> | $Enums.StatusPaid
    totalPrice?: FloatFilter<"Transaction"> | number
    totalTicket?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
    Ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    Voucher?: XOR<VoucherNullableScalarRelationFilter, VoucherWhereInput> | null
    Discount?: XOR<DiscountNullableScalarRelationFilter, DiscountWhereInput> | null
  }

  export type TransactionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    voucherId?: SortOrderInput | SortOrder
    discountId?: SortOrderInput | SortOrder
    statusPaid?: SortOrder
    totalPrice?: SortOrder
    totalTicket?: SortOrder
    createdAt?: SortOrder
    User?: UserOrderByWithRelationInput
    Event?: EventOrderByWithRelationInput
    Ticket?: TicketOrderByWithRelationInput
    Voucher?: VoucherOrderByWithRelationInput
    Discount?: DiscountOrderByWithRelationInput
  }

  export type TransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionWhereInput | TransactionWhereInput[]
    OR?: TransactionWhereInput[]
    NOT?: TransactionWhereInput | TransactionWhereInput[]
    userId?: StringFilter<"Transaction"> | string
    eventId?: StringFilter<"Transaction"> | string
    ticketId?: StringFilter<"Transaction"> | string
    voucherId?: StringNullableFilter<"Transaction"> | string | null
    discountId?: StringNullableFilter<"Transaction"> | string | null
    statusPaid?: EnumStatusPaidFilter<"Transaction"> | $Enums.StatusPaid
    totalPrice?: FloatFilter<"Transaction"> | number
    totalTicket?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    Event?: XOR<EventScalarRelationFilter, EventWhereInput>
    Ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    Voucher?: XOR<VoucherNullableScalarRelationFilter, VoucherWhereInput> | null
    Discount?: XOR<DiscountNullableScalarRelationFilter, DiscountWhereInput> | null
  }, "id">

  export type TransactionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    voucherId?: SortOrderInput | SortOrder
    discountId?: SortOrderInput | SortOrder
    statusPaid?: SortOrder
    totalPrice?: SortOrder
    totalTicket?: SortOrder
    createdAt?: SortOrder
    _count?: TransactionCountOrderByAggregateInput
    _avg?: TransactionAvgOrderByAggregateInput
    _max?: TransactionMaxOrderByAggregateInput
    _min?: TransactionMinOrderByAggregateInput
    _sum?: TransactionSumOrderByAggregateInput
  }

  export type TransactionScalarWhereWithAggregatesInput = {
    AND?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    OR?: TransactionScalarWhereWithAggregatesInput[]
    NOT?: TransactionScalarWhereWithAggregatesInput | TransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Transaction"> | string
    userId?: StringWithAggregatesFilter<"Transaction"> | string
    eventId?: StringWithAggregatesFilter<"Transaction"> | string
    ticketId?: StringWithAggregatesFilter<"Transaction"> | string
    voucherId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    discountId?: StringNullableWithAggregatesFilter<"Transaction"> | string | null
    statusPaid?: EnumStatusPaidWithAggregatesFilter<"Transaction"> | $Enums.StatusPaid
    totalPrice?: FloatWithAggregatesFilter<"Transaction"> | number
    totalTicket?: IntWithAggregatesFilter<"Transaction"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Transaction"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    Event?: EventCreateNestedManyWithoutUserInput
    Ticket?: TicketCreateNestedManyWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
    ReferralCode?: ReferralCodeCreateNestedOneWithoutUserInput
    Point?: PointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutUserInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    ReferralCode?: ReferralCodeUncheckedCreateNestedOneWithoutUserInput
    Point?: PointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutUserNestedInput
    Ticket?: TicketUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
    ReferralCode?: ReferralCodeUpdateOneWithoutUserNestedInput
    Point?: PointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutUserNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    ReferralCode?: ReferralCodeUncheckedUpdateOneWithoutUserNestedInput
    Point?: PointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointCreateInput = {
    id?: string
    amount: number
    expiredAt: Date | string
    createAt?: Date | string
    User: UserCreateNestedOneWithoutPointInput
  }

  export type PointUncheckedCreateInput = {
    id?: string
    amount: number
    userId: string
    expiredAt: Date | string
    createAt?: Date | string
  }

  export type PointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutPointNestedInput
  }

  export type PointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointCreateManyInput = {
    id?: string
    amount: number
    userId: string
    expiredAt: Date | string
    createAt?: Date | string
  }

  export type PointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCodeCreateInput = {
    id?: string
    code: string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutReferralCodeInput
  }

  export type ReferralCodeUncheckedCreateInput = {
    id?: string
    userId: string
    code: string
    createdAt?: Date | string
  }

  export type ReferralCodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutReferralCodeNestedInput
  }

  export type ReferralCodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCodeCreateManyInput = {
    id?: string
    userId: string
    code: string
    createdAt?: Date | string
  }

  export type ReferralCodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: $Enums.CategoryRole
    createdAt?: Date | string
    updatedAt?: Date | string
    EventCategory?: EventCategoryCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: $Enums.CategoryRole
    createdAt?: Date | string
    updatedAt?: Date | string
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumCategoryRoleFieldUpdateOperationsInput | $Enums.CategoryRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventCategory?: EventCategoryUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumCategoryRoleFieldUpdateOperationsInput | $Enums.CategoryRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: $Enums.CategoryRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumCategoryRoleFieldUpdateOperationsInput | $Enums.CategoryRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumCategoryRoleFieldUpdateOperationsInput | $Enums.CategoryRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutEventInput
    EventCategory?: EventCategoryCreateNestedManyWithoutEventInput
    Voucher?: VoucherCreateNestedManyWithoutEventInput
    Transaction?: TransactionCreateNestedManyWithoutEventInput
    Review?: ReviewCreateNestedManyWithoutEventInput
    EventImage?: EventImageCreateNestedManyWithoutEventInput
    Discount?: DiscountCreateNestedManyWithoutEventInput
    Ticket?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    userId: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutEventInput
    Voucher?: VoucherUncheckedCreateNestedManyWithoutEventInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutEventInput
    Review?: ReviewUncheckedCreateNestedManyWithoutEventInput
    EventImage?: EventImageUncheckedCreateNestedManyWithoutEventInput
    Discount?: DiscountUncheckedCreateNestedManyWithoutEventInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutEventNestedInput
    EventCategory?: EventCategoryUpdateManyWithoutEventNestedInput
    Voucher?: VoucherUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUpdateManyWithoutEventNestedInput
    Review?: ReviewUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUpdateManyWithoutEventNestedInput
    Discount?: DiscountUpdateManyWithoutEventNestedInput
    Ticket?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutEventNestedInput
    Voucher?: VoucherUncheckedUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUncheckedUpdateManyWithoutEventNestedInput
    Discount?: DiscountUncheckedUpdateManyWithoutEventNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    userId: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryCreateInput = {
    id?: string
    createdAt?: Date | string
    Category: CategoryCreateNestedOneWithoutEventCategoryInput
    Event: EventCreateNestedOneWithoutEventCategoryInput
  }

  export type EventCategoryUncheckedCreateInput = {
    id?: string
    eventId: string
    categoryId: string
    createdAt?: Date | string
  }

  export type EventCategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneRequiredWithoutEventCategoryNestedInput
    Event?: EventUpdateOneRequiredWithoutEventCategoryNestedInput
  }

  export type EventCategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryCreateManyInput = {
    id?: string
    eventId: string
    categoryId: string
    createdAt?: Date | string
  }

  export type EventCategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageCreateInput = {
    id?: string
    createdAt?: Date | string
    Event: EventCreateNestedOneWithoutEventImageInput
    ImagePreview?: ImageCreateNestedOneWithoutImagePreviewInput
    ImageContent?: ImageCreateNestedOneWithoutImageContentInput
  }

  export type EventImageUncheckedCreateInput = {
    id?: string
    eventId: string
    imagePreviewId?: string | null
    imageContentId?: string | null
    createdAt?: Date | string
  }

  export type EventImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateOneRequiredWithoutEventImageNestedInput
    ImagePreview?: ImageUpdateOneWithoutImagePreviewNestedInput
    ImageContent?: ImageUpdateOneWithoutImageContentNestedInput
  }

  export type EventImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    imagePreviewId?: NullableStringFieldUpdateOperationsInput | string | null
    imageContentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageCreateManyInput = {
    id?: string
    eventId: string
    imagePreviewId?: string | null
    imageContentId?: string | null
    createdAt?: Date | string
  }

  export type EventImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    imagePreviewId?: NullableStringFieldUpdateOperationsInput | string | null
    imageContentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    ImagePreview?: EventImageCreateNestedManyWithoutImagePreviewInput
    ImageContent?: EventImageCreateNestedManyWithoutImageContentInput
  }

  export type ImageUncheckedCreateInput = {
    id?: string
    url: string
    createdAt?: Date | string
    ImagePreview?: EventImageUncheckedCreateNestedManyWithoutImagePreviewInput
    ImageContent?: EventImageUncheckedCreateNestedManyWithoutImageContentInput
  }

  export type ImageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ImagePreview?: EventImageUpdateManyWithoutImagePreviewNestedInput
    ImageContent?: EventImageUpdateManyWithoutImageContentNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ImagePreview?: EventImageUncheckedUpdateManyWithoutImagePreviewNestedInput
    ImageContent?: EventImageUncheckedUpdateManyWithoutImageContentNestedInput
  }

  export type ImageCreateManyInput = {
    id?: string
    url: string
    createdAt?: Date | string
  }

  export type ImageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    imageReview: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutReviewInput
    Event: EventCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    eventId: string
    userId: string
    imageReview: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageReview?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutReviewNestedInput
    Event?: EventUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    imageReview?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    eventId: string
    userId: string
    imageReview: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageReview?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    imageReview?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    id?: string
    ticketType?: $Enums.TicketRole
    price: number
    quantity: string
    Event: EventCreateNestedOneWithoutTicketInput
    Transaction?: TransactionCreateNestedManyWithoutTicketInput
    User?: UserCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    eventId: string
    ticketType?: $Enums.TicketRole
    price: number
    quantity: string
    userId?: string | null
    Transaction?: TransactionUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketType?: EnumTicketRoleFieldUpdateOperationsInput | $Enums.TicketRole
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    Event?: EventUpdateOneRequiredWithoutTicketNestedInput
    Transaction?: TransactionUpdateManyWithoutTicketNestedInput
    User?: UserUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketType?: EnumTicketRoleFieldUpdateOperationsInput | $Enums.TicketRole
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    eventId: string
    ticketType?: $Enums.TicketRole
    price: number
    quantity: string
    userId?: string | null
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketType?: EnumTicketRoleFieldUpdateOperationsInput | $Enums.TicketRole
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketType?: EnumTicketRoleFieldUpdateOperationsInput | $Enums.TicketRole
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoucherCreateInput = {
    id?: string
    description: string
    code: string
    discountPercent: number
    maxUses: number
    status?: $Enums.StatusRole
    validUntil: Date | string
    event: EventCreateNestedOneWithoutVoucherInput
    Transaction?: TransactionCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUncheckedCreateInput = {
    id?: string
    eventId: string
    description: string
    code: string
    discountPercent: number
    maxUses: number
    status?: $Enums.StatusRole
    validUntil: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRoleFieldUpdateOperationsInput | $Enums.StatusRole
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutVoucherNestedInput
    Transaction?: TransactionUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRoleFieldUpdateOperationsInput | $Enums.StatusRole
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherCreateManyInput = {
    id?: string
    eventId: string
    description: string
    code: string
    discountPercent: number
    maxUses: number
    status?: $Enums.StatusRole
    validUntil: Date | string
  }

  export type VoucherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRoleFieldUpdateOperationsInput | $Enums.StatusRole
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRoleFieldUpdateOperationsInput | $Enums.StatusRole
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountCreateInput = {
    id?: string
    discountPercent: number
    validUntil: Date | string
    Event: EventCreateNestedOneWithoutDiscountInput
    Transaction?: TransactionCreateNestedManyWithoutDiscountInput
  }

  export type DiscountUncheckedCreateInput = {
    id?: string
    discountPercent: number
    validUntil: Date | string
    eventId: string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutDiscountInput
  }

  export type DiscountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateOneRequiredWithoutDiscountNestedInput
    Transaction?: TransactionUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
    Transaction?: TransactionUncheckedUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountCreateManyInput = {
    id?: string
    discountPercent: number
    validUntil: Date | string
    eventId: string
  }

  export type DiscountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCreateInput = {
    id?: string
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutTransactionInput
    Event: EventCreateNestedOneWithoutTransactionInput
    Ticket: TicketCreateNestedOneWithoutTransactionInput
    Voucher?: VoucherCreateNestedOneWithoutTransactionInput
    Discount?: DiscountCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateInput = {
    id?: string
    userId: string
    eventId: string
    ticketId: string
    voucherId?: string | null
    discountId?: string | null
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
  }

  export type TransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutTransactionNestedInput
    Event?: EventUpdateOneRequiredWithoutTransactionNestedInput
    Ticket?: TicketUpdateOneRequiredWithoutTransactionNestedInput
    Voucher?: VoucherUpdateOneWithoutTransactionNestedInput
    Discount?: DiscountUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    discountId?: NullableStringFieldUpdateOperationsInput | string | null
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyInput = {
    id?: string
    userId: string
    eventId: string
    ticketId: string
    voucherId?: string | null
    discountId?: string | null
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
  }

  export type TransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    discountId?: NullableStringFieldUpdateOperationsInput | string | null
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: TransactionWhereInput
    some?: TransactionWhereInput
    none?: TransactionWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type ReferralCodeNullableScalarRelationFilter = {
    is?: ReferralCodeWhereInput | null
    isNot?: ReferralCodeWhereInput | null
  }

  export type PointListRelationFilter = {
    every?: PointWhereInput
    some?: PointWhereInput
    none?: PointWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PointCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    expiredAt?: SortOrder
    createAt?: SortOrder
  }

  export type PointAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PointMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    expiredAt?: SortOrder
    createAt?: SortOrder
  }

  export type PointMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    userId?: SortOrder
    expiredAt?: SortOrder
    createAt?: SortOrder
  }

  export type PointSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type ReferralCodeCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralCodeMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralCodeMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    code?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCategoryRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryRole | EnumCategoryRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryRole[] | ListEnumCategoryRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryRole[] | ListEnumCategoryRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryRoleFilter<$PrismaModel> | $Enums.CategoryRole
  }

  export type EventCategoryListRelationFilter = {
    every?: EventCategoryWhereInput
    some?: EventCategoryWhereInput
    none?: EventCategoryWhereInput
  }

  export type EventCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumCategoryRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryRole | EnumCategoryRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryRole[] | ListEnumCategoryRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryRole[] | ListEnumCategoryRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryRoleWithAggregatesFilter<$PrismaModel> | $Enums.CategoryRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryRoleFilter<$PrismaModel>
    _max?: NestedEnumCategoryRoleFilter<$PrismaModel>
  }

  export type VoucherListRelationFilter = {
    every?: VoucherWhereInput
    some?: VoucherWhereInput
    none?: VoucherWhereInput
  }

  export type EventImageListRelationFilter = {
    every?: EventImageWhereInput
    some?: EventImageWhereInput
    none?: EventImageWhereInput
  }

  export type DiscountListRelationFilter = {
    every?: DiscountWhereInput
    some?: DiscountWhereInput
    none?: DiscountWhereInput
  }

  export type VoucherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DiscountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    categoryId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageNullableScalarRelationFilter = {
    is?: ImageWhereInput | null
    isNot?: ImageWhereInput | null
  }

  export type EventImageCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    imagePreviewId?: SortOrder
    imageContentId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventImageMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    imagePreviewId?: SortOrder
    imageContentId?: SortOrder
    createdAt?: SortOrder
  }

  export type EventImageMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    imagePreviewId?: SortOrder
    imageContentId?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    imageReview?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    imageReview?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    userId?: SortOrder
    imageReview?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type EnumTicketRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketRole | EnumTicketRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TicketRole[] | ListEnumTicketRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketRole[] | ListEnumTicketRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketRoleFilter<$PrismaModel> | $Enums.TicketRole
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketType?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketType?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    ticketType?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    userId?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type EnumTicketRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketRole | EnumTicketRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TicketRole[] | ListEnumTicketRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketRole[] | ListEnumTicketRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketRoleWithAggregatesFilter<$PrismaModel> | $Enums.TicketRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketRoleFilter<$PrismaModel>
    _max?: NestedEnumTicketRoleFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumStatusRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRole | EnumStatusRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRole[] | ListEnumStatusRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRole[] | ListEnumStatusRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRoleFilter<$PrismaModel> | $Enums.StatusRole
  }

  export type VoucherCountOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    description?: SortOrder
    code?: SortOrder
    discountPercent?: SortOrder
    maxUses?: SortOrder
    status?: SortOrder
    validUntil?: SortOrder
  }

  export type VoucherAvgOrderByAggregateInput = {
    discountPercent?: SortOrder
    maxUses?: SortOrder
  }

  export type VoucherMaxOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    description?: SortOrder
    code?: SortOrder
    discountPercent?: SortOrder
    maxUses?: SortOrder
    status?: SortOrder
    validUntil?: SortOrder
  }

  export type VoucherMinOrderByAggregateInput = {
    id?: SortOrder
    eventId?: SortOrder
    description?: SortOrder
    code?: SortOrder
    discountPercent?: SortOrder
    maxUses?: SortOrder
    status?: SortOrder
    validUntil?: SortOrder
  }

  export type VoucherSumOrderByAggregateInput = {
    discountPercent?: SortOrder
    maxUses?: SortOrder
  }

  export type EnumStatusRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRole | EnumStatusRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRole[] | ListEnumStatusRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRole[] | ListEnumStatusRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRoleWithAggregatesFilter<$PrismaModel> | $Enums.StatusRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusRoleFilter<$PrismaModel>
    _max?: NestedEnumStatusRoleFilter<$PrismaModel>
  }

  export type DiscountCountOrderByAggregateInput = {
    id?: SortOrder
    discountPercent?: SortOrder
    validUntil?: SortOrder
    eventId?: SortOrder
  }

  export type DiscountAvgOrderByAggregateInput = {
    discountPercent?: SortOrder
  }

  export type DiscountMaxOrderByAggregateInput = {
    id?: SortOrder
    discountPercent?: SortOrder
    validUntil?: SortOrder
    eventId?: SortOrder
  }

  export type DiscountMinOrderByAggregateInput = {
    id?: SortOrder
    discountPercent?: SortOrder
    validUntil?: SortOrder
    eventId?: SortOrder
  }

  export type DiscountSumOrderByAggregateInput = {
    discountPercent?: SortOrder
  }

  export type EnumStatusPaidFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPaid | EnumStatusPaidFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPaid[] | ListEnumStatusPaidFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPaid[] | ListEnumStatusPaidFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPaidFilter<$PrismaModel> | $Enums.StatusPaid
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type VoucherNullableScalarRelationFilter = {
    is?: VoucherWhereInput | null
    isNot?: VoucherWhereInput | null
  }

  export type DiscountNullableScalarRelationFilter = {
    is?: DiscountWhereInput | null
    isNot?: DiscountWhereInput | null
  }

  export type TransactionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    voucherId?: SortOrder
    discountId?: SortOrder
    statusPaid?: SortOrder
    totalPrice?: SortOrder
    totalTicket?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
    totalTicket?: SortOrder
  }

  export type TransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    voucherId?: SortOrder
    discountId?: SortOrder
    statusPaid?: SortOrder
    totalPrice?: SortOrder
    totalTicket?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    eventId?: SortOrder
    ticketId?: SortOrder
    voucherId?: SortOrder
    discountId?: SortOrder
    statusPaid?: SortOrder
    totalPrice?: SortOrder
    totalTicket?: SortOrder
    createdAt?: SortOrder
  }

  export type TransactionSumOrderByAggregateInput = {
    totalPrice?: SortOrder
    totalTicket?: SortOrder
  }

  export type EnumStatusPaidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPaid | EnumStatusPaidFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPaid[] | ListEnumStatusPaidFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPaid[] | ListEnumStatusPaidFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPaidWithAggregatesFilter<$PrismaModel> | $Enums.StatusPaid
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPaidFilter<$PrismaModel>
    _max?: NestedEnumStatusPaidFilter<$PrismaModel>
  }

  export type EventCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReferralCodeCreateNestedOneWithoutUserInput = {
    create?: XOR<ReferralCodeCreateWithoutUserInput, ReferralCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReferralCodeCreateOrConnectWithoutUserInput
    connect?: ReferralCodeWhereUniqueInput
  }

  export type PointCreateNestedManyWithoutUserInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReferralCodeUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ReferralCodeCreateWithoutUserInput, ReferralCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReferralCodeCreateOrConnectWithoutUserInput
    connect?: ReferralCodeWhereUniqueInput
  }

  export type PointUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReferralCodeUpdateOneWithoutUserNestedInput = {
    create?: XOR<ReferralCodeCreateWithoutUserInput, ReferralCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReferralCodeCreateOrConnectWithoutUserInput
    upsert?: ReferralCodeUpsertWithoutUserInput
    disconnect?: ReferralCodeWhereInput | boolean
    delete?: ReferralCodeWhereInput | boolean
    connect?: ReferralCodeWhereUniqueInput
    update?: XOR<XOR<ReferralCodeUpdateToOneWithWhereWithoutUserInput, ReferralCodeUpdateWithoutUserInput>, ReferralCodeUncheckedUpdateWithoutUserInput>
  }

  export type PointUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutUserInput | PointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutUserInput | PointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointUpdateManyWithWhereWithoutUserInput | PointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput> | EventCreateWithoutUserInput[] | EventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventCreateOrConnectWithoutUserInput | EventCreateOrConnectWithoutUserInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutUserInput | EventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventCreateManyUserInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutUserInput | EventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventUpdateManyWithWhereWithoutUserInput | EventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput> | TransactionCreateWithoutUserInput[] | TransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutUserInput | TransactionCreateOrConnectWithoutUserInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutUserInput | TransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TransactionCreateManyUserInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutUserInput | TransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutUserInput | TransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReferralCodeUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ReferralCodeCreateWithoutUserInput, ReferralCodeUncheckedCreateWithoutUserInput>
    connectOrCreate?: ReferralCodeCreateOrConnectWithoutUserInput
    upsert?: ReferralCodeUpsertWithoutUserInput
    disconnect?: ReferralCodeWhereInput | boolean
    delete?: ReferralCodeWhereInput | boolean
    connect?: ReferralCodeWhereUniqueInput
    update?: XOR<XOR<ReferralCodeUpdateToOneWithWhereWithoutUserInput, ReferralCodeUpdateWithoutUserInput>, ReferralCodeUncheckedUpdateWithoutUserInput>
  }

  export type PointUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput> | PointCreateWithoutUserInput[] | PointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PointCreateOrConnectWithoutUserInput | PointCreateOrConnectWithoutUserInput[]
    upsert?: PointUpsertWithWhereUniqueWithoutUserInput | PointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PointCreateManyUserInputEnvelope
    set?: PointWhereUniqueInput | PointWhereUniqueInput[]
    disconnect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    delete?: PointWhereUniqueInput | PointWhereUniqueInput[]
    connect?: PointWhereUniqueInput | PointWhereUniqueInput[]
    update?: PointUpdateWithWhereUniqueWithoutUserInput | PointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PointUpdateManyWithWhereWithoutUserInput | PointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PointScalarWhereInput | PointScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPointInput = {
    create?: XOR<UserCreateWithoutPointInput, UserUncheckedCreateWithoutPointInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPointNestedInput = {
    create?: XOR<UserCreateWithoutPointInput, UserUncheckedCreateWithoutPointInput>
    connectOrCreate?: UserCreateOrConnectWithoutPointInput
    upsert?: UserUpsertWithoutPointInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPointInput, UserUpdateWithoutPointInput>, UserUncheckedUpdateWithoutPointInput>
  }

  export type UserCreateNestedOneWithoutReferralCodeInput = {
    create?: XOR<UserCreateWithoutReferralCodeInput, UserUncheckedCreateWithoutReferralCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralCodeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReferralCodeNestedInput = {
    create?: XOR<UserCreateWithoutReferralCodeInput, UserUncheckedCreateWithoutReferralCodeInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferralCodeInput
    upsert?: UserUpsertWithoutReferralCodeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferralCodeInput, UserUpdateWithoutReferralCodeInput>, UserUncheckedUpdateWithoutReferralCodeInput>
  }

  export type EventCategoryCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EventCategoryCreateWithoutCategoryInput, EventCategoryUncheckedCreateWithoutCategoryInput> | EventCategoryCreateWithoutCategoryInput[] | EventCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventCategoryCreateOrConnectWithoutCategoryInput | EventCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: EventCategoryCreateManyCategoryInputEnvelope
    connect?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
  }

  export type EventCategoryUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<EventCategoryCreateWithoutCategoryInput, EventCategoryUncheckedCreateWithoutCategoryInput> | EventCategoryCreateWithoutCategoryInput[] | EventCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventCategoryCreateOrConnectWithoutCategoryInput | EventCategoryCreateOrConnectWithoutCategoryInput[]
    createMany?: EventCategoryCreateManyCategoryInputEnvelope
    connect?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
  }

  export type EnumCategoryRoleFieldUpdateOperationsInput = {
    set?: $Enums.CategoryRole
  }

  export type EventCategoryUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EventCategoryCreateWithoutCategoryInput, EventCategoryUncheckedCreateWithoutCategoryInput> | EventCategoryCreateWithoutCategoryInput[] | EventCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventCategoryCreateOrConnectWithoutCategoryInput | EventCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: EventCategoryUpsertWithWhereUniqueWithoutCategoryInput | EventCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EventCategoryCreateManyCategoryInputEnvelope
    set?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    disconnect?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    delete?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    connect?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    update?: EventCategoryUpdateWithWhereUniqueWithoutCategoryInput | EventCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EventCategoryUpdateManyWithWhereWithoutCategoryInput | EventCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EventCategoryScalarWhereInput | EventCategoryScalarWhereInput[]
  }

  export type EventCategoryUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<EventCategoryCreateWithoutCategoryInput, EventCategoryUncheckedCreateWithoutCategoryInput> | EventCategoryCreateWithoutCategoryInput[] | EventCategoryUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: EventCategoryCreateOrConnectWithoutCategoryInput | EventCategoryCreateOrConnectWithoutCategoryInput[]
    upsert?: EventCategoryUpsertWithWhereUniqueWithoutCategoryInput | EventCategoryUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: EventCategoryCreateManyCategoryInputEnvelope
    set?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    disconnect?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    delete?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    connect?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    update?: EventCategoryUpdateWithWhereUniqueWithoutCategoryInput | EventCategoryUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: EventCategoryUpdateManyWithWhereWithoutCategoryInput | EventCategoryUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: EventCategoryScalarWhereInput | EventCategoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEventInput = {
    create?: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventInput
    connect?: UserWhereUniqueInput
  }

  export type EventCategoryCreateNestedManyWithoutEventInput = {
    create?: XOR<EventCategoryCreateWithoutEventInput, EventCategoryUncheckedCreateWithoutEventInput> | EventCategoryCreateWithoutEventInput[] | EventCategoryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventCategoryCreateOrConnectWithoutEventInput | EventCategoryCreateOrConnectWithoutEventInput[]
    createMany?: EventCategoryCreateManyEventInputEnvelope
    connect?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
  }

  export type VoucherCreateNestedManyWithoutEventInput = {
    create?: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput> | VoucherCreateWithoutEventInput[] | VoucherUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutEventInput | VoucherCreateOrConnectWithoutEventInput[]
    createMany?: VoucherCreateManyEventInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type TransactionCreateNestedManyWithoutEventInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EventImageCreateNestedManyWithoutEventInput = {
    create?: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput> | EventImageCreateWithoutEventInput[] | EventImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutEventInput | EventImageCreateOrConnectWithoutEventInput[]
    createMany?: EventImageCreateManyEventInputEnvelope
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
  }

  export type DiscountCreateNestedManyWithoutEventInput = {
    create?: XOR<DiscountCreateWithoutEventInput, DiscountUncheckedCreateWithoutEventInput> | DiscountCreateWithoutEventInput[] | DiscountUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DiscountCreateOrConnectWithoutEventInput | DiscountCreateOrConnectWithoutEventInput[]
    createMany?: DiscountCreateManyEventInputEnvelope
    connect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EventCategoryUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventCategoryCreateWithoutEventInput, EventCategoryUncheckedCreateWithoutEventInput> | EventCategoryCreateWithoutEventInput[] | EventCategoryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventCategoryCreateOrConnectWithoutEventInput | EventCategoryCreateOrConnectWithoutEventInput[]
    createMany?: EventCategoryCreateManyEventInputEnvelope
    connect?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
  }

  export type VoucherUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput> | VoucherCreateWithoutEventInput[] | VoucherUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutEventInput | VoucherCreateOrConnectWithoutEventInput[]
    createMany?: VoucherCreateManyEventInputEnvelope
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EventImageUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput> | EventImageCreateWithoutEventInput[] | EventImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutEventInput | EventImageCreateOrConnectWithoutEventInput[]
    createMany?: EventImageCreateManyEventInputEnvelope
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
  }

  export type DiscountUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<DiscountCreateWithoutEventInput, DiscountUncheckedCreateWithoutEventInput> | DiscountCreateWithoutEventInput[] | DiscountUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DiscountCreateOrConnectWithoutEventInput | DiscountCreateOrConnectWithoutEventInput[]
    createMany?: DiscountCreateManyEventInputEnvelope
    connect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventInput
    upsert?: UserUpsertWithoutEventInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventInput, UserUpdateWithoutEventInput>, UserUncheckedUpdateWithoutEventInput>
  }

  export type EventCategoryUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventCategoryCreateWithoutEventInput, EventCategoryUncheckedCreateWithoutEventInput> | EventCategoryCreateWithoutEventInput[] | EventCategoryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventCategoryCreateOrConnectWithoutEventInput | EventCategoryCreateOrConnectWithoutEventInput[]
    upsert?: EventCategoryUpsertWithWhereUniqueWithoutEventInput | EventCategoryUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventCategoryCreateManyEventInputEnvelope
    set?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    disconnect?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    delete?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    connect?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    update?: EventCategoryUpdateWithWhereUniqueWithoutEventInput | EventCategoryUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventCategoryUpdateManyWithWhereWithoutEventInput | EventCategoryUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventCategoryScalarWhereInput | EventCategoryScalarWhereInput[]
  }

  export type VoucherUpdateManyWithoutEventNestedInput = {
    create?: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput> | VoucherCreateWithoutEventInput[] | VoucherUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutEventInput | VoucherCreateOrConnectWithoutEventInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutEventInput | VoucherUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VoucherCreateManyEventInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutEventInput | VoucherUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutEventInput | VoucherUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type TransactionUpdateManyWithoutEventNestedInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutEventInput | TransactionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutEventInput | TransactionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutEventInput | TransactionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type EventImageUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput> | EventImageCreateWithoutEventInput[] | EventImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutEventInput | EventImageCreateOrConnectWithoutEventInput[]
    upsert?: EventImageUpsertWithWhereUniqueWithoutEventInput | EventImageUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventImageCreateManyEventInputEnvelope
    set?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    disconnect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    delete?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    update?: EventImageUpdateWithWhereUniqueWithoutEventInput | EventImageUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventImageUpdateManyWithWhereWithoutEventInput | EventImageUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
  }

  export type DiscountUpdateManyWithoutEventNestedInput = {
    create?: XOR<DiscountCreateWithoutEventInput, DiscountUncheckedCreateWithoutEventInput> | DiscountCreateWithoutEventInput[] | DiscountUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DiscountCreateOrConnectWithoutEventInput | DiscountCreateOrConnectWithoutEventInput[]
    upsert?: DiscountUpsertWithWhereUniqueWithoutEventInput | DiscountUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: DiscountCreateManyEventInputEnvelope
    set?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    disconnect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    delete?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    connect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    update?: DiscountUpdateWithWhereUniqueWithoutEventInput | DiscountUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: DiscountUpdateManyWithWhereWithoutEventInput | DiscountUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: DiscountScalarWhereInput | DiscountScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type EventCategoryUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventCategoryCreateWithoutEventInput, EventCategoryUncheckedCreateWithoutEventInput> | EventCategoryCreateWithoutEventInput[] | EventCategoryUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventCategoryCreateOrConnectWithoutEventInput | EventCategoryCreateOrConnectWithoutEventInput[]
    upsert?: EventCategoryUpsertWithWhereUniqueWithoutEventInput | EventCategoryUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventCategoryCreateManyEventInputEnvelope
    set?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    disconnect?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    delete?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    connect?: EventCategoryWhereUniqueInput | EventCategoryWhereUniqueInput[]
    update?: EventCategoryUpdateWithWhereUniqueWithoutEventInput | EventCategoryUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventCategoryUpdateManyWithWhereWithoutEventInput | EventCategoryUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventCategoryScalarWhereInput | EventCategoryScalarWhereInput[]
  }

  export type VoucherUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput> | VoucherCreateWithoutEventInput[] | VoucherUncheckedCreateWithoutEventInput[]
    connectOrCreate?: VoucherCreateOrConnectWithoutEventInput | VoucherCreateOrConnectWithoutEventInput[]
    upsert?: VoucherUpsertWithWhereUniqueWithoutEventInput | VoucherUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: VoucherCreateManyEventInputEnvelope
    set?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    disconnect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    delete?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    connect?: VoucherWhereUniqueInput | VoucherWhereUniqueInput[]
    update?: VoucherUpdateWithWhereUniqueWithoutEventInput | VoucherUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: VoucherUpdateManyWithWhereWithoutEventInput | VoucherUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput> | TransactionCreateWithoutEventInput[] | TransactionUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutEventInput | TransactionCreateOrConnectWithoutEventInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutEventInput | TransactionUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TransactionCreateManyEventInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutEventInput | TransactionUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutEventInput | TransactionUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput> | ReviewCreateWithoutEventInput[] | ReviewUncheckedCreateWithoutEventInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutEventInput | ReviewCreateOrConnectWithoutEventInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutEventInput | ReviewUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: ReviewCreateManyEventInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutEventInput | ReviewUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutEventInput | ReviewUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type EventImageUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput> | EventImageCreateWithoutEventInput[] | EventImageUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutEventInput | EventImageCreateOrConnectWithoutEventInput[]
    upsert?: EventImageUpsertWithWhereUniqueWithoutEventInput | EventImageUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventImageCreateManyEventInputEnvelope
    set?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    disconnect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    delete?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    update?: EventImageUpdateWithWhereUniqueWithoutEventInput | EventImageUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventImageUpdateManyWithWhereWithoutEventInput | EventImageUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
  }

  export type DiscountUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<DiscountCreateWithoutEventInput, DiscountUncheckedCreateWithoutEventInput> | DiscountCreateWithoutEventInput[] | DiscountUncheckedCreateWithoutEventInput[]
    connectOrCreate?: DiscountCreateOrConnectWithoutEventInput | DiscountCreateOrConnectWithoutEventInput[]
    upsert?: DiscountUpsertWithWhereUniqueWithoutEventInput | DiscountUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: DiscountCreateManyEventInputEnvelope
    set?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    disconnect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    delete?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    connect?: DiscountWhereUniqueInput | DiscountWhereUniqueInput[]
    update?: DiscountUpdateWithWhereUniqueWithoutEventInput | DiscountUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: DiscountUpdateManyWithWhereWithoutEventInput | DiscountUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: DiscountScalarWhereInput | DiscountScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput> | TicketCreateWithoutEventInput[] | TicketUncheckedCreateWithoutEventInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutEventInput | TicketCreateOrConnectWithoutEventInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutEventInput | TicketUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: TicketCreateManyEventInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutEventInput | TicketUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutEventInput | TicketUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutEventCategoryInput = {
    create?: XOR<CategoryCreateWithoutEventCategoryInput, CategoryUncheckedCreateWithoutEventCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutEventCategoryInput
    connect?: CategoryWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutEventCategoryInput = {
    create?: XOR<EventCreateWithoutEventCategoryInput, EventUncheckedCreateWithoutEventCategoryInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventCategoryInput
    connect?: EventWhereUniqueInput
  }

  export type CategoryUpdateOneRequiredWithoutEventCategoryNestedInput = {
    create?: XOR<CategoryCreateWithoutEventCategoryInput, CategoryUncheckedCreateWithoutEventCategoryInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutEventCategoryInput
    upsert?: CategoryUpsertWithoutEventCategoryInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutEventCategoryInput, CategoryUpdateWithoutEventCategoryInput>, CategoryUncheckedUpdateWithoutEventCategoryInput>
  }

  export type EventUpdateOneRequiredWithoutEventCategoryNestedInput = {
    create?: XOR<EventCreateWithoutEventCategoryInput, EventUncheckedCreateWithoutEventCategoryInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventCategoryInput
    upsert?: EventUpsertWithoutEventCategoryInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventCategoryInput, EventUpdateWithoutEventCategoryInput>, EventUncheckedUpdateWithoutEventCategoryInput>
  }

  export type EventCreateNestedOneWithoutEventImageInput = {
    create?: XOR<EventCreateWithoutEventImageInput, EventUncheckedCreateWithoutEventImageInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventImageInput
    connect?: EventWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutImagePreviewInput = {
    create?: XOR<ImageCreateWithoutImagePreviewInput, ImageUncheckedCreateWithoutImagePreviewInput>
    connectOrCreate?: ImageCreateOrConnectWithoutImagePreviewInput
    connect?: ImageWhereUniqueInput
  }

  export type ImageCreateNestedOneWithoutImageContentInput = {
    create?: XOR<ImageCreateWithoutImageContentInput, ImageUncheckedCreateWithoutImageContentInput>
    connectOrCreate?: ImageCreateOrConnectWithoutImageContentInput
    connect?: ImageWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutEventImageNestedInput = {
    create?: XOR<EventCreateWithoutEventImageInput, EventUncheckedCreateWithoutEventImageInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventImageInput
    upsert?: EventUpsertWithoutEventImageInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventImageInput, EventUpdateWithoutEventImageInput>, EventUncheckedUpdateWithoutEventImageInput>
  }

  export type ImageUpdateOneWithoutImagePreviewNestedInput = {
    create?: XOR<ImageCreateWithoutImagePreviewInput, ImageUncheckedCreateWithoutImagePreviewInput>
    connectOrCreate?: ImageCreateOrConnectWithoutImagePreviewInput
    upsert?: ImageUpsertWithoutImagePreviewInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutImagePreviewInput, ImageUpdateWithoutImagePreviewInput>, ImageUncheckedUpdateWithoutImagePreviewInput>
  }

  export type ImageUpdateOneWithoutImageContentNestedInput = {
    create?: XOR<ImageCreateWithoutImageContentInput, ImageUncheckedCreateWithoutImageContentInput>
    connectOrCreate?: ImageCreateOrConnectWithoutImageContentInput
    upsert?: ImageUpsertWithoutImageContentInput
    disconnect?: ImageWhereInput | boolean
    delete?: ImageWhereInput | boolean
    connect?: ImageWhereUniqueInput
    update?: XOR<XOR<ImageUpdateToOneWithWhereWithoutImageContentInput, ImageUpdateWithoutImageContentInput>, ImageUncheckedUpdateWithoutImageContentInput>
  }

  export type EventImageCreateNestedManyWithoutImagePreviewInput = {
    create?: XOR<EventImageCreateWithoutImagePreviewInput, EventImageUncheckedCreateWithoutImagePreviewInput> | EventImageCreateWithoutImagePreviewInput[] | EventImageUncheckedCreateWithoutImagePreviewInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutImagePreviewInput | EventImageCreateOrConnectWithoutImagePreviewInput[]
    createMany?: EventImageCreateManyImagePreviewInputEnvelope
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
  }

  export type EventImageCreateNestedManyWithoutImageContentInput = {
    create?: XOR<EventImageCreateWithoutImageContentInput, EventImageUncheckedCreateWithoutImageContentInput> | EventImageCreateWithoutImageContentInput[] | EventImageUncheckedCreateWithoutImageContentInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutImageContentInput | EventImageCreateOrConnectWithoutImageContentInput[]
    createMany?: EventImageCreateManyImageContentInputEnvelope
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
  }

  export type EventImageUncheckedCreateNestedManyWithoutImagePreviewInput = {
    create?: XOR<EventImageCreateWithoutImagePreviewInput, EventImageUncheckedCreateWithoutImagePreviewInput> | EventImageCreateWithoutImagePreviewInput[] | EventImageUncheckedCreateWithoutImagePreviewInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutImagePreviewInput | EventImageCreateOrConnectWithoutImagePreviewInput[]
    createMany?: EventImageCreateManyImagePreviewInputEnvelope
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
  }

  export type EventImageUncheckedCreateNestedManyWithoutImageContentInput = {
    create?: XOR<EventImageCreateWithoutImageContentInput, EventImageUncheckedCreateWithoutImageContentInput> | EventImageCreateWithoutImageContentInput[] | EventImageUncheckedCreateWithoutImageContentInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutImageContentInput | EventImageCreateOrConnectWithoutImageContentInput[]
    createMany?: EventImageCreateManyImageContentInputEnvelope
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
  }

  export type EventImageUpdateManyWithoutImagePreviewNestedInput = {
    create?: XOR<EventImageCreateWithoutImagePreviewInput, EventImageUncheckedCreateWithoutImagePreviewInput> | EventImageCreateWithoutImagePreviewInput[] | EventImageUncheckedCreateWithoutImagePreviewInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutImagePreviewInput | EventImageCreateOrConnectWithoutImagePreviewInput[]
    upsert?: EventImageUpsertWithWhereUniqueWithoutImagePreviewInput | EventImageUpsertWithWhereUniqueWithoutImagePreviewInput[]
    createMany?: EventImageCreateManyImagePreviewInputEnvelope
    set?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    disconnect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    delete?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    update?: EventImageUpdateWithWhereUniqueWithoutImagePreviewInput | EventImageUpdateWithWhereUniqueWithoutImagePreviewInput[]
    updateMany?: EventImageUpdateManyWithWhereWithoutImagePreviewInput | EventImageUpdateManyWithWhereWithoutImagePreviewInput[]
    deleteMany?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
  }

  export type EventImageUpdateManyWithoutImageContentNestedInput = {
    create?: XOR<EventImageCreateWithoutImageContentInput, EventImageUncheckedCreateWithoutImageContentInput> | EventImageCreateWithoutImageContentInput[] | EventImageUncheckedCreateWithoutImageContentInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutImageContentInput | EventImageCreateOrConnectWithoutImageContentInput[]
    upsert?: EventImageUpsertWithWhereUniqueWithoutImageContentInput | EventImageUpsertWithWhereUniqueWithoutImageContentInput[]
    createMany?: EventImageCreateManyImageContentInputEnvelope
    set?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    disconnect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    delete?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    update?: EventImageUpdateWithWhereUniqueWithoutImageContentInput | EventImageUpdateWithWhereUniqueWithoutImageContentInput[]
    updateMany?: EventImageUpdateManyWithWhereWithoutImageContentInput | EventImageUpdateManyWithWhereWithoutImageContentInput[]
    deleteMany?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
  }

  export type EventImageUncheckedUpdateManyWithoutImagePreviewNestedInput = {
    create?: XOR<EventImageCreateWithoutImagePreviewInput, EventImageUncheckedCreateWithoutImagePreviewInput> | EventImageCreateWithoutImagePreviewInput[] | EventImageUncheckedCreateWithoutImagePreviewInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutImagePreviewInput | EventImageCreateOrConnectWithoutImagePreviewInput[]
    upsert?: EventImageUpsertWithWhereUniqueWithoutImagePreviewInput | EventImageUpsertWithWhereUniqueWithoutImagePreviewInput[]
    createMany?: EventImageCreateManyImagePreviewInputEnvelope
    set?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    disconnect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    delete?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    update?: EventImageUpdateWithWhereUniqueWithoutImagePreviewInput | EventImageUpdateWithWhereUniqueWithoutImagePreviewInput[]
    updateMany?: EventImageUpdateManyWithWhereWithoutImagePreviewInput | EventImageUpdateManyWithWhereWithoutImagePreviewInput[]
    deleteMany?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
  }

  export type EventImageUncheckedUpdateManyWithoutImageContentNestedInput = {
    create?: XOR<EventImageCreateWithoutImageContentInput, EventImageUncheckedCreateWithoutImageContentInput> | EventImageCreateWithoutImageContentInput[] | EventImageUncheckedCreateWithoutImageContentInput[]
    connectOrCreate?: EventImageCreateOrConnectWithoutImageContentInput | EventImageCreateOrConnectWithoutImageContentInput[]
    upsert?: EventImageUpsertWithWhereUniqueWithoutImageContentInput | EventImageUpsertWithWhereUniqueWithoutImageContentInput[]
    createMany?: EventImageCreateManyImageContentInputEnvelope
    set?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    disconnect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    delete?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    connect?: EventImageWhereUniqueInput | EventImageWhereUniqueInput[]
    update?: EventImageUpdateWithWhereUniqueWithoutImageContentInput | EventImageUpdateWithWhereUniqueWithoutImageContentInput[]
    updateMany?: EventImageUpdateManyWithWhereWithoutImageContentInput | EventImageUpdateManyWithWhereWithoutImageContentInput[]
    deleteMany?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutReviewInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutReviewInput = {
    create?: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewInput
    connect?: EventWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    upsert?: UserUpsertWithoutReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewInput, UserUpdateWithoutReviewInput>, UserUncheckedUpdateWithoutReviewInput>
  }

  export type EventUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    connectOrCreate?: EventCreateOrConnectWithoutReviewInput
    upsert?: EventUpsertWithoutReviewInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutReviewInput, EventUpdateWithoutReviewInput>, EventUncheckedUpdateWithoutReviewInput>
  }

  export type EventCreateNestedOneWithoutTicketInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput
    connect?: EventWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutTicketInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutTicketInput = {
    create?: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketInput
    connect?: UserWhereUniqueInput
  }

  export type TransactionUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumTicketRoleFieldUpdateOperationsInput = {
    set?: $Enums.TicketRole
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EventUpdateOneRequiredWithoutTicketNestedInput = {
    create?: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    connectOrCreate?: EventCreateOrConnectWithoutTicketInput
    upsert?: EventUpsertWithoutTicketInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTicketInput, EventUpdateWithoutTicketInput>, EventUncheckedUpdateWithoutTicketInput>
  }

  export type TransactionUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTicketInput | TransactionUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTicketInput | TransactionUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTicketInput | TransactionUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserUpdateOneWithoutTicketNestedInput = {
    create?: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketInput
    upsert?: UserUpsertWithoutTicketInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketInput, UserUpdateWithoutTicketInput>, UserUncheckedUpdateWithoutTicketInput>
  }

  export type TransactionUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput> | TransactionCreateWithoutTicketInput[] | TransactionUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutTicketInput | TransactionCreateOrConnectWithoutTicketInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutTicketInput | TransactionUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TransactionCreateManyTicketInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutTicketInput | TransactionUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutTicketInput | TransactionUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutVoucherInput = {
    create?: XOR<EventCreateWithoutVoucherInput, EventUncheckedCreateWithoutVoucherInput>
    connectOrCreate?: EventCreateOrConnectWithoutVoucherInput
    connect?: EventWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutVoucherInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutVoucherInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EnumStatusRoleFieldUpdateOperationsInput = {
    set?: $Enums.StatusRole
  }

  export type EventUpdateOneRequiredWithoutVoucherNestedInput = {
    create?: XOR<EventCreateWithoutVoucherInput, EventUncheckedCreateWithoutVoucherInput>
    connectOrCreate?: EventCreateOrConnectWithoutVoucherInput
    upsert?: EventUpsertWithoutVoucherInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutVoucherInput, EventUpdateWithoutVoucherInput>, EventUncheckedUpdateWithoutVoucherInput>
  }

  export type TransactionUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVoucherInput | TransactionUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVoucherInput | TransactionUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVoucherInput | TransactionUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutVoucherNestedInput = {
    create?: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput> | TransactionCreateWithoutVoucherInput[] | TransactionUncheckedCreateWithoutVoucherInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutVoucherInput | TransactionCreateOrConnectWithoutVoucherInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutVoucherInput | TransactionUpsertWithWhereUniqueWithoutVoucherInput[]
    createMany?: TransactionCreateManyVoucherInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutVoucherInput | TransactionUpdateWithWhereUniqueWithoutVoucherInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutVoucherInput | TransactionUpdateManyWithWhereWithoutVoucherInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutDiscountInput = {
    create?: XOR<EventCreateWithoutDiscountInput, EventUncheckedCreateWithoutDiscountInput>
    connectOrCreate?: EventCreateOrConnectWithoutDiscountInput
    connect?: EventWhereUniqueInput
  }

  export type TransactionCreateNestedManyWithoutDiscountInput = {
    create?: XOR<TransactionCreateWithoutDiscountInput, TransactionUncheckedCreateWithoutDiscountInput> | TransactionCreateWithoutDiscountInput[] | TransactionUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDiscountInput | TransactionCreateOrConnectWithoutDiscountInput[]
    createMany?: TransactionCreateManyDiscountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type TransactionUncheckedCreateNestedManyWithoutDiscountInput = {
    create?: XOR<TransactionCreateWithoutDiscountInput, TransactionUncheckedCreateWithoutDiscountInput> | TransactionCreateWithoutDiscountInput[] | TransactionUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDiscountInput | TransactionCreateOrConnectWithoutDiscountInput[]
    createMany?: TransactionCreateManyDiscountInputEnvelope
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
  }

  export type EventUpdateOneRequiredWithoutDiscountNestedInput = {
    create?: XOR<EventCreateWithoutDiscountInput, EventUncheckedCreateWithoutDiscountInput>
    connectOrCreate?: EventCreateOrConnectWithoutDiscountInput
    upsert?: EventUpsertWithoutDiscountInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutDiscountInput, EventUpdateWithoutDiscountInput>, EventUncheckedUpdateWithoutDiscountInput>
  }

  export type TransactionUpdateManyWithoutDiscountNestedInput = {
    create?: XOR<TransactionCreateWithoutDiscountInput, TransactionUncheckedCreateWithoutDiscountInput> | TransactionCreateWithoutDiscountInput[] | TransactionUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDiscountInput | TransactionCreateOrConnectWithoutDiscountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutDiscountInput | TransactionUpsertWithWhereUniqueWithoutDiscountInput[]
    createMany?: TransactionCreateManyDiscountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutDiscountInput | TransactionUpdateWithWhereUniqueWithoutDiscountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutDiscountInput | TransactionUpdateManyWithWhereWithoutDiscountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type TransactionUncheckedUpdateManyWithoutDiscountNestedInput = {
    create?: XOR<TransactionCreateWithoutDiscountInput, TransactionUncheckedCreateWithoutDiscountInput> | TransactionCreateWithoutDiscountInput[] | TransactionUncheckedCreateWithoutDiscountInput[]
    connectOrCreate?: TransactionCreateOrConnectWithoutDiscountInput | TransactionCreateOrConnectWithoutDiscountInput[]
    upsert?: TransactionUpsertWithWhereUniqueWithoutDiscountInput | TransactionUpsertWithWhereUniqueWithoutDiscountInput[]
    createMany?: TransactionCreateManyDiscountInputEnvelope
    set?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    disconnect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    delete?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    connect?: TransactionWhereUniqueInput | TransactionWhereUniqueInput[]
    update?: TransactionUpdateWithWhereUniqueWithoutDiscountInput | TransactionUpdateWithWhereUniqueWithoutDiscountInput[]
    updateMany?: TransactionUpdateManyWithWhereWithoutDiscountInput | TransactionUpdateManyWithWhereWithoutDiscountInput[]
    deleteMany?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTransactionInput = {
    create?: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionInput
    connect?: UserWhereUniqueInput
  }

  export type EventCreateNestedOneWithoutTransactionInput = {
    create?: XOR<EventCreateWithoutTransactionInput, EventUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: EventCreateOrConnectWithoutTransactionInput
    connect?: EventWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutTransactionInput = {
    create?: XOR<TicketCreateWithoutTransactionInput, TicketUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTransactionInput
    connect?: TicketWhereUniqueInput
  }

  export type VoucherCreateNestedOneWithoutTransactionInput = {
    create?: XOR<VoucherCreateWithoutTransactionInput, VoucherUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutTransactionInput
    connect?: VoucherWhereUniqueInput
  }

  export type DiscountCreateNestedOneWithoutTransactionInput = {
    create?: XOR<DiscountCreateWithoutTransactionInput, DiscountUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: DiscountCreateOrConnectWithoutTransactionInput
    connect?: DiscountWhereUniqueInput
  }

  export type EnumStatusPaidFieldUpdateOperationsInput = {
    set?: $Enums.StatusPaid
  }

  export type UserUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionInput
    upsert?: UserUpsertWithoutTransactionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionInput, UserUpdateWithoutTransactionInput>, UserUncheckedUpdateWithoutTransactionInput>
  }

  export type EventUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<EventCreateWithoutTransactionInput, EventUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: EventCreateOrConnectWithoutTransactionInput
    upsert?: EventUpsertWithoutTransactionInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutTransactionInput, EventUpdateWithoutTransactionInput>, EventUncheckedUpdateWithoutTransactionInput>
  }

  export type TicketUpdateOneRequiredWithoutTransactionNestedInput = {
    create?: XOR<TicketCreateWithoutTransactionInput, TicketUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTransactionInput
    upsert?: TicketUpsertWithoutTransactionInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutTransactionInput, TicketUpdateWithoutTransactionInput>, TicketUncheckedUpdateWithoutTransactionInput>
  }

  export type VoucherUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<VoucherCreateWithoutTransactionInput, VoucherUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: VoucherCreateOrConnectWithoutTransactionInput
    upsert?: VoucherUpsertWithoutTransactionInput
    disconnect?: VoucherWhereInput | boolean
    delete?: VoucherWhereInput | boolean
    connect?: VoucherWhereUniqueInput
    update?: XOR<XOR<VoucherUpdateToOneWithWhereWithoutTransactionInput, VoucherUpdateWithoutTransactionInput>, VoucherUncheckedUpdateWithoutTransactionInput>
  }

  export type DiscountUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<DiscountCreateWithoutTransactionInput, DiscountUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: DiscountCreateOrConnectWithoutTransactionInput
    upsert?: DiscountUpsertWithoutTransactionInput
    disconnect?: DiscountWhereInput | boolean
    delete?: DiscountWhereInput | boolean
    connect?: DiscountWhereUniqueInput
    update?: XOR<XOR<DiscountUpdateToOneWithWhereWithoutTransactionInput, DiscountUpdateWithoutTransactionInput>, DiscountUncheckedUpdateWithoutTransactionInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumCategoryRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryRole | EnumCategoryRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryRole[] | ListEnumCategoryRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryRole[] | ListEnumCategoryRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryRoleFilter<$PrismaModel> | $Enums.CategoryRole
  }

  export type NestedEnumCategoryRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CategoryRole | EnumCategoryRoleFieldRefInput<$PrismaModel>
    in?: $Enums.CategoryRole[] | ListEnumCategoryRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.CategoryRole[] | ListEnumCategoryRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryRoleWithAggregatesFilter<$PrismaModel> | $Enums.CategoryRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryRoleFilter<$PrismaModel>
    _max?: NestedEnumCategoryRoleFilter<$PrismaModel>
  }

  export type NestedEnumTicketRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketRole | EnumTicketRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TicketRole[] | ListEnumTicketRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketRole[] | ListEnumTicketRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketRoleFilter<$PrismaModel> | $Enums.TicketRole
  }

  export type NestedEnumTicketRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketRole | EnumTicketRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TicketRole[] | ListEnumTicketRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketRole[] | ListEnumTicketRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketRoleWithAggregatesFilter<$PrismaModel> | $Enums.TicketRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketRoleFilter<$PrismaModel>
    _max?: NestedEnumTicketRoleFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumStatusRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRole | EnumStatusRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRole[] | ListEnumStatusRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRole[] | ListEnumStatusRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRoleFilter<$PrismaModel> | $Enums.StatusRole
  }

  export type NestedEnumStatusRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusRole | EnumStatusRoleFieldRefInput<$PrismaModel>
    in?: $Enums.StatusRole[] | ListEnumStatusRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusRole[] | ListEnumStatusRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusRoleWithAggregatesFilter<$PrismaModel> | $Enums.StatusRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusRoleFilter<$PrismaModel>
    _max?: NestedEnumStatusRoleFilter<$PrismaModel>
  }

  export type NestedEnumStatusPaidFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPaid | EnumStatusPaidFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPaid[] | ListEnumStatusPaidFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPaid[] | ListEnumStatusPaidFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPaidFilter<$PrismaModel> | $Enums.StatusPaid
  }

  export type NestedEnumStatusPaidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusPaid | EnumStatusPaidFieldRefInput<$PrismaModel>
    in?: $Enums.StatusPaid[] | ListEnumStatusPaidFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusPaid[] | ListEnumStatusPaidFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusPaidWithAggregatesFilter<$PrismaModel> | $Enums.StatusPaid
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusPaidFilter<$PrismaModel>
    _max?: NestedEnumStatusPaidFilter<$PrismaModel>
  }

  export type EventCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    EventCategory?: EventCategoryCreateNestedManyWithoutEventInput
    Voucher?: VoucherCreateNestedManyWithoutEventInput
    Transaction?: TransactionCreateNestedManyWithoutEventInput
    Review?: ReviewCreateNestedManyWithoutEventInput
    EventImage?: EventImageCreateNestedManyWithoutEventInput
    Discount?: DiscountCreateNestedManyWithoutEventInput
    Ticket?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutEventInput
    Voucher?: VoucherUncheckedCreateNestedManyWithoutEventInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutEventInput
    Review?: ReviewUncheckedCreateNestedManyWithoutEventInput
    EventImage?: EventImageUncheckedCreateNestedManyWithoutEventInput
    Discount?: DiscountUncheckedCreateNestedManyWithoutEventInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutUserInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventCreateManyUserInputEnvelope = {
    data: EventCreateManyUserInput | EventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutUserInput = {
    id?: string
    ticketType?: $Enums.TicketRole
    price: number
    quantity: string
    Event: EventCreateNestedOneWithoutTicketInput
    Transaction?: TransactionCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    ticketType?: $Enums.TicketRole
    price: number
    quantity: string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutUserInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketCreateManyUserInputEnvelope = {
    data: TicketCreateManyUserInput | TicketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutUserInput = {
    id?: string
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
    Event: EventCreateNestedOneWithoutTransactionInput
    Ticket: TicketCreateNestedOneWithoutTransactionInput
    Voucher?: VoucherCreateNestedOneWithoutTransactionInput
    Discount?: DiscountCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    ticketId: string
    voucherId?: string | null
    discountId?: string | null
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutUserInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionCreateManyUserInputEnvelope = {
    data: TransactionCreateManyUserInput | TransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    imageReview: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    Event: EventCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    eventId: string
    imageReview: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReferralCodeCreateWithoutUserInput = {
    id?: string
    code: string
    createdAt?: Date | string
  }

  export type ReferralCodeUncheckedCreateWithoutUserInput = {
    id?: string
    code: string
    createdAt?: Date | string
  }

  export type ReferralCodeCreateOrConnectWithoutUserInput = {
    where: ReferralCodeWhereUniqueInput
    create: XOR<ReferralCodeCreateWithoutUserInput, ReferralCodeUncheckedCreateWithoutUserInput>
  }

  export type PointCreateWithoutUserInput = {
    id?: string
    amount: number
    expiredAt: Date | string
    createAt?: Date | string
  }

  export type PointUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    expiredAt: Date | string
    createAt?: Date | string
  }

  export type PointCreateOrConnectWithoutUserInput = {
    where: PointWhereUniqueInput
    create: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput>
  }

  export type PointCreateManyUserInputEnvelope = {
    data: PointCreateManyUserInput | PointCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
    create: XOR<EventCreateWithoutUserInput, EventUncheckedCreateWithoutUserInput>
  }

  export type EventUpdateWithWhereUniqueWithoutUserInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutUserInput, EventUncheckedUpdateWithoutUserInput>
  }

  export type EventUpdateManyWithWhereWithoutUserInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutUserInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    userId?: StringFilter<"Event"> | string
    title?: StringFilter<"Event"> | string
    description?: StringFilter<"Event"> | string
    location?: StringFilter<"Event"> | string
    startDate?: DateTimeFilter<"Event"> | Date | string
    endDate?: DateTimeFilter<"Event"> | Date | string
    createdAt?: DateTimeFilter<"Event"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
  }

  export type TicketUpdateManyWithWhereWithoutUserInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    eventId?: StringFilter<"Ticket"> | string
    ticketType?: EnumTicketRoleFilter<"Ticket"> | $Enums.TicketRole
    price?: FloatFilter<"Ticket"> | number
    quantity?: StringFilter<"Ticket"> | string
    userId?: StringNullableFilter<"Ticket"> | string | null
  }

  export type TransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
    create: XOR<TransactionCreateWithoutUserInput, TransactionUncheckedCreateWithoutUserInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutUserInput, TransactionUncheckedUpdateWithoutUserInput>
  }

  export type TransactionUpdateManyWithWhereWithoutUserInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type TransactionScalarWhereInput = {
    AND?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    OR?: TransactionScalarWhereInput[]
    NOT?: TransactionScalarWhereInput | TransactionScalarWhereInput[]
    id?: StringFilter<"Transaction"> | string
    userId?: StringFilter<"Transaction"> | string
    eventId?: StringFilter<"Transaction"> | string
    ticketId?: StringFilter<"Transaction"> | string
    voucherId?: StringNullableFilter<"Transaction"> | string | null
    discountId?: StringNullableFilter<"Transaction"> | string | null
    statusPaid?: EnumStatusPaidFilter<"Transaction"> | $Enums.StatusPaid
    totalPrice?: FloatFilter<"Transaction"> | number
    totalTicket?: IntFilter<"Transaction"> | number
    createdAt?: DateTimeFilter<"Transaction"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    eventId?: StringFilter<"Review"> | string
    userId?: StringFilter<"Review"> | string
    imageReview?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReferralCodeUpsertWithoutUserInput = {
    update: XOR<ReferralCodeUpdateWithoutUserInput, ReferralCodeUncheckedUpdateWithoutUserInput>
    create: XOR<ReferralCodeCreateWithoutUserInput, ReferralCodeUncheckedCreateWithoutUserInput>
    where?: ReferralCodeWhereInput
  }

  export type ReferralCodeUpdateToOneWithWhereWithoutUserInput = {
    where?: ReferralCodeWhereInput
    data: XOR<ReferralCodeUpdateWithoutUserInput, ReferralCodeUncheckedUpdateWithoutUserInput>
  }

  export type ReferralCodeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralCodeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUpsertWithWhereUniqueWithoutUserInput = {
    where: PointWhereUniqueInput
    update: XOR<PointUpdateWithoutUserInput, PointUncheckedUpdateWithoutUserInput>
    create: XOR<PointCreateWithoutUserInput, PointUncheckedCreateWithoutUserInput>
  }

  export type PointUpdateWithWhereUniqueWithoutUserInput = {
    where: PointWhereUniqueInput
    data: XOR<PointUpdateWithoutUserInput, PointUncheckedUpdateWithoutUserInput>
  }

  export type PointUpdateManyWithWhereWithoutUserInput = {
    where: PointScalarWhereInput
    data: XOR<PointUpdateManyMutationInput, PointUncheckedUpdateManyWithoutUserInput>
  }

  export type PointScalarWhereInput = {
    AND?: PointScalarWhereInput | PointScalarWhereInput[]
    OR?: PointScalarWhereInput[]
    NOT?: PointScalarWhereInput | PointScalarWhereInput[]
    id?: StringFilter<"Point"> | string
    amount?: IntFilter<"Point"> | number
    userId?: StringFilter<"Point"> | string
    expiredAt?: DateTimeFilter<"Point"> | Date | string
    createAt?: DateTimeFilter<"Point"> | Date | string
  }

  export type UserCreateWithoutPointInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    Event?: EventCreateNestedManyWithoutUserInput
    Ticket?: TicketCreateNestedManyWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
    ReferralCode?: ReferralCodeCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPointInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutUserInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    ReferralCode?: ReferralCodeUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPointInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPointInput, UserUncheckedCreateWithoutPointInput>
  }

  export type UserUpsertWithoutPointInput = {
    update: XOR<UserUpdateWithoutPointInput, UserUncheckedUpdateWithoutPointInput>
    create: XOR<UserCreateWithoutPointInput, UserUncheckedCreateWithoutPointInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPointInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPointInput, UserUncheckedUpdateWithoutPointInput>
  }

  export type UserUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutUserNestedInput
    Ticket?: TicketUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
    ReferralCode?: ReferralCodeUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPointInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutUserNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    ReferralCode?: ReferralCodeUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutReferralCodeInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    Event?: EventCreateNestedManyWithoutUserInput
    Ticket?: TicketCreateNestedManyWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
    Point?: PointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferralCodeInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutUserInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    Point?: PointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferralCodeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferralCodeInput, UserUncheckedCreateWithoutReferralCodeInput>
  }

  export type UserUpsertWithoutReferralCodeInput = {
    update: XOR<UserUpdateWithoutReferralCodeInput, UserUncheckedUpdateWithoutReferralCodeInput>
    create: XOR<UserCreateWithoutReferralCodeInput, UserUncheckedCreateWithoutReferralCodeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferralCodeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferralCodeInput, UserUncheckedUpdateWithoutReferralCodeInput>
  }

  export type UserUpdateWithoutReferralCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutUserNestedInput
    Ticket?: TicketUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
    Point?: PointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferralCodeInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutUserNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    Point?: PointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventCategoryCreateWithoutCategoryInput = {
    id?: string
    createdAt?: Date | string
    Event: EventCreateNestedOneWithoutEventCategoryInput
  }

  export type EventCategoryUncheckedCreateWithoutCategoryInput = {
    id?: string
    eventId: string
    createdAt?: Date | string
  }

  export type EventCategoryCreateOrConnectWithoutCategoryInput = {
    where: EventCategoryWhereUniqueInput
    create: XOR<EventCategoryCreateWithoutCategoryInput, EventCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type EventCategoryCreateManyCategoryInputEnvelope = {
    data: EventCategoryCreateManyCategoryInput | EventCategoryCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type EventCategoryUpsertWithWhereUniqueWithoutCategoryInput = {
    where: EventCategoryWhereUniqueInput
    update: XOR<EventCategoryUpdateWithoutCategoryInput, EventCategoryUncheckedUpdateWithoutCategoryInput>
    create: XOR<EventCategoryCreateWithoutCategoryInput, EventCategoryUncheckedCreateWithoutCategoryInput>
  }

  export type EventCategoryUpdateWithWhereUniqueWithoutCategoryInput = {
    where: EventCategoryWhereUniqueInput
    data: XOR<EventCategoryUpdateWithoutCategoryInput, EventCategoryUncheckedUpdateWithoutCategoryInput>
  }

  export type EventCategoryUpdateManyWithWhereWithoutCategoryInput = {
    where: EventCategoryScalarWhereInput
    data: XOR<EventCategoryUpdateManyMutationInput, EventCategoryUncheckedUpdateManyWithoutCategoryInput>
  }

  export type EventCategoryScalarWhereInput = {
    AND?: EventCategoryScalarWhereInput | EventCategoryScalarWhereInput[]
    OR?: EventCategoryScalarWhereInput[]
    NOT?: EventCategoryScalarWhereInput | EventCategoryScalarWhereInput[]
    id?: StringFilter<"EventCategory"> | string
    eventId?: StringFilter<"EventCategory"> | string
    categoryId?: StringFilter<"EventCategory"> | string
    createdAt?: DateTimeFilter<"EventCategory"> | Date | string
  }

  export type UserCreateWithoutEventInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    Ticket?: TicketCreateNestedManyWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
    ReferralCode?: ReferralCodeCreateNestedOneWithoutUserInput
    Point?: PointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEventInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    Ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    ReferralCode?: ReferralCodeUncheckedCreateNestedOneWithoutUserInput
    Point?: PointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEventInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
  }

  export type EventCategoryCreateWithoutEventInput = {
    id?: string
    createdAt?: Date | string
    Category: CategoryCreateNestedOneWithoutEventCategoryInput
  }

  export type EventCategoryUncheckedCreateWithoutEventInput = {
    id?: string
    categoryId: string
    createdAt?: Date | string
  }

  export type EventCategoryCreateOrConnectWithoutEventInput = {
    where: EventCategoryWhereUniqueInput
    create: XOR<EventCategoryCreateWithoutEventInput, EventCategoryUncheckedCreateWithoutEventInput>
  }

  export type EventCategoryCreateManyEventInputEnvelope = {
    data: EventCategoryCreateManyEventInput | EventCategoryCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type VoucherCreateWithoutEventInput = {
    id?: string
    description: string
    code: string
    discountPercent: number
    maxUses: number
    status?: $Enums.StatusRole
    validUntil: Date | string
    Transaction?: TransactionCreateNestedManyWithoutVoucherInput
  }

  export type VoucherUncheckedCreateWithoutEventInput = {
    id?: string
    description: string
    code: string
    discountPercent: number
    maxUses: number
    status?: $Enums.StatusRole
    validUntil: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutVoucherInput
  }

  export type VoucherCreateOrConnectWithoutEventInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput>
  }

  export type VoucherCreateManyEventInputEnvelope = {
    data: VoucherCreateManyEventInput | VoucherCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCreateWithoutEventInput = {
    id?: string
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutTransactionInput
    Ticket: TicketCreateNestedOneWithoutTransactionInput
    Voucher?: VoucherCreateNestedOneWithoutTransactionInput
    Discount?: DiscountCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    ticketId: string
    voucherId?: string | null
    discountId?: string | null
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutEventInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput>
  }

  export type TransactionCreateManyEventInputEnvelope = {
    data: TransactionCreateManyEventInput | TransactionCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutEventInput = {
    id?: string
    imageReview: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutEventInput = {
    id?: string
    userId: string
    imageReview: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutEventInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewCreateManyEventInputEnvelope = {
    data: ReviewCreateManyEventInput | ReviewCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventImageCreateWithoutEventInput = {
    id?: string
    createdAt?: Date | string
    ImagePreview?: ImageCreateNestedOneWithoutImagePreviewInput
    ImageContent?: ImageCreateNestedOneWithoutImageContentInput
  }

  export type EventImageUncheckedCreateWithoutEventInput = {
    id?: string
    imagePreviewId?: string | null
    imageContentId?: string | null
    createdAt?: Date | string
  }

  export type EventImageCreateOrConnectWithoutEventInput = {
    where: EventImageWhereUniqueInput
    create: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput>
  }

  export type EventImageCreateManyEventInputEnvelope = {
    data: EventImageCreateManyEventInput | EventImageCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type DiscountCreateWithoutEventInput = {
    id?: string
    discountPercent: number
    validUntil: Date | string
    Transaction?: TransactionCreateNestedManyWithoutDiscountInput
  }

  export type DiscountUncheckedCreateWithoutEventInput = {
    id?: string
    discountPercent: number
    validUntil: Date | string
    Transaction?: TransactionUncheckedCreateNestedManyWithoutDiscountInput
  }

  export type DiscountCreateOrConnectWithoutEventInput = {
    where: DiscountWhereUniqueInput
    create: XOR<DiscountCreateWithoutEventInput, DiscountUncheckedCreateWithoutEventInput>
  }

  export type DiscountCreateManyEventInputEnvelope = {
    data: DiscountCreateManyEventInput | DiscountCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutEventInput = {
    id?: string
    ticketType?: $Enums.TicketRole
    price: number
    quantity: string
    Transaction?: TransactionCreateNestedManyWithoutTicketInput
    User?: UserCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutEventInput = {
    id?: string
    ticketType?: $Enums.TicketRole
    price: number
    quantity: string
    userId?: string | null
    Transaction?: TransactionUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutEventInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketCreateManyEventInputEnvelope = {
    data: TicketCreateManyEventInput | TicketCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventInput = {
    update: XOR<UserUpdateWithoutEventInput, UserUncheckedUpdateWithoutEventInput>
    create: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventInput, UserUncheckedUpdateWithoutEventInput>
  }

  export type UserUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
    ReferralCode?: ReferralCodeUpdateOneWithoutUserNestedInput
    Point?: PointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    ReferralCode?: ReferralCodeUncheckedUpdateOneWithoutUserNestedInput
    Point?: PointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventCategoryUpsertWithWhereUniqueWithoutEventInput = {
    where: EventCategoryWhereUniqueInput
    update: XOR<EventCategoryUpdateWithoutEventInput, EventCategoryUncheckedUpdateWithoutEventInput>
    create: XOR<EventCategoryCreateWithoutEventInput, EventCategoryUncheckedCreateWithoutEventInput>
  }

  export type EventCategoryUpdateWithWhereUniqueWithoutEventInput = {
    where: EventCategoryWhereUniqueInput
    data: XOR<EventCategoryUpdateWithoutEventInput, EventCategoryUncheckedUpdateWithoutEventInput>
  }

  export type EventCategoryUpdateManyWithWhereWithoutEventInput = {
    where: EventCategoryScalarWhereInput
    data: XOR<EventCategoryUpdateManyMutationInput, EventCategoryUncheckedUpdateManyWithoutEventInput>
  }

  export type VoucherUpsertWithWhereUniqueWithoutEventInput = {
    where: VoucherWhereUniqueInput
    update: XOR<VoucherUpdateWithoutEventInput, VoucherUncheckedUpdateWithoutEventInput>
    create: XOR<VoucherCreateWithoutEventInput, VoucherUncheckedCreateWithoutEventInput>
  }

  export type VoucherUpdateWithWhereUniqueWithoutEventInput = {
    where: VoucherWhereUniqueInput
    data: XOR<VoucherUpdateWithoutEventInput, VoucherUncheckedUpdateWithoutEventInput>
  }

  export type VoucherUpdateManyWithWhereWithoutEventInput = {
    where: VoucherScalarWhereInput
    data: XOR<VoucherUpdateManyMutationInput, VoucherUncheckedUpdateManyWithoutEventInput>
  }

  export type VoucherScalarWhereInput = {
    AND?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    OR?: VoucherScalarWhereInput[]
    NOT?: VoucherScalarWhereInput | VoucherScalarWhereInput[]
    id?: StringFilter<"Voucher"> | string
    eventId?: StringFilter<"Voucher"> | string
    description?: StringFilter<"Voucher"> | string
    code?: StringFilter<"Voucher"> | string
    discountPercent?: IntFilter<"Voucher"> | number
    maxUses?: IntFilter<"Voucher"> | number
    status?: EnumStatusRoleFilter<"Voucher"> | $Enums.StatusRole
    validUntil?: DateTimeFilter<"Voucher"> | Date | string
  }

  export type TransactionUpsertWithWhereUniqueWithoutEventInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutEventInput, TransactionUncheckedUpdateWithoutEventInput>
    create: XOR<TransactionCreateWithoutEventInput, TransactionUncheckedCreateWithoutEventInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutEventInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutEventInput, TransactionUncheckedUpdateWithoutEventInput>
  }

  export type TransactionUpdateManyWithWhereWithoutEventInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutEventInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
    create: XOR<ReviewCreateWithoutEventInput, ReviewUncheckedCreateWithoutEventInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutEventInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutEventInput, ReviewUncheckedUpdateWithoutEventInput>
  }

  export type ReviewUpdateManyWithWhereWithoutEventInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutEventInput>
  }

  export type EventImageUpsertWithWhereUniqueWithoutEventInput = {
    where: EventImageWhereUniqueInput
    update: XOR<EventImageUpdateWithoutEventInput, EventImageUncheckedUpdateWithoutEventInput>
    create: XOR<EventImageCreateWithoutEventInput, EventImageUncheckedCreateWithoutEventInput>
  }

  export type EventImageUpdateWithWhereUniqueWithoutEventInput = {
    where: EventImageWhereUniqueInput
    data: XOR<EventImageUpdateWithoutEventInput, EventImageUncheckedUpdateWithoutEventInput>
  }

  export type EventImageUpdateManyWithWhereWithoutEventInput = {
    where: EventImageScalarWhereInput
    data: XOR<EventImageUpdateManyMutationInput, EventImageUncheckedUpdateManyWithoutEventInput>
  }

  export type EventImageScalarWhereInput = {
    AND?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
    OR?: EventImageScalarWhereInput[]
    NOT?: EventImageScalarWhereInput | EventImageScalarWhereInput[]
    id?: StringFilter<"EventImage"> | string
    eventId?: StringFilter<"EventImage"> | string
    imagePreviewId?: StringNullableFilter<"EventImage"> | string | null
    imageContentId?: StringNullableFilter<"EventImage"> | string | null
    createdAt?: DateTimeFilter<"EventImage"> | Date | string
  }

  export type DiscountUpsertWithWhereUniqueWithoutEventInput = {
    where: DiscountWhereUniqueInput
    update: XOR<DiscountUpdateWithoutEventInput, DiscountUncheckedUpdateWithoutEventInput>
    create: XOR<DiscountCreateWithoutEventInput, DiscountUncheckedCreateWithoutEventInput>
  }

  export type DiscountUpdateWithWhereUniqueWithoutEventInput = {
    where: DiscountWhereUniqueInput
    data: XOR<DiscountUpdateWithoutEventInput, DiscountUncheckedUpdateWithoutEventInput>
  }

  export type DiscountUpdateManyWithWhereWithoutEventInput = {
    where: DiscountScalarWhereInput
    data: XOR<DiscountUpdateManyMutationInput, DiscountUncheckedUpdateManyWithoutEventInput>
  }

  export type DiscountScalarWhereInput = {
    AND?: DiscountScalarWhereInput | DiscountScalarWhereInput[]
    OR?: DiscountScalarWhereInput[]
    NOT?: DiscountScalarWhereInput | DiscountScalarWhereInput[]
    id?: StringFilter<"Discount"> | string
    discountPercent?: IntFilter<"Discount"> | number
    validUntil?: DateTimeFilter<"Discount"> | Date | string
    eventId?: StringFilter<"Discount"> | string
  }

  export type TicketUpsertWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
    create: XOR<TicketCreateWithoutEventInput, TicketUncheckedCreateWithoutEventInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutEventInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutEventInput, TicketUncheckedUpdateWithoutEventInput>
  }

  export type TicketUpdateManyWithWhereWithoutEventInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutEventInput>
  }

  export type CategoryCreateWithoutEventCategoryInput = {
    id?: string
    name: $Enums.CategoryRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutEventCategoryInput = {
    id?: string
    name: $Enums.CategoryRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutEventCategoryInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutEventCategoryInput, CategoryUncheckedCreateWithoutEventCategoryInput>
  }

  export type EventCreateWithoutEventCategoryInput = {
    id?: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutEventInput
    Voucher?: VoucherCreateNestedManyWithoutEventInput
    Transaction?: TransactionCreateNestedManyWithoutEventInput
    Review?: ReviewCreateNestedManyWithoutEventInput
    EventImage?: EventImageCreateNestedManyWithoutEventInput
    Discount?: DiscountCreateNestedManyWithoutEventInput
    Ticket?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventCategoryInput = {
    id?: string
    userId: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    Voucher?: VoucherUncheckedCreateNestedManyWithoutEventInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutEventInput
    Review?: ReviewUncheckedCreateNestedManyWithoutEventInput
    EventImage?: EventImageUncheckedCreateNestedManyWithoutEventInput
    Discount?: DiscountUncheckedCreateNestedManyWithoutEventInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventCategoryInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventCategoryInput, EventUncheckedCreateWithoutEventCategoryInput>
  }

  export type CategoryUpsertWithoutEventCategoryInput = {
    update: XOR<CategoryUpdateWithoutEventCategoryInput, CategoryUncheckedUpdateWithoutEventCategoryInput>
    create: XOR<CategoryCreateWithoutEventCategoryInput, CategoryUncheckedCreateWithoutEventCategoryInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutEventCategoryInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutEventCategoryInput, CategoryUncheckedUpdateWithoutEventCategoryInput>
  }

  export type CategoryUpdateWithoutEventCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumCategoryRoleFieldUpdateOperationsInput | $Enums.CategoryRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutEventCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumCategoryRoleFieldUpdateOperationsInput | $Enums.CategoryRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUpsertWithoutEventCategoryInput = {
    update: XOR<EventUpdateWithoutEventCategoryInput, EventUncheckedUpdateWithoutEventCategoryInput>
    create: XOR<EventCreateWithoutEventCategoryInput, EventUncheckedCreateWithoutEventCategoryInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventCategoryInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventCategoryInput, EventUncheckedUpdateWithoutEventCategoryInput>
  }

  export type EventUpdateWithoutEventCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutEventNestedInput
    Voucher?: VoucherUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUpdateManyWithoutEventNestedInput
    Review?: ReviewUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUpdateManyWithoutEventNestedInput
    Discount?: DiscountUpdateManyWithoutEventNestedInput
    Ticket?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Voucher?: VoucherUncheckedUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUncheckedUpdateManyWithoutEventNestedInput
    Discount?: DiscountUncheckedUpdateManyWithoutEventNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutEventImageInput = {
    id?: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutEventInput
    EventCategory?: EventCategoryCreateNestedManyWithoutEventInput
    Voucher?: VoucherCreateNestedManyWithoutEventInput
    Transaction?: TransactionCreateNestedManyWithoutEventInput
    Review?: ReviewCreateNestedManyWithoutEventInput
    Discount?: DiscountCreateNestedManyWithoutEventInput
    Ticket?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventImageInput = {
    id?: string
    userId: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutEventInput
    Voucher?: VoucherUncheckedCreateNestedManyWithoutEventInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutEventInput
    Review?: ReviewUncheckedCreateNestedManyWithoutEventInput
    Discount?: DiscountUncheckedCreateNestedManyWithoutEventInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventImageInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventImageInput, EventUncheckedCreateWithoutEventImageInput>
  }

  export type ImageCreateWithoutImagePreviewInput = {
    id?: string
    url: string
    createdAt?: Date | string
    ImageContent?: EventImageCreateNestedManyWithoutImageContentInput
  }

  export type ImageUncheckedCreateWithoutImagePreviewInput = {
    id?: string
    url: string
    createdAt?: Date | string
    ImageContent?: EventImageUncheckedCreateNestedManyWithoutImageContentInput
  }

  export type ImageCreateOrConnectWithoutImagePreviewInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutImagePreviewInput, ImageUncheckedCreateWithoutImagePreviewInput>
  }

  export type ImageCreateWithoutImageContentInput = {
    id?: string
    url: string
    createdAt?: Date | string
    ImagePreview?: EventImageCreateNestedManyWithoutImagePreviewInput
  }

  export type ImageUncheckedCreateWithoutImageContentInput = {
    id?: string
    url: string
    createdAt?: Date | string
    ImagePreview?: EventImageUncheckedCreateNestedManyWithoutImagePreviewInput
  }

  export type ImageCreateOrConnectWithoutImageContentInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutImageContentInput, ImageUncheckedCreateWithoutImageContentInput>
  }

  export type EventUpsertWithoutEventImageInput = {
    update: XOR<EventUpdateWithoutEventImageInput, EventUncheckedUpdateWithoutEventImageInput>
    create: XOR<EventCreateWithoutEventImageInput, EventUncheckedCreateWithoutEventImageInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventImageInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventImageInput, EventUncheckedUpdateWithoutEventImageInput>
  }

  export type EventUpdateWithoutEventImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutEventNestedInput
    EventCategory?: EventCategoryUpdateManyWithoutEventNestedInput
    Voucher?: VoucherUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUpdateManyWithoutEventNestedInput
    Review?: ReviewUpdateManyWithoutEventNestedInput
    Discount?: DiscountUpdateManyWithoutEventNestedInput
    Ticket?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventImageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutEventNestedInput
    Voucher?: VoucherUncheckedUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    Discount?: DiscountUncheckedUpdateManyWithoutEventNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type ImageUpsertWithoutImagePreviewInput = {
    update: XOR<ImageUpdateWithoutImagePreviewInput, ImageUncheckedUpdateWithoutImagePreviewInput>
    create: XOR<ImageCreateWithoutImagePreviewInput, ImageUncheckedCreateWithoutImagePreviewInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutImagePreviewInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutImagePreviewInput, ImageUncheckedUpdateWithoutImagePreviewInput>
  }

  export type ImageUpdateWithoutImagePreviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ImageContent?: EventImageUpdateManyWithoutImageContentNestedInput
  }

  export type ImageUncheckedUpdateWithoutImagePreviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ImageContent?: EventImageUncheckedUpdateManyWithoutImageContentNestedInput
  }

  export type ImageUpsertWithoutImageContentInput = {
    update: XOR<ImageUpdateWithoutImageContentInput, ImageUncheckedUpdateWithoutImageContentInput>
    create: XOR<ImageCreateWithoutImageContentInput, ImageUncheckedCreateWithoutImageContentInput>
    where?: ImageWhereInput
  }

  export type ImageUpdateToOneWithWhereWithoutImageContentInput = {
    where?: ImageWhereInput
    data: XOR<ImageUpdateWithoutImageContentInput, ImageUncheckedUpdateWithoutImageContentInput>
  }

  export type ImageUpdateWithoutImageContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ImagePreview?: EventImageUpdateManyWithoutImagePreviewNestedInput
  }

  export type ImageUncheckedUpdateWithoutImageContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ImagePreview?: EventImageUncheckedUpdateManyWithoutImagePreviewNestedInput
  }

  export type EventImageCreateWithoutImagePreviewInput = {
    id?: string
    createdAt?: Date | string
    Event: EventCreateNestedOneWithoutEventImageInput
    ImageContent?: ImageCreateNestedOneWithoutImageContentInput
  }

  export type EventImageUncheckedCreateWithoutImagePreviewInput = {
    id?: string
    eventId: string
    imageContentId?: string | null
    createdAt?: Date | string
  }

  export type EventImageCreateOrConnectWithoutImagePreviewInput = {
    where: EventImageWhereUniqueInput
    create: XOR<EventImageCreateWithoutImagePreviewInput, EventImageUncheckedCreateWithoutImagePreviewInput>
  }

  export type EventImageCreateManyImagePreviewInputEnvelope = {
    data: EventImageCreateManyImagePreviewInput | EventImageCreateManyImagePreviewInput[]
    skipDuplicates?: boolean
  }

  export type EventImageCreateWithoutImageContentInput = {
    id?: string
    createdAt?: Date | string
    Event: EventCreateNestedOneWithoutEventImageInput
    ImagePreview?: ImageCreateNestedOneWithoutImagePreviewInput
  }

  export type EventImageUncheckedCreateWithoutImageContentInput = {
    id?: string
    eventId: string
    imagePreviewId?: string | null
    createdAt?: Date | string
  }

  export type EventImageCreateOrConnectWithoutImageContentInput = {
    where: EventImageWhereUniqueInput
    create: XOR<EventImageCreateWithoutImageContentInput, EventImageUncheckedCreateWithoutImageContentInput>
  }

  export type EventImageCreateManyImageContentInputEnvelope = {
    data: EventImageCreateManyImageContentInput | EventImageCreateManyImageContentInput[]
    skipDuplicates?: boolean
  }

  export type EventImageUpsertWithWhereUniqueWithoutImagePreviewInput = {
    where: EventImageWhereUniqueInput
    update: XOR<EventImageUpdateWithoutImagePreviewInput, EventImageUncheckedUpdateWithoutImagePreviewInput>
    create: XOR<EventImageCreateWithoutImagePreviewInput, EventImageUncheckedCreateWithoutImagePreviewInput>
  }

  export type EventImageUpdateWithWhereUniqueWithoutImagePreviewInput = {
    where: EventImageWhereUniqueInput
    data: XOR<EventImageUpdateWithoutImagePreviewInput, EventImageUncheckedUpdateWithoutImagePreviewInput>
  }

  export type EventImageUpdateManyWithWhereWithoutImagePreviewInput = {
    where: EventImageScalarWhereInput
    data: XOR<EventImageUpdateManyMutationInput, EventImageUncheckedUpdateManyWithoutImagePreviewInput>
  }

  export type EventImageUpsertWithWhereUniqueWithoutImageContentInput = {
    where: EventImageWhereUniqueInput
    update: XOR<EventImageUpdateWithoutImageContentInput, EventImageUncheckedUpdateWithoutImageContentInput>
    create: XOR<EventImageCreateWithoutImageContentInput, EventImageUncheckedCreateWithoutImageContentInput>
  }

  export type EventImageUpdateWithWhereUniqueWithoutImageContentInput = {
    where: EventImageWhereUniqueInput
    data: XOR<EventImageUpdateWithoutImageContentInput, EventImageUncheckedUpdateWithoutImageContentInput>
  }

  export type EventImageUpdateManyWithWhereWithoutImageContentInput = {
    where: EventImageScalarWhereInput
    data: XOR<EventImageUpdateManyMutationInput, EventImageUncheckedUpdateManyWithoutImageContentInput>
  }

  export type UserCreateWithoutReviewInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    Event?: EventCreateNestedManyWithoutUserInput
    Ticket?: TicketCreateNestedManyWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    ReferralCode?: ReferralCodeCreateNestedOneWithoutUserInput
    Point?: PointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutUserInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    ReferralCode?: ReferralCodeUncheckedCreateNestedOneWithoutUserInput
    Point?: PointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
  }

  export type EventCreateWithoutReviewInput = {
    id?: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutEventInput
    EventCategory?: EventCategoryCreateNestedManyWithoutEventInput
    Voucher?: VoucherCreateNestedManyWithoutEventInput
    Transaction?: TransactionCreateNestedManyWithoutEventInput
    EventImage?: EventImageCreateNestedManyWithoutEventInput
    Discount?: DiscountCreateNestedManyWithoutEventInput
    Ticket?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutReviewInput = {
    id?: string
    userId: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutEventInput
    Voucher?: VoucherUncheckedCreateNestedManyWithoutEventInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutEventInput
    EventImage?: EventImageUncheckedCreateNestedManyWithoutEventInput
    Discount?: DiscountUncheckedCreateNestedManyWithoutEventInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutReviewInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
  }

  export type UserUpsertWithoutReviewInput = {
    update: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutUserNestedInput
    Ticket?: TicketUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    ReferralCode?: ReferralCodeUpdateOneWithoutUserNestedInput
    Point?: PointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutUserNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    ReferralCode?: ReferralCodeUncheckedUpdateOneWithoutUserNestedInput
    Point?: PointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutReviewInput = {
    update: XOR<EventUpdateWithoutReviewInput, EventUncheckedUpdateWithoutReviewInput>
    create: XOR<EventCreateWithoutReviewInput, EventUncheckedCreateWithoutReviewInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutReviewInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutReviewInput, EventUncheckedUpdateWithoutReviewInput>
  }

  export type EventUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutEventNestedInput
    EventCategory?: EventCategoryUpdateManyWithoutEventNestedInput
    Voucher?: VoucherUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUpdateManyWithoutEventNestedInput
    Discount?: DiscountUpdateManyWithoutEventNestedInput
    Ticket?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutEventNestedInput
    Voucher?: VoucherUncheckedUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUncheckedUpdateManyWithoutEventNestedInput
    Discount?: DiscountUncheckedUpdateManyWithoutEventNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateWithoutTicketInput = {
    id?: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutEventInput
    EventCategory?: EventCategoryCreateNestedManyWithoutEventInput
    Voucher?: VoucherCreateNestedManyWithoutEventInput
    Transaction?: TransactionCreateNestedManyWithoutEventInput
    Review?: ReviewCreateNestedManyWithoutEventInput
    EventImage?: EventImageCreateNestedManyWithoutEventInput
    Discount?: DiscountCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTicketInput = {
    id?: string
    userId: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutEventInput
    Voucher?: VoucherUncheckedCreateNestedManyWithoutEventInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutEventInput
    Review?: ReviewUncheckedCreateNestedManyWithoutEventInput
    EventImage?: EventImageUncheckedCreateNestedManyWithoutEventInput
    Discount?: DiscountUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTicketInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
  }

  export type TransactionCreateWithoutTicketInput = {
    id?: string
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutTransactionInput
    Event: EventCreateNestedOneWithoutTransactionInput
    Voucher?: VoucherCreateNestedOneWithoutTransactionInput
    Discount?: DiscountCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutTicketInput = {
    id?: string
    userId: string
    eventId: string
    voucherId?: string | null
    discountId?: string | null
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutTicketInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput>
  }

  export type TransactionCreateManyTicketInputEnvelope = {
    data: TransactionCreateManyTicketInput | TransactionCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTicketInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    Event?: EventCreateNestedManyWithoutUserInput
    Transaction?: TransactionCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
    ReferralCode?: ReferralCodeCreateNestedOneWithoutUserInput
    Point?: PointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTicketInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutUserInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    ReferralCode?: ReferralCodeUncheckedCreateNestedOneWithoutUserInput
    Point?: PointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTicketInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
  }

  export type EventUpsertWithoutTicketInput = {
    update: XOR<EventUpdateWithoutTicketInput, EventUncheckedUpdateWithoutTicketInput>
    create: XOR<EventCreateWithoutTicketInput, EventUncheckedCreateWithoutTicketInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTicketInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTicketInput, EventUncheckedUpdateWithoutTicketInput>
  }

  export type EventUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutEventNestedInput
    EventCategory?: EventCategoryUpdateManyWithoutEventNestedInput
    Voucher?: VoucherUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUpdateManyWithoutEventNestedInput
    Review?: ReviewUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUpdateManyWithoutEventNestedInput
    Discount?: DiscountUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutEventNestedInput
    Voucher?: VoucherUncheckedUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUncheckedUpdateManyWithoutEventNestedInput
    Discount?: DiscountUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutTicketInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutTicketInput, TransactionUncheckedUpdateWithoutTicketInput>
    create: XOR<TransactionCreateWithoutTicketInput, TransactionUncheckedCreateWithoutTicketInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutTicketInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutTicketInput, TransactionUncheckedUpdateWithoutTicketInput>
  }

  export type TransactionUpdateManyWithWhereWithoutTicketInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutTicketInput>
  }

  export type UserUpsertWithoutTicketInput = {
    update: XOR<UserUpdateWithoutTicketInput, UserUncheckedUpdateWithoutTicketInput>
    create: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketInput, UserUncheckedUpdateWithoutTicketInput>
  }

  export type UserUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
    ReferralCode?: ReferralCodeUpdateOneWithoutUserNestedInput
    Point?: PointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutUserNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    ReferralCode?: ReferralCodeUncheckedUpdateOneWithoutUserNestedInput
    Point?: PointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventCreateWithoutVoucherInput = {
    id?: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutEventInput
    EventCategory?: EventCategoryCreateNestedManyWithoutEventInput
    Transaction?: TransactionCreateNestedManyWithoutEventInput
    Review?: ReviewCreateNestedManyWithoutEventInput
    EventImage?: EventImageCreateNestedManyWithoutEventInput
    Discount?: DiscountCreateNestedManyWithoutEventInput
    Ticket?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutVoucherInput = {
    id?: string
    userId: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutEventInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutEventInput
    Review?: ReviewUncheckedCreateNestedManyWithoutEventInput
    EventImage?: EventImageUncheckedCreateNestedManyWithoutEventInput
    Discount?: DiscountUncheckedCreateNestedManyWithoutEventInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutVoucherInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutVoucherInput, EventUncheckedCreateWithoutVoucherInput>
  }

  export type TransactionCreateWithoutVoucherInput = {
    id?: string
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutTransactionInput
    Event: EventCreateNestedOneWithoutTransactionInput
    Ticket: TicketCreateNestedOneWithoutTransactionInput
    Discount?: DiscountCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutVoucherInput = {
    id?: string
    userId: string
    eventId: string
    ticketId: string
    discountId?: string | null
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput>
  }

  export type TransactionCreateManyVoucherInputEnvelope = {
    data: TransactionCreateManyVoucherInput | TransactionCreateManyVoucherInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutVoucherInput = {
    update: XOR<EventUpdateWithoutVoucherInput, EventUncheckedUpdateWithoutVoucherInput>
    create: XOR<EventCreateWithoutVoucherInput, EventUncheckedCreateWithoutVoucherInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutVoucherInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutVoucherInput, EventUncheckedUpdateWithoutVoucherInput>
  }

  export type EventUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutEventNestedInput
    EventCategory?: EventCategoryUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUpdateManyWithoutEventNestedInput
    Review?: ReviewUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUpdateManyWithoutEventNestedInput
    Discount?: DiscountUpdateManyWithoutEventNestedInput
    Ticket?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUncheckedUpdateManyWithoutEventNestedInput
    Discount?: DiscountUncheckedUpdateManyWithoutEventNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutVoucherInput, TransactionUncheckedUpdateWithoutVoucherInput>
    create: XOR<TransactionCreateWithoutVoucherInput, TransactionUncheckedCreateWithoutVoucherInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutVoucherInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutVoucherInput, TransactionUncheckedUpdateWithoutVoucherInput>
  }

  export type TransactionUpdateManyWithWhereWithoutVoucherInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutVoucherInput>
  }

  export type EventCreateWithoutDiscountInput = {
    id?: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutEventInput
    EventCategory?: EventCategoryCreateNestedManyWithoutEventInput
    Voucher?: VoucherCreateNestedManyWithoutEventInput
    Transaction?: TransactionCreateNestedManyWithoutEventInput
    Review?: ReviewCreateNestedManyWithoutEventInput
    EventImage?: EventImageCreateNestedManyWithoutEventInput
    Ticket?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutDiscountInput = {
    id?: string
    userId: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutEventInput
    Voucher?: VoucherUncheckedCreateNestedManyWithoutEventInput
    Transaction?: TransactionUncheckedCreateNestedManyWithoutEventInput
    Review?: ReviewUncheckedCreateNestedManyWithoutEventInput
    EventImage?: EventImageUncheckedCreateNestedManyWithoutEventInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutDiscountInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutDiscountInput, EventUncheckedCreateWithoutDiscountInput>
  }

  export type TransactionCreateWithoutDiscountInput = {
    id?: string
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutTransactionInput
    Event: EventCreateNestedOneWithoutTransactionInput
    Ticket: TicketCreateNestedOneWithoutTransactionInput
    Voucher?: VoucherCreateNestedOneWithoutTransactionInput
  }

  export type TransactionUncheckedCreateWithoutDiscountInput = {
    id?: string
    userId: string
    eventId: string
    ticketId: string
    voucherId?: string | null
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
  }

  export type TransactionCreateOrConnectWithoutDiscountInput = {
    where: TransactionWhereUniqueInput
    create: XOR<TransactionCreateWithoutDiscountInput, TransactionUncheckedCreateWithoutDiscountInput>
  }

  export type TransactionCreateManyDiscountInputEnvelope = {
    data: TransactionCreateManyDiscountInput | TransactionCreateManyDiscountInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithoutDiscountInput = {
    update: XOR<EventUpdateWithoutDiscountInput, EventUncheckedUpdateWithoutDiscountInput>
    create: XOR<EventCreateWithoutDiscountInput, EventUncheckedCreateWithoutDiscountInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutDiscountInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutDiscountInput, EventUncheckedUpdateWithoutDiscountInput>
  }

  export type EventUpdateWithoutDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutEventNestedInput
    EventCategory?: EventCategoryUpdateManyWithoutEventNestedInput
    Voucher?: VoucherUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUpdateManyWithoutEventNestedInput
    Review?: ReviewUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUpdateManyWithoutEventNestedInput
    Ticket?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutEventNestedInput
    Voucher?: VoucherUncheckedUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUncheckedUpdateManyWithoutEventNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TransactionUpsertWithWhereUniqueWithoutDiscountInput = {
    where: TransactionWhereUniqueInput
    update: XOR<TransactionUpdateWithoutDiscountInput, TransactionUncheckedUpdateWithoutDiscountInput>
    create: XOR<TransactionCreateWithoutDiscountInput, TransactionUncheckedCreateWithoutDiscountInput>
  }

  export type TransactionUpdateWithWhereUniqueWithoutDiscountInput = {
    where: TransactionWhereUniqueInput
    data: XOR<TransactionUpdateWithoutDiscountInput, TransactionUncheckedUpdateWithoutDiscountInput>
  }

  export type TransactionUpdateManyWithWhereWithoutDiscountInput = {
    where: TransactionScalarWhereInput
    data: XOR<TransactionUpdateManyMutationInput, TransactionUncheckedUpdateManyWithoutDiscountInput>
  }

  export type UserCreateWithoutTransactionInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    Event?: EventCreateNestedManyWithoutUserInput
    Ticket?: TicketCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
    ReferralCode?: ReferralCodeCreateNestedOneWithoutUserInput
    Point?: PointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTransactionInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    username: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutUserInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    ReferralCode?: ReferralCodeUncheckedCreateNestedOneWithoutUserInput
    Point?: PointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTransactionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
  }

  export type EventCreateWithoutTransactionInput = {
    id?: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    User: UserCreateNestedOneWithoutEventInput
    EventCategory?: EventCategoryCreateNestedManyWithoutEventInput
    Voucher?: VoucherCreateNestedManyWithoutEventInput
    Review?: ReviewCreateNestedManyWithoutEventInput
    EventImage?: EventImageCreateNestedManyWithoutEventInput
    Discount?: DiscountCreateNestedManyWithoutEventInput
    Ticket?: TicketCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutTransactionInput = {
    id?: string
    userId: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
    EventCategory?: EventCategoryUncheckedCreateNestedManyWithoutEventInput
    Voucher?: VoucherUncheckedCreateNestedManyWithoutEventInput
    Review?: ReviewUncheckedCreateNestedManyWithoutEventInput
    EventImage?: EventImageUncheckedCreateNestedManyWithoutEventInput
    Discount?: DiscountUncheckedCreateNestedManyWithoutEventInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutTransactionInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutTransactionInput, EventUncheckedCreateWithoutTransactionInput>
  }

  export type TicketCreateWithoutTransactionInput = {
    id?: string
    ticketType?: $Enums.TicketRole
    price: number
    quantity: string
    Event: EventCreateNestedOneWithoutTicketInput
    User?: UserCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTransactionInput = {
    id?: string
    eventId: string
    ticketType?: $Enums.TicketRole
    price: number
    quantity: string
    userId?: string | null
  }

  export type TicketCreateOrConnectWithoutTransactionInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTransactionInput, TicketUncheckedCreateWithoutTransactionInput>
  }

  export type VoucherCreateWithoutTransactionInput = {
    id?: string
    description: string
    code: string
    discountPercent: number
    maxUses: number
    status?: $Enums.StatusRole
    validUntil: Date | string
    event: EventCreateNestedOneWithoutVoucherInput
  }

  export type VoucherUncheckedCreateWithoutTransactionInput = {
    id?: string
    eventId: string
    description: string
    code: string
    discountPercent: number
    maxUses: number
    status?: $Enums.StatusRole
    validUntil: Date | string
  }

  export type VoucherCreateOrConnectWithoutTransactionInput = {
    where: VoucherWhereUniqueInput
    create: XOR<VoucherCreateWithoutTransactionInput, VoucherUncheckedCreateWithoutTransactionInput>
  }

  export type DiscountCreateWithoutTransactionInput = {
    id?: string
    discountPercent: number
    validUntil: Date | string
    Event: EventCreateNestedOneWithoutDiscountInput
  }

  export type DiscountUncheckedCreateWithoutTransactionInput = {
    id?: string
    discountPercent: number
    validUntil: Date | string
    eventId: string
  }

  export type DiscountCreateOrConnectWithoutTransactionInput = {
    where: DiscountWhereUniqueInput
    create: XOR<DiscountCreateWithoutTransactionInput, DiscountUncheckedCreateWithoutTransactionInput>
  }

  export type UserUpsertWithoutTransactionInput = {
    update: XOR<UserUpdateWithoutTransactionInput, UserUncheckedUpdateWithoutTransactionInput>
    create: XOR<UserCreateWithoutTransactionInput, UserUncheckedCreateWithoutTransactionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionInput, UserUncheckedUpdateWithoutTransactionInput>
  }

  export type UserUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutUserNestedInput
    Ticket?: TicketUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
    ReferralCode?: ReferralCodeUpdateOneWithoutUserNestedInput
    Point?: PointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutUserNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    ReferralCode?: ReferralCodeUncheckedUpdateOneWithoutUserNestedInput
    Point?: PointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EventUpsertWithoutTransactionInput = {
    update: XOR<EventUpdateWithoutTransactionInput, EventUncheckedUpdateWithoutTransactionInput>
    create: XOR<EventCreateWithoutTransactionInput, EventUncheckedCreateWithoutTransactionInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutTransactionInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutTransactionInput, EventUncheckedUpdateWithoutTransactionInput>
  }

  export type EventUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutEventNestedInput
    EventCategory?: EventCategoryUpdateManyWithoutEventNestedInput
    Voucher?: VoucherUpdateManyWithoutEventNestedInput
    Review?: ReviewUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUpdateManyWithoutEventNestedInput
    Discount?: DiscountUpdateManyWithoutEventNestedInput
    Ticket?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutEventNestedInput
    Voucher?: VoucherUncheckedUpdateManyWithoutEventNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUncheckedUpdateManyWithoutEventNestedInput
    Discount?: DiscountUncheckedUpdateManyWithoutEventNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type TicketUpsertWithoutTransactionInput = {
    update: XOR<TicketUpdateWithoutTransactionInput, TicketUncheckedUpdateWithoutTransactionInput>
    create: XOR<TicketCreateWithoutTransactionInput, TicketUncheckedCreateWithoutTransactionInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutTransactionInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutTransactionInput, TicketUncheckedUpdateWithoutTransactionInput>
  }

  export type TicketUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketType?: EnumTicketRoleFieldUpdateOperationsInput | $Enums.TicketRole
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    Event?: EventUpdateOneRequiredWithoutTicketNestedInput
    User?: UserUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketType?: EnumTicketRoleFieldUpdateOperationsInput | $Enums.TicketRole
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VoucherUpsertWithoutTransactionInput = {
    update: XOR<VoucherUpdateWithoutTransactionInput, VoucherUncheckedUpdateWithoutTransactionInput>
    create: XOR<VoucherCreateWithoutTransactionInput, VoucherUncheckedCreateWithoutTransactionInput>
    where?: VoucherWhereInput
  }

  export type VoucherUpdateToOneWithWhereWithoutTransactionInput = {
    where?: VoucherWhereInput
    data: XOR<VoucherUpdateWithoutTransactionInput, VoucherUncheckedUpdateWithoutTransactionInput>
  }

  export type VoucherUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRoleFieldUpdateOperationsInput | $Enums.StatusRole
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRoleFieldUpdateOperationsInput | $Enums.StatusRole
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountUpsertWithoutTransactionInput = {
    update: XOR<DiscountUpdateWithoutTransactionInput, DiscountUncheckedUpdateWithoutTransactionInput>
    create: XOR<DiscountCreateWithoutTransactionInput, DiscountUncheckedCreateWithoutTransactionInput>
    where?: DiscountWhereInput
  }

  export type DiscountUpdateToOneWithWhereWithoutTransactionInput = {
    where?: DiscountWhereInput
    data: XOR<DiscountUpdateWithoutTransactionInput, DiscountUncheckedUpdateWithoutTransactionInput>
  }

  export type DiscountUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateOneRequiredWithoutDiscountNestedInput
  }

  export type DiscountUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    eventId?: StringFieldUpdateOperationsInput | string
  }

  export type EventCreateManyUserInput = {
    id?: string
    title: string
    description: string
    location: string
    startDate: Date | string
    endDate: Date | string
    createdAt?: Date | string
  }

  export type TicketCreateManyUserInput = {
    id?: string
    eventId: string
    ticketType?: $Enums.TicketRole
    price: number
    quantity: string
  }

  export type TransactionCreateManyUserInput = {
    id?: string
    eventId: string
    ticketId: string
    voucherId?: string | null
    discountId?: string | null
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    eventId: string
    imageReview: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type PointCreateManyUserInput = {
    id?: string
    amount: number
    expiredAt: Date | string
    createAt?: Date | string
  }

  export type EventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventCategory?: EventCategoryUpdateManyWithoutEventNestedInput
    Voucher?: VoucherUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUpdateManyWithoutEventNestedInput
    Review?: ReviewUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUpdateManyWithoutEventNestedInput
    Discount?: DiscountUpdateManyWithoutEventNestedInput
    Ticket?: TicketUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    EventCategory?: EventCategoryUncheckedUpdateManyWithoutEventNestedInput
    Voucher?: VoucherUncheckedUpdateManyWithoutEventNestedInput
    Transaction?: TransactionUncheckedUpdateManyWithoutEventNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutEventNestedInput
    EventImage?: EventImageUncheckedUpdateManyWithoutEventNestedInput
    Discount?: DiscountUncheckedUpdateManyWithoutEventNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketType?: EnumTicketRoleFieldUpdateOperationsInput | $Enums.TicketRole
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    Event?: EventUpdateOneRequiredWithoutTicketNestedInput
    Transaction?: TransactionUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketType?: EnumTicketRoleFieldUpdateOperationsInput | $Enums.TicketRole
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    Transaction?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketType?: EnumTicketRoleFieldUpdateOperationsInput | $Enums.TicketRole
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateOneRequiredWithoutTransactionNestedInput
    Ticket?: TicketUpdateOneRequiredWithoutTransactionNestedInput
    Voucher?: VoucherUpdateOneWithoutTransactionNestedInput
    Discount?: DiscountUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    discountId?: NullableStringFieldUpdateOperationsInput | string | null
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    discountId?: NullableStringFieldUpdateOperationsInput | string | null
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageReview?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    imageReview?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    imageReview?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PointUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryCreateManyCategoryInput = {
    id?: string
    eventId: string
    createdAt?: Date | string
  }

  export type EventCategoryUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateOneRequiredWithoutEventCategoryNestedInput
  }

  export type EventCategoryUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryCreateManyEventInput = {
    id?: string
    categoryId: string
    createdAt?: Date | string
  }

  export type VoucherCreateManyEventInput = {
    id?: string
    description: string
    code: string
    discountPercent: number
    maxUses: number
    status?: $Enums.StatusRole
    validUntil: Date | string
  }

  export type TransactionCreateManyEventInput = {
    id?: string
    userId: string
    ticketId: string
    voucherId?: string | null
    discountId?: string | null
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
  }

  export type ReviewCreateManyEventInput = {
    id?: string
    userId: string
    imageReview: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type EventImageCreateManyEventInput = {
    id?: string
    imagePreviewId?: string | null
    imageContentId?: string | null
    createdAt?: Date | string
  }

  export type DiscountCreateManyEventInput = {
    id?: string
    discountPercent: number
    validUntil: Date | string
  }

  export type TicketCreateManyEventInput = {
    id?: string
    ticketType?: $Enums.TicketRole
    price: number
    quantity: string
    userId?: string | null
  }

  export type EventCategoryUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Category?: CategoryUpdateOneRequiredWithoutEventCategoryNestedInput
  }

  export type EventCategoryUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCategoryUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoucherUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRoleFieldUpdateOperationsInput | $Enums.StatusRole
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRoleFieldUpdateOperationsInput | $Enums.StatusRole
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutVoucherNestedInput
  }

  export type VoucherUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    maxUses?: IntFieldUpdateOperationsInput | number
    status?: EnumStatusRoleFieldUpdateOperationsInput | $Enums.StatusRole
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutTransactionNestedInput
    Ticket?: TicketUpdateOneRequiredWithoutTransactionNestedInput
    Voucher?: VoucherUpdateOneWithoutTransactionNestedInput
    Discount?: DiscountUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    discountId?: NullableStringFieldUpdateOperationsInput | string | null
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    discountId?: NullableStringFieldUpdateOperationsInput | string | null
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageReview?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    imageReview?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    imageReview?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ImagePreview?: ImageUpdateOneWithoutImagePreviewNestedInput
    ImageContent?: ImageUpdateOneWithoutImageContentNestedInput
  }

  export type EventImageUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    imagePreviewId?: NullableStringFieldUpdateOperationsInput | string | null
    imageContentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    imagePreviewId?: NullableStringFieldUpdateOperationsInput | string | null
    imageContentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DiscountUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
    Transaction?: TransactionUncheckedUpdateManyWithoutDiscountNestedInput
  }

  export type DiscountUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    discountPercent?: IntFieldUpdateOperationsInput | number
    validUntil?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketType?: EnumTicketRoleFieldUpdateOperationsInput | $Enums.TicketRole
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    Transaction?: TransactionUpdateManyWithoutTicketNestedInput
    User?: UserUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketType?: EnumTicketRoleFieldUpdateOperationsInput | $Enums.TicketRole
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    Transaction?: TransactionUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    ticketType?: EnumTicketRoleFieldUpdateOperationsInput | $Enums.TicketRole
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventImageCreateManyImagePreviewInput = {
    id?: string
    eventId: string
    imageContentId?: string | null
    createdAt?: Date | string
  }

  export type EventImageCreateManyImageContentInput = {
    id?: string
    eventId: string
    imagePreviewId?: string | null
    createdAt?: Date | string
  }

  export type EventImageUpdateWithoutImagePreviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateOneRequiredWithoutEventImageNestedInput
    ImageContent?: ImageUpdateOneWithoutImageContentNestedInput
  }

  export type EventImageUncheckedUpdateWithoutImagePreviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    imageContentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageUncheckedUpdateManyWithoutImagePreviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    imageContentId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageUpdateWithoutImageContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateOneRequiredWithoutEventImageNestedInput
    ImagePreview?: ImageUpdateOneWithoutImagePreviewNestedInput
  }

  export type EventImageUncheckedUpdateWithoutImageContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    imagePreviewId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventImageUncheckedUpdateManyWithoutImageContentInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    imagePreviewId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyTicketInput = {
    id?: string
    userId: string
    eventId: string
    voucherId?: string | null
    discountId?: string | null
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutTransactionNestedInput
    Event?: EventUpdateOneRequiredWithoutTransactionNestedInput
    Voucher?: VoucherUpdateOneWithoutTransactionNestedInput
    Discount?: DiscountUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    discountId?: NullableStringFieldUpdateOperationsInput | string | null
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    discountId?: NullableStringFieldUpdateOperationsInput | string | null
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyVoucherInput = {
    id?: string
    userId: string
    eventId: string
    ticketId: string
    discountId?: string | null
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutTransactionNestedInput
    Event?: EventUpdateOneRequiredWithoutTransactionNestedInput
    Ticket?: TicketUpdateOneRequiredWithoutTransactionNestedInput
    Discount?: DiscountUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    discountId?: NullableStringFieldUpdateOperationsInput | string | null
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutVoucherInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    discountId?: NullableStringFieldUpdateOperationsInput | string | null
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCreateManyDiscountInput = {
    id?: string
    userId: string
    eventId: string
    ticketId: string
    voucherId?: string | null
    statusPaid?: $Enums.StatusPaid
    totalPrice: number
    totalTicket: number
    createdAt?: Date | string
  }

  export type TransactionUpdateWithoutDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutTransactionNestedInput
    Event?: EventUpdateOneRequiredWithoutTransactionNestedInput
    Ticket?: TicketUpdateOneRequiredWithoutTransactionNestedInput
    Voucher?: VoucherUpdateOneWithoutTransactionNestedInput
  }

  export type TransactionUncheckedUpdateWithoutDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionUncheckedUpdateManyWithoutDiscountInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    ticketId?: StringFieldUpdateOperationsInput | string
    voucherId?: NullableStringFieldUpdateOperationsInput | string | null
    statusPaid?: EnumStatusPaidFieldUpdateOperationsInput | $Enums.StatusPaid
    totalPrice?: FloatFieldUpdateOperationsInput | number
    totalTicket?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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