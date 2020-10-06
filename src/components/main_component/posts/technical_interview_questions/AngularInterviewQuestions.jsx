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

class AngularInterviewQuestions extends Component {
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
              Find the Best Angular Interview Questions
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
                    question={`1) What is AngularJS?

                `}
                    answer={`AngularJS is a javascript framework used for creating single web page applications.  It allows you to use HTML as your template language and enables you to extend HTML’s syntax to express your application’s components clearly

                `}
                  />
                  <QuestionCard
                    question={`2) Explain what are the key features of AngularJS ?

                `}
                    answer={`The key features of AngularJS are

                Scope
                Controller
                Model
                View
                Services
                Data Binding
                Directives
                Filters
                Testable`}
                  />
                  <QuestionCard
                    question={`3) Explain what is scope in AngularJS ?

                `}
                    answer={`Scope refers to the application model, it acts like glue between application controller and the view.  Scopes are arranged in hierarchical structure and impersonate the DOM ( Document Object Model) structure of the application.  It can watch expressions and propagate events.

                `}
                  />
                  <QuestionCard
                    question={`4) Explain what is services in AngularJS ?

                `}
                    answer={`In AngularJS services are the singleton objects or functions that are used for carrying out specific tasks.  It holds some business logic and these function can be called as controllers, directive, filters and so on.

                `}
                  />
                  <QuestionCard
                    question={`5) Explain what is Angular Expression? Explain what is key difference between angular expressions and JavaScript expressions?

                `}
                    answer={`Like JavaScript,  Angular expressions are code snippets that are usually placed in binding such as {{ expression }}

                The key difference between the JavaScript expressions and Angular expressions
                
                1. Context : In Angular, the expressions are evaluated against a scope object, while the Javascript expressions are evaluated against the global window
                2. Forgiving: In Angular expression evaluation is forgiving to null and undefined, while in Javascript undefined properties generates TypeError or ReferenceError
                3. No Control Flow Statements: Loops, conditionals or exceptions cannot be used in an angular expression
                4. Filters: To format data before displaying it you can use filters`}
                  />
                  <QuestionCard
                    question={`6) With options on page load how you can initialize a select box ?

                `}
                    answer={`You can initialize a select box with options on page load by using ng-init directive

                <div ng-controller = " apps/dashboard/account " ng-switch
                On = "! ! accounts" ng-init = " loadData ( ) ">`}
                  />
                  <QuestionCard
                    question={`7) Explain what are directives ? Mention some of the most commonly used directives in AngularJS application ? 

                `}
                    answer={`A directive is something that introduces new syntax, they are like markers on DOM element which attaches a special behavior to it. In any AngularJS application, directives are the most important components.


                Some of the commonly used directives are ng-model, ng-App, ng-bind, ng-repeat , ng-show etc.`}
                  />
                  <QuestionCard
                    question={`8) Mention what are the advantages of using AngularJS ?

                `}
                    answer={`AngularJS has several advantages in web development.

                AngularJS supports MVC pattern
                Can do two ways data binding using AngularJS
                It has per-defined form validations
                It supports both client server communication
                It supports animations`}
                  />
                  <QuestionCard
                    question={`9) Explain what Angular JS routes does ?

                `}
                    answer={`Angular js routes enable you to create different URLs for different content in your application.  Different URLs for different content enables user to bookmark URLs to specific content.  Each such bookmarkable URL in AngularJS is called a route

                A value in Angular JS is a simple object.  It can be a number, string or JavaScript object.  Values are typically used as configuration injected into factories, services or controllers. A value should be belong to an AngularJS module.
                
                Injecting a value into an AngularJS controller function is done by adding a parameter with the same name as the value`}
                  />
                  <QuestionCard
                    question={`10)  Explain what is data binding in AngularJS ?

                `}
                    answer={`Automatic synchronization of data between the model and view components is referred as data binding in AngularJS.  There are two ways for data binding

                1. Data mining in classical template systems
                2. Data binding in angular templates
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
                imgsource="angular_tech.jpeg"
                title="Top 50 Angular Interview Questions & Answers"
                source="(hackr.io/)"
                tag1="angular"
                tag2=" Interview Questions"
                link="https://hackr.io/blog/angular-interview-questions"
              />
              <RoadMapCard
                imgsource="angular_tech.jpeg"
                title="Top Angular Interview Questions You Must Prepare For 2020"
                source="(edureka)"
                tag1="angular"
                tag2=" Interview Questions"
                link="https://www.edureka.co/blog/interview-questions/top-angularjs-interview-questions-2016/"
              />
              <RoadMapCard
                imgsource="angular_tech.jpeg"
                title="40+ Top Angular 6 Interview Questions"
                source="(best interview question)"
                tag1="angular"
                tag2=" Interview Questions"
                link="https://www.bestinterviewquestion.com/angular-6-interview-questions"
              />
              <RoadMapCard
                imgsource="angular_tech.jpeg"
                title="26 Top Angular 8 Interview Questions And Answers"
                source="(fullstack.cafe)"
                tag1="angular"
                tag2=" Interview Questions"
                link="https://www.fullstack.cafe/blog/angular-8-interview-questions"
              />
              <RoadMapCard
                imgsource="angular_tech.jpeg"
                title="AngularJS Interview Questions"
                source="(tutorialspoint)"
                tag1="angular"
                tag2=" Interview Questions"
                link="https://www.tutorialspoint.com/angularjs/angularjs_interview_questions.htm"
              />
              <RoadMapCard
                imgsource="angular_tech.jpeg"
                title="Top 30 Interview Questions And Answers On Angular 5 "
                source="(greycampus)"
                tag1="angular"
                tag2=" Interview Questions"
                link="https://www.greycampus.com/blog/programming/top-30-interview-questions-and-answers-on-angular-5"
              />
              <LearningSideSection language="angular" />
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default AngularInterviewQuestions;
