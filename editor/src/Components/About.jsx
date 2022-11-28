import React from 'react';
import { Link } from 'react-router-dom';

export default function About(props) {
function date(){
  var current = new Date();
  var d = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return d;
}
  return (
    <>
    <div className={`container my-3 text-${props.notMode}`}>
      <h2>{props.heading}</h2>
    </div>
   <div className='row justify-content-around'>
    <div className={`card bg-${props.mode} col-4 `}>
  <div className="card-img-top h-15 w-40 bg-primary" />
   <div className={`card-body text-${props.notMode}`}>
    <h5 className="card-title ">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/" className="btn btn-primary">Edit Note</Link>
    <div className='container'>
      <small className="text-muted">Updated at {date()}</small>
    </div>
  </div>
</div>
    
    

<div className={`card bg-${props.mode} col-4`} aria-hidden="true">
  <div className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title placeholder-glow">
      <span className={`placeholder  bg-${props.notMode} col-6`}></span>
    </h5>
    <p className="card-text placeholder-glow">
      <span className={`placeholder bg-${props.notMode} col-7`}></span>
      <span className={`placeholder bg-${props.notMode} col-4`}></span>
      <span className={`placeholder bg-${props.notMode} col-7`}></span>
      <span className={`placeholder bg-${props.notMode} col-6`}></span>
      <span className={`placeholder bg-${props.notMode} col-8`}></span>
    </p>
    <Link to="/" tabIndex="-1"className="btn btn-primary">Create note</Link>
  </div>
</div>

</div> 
    </>
  )
}
