import { assetPath } from './asset-path';

export const donors = [
  { id: 'donor-4', name: 'আজিজুল ইসলাম', image: '/donors/azizul-islam.jpg' },
  { id: 'donor-3', name: 'স্বপন চৌধুরী', image: '/donors/swapan-chowdhury.jpg' },
  { id: 'donor-2', name: 'জুবায়ের হোসেন', image: '/donors/jubaiyer-hossain.jpg' },
  { id: 'donor-1', name: 'শাওন মাতুব্বর', image: '/donors/sawon-matubber.jpg' },
];

export default function Donors() {
  return (
    <section id="donors" className="section donors" aria-labelledby="donors-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">০৫ / আমাদের ডোনার</p>
          <h2 id="donors-title">আপনাদের পাশে পেয়েই এগিয়ে চলা।</h2>
        </div>
      </div>
      <p className="donors-description">ক্লাবের পথচলায় যাঁরা সহযোগিতার হাত বাড়িয়ে দেন, তাঁদের প্রতি আমাদের কৃতজ্ঞতা।</p>
      <div className="donor-grid">
        {donors.map((donor) => (
          <article className="donor-card" key={donor.id}>
            <div className="donor-portrait">
              <img src={`${assetPath(donor.image)}?v=2`} alt={donor.name} width={160} height={160} loading="lazy" />
            </div>
            <p>ক্লাবের শুভাকাঙ্ক্ষী</p>
            <h3>{donor.name}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
