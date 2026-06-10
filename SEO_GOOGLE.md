# SEO y Google Search Console — Fundación Mesa del Señor

## 1. Sitemap dinámico

El sitio genera automáticamente un sitemap XML en:

```
https://mesadelsenor.co/sitemap.xml
```

El sitemap incluye todas las páginas estáticas + contenido dinámico (proyectos, noticias, espiritualidad) con sus fechas de última modificación. Se actualiza automáticamente al agregar nuevo contenido desde el admin.

---

## 2. Registrar en Google Search Console

### Paso 1 — Acceder a Search Console
1. Ir a [search.google.com/search-console](https://search.google.com/search-console)
2. Iniciar sesión con la cuenta Google de la fundación
3. Clic en **"Agregar propiedad"**

### Paso 2 — Verificar el dominio
Seleccionar **"Prefijo de URL"** e ingresar `https://mesadelsenor.co`

**Método de verificación recomendado: Etiqueta HTML**
1. Google genera un meta tag como: `<meta name="google-site-verification" content="XXXXXXXXXX" />`
2. Agregar ese tag en `resources/views/app.blade.php` dentro del `<head>`:
   ```html
   <meta name="google-site-verification" content="PEGA_TU_CÓDIGO_AQUÍ">
   ```
3. Hacer deploy (`python deploy_to_server.py --skip-build`) si no hay cambios en assets
4. Clic en **"Verificar"** en Search Console

### Paso 3 — Enviar el sitemap
1. En el panel de Search Console, ir a **Índice → Sitemaps**
2. En el campo "Agregar un nuevo sitemap" ingresar: `sitemap.xml`
3. Clic en **"Enviar"**
4. Google lo procesará en 1-3 días

---

## 3. Registrar en Bing Webmaster Tools (opcional)

1. Ir a [bing.com/webmasters](https://www.bing.com/webmasters)
2. Importar desde Google Search Console con un clic (si ya tienes la cuenta verificada ahí)
3. El sitemap se importa automáticamente

---

## 4. Google Analytics

El sitio tiene Google Analytics (GA4) configurado con el ID `G-SG3W1PQBJ5`. Se activa **solo si el visitante acepta cookies** (banner GDPR). Para ver los datos:

1. Ir a [analytics.google.com](https://analytics.google.com)
2. Seleccionar la propiedad `G-SG3W1PQBJ5`

---

## 5. Estructura SEO implementada

### Meta tags por página

| Página | Title | Description |
|--------|-------|-------------|
| Inicio | Fundación Mesa del Señor | Descripción institucional |
| Noticias | Noticias \| Fundación... | Descripción de la sección |
| Noticia (detalle) | Título del artículo \| ... | Extracto del artículo |
| Proyectos | Proyectos \| Fundación... | Descripción de la sección |
| Proyecto (detalle) | Título del proyecto \| ... | Descripción del proyecto |
| Espiritualidad | Espiritualidad \| ... | Descripción de la sección |
| Artículo espiritual | Título \| ... | Extracto del artículo |
| Apóyanos | Apóyanos \| ... | Descripción de donaciones |
| Contacto | Contacto \| ... | Info de contacto |
| DIAN-ESAL | DIAN-ESAL \| ... | Info fiscal |
| Código Ético | Código Ético \| ... | Principios éticos |

### Open Graph y Twitter Card
Cada página incluye:
- `og:title` y `og:description` — para compartir en redes sociales
- `og:image` — imagen de la página (imagen del artículo o logo por defecto)
- `og:type` — `article` para noticias/espiritualidad, `website` para el resto
- `twitter:card` — vista enriquecida al compartir en X/Twitter

### Canonical URLs
Cada página incluye `<link rel="canonical">` con su URL real, evitando contenido duplicado.

---

## 6. Checklist de SEO básico

- [x] Sitemap dinámico en `/sitemap.xml`
- [x] `<link rel="sitemap">` en el `<head>` de todas las páginas
- [x] Meta description única por página
- [x] Open Graph completo (title, description, image, type)
- [x] Twitter Card con imagen grande
- [x] URLs canónicas
- [x] `robots: index, follow` en todas las páginas públicas
- [x] Atributos `alt` en imágenes principales
- [x] Headings jerárquicos (h1 → h2 → h3) en cada página
- [ ] Verificación en Google Search Console (requiere meta tag manual)
- [ ] Sitemap enviado a Google (tras verificar)

---

## 7. Mantenimiento

- El sitemap se actualiza solo al publicar nuevo contenido
- Cuando se agreguen páginas nuevas, actualizar `resources/views/sitemap.blade.php` con las nuevas URLs estáticas
- Para páginas dinámicas (nuevo tipo de contenido), agregar el modelo correspondiente en `app/Http/Controllers/SitemapController.php`
