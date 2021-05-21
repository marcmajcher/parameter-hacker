import { useSelector } from 'react-redux';
import './Header.css';

export default function Header() {
  const info = useSelector(s => s.playerInfo);

  return <header className="header">
    <div className="header-block">
      <div className="row">
        Level {info.level} | ${info.cash} | key1 {info.key1} | key2 {info.key2}
      </div>
      <div className="row">EXP {info.xp}/{info.xpNext} </div>
      <div className="row">LIFE {info.life}/{info.lifeMax}</div>
      <div className="row">ACT {info.action}/{info.actionMax}</div>
    </div>
    <div className="header-block">
      <div className="row">{info.codeword.split('').join(' ')}</div>
      <div className="row">+ RCV {info.recover} </div>
      <div className="row">+ ATK {info.attack}/{info.maxAttack}</div>
      <div className="row">+ DEF {info.defense}/{info.maxDefense}</div>
    </div>
  </header>;
}
