import Base, { ParamSet, ResourcePath } from '../base-rest-resource';
import { SessionInterface } from '../auth/session/types';
import { ApiVersion } from '../base-types';
interface FakeResourceFindArgs {
    params?: ParamSet;
    session: SessionInterface;
    id: number;
    other_resource_id?: number | null;
}
interface FakeResourceAllArgs {
    params?: ParamSet;
    session: SessionInterface;
}
interface FakeResourceCustomArgs {
    session: SessionInterface;
    id: number;
    other_resource_id: number;
}
export default class FakeResource extends Base {
    static API_VERSION: ApiVersion;
    protected static NAME: string;
    protected static PLURAL_NAME: string;
    protected static READ_ONLY_ATTRIBUTES: string[];
    protected static HAS_ONE: {
        has_one_attribute: typeof FakeResource;
    };
    protected static HAS_MANY: {
        has_many_attribute: typeof FakeResource;
    };
    protected static PATHS: ResourcePath[];
    static find: ({ session, params, id, other_resource_id, ...otherArgs }: FakeResourceFindArgs) => Promise<FakeResource | null>;
    static all: ({ session, params, }: FakeResourceAllArgs) => Promise<FakeResource[]>;
    static custom: ({ session, id, other_resource_id, }: FakeResourceCustomArgs) => Promise<Body>;
    id?: number | string | null;
    attribute?: string | null;
    has_one_attribute?: FakeResource | null;
    has_many_attribute?: FakeResource[] | null;
    other_resource_id?: number | null;
}
export {};
//# sourceMappingURL=fake-resource.d.ts.map