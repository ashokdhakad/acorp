import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import CardCarouselItem from "../../footer_component/CardCarouselItem";

class EventCardCarousel extends Component {
  state = {};
  render() {
    return (
      <>
        {/* Desktop Carousel Cards  */}
        <div className="mb-5 d-none d-sm-block">
          <Carousel indicators={false}>
            <Carousel.Item>
              <div className="card-deck ">
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="weekly Code Challange"
                  link="/index_code_challange"
                />
                <CardCarouselItem
                  imgsource="event.jpeg"
                  title="Event and Conference"
                  link="/index_event"
                />
                <CardCarouselItem
                  imgsource="web_blog.jpeg"
                  title="Community Web Blogs"
                  link="/webdesign_blog"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="weekly Code Challange"
                  link="/index_code_challange"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="weekly Code Challange"
                  link="/index_code_challange"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="weekly Code Challange"
                  link="/index_code_challange"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="card-deck">
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="weekly Code Challange"
                  link="/index_code_challange"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="weekly Code Challange"
                  link="/index_code_challange"
                />
                <CardCarouselItem
                  imgsource="code_challange.jpeg"
                  title="weekly Code Challange"
                  link="/index_code_challange"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* Mobile Carousel Cards  */}
        <div className="mb-5 d-block d-md-none">
          <Carousel indicators={false}>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="code_challange.jpeg"
                title="weekly Code Challange"
                link="/index_code_challange"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="event.jpeg"
                title="Event and Conference"
                link="/index_event"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="web_blog.jpeg"
                title="Community Web Blogs"
                link="/webdesign_blog"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="technical_interview_questions.jpeg"
                title="Technical Interview Questions"
                link="/index_interview_questioins"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming.jpeg"
                title="Python Programming"
                link="/python"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="ds_mcqs.jpeg"
                title="DataStructure MCQs"
                link="/index_mcqs"
              />
            </Carousel.Item>
            <Carousel.Item>
              <CardCarouselItem
                imgsource="python_programming_question.jpeg"
                title="Python Programming Questions"
                link="/python_programming_questions"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </>
    );
  }
}

export default EventCardCarousel;
