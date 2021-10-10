import Redis from 'ioredis';

class RedisWithCall extends Redis {
  call: (command: string, args: string | string[] | any[]) => Promise<any>;
}

export default class RedisReJSON extends RedisWithCall {
  constructor(options: Redis.RedisOptions) {
    super(options as Redis.RedisOptions);
  }

  public json_get = async (
    key: string,
    path?: string | string[]
  ): Promise<Object | null> => {
    let res;
    if (path) {
      Array.isArray(path)
        ? (res = await this.call('JSON.GET', [key, ...path]))
        : (res = await this.call('JSON.GET', [key, path]));
    } else {
      res = await this.call('JSON.GET', key);
    }
    if (res) {
      return JSON.parse(res);
    }

    return null;
  };

  public json_del = async (
    key: string,
    path?: string
  ): Promise<number> => {
    let res;
    path === undefined
      ? (res = await this.call('JSON.DEL', key))
      : (res = await this.call('JSON.DEL', [key, path]));

    return res as any;
  };

  public json_forget = async (key: string, path?: string) => {
    let res;
    path === undefined
      ? (res = await this.call('JSON.DEL', key))
      : (res = await this.call('JSON.DEL', [key, path]));

    return res as any;
  };

  public json_mget = async (
    key: string | string[],
    path: string
  ): Promise<Object | null> => {
    let res: any;

    Array.isArray(key)
      ? (res = await this.call('JSON.MGET', [...key, path]))
      : (res = await this.call('JSON.MGET', [key, path]));

    if (res) {
      const parsed = res.map((item: string) => JSON.parse(item));
      return parsed;
    }
    return null;
  };

  public json_set = async (
    key: string,
    path: string,
    data: any,
    exists?: 'NX' | 'XX'
  ): Promise<'OK' | null> => {
    let res;
    exists === undefined
      ? (res = await this.call('JSON.SET', [
          key,
          path,
          JSON.stringify(data),
        ]))
      : (res = await this.call('JSON.SET', [
          key,
          path,
          JSON.stringify(data),
          exists,
        ]));

    if (res) return 'OK';
    return null;
  };

  public json_type = async (
    key: string,
    path?: string
  ): Promise<string | null> => {
    let res;
    path === undefined
      ? (res = await this.call('JSON.TYPE', key))
      : (res = await this.call('JSON.TYPE', [key, path]));

    return res;
  };

  public json_numincrby = async (
    key: string,
    path: string,
    number: number
  ): Promise<number | string> => {
    try {
      const res = await this.call('JSON.NUMINCRBY', [key, path, number]);
      return parseFloat(res!);
    } catch (error) {
      const { message } = error as Error;
      return message;
    }
  };

  public json_nummultby = async (
    key: string,
    path: string,
    number: number
  ): Promise<number | string> => {
    try {
      const res = await this.call('JSON.NUMMULTBY', [key, path, number]);
      return parseFloat(res!);
    } catch (error) {
      const { message } = error as Error;
      return message;
    }
  };

  public json_strappend = async (
    key: string,
    path: string,
    data: string
  ): Promise<number | string> => {
    try {
      const res = await this.call('JSON.STRAPPEND', [
        key,
        path,
        JSON.stringify(data),
      ]);
      return parseInt(res!);
    } catch (error) {
      const { message } = error as Error;
      return message;
    }
  };

  public json_strlen = async (
    key: string,
    path?: string
  ): Promise<number | string | null> => {
    let res;

    try {
      path === undefined
        ? (res = await this.call('JSON.STRLEN', key))
        : (res = await this.call('JSON.STRLEN', [key, path]));

      if (!res) return null;
      return parseInt(res!);
    } catch (error) {
      const { message } = error as Error;
      return message;
    }
  };

  public json_arrappend = async (
    key: string,
    path: string,
    data: any
  ): Promise<number | string> => {
    try {
      if (Array.isArray(data)) {
        const array = data.map((item) => JSON.stringify(item));

        const res = await this.call('JSON.ARRAPPEND', [
          key,
          path,
          ...array,
        ]);

        return res!;
      }

      const res = await this.call('JSON.ARRAPPEND', [
        key,
        path,
        JSON.stringify(data),
      ]);

      return res!;
    } catch (error) {
      const { message } = error as Error;
      return message;
    }
  };

  public json_arrindex = async (
    key: string,
    path: string,
    data: string,
    start?: number,
    stop?: number
  ): Promise<number | string> => {
    let res;

    try {
      if (start !== undefined && stop === undefined) {
        res = await this.call('JSON.ARRINDEX', [
          key,
          path,
          JSON.stringify(data),
          start,
        ]);

        return res!;
      }

      if (start !== undefined && stop !== undefined) {
        res = await this.call('JSON.ARRINDEX', [
          key,
          path,
          JSON.stringify(data),
          start,
          stop,
        ]);

        return res!;
      }

      res = await this.call('JSON.ARRINDEX', [
        key,
        path,
        JSON.stringify(data),
      ]);

      return res!;
    } catch (error) {
      const { message } = error as Error;
      return message;
    }
  };

  public json_arrinsert = async (
    key: string,
    path: string,
    index: number,
    data: any
  ): Promise<number | string> => {
    try {
      if (Array.isArray(data)) {
        const array = data.map((item) => JSON.stringify(item));

        const res = await this.call('JSON.ARRINSERT', [
          key,
          path,
          index,
          ...array,
        ]);

        return res!;
      }

      const res = await this.call('JSON.ARRINSERT', [
        key,
        path,
        index,
        JSON.stringify(data),
      ]);

      return res!;
    } catch (error) {
      const { message } = error as Error;
      return message;
    }
  };

  public json_arrlen = async (
    key: string,
    path?: string
  ): Promise<number | string> => {
    try {
      let res;
      path === undefined
        ? (res = await this.call('JSON.ARRLEN', key))
        : (res = await this.call('JSON.ARRLEN', [key, path]));

      return res!;
    } catch (error) {
      const { message } = error as Error;
      return message;
    }
  };

  public json_arrpop = async (
    key: string,
    path?: string,
    index?: number
  ) => {
    try {
      let res;
      if (path !== undefined && index === undefined) {
        res = await this.call('JSON.ARRPOP', [key, path]);
        return res!;
      }
      if (path !== undefined && index !== undefined) {
        res = await this.call('JSON.ARRPOP', [key, path, index]);
        return res!;
      }

      res = await this.call('JSON.ARRPOP', key);
      return res!;
    } catch (error: any) {
      return error.message;
    }
  };

  public json_arrtrim = async (
    key: string,
    path: string,
    start: number,
    stop: number
  ): Promise<number | string> => {
    try {
      const res = await this.call('JSON.ARRTRIM', [
        key,
        path,
        start,
        stop,
      ]);
      return res!;
    } catch (error) {
      const { message } = error as Error;
      return message;
    }
  };

  public json_objkeys = async (
    key: string,
    path?: string
  ): Promise<string[] | null> => {
    let res;

    path === undefined
      ? (res = await this.call('JSON.OBJKEYS', key))
      : (res = await this.call('JSON.OBJKEYS', [key, path]));

    return res;
  };

  public json_objlen = async (
    key: string,
    path?: string
  ): Promise<number | null> => {
    let res;

    path === undefined
      ? (res = await this.call('JSON.OBJLEN', key))
      : (res = await this.call('JSON.OBJLEN', [key, path]));

    return res;
  };

  public json_resp = async (
    key: string,
    path?: string
  ): Promise<object | null> => {
    let res;
    path === undefined
      ? (res = await this.call('JSON.RESP', key))
      : (res = await this.call('JSON.RESP', [key, path]));

    return res;
  };
}
