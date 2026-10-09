import FootballScene from './football-scene';
import { assetPath } from './asset-path';
import Donors from './donors';
import Notice from './notice';
import { notices } from './notices';
import Squads, { squads, positionGroups } from './squads';

const fixtures = [
  { day: '২৪', month: 'অক্টোবর', home: 'সোনাময়ী ইউনাইটেড', away: 'রিভারসাইড এফসি', type: 'প্রীতি ম্যাচ', time: 'বিকেল ৪:০০' },
  { day: '৩১', month: 'অক্টোবর', home: 'গ্রিনফিল্ড এফসি', away: 'সোনাময়ী ইউনাইটেড', type: 'প্রীতি ম্যাচ', time: 'বিকেল ৩:৩০' },
  { day: '০৭', month: 'নভেম্বর', home: 'সোনাময়ী ইউনাইটেড', away: 'সিটি স্পোর্টিং', type: 'প্রীতি ম্যাচ', time: 'বিকেল ৪:০০' },
];

function Crest({ small = false }) {
  return <img className={`club-logo ${small ? 'club-logo-small' : ''}`} src={assetPath('/logo.svg')} alt="সোনাময়ী ইউনাইটেডের লোগো" width={small ? 64 : 360} height={small ? 64 : 360} />;
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">মূল বিষয়বস্তুতে যান</a>
      <div className="topbar">আমাদের ক্লাব। আমাদের সমাজ। আমাদের খেলা।</div>
      <header className="header">
        <a href="#" className="brand" aria-label="সোনাময়ী ইউনাইটেডের মূল পাতা"><Crest small /><span>সোনাময়ী<span className="brand-sub">ইউনাইটেড ফুটবল ক্লাব</span></span></a>
        <nav aria-label="প্রধান মেনু"><a href="#club">আমাদের ক্লাব</a><a href="#fixtures">ম্যাচের সূচি</a><details className="squad-menu"><summary>আমাদের স্কোয়াড <span aria-hidden="true">⌄</span></summary><div className="squad-dropdown"><a className="squad-overview-link" href="#squad">সব স্কোয়াড দেখুন ↗</a>{squads.map((squad) => <div className="squad-menu-group" key={squad.id}><a className="squad-menu-team" href={`#${squad.id}`}>{squad.name}</a>{positionGroups.map((group) => <a key={group.id} href={`#${squad.id}-${group.id}`}>{group.name}</a>)}</div>)}</div></details><a href="#news">ক্লাবের খবর</a><a href="#donors">ডোনার</a><a className="nav-cta" href="#join">ক্লাবে যোগ দিন <span>↗</span></a></nav>
      </header>
      <Notice notices={notices} />
      <main id="main">
        <section className="hero">
          <div className="hero-copy"><p className="eyebrow"><span className="dot" /> সোনাময়ী ইউনাইটেডে স্বাগতম</p><h1>এক ক্লাব।<br />এক সমাজ।<br /><em>ফুটবলের বন্ধনে একসাথে।</em></h1><p className="hero-description">খেলার চেয়েও বেশি—আপন হয়ে ওঠার এক ঠিকানা। ফুটবলের প্রতি ভালোবাসা আর দলগত চেষ্টায় আমরা সবাইকে একসাথে যুক্ত করি।</p><div className="hero-actions"><a className="button button-lime" href="#fixtures">ম্যাচের সূচি দেখুন <span>↗</span></a><a className="text-link" href="#club">আমাদের ক্লাবকে জানুন <span>→</span></a></div><div className="hero-bottom"><span className="mini-ball">⚽</span><span>শিকড় আমাদের এখানেই।<br /><strong>স্বপ্নের কোনো সীমা নেই।</strong></span></div></div>
          <div className="hero-art"><FootballScene /></div>
        </section>
        <div className="values-strip"><span>ভালোবাসা নিয়ে খেলুন</span><span aria-hidden="true">✦</span><span>একসাথে পাশে থাকুন</span><span aria-hidden="true">✦</span><span>আমাদের ভবিষ্যৎ গড়ুন</span><span aria-hidden="true">✦</span><span>সোনাময়ী ইউনাইটেড</span></div>
        <section id="club" className="section about"><div><p className="eyebrow">০১ / আমাদের ক্লাব</p><h2>সমাজের সঙ্গে গভীর বন্ধন।<br /><span>খেলার টানে এগিয়ে চলা।</span></h2></div><div className="about-copy"><p>ফুটবলকে ভালোবাসেন এমন সবার জন্য সোনাময়ী ইউনাইটেড। মাঠে ও মাঠের বাইরে আমরা কঠোর পরিশ্রম, একে অপরের পাশে থাকা এবং আমাদের সমাজকে গর্বিত করায় বিশ্বাস করি।</p><p>আপনি খেলোয়াড় হোন, সমর্থক হোন কিংবা ফুটবলের সঙ্গে নতুন পরিচয় হোক—এখানে আপনার জন্য জায়গা আছে।</p><a className="text-link dark" href="#join">আমাদের পথচলার সঙ্গী হোন <span>↗</span></a></div></section>
        <section id="fixtures" className="section fixtures"><div className="section-heading"><div><p className="eyebrow">০২ / ম্যাচের দিন</p><h2>আগামীর পথচলা।</h2></div><span className="section-note">নমুনা সময়সূচি · ২০২৬<br />চূড়ান্ত ম্যাচের সূচি পরে জানানো হবে</span></div><div className="fixture-list">{fixtures.map((fixture) => <article className="fixture" key={`${fixture.day}-${fixture.month}`}><div className="fixture-date"><strong>{fixture.day}</strong><span>{fixture.month}</span></div><div className="fixture-teams"><p>{fixture.type}</p><h3>{fixture.home} <span>বনাম</span> {fixture.away}</h3></div><div className="fixture-time"><span>খেলা শুরু</span><strong>{fixture.time}</strong></div><span className="fixture-tag">আসন্ন</span></article>)}</div></section>
        <Squads />
        <section id="news" className="section news"><div className="section-heading"><div><p className="eyebrow">০৪ / ক্লাবের খবর</p><h2>মাঠের পাশের গল্প।</h2></div><span className="section-note">আগামীর এক ঝলক<br />ক্লাবের নমুনা খবর</span></div><div className="news-grid"><article className="news-card"><div className="news-art news-training"><span className="shirt">এসইউ</span><span className="art-caption">প্রস্তুতি শুরু এখানেই।</span></div><div className="news-content"><p className="eyebrow">দল / নমুনা খবর</p><h3>নতুন চ্যালেঞ্জের প্রস্তুতি</h3><p>অনুশীলন, দলগত প্রচেষ্টা আর ফুটবলের নতুন মৌসুমের প্রস্তুতির এক ঝলক।</p></div></article><article className="news-card"><div className="news-art news-community"><span className="community-symbol">✦</span><span className="art-caption">একসাথে এগিয়ে যাই আরও দূরে।</span></div><div className="news-content"><p className="eyebrow">সমাজ / নমুনা খবর</p><h3>মানুষকে ঘিরেই আমাদের ক্লাব</h3><p>যে সমর্থক ও স্বেচ্ছাসেবকেরা ক্লাবকে প্রাণবন্ত করে তোলেন, তাঁদের প্রতি ভালোবাসা।</p></div></article><article className="news-card"><div className="news-art news-match"><span className="big-ball">⚽</span><span className="art-caption">প্রতি ম্যাচে। মনপ্রাণ উজাড় করে।</span></div><div className="news-content"><p className="eyebrow">ম্যাচের দিন / নমুনা খবর</p><h3>দেখা হবে মাঠের পাশে</h3><p>মাঠে আসুন, দলকে সমর্থন করুন আর ম্যাচের আনন্দে অংশ নিন।</p></div></article></div></section>
        <Donors />
        <section id="join" className="join"><div><p className="eyebrow">এখানে আপনার জন্যও জায়গা আছে</p><h2>ক্লাবের রঙে নিজেকে রাঙান।<br /><em>ভালোবাসা ছড়িয়ে দিন।</em></h2><p>খেলুন। সমর্থন করুন। স্বেচ্ছাসেবক হোন। সোনাময়ী ইউনাইটেডের আগামীর পথচলায় অংশ নিন।</p></div><div className="join-contact"><span className="join-star" aria-hidden="true">✦</span><h3>চলুন, একসাথে গড়ে তুলি।</h3><p>খেলোয়াড় নিবন্ধন ও ক্লাবের যোগাযোগের তথ্য এখানে জানানো হবে। কীভাবে যুক্ত হতে পারবেন, তা জানতে নিয়মিত চোখ রাখুন।</p><a className="button button-lime" href="#news">ক্লাবের নতুন খবর দেখুন <span>↗</span></a></div></section>
      </main>
      <footer><a href="#" className="brand"><Crest small /><span>সোনাময়ী<span className="brand-sub">ইউনাইটেড ফুটবল ক্লাব</span></span></a><p>এক ক্লাব। এক সমাজ।</p><span>© {new Date().getFullYear().toLocaleString('bn-BD', { useGrouping: false })} সোনাময়ী ইউনাইটেড ফুটবল ক্লাব</span></footer>
    </>
  );
}
