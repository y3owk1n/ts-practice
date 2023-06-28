// This practice is remove a member from a union type.

export type Letters = "a" | "b" | "c";

type RemoveC<TType> = TType extends "c" ? never : TType; // never can be anything

type RemoveCAddD<TType> = TType extends "c" ? "d" : TType;

type LettersWithoutC = RemoveC<Letters>;

type LettersWithoutCAddD = RemoveCAddD<Letters>;
