
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Course
 * 
 */
export type Course = $Result.DefaultSelection<Prisma.$CoursePayload>
/**
 * Model Homework
 * 
 */
export type Homework = $Result.DefaultSelection<Prisma.$HomeworkPayload>
/**
 * Model StudentActivity
 * 
 */
export type StudentActivity = $Result.DefaultSelection<Prisma.$StudentActivityPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Test
 * 
 */
export type Test = $Result.DefaultSelection<Prisma.$TestPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **Course** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Courses
    * const courses = await prisma.course.findMany()
    * ```
    */
  get course(): Prisma.CourseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.homework`: Exposes CRUD operations for the **Homework** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Homework
    * const homework = await prisma.homework.findMany()
    * ```
    */
  get homework(): Prisma.HomeworkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.studentActivity`: Exposes CRUD operations for the **StudentActivity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentActivities
    * const studentActivities = await prisma.studentActivity.findMany()
    * ```
    */
  get studentActivity(): Prisma.StudentActivityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **Test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.TestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Student: 'Student',
    Admin: 'Admin',
    News: 'News',
    Group: 'Group',
    Course: 'Course',
    Homework: 'Homework',
    StudentActivity: 'StudentActivity',
    Question: 'Question',
    Test: 'Test',
    Submission: 'Submission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "student" | "admin" | "news" | "group" | "course" | "homework" | "studentActivity" | "question" | "test" | "submission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroupCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroupUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Course: {
        payload: Prisma.$CoursePayload<ExtArgs>
        fields: Prisma.CourseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findFirst: {
            args: Prisma.CourseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          findMany: {
            args: Prisma.CourseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          create: {
            args: Prisma.CourseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          createMany: {
            args: Prisma.CourseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          delete: {
            args: Prisma.CourseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          update: {
            args: Prisma.CourseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          deleteMany: {
            args: Prisma.CourseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CourseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>[]
          }
          upsert: {
            args: Prisma.CourseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CoursePayload>
          }
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourse>
          }
          groupBy: {
            args: Prisma.CourseGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourseGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourseCountArgs<ExtArgs>
            result: $Utils.Optional<CourseCountAggregateOutputType> | number
          }
        }
      }
      Homework: {
        payload: Prisma.$HomeworkPayload<ExtArgs>
        fields: Prisma.HomeworkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HomeworkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeworkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HomeworkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeworkPayload>
          }
          findFirst: {
            args: Prisma.HomeworkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeworkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HomeworkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeworkPayload>
          }
          findMany: {
            args: Prisma.HomeworkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeworkPayload>[]
          }
          create: {
            args: Prisma.HomeworkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeworkPayload>
          }
          createMany: {
            args: Prisma.HomeworkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HomeworkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeworkPayload>[]
          }
          delete: {
            args: Prisma.HomeworkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeworkPayload>
          }
          update: {
            args: Prisma.HomeworkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeworkPayload>
          }
          deleteMany: {
            args: Prisma.HomeworkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HomeworkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HomeworkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeworkPayload>[]
          }
          upsert: {
            args: Prisma.HomeworkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HomeworkPayload>
          }
          aggregate: {
            args: Prisma.HomeworkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHomework>
          }
          groupBy: {
            args: Prisma.HomeworkGroupByArgs<ExtArgs>
            result: $Utils.Optional<HomeworkGroupByOutputType>[]
          }
          count: {
            args: Prisma.HomeworkCountArgs<ExtArgs>
            result: $Utils.Optional<HomeworkCountAggregateOutputType> | number
          }
        }
      }
      StudentActivity: {
        payload: Prisma.$StudentActivityPayload<ExtArgs>
        fields: Prisma.StudentActivityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentActivityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentActivityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentActivityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentActivityPayload>
          }
          findFirst: {
            args: Prisma.StudentActivityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentActivityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentActivityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentActivityPayload>
          }
          findMany: {
            args: Prisma.StudentActivityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentActivityPayload>[]
          }
          create: {
            args: Prisma.StudentActivityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentActivityPayload>
          }
          createMany: {
            args: Prisma.StudentActivityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentActivityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentActivityPayload>[]
          }
          delete: {
            args: Prisma.StudentActivityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentActivityPayload>
          }
          update: {
            args: Prisma.StudentActivityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentActivityPayload>
          }
          deleteMany: {
            args: Prisma.StudentActivityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentActivityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentActivityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentActivityPayload>[]
          }
          upsert: {
            args: Prisma.StudentActivityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentActivityPayload>
          }
          aggregate: {
            args: Prisma.StudentActivityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentActivity>
          }
          groupBy: {
            args: Prisma.StudentActivityGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentActivityGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentActivityCountArgs<ExtArgs>
            result: $Utils.Optional<StudentActivityCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Test: {
        payload: Prisma.$TestPayload<ExtArgs>
        fields: Prisma.TestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findFirst: {
            args: Prisma.TestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          findMany: {
            args: Prisma.TestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          create: {
            args: Prisma.TestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          createMany: {
            args: Prisma.TestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          delete: {
            args: Prisma.TestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          update: {
            args: Prisma.TestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          deleteMany: {
            args: Prisma.TestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>[]
          }
          upsert: {
            args: Prisma.TestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TestPayload>
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.TestGroupByArgs<ExtArgs>
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.TestCountArgs<ExtArgs>
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    student?: StudentOmit
    admin?: AdminOmit
    news?: NewsOmit
    group?: GroupOmit
    course?: CourseOmit
    homework?: HomeworkOmit
    studentActivity?: StudentActivityOmit
    question?: QuestionOmit
    test?: TestOmit
    submission?: SubmissionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    homework: number
    studentActivities: number
    submits: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    homework?: boolean | StudentCountOutputTypeCountHomeworkArgs
    studentActivities?: boolean | StudentCountOutputTypeCountStudentActivitiesArgs
    submits?: boolean | StudentCountOutputTypeCountSubmitsArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountHomeworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomeworkWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountStudentActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentActivityWhereInput
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountSubmitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    students: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | GroupCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Count Type CourseCountOutputType
   */

  export type CourseCountOutputType = {
    groups: number
  }

  export type CourseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | CourseCountOutputTypeCountGroupsArgs
  }

  // Custom InputTypes
  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourseCountOutputType
     */
    select?: CourseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourseCountOutputType without action
   */
  export type CourseCountOutputTypeCountGroupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
  }


  /**
   * Count Type StudentActivityCountOutputType
   */

  export type StudentActivityCountOutputType = {
    tasks: number
  }

  export type StudentActivityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | StudentActivityCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * StudentActivityCountOutputType without action
   */
  export type StudentActivityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivityCountOutputType
     */
    select?: StudentActivityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentActivityCountOutputType without action
   */
  export type StudentActivityCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomeworkWhereInput
  }


  /**
   * Count Type TestCountOutputType
   */

  export type TestCountOutputType = {
    questions: number
    submissions: number
  }

  export type TestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | TestCountOutputTypeCountQuestionsArgs
    submissions?: boolean | TestCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TestCountOutputType
     */
    select?: TestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * TestCountOutputType without action
   */
  export type TestCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    fullName: string | null
    password: string | null
    email: string | null
    username: string | null
    parentNumber: string | null
    groupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    fullName: string | null
    password: string | null
    email: string | null
    username: string | null
    parentNumber: string | null
    groupId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    fullName: number
    password: number
    email: number
    username: number
    parentNumber: number
    groupId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentMinAggregateInputType = {
    id?: true
    fullName?: true
    password?: true
    email?: true
    username?: true
    parentNumber?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    fullName?: true
    password?: true
    email?: true
    username?: true
    parentNumber?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    fullName?: true
    password?: true
    email?: true
    username?: true
    parentNumber?: true
    groupId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    fullName: string
    password: string
    email: string
    username: string | null
    parentNumber: string
    groupId: string | null
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    password?: boolean
    email?: boolean
    username?: boolean
    parentNumber?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | Student$groupArgs<ExtArgs>
    homework?: boolean | Student$homeworkArgs<ExtArgs>
    studentActivities?: boolean | Student$studentActivitiesArgs<ExtArgs>
    submits?: boolean | Student$submitsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    password?: boolean
    email?: boolean
    username?: boolean
    parentNumber?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | Student$groupArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    password?: boolean
    email?: boolean
    username?: boolean
    parentNumber?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    group?: boolean | Student$groupArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    fullName?: boolean
    password?: boolean
    email?: boolean
    username?: boolean
    parentNumber?: boolean
    groupId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "password" | "email" | "username" | "parentNumber" | "groupId" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>
  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Student$groupArgs<ExtArgs>
    homework?: boolean | Student$homeworkArgs<ExtArgs>
    studentActivities?: boolean | Student$studentActivitiesArgs<ExtArgs>
    submits?: boolean | Student$submitsArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Student$groupArgs<ExtArgs>
  }
  export type StudentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | Student$groupArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs> | null
      homework: Prisma.$HomeworkPayload<ExtArgs>[]
      studentActivities: Prisma.$StudentActivityPayload<ExtArgs>[]
      submits: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fullName: string
      password: string
      email: string
      username: string | null
      parentNumber: string
      groupId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    group<T extends Student$groupArgs<ExtArgs> = {}>(args?: Subset<T, Student$groupArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    homework<T extends Student$homeworkArgs<ExtArgs> = {}>(args?: Subset<T, Student$homeworkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    studentActivities<T extends Student$studentActivitiesArgs<ExtArgs> = {}>(args?: Subset<T, Student$studentActivitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submits<T extends Student$submitsArgs<ExtArgs> = {}>(args?: Subset<T, Student$submitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly fullName: FieldRef<"Student", 'String'>
    readonly password: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly username: FieldRef<"Student", 'String'>
    readonly parentNumber: FieldRef<"Student", 'String'>
    readonly groupId: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student updateManyAndReturn
   */
  export type StudentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student.group
   */
  export type Student$groupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
  }

  /**
   * Student.homework
   */
  export type Student$homeworkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homework
     */
    select?: HomeworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homework
     */
    omit?: HomeworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeworkInclude<ExtArgs> | null
    where?: HomeworkWhereInput
    orderBy?: HomeworkOrderByWithRelationInput | HomeworkOrderByWithRelationInput[]
    cursor?: HomeworkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HomeworkScalarFieldEnum | HomeworkScalarFieldEnum[]
  }

  /**
   * Student.studentActivities
   */
  export type Student$studentActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivity
     */
    select?: StudentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentActivity
     */
    omit?: StudentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentActivityInclude<ExtArgs> | null
    where?: StudentActivityWhereInput
    orderBy?: StudentActivityOrderByWithRelationInput | StudentActivityOrderByWithRelationInput[]
    cursor?: StudentActivityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentActivityScalarFieldEnum | StudentActivityScalarFieldEnum[]
  }

  /**
   * Student.submits
   */
  export type Student$submitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    pictureUrl: string | null
    videoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
  }

  export type NewsMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    pictureUrl: string | null
    videoId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    url: string | null
  }

  export type NewsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    pictureUrl: number
    videoId: number
    createdAt: number
    updatedAt: number
    url: number
    _all: number
  }


  export type NewsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    pictureUrl?: true
    videoId?: true
    createdAt?: true
    updatedAt?: true
    url?: true
  }

  export type NewsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    pictureUrl?: true
    videoId?: true
    createdAt?: true
    updatedAt?: true
    url?: true
  }

  export type NewsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    pictureUrl?: true
    videoId?: true
    createdAt?: true
    updatedAt?: true
    url?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    id: string
    title: string
    description: string
    pictureUrl: string | null
    videoId: string | null
    createdAt: Date
    updatedAt: Date
    url: string | null
    _count: NewsCountAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    pictureUrl?: boolean
    videoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    pictureUrl?: boolean
    videoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    pictureUrl?: boolean
    videoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    pictureUrl?: boolean
    videoId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    url?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "pictureUrl" | "videoId" | "createdAt" | "updatedAt" | "url", ExtArgs["result"]["news"]>

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      pictureUrl: string | null
      videoId: string | null
      createdAt: Date
      updatedAt: Date
      url: string | null
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsWithIdOnly = await prisma.news.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `id`
     * const newsWithIdOnly = await prisma.news.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `id`
     * const newsWithIdOnly = await prisma.news.updateManyAndReturn({
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
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
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
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly id: FieldRef<"News", 'String'>
    readonly title: FieldRef<"News", 'String'>
    readonly description: FieldRef<"News", 'String'>
    readonly pictureUrl: FieldRef<"News", 'String'>
    readonly videoId: FieldRef<"News", 'String'>
    readonly createdAt: FieldRef<"News", 'DateTime'>
    readonly updatedAt: FieldRef<"News", 'DateTime'>
    readonly url: FieldRef<"News", 'String'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
  }


  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupMinAggregateOutputType = {
    id: string | null
    name: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupMaxAggregateOutputType = {
    id: string | null
    name: string | null
    courseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    name: number
    courseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GroupMinAggregateInputType = {
    id?: true
    name?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    name?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    name?: true
    courseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: string
    name: string
    courseId: string | null
    createdAt: Date
    updatedAt: Date
    _count: GroupCountAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | Group$courseArgs<ExtArgs>
    students?: boolean | Group$studentsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | Group$courseArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    course?: boolean | Group$courseArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    name?: boolean
    courseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GroupOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "courseId" | "createdAt" | "updatedAt", ExtArgs["result"]["group"]>
  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Group$courseArgs<ExtArgs>
    students?: boolean | Group$studentsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GroupIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Group$courseArgs<ExtArgs>
  }
  export type GroupIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | Group$courseArgs<ExtArgs>
  }

  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      course: Prisma.$CoursePayload<ExtArgs> | null
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      courseId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["group"]>
    composites: {}
  }

  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroupFindUniqueArgs>(args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Group that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs>(args: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroupFindFirstArgs>(args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs>(args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroupFindManyArgs>(args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
     */
    create<T extends GroupCreateArgs>(args: SelectSubset<T, GroupCreateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groups.
     * @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroupCreateManyArgs>(args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groups and returns the data saved in the database.
     * @param {GroupCreateManyAndReturnArgs} args - Arguments to create many Groups.
     * @example
     * // Create many Groups
     * const group = await prisma.group.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroupCreateManyAndReturnArgs>(args?: SelectSubset<T, GroupCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
     */
    delete<T extends GroupDeleteArgs>(args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroupUpdateArgs>(args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroupDeleteManyArgs>(args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroupUpdateManyArgs>(args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups and returns the data updated in the database.
     * @param {GroupUpdateManyAndReturnArgs} args - Arguments to update many Groups.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groups and only return the `id`
     * const groupWithIdOnly = await prisma.group.updateManyAndReturn({
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
    updateManyAndReturn<T extends GroupUpdateManyAndReturnArgs>(args: SelectSubset<T, GroupUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
     */
    upsert<T extends GroupUpsertArgs>(args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    course<T extends Group$courseArgs<ExtArgs> = {}>(args?: Subset<T, Group$courseArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    students<T extends Group$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Group$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Group model
   */
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'String'>
    readonly name: FieldRef<"Group", 'String'>
    readonly courseId: FieldRef<"Group", 'String'>
    readonly createdAt: FieldRef<"Group", 'DateTime'>
    readonly updatedAt: FieldRef<"Group", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }

  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Group createManyAndReturn
   */
  export type GroupCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
  }

  /**
   * Group updateManyAndReturn
   */
  export type GroupUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }

  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }

  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
    /**
     * Limit how many Groups to delete.
     */
    limit?: number
  }

  /**
   * Group.course
   */
  export type Group$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    where?: CourseWhereInput
  }

  /**
   * Group.students
   */
  export type Group$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
  }


  /**
   * Model Course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  export type CourseMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Course to aggregate.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Courses
    **/
    _count?: true | CourseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourseMaxAggregateInputType
  }

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
        [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>
  }




  export type CourseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourseWhereInput
    orderBy?: CourseOrderByWithAggregationInput | CourseOrderByWithAggregationInput[]
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum
    having?: CourseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourseCountAggregateInputType | true
    _min?: CourseMinAggregateInputType
    _max?: CourseMaxAggregateInputType
  }

  export type CourseGroupByOutputType = {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: CourseCountAggregateOutputType | null
    _min: CourseMinAggregateOutputType | null
    _max: CourseMaxAggregateOutputType | null
  }

  type GetCourseGroupByPayload<T extends CourseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourseGroupByOutputType[P]>
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
        }
      >
    >


  export type CourseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    groups?: boolean | Course$groupsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["course"]>

  export type CourseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["course"]>

  export type CourseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["course"]>
  export type CourseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    groups?: boolean | Course$groupsArgs<ExtArgs>
    _count?: boolean | CourseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CourseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CoursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Course"
    objects: {
      groups: Prisma.$GroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["course"]>
    composites: {}
  }

  type CourseGetPayload<S extends boolean | null | undefined | CourseDefaultArgs> = $Result.GetResult<Prisma.$CoursePayload, S>

  type CourseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CourseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CourseCountAggregateInputType | true
    }

  export interface CourseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Course'], meta: { name: 'Course' } }
    /**
     * Find zero or one Course that matches the filter.
     * @param {CourseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourseFindUniqueArgs>(args: SelectSubset<T, CourseFindUniqueArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Course that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CourseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourseFindUniqueOrThrowArgs>(args: SelectSubset<T, CourseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourseFindFirstArgs>(args?: SelectSubset<T, CourseFindFirstArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourseFindFirstOrThrowArgs>(args?: SelectSubset<T, CourseFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     * 
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourseFindManyArgs>(args?: SelectSubset<T, CourseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Course.
     * @param {CourseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     * 
     */
    create<T extends CourseCreateArgs>(args: SelectSubset<T, CourseCreateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Courses.
     * @param {CourseCreateManyArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourseCreateManyArgs>(args?: SelectSubset<T, CourseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Courses and returns the data saved in the database.
     * @param {CourseCreateManyAndReturnArgs} args - Arguments to create many Courses.
     * @example
     * // Create many Courses
     * const course = await prisma.course.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourseCreateManyAndReturnArgs>(args?: SelectSubset<T, CourseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Course.
     * @param {CourseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     * 
     */
    delete<T extends CourseDeleteArgs>(args: SelectSubset<T, CourseDeleteArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Course.
     * @param {CourseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourseUpdateArgs>(args: SelectSubset<T, CourseUpdateArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Courses.
     * @param {CourseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourseDeleteManyArgs>(args?: SelectSubset<T, CourseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourseUpdateManyArgs>(args: SelectSubset<T, CourseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Courses and returns the data updated in the database.
     * @param {CourseUpdateManyAndReturnArgs} args - Arguments to update many Courses.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Courses and only return the `id`
     * const courseWithIdOnly = await prisma.course.updateManyAndReturn({
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
    updateManyAndReturn<T extends CourseUpdateManyAndReturnArgs>(args: SelectSubset<T, CourseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Course.
     * @param {CourseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     */
    upsert<T extends CourseUpsertArgs>(args: SelectSubset<T, CourseUpsertArgs<ExtArgs>>): Prisma__CourseClient<$Result.GetResult<Prisma.$CoursePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
    **/
    count<T extends CourseCountArgs>(
      args?: Subset<T, CourseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(args: Subset<T, CourseAggregateArgs>): Prisma.PrismaPromise<GetCourseAggregateType<T>>

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseGroupByArgs} args - Group by arguments.
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
      T extends CourseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourseGroupByArgs['orderBy'] }
        : { orderBy?: CourseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Course model
   */
  readonly fields: CourseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    groups<T extends Course$groupsArgs<ExtArgs> = {}>(args?: Subset<T, Course$groupsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Course model
   */
  interface CourseFieldRefs {
    readonly id: FieldRef<"Course", 'String'>
    readonly name: FieldRef<"Course", 'String'>
    readonly description: FieldRef<"Course", 'String'>
    readonly createdAt: FieldRef<"Course", 'DateTime'>
    readonly updatedAt: FieldRef<"Course", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Course findUnique
   */
  export type CourseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findUniqueOrThrow
   */
  export type CourseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course findFirst
   */
  export type CourseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findFirstOrThrow
   */
  export type CourseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Course to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course findMany
   */
  export type CourseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter, which Courses to fetch.
     */
    where?: CourseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Courses to fetch.
     */
    orderBy?: CourseOrderByWithRelationInput | CourseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Courses.
     */
    cursor?: CourseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Courses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Courses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[]
  }

  /**
   * Course create
   */
  export type CourseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to create a Course.
     */
    data: XOR<CourseCreateInput, CourseUncheckedCreateInput>
  }

  /**
   * Course createMany
   */
  export type CourseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course createManyAndReturn
   */
  export type CourseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to create many Courses.
     */
    data: CourseCreateManyInput | CourseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Course update
   */
  export type CourseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The data needed to update a Course.
     */
    data: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
    /**
     * Choose, which Course to update.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course updateMany
   */
  export type CourseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course updateManyAndReturn
   */
  export type CourseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * The data used to update Courses.
     */
    data: XOR<CourseUpdateManyMutationInput, CourseUncheckedUpdateManyInput>
    /**
     * Filter which Courses to update
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to update.
     */
    limit?: number
  }

  /**
   * Course upsert
   */
  export type CourseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * The filter to search for the Course to update in case it exists.
     */
    where: CourseWhereUniqueInput
    /**
     * In case the Course found by the `where` argument doesn't exist, create a new Course with this data.
     */
    create: XOR<CourseCreateInput, CourseUncheckedCreateInput>
    /**
     * In case the Course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourseUpdateInput, CourseUncheckedUpdateInput>
  }

  /**
   * Course delete
   */
  export type CourseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
    /**
     * Filter which Course to delete.
     */
    where: CourseWhereUniqueInput
  }

  /**
   * Course deleteMany
   */
  export type CourseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courses to delete
     */
    where?: CourseWhereInput
    /**
     * Limit how many Courses to delete.
     */
    limit?: number
  }

  /**
   * Course.groups
   */
  export type Course$groupsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Group
     */
    omit?: GroupOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GroupInclude<ExtArgs> | null
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    cursor?: GroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }

  /**
   * Course without action
   */
  export type CourseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Course
     */
    select?: CourseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Course
     */
    omit?: CourseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourseInclude<ExtArgs> | null
  }


  /**
   * Model Homework
   */

  export type AggregateHomework = {
    _count: HomeworkCountAggregateOutputType | null
    _avg: HomeworkAvgAggregateOutputType | null
    _sum: HomeworkSumAggregateOutputType | null
    _min: HomeworkMinAggregateOutputType | null
    _max: HomeworkMaxAggregateOutputType | null
  }

  export type HomeworkAvgAggregateOutputType = {
    point: number | null
  }

  export type HomeworkSumAggregateOutputType = {
    point: number | null
  }

  export type HomeworkMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    title: string | null
    description: string | null
    checked: boolean | null
    point: number | null
    deadline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    studentActivityId: string | null
  }

  export type HomeworkMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    title: string | null
    description: string | null
    checked: boolean | null
    point: number | null
    deadline: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    studentActivityId: string | null
  }

  export type HomeworkCountAggregateOutputType = {
    id: number
    studentId: number
    title: number
    description: number
    checked: number
    point: number
    deadline: number
    createdAt: number
    updatedAt: number
    studentActivityId: number
    _all: number
  }


  export type HomeworkAvgAggregateInputType = {
    point?: true
  }

  export type HomeworkSumAggregateInputType = {
    point?: true
  }

  export type HomeworkMinAggregateInputType = {
    id?: true
    studentId?: true
    title?: true
    description?: true
    checked?: true
    point?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
    studentActivityId?: true
  }

  export type HomeworkMaxAggregateInputType = {
    id?: true
    studentId?: true
    title?: true
    description?: true
    checked?: true
    point?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
    studentActivityId?: true
  }

  export type HomeworkCountAggregateInputType = {
    id?: true
    studentId?: true
    title?: true
    description?: true
    checked?: true
    point?: true
    deadline?: true
    createdAt?: true
    updatedAt?: true
    studentActivityId?: true
    _all?: true
  }

  export type HomeworkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Homework to aggregate.
     */
    where?: HomeworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homework to fetch.
     */
    orderBy?: HomeworkOrderByWithRelationInput | HomeworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HomeworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homework from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homework.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Homework
    **/
    _count?: true | HomeworkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HomeworkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HomeworkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HomeworkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HomeworkMaxAggregateInputType
  }

  export type GetHomeworkAggregateType<T extends HomeworkAggregateArgs> = {
        [P in keyof T & keyof AggregateHomework]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHomework[P]>
      : GetScalarType<T[P], AggregateHomework[P]>
  }




  export type HomeworkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HomeworkWhereInput
    orderBy?: HomeworkOrderByWithAggregationInput | HomeworkOrderByWithAggregationInput[]
    by: HomeworkScalarFieldEnum[] | HomeworkScalarFieldEnum
    having?: HomeworkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HomeworkCountAggregateInputType | true
    _avg?: HomeworkAvgAggregateInputType
    _sum?: HomeworkSumAggregateInputType
    _min?: HomeworkMinAggregateInputType
    _max?: HomeworkMaxAggregateInputType
  }

  export type HomeworkGroupByOutputType = {
    id: string
    studentId: string | null
    title: string
    description: string
    checked: boolean
    point: number | null
    deadline: Date
    createdAt: Date
    updatedAt: Date
    studentActivityId: string | null
    _count: HomeworkCountAggregateOutputType | null
    _avg: HomeworkAvgAggregateOutputType | null
    _sum: HomeworkSumAggregateOutputType | null
    _min: HomeworkMinAggregateOutputType | null
    _max: HomeworkMaxAggregateOutputType | null
  }

  type GetHomeworkGroupByPayload<T extends HomeworkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HomeworkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HomeworkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HomeworkGroupByOutputType[P]>
            : GetScalarType<T[P], HomeworkGroupByOutputType[P]>
        }
      >
    >


  export type HomeworkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    checked?: boolean
    point?: boolean
    deadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentActivityId?: boolean
    student?: boolean | Homework$studentArgs<ExtArgs>
    studentActivity?: boolean | Homework$studentActivityArgs<ExtArgs>
  }, ExtArgs["result"]["homework"]>

  export type HomeworkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    checked?: boolean
    point?: boolean
    deadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentActivityId?: boolean
    student?: boolean | Homework$studentArgs<ExtArgs>
    studentActivity?: boolean | Homework$studentActivityArgs<ExtArgs>
  }, ExtArgs["result"]["homework"]>

  export type HomeworkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    checked?: boolean
    point?: boolean
    deadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentActivityId?: boolean
    student?: boolean | Homework$studentArgs<ExtArgs>
    studentActivity?: boolean | Homework$studentActivityArgs<ExtArgs>
  }, ExtArgs["result"]["homework"]>

  export type HomeworkSelectScalar = {
    id?: boolean
    studentId?: boolean
    title?: boolean
    description?: boolean
    checked?: boolean
    point?: boolean
    deadline?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    studentActivityId?: boolean
  }

  export type HomeworkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "title" | "description" | "checked" | "point" | "deadline" | "createdAt" | "updatedAt" | "studentActivityId", ExtArgs["result"]["homework"]>
  export type HomeworkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | Homework$studentArgs<ExtArgs>
    studentActivity?: boolean | Homework$studentActivityArgs<ExtArgs>
  }
  export type HomeworkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | Homework$studentArgs<ExtArgs>
    studentActivity?: boolean | Homework$studentActivityArgs<ExtArgs>
  }
  export type HomeworkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | Homework$studentArgs<ExtArgs>
    studentActivity?: boolean | Homework$studentActivityArgs<ExtArgs>
  }

  export type $HomeworkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Homework"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs> | null
      studentActivity: Prisma.$StudentActivityPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string | null
      title: string
      description: string
      checked: boolean
      point: number | null
      deadline: Date
      createdAt: Date
      updatedAt: Date
      studentActivityId: string | null
    }, ExtArgs["result"]["homework"]>
    composites: {}
  }

  type HomeworkGetPayload<S extends boolean | null | undefined | HomeworkDefaultArgs> = $Result.GetResult<Prisma.$HomeworkPayload, S>

  type HomeworkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HomeworkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HomeworkCountAggregateInputType | true
    }

  export interface HomeworkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Homework'], meta: { name: 'Homework' } }
    /**
     * Find zero or one Homework that matches the filter.
     * @param {HomeworkFindUniqueArgs} args - Arguments to find a Homework
     * @example
     * // Get one Homework
     * const homework = await prisma.homework.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HomeworkFindUniqueArgs>(args: SelectSubset<T, HomeworkFindUniqueArgs<ExtArgs>>): Prisma__HomeworkClient<$Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Homework that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HomeworkFindUniqueOrThrowArgs} args - Arguments to find a Homework
     * @example
     * // Get one Homework
     * const homework = await prisma.homework.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HomeworkFindUniqueOrThrowArgs>(args: SelectSubset<T, HomeworkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HomeworkClient<$Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Homework that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeworkFindFirstArgs} args - Arguments to find a Homework
     * @example
     * // Get one Homework
     * const homework = await prisma.homework.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HomeworkFindFirstArgs>(args?: SelectSubset<T, HomeworkFindFirstArgs<ExtArgs>>): Prisma__HomeworkClient<$Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Homework that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeworkFindFirstOrThrowArgs} args - Arguments to find a Homework
     * @example
     * // Get one Homework
     * const homework = await prisma.homework.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HomeworkFindFirstOrThrowArgs>(args?: SelectSubset<T, HomeworkFindFirstOrThrowArgs<ExtArgs>>): Prisma__HomeworkClient<$Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Homework that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeworkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Homework
     * const homework = await prisma.homework.findMany()
     * 
     * // Get first 10 Homework
     * const homework = await prisma.homework.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const homeworkWithIdOnly = await prisma.homework.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HomeworkFindManyArgs>(args?: SelectSubset<T, HomeworkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Homework.
     * @param {HomeworkCreateArgs} args - Arguments to create a Homework.
     * @example
     * // Create one Homework
     * const Homework = await prisma.homework.create({
     *   data: {
     *     // ... data to create a Homework
     *   }
     * })
     * 
     */
    create<T extends HomeworkCreateArgs>(args: SelectSubset<T, HomeworkCreateArgs<ExtArgs>>): Prisma__HomeworkClient<$Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Homework.
     * @param {HomeworkCreateManyArgs} args - Arguments to create many Homework.
     * @example
     * // Create many Homework
     * const homework = await prisma.homework.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HomeworkCreateManyArgs>(args?: SelectSubset<T, HomeworkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Homework and returns the data saved in the database.
     * @param {HomeworkCreateManyAndReturnArgs} args - Arguments to create many Homework.
     * @example
     * // Create many Homework
     * const homework = await prisma.homework.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Homework and only return the `id`
     * const homeworkWithIdOnly = await prisma.homework.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HomeworkCreateManyAndReturnArgs>(args?: SelectSubset<T, HomeworkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Homework.
     * @param {HomeworkDeleteArgs} args - Arguments to delete one Homework.
     * @example
     * // Delete one Homework
     * const Homework = await prisma.homework.delete({
     *   where: {
     *     // ... filter to delete one Homework
     *   }
     * })
     * 
     */
    delete<T extends HomeworkDeleteArgs>(args: SelectSubset<T, HomeworkDeleteArgs<ExtArgs>>): Prisma__HomeworkClient<$Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Homework.
     * @param {HomeworkUpdateArgs} args - Arguments to update one Homework.
     * @example
     * // Update one Homework
     * const homework = await prisma.homework.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HomeworkUpdateArgs>(args: SelectSubset<T, HomeworkUpdateArgs<ExtArgs>>): Prisma__HomeworkClient<$Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Homework.
     * @param {HomeworkDeleteManyArgs} args - Arguments to filter Homework to delete.
     * @example
     * // Delete a few Homework
     * const { count } = await prisma.homework.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HomeworkDeleteManyArgs>(args?: SelectSubset<T, HomeworkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeworkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Homework
     * const homework = await prisma.homework.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HomeworkUpdateManyArgs>(args: SelectSubset<T, HomeworkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Homework and returns the data updated in the database.
     * @param {HomeworkUpdateManyAndReturnArgs} args - Arguments to update many Homework.
     * @example
     * // Update many Homework
     * const homework = await prisma.homework.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Homework and only return the `id`
     * const homeworkWithIdOnly = await prisma.homework.updateManyAndReturn({
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
    updateManyAndReturn<T extends HomeworkUpdateManyAndReturnArgs>(args: SelectSubset<T, HomeworkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Homework.
     * @param {HomeworkUpsertArgs} args - Arguments to update or create a Homework.
     * @example
     * // Update or create a Homework
     * const homework = await prisma.homework.upsert({
     *   create: {
     *     // ... data to create a Homework
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Homework we want to update
     *   }
     * })
     */
    upsert<T extends HomeworkUpsertArgs>(args: SelectSubset<T, HomeworkUpsertArgs<ExtArgs>>): Prisma__HomeworkClient<$Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Homework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeworkCountArgs} args - Arguments to filter Homework to count.
     * @example
     * // Count the number of Homework
     * const count = await prisma.homework.count({
     *   where: {
     *     // ... the filter for the Homework we want to count
     *   }
     * })
    **/
    count<T extends HomeworkCountArgs>(
      args?: Subset<T, HomeworkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HomeworkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Homework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeworkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HomeworkAggregateArgs>(args: Subset<T, HomeworkAggregateArgs>): Prisma.PrismaPromise<GetHomeworkAggregateType<T>>

    /**
     * Group by Homework.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HomeworkGroupByArgs} args - Group by arguments.
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
      T extends HomeworkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HomeworkGroupByArgs['orderBy'] }
        : { orderBy?: HomeworkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HomeworkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHomeworkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Homework model
   */
  readonly fields: HomeworkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Homework.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HomeworkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends Homework$studentArgs<ExtArgs> = {}>(args?: Subset<T, Homework$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    studentActivity<T extends Homework$studentActivityArgs<ExtArgs> = {}>(args?: Subset<T, Homework$studentActivityArgs<ExtArgs>>): Prisma__StudentActivityClient<$Result.GetResult<Prisma.$StudentActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Homework model
   */
  interface HomeworkFieldRefs {
    readonly id: FieldRef<"Homework", 'String'>
    readonly studentId: FieldRef<"Homework", 'String'>
    readonly title: FieldRef<"Homework", 'String'>
    readonly description: FieldRef<"Homework", 'String'>
    readonly checked: FieldRef<"Homework", 'Boolean'>
    readonly point: FieldRef<"Homework", 'Int'>
    readonly deadline: FieldRef<"Homework", 'DateTime'>
    readonly createdAt: FieldRef<"Homework", 'DateTime'>
    readonly updatedAt: FieldRef<"Homework", 'DateTime'>
    readonly studentActivityId: FieldRef<"Homework", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Homework findUnique
   */
  export type HomeworkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homework
     */
    select?: HomeworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homework
     */
    omit?: HomeworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeworkInclude<ExtArgs> | null
    /**
     * Filter, which Homework to fetch.
     */
    where: HomeworkWhereUniqueInput
  }

  /**
   * Homework findUniqueOrThrow
   */
  export type HomeworkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homework
     */
    select?: HomeworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homework
     */
    omit?: HomeworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeworkInclude<ExtArgs> | null
    /**
     * Filter, which Homework to fetch.
     */
    where: HomeworkWhereUniqueInput
  }

  /**
   * Homework findFirst
   */
  export type HomeworkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homework
     */
    select?: HomeworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homework
     */
    omit?: HomeworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeworkInclude<ExtArgs> | null
    /**
     * Filter, which Homework to fetch.
     */
    where?: HomeworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homework to fetch.
     */
    orderBy?: HomeworkOrderByWithRelationInput | HomeworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Homework.
     */
    cursor?: HomeworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homework from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homework.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Homework.
     */
    distinct?: HomeworkScalarFieldEnum | HomeworkScalarFieldEnum[]
  }

  /**
   * Homework findFirstOrThrow
   */
  export type HomeworkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homework
     */
    select?: HomeworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homework
     */
    omit?: HomeworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeworkInclude<ExtArgs> | null
    /**
     * Filter, which Homework to fetch.
     */
    where?: HomeworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homework to fetch.
     */
    orderBy?: HomeworkOrderByWithRelationInput | HomeworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Homework.
     */
    cursor?: HomeworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homework from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homework.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Homework.
     */
    distinct?: HomeworkScalarFieldEnum | HomeworkScalarFieldEnum[]
  }

  /**
   * Homework findMany
   */
  export type HomeworkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homework
     */
    select?: HomeworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homework
     */
    omit?: HomeworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeworkInclude<ExtArgs> | null
    /**
     * Filter, which Homework to fetch.
     */
    where?: HomeworkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Homework to fetch.
     */
    orderBy?: HomeworkOrderByWithRelationInput | HomeworkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Homework.
     */
    cursor?: HomeworkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Homework from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Homework.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Homework.
     */
    distinct?: HomeworkScalarFieldEnum | HomeworkScalarFieldEnum[]
  }

  /**
   * Homework create
   */
  export type HomeworkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homework
     */
    select?: HomeworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homework
     */
    omit?: HomeworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeworkInclude<ExtArgs> | null
    /**
     * The data needed to create a Homework.
     */
    data: XOR<HomeworkCreateInput, HomeworkUncheckedCreateInput>
  }

  /**
   * Homework createMany
   */
  export type HomeworkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Homework.
     */
    data: HomeworkCreateManyInput | HomeworkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Homework createManyAndReturn
   */
  export type HomeworkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homework
     */
    select?: HomeworkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Homework
     */
    omit?: HomeworkOmit<ExtArgs> | null
    /**
     * The data used to create many Homework.
     */
    data: HomeworkCreateManyInput | HomeworkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeworkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Homework update
   */
  export type HomeworkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homework
     */
    select?: HomeworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homework
     */
    omit?: HomeworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeworkInclude<ExtArgs> | null
    /**
     * The data needed to update a Homework.
     */
    data: XOR<HomeworkUpdateInput, HomeworkUncheckedUpdateInput>
    /**
     * Choose, which Homework to update.
     */
    where: HomeworkWhereUniqueInput
  }

  /**
   * Homework updateMany
   */
  export type HomeworkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Homework.
     */
    data: XOR<HomeworkUpdateManyMutationInput, HomeworkUncheckedUpdateManyInput>
    /**
     * Filter which Homework to update
     */
    where?: HomeworkWhereInput
    /**
     * Limit how many Homework to update.
     */
    limit?: number
  }

  /**
   * Homework updateManyAndReturn
   */
  export type HomeworkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homework
     */
    select?: HomeworkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Homework
     */
    omit?: HomeworkOmit<ExtArgs> | null
    /**
     * The data used to update Homework.
     */
    data: XOR<HomeworkUpdateManyMutationInput, HomeworkUncheckedUpdateManyInput>
    /**
     * Filter which Homework to update
     */
    where?: HomeworkWhereInput
    /**
     * Limit how many Homework to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeworkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Homework upsert
   */
  export type HomeworkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homework
     */
    select?: HomeworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homework
     */
    omit?: HomeworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeworkInclude<ExtArgs> | null
    /**
     * The filter to search for the Homework to update in case it exists.
     */
    where: HomeworkWhereUniqueInput
    /**
     * In case the Homework found by the `where` argument doesn't exist, create a new Homework with this data.
     */
    create: XOR<HomeworkCreateInput, HomeworkUncheckedCreateInput>
    /**
     * In case the Homework was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HomeworkUpdateInput, HomeworkUncheckedUpdateInput>
  }

  /**
   * Homework delete
   */
  export type HomeworkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homework
     */
    select?: HomeworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homework
     */
    omit?: HomeworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeworkInclude<ExtArgs> | null
    /**
     * Filter which Homework to delete.
     */
    where: HomeworkWhereUniqueInput
  }

  /**
   * Homework deleteMany
   */
  export type HomeworkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Homework to delete
     */
    where?: HomeworkWhereInput
    /**
     * Limit how many Homework to delete.
     */
    limit?: number
  }

  /**
   * Homework.student
   */
  export type Homework$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * Homework.studentActivity
   */
  export type Homework$studentActivityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivity
     */
    select?: StudentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentActivity
     */
    omit?: StudentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentActivityInclude<ExtArgs> | null
    where?: StudentActivityWhereInput
  }

  /**
   * Homework without action
   */
  export type HomeworkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homework
     */
    select?: HomeworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homework
     */
    omit?: HomeworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeworkInclude<ExtArgs> | null
  }


  /**
   * Model StudentActivity
   */

  export type AggregateStudentActivity = {
    _count: StudentActivityCountAggregateOutputType | null
    _min: StudentActivityMinAggregateOutputType | null
    _max: StudentActivityMaxAggregateOutputType | null
  }

  export type StudentActivityMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    rating: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentActivityMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    rating: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentActivityCountAggregateOutputType = {
    id: number
    studentId: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentActivityMinAggregateInputType = {
    id?: true
    studentId?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentActivityMaxAggregateInputType = {
    id?: true
    studentId?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentActivityCountAggregateInputType = {
    id?: true
    studentId?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentActivityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentActivity to aggregate.
     */
    where?: StudentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentActivities to fetch.
     */
    orderBy?: StudentActivityOrderByWithRelationInput | StudentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentActivities
    **/
    _count?: true | StudentActivityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentActivityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentActivityMaxAggregateInputType
  }

  export type GetStudentActivityAggregateType<T extends StudentActivityAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentActivity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentActivity[P]>
      : GetScalarType<T[P], AggregateStudentActivity[P]>
  }




  export type StudentActivityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentActivityWhereInput
    orderBy?: StudentActivityOrderByWithAggregationInput | StudentActivityOrderByWithAggregationInput[]
    by: StudentActivityScalarFieldEnum[] | StudentActivityScalarFieldEnum
    having?: StudentActivityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentActivityCountAggregateInputType | true
    _min?: StudentActivityMinAggregateInputType
    _max?: StudentActivityMaxAggregateInputType
  }

  export type StudentActivityGroupByOutputType = {
    id: string
    studentId: string | null
    rating: string
    createdAt: Date
    updatedAt: Date
    _count: StudentActivityCountAggregateOutputType | null
    _min: StudentActivityMinAggregateOutputType | null
    _max: StudentActivityMaxAggregateOutputType | null
  }

  type GetStudentActivityGroupByPayload<T extends StudentActivityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentActivityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentActivityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentActivityGroupByOutputType[P]>
            : GetScalarType<T[P], StudentActivityGroupByOutputType[P]>
        }
      >
    >


  export type StudentActivitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentActivity$studentArgs<ExtArgs>
    tasks?: boolean | StudentActivity$tasksArgs<ExtArgs>
    _count?: boolean | StudentActivityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentActivity"]>

  export type StudentActivitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentActivity$studentArgs<ExtArgs>
  }, ExtArgs["result"]["studentActivity"]>

  export type StudentActivitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | StudentActivity$studentArgs<ExtArgs>
  }, ExtArgs["result"]["studentActivity"]>

  export type StudentActivitySelectScalar = {
    id?: boolean
    studentId?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentActivityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "rating" | "createdAt" | "updatedAt", ExtArgs["result"]["studentActivity"]>
  export type StudentActivityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentActivity$studentArgs<ExtArgs>
    tasks?: boolean | StudentActivity$tasksArgs<ExtArgs>
    _count?: boolean | StudentActivityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentActivityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentActivity$studentArgs<ExtArgs>
  }
  export type StudentActivityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentActivity$studentArgs<ExtArgs>
  }

  export type $StudentActivityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentActivity"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs> | null
      tasks: Prisma.$HomeworkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string | null
      rating: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentActivity"]>
    composites: {}
  }

  type StudentActivityGetPayload<S extends boolean | null | undefined | StudentActivityDefaultArgs> = $Result.GetResult<Prisma.$StudentActivityPayload, S>

  type StudentActivityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentActivityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentActivityCountAggregateInputType | true
    }

  export interface StudentActivityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentActivity'], meta: { name: 'StudentActivity' } }
    /**
     * Find zero or one StudentActivity that matches the filter.
     * @param {StudentActivityFindUniqueArgs} args - Arguments to find a StudentActivity
     * @example
     * // Get one StudentActivity
     * const studentActivity = await prisma.studentActivity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentActivityFindUniqueArgs>(args: SelectSubset<T, StudentActivityFindUniqueArgs<ExtArgs>>): Prisma__StudentActivityClient<$Result.GetResult<Prisma.$StudentActivityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StudentActivity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentActivityFindUniqueOrThrowArgs} args - Arguments to find a StudentActivity
     * @example
     * // Get one StudentActivity
     * const studentActivity = await prisma.studentActivity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentActivityFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentActivityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentActivityClient<$Result.GetResult<Prisma.$StudentActivityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentActivity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentActivityFindFirstArgs} args - Arguments to find a StudentActivity
     * @example
     * // Get one StudentActivity
     * const studentActivity = await prisma.studentActivity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentActivityFindFirstArgs>(args?: SelectSubset<T, StudentActivityFindFirstArgs<ExtArgs>>): Prisma__StudentActivityClient<$Result.GetResult<Prisma.$StudentActivityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StudentActivity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentActivityFindFirstOrThrowArgs} args - Arguments to find a StudentActivity
     * @example
     * // Get one StudentActivity
     * const studentActivity = await prisma.studentActivity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentActivityFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentActivityFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentActivityClient<$Result.GetResult<Prisma.$StudentActivityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StudentActivities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentActivityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentActivities
     * const studentActivities = await prisma.studentActivity.findMany()
     * 
     * // Get first 10 StudentActivities
     * const studentActivities = await prisma.studentActivity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentActivityWithIdOnly = await prisma.studentActivity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentActivityFindManyArgs>(args?: SelectSubset<T, StudentActivityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentActivityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StudentActivity.
     * @param {StudentActivityCreateArgs} args - Arguments to create a StudentActivity.
     * @example
     * // Create one StudentActivity
     * const StudentActivity = await prisma.studentActivity.create({
     *   data: {
     *     // ... data to create a StudentActivity
     *   }
     * })
     * 
     */
    create<T extends StudentActivityCreateArgs>(args: SelectSubset<T, StudentActivityCreateArgs<ExtArgs>>): Prisma__StudentActivityClient<$Result.GetResult<Prisma.$StudentActivityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StudentActivities.
     * @param {StudentActivityCreateManyArgs} args - Arguments to create many StudentActivities.
     * @example
     * // Create many StudentActivities
     * const studentActivity = await prisma.studentActivity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentActivityCreateManyArgs>(args?: SelectSubset<T, StudentActivityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentActivities and returns the data saved in the database.
     * @param {StudentActivityCreateManyAndReturnArgs} args - Arguments to create many StudentActivities.
     * @example
     * // Create many StudentActivities
     * const studentActivity = await prisma.studentActivity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentActivities and only return the `id`
     * const studentActivityWithIdOnly = await prisma.studentActivity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentActivityCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentActivityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentActivityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StudentActivity.
     * @param {StudentActivityDeleteArgs} args - Arguments to delete one StudentActivity.
     * @example
     * // Delete one StudentActivity
     * const StudentActivity = await prisma.studentActivity.delete({
     *   where: {
     *     // ... filter to delete one StudentActivity
     *   }
     * })
     * 
     */
    delete<T extends StudentActivityDeleteArgs>(args: SelectSubset<T, StudentActivityDeleteArgs<ExtArgs>>): Prisma__StudentActivityClient<$Result.GetResult<Prisma.$StudentActivityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StudentActivity.
     * @param {StudentActivityUpdateArgs} args - Arguments to update one StudentActivity.
     * @example
     * // Update one StudentActivity
     * const studentActivity = await prisma.studentActivity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentActivityUpdateArgs>(args: SelectSubset<T, StudentActivityUpdateArgs<ExtArgs>>): Prisma__StudentActivityClient<$Result.GetResult<Prisma.$StudentActivityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StudentActivities.
     * @param {StudentActivityDeleteManyArgs} args - Arguments to filter StudentActivities to delete.
     * @example
     * // Delete a few StudentActivities
     * const { count } = await prisma.studentActivity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentActivityDeleteManyArgs>(args?: SelectSubset<T, StudentActivityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentActivityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentActivities
     * const studentActivity = await prisma.studentActivity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentActivityUpdateManyArgs>(args: SelectSubset<T, StudentActivityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentActivities and returns the data updated in the database.
     * @param {StudentActivityUpdateManyAndReturnArgs} args - Arguments to update many StudentActivities.
     * @example
     * // Update many StudentActivities
     * const studentActivity = await prisma.studentActivity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StudentActivities and only return the `id`
     * const studentActivityWithIdOnly = await prisma.studentActivity.updateManyAndReturn({
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
    updateManyAndReturn<T extends StudentActivityUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentActivityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentActivityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StudentActivity.
     * @param {StudentActivityUpsertArgs} args - Arguments to update or create a StudentActivity.
     * @example
     * // Update or create a StudentActivity
     * const studentActivity = await prisma.studentActivity.upsert({
     *   create: {
     *     // ... data to create a StudentActivity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentActivity we want to update
     *   }
     * })
     */
    upsert<T extends StudentActivityUpsertArgs>(args: SelectSubset<T, StudentActivityUpsertArgs<ExtArgs>>): Prisma__StudentActivityClient<$Result.GetResult<Prisma.$StudentActivityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StudentActivities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentActivityCountArgs} args - Arguments to filter StudentActivities to count.
     * @example
     * // Count the number of StudentActivities
     * const count = await prisma.studentActivity.count({
     *   where: {
     *     // ... the filter for the StudentActivities we want to count
     *   }
     * })
    **/
    count<T extends StudentActivityCountArgs>(
      args?: Subset<T, StudentActivityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentActivityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentActivityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentActivityAggregateArgs>(args: Subset<T, StudentActivityAggregateArgs>): Prisma.PrismaPromise<GetStudentActivityAggregateType<T>>

    /**
     * Group by StudentActivity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentActivityGroupByArgs} args - Group by arguments.
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
      T extends StudentActivityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentActivityGroupByArgs['orderBy'] }
        : { orderBy?: StudentActivityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentActivityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentActivityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentActivity model
   */
  readonly fields: StudentActivityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentActivity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentActivityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentActivity$studentArgs<ExtArgs> = {}>(args?: Subset<T, StudentActivity$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tasks<T extends StudentActivity$tasksArgs<ExtArgs> = {}>(args?: Subset<T, StudentActivity$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HomeworkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the StudentActivity model
   */
  interface StudentActivityFieldRefs {
    readonly id: FieldRef<"StudentActivity", 'String'>
    readonly studentId: FieldRef<"StudentActivity", 'String'>
    readonly rating: FieldRef<"StudentActivity", 'String'>
    readonly createdAt: FieldRef<"StudentActivity", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentActivity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentActivity findUnique
   */
  export type StudentActivityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivity
     */
    select?: StudentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentActivity
     */
    omit?: StudentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentActivityInclude<ExtArgs> | null
    /**
     * Filter, which StudentActivity to fetch.
     */
    where: StudentActivityWhereUniqueInput
  }

  /**
   * StudentActivity findUniqueOrThrow
   */
  export type StudentActivityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivity
     */
    select?: StudentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentActivity
     */
    omit?: StudentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentActivityInclude<ExtArgs> | null
    /**
     * Filter, which StudentActivity to fetch.
     */
    where: StudentActivityWhereUniqueInput
  }

  /**
   * StudentActivity findFirst
   */
  export type StudentActivityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivity
     */
    select?: StudentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentActivity
     */
    omit?: StudentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentActivityInclude<ExtArgs> | null
    /**
     * Filter, which StudentActivity to fetch.
     */
    where?: StudentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentActivities to fetch.
     */
    orderBy?: StudentActivityOrderByWithRelationInput | StudentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentActivities.
     */
    cursor?: StudentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentActivities.
     */
    distinct?: StudentActivityScalarFieldEnum | StudentActivityScalarFieldEnum[]
  }

  /**
   * StudentActivity findFirstOrThrow
   */
  export type StudentActivityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivity
     */
    select?: StudentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentActivity
     */
    omit?: StudentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentActivityInclude<ExtArgs> | null
    /**
     * Filter, which StudentActivity to fetch.
     */
    where?: StudentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentActivities to fetch.
     */
    orderBy?: StudentActivityOrderByWithRelationInput | StudentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentActivities.
     */
    cursor?: StudentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentActivities.
     */
    distinct?: StudentActivityScalarFieldEnum | StudentActivityScalarFieldEnum[]
  }

  /**
   * StudentActivity findMany
   */
  export type StudentActivityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivity
     */
    select?: StudentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentActivity
     */
    omit?: StudentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentActivityInclude<ExtArgs> | null
    /**
     * Filter, which StudentActivities to fetch.
     */
    where?: StudentActivityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentActivities to fetch.
     */
    orderBy?: StudentActivityOrderByWithRelationInput | StudentActivityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentActivities.
     */
    cursor?: StudentActivityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentActivities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentActivities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentActivities.
     */
    distinct?: StudentActivityScalarFieldEnum | StudentActivityScalarFieldEnum[]
  }

  /**
   * StudentActivity create
   */
  export type StudentActivityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivity
     */
    select?: StudentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentActivity
     */
    omit?: StudentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentActivityInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentActivity.
     */
    data: XOR<StudentActivityCreateInput, StudentActivityUncheckedCreateInput>
  }

  /**
   * StudentActivity createMany
   */
  export type StudentActivityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentActivities.
     */
    data: StudentActivityCreateManyInput | StudentActivityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentActivity createManyAndReturn
   */
  export type StudentActivityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivity
     */
    select?: StudentActivitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentActivity
     */
    omit?: StudentActivityOmit<ExtArgs> | null
    /**
     * The data used to create many StudentActivities.
     */
    data: StudentActivityCreateManyInput | StudentActivityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentActivityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentActivity update
   */
  export type StudentActivityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivity
     */
    select?: StudentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentActivity
     */
    omit?: StudentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentActivityInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentActivity.
     */
    data: XOR<StudentActivityUpdateInput, StudentActivityUncheckedUpdateInput>
    /**
     * Choose, which StudentActivity to update.
     */
    where: StudentActivityWhereUniqueInput
  }

  /**
   * StudentActivity updateMany
   */
  export type StudentActivityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentActivities.
     */
    data: XOR<StudentActivityUpdateManyMutationInput, StudentActivityUncheckedUpdateManyInput>
    /**
     * Filter which StudentActivities to update
     */
    where?: StudentActivityWhereInput
    /**
     * Limit how many StudentActivities to update.
     */
    limit?: number
  }

  /**
   * StudentActivity updateManyAndReturn
   */
  export type StudentActivityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivity
     */
    select?: StudentActivitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StudentActivity
     */
    omit?: StudentActivityOmit<ExtArgs> | null
    /**
     * The data used to update StudentActivities.
     */
    data: XOR<StudentActivityUpdateManyMutationInput, StudentActivityUncheckedUpdateManyInput>
    /**
     * Filter which StudentActivities to update
     */
    where?: StudentActivityWhereInput
    /**
     * Limit how many StudentActivities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentActivityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentActivity upsert
   */
  export type StudentActivityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivity
     */
    select?: StudentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentActivity
     */
    omit?: StudentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentActivityInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentActivity to update in case it exists.
     */
    where: StudentActivityWhereUniqueInput
    /**
     * In case the StudentActivity found by the `where` argument doesn't exist, create a new StudentActivity with this data.
     */
    create: XOR<StudentActivityCreateInput, StudentActivityUncheckedCreateInput>
    /**
     * In case the StudentActivity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentActivityUpdateInput, StudentActivityUncheckedUpdateInput>
  }

  /**
   * StudentActivity delete
   */
  export type StudentActivityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivity
     */
    select?: StudentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentActivity
     */
    omit?: StudentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentActivityInclude<ExtArgs> | null
    /**
     * Filter which StudentActivity to delete.
     */
    where: StudentActivityWhereUniqueInput
  }

  /**
   * StudentActivity deleteMany
   */
  export type StudentActivityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentActivities to delete
     */
    where?: StudentActivityWhereInput
    /**
     * Limit how many StudentActivities to delete.
     */
    limit?: number
  }

  /**
   * StudentActivity.student
   */
  export type StudentActivity$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * StudentActivity.tasks
   */
  export type StudentActivity$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Homework
     */
    select?: HomeworkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Homework
     */
    omit?: HomeworkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HomeworkInclude<ExtArgs> | null
    where?: HomeworkWhereInput
    orderBy?: HomeworkOrderByWithRelationInput | HomeworkOrderByWithRelationInput[]
    cursor?: HomeworkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HomeworkScalarFieldEnum | HomeworkScalarFieldEnum[]
  }

  /**
   * StudentActivity without action
   */
  export type StudentActivityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentActivity
     */
    select?: StudentActivitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StudentActivity
     */
    omit?: StudentActivityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentActivityInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    points: number | null
  }

  export type QuestionSumAggregateOutputType = {
    points: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    text: string | null
    points: number | null
    answer: string | null
    testId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    text: string | null
    points: number | null
    answer: string | null
    testId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    text: number
    points: number
    options: number
    answer: number
    testId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    points?: true
  }

  export type QuestionSumAggregateInputType = {
    points?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    text?: true
    points?: true
    answer?: true
    testId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    text?: true
    points?: true
    answer?: true
    testId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    text?: true
    points?: true
    options?: true
    answer?: true
    testId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    text: string
    points: number
    options: string[]
    answer: string
    testId: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    points?: boolean
    options?: boolean
    answer?: boolean
    testId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    test?: boolean | Question$testArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    points?: boolean
    options?: boolean
    answer?: boolean
    testId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    test?: boolean | Question$testArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    points?: boolean
    options?: boolean
    answer?: boolean
    testId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    test?: boolean | Question$testArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    text?: boolean
    points?: boolean
    options?: boolean
    answer?: boolean
    testId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text" | "points" | "options" | "answer" | "testId" | "createdAt" | "updatedAt", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | Question$testArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | Question$testArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test?: boolean | Question$testArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      test: Prisma.$TestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
      points: number
      options: string[]
      answer: string
      testId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
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
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    test<T extends Question$testArgs<ExtArgs> = {}>(args?: Subset<T, Question$testArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly points: FieldRef<"Question", 'Int'>
    readonly options: FieldRef<"Question", 'String[]'>
    readonly answer: FieldRef<"Question", 'String'>
    readonly testId: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question.test
   */
  export type Question$testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    allPoints: number | null
  }

  export type TestSumAggregateOutputType = {
    allPoints: number | null
  }

  export type TestMinAggregateOutputType = {
    id: string | null
    title: string | null
    allPoints: number | null
    scheduledDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestMaxAggregateOutputType = {
    id: string | null
    title: string | null
    allPoints: number | null
    scheduledDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TestCountAggregateOutputType = {
    id: number
    title: number
    allPoints: number
    scheduledDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    allPoints?: true
  }

  export type TestSumAggregateInputType = {
    allPoints?: true
  }

  export type TestMinAggregateInputType = {
    id?: true
    title?: true
    allPoints?: true
    scheduledDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestMaxAggregateInputType = {
    id?: true
    title?: true
    allPoints?: true
    scheduledDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TestCountAggregateInputType = {
    id?: true
    title?: true
    allPoints?: true
    scheduledDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test to aggregate.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TestWhereInput
    orderBy?: TestOrderByWithAggregationInput | TestOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: TestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    id: string
    title: string
    allPoints: number
    scheduledDate: Date
    createdAt: Date
    updatedAt: Date
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type TestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    allPoints?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | Test$questionsArgs<ExtArgs>
    submissions?: boolean | Test$submissionsArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test"]>

  export type TestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    allPoints?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    allPoints?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["test"]>

  export type TestSelectScalar = {
    id?: boolean
    title?: boolean
    allPoints?: boolean
    scheduledDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "allPoints" | "scheduledDate" | "createdAt" | "updatedAt", ExtArgs["result"]["test"]>
  export type TestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Test$questionsArgs<ExtArgs>
    submissions?: boolean | Test$submissionsArgs<ExtArgs>
    _count?: boolean | TestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      allPoints: number
      scheduledDate: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["test"]>
    composites: {}
  }

  type TestGetPayload<S extends boolean | null | undefined | TestDefaultArgs> = $Result.GetResult<Prisma.$TestPayload, S>

  type TestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface TestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test'], meta: { name: 'Test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {TestFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TestFindUniqueArgs>(args: SelectSubset<T, TestFindUniqueArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TestFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TestFindUniqueOrThrowArgs>(args: SelectSubset<T, TestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TestFindFirstArgs>(args?: SelectSubset<T, TestFindFirstArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TestFindFirstOrThrowArgs>(args?: SelectSubset<T, TestFindFirstOrThrowArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const testWithIdOnly = await prisma.test.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TestFindManyArgs>(args?: SelectSubset<T, TestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test.
     * @param {TestCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
     */
    create<T extends TestCreateArgs>(args: SelectSubset<T, TestCreateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tests.
     * @param {TestCreateManyArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TestCreateManyArgs>(args?: SelectSubset<T, TestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tests and returns the data saved in the database.
     * @param {TestCreateManyAndReturnArgs} args - Arguments to create many Tests.
     * @example
     * // Create many Tests
     * const test = await prisma.test.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TestCreateManyAndReturnArgs>(args?: SelectSubset<T, TestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test.
     * @param {TestDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
     */
    delete<T extends TestDeleteArgs>(args: SelectSubset<T, TestDeleteArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test.
     * @param {TestUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TestUpdateArgs>(args: SelectSubset<T, TestUpdateArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tests.
     * @param {TestDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TestDeleteManyArgs>(args?: SelectSubset<T, TestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TestUpdateManyArgs>(args: SelectSubset<T, TestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests and returns the data updated in the database.
     * @param {TestUpdateManyAndReturnArgs} args - Arguments to update many Tests.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tests and only return the `id`
     * const testWithIdOnly = await prisma.test.updateManyAndReturn({
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
    updateManyAndReturn<T extends TestUpdateManyAndReturnArgs>(args: SelectSubset<T, TestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test.
     * @param {TestUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
     */
    upsert<T extends TestUpsertArgs>(args: SelectSubset<T, TestUpsertArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends TestCountArgs>(
      args?: Subset<T, TestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
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
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test model
   */
  readonly fields: TestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Test$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Test$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends Test$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Test$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Test model
   */
  interface TestFieldRefs {
    readonly id: FieldRef<"Test", 'String'>
    readonly title: FieldRef<"Test", 'String'>
    readonly allPoints: FieldRef<"Test", 'Int'>
    readonly scheduledDate: FieldRef<"Test", 'DateTime'>
    readonly createdAt: FieldRef<"Test", 'DateTime'>
    readonly updatedAt: FieldRef<"Test", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Test findUnique
   */
  export type TestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findUniqueOrThrow
   */
  export type TestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test findFirst
   */
  export type TestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findFirstOrThrow
   */
  export type TestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Test to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test findMany
   */
  export type TestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter, which Tests to fetch.
     */
    where?: TestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tests to fetch.
     */
    orderBy?: TestOrderByWithRelationInput | TestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tests.
     */
    cursor?: TestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * Test create
   */
  export type TestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to create a Test.
     */
    data: XOR<TestCreateInput, TestUncheckedCreateInput>
  }

  /**
   * Test createMany
   */
  export type TestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test createManyAndReturn
   */
  export type TestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to create many Tests.
     */
    data: TestCreateManyInput | TestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test update
   */
  export type TestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The data needed to update a Test.
     */
    data: XOR<TestUpdateInput, TestUncheckedUpdateInput>
    /**
     * Choose, which Test to update.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test updateMany
   */
  export type TestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test updateManyAndReturn
   */
  export type TestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * The data used to update Tests.
     */
    data: XOR<TestUpdateManyMutationInput, TestUncheckedUpdateManyInput>
    /**
     * Filter which Tests to update
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to update.
     */
    limit?: number
  }

  /**
   * Test upsert
   */
  export type TestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * The filter to search for the Test to update in case it exists.
     */
    where: TestWhereUniqueInput
    /**
     * In case the Test found by the `where` argument doesn't exist, create a new Test with this data.
     */
    create: XOR<TestCreateInput, TestUncheckedCreateInput>
    /**
     * In case the Test was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TestUpdateInput, TestUncheckedUpdateInput>
  }

  /**
   * Test delete
   */
  export type TestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    /**
     * Filter which Test to delete.
     */
    where: TestWhereUniqueInput
  }

  /**
   * Test deleteMany
   */
  export type TestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tests to delete
     */
    where?: TestWhereInput
    /**
     * Limit how many Tests to delete.
     */
    limit?: number
  }

  /**
   * Test.questions
   */
  export type Test$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Test.submissions
   */
  export type Test$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Test without action
   */
  export type TestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    score: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    score: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    testId: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    testId: string | null
    score: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    studentId: number
    testId: number
    score: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    score?: true
  }

  export type SubmissionSumAggregateInputType = {
    score?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    studentId?: true
    testId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    studentId?: true
    testId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    studentId?: true
    testId?: true
    score?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    studentId: string | null
    testId: string
    score: number
    createdAt: Date
    updatedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    testId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | Submission$studentArgs<ExtArgs>
    test?: boolean | Submission$testArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    testId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | Submission$studentArgs<ExtArgs>
    test?: boolean | Submission$testArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    testId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    student?: boolean | Submission$studentArgs<ExtArgs>
    test?: boolean | Submission$testArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    studentId?: boolean
    testId?: boolean
    score?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "testId" | "score" | "createdAt" | "updatedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | Submission$studentArgs<ExtArgs>
    test?: boolean | Submission$testArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | Submission$studentArgs<ExtArgs>
    test?: boolean | Submission$testArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | Submission$studentArgs<ExtArgs>
    test?: boolean | Submission$testArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs> | null
      test: Prisma.$TestPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string | null
      testId: string
      score: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends Submission$studentArgs<ExtArgs> = {}>(args?: Subset<T, Submission$studentArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    test<T extends Submission$testArgs<ExtArgs> = {}>(args?: Subset<T, Submission$testArgs<ExtArgs>>): Prisma__TestClient<$Result.GetResult<Prisma.$TestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly studentId: FieldRef<"Submission", 'String'>
    readonly testId: FieldRef<"Submission", 'String'>
    readonly score: FieldRef<"Submission", 'Int'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.student
   */
  export type Submission$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
  }

  /**
   * Submission.test
   */
  export type Submission$testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test
     */
    select?: TestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test
     */
    omit?: TestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TestInclude<ExtArgs> | null
    where?: TestWhereInput
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
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


  export const StudentScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    password: 'password',
    email: 'email',
    username: 'username',
    parentNumber: 'parentNumber',
    groupId: 'groupId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    pictureUrl: 'pictureUrl',
    videoId: 'videoId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    url: 'url'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    courseId: 'courseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const CourseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum]


  export const HomeworkScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    title: 'title',
    description: 'description',
    checked: 'checked',
    point: 'point',
    deadline: 'deadline',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    studentActivityId: 'studentActivityId'
  };

  export type HomeworkScalarFieldEnum = (typeof HomeworkScalarFieldEnum)[keyof typeof HomeworkScalarFieldEnum]


  export const StudentActivityScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentActivityScalarFieldEnum = (typeof StudentActivityScalarFieldEnum)[keyof typeof StudentActivityScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    text: 'text',
    points: 'points',
    options: 'options',
    answer: 'answer',
    testId: 'testId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const TestScalarFieldEnum: {
    id: 'id',
    title: 'title',
    allPoints: 'allPoints',
    scheduledDate: 'scheduledDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    testId: 'testId',
    score: 'score',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    fullName?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    username?: StringNullableFilter<"Student"> | string | null
    parentNumber?: StringFilter<"Student"> | string
    groupId?: StringNullableFilter<"Student"> | string | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    homework?: HomeworkListRelationFilter
    studentActivities?: StudentActivityListRelationFilter
    submits?: SubmissionListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    parentNumber?: SortOrder
    groupId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    group?: GroupOrderByWithRelationInput
    homework?: HomeworkOrderByRelationAggregateInput
    studentActivities?: StudentActivityOrderByRelationAggregateInput
    submits?: SubmissionOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    fullName?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    username?: StringNullableFilter<"Student"> | string | null
    parentNumber?: StringFilter<"Student"> | string
    groupId?: StringNullableFilter<"Student"> | string | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    group?: XOR<GroupNullableScalarRelationFilter, GroupWhereInput> | null
    homework?: HomeworkListRelationFilter
    studentActivities?: StudentActivityListRelationFilter
    submits?: SubmissionListRelationFilter
  }, "id">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    username?: SortOrderInput | SortOrder
    parentNumber?: SortOrder
    groupId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    fullName?: StringWithAggregatesFilter<"Student"> | string
    password?: StringWithAggregatesFilter<"Student"> | string
    email?: StringWithAggregatesFilter<"Student"> | string
    username?: StringNullableWithAggregatesFilter<"Student"> | string | null
    parentNumber?: StringWithAggregatesFilter<"Student"> | string
    groupId?: StringNullableWithAggregatesFilter<"Student"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    id?: StringFilter<"News"> | string
    title?: StringFilter<"News"> | string
    description?: StringFilter<"News"> | string
    pictureUrl?: StringNullableFilter<"News"> | string | null
    videoId?: StringNullableFilter<"News"> | string | null
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    url?: StringNullableFilter<"News"> | string | null
  }

  export type NewsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    videoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrderInput | SortOrder
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    title?: StringFilter<"News"> | string
    description?: StringFilter<"News"> | string
    pictureUrl?: StringNullableFilter<"News"> | string | null
    videoId?: StringNullableFilter<"News"> | string | null
    createdAt?: DateTimeFilter<"News"> | Date | string
    updatedAt?: DateTimeFilter<"News"> | Date | string
    url?: StringNullableFilter<"News"> | string | null
  }, "id">

  export type NewsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    videoId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrderInput | SortOrder
    _count?: NewsCountOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"News"> | string
    title?: StringWithAggregatesFilter<"News"> | string
    description?: StringWithAggregatesFilter<"News"> | string
    pictureUrl?: StringNullableWithAggregatesFilter<"News"> | string | null
    videoId?: StringNullableWithAggregatesFilter<"News"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"News"> | Date | string
    url?: StringNullableWithAggregatesFilter<"News"> | string | null
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    courseId?: StringNullableFilter<"Group"> | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
    students?: StudentListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    course?: CourseOrderByWithRelationInput
    students?: StudentOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    name?: StringFilter<"Group"> | string
    courseId?: StringNullableFilter<"Group"> | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
    course?: XOR<CourseNullableScalarRelationFilter, CourseWhereInput> | null
    students?: StudentListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Group"> | string
    name?: StringWithAggregatesFilter<"Group"> | string
    courseId?: StringNullableWithAggregatesFilter<"Group"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Group"> | Date | string
  }

  export type CourseWhereInput = {
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    id?: StringFilter<"Course"> | string
    name?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    groups?: GroupListRelationFilter
  }

  export type CourseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    groups?: GroupOrderByRelationAggregateInput
  }

  export type CourseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourseWhereInput | CourseWhereInput[]
    OR?: CourseWhereInput[]
    NOT?: CourseWhereInput | CourseWhereInput[]
    name?: StringFilter<"Course"> | string
    description?: StringFilter<"Course"> | string
    createdAt?: DateTimeFilter<"Course"> | Date | string
    updatedAt?: DateTimeFilter<"Course"> | Date | string
    groups?: GroupListRelationFilter
  }, "id">

  export type CourseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourseCountOrderByAggregateInput
    _max?: CourseMaxOrderByAggregateInput
    _min?: CourseMinOrderByAggregateInput
  }

  export type CourseScalarWhereWithAggregatesInput = {
    AND?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    OR?: CourseScalarWhereWithAggregatesInput[]
    NOT?: CourseScalarWhereWithAggregatesInput | CourseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Course"> | string
    name?: StringWithAggregatesFilter<"Course"> | string
    description?: StringWithAggregatesFilter<"Course"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Course"> | Date | string
  }

  export type HomeworkWhereInput = {
    AND?: HomeworkWhereInput | HomeworkWhereInput[]
    OR?: HomeworkWhereInput[]
    NOT?: HomeworkWhereInput | HomeworkWhereInput[]
    id?: StringFilter<"Homework"> | string
    studentId?: StringNullableFilter<"Homework"> | string | null
    title?: StringFilter<"Homework"> | string
    description?: StringFilter<"Homework"> | string
    checked?: BoolFilter<"Homework"> | boolean
    point?: IntNullableFilter<"Homework"> | number | null
    deadline?: DateTimeFilter<"Homework"> | Date | string
    createdAt?: DateTimeFilter<"Homework"> | Date | string
    updatedAt?: DateTimeFilter<"Homework"> | Date | string
    studentActivityId?: StringNullableFilter<"Homework"> | string | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    studentActivity?: XOR<StudentActivityNullableScalarRelationFilter, StudentActivityWhereInput> | null
  }

  export type HomeworkOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    checked?: SortOrder
    point?: SortOrderInput | SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentActivityId?: SortOrderInput | SortOrder
    student?: StudentOrderByWithRelationInput
    studentActivity?: StudentActivityOrderByWithRelationInput
  }

  export type HomeworkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HomeworkWhereInput | HomeworkWhereInput[]
    OR?: HomeworkWhereInput[]
    NOT?: HomeworkWhereInput | HomeworkWhereInput[]
    studentId?: StringNullableFilter<"Homework"> | string | null
    title?: StringFilter<"Homework"> | string
    description?: StringFilter<"Homework"> | string
    checked?: BoolFilter<"Homework"> | boolean
    point?: IntNullableFilter<"Homework"> | number | null
    deadline?: DateTimeFilter<"Homework"> | Date | string
    createdAt?: DateTimeFilter<"Homework"> | Date | string
    updatedAt?: DateTimeFilter<"Homework"> | Date | string
    studentActivityId?: StringNullableFilter<"Homework"> | string | null
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    studentActivity?: XOR<StudentActivityNullableScalarRelationFilter, StudentActivityWhereInput> | null
  }, "id">

  export type HomeworkOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrderInput | SortOrder
    title?: SortOrder
    description?: SortOrder
    checked?: SortOrder
    point?: SortOrderInput | SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentActivityId?: SortOrderInput | SortOrder
    _count?: HomeworkCountOrderByAggregateInput
    _avg?: HomeworkAvgOrderByAggregateInput
    _max?: HomeworkMaxOrderByAggregateInput
    _min?: HomeworkMinOrderByAggregateInput
    _sum?: HomeworkSumOrderByAggregateInput
  }

  export type HomeworkScalarWhereWithAggregatesInput = {
    AND?: HomeworkScalarWhereWithAggregatesInput | HomeworkScalarWhereWithAggregatesInput[]
    OR?: HomeworkScalarWhereWithAggregatesInput[]
    NOT?: HomeworkScalarWhereWithAggregatesInput | HomeworkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Homework"> | string
    studentId?: StringNullableWithAggregatesFilter<"Homework"> | string | null
    title?: StringWithAggregatesFilter<"Homework"> | string
    description?: StringWithAggregatesFilter<"Homework"> | string
    checked?: BoolWithAggregatesFilter<"Homework"> | boolean
    point?: IntNullableWithAggregatesFilter<"Homework"> | number | null
    deadline?: DateTimeWithAggregatesFilter<"Homework"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Homework"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Homework"> | Date | string
    studentActivityId?: StringNullableWithAggregatesFilter<"Homework"> | string | null
  }

  export type StudentActivityWhereInput = {
    AND?: StudentActivityWhereInput | StudentActivityWhereInput[]
    OR?: StudentActivityWhereInput[]
    NOT?: StudentActivityWhereInput | StudentActivityWhereInput[]
    id?: StringFilter<"StudentActivity"> | string
    studentId?: StringNullableFilter<"StudentActivity"> | string | null
    rating?: StringFilter<"StudentActivity"> | string
    createdAt?: DateTimeFilter<"StudentActivity"> | Date | string
    updatedAt?: DateTimeFilter<"StudentActivity"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    tasks?: HomeworkListRelationFilter
  }

  export type StudentActivityOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrderInput | SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    tasks?: HomeworkOrderByRelationAggregateInput
  }

  export type StudentActivityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentActivityWhereInput | StudentActivityWhereInput[]
    OR?: StudentActivityWhereInput[]
    NOT?: StudentActivityWhereInput | StudentActivityWhereInput[]
    studentId?: StringNullableFilter<"StudentActivity"> | string | null
    rating?: StringFilter<"StudentActivity"> | string
    createdAt?: DateTimeFilter<"StudentActivity"> | Date | string
    updatedAt?: DateTimeFilter<"StudentActivity"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    tasks?: HomeworkListRelationFilter
  }, "id">

  export type StudentActivityOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrderInput | SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentActivityCountOrderByAggregateInput
    _max?: StudentActivityMaxOrderByAggregateInput
    _min?: StudentActivityMinOrderByAggregateInput
  }

  export type StudentActivityScalarWhereWithAggregatesInput = {
    AND?: StudentActivityScalarWhereWithAggregatesInput | StudentActivityScalarWhereWithAggregatesInput[]
    OR?: StudentActivityScalarWhereWithAggregatesInput[]
    NOT?: StudentActivityScalarWhereWithAggregatesInput | StudentActivityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentActivity"> | string
    studentId?: StringNullableWithAggregatesFilter<"StudentActivity"> | string | null
    rating?: StringWithAggregatesFilter<"StudentActivity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StudentActivity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentActivity"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    points?: IntFilter<"Question"> | number
    options?: StringNullableListFilter<"Question">
    answer?: StringFilter<"Question"> | string
    testId?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    test?: XOR<TestNullableScalarRelationFilter, TestWhereInput> | null
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    points?: SortOrder
    options?: SortOrder
    answer?: SortOrder
    testId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    test?: TestOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    text?: StringFilter<"Question"> | string
    points?: IntFilter<"Question"> | number
    options?: StringNullableListFilter<"Question">
    answer?: StringFilter<"Question"> | string
    testId?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    test?: XOR<TestNullableScalarRelationFilter, TestWhereInput> | null
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    points?: SortOrder
    options?: SortOrder
    answer?: SortOrder
    testId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    points?: IntWithAggregatesFilter<"Question"> | number
    options?: StringNullableListFilter<"Question">
    answer?: StringWithAggregatesFilter<"Question"> | string
    testId?: StringNullableWithAggregatesFilter<"Question"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type TestWhereInput = {
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    id?: StringFilter<"Test"> | string
    title?: StringFilter<"Test"> | string
    allPoints?: IntFilter<"Test"> | number
    scheduledDate?: DateTimeFilter<"Test"> | Date | string
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
    questions?: QuestionListRelationFilter
    submissions?: SubmissionListRelationFilter
  }

  export type TestOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    allPoints?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type TestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    scheduledDate?: Date | string
    AND?: TestWhereInput | TestWhereInput[]
    OR?: TestWhereInput[]
    NOT?: TestWhereInput | TestWhereInput[]
    title?: StringFilter<"Test"> | string
    allPoints?: IntFilter<"Test"> | number
    createdAt?: DateTimeFilter<"Test"> | Date | string
    updatedAt?: DateTimeFilter<"Test"> | Date | string
    questions?: QuestionListRelationFilter
    submissions?: SubmissionListRelationFilter
  }, "id" | "scheduledDate">

  export type TestOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    allPoints?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TestCountOrderByAggregateInput
    _avg?: TestAvgOrderByAggregateInput
    _max?: TestMaxOrderByAggregateInput
    _min?: TestMinOrderByAggregateInput
    _sum?: TestSumOrderByAggregateInput
  }

  export type TestScalarWhereWithAggregatesInput = {
    AND?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    OR?: TestScalarWhereWithAggregatesInput[]
    NOT?: TestScalarWhereWithAggregatesInput | TestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Test"> | string
    title?: StringWithAggregatesFilter<"Test"> | string
    allPoints?: IntWithAggregatesFilter<"Test"> | number
    scheduledDate?: DateTimeWithAggregatesFilter<"Test"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Test"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    studentId?: StringNullableFilter<"Submission"> | string | null
    testId?: StringFilter<"Submission"> | string
    score?: IntFilter<"Submission"> | number
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    test?: XOR<TestNullableScalarRelationFilter, TestWhereInput> | null
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrderInput | SortOrder
    testId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
    test?: TestOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    studentId?: StringNullableFilter<"Submission"> | string | null
    testId?: StringFilter<"Submission"> | string
    score?: IntFilter<"Submission"> | number
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    student?: XOR<StudentNullableScalarRelationFilter, StudentWhereInput> | null
    test?: XOR<TestNullableScalarRelationFilter, TestWhereInput> | null
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrderInput | SortOrder
    testId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    studentId?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    testId?: StringWithAggregatesFilter<"Submission"> | string
    score?: IntWithAggregatesFilter<"Submission"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    fullName: string
    password: string
    email: string
    username?: string | null
    parentNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutStudentsInput
    homework?: HomeworkCreateNestedManyWithoutStudentInput
    studentActivities?: StudentActivityCreateNestedManyWithoutStudentInput
    submits?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    fullName: string
    password: string
    email: string
    username?: string | null
    parentNumber: string
    groupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    homework?: HomeworkUncheckedCreateNestedManyWithoutStudentInput
    studentActivities?: StudentActivityUncheckedCreateNestedManyWithoutStudentInput
    submits?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    parentNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutStudentsNestedInput
    homework?: HomeworkUpdateManyWithoutStudentNestedInput
    studentActivities?: StudentActivityUpdateManyWithoutStudentNestedInput
    submits?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    parentNumber?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homework?: HomeworkUncheckedUpdateManyWithoutStudentNestedInput
    studentActivities?: StudentActivityUncheckedUpdateManyWithoutStudentNestedInput
    submits?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    fullName: string
    password: string
    email: string
    username?: string | null
    parentNumber: string
    groupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    parentNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    parentNumber?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsCreateInput = {
    id?: string
    title: string
    description: string
    pictureUrl?: string | null
    videoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    url?: string | null
  }

  export type NewsUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    pictureUrl?: string | null
    videoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    url?: string | null
  }

  export type NewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsCreateManyInput = {
    id?: string
    title: string
    description: string
    pictureUrl?: string | null
    videoId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    url?: string | null
  }

  export type NewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GroupCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course?: CourseCreateNestedOneWithoutGroupsInput
    students?: StudentCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: string
    name: string
    courseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneWithoutGroupsNestedInput
    students?: StudentUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: string
    name: string
    courseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupCreateNestedManyWithoutCourseInput
  }

  export type CourseUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    groups?: GroupUncheckedCreateNestedManyWithoutCourseInput
  }

  export type CourseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUpdateManyWithoutCourseNestedInput
  }

  export type CourseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    groups?: GroupUncheckedUpdateManyWithoutCourseNestedInput
  }

  export type CourseCreateManyInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeworkCreateInput = {
    id?: string
    title: string
    description: string
    checked?: boolean
    point?: number | null
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutHomeworkInput
    studentActivity?: StudentActivityCreateNestedOneWithoutTasksInput
  }

  export type HomeworkUncheckedCreateInput = {
    id?: string
    studentId?: string | null
    title: string
    description: string
    checked?: boolean
    point?: number | null
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentActivityId?: string | null
  }

  export type HomeworkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutHomeworkNestedInput
    studentActivity?: StudentActivityUpdateOneWithoutTasksNestedInput
  }

  export type HomeworkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentActivityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HomeworkCreateManyInput = {
    id?: string
    studentId?: string | null
    title: string
    description: string
    checked?: boolean
    point?: number | null
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentActivityId?: string | null
  }

  export type HomeworkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeworkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentActivityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentActivityCreateInput = {
    id?: string
    rating: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutStudentActivitiesInput
    tasks?: HomeworkCreateNestedManyWithoutStudentActivityInput
  }

  export type StudentActivityUncheckedCreateInput = {
    id?: string
    studentId?: string | null
    rating: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: HomeworkUncheckedCreateNestedManyWithoutStudentActivityInput
  }

  export type StudentActivityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutStudentActivitiesNestedInput
    tasks?: HomeworkUpdateManyWithoutStudentActivityNestedInput
  }

  export type StudentActivityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: HomeworkUncheckedUpdateManyWithoutStudentActivityNestedInput
  }

  export type StudentActivityCreateManyInput = {
    id?: string
    studentId?: string | null
    rating: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentActivityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentActivityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    text: string
    points: number
    options?: QuestionCreateoptionsInput | string[]
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
    test?: TestCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    text: string
    points: number
    options?: QuestionCreateoptionsInput | string[]
    answer: string
    testId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    options?: QuestionUpdateoptionsInput | string[]
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    options?: QuestionUpdateoptionsInput | string[]
    answer?: StringFieldUpdateOperationsInput | string
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyInput = {
    id?: string
    text: string
    points: number
    options?: QuestionCreateoptionsInput | string[]
    answer: string
    testId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    options?: QuestionUpdateoptionsInput | string[]
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    options?: QuestionUpdateoptionsInput | string[]
    answer?: StringFieldUpdateOperationsInput | string
    testId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestCreateInput = {
    id?: string
    title: string
    allPoints?: number
    scheduledDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutTestInput
    submissions?: SubmissionCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateInput = {
    id?: string
    title: string
    allPoints?: number
    scheduledDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutTestInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allPoints?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutTestNestedInput
    submissions?: SubmissionUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allPoints?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutTestNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutTestNestedInput
  }

  export type TestCreateManyInput = {
    id?: string
    title: string
    allPoints?: number
    scheduledDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allPoints?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allPoints?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutSubmitsInput
    test?: TestCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    studentId?: string | null
    testId: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutSubmitsNestedInput
    test?: TestUpdateOneWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    testId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyInput = {
    id?: string
    studentId?: string | null
    testId: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    testId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type GroupNullableScalarRelationFilter = {
    is?: GroupWhereInput | null
    isNot?: GroupWhereInput | null
  }

  export type HomeworkListRelationFilter = {
    every?: HomeworkWhereInput
    some?: HomeworkWhereInput
    none?: HomeworkWhereInput
  }

  export type StudentActivityListRelationFilter = {
    every?: StudentActivityWhereInput
    some?: StudentActivityWhereInput
    none?: StudentActivityWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type HomeworkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentActivityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    username?: SortOrder
    parentNumber?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    username?: SortOrder
    parentNumber?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    username?: SortOrder
    parentNumber?: SortOrder
    groupId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NewsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pictureUrl?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pictureUrl?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    pictureUrl?: SortOrder
    videoId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    url?: SortOrder
  }

  export type CourseNullableScalarRelationFilter = {
    is?: CourseWhereInput | null
    isNot?: CourseWhereInput | null
  }

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    courseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GroupListRelationFilter = {
    every?: GroupWhereInput
    some?: GroupWhereInput
    none?: GroupWhereInput
  }

  export type GroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StudentNullableScalarRelationFilter = {
    is?: StudentWhereInput | null
    isNot?: StudentWhereInput | null
  }

  export type StudentActivityNullableScalarRelationFilter = {
    is?: StudentActivityWhereInput | null
    isNot?: StudentActivityWhereInput | null
  }

  export type HomeworkCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    checked?: SortOrder
    point?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentActivityId?: SortOrder
  }

  export type HomeworkAvgOrderByAggregateInput = {
    point?: SortOrder
  }

  export type HomeworkMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    checked?: SortOrder
    point?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentActivityId?: SortOrder
  }

  export type HomeworkMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    checked?: SortOrder
    point?: SortOrder
    deadline?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    studentActivityId?: SortOrder
  }

  export type HomeworkSumOrderByAggregateInput = {
    point?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type StudentActivityCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentActivityMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentActivityMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type TestNullableScalarRelationFilter = {
    is?: TestWhereInput | null
    isNot?: TestWhereInput | null
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    points?: SortOrder
    options?: SortOrder
    answer?: SortOrder
    testId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    points?: SortOrder
    answer?: SortOrder
    testId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
    points?: SortOrder
    answer?: SortOrder
    testId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    points?: SortOrder
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

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TestCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    allPoints?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestAvgOrderByAggregateInput = {
    allPoints?: SortOrder
  }

  export type TestMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    allPoints?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    allPoints?: SortOrder
    scheduledDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TestSumOrderByAggregateInput = {
    allPoints?: SortOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    testId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    testId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    testId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type GroupCreateNestedOneWithoutStudentsInput = {
    create?: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStudentsInput
    connect?: GroupWhereUniqueInput
  }

  export type HomeworkCreateNestedManyWithoutStudentInput = {
    create?: XOR<HomeworkCreateWithoutStudentInput, HomeworkUncheckedCreateWithoutStudentInput> | HomeworkCreateWithoutStudentInput[] | HomeworkUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: HomeworkCreateOrConnectWithoutStudentInput | HomeworkCreateOrConnectWithoutStudentInput[]
    createMany?: HomeworkCreateManyStudentInputEnvelope
    connect?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
  }

  export type StudentActivityCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentActivityCreateWithoutStudentInput, StudentActivityUncheckedCreateWithoutStudentInput> | StudentActivityCreateWithoutStudentInput[] | StudentActivityUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentActivityCreateOrConnectWithoutStudentInput | StudentActivityCreateOrConnectWithoutStudentInput[]
    createMany?: StudentActivityCreateManyStudentInputEnvelope
    connect?: StudentActivityWhereUniqueInput | StudentActivityWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type HomeworkUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<HomeworkCreateWithoutStudentInput, HomeworkUncheckedCreateWithoutStudentInput> | HomeworkCreateWithoutStudentInput[] | HomeworkUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: HomeworkCreateOrConnectWithoutStudentInput | HomeworkCreateOrConnectWithoutStudentInput[]
    createMany?: HomeworkCreateManyStudentInputEnvelope
    connect?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
  }

  export type StudentActivityUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentActivityCreateWithoutStudentInput, StudentActivityUncheckedCreateWithoutStudentInput> | StudentActivityCreateWithoutStudentInput[] | StudentActivityUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentActivityCreateOrConnectWithoutStudentInput | StudentActivityCreateOrConnectWithoutStudentInput[]
    createMany?: StudentActivityCreateManyStudentInputEnvelope
    connect?: StudentActivityWhereUniqueInput | StudentActivityWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutStudentsInput
    upsert?: GroupUpsertWithoutStudentsInput
    disconnect?: GroupWhereInput | boolean
    delete?: GroupWhereInput | boolean
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutStudentsInput, GroupUpdateWithoutStudentsInput>, GroupUncheckedUpdateWithoutStudentsInput>
  }

  export type HomeworkUpdateManyWithoutStudentNestedInput = {
    create?: XOR<HomeworkCreateWithoutStudentInput, HomeworkUncheckedCreateWithoutStudentInput> | HomeworkCreateWithoutStudentInput[] | HomeworkUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: HomeworkCreateOrConnectWithoutStudentInput | HomeworkCreateOrConnectWithoutStudentInput[]
    upsert?: HomeworkUpsertWithWhereUniqueWithoutStudentInput | HomeworkUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: HomeworkCreateManyStudentInputEnvelope
    set?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    disconnect?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    delete?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    connect?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    update?: HomeworkUpdateWithWhereUniqueWithoutStudentInput | HomeworkUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: HomeworkUpdateManyWithWhereWithoutStudentInput | HomeworkUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: HomeworkScalarWhereInput | HomeworkScalarWhereInput[]
  }

  export type StudentActivityUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentActivityCreateWithoutStudentInput, StudentActivityUncheckedCreateWithoutStudentInput> | StudentActivityCreateWithoutStudentInput[] | StudentActivityUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentActivityCreateOrConnectWithoutStudentInput | StudentActivityCreateOrConnectWithoutStudentInput[]
    upsert?: StudentActivityUpsertWithWhereUniqueWithoutStudentInput | StudentActivityUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentActivityCreateManyStudentInputEnvelope
    set?: StudentActivityWhereUniqueInput | StudentActivityWhereUniqueInput[]
    disconnect?: StudentActivityWhereUniqueInput | StudentActivityWhereUniqueInput[]
    delete?: StudentActivityWhereUniqueInput | StudentActivityWhereUniqueInput[]
    connect?: StudentActivityWhereUniqueInput | StudentActivityWhereUniqueInput[]
    update?: StudentActivityUpdateWithWhereUniqueWithoutStudentInput | StudentActivityUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentActivityUpdateManyWithWhereWithoutStudentInput | StudentActivityUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentActivityScalarWhereInput | StudentActivityScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutStudentInput | SubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutStudentInput | SubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutStudentInput | SubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type HomeworkUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<HomeworkCreateWithoutStudentInput, HomeworkUncheckedCreateWithoutStudentInput> | HomeworkCreateWithoutStudentInput[] | HomeworkUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: HomeworkCreateOrConnectWithoutStudentInput | HomeworkCreateOrConnectWithoutStudentInput[]
    upsert?: HomeworkUpsertWithWhereUniqueWithoutStudentInput | HomeworkUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: HomeworkCreateManyStudentInputEnvelope
    set?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    disconnect?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    delete?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    connect?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    update?: HomeworkUpdateWithWhereUniqueWithoutStudentInput | HomeworkUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: HomeworkUpdateManyWithWhereWithoutStudentInput | HomeworkUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: HomeworkScalarWhereInput | HomeworkScalarWhereInput[]
  }

  export type StudentActivityUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentActivityCreateWithoutStudentInput, StudentActivityUncheckedCreateWithoutStudentInput> | StudentActivityCreateWithoutStudentInput[] | StudentActivityUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentActivityCreateOrConnectWithoutStudentInput | StudentActivityCreateOrConnectWithoutStudentInput[]
    upsert?: StudentActivityUpsertWithWhereUniqueWithoutStudentInput | StudentActivityUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentActivityCreateManyStudentInputEnvelope
    set?: StudentActivityWhereUniqueInput | StudentActivityWhereUniqueInput[]
    disconnect?: StudentActivityWhereUniqueInput | StudentActivityWhereUniqueInput[]
    delete?: StudentActivityWhereUniqueInput | StudentActivityWhereUniqueInput[]
    connect?: StudentActivityWhereUniqueInput | StudentActivityWhereUniqueInput[]
    update?: StudentActivityUpdateWithWhereUniqueWithoutStudentInput | StudentActivityUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentActivityUpdateManyWithWhereWithoutStudentInput | StudentActivityUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentActivityScalarWhereInput | StudentActivityScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutStudentInput | SubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutStudentInput | SubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutStudentInput | SubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type CourseCreateNestedOneWithoutGroupsInput = {
    create?: XOR<CourseCreateWithoutGroupsInput, CourseUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutGroupsInput
    connect?: CourseWhereUniqueInput
  }

  export type StudentCreateNestedManyWithoutGroupInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type CourseUpdateOneWithoutGroupsNestedInput = {
    create?: XOR<CourseCreateWithoutGroupsInput, CourseUncheckedCreateWithoutGroupsInput>
    connectOrCreate?: CourseCreateOrConnectWithoutGroupsInput
    upsert?: CourseUpsertWithoutGroupsInput
    disconnect?: CourseWhereInput | boolean
    delete?: CourseWhereInput | boolean
    connect?: CourseWhereUniqueInput
    update?: XOR<XOR<CourseUpdateToOneWithWhereWithoutGroupsInput, CourseUpdateWithoutGroupsInput>, CourseUncheckedUpdateWithoutGroupsInput>
  }

  export type StudentUpdateManyWithoutGroupNestedInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutGroupInput | StudentUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutGroupInput | StudentUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutGroupInput | StudentUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput> | StudentCreateWithoutGroupInput[] | StudentUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutGroupInput | StudentCreateOrConnectWithoutGroupInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutGroupInput | StudentUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: StudentCreateManyGroupInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutGroupInput | StudentUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutGroupInput | StudentUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type GroupCreateNestedManyWithoutCourseInput = {
    create?: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput> | GroupCreateWithoutCourseInput[] | GroupUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCourseInput | GroupCreateOrConnectWithoutCourseInput[]
    createMany?: GroupCreateManyCourseInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupUncheckedCreateNestedManyWithoutCourseInput = {
    create?: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput> | GroupCreateWithoutCourseInput[] | GroupUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCourseInput | GroupCreateOrConnectWithoutCourseInput[]
    createMany?: GroupCreateManyCourseInputEnvelope
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
  }

  export type GroupUpdateManyWithoutCourseNestedInput = {
    create?: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput> | GroupCreateWithoutCourseInput[] | GroupUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCourseInput | GroupCreateOrConnectWithoutCourseInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCourseInput | GroupUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: GroupCreateManyCourseInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCourseInput | GroupUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCourseInput | GroupUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type GroupUncheckedUpdateManyWithoutCourseNestedInput = {
    create?: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput> | GroupCreateWithoutCourseInput[] | GroupUncheckedCreateWithoutCourseInput[]
    connectOrCreate?: GroupCreateOrConnectWithoutCourseInput | GroupCreateOrConnectWithoutCourseInput[]
    upsert?: GroupUpsertWithWhereUniqueWithoutCourseInput | GroupUpsertWithWhereUniqueWithoutCourseInput[]
    createMany?: GroupCreateManyCourseInputEnvelope
    set?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    disconnect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    delete?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    connect?: GroupWhereUniqueInput | GroupWhereUniqueInput[]
    update?: GroupUpdateWithWhereUniqueWithoutCourseInput | GroupUpdateWithWhereUniqueWithoutCourseInput[]
    updateMany?: GroupUpdateManyWithWhereWithoutCourseInput | GroupUpdateManyWithWhereWithoutCourseInput[]
    deleteMany?: GroupScalarWhereInput | GroupScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutHomeworkInput = {
    create?: XOR<StudentCreateWithoutHomeworkInput, StudentUncheckedCreateWithoutHomeworkInput>
    connectOrCreate?: StudentCreateOrConnectWithoutHomeworkInput
    connect?: StudentWhereUniqueInput
  }

  export type StudentActivityCreateNestedOneWithoutTasksInput = {
    create?: XOR<StudentActivityCreateWithoutTasksInput, StudentActivityUncheckedCreateWithoutTasksInput>
    connectOrCreate?: StudentActivityCreateOrConnectWithoutTasksInput
    connect?: StudentActivityWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StudentUpdateOneWithoutHomeworkNestedInput = {
    create?: XOR<StudentCreateWithoutHomeworkInput, StudentUncheckedCreateWithoutHomeworkInput>
    connectOrCreate?: StudentCreateOrConnectWithoutHomeworkInput
    upsert?: StudentUpsertWithoutHomeworkInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutHomeworkInput, StudentUpdateWithoutHomeworkInput>, StudentUncheckedUpdateWithoutHomeworkInput>
  }

  export type StudentActivityUpdateOneWithoutTasksNestedInput = {
    create?: XOR<StudentActivityCreateWithoutTasksInput, StudentActivityUncheckedCreateWithoutTasksInput>
    connectOrCreate?: StudentActivityCreateOrConnectWithoutTasksInput
    upsert?: StudentActivityUpsertWithoutTasksInput
    disconnect?: StudentActivityWhereInput | boolean
    delete?: StudentActivityWhereInput | boolean
    connect?: StudentActivityWhereUniqueInput
    update?: XOR<XOR<StudentActivityUpdateToOneWithWhereWithoutTasksInput, StudentActivityUpdateWithoutTasksInput>, StudentActivityUncheckedUpdateWithoutTasksInput>
  }

  export type StudentCreateNestedOneWithoutStudentActivitiesInput = {
    create?: XOR<StudentCreateWithoutStudentActivitiesInput, StudentUncheckedCreateWithoutStudentActivitiesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentActivitiesInput
    connect?: StudentWhereUniqueInput
  }

  export type HomeworkCreateNestedManyWithoutStudentActivityInput = {
    create?: XOR<HomeworkCreateWithoutStudentActivityInput, HomeworkUncheckedCreateWithoutStudentActivityInput> | HomeworkCreateWithoutStudentActivityInput[] | HomeworkUncheckedCreateWithoutStudentActivityInput[]
    connectOrCreate?: HomeworkCreateOrConnectWithoutStudentActivityInput | HomeworkCreateOrConnectWithoutStudentActivityInput[]
    createMany?: HomeworkCreateManyStudentActivityInputEnvelope
    connect?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
  }

  export type HomeworkUncheckedCreateNestedManyWithoutStudentActivityInput = {
    create?: XOR<HomeworkCreateWithoutStudentActivityInput, HomeworkUncheckedCreateWithoutStudentActivityInput> | HomeworkCreateWithoutStudentActivityInput[] | HomeworkUncheckedCreateWithoutStudentActivityInput[]
    connectOrCreate?: HomeworkCreateOrConnectWithoutStudentActivityInput | HomeworkCreateOrConnectWithoutStudentActivityInput[]
    createMany?: HomeworkCreateManyStudentActivityInputEnvelope
    connect?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
  }

  export type StudentUpdateOneWithoutStudentActivitiesNestedInput = {
    create?: XOR<StudentCreateWithoutStudentActivitiesInput, StudentUncheckedCreateWithoutStudentActivitiesInput>
    connectOrCreate?: StudentCreateOrConnectWithoutStudentActivitiesInput
    upsert?: StudentUpsertWithoutStudentActivitiesInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutStudentActivitiesInput, StudentUpdateWithoutStudentActivitiesInput>, StudentUncheckedUpdateWithoutStudentActivitiesInput>
  }

  export type HomeworkUpdateManyWithoutStudentActivityNestedInput = {
    create?: XOR<HomeworkCreateWithoutStudentActivityInput, HomeworkUncheckedCreateWithoutStudentActivityInput> | HomeworkCreateWithoutStudentActivityInput[] | HomeworkUncheckedCreateWithoutStudentActivityInput[]
    connectOrCreate?: HomeworkCreateOrConnectWithoutStudentActivityInput | HomeworkCreateOrConnectWithoutStudentActivityInput[]
    upsert?: HomeworkUpsertWithWhereUniqueWithoutStudentActivityInput | HomeworkUpsertWithWhereUniqueWithoutStudentActivityInput[]
    createMany?: HomeworkCreateManyStudentActivityInputEnvelope
    set?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    disconnect?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    delete?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    connect?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    update?: HomeworkUpdateWithWhereUniqueWithoutStudentActivityInput | HomeworkUpdateWithWhereUniqueWithoutStudentActivityInput[]
    updateMany?: HomeworkUpdateManyWithWhereWithoutStudentActivityInput | HomeworkUpdateManyWithWhereWithoutStudentActivityInput[]
    deleteMany?: HomeworkScalarWhereInput | HomeworkScalarWhereInput[]
  }

  export type HomeworkUncheckedUpdateManyWithoutStudentActivityNestedInput = {
    create?: XOR<HomeworkCreateWithoutStudentActivityInput, HomeworkUncheckedCreateWithoutStudentActivityInput> | HomeworkCreateWithoutStudentActivityInput[] | HomeworkUncheckedCreateWithoutStudentActivityInput[]
    connectOrCreate?: HomeworkCreateOrConnectWithoutStudentActivityInput | HomeworkCreateOrConnectWithoutStudentActivityInput[]
    upsert?: HomeworkUpsertWithWhereUniqueWithoutStudentActivityInput | HomeworkUpsertWithWhereUniqueWithoutStudentActivityInput[]
    createMany?: HomeworkCreateManyStudentActivityInputEnvelope
    set?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    disconnect?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    delete?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    connect?: HomeworkWhereUniqueInput | HomeworkWhereUniqueInput[]
    update?: HomeworkUpdateWithWhereUniqueWithoutStudentActivityInput | HomeworkUpdateWithWhereUniqueWithoutStudentActivityInput[]
    updateMany?: HomeworkUpdateManyWithWhereWithoutStudentActivityInput | HomeworkUpdateManyWithWhereWithoutStudentActivityInput[]
    deleteMany?: HomeworkScalarWhereInput | HomeworkScalarWhereInput[]
  }

  export type QuestionCreateoptionsInput = {
    set: string[]
  }

  export type TestCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<TestCreateWithoutQuestionsInput, TestUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TestCreateOrConnectWithoutQuestionsInput
    connect?: TestWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionUpdateoptionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TestUpdateOneWithoutQuestionsNestedInput = {
    create?: XOR<TestCreateWithoutQuestionsInput, TestUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: TestCreateOrConnectWithoutQuestionsInput
    upsert?: TestUpsertWithoutQuestionsInput
    disconnect?: TestWhereInput | boolean
    delete?: TestWhereInput | boolean
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutQuestionsInput, TestUpdateWithoutQuestionsInput>, TestUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionCreateNestedManyWithoutTestInput = {
    create?: XOR<QuestionCreateWithoutTestInput, QuestionUncheckedCreateWithoutTestInput> | QuestionCreateWithoutTestInput[] | QuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTestInput | QuestionCreateOrConnectWithoutTestInput[]
    createMany?: QuestionCreateManyTestInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutTestInput = {
    create?: XOR<SubmissionCreateWithoutTestInput, SubmissionUncheckedCreateWithoutTestInput> | SubmissionCreateWithoutTestInput[] | SubmissionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestInput | SubmissionCreateOrConnectWithoutTestInput[]
    createMany?: SubmissionCreateManyTestInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<QuestionCreateWithoutTestInput, QuestionUncheckedCreateWithoutTestInput> | QuestionCreateWithoutTestInput[] | QuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTestInput | QuestionCreateOrConnectWithoutTestInput[]
    createMany?: QuestionCreateManyTestInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutTestInput = {
    create?: XOR<SubmissionCreateWithoutTestInput, SubmissionUncheckedCreateWithoutTestInput> | SubmissionCreateWithoutTestInput[] | SubmissionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestInput | SubmissionCreateOrConnectWithoutTestInput[]
    createMany?: SubmissionCreateManyTestInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type QuestionUpdateManyWithoutTestNestedInput = {
    create?: XOR<QuestionCreateWithoutTestInput, QuestionUncheckedCreateWithoutTestInput> | QuestionCreateWithoutTestInput[] | QuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTestInput | QuestionCreateOrConnectWithoutTestInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTestInput | QuestionUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: QuestionCreateManyTestInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTestInput | QuestionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTestInput | QuestionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutTestNestedInput = {
    create?: XOR<SubmissionCreateWithoutTestInput, SubmissionUncheckedCreateWithoutTestInput> | SubmissionCreateWithoutTestInput[] | SubmissionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestInput | SubmissionCreateOrConnectWithoutTestInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutTestInput | SubmissionUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: SubmissionCreateManyTestInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutTestInput | SubmissionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutTestInput | SubmissionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<QuestionCreateWithoutTestInput, QuestionUncheckedCreateWithoutTestInput> | QuestionCreateWithoutTestInput[] | QuestionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTestInput | QuestionCreateOrConnectWithoutTestInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTestInput | QuestionUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: QuestionCreateManyTestInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTestInput | QuestionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTestInput | QuestionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutTestNestedInput = {
    create?: XOR<SubmissionCreateWithoutTestInput, SubmissionUncheckedCreateWithoutTestInput> | SubmissionCreateWithoutTestInput[] | SubmissionUncheckedCreateWithoutTestInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutTestInput | SubmissionCreateOrConnectWithoutTestInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutTestInput | SubmissionUpsertWithWhereUniqueWithoutTestInput[]
    createMany?: SubmissionCreateManyTestInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutTestInput | SubmissionUpdateWithWhereUniqueWithoutTestInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutTestInput | SubmissionUpdateManyWithWhereWithoutTestInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutSubmitsInput = {
    create?: XOR<StudentCreateWithoutSubmitsInput, StudentUncheckedCreateWithoutSubmitsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubmitsInput
    connect?: StudentWhereUniqueInput
  }

  export type TestCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<TestCreateWithoutSubmissionsInput, TestUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: TestCreateOrConnectWithoutSubmissionsInput
    connect?: TestWhereUniqueInput
  }

  export type StudentUpdateOneWithoutSubmitsNestedInput = {
    create?: XOR<StudentCreateWithoutSubmitsInput, StudentUncheckedCreateWithoutSubmitsInput>
    connectOrCreate?: StudentCreateOrConnectWithoutSubmitsInput
    upsert?: StudentUpsertWithoutSubmitsInput
    disconnect?: StudentWhereInput | boolean
    delete?: StudentWhereInput | boolean
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutSubmitsInput, StudentUpdateWithoutSubmitsInput>, StudentUncheckedUpdateWithoutSubmitsInput>
  }

  export type TestUpdateOneWithoutSubmissionsNestedInput = {
    create?: XOR<TestCreateWithoutSubmissionsInput, TestUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: TestCreateOrConnectWithoutSubmissionsInput
    upsert?: TestUpsertWithoutSubmissionsInput
    disconnect?: TestWhereInput | boolean
    delete?: TestWhereInput | boolean
    connect?: TestWhereUniqueInput
    update?: XOR<XOR<TestUpdateToOneWithWhereWithoutSubmissionsInput, TestUpdateWithoutSubmissionsInput>, TestUncheckedUpdateWithoutSubmissionsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type GroupCreateWithoutStudentsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    course?: CourseCreateNestedOneWithoutGroupsInput
  }

  export type GroupUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    courseId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupCreateOrConnectWithoutStudentsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
  }

  export type HomeworkCreateWithoutStudentInput = {
    id?: string
    title: string
    description: string
    checked?: boolean
    point?: number | null
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentActivity?: StudentActivityCreateNestedOneWithoutTasksInput
  }

  export type HomeworkUncheckedCreateWithoutStudentInput = {
    id?: string
    title: string
    description: string
    checked?: boolean
    point?: number | null
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentActivityId?: string | null
  }

  export type HomeworkCreateOrConnectWithoutStudentInput = {
    where: HomeworkWhereUniqueInput
    create: XOR<HomeworkCreateWithoutStudentInput, HomeworkUncheckedCreateWithoutStudentInput>
  }

  export type HomeworkCreateManyStudentInputEnvelope = {
    data: HomeworkCreateManyStudentInput | HomeworkCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type StudentActivityCreateWithoutStudentInput = {
    id?: string
    rating: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: HomeworkCreateNestedManyWithoutStudentActivityInput
  }

  export type StudentActivityUncheckedCreateWithoutStudentInput = {
    id?: string
    rating: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tasks?: HomeworkUncheckedCreateNestedManyWithoutStudentActivityInput
  }

  export type StudentActivityCreateOrConnectWithoutStudentInput = {
    where: StudentActivityWhereUniqueInput
    create: XOR<StudentActivityCreateWithoutStudentInput, StudentActivityUncheckedCreateWithoutStudentInput>
  }

  export type StudentActivityCreateManyStudentInputEnvelope = {
    data: StudentActivityCreateManyStudentInput | StudentActivityCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutStudentInput = {
    id?: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    test?: TestCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutStudentInput = {
    id?: string
    testId: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionCreateManyStudentInputEnvelope = {
    data: SubmissionCreateManyStudentInput | SubmissionCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutStudentsInput = {
    update: XOR<GroupUpdateWithoutStudentsInput, GroupUncheckedUpdateWithoutStudentsInput>
    create: XOR<GroupCreateWithoutStudentsInput, GroupUncheckedCreateWithoutStudentsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutStudentsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutStudentsInput, GroupUncheckedUpdateWithoutStudentsInput>
  }

  export type GroupUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    course?: CourseUpdateOneWithoutGroupsNestedInput
  }

  export type GroupUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    courseId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeworkUpsertWithWhereUniqueWithoutStudentInput = {
    where: HomeworkWhereUniqueInput
    update: XOR<HomeworkUpdateWithoutStudentInput, HomeworkUncheckedUpdateWithoutStudentInput>
    create: XOR<HomeworkCreateWithoutStudentInput, HomeworkUncheckedCreateWithoutStudentInput>
  }

  export type HomeworkUpdateWithWhereUniqueWithoutStudentInput = {
    where: HomeworkWhereUniqueInput
    data: XOR<HomeworkUpdateWithoutStudentInput, HomeworkUncheckedUpdateWithoutStudentInput>
  }

  export type HomeworkUpdateManyWithWhereWithoutStudentInput = {
    where: HomeworkScalarWhereInput
    data: XOR<HomeworkUpdateManyMutationInput, HomeworkUncheckedUpdateManyWithoutStudentInput>
  }

  export type HomeworkScalarWhereInput = {
    AND?: HomeworkScalarWhereInput | HomeworkScalarWhereInput[]
    OR?: HomeworkScalarWhereInput[]
    NOT?: HomeworkScalarWhereInput | HomeworkScalarWhereInput[]
    id?: StringFilter<"Homework"> | string
    studentId?: StringNullableFilter<"Homework"> | string | null
    title?: StringFilter<"Homework"> | string
    description?: StringFilter<"Homework"> | string
    checked?: BoolFilter<"Homework"> | boolean
    point?: IntNullableFilter<"Homework"> | number | null
    deadline?: DateTimeFilter<"Homework"> | Date | string
    createdAt?: DateTimeFilter<"Homework"> | Date | string
    updatedAt?: DateTimeFilter<"Homework"> | Date | string
    studentActivityId?: StringNullableFilter<"Homework"> | string | null
  }

  export type StudentActivityUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentActivityWhereUniqueInput
    update: XOR<StudentActivityUpdateWithoutStudentInput, StudentActivityUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentActivityCreateWithoutStudentInput, StudentActivityUncheckedCreateWithoutStudentInput>
  }

  export type StudentActivityUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentActivityWhereUniqueInput
    data: XOR<StudentActivityUpdateWithoutStudentInput, StudentActivityUncheckedUpdateWithoutStudentInput>
  }

  export type StudentActivityUpdateManyWithWhereWithoutStudentInput = {
    where: StudentActivityScalarWhereInput
    data: XOR<StudentActivityUpdateManyMutationInput, StudentActivityUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentActivityScalarWhereInput = {
    AND?: StudentActivityScalarWhereInput | StudentActivityScalarWhereInput[]
    OR?: StudentActivityScalarWhereInput[]
    NOT?: StudentActivityScalarWhereInput | StudentActivityScalarWhereInput[]
    id?: StringFilter<"StudentActivity"> | string
    studentId?: StringNullableFilter<"StudentActivity"> | string | null
    rating?: StringFilter<"StudentActivity"> | string
    createdAt?: DateTimeFilter<"StudentActivity"> | Date | string
    updatedAt?: DateTimeFilter<"StudentActivity"> | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutStudentInput, SubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutStudentInput, SubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    studentId?: StringNullableFilter<"Submission"> | string | null
    testId?: StringFilter<"Submission"> | string
    score?: IntFilter<"Submission"> | number
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type CourseCreateWithoutGroupsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseUncheckedCreateWithoutGroupsInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourseCreateOrConnectWithoutGroupsInput = {
    where: CourseWhereUniqueInput
    create: XOR<CourseCreateWithoutGroupsInput, CourseUncheckedCreateWithoutGroupsInput>
  }

  export type StudentCreateWithoutGroupInput = {
    id?: string
    fullName: string
    password: string
    email: string
    username?: string | null
    parentNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    homework?: HomeworkCreateNestedManyWithoutStudentInput
    studentActivities?: StudentActivityCreateNestedManyWithoutStudentInput
    submits?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutGroupInput = {
    id?: string
    fullName: string
    password: string
    email: string
    username?: string | null
    parentNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    homework?: HomeworkUncheckedCreateNestedManyWithoutStudentInput
    studentActivities?: StudentActivityUncheckedCreateNestedManyWithoutStudentInput
    submits?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutGroupInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput>
  }

  export type StudentCreateManyGroupInputEnvelope = {
    data: StudentCreateManyGroupInput | StudentCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type CourseUpsertWithoutGroupsInput = {
    update: XOR<CourseUpdateWithoutGroupsInput, CourseUncheckedUpdateWithoutGroupsInput>
    create: XOR<CourseCreateWithoutGroupsInput, CourseUncheckedCreateWithoutGroupsInput>
    where?: CourseWhereInput
  }

  export type CourseUpdateToOneWithWhereWithoutGroupsInput = {
    where?: CourseWhereInput
    data: XOR<CourseUpdateWithoutGroupsInput, CourseUncheckedUpdateWithoutGroupsInput>
  }

  export type CourseUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourseUncheckedUpdateWithoutGroupsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUpsertWithWhereUniqueWithoutGroupInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutGroupInput, StudentUncheckedUpdateWithoutGroupInput>
    create: XOR<StudentCreateWithoutGroupInput, StudentUncheckedCreateWithoutGroupInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutGroupInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutGroupInput, StudentUncheckedUpdateWithoutGroupInput>
  }

  export type StudentUpdateManyWithWhereWithoutGroupInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutGroupInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    fullName?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    email?: StringFilter<"Student"> | string
    username?: StringNullableFilter<"Student"> | string | null
    parentNumber?: StringFilter<"Student"> | string
    groupId?: StringNullableFilter<"Student"> | string | null
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type GroupCreateWithoutCourseInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateWithoutCourseInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    students?: StudentUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupCreateOrConnectWithoutCourseInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput>
  }

  export type GroupCreateManyCourseInputEnvelope = {
    data: GroupCreateManyCourseInput | GroupCreateManyCourseInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithWhereUniqueWithoutCourseInput = {
    where: GroupWhereUniqueInput
    update: XOR<GroupUpdateWithoutCourseInput, GroupUncheckedUpdateWithoutCourseInput>
    create: XOR<GroupCreateWithoutCourseInput, GroupUncheckedCreateWithoutCourseInput>
  }

  export type GroupUpdateWithWhereUniqueWithoutCourseInput = {
    where: GroupWhereUniqueInput
    data: XOR<GroupUpdateWithoutCourseInput, GroupUncheckedUpdateWithoutCourseInput>
  }

  export type GroupUpdateManyWithWhereWithoutCourseInput = {
    where: GroupScalarWhereInput
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyWithoutCourseInput>
  }

  export type GroupScalarWhereInput = {
    AND?: GroupScalarWhereInput | GroupScalarWhereInput[]
    OR?: GroupScalarWhereInput[]
    NOT?: GroupScalarWhereInput | GroupScalarWhereInput[]
    id?: StringFilter<"Group"> | string
    name?: StringFilter<"Group"> | string
    courseId?: StringNullableFilter<"Group"> | string | null
    createdAt?: DateTimeFilter<"Group"> | Date | string
    updatedAt?: DateTimeFilter<"Group"> | Date | string
  }

  export type StudentCreateWithoutHomeworkInput = {
    id?: string
    fullName: string
    password: string
    email: string
    username?: string | null
    parentNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutStudentsInput
    studentActivities?: StudentActivityCreateNestedManyWithoutStudentInput
    submits?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutHomeworkInput = {
    id?: string
    fullName: string
    password: string
    email: string
    username?: string | null
    parentNumber: string
    groupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    studentActivities?: StudentActivityUncheckedCreateNestedManyWithoutStudentInput
    submits?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutHomeworkInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutHomeworkInput, StudentUncheckedCreateWithoutHomeworkInput>
  }

  export type StudentActivityCreateWithoutTasksInput = {
    id?: string
    rating: string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutStudentActivitiesInput
  }

  export type StudentActivityUncheckedCreateWithoutTasksInput = {
    id?: string
    studentId?: string | null
    rating: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentActivityCreateOrConnectWithoutTasksInput = {
    where: StudentActivityWhereUniqueInput
    create: XOR<StudentActivityCreateWithoutTasksInput, StudentActivityUncheckedCreateWithoutTasksInput>
  }

  export type StudentUpsertWithoutHomeworkInput = {
    update: XOR<StudentUpdateWithoutHomeworkInput, StudentUncheckedUpdateWithoutHomeworkInput>
    create: XOR<StudentCreateWithoutHomeworkInput, StudentUncheckedCreateWithoutHomeworkInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutHomeworkInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutHomeworkInput, StudentUncheckedUpdateWithoutHomeworkInput>
  }

  export type StudentUpdateWithoutHomeworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    parentNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutStudentsNestedInput
    studentActivities?: StudentActivityUpdateManyWithoutStudentNestedInput
    submits?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutHomeworkInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    parentNumber?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentActivities?: StudentActivityUncheckedUpdateManyWithoutStudentNestedInput
    submits?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentActivityUpsertWithoutTasksInput = {
    update: XOR<StudentActivityUpdateWithoutTasksInput, StudentActivityUncheckedUpdateWithoutTasksInput>
    create: XOR<StudentActivityCreateWithoutTasksInput, StudentActivityUncheckedCreateWithoutTasksInput>
    where?: StudentActivityWhereInput
  }

  export type StudentActivityUpdateToOneWithWhereWithoutTasksInput = {
    where?: StudentActivityWhereInput
    data: XOR<StudentActivityUpdateWithoutTasksInput, StudentActivityUncheckedUpdateWithoutTasksInput>
  }

  export type StudentActivityUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutStudentActivitiesNestedInput
  }

  export type StudentActivityUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateWithoutStudentActivitiesInput = {
    id?: string
    fullName: string
    password: string
    email: string
    username?: string | null
    parentNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutStudentsInput
    homework?: HomeworkCreateNestedManyWithoutStudentInput
    submits?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutStudentActivitiesInput = {
    id?: string
    fullName: string
    password: string
    email: string
    username?: string | null
    parentNumber: string
    groupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    homework?: HomeworkUncheckedCreateNestedManyWithoutStudentInput
    submits?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutStudentActivitiesInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutStudentActivitiesInput, StudentUncheckedCreateWithoutStudentActivitiesInput>
  }

  export type HomeworkCreateWithoutStudentActivityInput = {
    id?: string
    title: string
    description: string
    checked?: boolean
    point?: number | null
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutHomeworkInput
  }

  export type HomeworkUncheckedCreateWithoutStudentActivityInput = {
    id?: string
    studentId?: string | null
    title: string
    description: string
    checked?: boolean
    point?: number | null
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeworkCreateOrConnectWithoutStudentActivityInput = {
    where: HomeworkWhereUniqueInput
    create: XOR<HomeworkCreateWithoutStudentActivityInput, HomeworkUncheckedCreateWithoutStudentActivityInput>
  }

  export type HomeworkCreateManyStudentActivityInputEnvelope = {
    data: HomeworkCreateManyStudentActivityInput | HomeworkCreateManyStudentActivityInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithoutStudentActivitiesInput = {
    update: XOR<StudentUpdateWithoutStudentActivitiesInput, StudentUncheckedUpdateWithoutStudentActivitiesInput>
    create: XOR<StudentCreateWithoutStudentActivitiesInput, StudentUncheckedCreateWithoutStudentActivitiesInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutStudentActivitiesInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutStudentActivitiesInput, StudentUncheckedUpdateWithoutStudentActivitiesInput>
  }

  export type StudentUpdateWithoutStudentActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    parentNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutStudentsNestedInput
    homework?: HomeworkUpdateManyWithoutStudentNestedInput
    submits?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutStudentActivitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    parentNumber?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homework?: HomeworkUncheckedUpdateManyWithoutStudentNestedInput
    submits?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type HomeworkUpsertWithWhereUniqueWithoutStudentActivityInput = {
    where: HomeworkWhereUniqueInput
    update: XOR<HomeworkUpdateWithoutStudentActivityInput, HomeworkUncheckedUpdateWithoutStudentActivityInput>
    create: XOR<HomeworkCreateWithoutStudentActivityInput, HomeworkUncheckedCreateWithoutStudentActivityInput>
  }

  export type HomeworkUpdateWithWhereUniqueWithoutStudentActivityInput = {
    where: HomeworkWhereUniqueInput
    data: XOR<HomeworkUpdateWithoutStudentActivityInput, HomeworkUncheckedUpdateWithoutStudentActivityInput>
  }

  export type HomeworkUpdateManyWithWhereWithoutStudentActivityInput = {
    where: HomeworkScalarWhereInput
    data: XOR<HomeworkUpdateManyMutationInput, HomeworkUncheckedUpdateManyWithoutStudentActivityInput>
  }

  export type TestCreateWithoutQuestionsInput = {
    id?: string
    title: string
    allPoints?: number
    scheduledDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    allPoints?: number
    scheduledDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutQuestionsInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutQuestionsInput, TestUncheckedCreateWithoutQuestionsInput>
  }

  export type TestUpsertWithoutQuestionsInput = {
    update: XOR<TestUpdateWithoutQuestionsInput, TestUncheckedUpdateWithoutQuestionsInput>
    create: XOR<TestCreateWithoutQuestionsInput, TestUncheckedCreateWithoutQuestionsInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutQuestionsInput, TestUncheckedUpdateWithoutQuestionsInput>
  }

  export type TestUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allPoints?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allPoints?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutTestNestedInput
  }

  export type QuestionCreateWithoutTestInput = {
    id?: string
    text: string
    points: number
    options?: QuestionCreateoptionsInput | string[]
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUncheckedCreateWithoutTestInput = {
    id?: string
    text: string
    points: number
    options?: QuestionCreateoptionsInput | string[]
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionCreateOrConnectWithoutTestInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTestInput, QuestionUncheckedCreateWithoutTestInput>
  }

  export type QuestionCreateManyTestInputEnvelope = {
    data: QuestionCreateManyTestInput | QuestionCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutTestInput = {
    id?: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    student?: StudentCreateNestedOneWithoutSubmitsInput
  }

  export type SubmissionUncheckedCreateWithoutTestInput = {
    id?: string
    studentId?: string | null
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutTestInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutTestInput, SubmissionUncheckedCreateWithoutTestInput>
  }

  export type SubmissionCreateManyTestInputEnvelope = {
    data: SubmissionCreateManyTestInput | SubmissionCreateManyTestInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutTestInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutTestInput, QuestionUncheckedUpdateWithoutTestInput>
    create: XOR<QuestionCreateWithoutTestInput, QuestionUncheckedCreateWithoutTestInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutTestInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutTestInput, QuestionUncheckedUpdateWithoutTestInput>
  }

  export type QuestionUpdateManyWithWhereWithoutTestInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutTestInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    points?: IntFilter<"Question"> | number
    options?: StringNullableListFilter<"Question">
    answer?: StringFilter<"Question"> | string
    testId?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutTestInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutTestInput, SubmissionUncheckedUpdateWithoutTestInput>
    create: XOR<SubmissionCreateWithoutTestInput, SubmissionUncheckedCreateWithoutTestInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutTestInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutTestInput, SubmissionUncheckedUpdateWithoutTestInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutTestInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutTestInput>
  }

  export type StudentCreateWithoutSubmitsInput = {
    id?: string
    fullName: string
    password: string
    email: string
    username?: string | null
    parentNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
    group?: GroupCreateNestedOneWithoutStudentsInput
    homework?: HomeworkCreateNestedManyWithoutStudentInput
    studentActivities?: StudentActivityCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutSubmitsInput = {
    id?: string
    fullName: string
    password: string
    email: string
    username?: string | null
    parentNumber: string
    groupId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    homework?: HomeworkUncheckedCreateNestedManyWithoutStudentInput
    studentActivities?: StudentActivityUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutSubmitsInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutSubmitsInput, StudentUncheckedCreateWithoutSubmitsInput>
  }

  export type TestCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    allPoints?: number
    scheduledDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutTestInput
  }

  export type TestUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    allPoints?: number
    scheduledDate: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutTestInput
  }

  export type TestCreateOrConnectWithoutSubmissionsInput = {
    where: TestWhereUniqueInput
    create: XOR<TestCreateWithoutSubmissionsInput, TestUncheckedCreateWithoutSubmissionsInput>
  }

  export type StudentUpsertWithoutSubmitsInput = {
    update: XOR<StudentUpdateWithoutSubmitsInput, StudentUncheckedUpdateWithoutSubmitsInput>
    create: XOR<StudentCreateWithoutSubmitsInput, StudentUncheckedCreateWithoutSubmitsInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutSubmitsInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutSubmitsInput, StudentUncheckedUpdateWithoutSubmitsInput>
  }

  export type StudentUpdateWithoutSubmitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    parentNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    group?: GroupUpdateOneWithoutStudentsNestedInput
    homework?: HomeworkUpdateManyWithoutStudentNestedInput
    studentActivities?: StudentActivityUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutSubmitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    parentNumber?: StringFieldUpdateOperationsInput | string
    groupId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homework?: HomeworkUncheckedUpdateManyWithoutStudentNestedInput
    studentActivities?: StudentActivityUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type TestUpsertWithoutSubmissionsInput = {
    update: XOR<TestUpdateWithoutSubmissionsInput, TestUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<TestCreateWithoutSubmissionsInput, TestUncheckedCreateWithoutSubmissionsInput>
    where?: TestWhereInput
  }

  export type TestUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: TestWhereInput
    data: XOR<TestUpdateWithoutSubmissionsInput, TestUncheckedUpdateWithoutSubmissionsInput>
  }

  export type TestUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allPoints?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutTestNestedInput
  }

  export type TestUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    allPoints?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutTestNestedInput
  }

  export type HomeworkCreateManyStudentInput = {
    id?: string
    title: string
    description: string
    checked?: boolean
    point?: number | null
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    studentActivityId?: string | null
  }

  export type StudentActivityCreateManyStudentInput = {
    id?: string
    rating: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateManyStudentInput = {
    id?: string
    testId: string
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeworkUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentActivity?: StudentActivityUpdateOneWithoutTasksNestedInput
  }

  export type HomeworkUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentActivityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type HomeworkUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    studentActivityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentActivityUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: HomeworkUpdateManyWithoutStudentActivityNestedInput
  }

  export type StudentActivityUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tasks?: HomeworkUncheckedUpdateManyWithoutStudentActivityNestedInput
  }

  export type StudentActivityUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test?: TestUpdateOneWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    testId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyGroupInput = {
    id?: string
    fullName: string
    password: string
    email: string
    username?: string | null
    parentNumber: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    parentNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homework?: HomeworkUpdateManyWithoutStudentNestedInput
    studentActivities?: StudentActivityUpdateManyWithoutStudentNestedInput
    submits?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    parentNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homework?: HomeworkUncheckedUpdateManyWithoutStudentNestedInput
    studentActivities?: StudentActivityUncheckedUpdateManyWithoutStudentNestedInput
    submits?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutGroupInput = {
    id?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    parentNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GroupCreateManyCourseInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GroupUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: StudentUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateManyWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeworkCreateManyStudentActivityInput = {
    id?: string
    studentId?: string | null
    title: string
    description: string
    checked?: boolean
    point?: number | null
    deadline: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HomeworkUpdateWithoutStudentActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutHomeworkNestedInput
  }

  export type HomeworkUncheckedUpdateWithoutStudentActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HomeworkUncheckedUpdateManyWithoutStudentActivityInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    checked?: BoolFieldUpdateOperationsInput | boolean
    point?: NullableIntFieldUpdateOperationsInput | number | null
    deadline?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyTestInput = {
    id?: string
    text: string
    points: number
    options?: QuestionCreateoptionsInput | string[]
    answer: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateManyTestInput = {
    id?: string
    studentId?: string | null
    score?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    options?: QuestionUpdateoptionsInput | string[]
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    options?: QuestionUpdateoptionsInput | string[]
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    points?: IntFieldUpdateOperationsInput | number
    options?: QuestionUpdateoptionsInput | string[]
    answer?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneWithoutSubmitsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyWithoutTestInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: NullableStringFieldUpdateOperationsInput | string | null
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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