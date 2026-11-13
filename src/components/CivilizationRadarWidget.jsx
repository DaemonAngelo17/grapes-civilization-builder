import React, { useMemo } from 'react';
import { calculateCivilizationStats } from '../utils/civilizationStats.js';
import { ShieldAlert, Compass, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export default function CivilizationRadarWidget({ answers = {}, isCollapsed, onToggleCollapse }) {
  const { stats, dnaMatches, topMatch } = useMemo(() => {
    return calculateCivilizationStats(answers);
  }, [answers]);

  // Polygon math for 6 axes (60 degree intervals)
  const size = 180;
  const center = size / 2;
  const radius = center - 24;

  const axes = [
    { key: 'militaryMight', label: 'Military', icon: '⚔️' },
    { key: 'mercantileWealth', label: 'Wealth', icon: '💰' },
    { key: 'engineeringTech', label: 'Tech', icon: '⚙️' },
    { key: 'theocraticPiety', label: 'Piety', icon: '🕊️' },
    { key: 'centralAuthority', label: 'Authority', icon: '👑' },
    { key: 'civicLiberty', label: 'Liberty', icon: '⚖️' }
  ];

  // Coordinates for grid rings and data points
  const points = axes.map((axis, i) => {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    const value = (stats[axis.key] || 20) / 100;
    const x = center + radius * value * Math.cos(angle);
    const y = center + radius * value * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  const ringPoints = (level) => {
    return axes.map((_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 2;
      const x = center + radius * level * Math.cos(angle);
      const y = center + radius * level * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  };

  return (
    <div className="parchment-panel rounded-xl p-3 border border-[#cfc1a8] shadow-xs font-sans-ui bg-[#f9f4eb]">
      {/* Header bar */}
      <div 
        onClick={onToggleCollapse}
        className="flex items-center justify-between cursor-pointer select-none pb-2 border-b border-[#e2d5c0]"
      >
        <div className="flex items-center gap-1.5">
          <span className="w-5 h-5 rounded-md bg-[#935923] text-white flex items-center justify-center text-xs font-bold font-cinzel">
            📊
          </span>
          <span className="font-cinzel text-xs font-bold text-[#241a15]">
            CIVILIZATION DNA &amp; RADAR
          </span>
        </div>
        <div className="flex items-center gap-1 text-[#8c531b] text-xs font-bold">
          <span>{topMatch.matchPct}% {topMatch.flag}</span>
          {isCollapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
        </div>
      </div>

      {!isCollapsed && (
        <div className="mt-3 space-y-3">
          {/* Top DNA Benchmark Match Banner */}
          <div className="p-2 rounded-lg bg-[#efe3d0] border border-[#d6c4a8] flex items-center justify-between">
            <div>
              <span className="text-[10px] text-[#7a6452] uppercase font-bold tracking-wider block">
                Primary Historical Match
              </span>
              <span className="text-xs font-bold text-[#2b1f17] flex items-center gap-1">
                <span>{topMatch.flag}</span>
                <span>{topMatch.shortName}</span>
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-extrabold text-[#935923] font-mono">
                {topMatch.matchPct}%
              </span>
              <div className="w-16 h-1.5 bg-[#d8c7ad] rounded-full overflow-hidden mt-0.5">
                <div 
                  className="h-full bg-gradient-to-r from-[#935923] to-[#c59b27] transition-all duration-500"
                  style={{ width: `${topMatch.matchPct}%` }}
                />
              </div>
            </div>
          </div>

          {/* SVG 6-Axis Radar Polygon */}
          <div className="flex justify-center items-center py-1">
            <svg width={size} height={size} className="overflow-visible">
              {/* Background Concentric Webs */}
              {[0.25, 0.5, 0.75, 1.0].map((level, idx) => (
                <polygon
                  key={idx}
                  points={ringPoints(level)}
                  fill="none"
                  stroke="#dbcab0"
                  strokeWidth="1"
                  strokeDasharray={idx === 3 ? 'none' : '2,2'}
                />
              ))}

              {/* Axis Spoke Lines */}
              {axes.map((_, i) => {
                const angle = (Math.PI / 3) * i - Math.PI / 2;
                const x2 = center + radius * Math.cos(angle);
                const y2 = center + radius * Math.sin(angle);
                return (
                  <line
                    key={i}
                    x1={center}
                    y1={center}
                    x2={x2}
                    y2={y2}
                    stroke="#dbcab0"
                    strokeWidth="1"
                  />
                );
              })}

              {/* Filled Stat Data Polygon */}
              <polygon
                points={points}
                fill="rgba(147, 89, 35, 0.35)"
                stroke="#935923"
                strokeWidth="2"
                className="transition-all duration-300"
              />

              {/* Data points & Labels */}
              {axes.map((axis, i) => {
                const angle = (Math.PI / 3) * i - Math.PI / 2;
                const value = (stats[axis.key] || 20) / 100;
                const x = center + radius * value * Math.cos(angle);
                const y = center + radius * value * Math.sin(angle);

                // Label offset
                const lx = center + (radius + 14) * Math.cos(angle);
                const ly = center + (radius + 14) * Math.sin(angle);

                return (
                  <g key={axis.key}>
                    <circle cx={x} cy={y} r="3" fill="#935923" stroke="#fff" strokeWidth="1" />
                    <text
                      x={lx}
                      y={ly}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fontSize="9"
                      fontWeight="bold"
                      fill="#4a3729"
                      className="font-sans-ui select-none pointer-events-none"
                    >
                      {axis.icon} {stats[axis.key]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Mini Preset Overlap Table */}
          <div className="space-y-1 pt-1 border-t border-[#e2d5c0]">
            <span className="text-[10px] text-[#7a6452] uppercase font-bold tracking-wider block">
              Benchmark Affinity Breakdown
            </span>
            <div className="grid grid-cols-2 gap-1 text-[10px]">
              {dnaMatches.slice(0, 4).map((p) => (
                <div key={p.id} className="flex items-center justify-between px-1.5 py-0.5 rounded bg-[#f1e6d4]">
                  <span className="truncate text-[#3e2f23]">{p.flag} {p.shortName.split(' ')[0]}</span>
                  <span className="font-mono font-bold text-[#8c531b]">{p.matchPct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

