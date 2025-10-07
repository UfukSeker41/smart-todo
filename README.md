# 🎯 Smart To-Do - Akıllı Yapılacaklar Listesi

Modern, feature-rich ve kullanıcı dostu bir yapılacaklar listesi uygulaması. React 19 ile geliştirilmiş, LocalStorage ile veri kalıcılığına sahip, profesyonel düzeyde bir proje.

![Smart To-Do Banner](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

## ✨ Özellikler

### 🎨 Temel Özellikler
- ✅ **CRUD İşlemleri**: Tam kapsamlı görev yönetimi (ekle, düzenle, sil, listele)
- 💾 **LocalStorage Entegrasyonu**: Verileriniz tarayıcıda güvenle saklanır, kalıcı veri
- 🔍 **Gelişmiş Arama**: Görev başlığı ve açıklamasında gerçek zamanlı arama
- 🎚️ **Akıllı Filtreleme**: Tüm görevler, aktif, tamamlanan, bugün ve önemli filtreler
- 📊 **Çoklu Sıralama**: Tarih, öncelik veya son tarihe göre dinamik sıralama
- 🎭 **Öncelik Sistemi**: Düşük (🟢), orta (🟡) ve yüksek (🔴) öncelik seviyeleri
- 📅 **Son Tarih Takibi**: Görevlere son tarih atama ve izleme
- ⚠️ **Gecikmiş Görev Uyarıları**: Süresi geçmiş görevleri otomatik vurgulama
- 📁 **Kategori Yönetimi**: Görevleri kategorilere ayırma ve özel renk atama

### 🎁 Premium Özellikler
- 🎯 **Sürükle-Bırak (@dnd-kit)**: Modern, akıcı görev yeniden sıralama
- � **Confetti Animasyonu**: Görev tamamlandığında kutlama efekti
- �🌓 **Dark/Light Tema**: Göz yormayan, otomatik kaydedilen tema tercihi
- ✨ **Smooth Animasyonlar**: Profesyonel geçiş efektleri ve mikroetkileşimler
- 📱 **Tam Responsive**: Mobil, tablet ve masaüstü için optimize edilmiş tasarım
- � **Canlı İstatistikler**: Header'da gerçek zamanlı ilerleme takibi
- 🎨 **Modern UI/UX**: Feather Icons ile şık, minimal arayüz
- 🔄 **Hamburger Menü**: Slide-in sidebar navigasyon
- 💫 **İlerleme Çubuğu**: Görsel tamamlanma yüzdesi göstergesi
- 🎯 **Hızlı Filtreler**: Tek tıkla kategori ve durum değişimi

## 🚀 Kurulum

### Gereksinimler
- Node.js (v14 veya üzeri)
- npm veya yarn
- Modern web tarayıcısı (Chrome, Firefox, Safari, Edge)

### Hızlı Başlangıç

```bash
# 1. Projeyi klonlayın (veya zip indirin)
git clone https://github.com/UfukSeker41/smart-todo.git
cd smart-todo

# 2. Bağımlılıkları yükleyin
npm install

# 3. Geliştirme sunucusunu başlatın
npm start

# 4. Tarayıcınızda otomatik açılacaktır
# http://localhost:3000
```

### Üretim Build'i

```bash
# Optimize edilmiş production build
npm run build

# Build klasörü statik dosyalar içerir
# Herhangi bir statik hosting servisine deploy edilebilir
```

## 🎮 Kullanım Kılavuzu

### 📝 Görev Yönetimi

#### Yeni Görev Ekleme
1. Üst kısımdaki **"➕ Yeni Görev Ekle"** formuna görev başlığını girin
2. İsteğe bağlı detaylı açıklama ekleyin
3. Öncelik seviyesini seçin:
   - 🟢 **Düşük**: Acil olmayan görevler
   - 🟡 **Orta**: Normal görevler  
   - 🔴 **Yüksek**: Acil ve önemli görevler
4. **Kategori** seçin (veya yeni kategori oluşturun)
5. İsteğe bağlı **son tarih** belirleyin
6. **"Ekle"** butonuna tıklayın

#### Görev Düzenleme
- Görev kartındaki **✏️ (Edit)** ikonuna tıklayın
- Form otomatik olarak mevcut bilgilerle doldurulur
- Değişiklikleri yapın ve **"Güncelle"** butonuna basın

#### Görev Silme
- Görev kartındaki **🗑️ (Delete)** ikonuna tıklayın
- Onay dialogunu kabul edin

#### Görev Tamamlama
- Görev kartının sol tarafındaki **checkbox**'ı işaretleyin
- 🎉 **Confetti animasyonu** ile başarınız kutlanır!
- İstatistikler otomatik güncellenir

### 🎯 Kategori Sistemi

#### Kategori Oluşturma
1. Sol üst köşedeki **menü ikonuna** tıklayın
2. Sidebar'daki **"📁 Kategoriler"** bölümüne gidin
3. **"+"** butonuna tıklayın
4. Kategori adı girin ve **renk seçin**
5. **"Ekle"** butonuna basın

#### Kategori Düzenleme/Silme
- Kategori yanındaki **✏️** ile düzenleyin
- **✖️** ile silin (görevler "Genel" kategorisine taşınır)

### 🔍 Filtreleme ve Arama

#### Hızlı Filtreler (Sidebar)
- **Tüm Görevler**: Tüm görevleri göster
- **Aktif Görevler**: Tamamlanmamış görevler
- **Tamamlanan**: Bitmiş görevler
- **Bugün**: Bugün teslim edilecek görevler
- **Önemli**: Yüksek öncelikli görevler

#### Arama
- Arama kutusuna metin girin
- Başlık ve açıklamada gerçek zamanlı arama

#### Sıralama
- **Tarih (Yeni → Eski)**: En yeni görevler üstte
- **Tarih (Eski → Yeni)**: En eski görevler üstte
- **Öncelik**: Yüksek öncelikli görevler üstte
- **Son Tarih**: Yaklaşan deadline'lar üstte

### 🎨 Görünüm Özelleştirme

#### Tema Değiştirme
- Header'daki **☀️/🌙** ikonuna tıklayın
- Tercih otomatik kaydedilir

#### Görev Sıralama
- Görev kartındaki **⋮⋮ (Menu)** ikonunu tutup sürükleyin
- İstediğiniz sıraya bırakın

## 🏗️ Proje Yapısı

```
smart-todo/
├── public/
│   ├── index.html              # Ana HTML şablonu
│   ├── favicon.ico             # Site ikonu
│   └── manifest.json           # PWA manifest
├── src/
│   ├── components/             # React bileşenleri
│   │   ├── Header.jsx          # Üst başlık (stats, theme toggle)
│   │   ├── Sidebar.jsx         # Yan menü (kategoriler, filtreler)
│   │   ├── CategoryManager.jsx # Kategori CRUD işlemleri
│   │   ├── TodoInput.jsx       # Görev ekleme/düzenleme formu
│   │   ├── FilterBar.jsx       # Arama ve sıralama kontrolleri
│   │   ├── TodoList.jsx        # Görev listesi container (DnD)
│   │   └── TodoItem.jsx        # Tekil görev kartı (confetti)
│   ├── styles/
│   │   └── main.css            # Global CSS (CSS Variables, Responsive)
│   ├── App.js                  # Ana uygulama (state management)
│   └── index.js                # React DOM render
├── package.json                # Dependencies & scripts
└── README.md                   # Bu dosya
```

### � Bileşen Hiyerarşisi

```
App
├── Header (theme, stats)
├── Sidebar
│   ├── Quick Filters
│   └── CategoryManager
├── Main Content
│   ├── TodoInput (add/edit form)
│   ├── FilterBar (search, sort)
│   └── TodoList (DnD Context)
│       └── TodoItem (individual tasks)
└── Footer (stats summary)
```

## �🛠️ Kullanılan Teknolojiler

### Core
- **⚛️ React 19** - Modern UI framework
- **🎨 CSS3** - Custom Properties, Flexbox, Grid
- **📦 LocalStorage API** - Client-side data persistence

### Libraries
- **🎯 @dnd-kit/core** - Drag and drop functionality
- **🎨 react-icons** - Feather icon set
- **🎉 canvas-confetti** - Celebration animations

### Dev Tools
- **📦 Create React App** - Build configuration
- **🔧 React Scripts** - Development server
- **✨ ESLint** - Code quality

## 📦 LocalStorage Veri Yapısı

```json
{
  "smart-todos": [
    {
      "id": 1728281234567,
      "title": "React projesini bitir",
      "description": "State ve props konusuna çalış",
      "priority": "high",
      "categoryId": 1728281234560,
      "dueDate": "2025-10-10",
      "completed": false,
      "createdAt": "2025-10-07T10:30:00.000Z"
    }
  ],
  "smart-categories": [
    {
      "id": "all",
      "name": "Genel",
      "color": "#4299e1",
      "count": 5
    },
    {
      "id": 1728281234560,
      "name": "İş",
      "color": "#f56565",
      "count": 3
    }
  ],
  "smart-theme": "dark"
}
```

## 🎨 Özelleştirme

### Renk Teması Değiştirme
`src/styles/main.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
  /* Ana Renkler */
  --accent-primary: #4299e1;  /* Mavi */
  --success: #48bb78;          /* Yeşil */
  --danger: #f56565;           /* Kırmızı */
  --warning: #ed8936;          /* Turuncu */
  
  /* Öncelik Renkleri */
  --priority-low: #48bb78;     /* Düşük */
  --priority-medium: #ed8936;  /* Orta */
  --priority-high: #f56565;    /* Yüksek */
}
```

### Dark Theme Renkleri

```css
body.dark {
  --bg-primary: #1a202c;       /* Ana arkaplan */
  --bg-secondary: #2d3748;     /* Kart arkaplanı */
  --bg-tertiary: #374151;      /* Input arkaplanı */
  --text-primary: #f7fafc;     /* Ana metin */
  --text-secondary: #e2e8f0;   /* İkincil metin */
}
```

## 🌟 Öne Çıkan Özellikler

### 🎯 Sürükle-Bırak
- **@dnd-kit** kütüphanesi ile modern HTML5 drag-drop
- Akıcı animasyonlar ve görsel feedback
- Klavye erişilebilirliği desteği
- Touch device uyumluluğu

### 🎉 Kutlama Animasyonları
- Görev tamamlandığında **canvas-confetti** ile renkli patlama efekti
- Kullanıcı motivasyonu artırıcı mikroetkileşim
- Performans optimize edilmiş animasyon

### 📱 Responsive Tasarım
- **Mobile-first** yaklaşımı
- Breakpoints: 480px, 768px, 1024px
- Touch-friendly buton boyutları
- Adaptive sidebar (mobile'da fullscreen)

### 💾 Veri Kalıcılığı
- Otomatik LocalStorage senkronizasyonu
- Sayfa yenilemelerinde veri kaybı yok
- Tema tercihi hatırlanır
- Kategori ve görevler kalıcı

### 🎨 Modern UI/UX
- **Neumorphism** & **Glassmorphism** inspired design
- Smooth transitions (0.3s ease)
- Hover states ve mikroetkileşimler
- Consistent 8px grid system

## 🤝 Katkıda Bulunma

Projeye katkıda bulunmak isterseniz:

1. **Fork** yapın
2. Feature branch oluşturun:
   ```bash
   git checkout -b feature/harika-ozellik
   ```
3. Değişikliklerinizi commit edin:
   ```bash
   git commit -m 'feat: Harika özellik eklendi'
   ```
4. Branch'inizi push edin:
   ```bash
   git push origin feature/harika-ozellik
   ```
5. **Pull Request** oluşturun

### Commit Mesaj Kuralları
- `feat:` - Yeni özellik
- `fix:` - Bug düzeltmesi  
- `docs:` - Dokümantasyon
- `style:` - Kod formatı
- `refactor:` - Kod iyileştirme
- `test:` - Test ekleme
- `chore:` - Bakım işleri

## 📝 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır.

## 📧 İletişim

Sorularınız veya önerileriniz için:
- **GitHub Issues**: [Proje Issues](https://github.com/UfukSeker41)
- **Email**: sekerufuk246@gmail.com

## 🙏 Teşekkürler

Bu projeyi geliştirmek için kullanılan harika açık kaynak projelere teşekkürler:
- [React](https://react.dev/)
- [@dnd-kit](https://dndkit.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
- [canvas-confetti](https://www.kirilv.com/canvas-confetti/)

---

**⭐ Beğendiyseniz yıldız vermeyi unutmayın!**

<p align="center">Made with by Ufuk Şeker</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript" alt="JavaScript">
  <img src="https://img.shields.io/badge/CSS3-Modern-1572B6?style=flat-square&logo=css3" alt="CSS3">
</p>

