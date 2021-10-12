"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ioredis_1 = require("ioredis");
class RedisReJSON extends ioredis_1.default {
    constructor(options) {
        super(options);
        this.json_get = async (key, path) => {
            let res;
            if (path) {
                Array.isArray(path)
                    ? (res = await this.call('JSON.GET', [key, ...path]))
                    : (res = await this.call('JSON.GET', [key, path]));
            }
            else {
                res = await this.call('JSON.GET', key);
            }
            if (res) {
                return JSON.parse(res);
            }
            return null;
        };
        this.json_del = async (key, path) => {
            let res;
            path === undefined
                ? (res = await this.call('JSON.DEL', key))
                : (res = await this.call('JSON.DEL', [key, path]));
            return res;
        };
        this.json_forget = async (key, path) => {
            let res;
            path === undefined
                ? (res = await this.call('JSON.DEL', key))
                : (res = await this.call('JSON.DEL', [key, path]));
            return res;
        };
        this.json_mget = async (key, path) => {
            let res;
            Array.isArray(key)
                ? (res = await this.call('JSON.MGET', [...key, path]))
                : (res = await this.call('JSON.MGET', [key, path]));
            if (res) {
                const parsed = res.map((item) => JSON.parse(item));
                return parsed;
            }
            return null;
        };
        this.json_set = async (key, path, data, exists) => {
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
            if (res)
                return 'OK';
            return null;
        };
        this.json_type = async (key, path) => {
            let res;
            path === undefined
                ? (res = await this.call('JSON.TYPE', key))
                : (res = await this.call('JSON.TYPE', [key, path]));
            return res;
        };
        this.json_numincrby = async (key, path, number) => {
            try {
                const res = await this.call('JSON.NUMINCRBY', [key, path, number]);
                return parseFloat(res);
            }
            catch (error) {
                const { message } = error;
                return message;
            }
        };
        this.json_nummultby = async (key, path, number) => {
            try {
                const res = await this.call('JSON.NUMMULTBY', [key, path, number]);
                return parseFloat(res);
            }
            catch (error) {
                const { message } = error;
                return message;
            }
        };
        this.json_strappend = async (key, path, data) => {
            try {
                const res = await this.call('JSON.STRAPPEND', [
                    key,
                    path,
                    JSON.stringify(data),
                ]);
                return parseInt(res);
            }
            catch (error) {
                const { message } = error;
                return message;
            }
        };
        this.json_strlen = async (key, path) => {
            let res;
            try {
                path === undefined
                    ? (res = await this.call('JSON.STRLEN', key))
                    : (res = await this.call('JSON.STRLEN', [key, path]));
                if (!res)
                    return null;
                return parseInt(res);
            }
            catch (error) {
                const { message } = error;
                return message;
            }
        };
        this.json_arrappend = async (key, path, data) => {
            try {
                if (Array.isArray(data)) {
                    const array = data.map((item) => JSON.stringify(item));
                    const res = await this.call('JSON.ARRAPPEND', [
                        key,
                        path,
                        ...array,
                    ]);
                    return res;
                }
                const res = await this.call('JSON.ARRAPPEND', [
                    key,
                    path,
                    JSON.stringify(data),
                ]);
                return res;
            }
            catch (error) {
                const { message } = error;
                return message;
            }
        };
        this.json_arrindex = async (key, path, data, start, stop) => {
            let res;
            try {
                if (start !== undefined && stop === undefined) {
                    res = await this.call('JSON.ARRINDEX', [
                        key,
                        path,
                        JSON.stringify(data),
                        start,
                    ]);
                    return res;
                }
                if (start !== undefined && stop !== undefined) {
                    res = await this.call('JSON.ARRINDEX', [
                        key,
                        path,
                        JSON.stringify(data),
                        start,
                        stop,
                    ]);
                    return res;
                }
                res = await this.call('JSON.ARRINDEX', [
                    key,
                    path,
                    JSON.stringify(data),
                ]);
                return res;
            }
            catch (error) {
                const { message } = error;
                return message;
            }
        };
        this.json_arrinsert = async (key, path, index, data) => {
            try {
                if (Array.isArray(data)) {
                    const array = data.map((item) => JSON.stringify(item));
                    const res = await this.call('JSON.ARRINSERT', [
                        key,
                        path,
                        index,
                        ...array,
                    ]);
                    return res;
                }
                const res = await this.call('JSON.ARRINSERT', [
                    key,
                    path,
                    index,
                    JSON.stringify(data),
                ]);
                return res;
            }
            catch (error) {
                const { message } = error;
                return message;
            }
        };
        this.json_arrlen = async (key, path) => {
            try {
                let res;
                path === undefined
                    ? (res = await this.call('JSON.ARRLEN', key))
                    : (res = await this.call('JSON.ARRLEN', [key, path]));
                return res;
            }
            catch (error) {
                const { message } = error;
                return message;
            }
        };
        this.json_arrpop = async (key, path, index) => {
            try {
                let res;
                if (path !== undefined && index === undefined) {
                    res = await this.call('JSON.ARRPOP', [key, path]);
                    return res;
                }
                if (path !== undefined && index !== undefined) {
                    res = await this.call('JSON.ARRPOP', [key, path, index]);
                    return res;
                }
                res = await this.call('JSON.ARRPOP', key);
                return res;
            }
            catch (error) {
                return error.message;
            }
        };
        this.json_arrtrim = async (key, path, start, stop) => {
            try {
                const res = await this.call('JSON.ARRTRIM', [
                    key,
                    path,
                    start,
                    stop,
                ]);
                return res;
            }
            catch (error) {
                const { message } = error;
                return message;
            }
        };
        this.json_objkeys = async (key, path) => {
            let res;
            path === undefined
                ? (res = await this.call('JSON.OBJKEYS', key))
                : (res = await this.call('JSON.OBJKEYS', [key, path]));
            return res;
        };
        this.json_objlen = async (key, path) => {
            let res;
            path === undefined
                ? (res = await this.call('JSON.OBJLEN', key))
                : (res = await this.call('JSON.OBJLEN', [key, path]));
            return res;
        };
        this.json_resp = async (key, path) => {
            let res;
            path === undefined
                ? (res = await this.call('JSON.RESP', key))
                : (res = await this.call('JSON.RESP', [key, path]));
            return res;
        };
    }
}
module.exports = RedisReJSON;
//# sourceMappingURL=index.js.map