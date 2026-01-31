# Deployment Guide - Grzegorz Nawrot Portfolio

## ✅ Obecna wersja (bez bazy danych)

### Environment Variables na Vercel
**Nie są wymagane żadne zmienne środowiskowe!**

Strona działa jako statyczna aplikacja z frontend-only komponentami.

### Deployment na Vercel:
1. Push kodu na GitHub
2. Import projektu na Vercel
3. Deploy (automatyczny)

---

## 🚀 Przyszła wersja (z bazą danych i API)

Gdy dodamy formularz kontaktowy z bazą danych, będą potrzebne:

### Environment Variables (Vercel → Settings → Environment Variables):

```bash
# DATABASE (wymagane)
DATABASE_URL="postgresql://user:password@host:5432/database?schema=public"
# Można użyć Vercel Postgres, Supabase, lub PlanetScale

# ADMIN PANEL (wymagane)
ADMIN_PASSWORD="twoje-bezpieczne-haslo-123"
# Hasło do panelu admina (/admin)

# EMAIL NOTIFICATIONS (opcjonalne)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="twoj-email@gmail.com"
SMTP_PASSWORD="haslo-aplikacji-gmail"
NOTIFICATION_EMAIL="gdzie-wysylac-powiadomienia@gmail.com"

# SITE URL (opcjonalne)
NEXT_PUBLIC_SITE_URL="https://twoja-domena.com"
```

### Zalecane bazy danych dla Vercel:

1. **Vercel Postgres** (najłatwiejsze)
   - Storage → Postgres → Create
   - Automatycznie ustawi DATABASE_URL

2. **Supabase** (darmowy tier)
   - Stwórz projekt na supabase.com
   - Skopiuj Connection String

3. **PlanetScale** (MySQL, darmowy tier)
   - Stwórz database na planetscale.com
   - Skopiuj connection string

### Setup bazy danych:

```bash
# Lokalnie (development)
npx prisma generate
npx prisma db push

# Na Vercel (automatyczne po deploymencie)
# Prisma automatycznie wykona migracje przy pierwszym deploymencie
```

---

## 📝 Aktualna struktura

```
✅ Hero Section - Cinematic intro
✅ F170 Showcase - Technical specs
✅ Portfolio - 6 projects
✅ Process Timeline - 6 steps
✅ Pricing Calculator - Real-time pricing (500 PLN/kg, 50 PLN/hour)
✅ Contact Form - Ready (bez database integration)
✅ Footer - Contact info

🔄 TODO (future enhancements):
- Three.js particles (Hero)
- 3D model (F170 Showcase)
- Horizontal scroll (Portfolio)
- Diagonal scroll (Process Timeline)
- Prisma database + API
- Admin panel
- Form submissions storage
```

---

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 🎨 Customization

### Pricing configuration
Edit `src/lib/pricingConfig.ts` to update:
- Material costs
- Machine hourly rate
- Setup fees
- Quantity discounts

### Colors
Edit `src/app/globals.css`:
- `--color-primary`: Deep Space Blue
- `--color-secondary`: Stratasys Orange
- `--color-accent`: Quantum Teal

### Content
- Portfolio projects: `src/components/sections/PortfolioGallerySection.tsx`
- Process steps: `src/components/sections/ProcessTimelineSection.tsx`
- Contact info: `src/app/page.tsx` (footer)
