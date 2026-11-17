import AsyncStorage from '@react-native-async-storage/async-storage';

// Offline, on-device "auth". Accounts live in AsyncStorage on this device only.
// This is for demo purposes: passwords are not hashed and there is no server.

const USERS_KEY = 'users';

export interface LocalUser {
    id: string;
    fullNames: string;
    phoneNumber: string;
    email: string;
}

interface StoredUser extends LocalUser {
    password: string;
}

const getUsers = async (): Promise<StoredUser[]> => {
    const raw = await AsyncStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
};

const toPublic = ({ password, ...user }: StoredUser): LocalUser => user;

export const registerUser = async (data: Omit<StoredUser, 'id'>): Promise<LocalUser> => {
    const users = await getUsers();
    const email = data.email.trim().toLowerCase();
    if (users.some((u) => u.email === email)) {
        throw new Error('An account with this email already exists');
    }
    const user: StoredUser = { ...data, email, id: Date.now().toString() };
    await AsyncStorage.setItem(USERS_KEY, JSON.stringify([...users, user]));
    return toPublic(user);
};

export const loginUser = async (email: string, password: string) => {
    const users = await getUsers();
    const user = users.find(
        (u) => u.email === email.trim().toLowerCase() && u.password === password
    );
    if (!user) throw new Error('Invalid email or password');
    return { token: `local-${user.id}-${Date.now()}`, user: toPublic(user) };
};
