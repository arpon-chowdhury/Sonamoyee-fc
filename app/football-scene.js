import styles from './football-scene.module.css';

const formation = [[250, 68], [90, 155], [195, 145], [305, 145], [410, 155], [110, 240], [245, 225], [385, 240], [130, 320], [270, 305], [395, 320]];

export default function FootballScene() {
  return (
    <div className={styles.scene}>
      <div className={styles.heading}><img src="/logo.svg" alt="" width="42" height="42" /><span>সোনাময়ী ইউনাইটেড<strong>ফুটবলের বন্ধনে একসাথে</strong></span><span className={styles.badge}>১১ বনাম ১১</span></div>
      <svg className={styles.field} viewBox="0 0 500 720" role="img" aria-label="দুই দলের ২২ জন খেলোয়াড়ের অ্যানিমেটেড ফুটবল খেলা">
        <rect x="25" y="30" width="450" height="660" rx="8" fill="#286044" />
        {Array.from({ length: 6 }, (_, i) => <rect key={i} x="25" y={30 + i * 110} width="450" height="55" fill="#ffffff" opacity=".035" />)}
        <g fill="none" stroke="#d5ee83" strokeWidth="2" opacity=".55">
          <rect x="35" y="40" width="430" height="640" /><path d="M35 360H465" /><circle cx="250" cy="360" r="65" />
          <path d="M130 40V150H370V40 M190 40V85H310V40 M130 680V570H370V680 M190 680V635H310V680" />
          <path d="M207 150Q250 195 293 150 M207 570Q250 525 293 570" />
          <rect x="210" y="25" width="80" height="15" /><rect x="210" y="680" width="80" height="15" />
        </g>
        <g fill="#d5ee83"><circle cx="250" cy="360" r="3" /><circle cx="250" cy="115" r="3" /><circle cx="250" cy="605" r="3" /></g>
        {[0, 1].flatMap((team) => formation.map(([x, y], index) => (
          <g key={`${team}-${index}`} transform={`translate(${team ? 500 - x : x} ${team ? 720 - y : y})`}>
            <g className={styles.player} style={{ '--dx': `${index === 0 ? 9 : (index % 2 ? 24 : -28)}px`, '--dy': `${index === 0 ? 4 : team ? -30 : 30}px`, '--delay': `${-(index * .73 + team * 2)}s`, '--kit': index === 0 ? (team ? '#dba45c' : '#88c9e8') : team ? '#f7f6ef' : '#d5ee83' }}>
              <ellipse cy="13" rx="13" ry="5" fill="#08291e" opacity=".4" />
              <path className={styles.legs} d="M-4 7L-7 17M4 7L7 17" stroke="#102e25" strokeWidth="5" strokeLinecap="round" />
              <path d="M-8-3L-13 5M8-3L13 5" stroke="#c88f66" strokeWidth="4" strokeLinecap="round" />
              <rect x="-8" y="-7" width="16" height="19" rx="5" fill="var(--kit)" />
              <text y="6" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="9" fill="#123b2e">{index + 1}</text>
              <circle cy="-12" r="6" fill="#c88f66" /><path d="M-6-13Q0-22 6-13" fill="#24261e" />
            </g>
          </g>
        )))}
        <g className={styles.ball}><ellipse cy="7" rx="9" ry="4" fill="#08291e" opacity=".4" /><circle r="7" fill="#fff" stroke="#173e30" strokeWidth="1.5" /><path d="M0-3L3-1L2 3H-2L-3-1Z" fill="#173e30" /></g>
      </svg>
      <div className={styles.legend}><span><i />সোনাময়ী ইউনাইটেড</span><span><i />প্রতিপক্ষ</span></div>
    </div>
  );
}
