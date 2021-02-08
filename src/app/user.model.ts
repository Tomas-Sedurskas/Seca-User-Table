export interface User {
    _id: string;
    id: string;
    firstName: string;
    lastName: string;
    birthDate: string;
    isActive: boolean;
    roles: string[];
}