// This practice is create a loose autocomplete when we need to extends existing types.

export type Size = "xs" | "sm" | Omit<string, "xs" | "sm">;

export type SizeWrong = "xs" | "sm" | string; // Do not do this, this will make everything in string

const getSize = (size: Size) => {
    return size;
};

const getSizeWrong = (size: SizeWrong) => {
    return size;
};

const mySize = getSize(""); // This should still have the Size types

const mySizeWrong = getSizeWrong(""); // No more types in it

// or we can also make a type helper
type LooseAutoComplete<T extends string> = T | Omit<string, "xs" | "sm">;

export type SizeWithHelper = LooseAutoComplete<"xs" | "sm">;

const getSizeWithHelper = (size: SizeWithHelper) => {
    return size;
};

const mySizeWithHelper = getSizeWithHelper("");
