# Leadgentic - The AI Revenue Platform

## 🚀 Deployment Guide

Este sitio está optimizado para funcionar perfectamente en cualquier servidor. Aquí tienes las instrucciones para diferentes plataformas:

### ✅ Build para Producción

```bash
npm run build
# o
pnpm build
```

Esto generará una carpeta `dist/` con todos los archivos optimizados.

---

## 📦 Opciones de Deployment

### 1. **Netlify** (Recomendado)
- El archivo `_redirects` ya está configurado
- Deploy directamente desde Git
- Las rutas de React Router funcionarán automáticamente

### 2. **Vercel**
- El archivo `vercel.json` ya está configurado
- Deploy con: `vercel --prod`
- Soporte completo para SPA routing

### 3. **Apache Server** (cPanel, Hostinger, etc.)
- El archivo `.htaccess` ya está incluido
- Sube el contenido de `dist/` a tu servidor
- Las rutas funcionarán automáticamente

### 4. **Nginx**
Agrega esto a tu configuración de Nginx:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

## 🎯 Checklist Técnico Post-Deployment

### ✅ Verificar Assets
- [ ] Todas las imágenes cargan correctamente
- [ ] Fuentes (Maxima Nouva, Inter) se muestran
- [ ] Logos de clientes visibles

### ✅ Verificar Navegación
- [ ] Todas las rutas funcionan (no 404)
- [ ] Mega menús se abren correctamente
- [ ] Links de footer funcionan
- [ ] Mobile menu funcional

### ✅ Verificar Mobile (320px - 768px)
- [ ] Header responsive
- [ ] Botones touch-friendly (min 44px)
- [ ] No scroll horizontal
- [ ] Textos legibles

### ✅ Verificar Desktop (1920px+)
- [ ] Layout no roto
- [ ] Animaciones fluidas
- [ ] Mega menús centrados

### ✅ Performance
- [ ] Carga inicial < 3 segundos
- [ ] Imágenes optimizadas
- [ ] No errores en Console

---

## 🛠️ Estructura de Archivos Críticos

```
/
├── index.html          # Entry point
├── .htaccess          # Apache redirect rules
├── _redirects         # Netlify redirect rules
├── vercel.json        # Vercel config
├── /src/
│   ├── /app/
│   │   ├── App.tsx           # Router principal
│   │   ├── /pages/           # Todas las páginas
│   │   ├── /components/      # Componentes reutilizables
│   ├── /styles/
│   │   ├── index.css        # Import principal
│   │   ├── fonts.css        # Configuración de fuentes
│   │   ├── theme.css        # Variables y CSS global
│   │   ├── tailwind.css     # Tailwind import
│   ├── /imports/            # SVGs y assets de Figma
│   └── main.tsx            # Entry point de React
```

---

## 🔧 Solución de Problemas Comunes

### Problema: Rutas no funcionan (404 en refresh)
**Solución:** Asegúrate de que el servidor tenga configurado el redirect a `index.html`. Usa los archivos `.htaccess`, `_redirects`, o `vercel.json` incluidos.

### Problema: Fuentes no cargan
**Solución:** Verifica que `/src/styles/fonts.css` esté importado en `/src/styles/index.css`. Las fuentes se cargan desde CDN (Google Fonts y cdnfonts.com).

### Problema: Imágenes no cargan
**Solución:** Todas las imágenes usan `figma:asset/[hash]`. Este es un sistema virtual de Vite. En build, se copian automáticamente a `dist/assets/`.

### Problema: Scroll horizontal en mobile
**Solución:** Ya está aplicado `overflow-x: hidden` en `body` y `html`. Verifica que no haya elementos con `width > 100vw`.

---

## 📱 Testing Checklist

### Navegadores Desktop
- [ ] Chrome (últimas 2 versiones)
- [ ] Firefox (últimas 2 versiones)
- [ ] Safari (últimas 2 versiones)
- [ ] Edge (últimas 2 versiones)

### Dispositivos Mobile (DevTools)
- [ ] iPhone SE (320px) - Más restrictivo
- [ ] iPhone 12/13/14 (390px) - Más común
- [ ] iPad (768px) - Tablet
- [ ] Samsung Galaxy S20 (360px)

### Testing de Navegación
```bash
# Páginas principales
/                      → Home
/paid-ads             → Paid Advertising
/web-design           → Web Design
/seo                  → SEO Service
/crm-automation       → CRM Automation
/book-growth          → Book Growth Call

# Nichos
/auto-glass           → Auto Glass
/auto-styling         → Auto Styling
/dentists             → Dentists
/home-services        → Home Services
/iv-therapy           → IV Therapy
/mechanics            → Mechanics

# Case Studies (12 total)
/biofuse-case-study   → Biofuse
/euroluxe-case-study  → Euroluxe
...y 10 más

# Legal
/terms                → Terms & Conditions
/privacy              → Privacy Policy
/about                → About Us

# 404
/cualquier-ruta-invalida → NotFound page
```

---

## 💡 Optimizaciones Aplicadas

✅ **CSS:**
- Tailwind v4 con tree-shaking automático
- CSS custom properties para theming
- Mobile-first responsive design
- Overflow-x: hidden global

✅ **JavaScript:**
- Code splitting automático
- Lazy loading de componentes
- React Router v7 con BrowserRouter
- Error boundaries implementados

✅ **Assets:**
- Imágenes optimizadas con Vite
- Fuentes con fallbacks system fonts
- Preconnect a CDNs de fuentes
- Cache headers configurados

✅ **Performance:**
- Animaciones reducidas en mobile
- Terser minification en production
- Chunk splitting para vendors
- Console.logs removidos en build

---

## 🎨 Paleta de Colores

```css
/* Brand Colors */
--verde-neon: #70E000;     /* CTAs principales */
--verde-neon-alt: #a3ff00; /* Hover states */
--negro: #000000;          /* Background principal */
--blanco: #ffffff;         /* Texto en negro */

/* Grises */
--zinc-700: #3f3f46;
--zinc-800: #27272a;
--zinc-900: #18181b;
--gray-400: #9ca3af;
--gray-600: #4b5563;
```

---

## 📞 Contacto de Desarrollo

Si encuentras algún bug técnico o problema de deployment, documenta:
1. URL donde ocurre el problema
2. Navegador y versión
3. Screenshot del error
4. Console errors (F12 → Console)

---

**Última actualización:** Febrero 2026
**Versión:** 1.0.0
