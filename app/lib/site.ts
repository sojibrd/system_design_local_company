/**
 * সাইটের পরিচয় আর এই পথের সেটিং — plan-এর কনটেন্ট নয়, তাই `docs/`-এ নয়, এখানে।
 *
 * তিনটা পথের (লোকাল · রিমোট · গ্লোবাল) কোড একই; পার্থক্য শুধু এই ফাইল,
 * `next.config.ts`-এর basePath আর `docs/`-এর কনটেন্ট।
 */
export const SITE: {
  title: string;
  short: string;
  emoji: string;
  description: string;
  storagePrefix: string;
  suggestedStart: string | null;
} = {
  title: "লোকাল কোম্পানির system design",
  short: "লোকাল system design",
  emoji: "🧱",
  description:
    "বাংলাদেশি কোম্পানির কারিগরি আলোচনার system design অংশের জন্য — সাতটা ডক আর নিজের প্রজেক্টের একটা design doc, ২৮ দিনে, learning to learn-এর নীতিতে।",
  /** localStorage key-এর prefix — তিন পথের progress আলাদা থাকে */
  storagePrefix: "lsd",
  /** শুরুর তারিখ না থাকলে প্রস্তাব — ৬ মাসের plan-এর দিন ০৫০ (plan শুরু ২০২৬-০৯-১৪) */
  suggestedStart: "2026-11-02",
};
