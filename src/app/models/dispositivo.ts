type Timestamp = {
    name: Date;
}

interface Dispositivo {
    id: string;
    name: string;
    email: string;
    password: string;
    is_active: boolean;
    is_admin: boolean;
    created_at: Timestamp;
}
