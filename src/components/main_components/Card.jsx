export default function Card(props) {
    return (
        <div className='card'>
            <div className="img-container">
                <img src={props.thumb} alt={props.title} className="card-img" />
            </div>
            <h3 className="card-title">{props.title.toUpperCase()}</h3>
        </div>
    );
};