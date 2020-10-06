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

class JavaInterviewQuestions extends Component {
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
              Find the Best Java Interview Questions
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
                question={`Q1. What are wrapper classes in Java?
             `}
                answer={`Wrapper classes convert the Java primitives into the reference types (objects). Every primitive data type has a class dedicated to it. These are known as wrapper classes because they “wrap” the primitive data type into an object of that class. Refer to the below image which displays different primitive type, wrapper class and constructor argument.
             `}
              />
              <QuestionCard
                question={`Q2. What are constructors in Java?
             `}
                answer={`In Java, constructor refers to a block of code which is used to initialize an object. It must have the same name as that of the class. Also, it has no return type and it is automatically called when an object is created.
             `}
              />
              <QuestionCard
                question={`Q3. What is singleton class in Java and how can we make a class singleton?
             `}
                answer={`Singleton class is a class whose only one instance can be created at any given time, in one JVM. A class can be made singleton by making its constructor private.
             `}
              />
              <QuestionCard
                question={`Q4. What is the difference between equals() and == in Java?
             `}
                answer={`Equals() method is defined in Object class in Java and used for checking equality of two objects defined by business logic.“==” or equality operator in Java is a binary operator provided by Java programming language and used to compare primitives and objects. public boolean equals(Object o) is the method provided by the Object class. The default implementation uses == operator to compare two objects. For example: method can be overridden like String class. equals() method is used to compare the values of two objects.
             `}
              />
              <QuestionCard
                question={`Q5. What is a package in Java? List down various advantages of packages.
             `}
                answer={`Packages in Java, are the collection of related classes and interfaces which are bundled together. By using packages, developers can easily modularize the code and optimize its reuse. Also, the code within the packages can be imported by other classes and reused. Below I have listed down a few of its advantages:
             Packages help in avoiding name clashes
             They provide easier access control on the code
             Packages can also contain hidden classes which are not visible to the outer classes and only used within the package
             Creates a proper hierarchical structure which makes it easier to locate the related classes
             `}
              />
              <QuestionCard
                question={`Q6. Why pointers are not used in Java?
             `}
                answer={`Java doesn’t use pointers because they are unsafe and increases the complexity of the program. Since, Java is known for its simplicity of code, adding the concept of pointers will be contradicting. Moreover, since JVM is responsible for implicit memory allocation, thus in order to avoid direct access to memory by the user,  pointers are discouraged in Java.
`}
              />
              <QuestionCard
                question={`Q7. What is JIT compiler in Java?
             `}
                answer={`JIT stands for Just-In-Time compiler in Java. It is a program that helps in converting the Java bytecode into instructions that are sent directly to the processor. By default, the JIT compiler is enabled in Java and is activated whenever a Java method is invoked. The JIT compiler then compiles the bytecode of the invoked method into native machine code, compiling it “just in time” to execute. Once the method has been compiled, the JVM summons the compiled code of that method directly rather than interpreting it. This is why it is often responsible for the performance optimization of Java applications at the run time.
             `}
              />
              <QuestionCard
                question={`Q8. What are access modifiers in Java?
             `}
                answer={`In Java, access modifiers are special keywords which are used to restrict the access of a class, constructor, data member and method in another class. Java supports four types of access modifiers:
             Default
             Private
             Protected
             Public
                          `}
              />
              <QuestionCard
                question={`Q9. Define a Java Class.
             `}
                answer={`A class in Java is a blueprint which includes all your data.  A class contains fields (variables) and methods to describe the behavior of an object. Let’s have a look at the syntax of a class.
            
             class Abc {
             member variables // class body
             methods}
             `}
              />
              <QuestionCard
                question={`Q10. What is an object in Java and how is it created?
             `}
                answer={`An object is a real-world entity that has a state and behavior. An object has three characteristics:
             State
             Behavior
             Identity
             An object is created using the ‘new’ keyword. For example:
             ClassName obj = new ClassName();
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
                imgsource="java_tech.jpeg"
                title="Real Java Questions & Answers | 300+ Java Interview Questions‎"
                source="(educative.io)"
                tag1="Java"
                tag2="interview questions"
                link="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi7jpuwxffoAhWElI8KHfEOAXEYABAAGgJzYg&ohost=www.google.com&cid=CAESQOD2ELI1OeVeM2uhRVX4UGBpEzxWiKb36G3q6Iem23yECQXioimoXjuffyTC3t4x3CmYYILHq9GwfX-XvQBpLmE&sig=AOD64_1_refcl7p06Z3vOQe6qkDdn3t-FA&q=&ved=2ahUKEwjQzJSwxffoAhV4zjgGHcS6CPcQ0Qx6BAgQEAE&adurl="
              />
              <RoadMapCard
                imgsource="java_tech.jpeg"
                title="300 Core Java Interview Questions "
                source="(javatpoint)"
                tag1="Java "
                tag2="interview question"
                link="https://www.javatpoint.com/corejava-interview-questions"
              />
              <RoadMapCard
                imgsource="java_tech.jpeg"
                title="Java Interview Questions"
                source="( Tutorialspoint)"
                tag1="Questions"
                tag2="Java"
                link="https://www.tutorialspoint.com/java/java_interview_questions.htm"
              />
              <RoadMapCard
                imgsource="java_tech.jpeg"
                title="100+ Best Core Java Interview Questions & Answers in 2020"
                source="(hackr.io)"
                tag1=" java"
                tag2="interview"
                link="https://hackr.io/blog/java-interview-questions"
              />
              <RoadMapCard
                imgsource="java_tech.jpeg"
                title="Top 50+ Core Java Interview Questions and Answers"
                source="(software testing help)"
                tag1="core Java "
                tag2="Questions"
                link="https://www.softwaretestinghelp.com/core-java-interview-questions/"
              />
              <RoadMapCard
                imgsource="java_tech.jpeg"
                title="Java Interview Questions "
                source="(how to do in java)"
                tag1="Preparation"
                tag2=" Interview"
                link="https://howtodoinjava.com/java-interview-questions/"
              />

          

<LearningSideSection language="java" />
            <RightSideSection />
            <Technologies />
          </div>
        </div>
      </>
    );
  }
}

export default JavaInterviewQuestions;
