const staticAnimeshData = "site-cache-v1";
const assets = [
  //   "/",
  "/index.html",
  "/img/about.png",
  "/img/angular.svg",
  "/img/app-icon.png",
  "/img/aws-colored.svg",
  "/img/bitu.jpeg",
  "/img/blog1.png",
  "/img/blog2.png",
  "/img/blog3.png",
  "/img/bootstrap-colored.svg",
  "/img/c-colored.svg",
  "/img/code-icon.png",
  "/img/contact-bg.png",
  "/img/css3-colored.svg",
  "/img/dart-colored.svg",
  "/img/design-icon.png",
  "/img/digitalocean-colored.svg",
  "/img/docker-colored.svg",
  "/img/express-colored.svg",
  "/img/fastapi-colored.svg",
  "/img/figma-colored.svg",
  "/img/firebase-colored.svg",
  "/img/flutter-colored.svg",
  "/img/github-cover.jpg",
  "/img/googlecloud-colored.svg",
  "/img/heroku-colored.svg",
  "/img/html5-colored.svg",
  "/img/im.jpeg",
  "/img/java-colored.svg",
  "/img/javascript-colored.svg",
  "/img/jquery-colored.svg",
  "/img/kotlin-colored.svg",
  "/img/laravel-colored.svg",
  "/img/linkedin.jpeg",
  "/img/linux-colored.svg",
  "/img/logo_android.png",
  "/img/logo_apple.png",
  "/img/logo.png",
  "/img/logo_web.png",
  "/img/manito.gif",
  "/img/map.png",
  "/img/mindhub.jpeg",
  "/img/mongodb-colored.svg",
  "/img/mysql-colored.svg",
  "/img/nodejs-colored.svg",
  "/img/oracle-colored.svg",
  "/img/oracleone.png",
  "/img/person.png",
  "/img/php-colored.svg",
  "/img/postgresql-colored.svg",
  "/img/react-colored.svg",
  "/img/swift-colored.svg",
  "/img/testi.png",
  "/img/ula.jpeg",
  "/img/valid.jpeg",
  "/img/vuejs-colored.svg",
  "/img/webpack-colored.svg",
  "/assets/css/styles.css",
  "/assets/css/swiper-bundle.min.css",
  "/assets/js/main.js",
  "/assets/js/swiper-bundle.min.js",
  "/assets/img/blob.svg",
  "/img/portfolio/app-developers.png",
  "/img/portfolio/Blogs.9fe2a81c3c78dae78953.webp",
  "/img/portfolio/Blogsnoticias.4468576c10fb00dd6139.webp",
  "/img/portfolio/Ecommerce.ff51dcfadc29caca19b6.webp",
  "/img/portfolio/Foros-y-Comunidades-en-Línea.c1a154f48ddb206e5f98.webp",
  "/img/portfolio/L4J673X4LBDFHEJGBXSUGRBV4A.jpg",
  "/img/portfolio/Páginas-Web-Dinámicas-_Especiales_.3ea630cfa1024417488b.webp",
  "/img/portfolio/Pagina-web.d87ca96a0cd9acbeeb45.jpg",
  "/img/portfolio/Pagina-web.d87ca96a0cd9acbeeb45.webp",
  "/img/portfolio/Porfolio.f742e49ed7f29750d188.webp",
  "/img/portfolio/Sitios_educativos.ef7d97a0c2f302372406.webp",
  "/img/portfolio/Sitios-Web-de-Viajes-Landing-Page.fcbbaa0175595ef67e09.webp",
];

self.addEventListener("install", (installEvent) => {
  installEvent.waitUntil(
    caches.open(staticAnimeshData).then((cache) => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (fetchEvent) => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then((res) => {
      return res || fetch(fetchEvent.request);
    })
  );
});
