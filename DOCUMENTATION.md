# Engincan Araz Personal Website - Proje Dokümantasyonu

## Proje Özeti

### Projenin amacı ve hedef kitlesi
Bu proje, Engincan Araz'ın kişisel portföy web sitesidir. Sitenin temel amacı, Engincan'ın profesyonel becerilerini, projelerini ve deneyimlerini potansiyel işverenler, iş ortakları ve diğer geliştiricilere sergilemektir. Hedef kitle öncelikle işverenler, yazılım şirketleri, diğer geliştiriciler ve teknoloji meraklılarıdır.

### Çözdüğü temel problem veya sağladığı değer
Proje, geleneksel CV'lerin ötesinde interaktif ve kapsamlı bir profesyonel tanıtım platformu sunarak şu değerleri sağlar:

- Engincan'ın teknik becerilerinin ve projelerinin canlı bir şekilde sergilenmesi
- GitHub entegrasyonu ile kod katkılarının ve projelerinin otomatik olarak gösterilmesi
- Çift dilli (Türkçe/İngilizce) içerik ile uluslararası erişilebilirlik
- Ziyaretçilerin doğrudan iletişim kurabilmesi için etkileşimli formlar
- Medium entegrasyonu ile blog yazılarının sergilenmesi
- Ziyaretçi defteri ile geri bildirim ve etkileşim imkanı

## Teknik Mimari

### Kullanılan programlama dilleri ve frameworkler

- **Frontend**: 
  - TypeScript
  - React.js
  - Next.js 15.x (App Router)
  - TailwindCSS
  - Framer Motion (animasyonlar için)
  - Radix UI (erişilebilir UI bileşenleri)
  - Lucide React (ikonlar)

- **Backend**: 
  - Next.js API Routes
  - Node.js

- **Diğer Teknolojiler**:
  - next-intl (çoklu dil desteği)
  - Supabase (veritabanı ve kimlik doğrulama)
  - Octokit (GitHub API entegrasyonu)
  - React Hook Form (form yönetimi)
  - Zod (veri doğrulama)
  - Upstash Redis (hız sınırlama)

### Sistem mimarisi ve bileşenler arası etkileşim

Proje, Next.js'in App Router mimarisini kullanarak modern bir web uygulaması olarak tasarlanmıştır:

1. **Frontend Mimarisi**:
   - `/app` dizini altında sayfa yapısı
   - `/components` dizini altında yeniden kullanılabilir UI bileşenleri
   - `/lib` dizini altında yardımcı fonksiyonlar ve API istemcileri
   - `/messages` dizini altında çoklu dil çevirileri

2. **Backend Mimarisi**:
   - `/app/api` dizini altında API rotaları
   - Harici API'ler ile entegrasyon (GitHub, Medium)
   - Supabase ile veritabanı işlemleri
   - Formspree ile e-posta gönderimi

3. **Bileşenler Arası Etkileşim**:
   - Client-side bileşenler API rotalarını kullanarak veri çeker
   - Server-side bileşenler doğrudan harici API'lere bağlanır
   - Middleware, dil yönlendirmesi ve rota kontrolü sağlar
   - Context API ile tema ve analitik verileri yönetilir

### Veritabanı yapısı ve ilişkileri

Proje, Supabase PostgreSQL veritabanını kullanmaktadır:

- **Tablolar**:
  - `guestbook`: Ziyaretçi defteri kayıtları (id, name, message,linkedinUrl created_at)


## Kurulum ve Yapılandırma

### Gereksinimler ve bağımlılıklar

- Node.js 18.x veya üzeri
- npm veya yarn
- Supabase hesabı
- GitHub API token
- reCAPTCHA anahtarları
- Formspree.io'dan aldığınız form ID
- Upstash Redis hesabı (opsiyonel, hız sınırlama için)

### Kurulum adımları

1. Repoyu klonlayın:
   ```bash
   git clone https://github.com/engincanaraz/personal-website.git
   cd personal-website
   ```

2. Bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

3. `.env.example` dosyasını `.env` olarak kopyalayın ve gerekli değişkenleri doldurun:
   ```bash
   cp .env.example .env
   ```

4. Geliştirme sunucusunu başlatın:
   ```bash
   npm run dev
   ```

5. Tarayıcıda `http://localhost:3000` adresine gidin

### Ortam değişkenleri ve yapılandırma ayarları

```
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key



# GitHub API
GITHUB_TOKEN=your-github-token
GITHUB_USERNAME=yourusername


# reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key

# Rate Limiting (Upstash Redis)
UPSTASH_REDIS_REST_URL=your-upstash-redis-url
UPSTASH_REDIS_REST_TOKEN=your-upstash-redis-token
```

## Temel Özellikler

### Çoklu Dil Desteği

**Açıklama**: Site, Türkçe ve İngilizce olmak üzere iki dilde içerik sunmaktadır. Next.js ve next-intl kütüphanesi kullanılarak gerçekleştirilmiştir.

**Teknik Detaylar**:
- `/i18n.ts` dosyası dil yapılandırmasını içerir
- `/messages` dizini altında dil dosyaları (tr.json, en.json) bulunur
- Middleware ile URL tabanlı dil yönlendirmesi sağlanır (/en/... veya /tr/...)
- Dil değiştirme bileşeni ile kullanıcılar dil tercihlerini değiştirebilir

**Kullanım Örneği**:
```tsx
import { useTranslations } from 'next-intl';

export function MyComponent() {
  const t = useTranslations('section');
  return <h1>{t('title')}</h1>;
}
```

### GitHub Entegrasyonu

**Açıklama**: Site, GitHub API'si aracılığıyla Engincan'ın GitHub profilinden veri çekerek projelerini, katkı grafiğini ve istatistiklerini gösterir.

**Teknik Detaylar**:
- `/lib/github.ts` dosyası GitHub API entegrasyonunu sağlar
- Octokit kütüphanesi kullanılarak GitHub API'sine erişilir
- Pinlenmiş repolar, katkı grafiği ve dil istatistikleri gösterilir
- Veriler önbelleğe alınarak API çağrı limitleri optimize edilir

**Kullanım Örneği**:
```tsx
// ProjectsSection bileşeni içinde
useEffect(() => {
  const fetchGitHubData = async () => {
    const response = await fetch('/api/github');
    const data = await response.json();
    setGithubData(data);
  };
  fetchGitHubData();
}, []);
```

### Medium Blog Entegrasyonu

**Açıklama**: Site, Medium API'si aracılığıyla Engincan'ın Medium blog yazılarını çeker ve sergiler.

**Teknik Detaylar**:
- `/lib/medium.ts` dosyası Medium RSS feed entegrasyonunu sağlar
- RSS2JSON API'si kullanılarak Medium içeriği JSON formatına dönüştürülür
- Blog yazıları için önizleme kartları oluşturulur

### Ziyaretçi Defteri

**Açıklama**: Ziyaretçiler, site üzerinden mesaj bırakabilir ve diğer ziyaretçilerin mesajlarını görebilir.

**Teknik Detaylar**:
- Supabase veritabanı kullanılarak mesajlar saklanır
- React Hook Form ve Zod ile form doğrulama yapılır
- reCAPTCHA ile spam koruması sağlanır
- Hız sınırlama ile aşırı kullanım engellenir

### İletişim Formu

**Açıklama**: Ziyaretçiler, site üzerinden doğrudan iletişim kurabilir.

**Teknik Detaylar**:
- Nodemailer kütüphanesi ile e-posta gönderimi sağlanır
- Form doğrulama ve güvenlik önlemleri uygulanır
- Gönderilen mesajlar hem veritabanında saklanır hem de e-posta olarak iletilir

### Tema Değiştirme

**Açıklama**: Site, açık ve koyu tema seçenekleri sunar ve sistem temasını otomatik olarak algılar.

**Teknik Detaylar**:
- next-themes kütüphanesi kullanılarak tema yönetimi sağlanır
- TailwindCSS ile tema renkleri tanımlanır
- Kullanıcı tercihleri localStorage'da saklanır

## API Dokümantasyonu

### GitHub API

**Endpoint**: `/api/github`
**Metod**: GET
**Açıklama**: GitHub profilinden veri çeker

**Dönüş Değeri**:
```json
{
  "pinnedRepos": [...],
  "contributions": {
    "totalContributions": 123,
    "weeks": [...]
  },
  "stats": {
    "profileViewsUrl": "...",
    "statsUrl": "...",
    "topLanguagesUrl": "..."
  }
}
```

### Medium API

**Endpoint**: `/api/medium`
**Metod**: GET
**Açıklama**: Medium blog yazılarını çeker

**Dönüş Değeri**:
```json
[
  {
    "title": "Blog Başlığı",
    "author": "Engincan Araz",
    "link": "https://medium.com/...",
    "pubDate": "2023-01-01",
    "content": "...",
    "thumbnail": "https://...",
    "categories": [...],
    "readingTime": 5
  }
]
```

### Ziyaretçi Defteri API

**Endpoint**: `/api/guestbook`
**Metod**: GET
**Açıklama**: Ziyaretçi defteri mesajlarını listeler

**Dönüş Değeri**:
```json
[
  {
    "id": "1",
    "name": "Ziyaretçi Adı",
    "message": "Mesaj içeriği",
    "created_at": "2023-01-01T12:00:00Z"
  }
]
```

**Endpoint**: `/api/guestbook`
**Metod**: POST
**Açıklama**: Yeni ziyaretçi defteri mesajı ekler

**İstek Parametreleri**:
```json
{
  "name": "Ziyaretçi Adı",
  "message": "Mesaj içeriği",
  "recaptchaToken": "..."
}
```

**Dönüş Değeri**:
```json
{
  "success": true,
  "message": "Mesajınız başarıyla kaydedildi"
}
```

## Kod Organizasyonu

### Dosya yapısı ve ana dizinler

```
/
├── .env.example       # Örnek çevre değişkenleri
├── app/               # Next.js App Router yapısı
│   ├── [locale]/      # Dil bazlı sayfa yapısı
│   ├── api/           # API rotaları
│   └── globals.css    # Global CSS
├── components/        # Yeniden kullanılabilir bileşenler
│   ├── ui/            # Temel UI bileşenleri
│   └── *-section.tsx  # Sayfa bölümleri
├── hooks/             # Özel React hooks