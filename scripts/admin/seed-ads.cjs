const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const path = require('path');

const serviceAccount = require(path.resolve(__dirname, '../../serviceAccountKey.json'));

const app = initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore(app);

async function seedAds() {
  console.log("📢 Seeding Firestore with default medical sponsored ad campaigns...");

  const adsRef = db.collection('ads');

  const defaultCampaigns = [
    {
      id: 'pre_round_sponsor_ecg',
      title: 'دورة قراءة وتفسير رسم القلب السريري المتقدم (ECG Masterclass) 🫀',
      sponsorName: 'أكاديمية القلب والأوعية',
      mediaType: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&auto=format&fit=crop&q=80',
      ctaLink: 'https://wa.me/201099238814',
      ctaText: 'احجز مقعدك بالدورة ↗',
      placement: 'pre_round',
      durationSeconds: 4,
      frequencyGames: 1,
      priority: 10,
      isActive: true,
      impressionsCount: 0,
      clicksCount: 0,
      createdAt: Date.now()
    },
    {
      id: 'pre_reveal_pharma_sponsor',
      title: 'دليل الأدوية الإكلينيكية والجرعات الطارئة المعتمدة 2026 💊',
      sponsorName: 'Clinoma Clinical Pharmacy',
      mediaType: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80',
      ctaLink: 'https://wa.me/201099238814',
      ctaText: 'احصل على الدليل ↗',
      placement: 'pre_reveal',
      durationSeconds: 5,
      frequencyGames: 1,
      priority: 15,
      isActive: true,
      impressionsCount: 0,
      clicksCount: 0,
      createdAt: Date.now()
    },
    {
      id: 'clinoma_vip_prep',
      title: 'باقة تدريب الامتحانات والتحاليل الطبية الشاملة 🩺',
      sponsorName: 'Clinoma Medical Hub',
      mediaType: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80',
      ctaLink: 'https://clinoma.com',
      ctaText: 'اشترك الآن بخصم 40% ↗',
      placement: 'post_game',
      durationSeconds: 5,
      frequencyGames: 2,
      priority: 10,
      isActive: true,
      impressionsCount: 0,
      clicksCount: 0,
      createdAt: Date.now()
    },
    {
      id: 'medical_books_cairo',
      title: 'أطلس الطب الشرعي والسموم الإكلينيكية 2026 📚',
      sponsorName: 'دار المراجع الطبية',
      mediaType: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1532012164546-f432f2e3edd3?w=800&auto=format&fit=crop&q=80',
      ctaLink: 'https://wa.me/201099238814',
      ctaText: 'اطلب النسخة عبر واتساب ↗',
      placement: 'home_banner',
      durationSeconds: 5,
      frequencyGames: 1,
      priority: 5,
      isActive: true,
      impressionsCount: 0,
      clicksCount: 0,
      createdAt: Date.now()
    }
  ];

  for (const ad of defaultCampaigns) {
    const { id, ...data } = ad;
    await adsRef.doc(id).set(data, { merge: true });
    console.log(`✅ Seeded ad campaign: ${id} (${data.placement} - ${data.sponsorName})`);
  }

  console.log("🎉 All 4 medical sponsored campaigns live in Firestore /ads!");
  process.exit(0);
}

seedAds().catch(err => {
  console.error("Seeding error:", err);
  process.exit(1);
});
