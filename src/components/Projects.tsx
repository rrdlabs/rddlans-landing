import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function SpiderArt() {
  const nodes = [
    { x: 210, y: 34, r: 7, c: "#22d3ee" },
    { x: 336, y: 74, r: 5, c: "#a3e635" },
    { x: 392, y: 186, r: 5, c: "#22d3ee" },
    { x: 330, y: 268, r: 7, c: "#a3e635" },
    { x: 210, y: 304, r: 5, c: "#22d3ee" },
    { x: 84, y: 268, r: 5, c: "#a3e635" },
    { x: 28, y: 186, r: 7, c: "#22d3ee" },
    { x: 84, y: 74, r: 5, c: "#a3e635" },
  ];
  return (
    <svg viewBox="0 0 420 340" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="spiderHub" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.08" />
        </radialGradient>
      </defs>
      <rect width="420" height="340" fill="#070c16" rx="14" />
      <path
        d="M0 20H420M0 40H420M0 60H420M0 80H420M0 100H420M0 120H420M0 140H420M0 160H420M0 180H420M0 200H420M0 220H420M0 240H420M0 260H420M0 280H420M0 300H420M0 320H420M20 0V340M40 0V340M60 0V340M80 0V340M100 0V340M120 0V340M140 0V340M160 0V340M180 0V340M200 0V340M220 0V340M240 0V340M260 0V340M280 0V340M300 0V340M320 0V340M340 0V340M360 0V340M380 0V340M400 0V340"
        stroke="#0e1626"
        strokeWidth="1"
      />
      <circle cx="210" cy="170" r="70" fill="url(#spiderHub)" />
      {nodes.map((n, i) => (
        <g key={i}>
          <line x1="210" y1="170" x2={n.x} y2={n.y} stroke={n.c} strokeOpacity="0.18" strokeWidth="1" />
          <line x1={nodes[i].x} y1={nodes[i].y} x2={nodes[(i + 1) % nodes.length].x} y2={nodes[(i + 1) % nodes.length].y} stroke="#1b2a45" strokeWidth="1" strokeDasharray="3 5" />
        </g>
      ))}
      <g transform="rotate(45 210 170)">
        <line x1="192" y1="170" x2="228" y2="170" stroke="#22d3ee" strokeOpacity="0.35" />
        <line x1="210" y1="152" x2="210" y2="188" stroke="#22d3ee" strokeOpacity="0.35" />
      </g>
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={n.r} fill={n.c} fillOpacity="0.85">
          <animate attributeName="r" values={`${n.r};${n.r + 2};${n.r}`} dur="2.6s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <circle cx="210" cy="170" r="11" fill="#04060c" stroke="#22d3ee" strokeWidth="2.5" />
      <circle cx="210" cy="170" r="11" fill="none" stroke="#22d3ee" strokeWidth="1.5" fillOpacity="0">
        <animate attributeName="r" values="11;30" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0" dur="2.4s" repeatCount="indefinite" />
      </circle>
      <text x="210" y="164" textAnchor="middle" fontSize="11" fontFamily="monospace" fontWeight="700" fill="#22d3ee">SP1D3R</text>
      <text x="392" y="180" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#a3e635">CRAWLR</text>
      <text x="60" y="180" textAnchor="middle" fontSize="8" fontFamily="monospace" fill="#22d3ee">NODE</text>
    </svg>
  );
}

function BcwArt() {
  return (
    <svg viewBox="0 0 420 340" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="bcwBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2a0f38" />
          <stop offset="100%" stopColor="#16071f" />
        </linearGradient>
        <linearGradient id="bcwBtn" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#ecaf3e" />
          <stop offset="100%" stopColor="#e8953a" />
        </linearGradient>
      </defs>
      <rect width="420" height="340" fill="url(#bcwBg)" rx="14" />
      <circle cx="80" cy="60" r="70" fill="#622286" opacity="0.25" />
      <circle cx="360" cy="300" r="90" fill="#ecaf3e" opacity="0.08" />
      <g transform="translate(150 26)">
        <rect x="0" y="0" width="120" height="288" rx="20" fill="#0d0512" stroke="#3b2050" strokeWidth="2" />
        <rect x="44" y="8" width="32" height="6" rx="3" fill="#3b2050" />
        <rect x="6" y="24" width="108" height="26" rx="8" fill="#622286" />
        <text x="60" y="41" textAnchor="middle" fontSize="9" fontFamily="monospace" fontWeight="700" fill="#ffffff">BCW</text>
        <rect x="12" y="60" width="96" height="7" rx="3.5" fill="#3d2b4d" />
        <rect x="12" y="74" width="70" height="7" rx="3.5" fill="#2a1e38" />
        <rect x="12" y="88" width="84" height="7" rx="3.5" fill="#2a1e38" />
        <g>
          <rect x="12" y="105" width="96" height="26" rx="13" fill="url(#bcwBtn)" />
          <text x="60" y="121" textAnchor="middle" fontSize="8.5" fontFamily="monospace" fontWeight="700" fill="#1c1206">Donate now</text>
        </g>
        <rect x="12" y="142" width="96" height="44" rx="9" fill="#160a20" stroke="#3b2050" strokeWidth="1.5" />
        <circle cx="30" cy="164" r="10" fill="none" stroke="#ecaf3e" strokeWidth="2.2" />
        <circle cx="30" cy="164" r="3.5" fill="#ecaf3e" />
        <rect x="46" y="152" width="52" height="5" rx="2.5" fill="#3d2b4d" />
        <rect x="46" y="163" width="40" height="5" rx="2.5" fill="#2a1e38" />
        <rect x="46" y="174" width="30" height="5" rx="2.5" fill="#2a1e38" />
        <g>
          <rect x="12" y="196" width="96" height="22" rx="6" fill="#622286" opacity="0.9" />
          <text x="60" y="210" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="#e9d7f5">Pickup booked · 2:00 PM</text>
        </g>
        <g>
          <rect x="12" y="226" width="96" height="22" rx="6" fill="#1d0e2a" stroke="#622286" strokeWidth="1" />
          <text x="60" y="240" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fill="#d8a0f5">Offline-first · PWA</text>
        </g>
        <rect x="12" y="256" width="96" height="22" rx="11" fill="#3b2050" />
        <text x="60" y="270" textAnchor="middle" fontSize="7.5" fontFamily="monospace" fontWeight="700" fill="#ecaf3e">Open in Maps</text>
      </g>
    </svg>
  );
}

function CodpetArt() {
  return (
    <svg viewBox="0 0 420 340" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="codBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#171030" />
          <stop offset="100%" stopColor="#0a0716" />
        </linearGradient>
        <linearGradient id="codScreen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2b1b52" />
          <stop offset="100%" stopColor="#170f2e" />
        </linearGradient>
      </defs>
      <rect width="420" height="340" fill="url(#codBg)" rx="14" />
      <circle cx="60" cy="280" r="80" fill="#a78bfa" opacity="0.12" />
      <circle cx="370" cy="50" r="70" fill="#22d3ee" opacity="0.08" />

      <g transform="translate(96 22)">
        <rect x="0" y="0" width="228" height="296" rx="26" fill="#0b0714" stroke="#33295c" strokeWidth="2" />
        <rect x="86" y="8" width="56" height="7" rx="3.5" fill="#33295c" />
        <rect x="14" y="28" width="200" height="214" rx="18" fill="url(#codScreen)" />
        <g>
          <line x1="114" y1="52" x2="96" y2="34" stroke="#22d3ee" strokeWidth="3.5" strokeLinecap="round">
            <animate attributeName="x2" values="96;100;96" dur="3.5s" repeatCount="indefinite" />
            <animate attributeName="y2" values="34;30;34" dur="3.5s" repeatCount="indefinite" />
          </line>
          <circle cx="96" cy="32" r="5" fill="#22d3ee">
            <animate attributeName="opacity" values="1;0.4;1" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <path
            d="M114 96c-14 0-24 4-32 12-6-10-14-20-26-26 6 12 8 22 6 34-8 4-12 12-12 22 0 18 16 28 40 28s40-10 40-28c0-8-3-16-10-22-2-12 0-24 6-36-10 8-16 18-20 28-4-4-8-8-12-12z"
            fill="#a78bfa"
          >
            <animate attributeName="transform" attributeType="XML" type="translate" values="0 0;0 -4;0 0" dur="2.2s" repeatCount="indefinite" />
          </path>
          <ellipse cx="104" cy="104" rx="7" ry="8" fill="#0b0714">
            <animate attributeName="ry" values="8;1;8" dur="3.2s" begin="1.2s" repeatCount="indefinite" />
          </ellipse>
          <ellipse cx="128" cy="104" rx="7" ry="8" fill="#0b0714">
            <animate attributeName="ry" values="8;1;8" dur="3.2s" begin="1.2s" repeatCount="indefinite" />
          </ellipse>
          <circle cx="106" cy="105" r="2.4" fill="#22d3ee" />
          <circle cx="130" cy="105" r="2.4" fill="#22d3ee" />
          <path d="M110 122q8 8 16 0" stroke="#0b0714" strokeWidth="2.4" fill="none" strokeLinecap="round" />
          <g>
            <rect x="150" y="52" width="54" height="24" rx="12" fill="#22d3ee" opacity="0.92">
              <animate attributeName="opacity" values="0.92;0;0.92" dur="4.2s" begin="0.8s" repeatCount="indefinite" />
            </rect>
            <text x="177" y="67" textAnchor="middle" fontSize="10" fontFamily="monospace" fontWeight="700" fill="#0b0714">
              <animate attributeName="opacity" values="1;0;1" dur="4.2s" begin="0.8s" repeatCount="indefinite" />
              hi!
            </text>
          </g>
        </g>
        <g>
          <rect x="20" y="196" width="112" height="30" rx="8" fill="#241640" />
          <text x="34" y="214" fontSize="9" fontFamily="monospace" fill="#d7c5f5">mood</text>
          <rect x="84" y="203" width="20" height="7" rx="3.5" fill="#a78bfa">
            <animate attributeName="width" values="20;34;20" dur="5s" repeatCount="indefinite" />
          </rect>
          <rect x="138" y="196" width="62" height="30" rx="8" fill="#241640" />
          <text x="169" y="214" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#d7c5f5">openai</text>
        </g>
        <rect x="14" y="240" width="200" height="42" rx="12" fill="#100a20" stroke="#33295c" strokeWidth="1.5" />
        <text x="114" y="266" textAnchor="middle" fontSize="10" fontFamily="monospace" fill="#a78bfa">
          lvgl · esp-idf · on-device AI
        </text>
      </g>
    </svg>
  );
}

function ExposedArt() {
  return (
    <svg viewBox="0 0 420 340" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="expBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#04141c" />
          <stop offset="100%" stopColor="#020a10" />
        </linearGradient>
        <linearGradient id="expScan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="420" height="340" fill="url(#expBg)" rx="14" />
      <circle cx="340" cy="50" r="90" fill="#22d3ee" opacity="0.07" />
      <circle cx="60" cy="300" r="70" fill="#ff4d6d" opacity="0.05" />

      {/* scanline sweep */}
      <rect x="34" y="54" width="352" height="86" fill="url(#expScan)" />
      <line x1="34" y1="54" x2="386" y2="54" stroke="#22d3ee" strokeWidth="1.5" opacity="0.8" />

      <g fontFamily="monospace">
        <text x="34" y="38" fontSize="10" fill="#22d3ee" letterSpacing="2">
          PASSIVE EXPOSURE MONITOR
        </text>
        <text x="386" y="38" fontSize="10" fill="#3d4a63" textAnchor="end">
          DAILY
        </text>
      </g>

      {/* severity rows */}
      <g>
        <rect x="34" y="70" width="352" height="26" rx="6" fill="#0d1f28" stroke="#ff4d6d" strokeOpacity="0.35" />
        <rect x="34" y="70" width="3" height="26" fill="#ff4d6d" />
        <circle cx="52" cy="83" r="3.5" fill="#ff4d6d" />
        <text x="64" y="87" fontSize="9.5" fontFamily="monospace" fill="#ffffff">
          certificate hostname mismatch
        </text>
        <text x="372" y="87" fontSize="8" fontFamily="monospace" fill="#ff4d6d" textAnchor="end">
          HIGH
        </text>
      </g>
      <g>
        <rect x="34" y="102" width="352" height="26" rx="6" fill="#0d1f28" stroke="#ecaf3e" strokeOpacity="0.3" />
        <rect x="34" y="102" width="3" height="26" fill="#ecaf3e" />
        <circle cx="52" cy="115" r="3.5" fill="#ecaf3e" />
        <text x="64" y="119" fontSize="9.5" fontFamily="monospace" fill="#ffffff">
          HSTS header missing
        </text>
        <text x="372" y="119" fontSize="8" fontFamily="monospace" fill="#ecaf3e" textAnchor="end">
          MED
        </text>
      </g>
      <g>
        <rect x="34" y="134" width="352" height="26" rx="6" fill="#0d1f28" stroke="#22d3ee" strokeOpacity="0.3" />
        <rect x="34" y="134" width="3" height="26" fill="#22d3ee" />
        <circle cx="52" cy="147" r="3.5" fill="#22d3ee" />
        <text x="64" y="151" fontSize="9.5" fontFamily="monospace" fill="#ffffff">
          new subdomain detected
        </text>
        <text x="372" y="151" fontSize="8" fontFamily="monospace" fill="#22d3ee" textAnchor="end">
          LOW
        </text>
      </g>

      {/* change alert */}
      <g>
        <rect x="34" y="176" width="352" height="44" rx="8" fill="#0a1a22" stroke="#22d3ee" strokeOpacity="0.3" />
        <text x="48" y="196" fontSize="9" fontFamily="monospace" fill="#22d3ee">
          ALERT · something changed since yesterday
        </text>
        <text x="48" y="211" fontSize="8" fontFamily="monospace" fill="#9fb0c8">
          www now resolves outside the previous range
        </text>
      </g>

      {/* pricing strip */}
      <g>
        <rect x="34" y="234" width="106" height="52" rx="8" fill="#0a1a22" stroke="#22d3ee" strokeOpacity="0.28" />
        <text x="87" y="256" fontSize="13" fontFamily="monospace" fontWeight="700" fill="#ffffff" textAnchor="middle">
          $19
        </text>
        <text x="87" y="272" fontSize="7.5" fontFamily="monospace" fill="#22d3ee" textAnchor="middle">
          SOLO / MONTH
        </text>
      </g>
      <g>
        <rect x="152" y="234" width="106" height="52" rx="8" fill="#0a1a22" stroke="#22d3ee" strokeOpacity="0.28" />
        <text x="205" y="256" fontSize="13" fontFamily="monospace" fontWeight="700" fill="#ffffff" textAnchor="middle">
          $49
        </text>
        <text x="205" y="272" fontSize="7.5" fontFamily="monospace" fill="#22d3ee" textAnchor="middle">
          PRO / MONTH
        </text>
      </g>
      <g>
        <rect x="270" y="234" width="116" height="52" rx="8" fill="#22d3ee" opacity="0.12" />
        <text x="328" y="256" fontSize="9" fontFamily="monospace" fontWeight="700" fill="#22d3ee" textAnchor="middle">
          FREE SCAN
        </text>
        <text x="328" y="272" fontSize="7.5" fontFamily="monospace" fill="#9fb0c8" textAnchor="middle">
          NO ACCOUNT NEEDED
        </text>
      </g>

      <text x="210" y="314" textAnchor="middle" fontSize="9" fontFamily="monospace" fill="#22d3ee" opacity="0.85">
        certs · dns · tls · headers
      </text>
    </svg>
  );
}

function StreetArt() {
  return (
    <svg viewBox="0 0 420 340" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="stBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0c1509" />
          <stop offset="100%" stopColor="#050a04" />
        </linearGradient>
        <linearGradient id="stScreen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#16240f" />
          <stop offset="100%" stopColor="#0a1206" />
        </linearGradient>
      </defs>
      <rect width="420" height="340" fill="url(#stBg)" rx="14" />
      <circle cx="350" cy="60" r="86" fill="#a3e635" opacity="0.07" />
      <circle cx="70" cy="300" r="70" fill="#22d3ee" opacity="0.05" />

      <g fontFamily="monospace">
        <text x="34" y="34" fontSize="10" fill="#a3e635" letterSpacing="2">
          OFFLINE-FIRST DIRECTORY
        </text>
        {/* The no-signal state is the whole point of the build, so it is the
            one thing drawn as a hard, unambiguous badge. */}
        <g>
          <rect x="292" y="20" width="94" height="20" rx="10" fill="#a3e635" fillOpacity="0.14" stroke="#a3e635" strokeOpacity="0.5" />
          <path d="M300 33l10-9" stroke="#a3e635" strokeWidth="2" strokeLinecap="round" />
          <path d="M303 24a7 7 0 016 0" stroke="#a3e635" strokeWidth="1.8" fill="none" strokeLinecap="round" />
          <circle cx="305" cy="35" r="1.8" fill="#a3e635" />
          <text x="316" y="34" fontSize="9" fontWeight="700" fill="#a3e635">
            NO SIGNAL
          </text>
        </g>
      </g>

      <g transform="translate(92 52)">
        <rect x="0" y="0" width="236" height="268" rx="24" fill="#080d05" stroke="#2c3f1c" strokeWidth="2" />
        <rect x="88" y="8" width="60" height="6" rx="3" fill="#2c3f1c" />
        <rect x="12" y="24" width="212" height="232" rx="16" fill="url(#stScreen)" />

        {/* crisis bar, the four numbers reachable above the fold */}
        <text x="20" y="38" fontSize="6" fill="#7d8f6b" letterSpacing="1.2">
          NEED HELP RIGHT NOW
        </text>
        <g fontFamily="monospace" fontSize="6.5" fontWeight="700">
          <rect x="20" y="44" width="46" height="16" rx="4" fill="#a3e635" fillOpacity="0.16" stroke="#a3e635" strokeOpacity="0.55" />
          <text x="43" y="55" textAnchor="middle" fill="#a3e635">911</text>
          <rect x="70" y="44" width="46" height="16" rx="4" fill="#a3e635" fillOpacity="0.16" stroke="#a3e635" strokeOpacity="0.55" />
          <text x="93" y="55" textAnchor="middle" fill="#a3e635">988</text>
          <rect x="120" y="44" width="46" height="16" rx="4" fill="#1d2a13" stroke="#2c3f1c" />
          <text x="143" y="55" textAnchor="middle" fill="#9fb0c8">211</text>
          <rect x="170" y="44" width="46" height="16" rx="4" fill="#1d2a13" stroke="#2c3f1c" />
          <text x="193" y="55" textAnchor="middle" fill="#9fb0c8">811</text>
        </g>

        {/* search field */}
        <rect x="20" y="68" width="196" height="20" rx="6" fill="#101a09" stroke="#2c3f1c" />
        <circle cx="31" cy="78" r="3.4" stroke="#7d8f6b" strokeWidth="1.4" fill="none" />
        <line x1="33.5" y1="80.5" x2="36" y2="83" stroke="#7d8f6b" strokeWidth="1.4" strokeLinecap="round" />
        <text x="42" y="81" fontFamily="monospace" fontSize="7" fill="#7d8f6b">
          shelter tonight
        </text>

        {/* category chips */}
        <g fontFamily="monospace" fontSize="5.5" letterSpacing="0.6">
          <rect x="20" y="94" width="42" height="11" rx="5.5" fill="#a3e635" fillOpacity="0.18" />
          <text x="41" y="102" textAnchor="middle" fill="#a3e635">SHELTER</text>
          <rect x="66" y="94" width="36" height="11" rx="5.5" fill="none" stroke="#2c3f1c" />
          <text x="84" y="102" textAnchor="middle" fill="#7d8f6b">CRISIS</text>
          <rect x="106" y="94" width="30" height="11" rx="5.5" fill="none" stroke="#2c3f1c" />
          <text x="121" y="102" textAnchor="middle" fill="#7d8f6b">FOOD</text>
          <rect x="140" y="94" width="34" height="11" rx="5.5" fill="none" stroke="#2c3f1c" />
          <text x="157" y="102" textAnchor="middle" fill="#7d8f6b">HEALTH</text>
        </g>

        {/* listing rows: name, category, and a number you can actually tap */}
        <g fontFamily="monospace">
          <rect x="20" y="114" width="196" height="30" rx="6" fill="#111c0a" stroke="#22330f" />
          <rect x="27" y="121" width="4" height="16" rx="2" fill="#a3e635" />
          <text x="38" y="128" fontSize="7.5" fontWeight="700" fill="#eafcec">
            Tribal Council Wellness
          </text>
          <text x="38" y="138" fontSize="5.5" fill="#7d8f6b" letterSpacing="0.5">
            SHELTER · OPEN 24 HOURS
          </text>
          <text x="209" y="133" textAnchor="end" fontSize="8" fontWeight="700" fill="#a3e635">
            306-249-5415
          </text>

          <rect x="20" y="150" width="196" height="30" rx="6" fill="#111c0a" stroke="#22330f" />
          <rect x="27" y="157" width="4" height="16" rx="2" fill="#a3e635" />
          <text x="38" y="164" fontSize="7.5" fontWeight="700" fill="#eafcec">
            Interval House
          </text>
          <text x="38" y="174" fontSize="5.5" fill="#7d8f6b" letterSpacing="0.5">
            VIOLENCE · 24 HOURS
          </text>
          <text x="209" y="169" textAnchor="end" fontSize="8" fontWeight="700" fill="#a3e635">
            306-244-0185
          </text>

          {/* the closure flag: shown on the card, not buried on the detail page */}
          <rect x="20" y="186" width="196" height="34" rx="6" fill="#1a1410" stroke="#ecaf3e" strokeOpacity="0.45" />
          <rect x="27" y="193" width="4" height="20" rx="2" fill="#ecaf3e" />
          <text x="38" y="200" fontSize="7.5" fontWeight="700" fill="#f6e7cf">
            Prairie Harm Reduction
          </text>
          <text x="38" y="211" fontSize="6" fontWeight="700" fill="#ecaf3e">
            CLOSED APRIL 2026 · DO NOT GO
          </text>
        </g>

        {/* source provenance, the bit that makes the data auditable */}
        <g fontFamily="monospace">
          <rect x="20" y="228" width="196" height="20" rx="6" fill="#0d1507" stroke="#22330f" strokeDasharray="3 3" />
          <circle cx="31" cy="238" r="3" fill="#a3e635" />
          <text x="40" y="241" fontSize="6" fill="#7d8f6b">
            64 / 81 entries sourced · read 2026-09-28
          </text>
        </g>
      </g>

      <g fontFamily="monospace">
        <text x="210" y="330" textAnchor="middle" fontSize="9" fill="#a3e635" opacity="0.85">
          81 services · 13 categories · 0 trackers
        </text>
      </g>
    </svg>
  );
}

const projects = [
  {
    accent: "#22d3ee",
    chipClass: "border-[#22d3ee]/30 bg-[#22d3ee]/10 text-[#22d3ee]",
    dot: "bg-[#22d3ee]",
    title: "Spider Protocol",
    tagline: "Decentralized Privacy Platform",
    status: "Live network · Launching",
    description:
      "A privacy platform that finds where your data lives on the web and helps you remove it — run by a decentralized network of encrypted crawler nodes secured on-chain. Powered by a custom PoA blockchain and a two-token economy.",
    features: [
      "Decentralized, encrypted search & crawling",
      "Blockchain-secured evidence of data exposure",
      "Automated removal requests — 50+ legal templates",
      "Custodial BIP-39 wallets, exportable to MetaMask",
      "SP1D3R / CRAWLR token economy across a cross-chain bridge",
    ],
    metrics: [
      { v: "On-chain", l: "encrypted crawl nodes" },
      { v: "Live", l: "decentralized network" },
      { v: "Automated", l: "data-removal requests" },
      { v: "Hardened", l: "security-reviewed" },
    ],
    links: [
      { label: "Visit app", href: "https://spider.d31337m3.com/spider/", external: true },
      { label: "Read the launch", href: "https://github.com/rrdlabs/Sp1d3r_alpha", external: true },
    ],
    art: <SpiderArt />,
  },
  {
    accent: "#ecaf3e",
    chipClass: "border-gold/30 bg-gold/10 text-gold",
    dot: "bg-gold",
    title: "BCW Mobile",
    tagline: "Bridge City Warmth — street-outreach app",
    status: "Live PWA · In production",
    description:
      "The entire operation of a Saskatoon street-outreach charity, turned into one installable, offline-first mobile app — so a neighbour can donate winter gear, a volunteer can claim a pickup, and someone in need can find a warm meal in under a minute.",
    features: [
      "Four ways to give on one screen — Stripe, e-Transfer, pledges, in-kind",
      "Free home pickups tracked scheduled → assigned → picked up → delivered",
      "Hand-verified resource directory with live embedded Google Maps",
      "Fully anonymous help requests — privacy as a feature",
      "Self-updating PWA: 223 KB bundle, offline-first, zero app-store wait",
    ],
    metrics: [
      { v: "21", l: "E2E flows tested" },
      { v: "223 KB", l: "single bundle" },
      { v: "2 taps", l: "to install" },
      { v: "100%", l: "offline-capable UI" },
    ],
    links: [
      { label: "Live preview", href: "https://rrdlabs.online/bcw/", external: true },
      { label: "GitHub", href: "https://github.com/rrdlabs/bcw-mobile", external: true },
    ],
    art: <BcwArt />,
  },
  {
    accent: "#a78bfa",
    chipClass: "border-cyber-violet/30 bg-cyber-violet/10 text-cyber-violet",
    dot: "bg-cyber-violet",
    title: "CODEPET",
    tagline: "AI digital pet on the ESP32-S3 Touch AMOLED",
    status: "In development · ESP32",
    description:
      "A pocket-sized AI companion living on a Waveshare ESP32-S3 Touch AMOLED — on-device conversation, a full LVGL touch UI, and firmware flashed over USB. Proof that 'hobby' hardware can ship with real-software discipline.",
    features: [
      "On-device AI conversation — no cloud, no subscription",
      "Full LVGL touch UI running on ESP-IDF",
      "Low-power AMOLED display tuned for daily-driver use",
      "Open firmware pipeline from proto to release",
    ],
    metrics: [
      { v: "ESP32-S3", l: "dual-core AI" },
      { v: "AMOLED", l: "touch display" },
      { v: "LVGL", l: "UI framework" },
      { v: "On-device", l: "AI, no cloud" },
    ],
    links: [
      { label: "GitHub org", href: "https://github.com/rrdlabs", external: true },
      { label: "From proto to product", href: "#services", external: false },
    ],
    art: <CodpetArt />,
  },
  {
    accent: "#22d3ee",
    chipClass: "border-[#22d3ee]/30 bg-[#22d3ee]/10 text-[#22d3ee]",
    dot: "bg-[#22d3ee]",
    title: "Exposed",
    tagline: "Continuous attack-surface monitoring as a subscription",
    status: "Live · Paid product",
    description:
      "A hosted monitoring service that re-reads a domain's public footprint every day — Certificate Transparency logs, public DNS, the TLS handshake and ordinary HTTP headers — and emails you the moment any of it changes. Free scan first, $19/month to keep watching.",
    features: [
      "Passive only: crt.sh, public DNS, TLS handshake, HTTP response headers",
      "Free anonymous scan with a shareable report, no account required",
      "Daily re-scans with a plain-language diff of what changed",
      "Alerts on new subdomains, expiring certs, DNS drift and missing headers",
      "Self-serve billing via Lemon Squeezy as merchant of record",
      "Free monitoring for registered charities and nonprofits",
    ],
    metrics: [
      { v: "Daily", l: "re-scan cadence" },
      { v: "$19", l: "Solo, per month" },
      { v: "$49", l: "Pro, per month" },
      { v: "Passive", l: "no active probing" },
    ],
    links: [
      { label: "Run a free scan", href: "https://rrdlabs.online/exposed", external: true },
      { label: "Source on GitHub", href: "https://github.com/rrdlabs/exposed", external: true },
    ],
    art: <ExposedArt />,
  },
  {
    accent: "#a3e635",
    chipClass: "border-volt/30 bg-volt/10 text-volt",
    dot: "bg-volt",
    title: "Saskatoon Street Project",
    tagline: "Offline-first directory of the services you need to actually reach",
    status: "Live PWA · Open source",
    description:
      "A directory of the services someone on the street in Saskatoon actually needs to reach — crisis, shelter, food, health, harm reduction, legal — built for the case where your phone has no bars and you need a number, not a website. The whole directory ships inside the app and works with the radio off.",
    features: [
      "Installs to the home screen; the entire directory is in the bundle, not fetched",
      "Works with no signal — search, category filters, and every number available offline",
      "81 services across 13 categories, from 911 to tenancy clinics",
      "Every entry records the page it was read from and the date, so the data is auditable",
      "Flags closures, permit expiries, and seasonal services before you walk across town",
      "No accounts, no analytics, no cookies — nothing about a visit leaves the device",
    ],
    metrics: [
      { v: "81", l: "services listed" },
      { v: "13", l: "categories" },
      { v: "100%", l: "works offline" },
      { v: "0", l: "trackers, no accounts" },
    ],
    links: [
      { label: "Open the directory", href: "https://rrdlabs.online/streetproject/", external: true },
      { label: "Source on GitHub", href: "https://github.com/rrdlabs/saskatoon-street-project", external: true },
    ],
    art: <StreetArt />,
  },
];

export default function Projects() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-14 md:py-16">
      <div className="pointer-events-none absolute left-0 top-1/3 h-96 w-96 rounded-full bg-[#622286]/10 blur-[140px]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Featured work"
          title={
            <>
              Recent projects, <span className="text-gradient">shipped for real</span>
            </>
          }
          description="Not templates, not mockups — these are deployed products with live URLs, real brands, automated tests and working backends."
        />

        <div className="mt-16 space-y-20">
          {projects.map((p, i) => (
            <Reveal key={p.title}>
              <article className="grid gap-10 rounded-xl border border-edge bg-void/70 p-7 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-14">
                <div className={`order-2 ${i % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${p.chipClass}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${p.dot} animate-pulse`} />
                      {p.status}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm text-mist">{p.tagline}</p>
                  <p className="mt-5 leading-relaxed text-mist">{p.description}</p>

                  <ul className="mt-6 space-y-2.5">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-mist/90">
                        <svg className="mt-1 shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={p.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-edge bg-edge sm:grid-cols-4">
                    {p.metrics.map((m) => (
                      <div key={m.l} className="bg-panel/80 px-4 py-4">
                        <p className="font-display text-lg font-semibold text-white">{m.v}</p>
                        <p className="mt-0.5 font-mono text-[10px] uppercase tracking-wider text-mist/70">{m.l}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-7 flex flex-wrap gap-4">
                    <a
                      href={p.links[0].href}
                      target={p.links[0].external ? "_blank" : undefined}
                      rel={p.links[0].external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-md border border-edge-strong bg-panel/60 px-5 py-3 font-mono text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      style={{ "--accent": p.accent } as React.CSSProperties}
                    >
                      {p.links[0].label}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </a>
                    <a
                      href={p.links[1].href}
                      target={p.links[1].external ? "_blank" : undefined}
                      rel={p.links[1].external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-2 px-5 py-3 font-mono text-[13px] uppercase tracking-[0.12em] text-mist transition hover:text-white"
                    >
                      {p.links[1].label}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M9 7h8v8" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className={`order-1 ${i % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="overflow-hidden rounded-xl border border-edge shadow-2xl shadow-black/50">
                    {p.art}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}