/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface GumballInterface extends Interface {
  getFunction(
    nameOrSignature: "addFreshGumballs" | "getGumballs" | "getNumGumballs"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addFreshGumballs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getGumballs",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNumGumballs",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addFreshGumballs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGumballs",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNumGumballs",
    data: BytesLike
  ): Result;
}

export interface Gumball extends BaseContract {
  connect(runner?: ContractRunner | null): Gumball;
  waitForDeployment(): Promise<this>;

  interface: GumballInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addFreshGumballs: TypedContractMethod<
    [_gumballs: BigNumberish],
    [void],
    "nonpayable"
  >;

  getGumballs: TypedContractMethod<[], [bigint], "nonpayable">;

  getNumGumballs: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addFreshGumballs"
  ): TypedContractMethod<[_gumballs: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "getGumballs"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "getNumGumballs"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}
