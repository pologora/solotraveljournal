import image from '../img/caleb.jpg'

const Article = (props) => {
    return (
        <div className="article">
            <div className="article--image-container" style={{
                backgroundImage: `url(${require(`../img/${props.imageUrl}`)})`
                }}>
            </div>
            <div className="article--main">
                <p className="article--location">{props.location}</p>
                <a href={props.googleMapsUrl} className="article--google-maps">View on Google Maps</a>
                <h2 className="article--title">{props.title}</h2>
                <p className="article--date-range">
                    <span className="article--start-date">{props.startDate} - </span>
                    <span className="article--end-date">{props.endDate}</span>
                </p>
                <p className="article--description">{props.description}</p>
            </div>
        </div>
    )
}


export default Article