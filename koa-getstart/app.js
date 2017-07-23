const Koa = require('koa');
const app = new Koa();
const KeyGrip = require('keygrip')
const staticServe = require('koa-static');
const path = require('path');
const publicFiles = staticServe(path.join(__dirname, 'public'));
publicFiles._name = 'static /public';

app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');

// app.use(async (ctx, next) => {
//   const start = new Date();
//   await next();
//   const ms = new Date() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// })

// app.use(async (ctx, next) => {
//   const start = new Date();
//   await next();
//   const ms = new Date() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
// })

app.use(publicFiles);
app.use(async function (ctx, next) {
  console.log('>> one');
  await next();
  console.log('<< one');
});

app.use(async function (ctx, next) {
  console.log('>> two');
  //ctx.body = 'two';
  // await next();
  console.log('<< two');
});

app.use(async function (ctx, next) {
  console.log('>> three');
  await next();
  console.log('<< three');
});

app.on('error', (err, ctx) =>
  console.error('server error', err, ctx)
);

app.listen(3000, (err) => {
  console.log('App is ready on 3000 port');
});