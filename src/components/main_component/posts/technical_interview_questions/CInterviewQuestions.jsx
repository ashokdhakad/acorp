import React, { Component } from "react";
import QuestionCard from "./QuestionCard";
import RightSideSection from "../../../right_section/RightSideSection";
import RecommendPost from "../../../right_section/RecommendPost";
import { Link } from "react-router-dom";
import RoadMapCard from "../../technologies/RoadMapCard";
import InterviewQuestionCardCarousel from "./InterviewQuestionCardCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FbLikeShare from "../../../FbLikeShare";
import { faHome, faChalkboardTeacher } from "@fortawesome/free-solid-svg-icons";
import LearningSideSection from "../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../right_section/Technologies";

class CInterviewQuestions extends Component {
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
              Find the Best C Interview Questions
            </h2>
            <Link
              to="/home"
              className="badge mr-1"
              style={{ backgroundColor: "#06CB6C" }}
            >
              <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
            </Link>
            <Link
              to="/index_interview_questioins"
              className="badge mr-1"
              style={{ backgroundColor: "#072C71" }}
            >
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size="2x"
                color="#06CB6C"
              />
            </Link>
              <div className="row mb-5">
                <div className="col">
              <QuestionCard
                question={`Q #1) What are the key features in the C programming language?

             `}
                answer={`Features are as follows:

             Portability: It is a platform-independent language.
             Modularity: Possibility to break down large programs into small modules.
             Flexibility: The possibility of a programmer to control the language.
             Speed: C comes with support for system programming and hence it compiles and executes with high speed when compared with other high-level languages.
             Extensibility: Possibility to add new features by the programmer.`}
              />
              <QuestionCard
                question={`Q #2) What are the basic data types associated with C?

             `}
                answer={`Int – Represent the number (integer)
             Float – Number with a fraction part.
             Double – Double-precision floating-point value
             Char – Single character
             Void – Special purpose type without any value.`}
              />
              <QuestionCard
                question={`Q #3) What is the description for syntax errors?

             `}
                answer={`Answer: The mistakes/errors that occur while creating a program are called syntax errors. Misspelled commands or incorrect case commands, an incorrect number of parameters in calling method /function, data type mismatches can be identified as common examples for syntax errors.

             `}
              />
              <QuestionCard
                question={`Q #4) What is the process to create increment and decrement statement in C?

             `}
                answer={`There are two possible methods to perform this task.

             Use increment (++) and decrement (-) operator.
             Example When x=4, x++ returns 5 and x- returns 3.
             
             Use conventional + or – sign.
             Example When x=4, use x+1 to get 5 and x-1 to get 3.`}
              />
              <QuestionCard
                question={`Q #5) What are reserved words with a programming language?

             `}
                answer={`The words that are a part of the standard C language library are called reserved words. Those reserved words have special meaning and it is not possible to use them for any activity other than its intended functionality.

             Example: void, return int.
             
             `}
              />
              <QuestionCard
                question={`Q #6) What is the explanation for the dangling pointer in C?

             `}
                answer={`When there is a pointer pointing to a memory address of any variable, but after some time the variable was deleted from the memory location while keeping the pointer pointing to that location is known as a dangling pointer in C.

             `}
              />
              <QuestionCard
                question={`Q #7) Describe static function with its usage?

             `}
                answer={`Answer: A function, which has a function definition prefixed with a static keyword is defined as a static function. The static function should be called within the same source code.

             `}
              />
              <QuestionCard
                question={`Q #8) What is the difference between abs() and fabs() functions?

             `}
                answer={`Answer: Both functions are to retrieve absolute value. abs() is for integer values and fabs() is for floating type numbers. Prototype for abs() is under the library file < stdlib.h > and fabs() is under < math.h >.

             `}
              />
              <QuestionCard
                question={`Q #9) Describe Wild Pointers in C?

             `}
                answer={`Answer: Uninitialized pointers in the C code are known as Wild Pointers. They point to some arbitrary memory location and can cause bad program behavior or program crash.

             `}
              />
              <QuestionCard
                question={`Q #10) What is the difference between ++a and a++?

             `}
                answer={`Answer: ‘++a”  is called prefixed increment and the increment will happen first on a variable. ‘a++' is called postfix increment and the increment happens after the value of a variable used for the operations.

             `}
              />
            </div>
            </div>
              
              <div className="row">
                <div className="col">
                  <h4 className="text-primary">For More Technologies</h4>
                  <InterviewQuestionCardCarousel />
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-5">
            <FbLikeShare />{" "}
            <h4 className="mb-3 mt-4" style={{ color: "#072C71" }}>
              Other Learning Resources
            </h4>
             <RoadMapCard
                imgsource="c_tech.jpeg"
                title="Commonly Asked C Programming Interview Questions"
                source="(geeksforgeeks)"
                tag1=" C "
                tag2="Questions"
                link="https://www.geeksforgeeks.org/commonly-asked-c-programming-interview-questions-set-1/"
              />
              <RoadMapCard
                imgsource="c_tech.jpeg"
                title="C Programming Interview Questions "
                source="(javatpoint)"
                tag1="C"
                tag2="Questions"
                link="https://www.javatpoint.com/c-interview-questions"
              />
              <RoadMapCard
                imgsource="c_tech.jpeg"
                title="C Programming Interview Questions"
                source="(tutorialspoint)"
                tag1="Interview"
                tag2="Questions"
                link="https://www.tutorialspoint.com/cprogramming/cprogramming_interview_questions.htm"
              />
              <RoadMapCard
                imgsource="c_tech.jpeg"
                title="Commonly Asked Technical Interview Questions on C"
                source="(faceprep)"
                tag1=" technical "
                tag2="interview"
                link="https://www.faceprep.in/c-plus-plus/technical-interview-questions-on-cpp-programming/"
              />
              <RoadMapCard
                imgsource="c_tech.jpeg"
                title="Top 100 C Programming Interview Questions & Answers"
                source="(guru99)"
                tag1="C"
                tag2="Interview "
                link="https://www.guru99.com/c-programming-interview-questions.html"
              />
              <RoadMapCard
                imgsource="c_tech.jpeg"
                title="40+ Best C Interview Questions & Answers in 2020 "
                source="(hackr.io)"
                tag1="interview"
                tag2="C"
                link="https://hackr.io/blog/c-interview-questions"
              />

<LearningSideSection language="c" />
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default CInterviewQuestions;
