import React, { Component } from 'react'
import image from '../imgs/error.png'
export default class News extends Component {
  render() {
    return (
      <div className = "news-feed">
        {
            this.props.showNews.map((news,key) => {
                return(
                    <div className="showNewsFeed" key={key}>
                        <div className="imageFirst">
                            <img className="news-image" src={news.urlToImage} alt="salve"></img>
                        </div>
                        <div className="news-info">
                            <h1 className="news-title">{news.title}</h1>
                            <p className="news-author">Written by: {news.author || "not Available"}</p>
                            <p className="news-pub">Published: {news.publishedAt}</p>
                            <p className="news-desc">{news.description}</p> 
                            <button className="news-more"><a href={news.url || image} target="_blank">Read More</a></button>
                        </div>   
                    </div>
                )
            })
        }
      </div>
    )
  }
}
