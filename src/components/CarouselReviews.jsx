import { Carousel } from 'react-bootstrap';
import '../styles/carouselReviews.css';

function CarouselReviews() {
  return (
    <>
      <div className="text-center mb-5">
        <h5 className="text-primary text-uppercase mb-3">Testimonial</h5>
        <h1>What Say Our Students</h1>
      </div>

      <Carousel id="owl" className="owl">
        <Carousel.Item>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="owl-carousel testimonial-carousel">
                <div className="text-center">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <div className="fa-f4">
                    <h4 className="font-weight-normal mb-4">
                      Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
                      Rebum elitr dolore et eos labore, stet justo sed est sed.
                      Diam sed sed dolor stet amet eirmod eos labore diam
                    </h4>
                  </div>

                  <img
                    className="img-fluid mx-auto mb-3"
                    src="img/testimonial-1.jpg"
                    alt=""
                  />
                  <h5 className="m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="owl-carousel testimonial-carousel">
                <div className="text-center">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <div className="fa-f4">
                    <h4 className="font-weight-normal mb-4">
                      Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
                      Rebum elitr dolore et eos labore, stet justo sed est sed.
                      Diam sed sed dolor stet amet eirmod eos labore diam
                    </h4>
                  </div>

                  <img
                    className="img-fluid mx-auto mb-3"
                    src="img/testimonial-2.jpg"
                    alt=""
                  />
                  <h5 className="m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="owl-carousel testimonial-carousel">
                <div className="text-center">
                  <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                  <div className="fa-f4">
                    <h4 className="font-weight-normal mb-4">
                      Dolor eirmod diam stet kasd sed. Aliqu rebum est eos.
                      Rebum elitr dolore et eos labore, stet justo sed est sed.
                      Diam sed sed dolor stet amet eirmod eos labore diam
                    </h4>
                  </div>

                  <img
                    className="img-fluid mx-auto mb-3"
                    src="img/testimonial-3.jpg"
                    alt=""
                  />
                  <h5 className="m-0">Client Name</h5>
                  <span>Profession</span>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselReviews;
