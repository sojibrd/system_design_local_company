# system_design_local_company

বাংলাদেশি কোম্পানির কারিগরি আলোচনার system design অংশের প্রস্তুতি: `system_design`-এর সাতটা ডক নিজের প্রজেক্ট দিয়ে লেখা, `srdtube`-এর ছয় সেকশনের design doc, আর চারটা লোকাল প্রশ্ন মুখে — ২৮ দিনে। দিনে একটা ছোট কাজ, ঝালাইসহ, শেখার বিজ্ঞান মেনে। তারপর থামা।

এটা তিনটা স্বাধীন পথের একটা — [রিমোট](https://sojibrd.github.io/system_design_remote_company/) আর [গ্লোবাল](https://sojibrd.github.io/system_design_global_company/) আলাদা সাইট, প্রতিটা শূন্য থেকে শুরু। DSA-র মতো কেন্দ্রীভূত বৃত্ত নয় — এখানে পথ বদলালে কাজের ধরনই বদলায় (লোকালে নিজের সিস্টেম ব্যাখ্যা, রিমোটে ইংরেজিতে লিখে বোঝানো, গ্লোবালে ঘড়ির নিচে মুখে)। `switch_local_company_in_6_month`-এর দিন ০৫০–০৭৭-এ DSA শেষে যে সোম–শুক্রের ৩০′-এর ঘর খালি হয়, এই সাইট সেই ঘরের কাজ (ব্যবহারকারীর সিদ্ধান্ত ২০২৬-০৯-১৫)।

**লাইভ:** https://sojibrd.github.io/system_design_local_company/

## Functional Requirement

- **আজ (`/`):** প্রথমবার খুললে শুরুর তারিখ জিজ্ঞেস করে। তারপর দেখায় ক্যালেন্ডারের আজকের দিনটা, এই ক্রমে: জমে থাকা ⚑ → আজকের ঝালাই → আজকের দিন।
- **Rail:** সব পাতায় বাঁয়ে rail থাকে, মোবাইলে drawer। তাতে ৪টা পাতার লিংক, plan-এর gauge আর ব্লকগুলো। শুধু খোলা ব্লকের দিনগুলো দেখায়।
- **দিন (`/day/<nnn>/`) · ব্লক (`/block/<slug>/`):** দিনের কাজ আর দিন বা ব্লক শেষের হ্যাঁ/না। যে দিনে এই সাইটের ঘর নেই, সেখানে কেন ফাঁকা তা লেখা।
- **সূত্রের chip:** কাজে `(ডক ১৩)` থাকলে `system_design` সাইটের ঐ ডকের লিংক; `(sim url-shortener · functional)` থাকলে simulator-এর ঐ সিস্টেম।
- **ডক (`/docs/`, `/doc/<nn>/`):** ২৫টা ডকের কোনটা এই পথের কোন দিনের কোন কাজে আসে; বাইরেরগুলো আলাদা নিচে। ডকের লেখা কপি নয়, লিংক।
- **ঝালাই (`/review/`):** প্রতিটা 🔁 কাজ টিকের দিন থেকে ১/৩/৭/২১ দিন পরে ফেরে।
- **নিয়ম (`/rules/`):** `docs/00-rules.md` হুবহু।
- **🧠 chip:** `learning_to_learn`-এর পাঁচটা ডকের সব বিষয় আছে। chip চাপলে এক লাইনে কারণ দেখায়, সাথে ঐ সাইটের লিংক।

## Non-Functional Requirement

- **সত্যের উৎস `docs/`।** কোডে কোনো দিন বা কাজ হার্ডকোড নেই। কাজের `(ডক n)` বা `(sim … · …)` যদি `app/lib/sources.ts`-এ না মেলে, **build ভাঙে।**
- **design doc-এর লেখা এই repo-তে নয়** — `system_design/designs/`-এ। সাইটে নোটের ঘর নেই, ইচ্ছাকৃত।
- **ফাইলে তারিখ নেই।** তারিখ = শুরুর তারিখ + (দিন − ১)। "আজ" মানে ক্যালেন্ডারের তারিখ, plan পেছায় না।
- **Static export → GitHub Pages।** Backend নেই।
- **Progress শুধু `localStorage`-এ,** একমাত্র `app/hooks/useProgress.ts` দিয়ে।
- **`app/lib/plan.ts` server-only।**
- **Theme contract অলঙ্ঘনীয়, সাইট dark-only।** chassis `dsa_prep_*` সাইটগুলো থেকে, প্যাটার্ন আর প্রবলেম-নোট বাদে।
- **তিন পথের কোড একই।** পার্থক্য শুধু `app/lib/site.ts`, `next.config.ts`-এর basePath আর `docs/`-এ।
- **স্ট্যাক:** Next.js 16, React 19, TypeScript, Tailwind v4, react-markdown।

## ডক ইনডেক্স

| ফাইল | Gist |
|---|---|
| [docs/00-rules.md](docs/00-rules.md) | লক্ষ্য (সাত ডক, একটা doc, তারপর থামা), সত্যের উৎস, চিহ্ন, "আজ", সপ্তাহের ছন্দ, ২০′-এর বসা, ছয় সেকশন লোকালের মাপে, ঝালাই, `learning_to_learn`-এর পাঁচ ডক কোথায় খাটে, যা উপেক্ষা করবেন, যা করবেন না, দিন ২৮-এর পরে |
| [docs/01-seven-questions.md](docs/01-seven-questions.md) | দিন ০০১–০১৪: ছাঁচ, ডক ১৫ · ১২ · ১৩ · ১১ · ১৪ · ০৯ · ১৮ নিজের প্রজেক্টে, দুই simulation-এর functional লেভেল |
| [docs/02-design-doc.md](docs/02-design-doc.md) | দিন ০১৫–০২৮: `srdtube`-এর ছয় সেকশন, দিনে একটা; চারটা লোকাল প্রশ্ন আর ১০ মিনিট টানা মুখে; দিন ০২৮-এ থামা |

## প্রজেক্ট-নির্দিষ্ট নিয়ম

### তথ্য বদলানোর ক্রম

`legacy_and_wisdom/docs/ASSUMPTIONS.md` → `brainstorming/` (`system-design-*.md`) → `switch_local_company_in_6_month/docs/` → এই ফোল্ডার।

### ব্লক ফাইলের ছাঁচ

- `# ব্লক ১ — নাম` — প্রথম H1। "— "-এর পরের অংশ rail-এ দেখায়।
- `*দিন ০০১–০১৪ · …*` — H1-এর নিচের italic লাইন। শেষে `· dip` থাকলে হোমে সতর্কতা আসে।
- `> **ব্লক শেষে:** …` · `### দিন ০০৭ · শিরোনাম` · `- [ ] ২০′ …` · `> **দিন শেষে:** …`
- দিনের নম্বর সব ব্লক মিলিয়ে পরপর থাকতে হবে। না থাকলে build ভাঙে। কাজ ছাড়া দিন চলে।
- কাজে `(ডক ১৩)` বা `(ডক ১১ · ডক ১৩)` = `system_design`-এর ডক; `(sim url-shortener · functional)` = simulator-এর সিস্টেম আর লেভেল। তালিকা `app/lib/sources.ts`-এ — `system_design`-এ ডকের ফাইলনাম বদলালে ওখানেও বদলান।
- `⚑` = মাইলফলক, `🔁` = ঝালাই হবে, শেষে `🧠 (নাম · নাম)`। নতুন 🧠 নাম লিখলে সেটা `app/lib/principles.ts`-এ যোগ করুন।

### Progress key

| key | মান |
|---|---|
| `lsd:v1:start` | শুরুর তারিখ `"YYYY-MM-DD"` |
| `lsd:v1:task` | কাজ শেষের তারিখ। id = দিন + কাজের **লেখা** থেকে hash |
| `lsd:v1:check` | দিন শেষ (`d007`) ও ব্লক শেষ (`b1`)-এর হ্যাঁ/না |
| `lsd:v1:review` | 🔁 ঝালাইয়ের অবস্থা `{ base, step }` |

## চালানো

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → out/
```

push করলে `.github/workflows/deploy.yml` সাইটটা GitHub Pages-এ তোলে।
