export default function Card(props) {
    return (
        <div className='card'>
            <img src={props.thumb} alt={props.title} className="card-img" />
            <h3 className="card-title">{props.title}</h3>
        </div>
    );
};