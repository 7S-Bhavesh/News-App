import React  from 'react'

const NewsItem =(props)=>{

  
    let {title, description, imageURL, newsurl, author, date,source} = props
    return (
      <div className='my-3'>
        <div className="card">
          <div style={{ display: 'flex',justifyContent:' flex-end',position: 'absolute',right: '0'}}>

        <span className="badge rounded-pill bg-danger">
              {source} 
            </span>
          </div>
          <img src={!imageURL?"https://www.eatingwell.com/thmb/MlNeHr-64LLBCp6r_QCtk50pbdw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EWL-blueberry-cobbler-energy-balls-hero-172-38c1c2a7caa44811bc211b2a99a0459b.jpg":imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsurl} target='_blank' className="btn bn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem
