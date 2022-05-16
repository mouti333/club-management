import React, { Component } from 'react';
import Header from '../../components/header/Header';

class Homestd extends Component {
    render() {
        return (
            <div>
              <Header/>
                <center>
      <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12"style={{backgroundColor:'#68b0ab'}}>
  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12" style={{paddingTop:'10rem'}}>
  <h1>Our Club</h1>
    <div className="card">
      <h5 className="card-header"></h5>
      <div className="card-body">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
            <li data-target="#carouselExampleIndicators" data-slide-to={1} />
            <li data-target="#carouselExampleIndicators" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">    
              <img className="d-block w-100" src="../assets/images/card-img-1.jpg" alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="../assets/images/card-img-2.jpg" alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src="../assets/images/card-img-3.jpg" alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span></a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span></a>
        </div>
      </div>
    </div>
  </div>
  </div>
  </center>
</div>

        );
    }
}

export default Homestd;