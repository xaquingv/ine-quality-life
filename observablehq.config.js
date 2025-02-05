const ccaaPages = [
  {path:"/ccaa/an", name:"Andalucía"},
  {path:"/ccaa/ar", name:"Aragón"},
  {path:"/ccaa/as", name:"Asturias"},
  {path:"/ccaa/ib", name:"Baleares"},
  {path:"/ccaa/cn", name:"Canarias"},
  {path:"/ccaa/cb", name:"Cantabria"},
  {path:"/ccaa/cl", name:"Castilla y León"},
  {path:"/ccaa/cm", name:"Castilla-La Mancha"},
  {path:"/ccaa/ct", name:"Cataluña"},
  {path:"/ccaa/vc", name:"Comunitat Valenciana"},
  {path:"/ccaa/ex", name:"Extremadura"},
  {path:"/ccaa/ga", name:"Galicia"},
  {path:"/ccaa/md", name:"Madrid"},
  {path:"/ccaa/mc", name:"Murcia"},
  {path:"/ccaa/nc", name:"Navarra"},
  {path:"/ccaa/pv", name:"País Vasco"},
  {path:"/ccaa/ri", name:"La Rioja"},
  {path:"/ccaa/ce", name:"Ceuta"},
  {path:"/ccaa/ml", name:"Melilla"}
];

export default {
  title: "Indicador Multidimensional de Calidad de Vida (INE)",
  head: `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Indicador Multidimensional de Calidad de Vida (INE)</title>
  <meta name="description" content="">
  <meta name="keywords" content="">
  <meta name="author" content="Fundació ViT, Visualització per a la Transparència">
  <meta property="og:title" content="">
  <meta property="og:description" content="">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://imcv.fndvit.org/">
  <meta property="og:image" content="/docs/img/social.png">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="">
  <meta name="twitter:description" content="">
  <meta name="twitter:image" content="/docs/img/social.png">
  <link rel="shortcut icon" type="image/x-icon" href="https://images.squarespace-cdn.com/content/v1/5e5b7eebeb83b746b6481a2d/1604671720103-EPJSELDNWVIPCWI63H7G/ke17ZwdGBToddI8pDm48kNCIUUInZz-JelovUC4TKJ9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpy2nmdcYIRqEQwGN8P7xrL_yE-hs8s0G614KmYuoTh2b5xIcJ7iebeF3-4wt8VfJy4/favicon.ico?format=100w">
  <link rel="preconnect" href="https://use.typekit.net" crossorigin />
  <link rel="preconnect" href="https://p.typekit.net" crossorigin />
  <link rel="preload" as="style" href="https://use.typekit.net/vpz4xzt.css" />
  <link rel="stylesheet" href="https://use.typekit.net/vpz4xzt.css" media="print" onload="this.media='all'" />
  <link rel="stylesheet" href="styles.css">
  <noscript>
    <link rel="stylesheet" href="https://use.typekit.net/vpz4xzt.css" />
  </noscript>
  `,
  search: false,
  dynamicPaths: ccaaPages.map(d=>d.path),
  pages: [
    {name: "El indicador", path: "/imcv-dashboard"},
    {name: "Cómo (y por qué) lo rehicimos", path: "/making-of"},
    {name: "Descarga los datos", path: "/data"},
    {name: "La calidad de vida por CC.AA.", open: true, pages: ccaaPages},
  ],

  header:`<style>

  #observablehq-header .logo {
    height: 2rem;
    width: auto;
  }

  #observablehq-header a[href] {
    color: inherit;
  }
  
  #observablehq-header a[target="_blank"] {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    text-decoration: none;
  }
  
  #observablehq-header a[target="_blank"]:hover span {
    text-decoration: underline;
  }
  
  #observablehq-header a[target="_blank"]:not(:hover, :focus)::after {
    color: var(--theme-foreground-muted);
  }
  
  @container not (min-width: 640px) {
    .hide-if-small {
      display: none;
    }
  }
  
  </style>
  <div style="display: flex; align-items: center; gap: 0.5rem; height: 2.2rem; margin: -1.5rem -2rem 2rem -2rem; padding: 0.5rem 2rem; border-bottom: solid 1px var(--theme-foreground-faintest); font: 500 16px var(--sans-serif);">
    <div style="display: flex; flex-grow: 1; justify-content: space-between; align-items: center;">
      <b style="display: flex; align-items: center">
        <a href="https://www.fundaciovit.org/">
          <img alt="VIT Logo" style="height: 30px; margin-right: 10px;" src="https://images.squarespace-cdn.com/content/v1/5e5b7eebeb83b746b6481a2d/1604671720103-EPJSELDNWVIPCWI63H7G/ke17ZwdGBToddI8pDm48kNCIUUInZz-JelovUC4TKJ9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpy2nmdcYIRqEQwGN8P7xrL_yE-hs8s0G614KmYuoTh2b5xIcJ7iebeF3-4wt8VfJy4/favicon.ico?format=100w" >
        </a>
        <a href="" target="_self" rel="">
        Indicador Multidimensional de Calidad de Vida (INE)
        </a>
      </b>
      <span style="display: flex; align-items: baseline; gap: 0.5rem; font-size: 13px;">
        <a target="_blank" href="https://github.com/fndvit/ine-quality-life">
          <svg aria-roledescription="logo" aria-label="logo de GitHub" viewBox="0 0 64 64" width="48" height="48"><path d="M32,16c-8.8,0-16,7.2-16,16c0,7.1,4.6,13.1,10.9,15.2 c0.8,0.1,1.1-0.3,1.1-0.8c0-0.4,0-1.4,0-2.7c-4.5,1-5.4-2.1-5.4-2.1c-0.7-1.8-1.8-2.3-1.8-2.3c-1.5-1,0.1-1,0.1-1 c1.6,0.1,2.5,1.6,2.5,1.6c1.4,2.4,3.7,1.7,4.7,1.3c0.1-1,0.6-1.7,1-2.1c-3.6-0.4-7.3-1.8-7.3-7.9c0-1.7,0.6-3.2,1.6-4.3 c-0.2-0.4-0.7-2,0.2-4.2c0,0,1.3-0.4,4.4,1.6c1.3-0.4,2.6-0.5,4-0.5c1.4,0,2.7,0.2,4,0.5c3.1-2.1,4.4-1.6,4.4-1.6 c0.9,2.2,0.3,3.8,0.2,4.2c1,1.1,1.6,2.5,1.6,4.3c0,6.1-3.7,7.5-7.3,7.9c0.6,0.5,1.1,1.5,1.1,3c0,2.1,0,3.9,0,4.4 c0,0.4,0.3,0.9,1.1,0.8C43.4,45.1,48,39.1,48,32C48,23.2,40.8,16,32,16z"></path></svg>
          <span>Colabora en el repositorio</span>
        </a>
      </span>
    </div>
  </div>`,
  root: "src",
  style:"style.css",
  footer: '',
  cleanUrls: false,
  toc: {show: true, label:'Contenido'}
};
