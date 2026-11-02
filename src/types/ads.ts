export type AdPlacement = 'pre_round' | 'pre_reveal' | 'post_game' | 'home_banner' | 'rewarded_bonus';
export type AdMediaType = 'image' | 'video_direct';

export interface AdCampaign {
  id: string;
  title: string;                 // عنوان الإعلان
  sponsorName: string;           // اسم المعلن / الراعي الطبي
  mediaType: AdMediaType;        // صورة أو فيديو
  mediaUrl: string;              // رابط الصورة أو البانر
  ctaLink: string;               // رابط التوجيه (واتساب، تليجرام، موقع كورس)
  ctaText: string;               // نص الزر التفاعلي
  placement: AdPlacement;        // مكان الظهور
  durationSeconds: number;       // مدة عداد التخطي (الافتراضي 5 ثوانٍ)
  frequencyGames: number;        // يظهر بعد كل كم جيم (مثلاً كل 2 مباريات)
  priority: number;              // أولوية الظهور
  isActive: boolean;             // مفتاح التشغيل والإيقاف الفوري
  impressionsCount: number;      // عداد المشاهدات
  clicksCount: number;           // عداد النقرات
  createdAt: number;
}
