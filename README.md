# IORedis ReJSON

This module adds a layer of commands to interact with [Redis ReJSON module](https://github.com/RedisJSON/RedisJSON) on top of IORedis.

For IORedis commands please refer to [IORedis repository](https://github.com/luin/ioredis).

This module uses ioredis and @types/ioredis as a dependencies

&nbsp;

**Known limitations:** `multi` / `pipeline` is not supported with this module.

**Disclaimer:** this module is not battle tested, if you find any issue with it please open an issue or a pull request.

&nbsp;

## Quick Start

&nbsp;

1. Install module

   ```
   yarn add ioredis-rejson
   yarn add -D @types/ioredis
   ```

   or

   ```
   npm install --save ioredis-rejson
   npm install --save-dev @types/ioredis
   ```

   &nbsp;

2. Create a client instance

```js
import Redis from 'ioredis-rejson';

const redis = new Redis({
  host: '127.0.0.1',
  port: 16379,
});
```

&nbsp;

3. Interact with redis using the just created client instance

```js
...
const main = async () => {
  // ReJSON Methods
  const res = await redis.json_set('JSONKEY', '.', { foo: 'bar' }, 'NX');
  const res2 = await redis.json_get('JSONKEY');

  console.log(res); // OK
  console.log(res2); // { foo: "bar"}

  // IORedis Methods
  const res3 = await redis.set('KEY', 'VALUE');
  const res4 = await redis.get('KEY');

  console.log(res3); // OK
  console.log(res4); // "VALUE"
}

main()
```

&nbsp;

NOTE: ioredis-rejson serializes and deserializes data where needed to facilitate interaction, you can pass objects, arrays, strings, etc and it will be serialized as json where it needs to be, same for get requests, the returned data will be deserialized.

&nbsp;

## Commands

### JSON_SET

```js
await redis.json_set('KEY', 'PATH', 'DATA', '*optional* NX | XX');
```

##### Return value

String `OK` if executed correctly or `null `if the specified `NX` `XX` conditions were not met.

##### Time complexity

O(M+N), where M is the size of the original value (if it exists) and N is the size of the new value.

&nbsp;

---

### JSON_GET

```js
await redis.json_get('KEY', '*optional* PATH');
```

##### Return value

Returns the parsed json data from `path` or `null`

##### Time complexity

O(N), where N is the size of the value.

&nbsp;

---

### JSON_MGET

```js
await redis.json_mget(['KEY1', 'KEY2', '...'], 'PATH');
```

##### Return value

Returns the parsed json data from `path` or `null`

##### Time complexity

O(M\*N), where M is the number of keys and N is the size of the value.

&nbsp;

---

### JSON_DEL

```js
await redis.json_del('KEY', '*optional* PATH');
```

##### Return value

[Integer](http://redis.io/topics/protocol#resp-integers), specifically the number of paths deleted (0 or 1).

##### Time complexity

O(N), where N is the size of the deleted value.

&nbsp;

---

### JSON_NUMINCRBY

```js
await redis.json_numincrby('KEY', 'PATH', 'NUMBER');
```

##### Return value

Float, specifically the new value

##### Time complexity

O(1).

&nbsp;

---

### JSON_NUMMULTBY

```js
await redis.json_nummultby('KEY', 'PATH', 'NUMBER');
```

##### Return value

Float, specifically the new value

##### Time complexity

O(1).

&nbsp;

---

### JSON_STRAPPEND

```js
await redis.json_strappend('KEY', '*optional* PATH', 'NUMBER');
```

##### Return value

[Integer](http://redis.io/topics/protocol#resp-integers), specifically the string's new length.

##### Time complexity

O(N), where N is the new string's length.

&nbsp;

---

### JSON_STRLEN

```js
await redis.json_strlen('KEY', '*optional* PATH');
```

##### Return value

[Integer](http://redis.io/topics/protocol#resp-integers), specifically the string's length.

##### Time complexity

O(1).

&nbsp;

---

### JSON_ARRAPEND

```js
await redis.json_arrapend('KEY', 'PATH', 'DATA | [DATA]');
```

##### Return value

[Integer](http://redis.io/topics/protocol#resp-integers), specifically the array's new length.

##### Time complexity

O(1).

&nbsp;

---

### JSON_ARRINDEX

```js
await redis.json_arrindex(
  'KEY',
  'PATH',
  'DATA',
  '*optional* START',
  '*optional* STOP'
);
```

##### Return value

[Integer](http://redis.io/topics/protocol#resp-integers), specifically the position of the scalar value in the array, or -1 if unfound.

##### Time complexity

O(N), where N is the array's size.

&nbsp;

---

### JSON_ARRINSERT

```js
await redis.json_arrinsert('KEY', 'PATH', 'INDEX', 'DATA | [DATA]');
```

##### Return value

[Integer](http://redis.io/topics/protocol#resp-integers), specifically the array's new size.

##### Time complexity

O(N), where N is the array's size.

&nbsp;

---

### JSON_ARRLEN

```js
await redis.json_arrlen('KEY', '*optional* PATH');
```

##### Return value

[Integer](http://redis.io/topics/protocol#resp-integers), specifically the array's length.

##### Time complexity

O(1).

&nbsp;

---

### JSON_ARRPOP

```js
await redis.json_arrpop('KEY', '*optional* PATH', '*optional* INDEX');
```

##### Return value

The deserialized popped value

##### Time complexity

O(N), where N is the array's size for `index` other than the last element, O(1) otherwise.

&nbsp;

---

### JSON_ARRTRIM

```js
await redis.json_arrtrim('KEY', 'PATH', 'START', 'STOP');
```

##### Return value

[Integer](http://redis.io/topics/protocol#resp-integers), specifically the array's new size.

##### Time complexity

O(N), where N is the array's size.

&nbsp;

---

### JSON_OBJKEYS

```js
await redis.json_objkeys('KEY', '*optional* PATH');
```

##### Return value

[Array](http://redis.io/topics/protocol#resp-arrays), specifically the key names in the object as strings.

##### Time complexity

O(N), where N is the number of keys in the object.

&nbsp;

---

### JSON_OBJLEN

```js
await redis.json_objlen('KEY', '*optional* PATH');
```

##### Return value

[Integer](http://redis.io/topics/protocol#resp-integers), specifically the number of keys in the object.

##### Time complexity

O(1).

&nbsp;

---

### JSON_TYPE

```js
await redis.json_type('KEY', '*optional* PATH');
```

##### Return value

[Simple String](http://redis.io/topics/protocol#resp-simple-strings), specifically the type of value.

##### Time complexity

O(1).

&nbsp;

---

### JSON_FORGET

_same as json_del_

```js
await redis.json_forget('KEY', '*optional* PATH');
```

##### Return value

[Integer](http://redis.io/topics/protocol#resp-integers), specifically the number of paths deleted (0 or 1).

##### Time complexity

O(N), where N is the size of the deleted value.

&nbsp;

---

### JSON_RESP

```js
await redis.json_resp('KEY', '*optional* PATH');
```

##### Return value

[Array](http://redis.io/topics/protocol#resp-arrays), specifically the JSON's RESP form as detailed.

##### Time complexity

O(N), where N is the size of the JSON value.
