import Base, { ResourcePath } from '../base-rest-resource';
import { SessionInterface } from '../auth/session/types';
import { ApiVersion } from '../base-types';
interface FakeResourceWithCustomPrefixFindArgs {
    session: SessionInterface;
    id: string | number;
}
export default class FakeResourceWithCustomPrefix extends Base {
    static API_VERSION: ApiVersion;
    protected static NAME: string;
    protected static PLURAL_NAME: string;
    protected static CUSTOM_PREFIX: string;
    protected static HAS_ONE: {};
    protected static HAS_MANY: {};
    protected static PATHS: ResourcePath[];
    static find: ({ session, id, }: FakeResourceWithCustomPrefixFindArgs) => Promise<FakeResourceWithCustomPrefix | null>;
    id?: number | string | null;
    attribute?: string | null;
}
export {};
//# sourceMappingURL=fake-resource-with-custom-prefix.d.ts.map