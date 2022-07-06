import { SessionInterface } from '../types';
import { SessionStorage } from '../session_storage';
export interface RedisSessionStorageOptions {
    sessionKeyPrefix: string;
}
export declare class RedisSessionStorage implements SessionStorage {
    private dbUrl;
    static withCredentials(host: string, db: number, username: string, password: string, opts: Partial<RedisSessionStorageOptions>): RedisSessionStorage;
    readonly ready: Promise<void>;
    private options;
    private client;
    constructor(dbUrl: URL, opts?: Partial<RedisSessionStorageOptions>);
    storeSession(session: SessionInterface): Promise<boolean>;
    loadSession(id: string): Promise<SessionInterface | undefined>;
    deleteSession(id: string): Promise<boolean>;
    disconnect(): Promise<void>;
    private fullKey;
    private init;
}
//# sourceMappingURL=redis.d.ts.map