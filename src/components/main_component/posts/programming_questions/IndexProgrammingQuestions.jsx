import React, { Component } from "react";
import { Link } from "react-router-dom";
import RightSideSection from "../../../right_section/RightSideSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faLaptopCode,
  faFileCode,
} from "@fortawesome/free-solid-svg-icons";
import PostCard from "../../PostCard";
import ProgrammingQuestionCardCarousel from "./ProgrammingQuestionCardCarousel";
import Technologies from "../../../right_section/Technologies";

class IndexProgrammingQuestions extends Component {
  state = {};
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-md-8 mt-4">
            <h1
              className="text-center mb-4 rounded p-2"
              style={{ backgroundColor: "#06CB6C", color: "#072C71" }}
            >
              <FontAwesomeIcon icon={faFileCode} color="#072C71" /> Programming
              Example Question
            </h1>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>

            <div className="card-deck m-2">
              <PostCard
                imgsource="c_programming_question.jpeg"
                title="C Programming Example Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/c_programming_questions"
              />
              <PostCard
                imgsource="python_programming_question.jpeg"
                title="Python Programming Example Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/python_programming_questions"
              />
              <PostCard
                imgsource="java_programming_question.jpeg"
                title="Java Programming Example Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/java_programming_questions"
              />
            </div>
            <div className="card-deck m-2">
              <PostCard
                imgsource="dsa_programming_questions.jpeg"
                title="DataStructure Example Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/datastructure_programming_questions"
              />
              <PostCard
                imgsource="js.jpeg"
                title="JavaScript Programming Example Questions"
                paragraph="We Love to Code and this is the best way to express our
                  love to Computer Science Wolrd."
                link="/javascript_programming_questions"
              />
            </div>
            <h5 className="text-secondary mt-2 mb-3">
              For More Programming Questions
            </h5>
            <ProgrammingQuestionCardCarousel />
          </div>

          <div className="col-md-3">
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default IndexProgrammingQuestions;
