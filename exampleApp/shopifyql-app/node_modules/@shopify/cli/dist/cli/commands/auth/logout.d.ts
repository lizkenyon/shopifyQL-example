import { Command } from '@oclif/core';
export default class Logout extends Command {
    static description: string;
    run(): Promise<void>;
}
