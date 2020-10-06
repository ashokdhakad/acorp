import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBook,
  faChalkboardTeacher,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";
import RecommendPost from "../../right_section/RecommendPost";
import RoadMapCard from "./RoadMapCard";
import FbShare from "../FbShare";
import FbLikeShare from "../../FbLikeShare";
import Technologies from "../../right_section/Technologies";
import LearningSideSection from "../../right_section/learning_sidesection/LearningSideSection";
import TechnologiesCardCarousel from "./TechnologiesCardCarousel";

class HTML extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
       <div className="row">
          <div className="col-1"></div>
          <div className="col-md-7 mt-4">
            <h2
              className="text-center mb-4 display-5"
              style={{ color: "#072C71" }}
            >
              Find the Best HTML Programming Courses & Tutorials
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>
            <Link
              to="/index_technologies"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size="2x"
                color="#06CB6C"
              />
            </Link>
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="30 Days To Learn HTML + CSS Course"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              link="https://www.youtube.com/playlist?list=PLgGbWId6zgaWZkPFI4Sc9QXDmmOWa1v5F"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="HTML/CSS: Making webpages"
              source="(khanacademy.org)"
              tag1="Free"
              tag2="Video"
              link="https://www.khanacademy.org/computing/computer-programming/html-css
              "
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Introduction to HTML5"
              source="(coursera.org)"
              tag1="Free"
              tag2="Video"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=40328&murl=https://www.coursera.org/learn/html"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Learn HTML & CSS in 14 days"
              source="(ilovecoding.org)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://ilovecoding.org/courses/htmlcss2"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="HTML Beginner Tutorial"
              source="(htmldog.com)"
              tag1="Free"
              link="http://htmldog.com/guides/html/"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="HTML5 Tutorials Playlist"
              source="(youtube.com)"
              tag1="Free"
              tag2="Video"
              link="https://www.youtube.com/playlist?list=PL081AC329706B2953"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="HTML(5) Tutorial by W3Schools"
              source="(w3schools.com)"
              tag1="Free"
              link="https://www.w3schools.com/HTML/"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="HTML Tutorial"
              source="(tutorialandexample.com)"
              tag1="Free"
              tag2="Beginner"
              link="https://www.tutorialandexample.com/html-tutorial"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Comprehensive HTML 5 Tutorial"
              source="(bitdegree.org)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="http://bitdegree.org/course/html5-tutorial"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Interactive Coding for Beginners: What is CSS, HTML & Web Development"
              source="(bitdegree.org)"
              tag1="Free"
              tag2="Video"
              tag3="Beginner"
              link="https://www.bitdegree.org/course/coding-for-beginners-space-doggos"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Build Responsive Real World Websites with HTML5 and CSS3"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-XIPta3zI2cl1bb8TJD9.fQ"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Introduction to HTML"
              source="(codecademy.com)"
              tag1="Paid"
              tag2="Exercises/Practice-programs"
              link="https://click.linksynergy.com/deeplink?id=jU79Zysihs4&mid=44188&murl=https://www.codecademy.com/learn/learn-html"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Projects in HTML5"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Exercises/Practice-programs"
              link="https://www.udemy.com/course/projects-in-html5/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-EHTZqyCvMrlODrJdORdTMg"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Real World Coding in HTML & CSS"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/web-design-for-beginners-real-world-coding-in-html-css/?LSNPUBID=jU79Zysihs4&ranEAID=jU79Zysihs4&ranMID=39197&ranSiteID=jU79Zysihs4-IHkT7RhWAN2hyRwayiKSEg"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="HTML Fundamentals"
              source="(pluralsight.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.pluralsight.com/courses/html-fundamentals?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixobQgKSFq1Y0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="A Nicer Way To Learn About HTML & CSS"
              source="(htmlandcssbook.com)"
              tag1="Paid"
              tag2="Book"
              tag3="Beginner"
              link="http://www.htmlandcssbook.com/"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Learn HTML5"
              source="(pluralsight.com)"
              tag1="Paid"
              link="https://www.pluralsight.com/paths/html5?clickid=X6R3A1ylNxyOUDBwUx0Mo3QwUkixobXgKSFq1Y0&irgwc=1&mpid=1419154&utm_source=impactradius&utm_medium=digital_affiliate&utm_campaign=1419154&aid=7010a000001xAKZAA2"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="HTML QuickStart Guide"
              source="(clydebankmedia.com)"
              tag1="Paid"
              tag2="Book"
              tag3="Beginner"
              link="https://www.clydebankmedia.com/product/html-quickstart-guide"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Front-end Training in Practicum"
              source="(practicum.yandex.com)"
              tag1="Paid"
              tag2="Beginner"
              link="https://practicum.yandex.com/web"
            />
            <RoadMapCard
              imgsource="html_tutorial.jpeg"
              title="Web Development Essentials for Absolute Beginners"
              source="(udemy.com)"
              tag1="Paid"
              tag2="Video"
              tag3="Beginner"
              link="https://www.udemy.com/course/web-development-essentials-for-absolute-beginners/?ranMID=39197&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-G_HK7jmbJY4I2luGuXiGOg&LSNPUBID=jU79Zysihs4"
            />
            <h4 className="text-secondary mt-5">For More Technologies</h4>
            <TechnologiesCardCarousel />
          </div>
         
          <div className="col-md-4 mt-md-5 mt-3">
            <div className="row">
              <FbLikeShare />{" "}
            </div>
            <LearningSideSection language="html" />
            <Technologies />
            <RightSideSection />
            
          </div>
        </div>
      </>
    );
  }
}

export default HTML;
