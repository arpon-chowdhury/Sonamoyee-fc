import { assetPath } from './asset-path';

// Replace these sample names and image paths with the club's donor details.
export const donors = [
  { id: 'donor-1', name: 'মো. আবদুল করিম', image: '/avatar-placeholder.svg' },
  { id: 'donor-2', name: 'সাইফুল ইসলাম', image: '/avatar-placeholder.svg' },
  { id: 'donor-3', name: 'নাসরিন আক্তার', image: '/avatar-placeholder.svg' },
  { id: 'donor-4', name: 'মো. হাসান মাহমুদ', image: '/avatar-placeholder.svg' },
];

export default function Donors() {
  return (
    <section id="donors" className="section donors" aria-labelledby="donors-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">০৫ / আমাদের ডোনার</p>
          <h2 id="donors-title">আপনাদের পাশে পেয়েই এগিয়ে চলা।</h2>
        </div>
        <span className="section-note">নমুনা নাম ও ছবি<br />চূড়ান্ত তথ্য পরে জানানো হবে</span>
      </div>
      <p className="donors-description">ক্লাবের পথচলায় যাঁরা সহযোগিতার হাত বাড়িয়ে দেন, তাঁদের প্রতি আমাদের কৃতজ্ঞতা।</p>
      <div className="donor-grid">
        {donors.map((donor) => (
          <article className="donor-card" key={donor.id}>
            <div className="donor-portrait">
              <img src={assetPath(donor.image)} alt={`${donor.name} — নমুনা অ্যাভাটার`} width={160} height={160} loading="lazy" />
            </div>
            <p>ক্লাবের শুভাকাঙ্ক্ষী</p>
            <h3>{donor.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
