import { useSelector } from 'react-redux';
import './Header.css';
const logSize = 4;

export default function Header() {
  const info = useSelector(s => s.playerInfo);
  const log = useSelector(s => s.log.slice(-logSize));

  return <header className="header">
    <div className="header-block">
      <div className="row">
        <label>Level {info.level}</label> | ${info.cash} | key1 {info.key1} | key2 {info.key2}
      </div>
      <div className="row"><label>EXP</label> {info.xp}/{info.xpNext} </div>
      <div className="row"><label>LIFE</label> {info.life}/{info.lifeMax}</div>
      <div className="row"><label>ACT</label> {info.action}/{info.actionMax}</div>
    </div>
    <div className="header-block">
      <div className="row"><label>{info.codeword.split('').join(' ')}</label></div>
      <div className="row">+ <label>RCV</label> {info.recover} </div>
      <div className="row">+ <label>ATK</label> {info.attack}/{info.attackMax}</div>
      <div className="row">+ <label>DEF</label> {info.defense}/{info.defenseMax}</div>
    </div>
    <div className="header-block output">
      {log.map(e => <p key={e.time}>{e.message}</p>)}
    </div>
    <div className="combo-bar"></div>
  </header>;
}
