// This practice is to conditional return the correct types based on the arguments that passed in.

type Role = "user" | "admin";

interface User {
    id: string;
    role: Extract<Role, "user">;
    email: string;
    perms: string[];
}

interface Admin {
    id: string;
    role: Extract<Role, "admin">;
}

// Redeclare fuction just for the type, ts will infer it, without inferring, the detail type will be "User | Admin" which leads to type guards
export function getUserDetails(id: string, role: Extract<Role, "admin">): Admin;
export function getUserDetails(id: string, role: Extract<Role, "user">): User;

export function getUserDetails(id: string, role: Role): User | Admin {
    switch (role) {
        case "admin":
            return { id, role };
        case "user":
            return { id, role, email: "test@test.com", perms: ["read"] };
    }
}

const adminDetail = getUserDetails("123", "admin");
const userDetail = getUserDetails("123", "user");
