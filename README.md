# koa-cookie
Cookie parser middleware for koa.
Can also be used with [koa-router](https://www.npmjs.com/package/koa-router).

## Install
```node
npm install koa-cookie --save
```

### Example

```javascript
import Koa from 'koa';
import cookie from 'koa-cookie';

const app = Koa();
app.use(cookie());

app.use(async function (ctx, next) {
  const cookies = ctx.cookie;
  /*
    if cookies sent are of the form: 'name=abc; age=20; token = xyz;'
    Then ctx.cookie is an object of the form:
    {
      name: 'abc',
      age: '20',
      token: 'xyz'
    }
  */
});

```

### Example with koa-router
```javascript
var app = require('koa')();
var cookie = require('koa-cookie');
var router = require('koa-router')();

router.use(cookie());
 
router.get('/', async (context) => {
  const cookies = context.cookie;
  /*
    if cookies sent are of the form: 'name=abc; age=20; token = xyz;'
    Then ctx.cookie is an object of the form:
    {
      name: 'abc',
      age: '20',
      token: 'xyz'
    }
  */
});
 
app
  .use(router.routes())
  .use(router.allowedMethods());
```