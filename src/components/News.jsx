import React, {useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Loading from './Loading'
import PropTypes from 'prop-types'
import axios from 'axios'
import InfiniteScroll from "react-infinite-scroll-component";



export default function News(props) {

  const [state, setstate]= useState({articles:[], page:1, pageSize:0, totalResults:0, loading: false})


  useEffect(() => {
        const url = `https://api.newscatcherapi.com/v2/latest_headlines?topic=${props.category}&lang=en&countries=${props.country}&page_size=${props.pageSize}&page=${state.page}`;
        axios.get(url, {
          headers: {
            'x-api-key': 'FUsvlMFUroZVjDpB-bDL6sgH7MBuVkza2r65LNrfW3o',
          },
        }).then( response=>{
          const parsedData = response.data;
          console.log(parsedData);
          setstate((prevState) => ({
            ...prevState,
            page: parsedData.page,
            totalPages: parsedData.total_pages,
            articles: parsedData.articles,
            totalResults: parsedData.total_hits,
            loading: false
          }));

        })
        .catch(error=>{
          console.error('Error fetching data:', error);
        });
  

      
     
    
  },[props.category] [state.page]);

  const previous = async () => {
      setstate((prevState) => ({
        ...prevState,
        loading: true,
        
      }));
    
  
        const url = `https://api.newscatcherapi.com/v2/latest_headlines?topic=${props.category}&lang=en&countries=${props.country}&page_size=${props.pageSize}&page=${state.page-1}`;
        axios.get(url, {
          headers: {
            'x-api-key': 'FUsvlMFUroZVjDpB-bDL6sgH7MBuVkza2r65LNrfW3o',
          },
        }).then( response=>{
          const parsedData = response.data;
          console.log(parsedData);
          setstate((prevState) => ({
            ...prevState,
            page: parsedData.page,
            totalPages: parsedData.total_pages,
            articles: parsedData.articles,
            totalResults: parsedData.total_hits,
            loading: false
          }));

        })
        .catch(error=>{
          console.error('Error fetching data:', error);
        });
   
  };
  
  const next = async () => {

    setTimeout(()=>{
      setstate((prevState) => ({
        ...prevState,
        loading: true,
      }));
        const url = `https://api.newscatcherapi.com/v2/latest_headlines?topic=${props.category}&lang=en&countries=${props.country}&page_size=${props.pageSize}&page=${state.page+1}`;
        axios.get(url, {
          headers: {
            'x-api-key': 'FUsvlMFUroZVjDpB-bDL6sgH7MBuVkza2r65LNrfW3o',
          },
        }).then( response=>{
          const parsedData = response.data;
          console.log(parsedData);
          setstate((prevState) => ({
            ...prevState,
            page: parsedData.page,
            totalPages: parsedData.total_pages,
            articles: parsedData.articles,
            totalResults: parsedData.total_hits,
            loading: false
          }));

        })
        .catch(error=>{
          console.error('Error fetching data:', error);
        });
    },1500)
    
      
   
  };




  return (
    <>
    
    <div className="container">
      <h1 className='text-center' style={{'marginTop':'5rem', 'marginBottom':'1rem'}}>{(props.category.toUpperCase()=="NEWS")?"HOT":(props.category.toUpperCase())} NEWS NOW!</h1>

      <InfiniteScroll
          dataLength={state.articles.length}
          next={next}
          hasMore={true}
          loader={<Loading/>}
        >
          <div className="row">
          {(state.articles.map((element) => {return <div id="news" className="d-flex justify-content-center my-4 col-md-4 col-sm-6 col-6" key={element.title}>
        <Newsitem title={element.title} author={element.authors} date={element.published_date} description={element.excerpt} imageURL={element.media} newsURL={element.link}/>
      </div>
      
      }
      ))}
      </div>
        </InfiniteScroll>
        
      
      {state.loading? <div></div> :
      <div className="container d-flex justify-content-center" style={{'padding':'0'}}>
  
    <p>{state.page}/{state.totalPages}</p>

    </div>}
            
 </div>
    </>
  )
    }

News.defaultProps={
  country:'us',
  pageSize:6,
  category:'sport',
}
News.propTypes={
  country: PropTypes.string,
  category: PropTypes.string,

}

