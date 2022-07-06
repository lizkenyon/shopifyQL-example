/// <reference types="node" />
import { Socket, SocketConnectOpts } from 'net';
export declare function wait(ms: number): Promise<void>;
export declare function poll(func: () => Promise<boolean>, { interval, timeout }?: {
    interval?: number | undefined;
    timeout?: number | undefined;
}): Promise<void>;
export declare function waitForData(socket: Socket): Promise<string>;
export declare function connectSocket(socket: Socket, opts: SocketConnectOpts): Promise<void>;
//# sourceMappingURL=utils.d.ts.map