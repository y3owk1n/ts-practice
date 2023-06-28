// This practice is to create a generic and conditional return the correct types based on the arguments that passed in.

interface Animal {
    name: string;
}

interface Human {
    firstName: string;
    lastName: string;
}

export const getDisplayName = <TItem extends Human | Animal>(
    item: TItem
): { name: string } => {
    if ("name" in item) {
        const test = item;
        return {
            name: item.name,
        };
    }
    return {
        name: `${item.lastName} ${item.firstName}`,
    };
};

const result = getDisplayName({
    name: "Patch",
});

const result2 = getDisplayName({
    firstName: "Kyle",
    lastName: "Wong",
});
