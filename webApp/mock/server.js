var app = require('koa')();
var router = require('koa-router')();
var koaBody = require('koa-body')();


router.get('/', function* (next) {
    this.body = 'hello koa !'
})

router.post('/api/post', koaBody, function* (next) {
    console.log(this.request.body)
    this.body = JSON.stringify(this.request.body)
})
app.listen(3000);
