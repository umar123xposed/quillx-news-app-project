import React from 'react'


export default function Newsitem(props) {
  return (
    <>
     <div className="card" style={{"width": "18rem", "backgroundColor": "#ebebeb"}}>
  <img src={props.imageURL ?props.imageURL:"https://picsum.photos/200/300?random=2"} className="card-img-top" alt="..." style={{"height":"33%"}}/>
  <div className="card-body" style={{"height":"67%"}}>
    <h5 className="card-title">{props.title ? props.title.slice(0,45) :""}...</h5>
    <p className="card-text spc">{props.description? props.description.slice(0,75):""}...</p>
    <p className="card-text"><small className="text-body-secondary">{props.date.slice(0,11)} by {props.author.split(" ").slice(0,2)}</small></p>
    <a href={props.newsURL} target="_blank" className="btn btn-sm btn-outline-danger">Read more</a>
  </div>
</div> 
    </>
  )
}
