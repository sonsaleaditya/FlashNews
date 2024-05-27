import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import InfiniteScroll from 'react-infinite-scroll-component'
const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    // document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - FlashNews `


    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.countryCode}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        console.log(url)
        setLoading(true);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(70);
        console.log(parsedData)
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }
    useEffect(() => {
        updateNews();
    }, []
    )

    const fetchMoreData = async () => {
       

        let url = `https://newsapi.org/v2/top-headlines?country=${props.countryCode}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
         setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();

        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    }



    return (
        <div className='container my-3 '>

            <h1 className="text-center" style={{margin : '35px 0px', marginTop : '90px' }}>FlashNews Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} Headlines</h1>


            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}

            >
                <div className="container">

                    <div className="row">
                        {

                            articles.map((element) => {
                                return (

                                    <div className="col-md-4 " key={element.url}>
                                        <NewsItem title={element.title ? element.title : " "} description={element.description ? element.description : " "} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source} />
                                    </div>

                                )


                            })

                        }

                    </div>

                </div>

            </InfiniteScroll>



        </div>
    )
}


export default News
