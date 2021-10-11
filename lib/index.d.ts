import Redis from 'ioredis';
export default class RedisReJSON extends Redis {
    call: (command: string, args: string | string[] | any[]) => Promise<any>;
    constructor(options: Redis.RedisOptions);
    json_get: (key: string, path?: string | string[] | undefined) => Promise<Object | null>;
    json_del: (key: string, path?: string | undefined) => Promise<number>;
    json_forget: (key: string, path?: string | undefined) => Promise<any>;
    json_mget: (key: string | string[], path: string) => Promise<Object | null>;
    json_set: (key: string, path: string, data: any, exists?: "NX" | "XX" | undefined) => Promise<'OK' | null>;
    json_type: (key: string, path?: string | undefined) => Promise<string | null>;
    json_numincrby: (key: string, path: string, number: number) => Promise<number | string>;
    json_nummultby: (key: string, path: string, number: number) => Promise<number | string>;
    json_strappend: (key: string, path: string, data: string) => Promise<number | string>;
    json_strlen: (key: string, path?: string | undefined) => Promise<number | string | null>;
    json_arrappend: (key: string, path: string, data: any) => Promise<number | string>;
    json_arrindex: (key: string, path: string, data: string, start?: number | undefined, stop?: number | undefined) => Promise<number | string>;
    json_arrinsert: (key: string, path: string, index: number, data: any) => Promise<number | string>;
    json_arrlen: (key: string, path?: string | undefined) => Promise<number | string>;
    json_arrpop: (key: string, path?: string | undefined, index?: number | undefined) => Promise<any>;
    json_arrtrim: (key: string, path: string, start: number, stop: number) => Promise<number | string>;
    json_objkeys: (key: string, path?: string | undefined) => Promise<string[] | null>;
    json_objlen: (key: string, path?: string | undefined) => Promise<number | null>;
    json_resp: (key: string, path?: string | undefined) => Promise<object | null>;
}
//# sourceMappingURL=index.d.ts.map