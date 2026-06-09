export type Either<L, R> = Left<L, R> | Right<L, R>;

export class Left<L, R> {
  readonly value: L;
  constructor(value: L) { this.value = value; }
  isLeft(): this is Left<L, R> { return true; }
  isRight(): this is Right<L, R> { return false; }
}

export class Right<L, R> {
  readonly value: R;
  constructor(value: R) { this.value = value; }
  isLeft(): this is Left<L, R> { return false; }
  isRight(): this is Right<L, R> { return true; }
}

export const left = <L, R>(value: L): Either<L, R> => new Left(value);
export const right = <L, R>(value: R): Either<L, R> => new Right(value);
export const isLeft = <L, R>(e: Either<L, R>): e is Left<L, R> => e.isLeft();
export const isRight = <L, R>(e: Either<L, R>): e is Right<L, R> => e.isRight();

export type Result<T, E extends Error = Error> = Either<E, T>;
