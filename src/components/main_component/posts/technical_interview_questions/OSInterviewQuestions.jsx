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


class OSInterviewQuestions extends Component {
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
              Find the Best OS Interview Questions
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
                question={`1) What is an operating system?
`}
                answer={`The operating system is a software program that facilitates computer hardware to communicate and operate with the computer software. It is the most important part of a computer system without it computer is just like a box.

`}
              />
              <QuestionCard
                question={`2) What is the main purpose of an operating system?
`}
                answer={`There are two main purposes of an operating system:

It is designed to make sure that a computer system performs well by managing its computational activities.
It provides an environment for the development and execution of programs.`}
              />
              <QuestionCard
                question={`3) What are the different operating systems?
`}
                answer={`
Batched operating systems
Distributed operating systems
Timesharing operating systems
Multi-programmed operating systems
Real-time operating systems`}
              />
              <QuestionCard
                question={`4) What is a socket?
`}
                answer={`A socket is used to make connection between two applications. Endpoints of the connection are called socket.

`}
              />
              <QuestionCard
                question={`5) What is a real-time system?
`}
                answer={`Real-time system is used in the case when rigid-time requirements have been placed on the operation of a processor. It contains a well defined and fixed time constraints.

`}
              />
              <QuestionCard
                question={`6) What is kernel?
`}
                answer={`Kernel is the core and most important part of a computer operating system which provides basic services for all parts of the OS.

`}
              />
              <QuestionCard
                question={`7) What is monolithic kernel?
`}
                answer={`A monolithic kernel is a kernel which includes all operating system code is in single executable image.

`}
              />
              <QuestionCard
                question={`8) What do you mean by a process?
`}
                answer={`An executing program is known as process. There are two types of processes:

Operating System Processes
User Processes`}
              />
              <QuestionCard
                question={`9) What are the different states of a process?
`}
                answer={`A list of different states of process:

New Process
Running Process
Waiting Process
Ready Process
Terminated Process`}
              />
              <QuestionCard
                question={`10) What is the difference between micro kernel and macro kernel?
`}
                answer={`Micro kernel: micro kernel is the kernel which runs minimal performance affecting services for operating system. In micro kernel operating system all other operations are performed by processor.

Macro Kernel: Macro Kernel is a combination of micro and monolithic kernel.

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
                imgsource="os_tech.jpeg"
                title="Commonly Asked Operating Systems Interview Questions "
                source="(OS)"
                tag1="interview-questions"
                link="https://www.geeksforgeeks.org/commonly-asked-operating-systems-interview-questions-set-1/"
              />
             <RoadMapCard
                imgsource="os_tech.jpeg"
                title="90 Operating System Interview Questions and Answers "
                source="(careerride)"
                tag1="interview-questions"
                link="https://www.careerride.com/Operating-System-Interview-Questions.aspx"
              />
              <RoadMapCard
                imgsource="os_tech.jpeg"
                title="Top 10 OS Interview Questions and Answers {Updated for 2020}"
                source="(os)"
                tag1="interview-questions"
                link="https://www.educba.com/os-interview-questions/"
              />
              <RoadMapCard
                imgsource="os_tech.jpeg"
                title="Operating Systems - Interview Questions and Answers "
                source="(indiabix)"
                tag1="interview-questions"
                link="https://www.indiabix.com/technical/operating-systems/"
              />
              <RoadMapCard
                imgsource="os_tech.jpeg"
                title="Top 40 Operating System Interview Questions & Answers"
                source="(techgeekbuzz)"
                tag1="interview-questions"
                link="http://www.techgeekbuzz.com/os-interview-questions/"
              />
              <RoadMapCard
                imgsource="os_tech.jpeg"
                title="OS Exams Questions with Answers "
                source="(tutorials point)"
                tag1="interview-questions"
                link="https://www.tutorialspoint.com/operating_system/os_exams_questions_answers.htm"
              />
              
              <LearningSideSection language="os" />
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default OSInterviewQuestions;
