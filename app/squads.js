import { assetPath } from './asset-path';

// Replace names, numbers, and image paths here when the real squads are ready.
const positions = ['গোলরক্ষক', 'ডিফেন্ডার', 'ডিফেন্ডার', 'ডিফেন্ডার', 'ডিফেন্ডার', 'মিডফিল্ডার', 'মিডফিল্ডার', 'মিডফিল্ডার', 'ফরোয়ার্ড', 'ফরোয়ার্ড', 'ফরোয়ার্ড'];

function makePlayers(names) {
  return names.map((name, index) => ({
    id: index + 1,
    name,
    number: index + 1,
    position: positions[index],
    image: '/avatar-placeholder.svg',
    captain: index === 5,
  }));
}

export const squads = [
  {
    id: 'main-squad',
    name: 'মূল দল',
    label: 'MAIN SQUAD',
    description: 'ক্লাবের রঙে, মাঠের প্রতিটি লড়াইয়ে।',
    coach: { name: 'মো. কামরুল হাসান', image: '/avatar-placeholder.svg' },
    players: makePlayers(['আরিফ হোসেন', 'রাকিব হাসান', 'সাকিব আহমেদ', 'মেহেদী হাসান', 'তানভীর ইসলাম', 'রায়হান কবির', 'নাঈম শেখ', 'ফাহিম রহমান', 'সিয়াম আহমেদ', 'শাহরিয়ার আলম', 'ইমরান হোসেন']),
  },
  {
    id: 'under-18',
    name: 'অনূর্ধ্ব ১৮',
    label: 'UNDER 18',
    description: 'নতুন প্রতিভা, আগামীর সোনাময়ী ইউনাইটেড।',
    coach: { name: 'মো. জাহিদুল ইসলাম', image: '/avatar-placeholder.svg' },
    players: makePlayers(['আয়ান রহমান', 'রাফি ইসলাম', 'আদনান হাসান', 'তাহসিন আহমেদ', 'মাহির হোসেন', 'নাফিস রহমান', 'সাদমান কবির', 'আবরার ইসলাম', 'রিদওয়ান হাসান', 'ফারহান আহমেদ', 'ইশতিয়াক আলম']),
  },
];

export const positionGroups = [
  { id: 'goalkeepers', name: 'গোলরক্ষক' },
  { id: 'defenders', name: 'ডিফেন্ডার' },
  { id: 'midfielders', name: 'মিডফিল্ডার' },
  { id: 'forwards', name: 'ফরোয়ার্ড' },
];

export default function Squads() {
  return (
    <section id="squad" className="section squads" aria-labelledby="squad-title">
      <div className="section-heading">
        <div><p className="eyebrow">০৩ / আমাদের স্কোয়াড</p><h2 id="squad-title">একই রঙে। একই স্বপ্নে।</h2></div>
        <span className="section-note">নমুনা খেলোয়াড় ও কোচের তথ্য<br />চূড়ান্ত স্কোয়াড পরে জানানো হবে</span>
      </div>
      <div className="squad-links" aria-label="দলের তালিকা">
        {squads.map((squad) => <a href={`#${squad.id}`} key={squad.id}>{squad.name} <span aria-hidden="true">↗</span></a>)}
      </div>
      {squads.map((squad) => (
        <div className="squad-team" id={squad.id} key={squad.id}>
          <div className="squad-heading">
            <div><p className="eyebrow">{squad.label}</p><h3>{squad.name}</h3><p className="squad-description">{squad.description}</p></div>
            <div className="squad-coach">
              <img src={assetPath(squad.coach.image)} alt="" width={64} height={64} />
              <div><span>প্রধান কোচ</span><h4>{squad.coach.name}</h4></div>
            </div>
          </div>
          <nav className="position-links" aria-label={`${squad.name} পজিশন অনুযায়ী তালিকা`}>
            {positionGroups.map((group) => <a key={group.id} href={`#${squad.id}-${group.id}`}>{group.name}</a>)}
          </nav>
          {positionGroups.map((group) => (
            <section className="position-group" id={`${squad.id}-${group.id}`} key={group.id} aria-labelledby={`${squad.id}-${group.id}-title`}>
              <h4 className="position-title" id={`${squad.id}-${group.id}-title`}>{group.name} <span>{squad.players.filter((player) => player.position === group.name).length.toLocaleString('bn-BD')} জন</span></h4>
              <div className="squad-grid">
            {squad.players.filter((player) => player.position === group.name).map((player) => (
              <article className="player-card" key={player.id}>
                <div className="player-portrait">
                  <span className="player-number" aria-label="জার্সি নম্বর">{player.number.toLocaleString('bn-BD')}</span>
                  <img src={assetPath(player.image)} alt={`${player.name} — নমুনা অ্যাভাটার`} width={240} height={240} loading="lazy" />
                  {player.captain && <span className="captain-badge">অধিনায়ক</span>}
                </div>
                <div className="player-info"><p>{player.position}</p><h4>{player.name}</h4></div>
              </article>
            ))}
              </div>
            </section>
          ))}
        </div>
      ))}
    </section>
  );
}
