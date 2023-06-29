import {Link} from 'react-router-dom'

export default function Card({ card }) {
  return (
    <div className={`basic-card basic-card-${card.bgcolor}`}>
      <div className="card-content">
        <span className="card-title">{card.title}</span>
        <p className="card-text">{card.description}</p>
        <Link className='link' to={card.link}>Link</Link>
      </div>
    </div>
  );
}
