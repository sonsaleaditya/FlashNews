
const NewsItem  =  (props) => {
        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        let dummyImage = "https://imgs.search.brave.com/W9f8WsulIevg_6gqLYWDQzjHn2vx7LHMQFo-TSdyzCI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9yc3Mu/YXBwL3N0YXRpYy9z/dmcvbGFuZGluZy9n/b29nbGVOZXdzLnN2/Zw.svg"
        return (
            <div className='my-3'>
                <div className="card ">
                    <div 
                    style={{
                        display :  'flex',
                        justifyContent : 'flex-end',
                        position : 'absolute',
                        right : 0 
                
                }}>
                        <span className=" badge rounded-pill bg-danger" >
                            {source.name}
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </div>

                    <img src={!imageUrl ? dummyImage : imageUrl} alt='news img' />
                    <div className="card-body">
                        <h5 className="card-title">{title}...
                        </h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'> <small className='card-text'> Last updated by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} className="btn btn-secondary">Read More...</a>
                    </div>
                </div>
            </div>
        )
    }

export default NewsItem
