export interface User {
    avatar: string;
    first_name: string;
    last_name: string;
    email: string;
    address: {
        city: string;
        state: string;
    };
}