import React from 'react'


export default function Newsitem(props) {
  return (
    <>
     <div className="card" style={{"width": "18rem", "backgroundColor": "#ebebeb"}}>
  <img src={props.imageURL ?props.imageURL:"https://picsum.photos/200/300?random=2"} className="card-img-top" alt="..." style={{"width": "","height":"35%"}}/>
  <div className="card-body">
    <h5 className="card-title">{props.title ? props.title.slice(0,50) :""}...</h5>
    <p className="card-text">{props.description? props.description.slice(0,85):""}...</p>
    <a href={props.newsURL} target="_blank" className="btn btn-sm btn-outline-danger">Read more</a>
  </div>
</div> 
    </>
  )
}
