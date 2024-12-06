const Koa = require('koa');
const app = new Koa();

// Middleware to handle requests
app.use(async ctx => {
    if (ctx.path === '/') {
        ctx.status = 200;
        ctx.body = '<h1>Index sayfasına hoşgeldiniz</h1>';
    } else if (ctx.path === '/hakkimda') {
        ctx.status = 200;
        ctx.body = '<h1>Hakkımda sayfasına hoşgeldiniz</h1>';
    } else if (ctx.path === '/iletisim') {
        ctx.status = 200;
        ctx.body = '<h1>İletişim sayfasına hoşgeldiniz</h1>';
    } else {
        ctx.status = 404;
        ctx.body = '<h1>404 Sayfa Bulunamadı</h1>';
    }
});

// Sunucuyu 3000 portunda dinle
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Koa sunucusu ${PORT} portunda çalışıyor...`);
});
