import React, {useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading'
import PropTypes from 'prop-types'


export default function News(props) {

  const [state, setstate]= useState({articles:[], page:1, totalResults:0, loading: false})

useEffect(()=>{
  const fetchdata = async ()=>{
    const url="https://serpapi.com/search?engine=google_news&api_key=a5b6910b181f77862c120e0fb3eaeb469c2b5f3b293046773707aea4c4c1f194"
    const data= await fetch(url)
    const parsedData= await data.json()
    setstate((prevState) => ({
      ...prevState,
      articles: parsedData.news_results,
      totalResults: parsedData.totalArticles
    }));
  }
  fetchdata();
},[])

const previous=async()=>{
  setstate((prevState) => ({
    ...prevState,
    loading:true
  }))
  scrollToTop();
  const url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=1c9f81aaef6c477ab75810963e14c5ca&page=${state.page-1}&pageSize=${props.pageSize}`
    const data= await fetch(url)
    const parsedData= await data.json()
    setstate((prevState) => ({
      ...prevState,
      articles: parsedData.articles,
      page: state.page-1,
      loading:false,
      totalResults: parsedData.totalResults
    })) 
}

const next=async()=>{
  setstate((prevState) => ({
    ...prevState,
    loading: true
  }))
  scrollToTop();
  const url=`https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=1c9f81aaef6c477ab75810963e14c5ca&page=${state.page-1}&pageSize=${props.pageSize}`
    const data= await fetch(url)
    const parsedData= await data.json()
    setstate((prevState) => ({
      ...prevState,
      articles: parsedData.articles,
      page: state.page+1,
      loading:false,
      totalResults: parsedData.totalResults
    }))  
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};







  return (
    <>
    
    <div className="container">
      <h1 className='text-center' style={{'marginTop':'5rem', 'marginottom':'1rem'}}>Hot News Now!</h1>
    <div className='row'>
      
      {state.loading?<Loading/>: (state.articles.map((element) => {return <div id="news" className="d-flex justify-content-center my-4 col-md-4 col-sm-6 col-6" key={element.title}>
        <Newsitem title={element.title} description={element.description} imageURL={element.image? element.image: element.urlToImage} newsURL={element.url}/>
      </div>
      
      }
      ))}
      {state.loading? <div></div> :
      <div className="container d-flex justify-content-between">
    <button disabled={state.page<=1} type="button" onClick={previous} className="btn btn-dark btn-sm">Previous</button>
    <p>{state.page}/{Math.ceil(state.totalResults/props.pageSize)}</p>
    <button disabled={state.page >= Math.ceil(state.totalResults/props.pageSize)} type="button" onClick={next} className="btn btn-dark btn-sm">Next &rarr;</button>

    </div>}
            
    </div>

    </div>
    
    </>
  )
}
News.defaultProps={
  country:'us',
  pageSize:6,
  category:'general',
}
News.protoTypes={
  country: PropTypes.string,
  category: PropTypes.string,

}
