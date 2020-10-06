import React, { Component } from "react";
import Quize from "../quize";
import ScoreCard from "../scoreCard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCode,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import RightSideSection from "../../../../right_section/RightSideSection";
import MCQCardCarousel from "../MCQCardCarousel";
import LearningSideSection from "../../../../right_section/learning_sidesection/LearningSideSection";
import Technologies from "../../../../right_section/Technologies";

class JavaMCQ1 extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  counter = (count) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="col-fluid mt-2 ml-2">
                <h2
                  className="text-center mb-4 display-5"
                  style={{ color: "#072C71" }}
                >
                  Java Multiple choice Questions Set-1
                </h2>
                <Link
                  to="/home"
                  className="badge mr-1"
                  style={{ backgroundColor: "#06CB6C" }}
                >
                  <FontAwesomeIcon icon={faHome} size="2x" color="#072C71" />
                </Link>
                <Link
                  to="/index_mcqs"
                  className="badge mr-1"
                  style={{ backgroundColor: "#072C71" }}
                >
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    size="2x"
                    color="#06CB6C"
                  />
                </Link>
                <Link
                  to="/index_java_mcqs"
                  className="badge mr-1 text-white"
                  style={{ backgroundColor: "#072C71" }}
                >
                  <FontAwesomeIcon
                    icon={faCode}
                    size="1x"
                    color="#06CB6C"
                    className="mr-2"
                  />
                  back to Index
                </Link>
              </div>
              <div className="row">
                <div className="col">
                  <Quize
                    quizeNo="1"
                    question="What is the range of short data type in Java? "
                    correctAnswer="-32768 to 32767"
                    v1="-128 to 127"
                    v2="-32768 to 32767"
                    v3="-2147483648 to 2147483647"
                    v4="  None of the mentioned"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="2"
                    question="Which of the following are legal lines of Java code?"
                    language="java"
                    code={`1. int w = (int)888.8;
2. byte x = (byte)100L;
3. long y = (byte)100;
4. byte z = (byte)100L;`}
                    correctAnswer="All statements are correct"
                    v1="1 and 2"
                    v2=" 2 and 3"
                    v3="3 and 4"
                    v4="All statements are correct "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="3"
                    question=". What will be the output of the following Java program?"
                    language="java"
                    code={`class array_output {
  public static void main(String args[]) 
  {    
      char array_variable [] = new char[10];
for (int i = 0; i < 10; ++i) {
          array_variable[i] = 'i';
          System.out.print(array_variable[i] + '' );
          i++;
      }
  } 
}`}
                    correctAnswer="i i i i i"
                    v1="i i i i i"
                    v2="0 1 2 3 4"
                    v3=" i j k l m"
                    v4="None of the mentioned "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="4"
                    question="  What will be the output of the following Java program?"
                    language="java"
                    code={`class mainclass {
  public static void main(String args[]) 
  {
      char a = 'A';
      a++;
System.out.print((int)a);
  } 
}`}
                    correctAnswer="66"
                    v1="66"
                    v2="67"
                    v3="65"
                    v4="64 "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="5"
                    question=" Which of these is an incorrect array declaration?"
                    correctAnswer="int arr[] = int [5] new"
                    v1="int arr[] = new int[5]"
                    v2="int [] arr = new int[5]"
                    v3="int arr[] = new int[5]"
                    v4="int arr[] = int [5] new "
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="6"
                    question=" What will be the output of the following Java code?"
                    language="java"
                    code={`int arr[] = new int [5];
System.out.print(arr);`}
                    correctAnswer="Class name@ hashcode in hexadecimal form"
                    v1="0"
                    v2="value stored in arr[0]"
                    v3="00000"
                    v4=" Class name@ hashcode in hexadecimal form"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="7"
                    question="What is the type of variable ‘b’ and ‘d’ in the following Java snippet?"
                    language="java"
                    code={`int a[], b;
int []c, d;`}
                    correctAnswer="‘b’ is int variable; ‘d’ is int array"
                    v1="‘b’ and ‘d’ are int"
                    v2="‘b’ and ‘d’ are arrays of type int"
                    v3="‘b’ is int variable; ‘d’ is int array"
                    v4=" ‘d’ is int variable; ‘b’ is int array"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="8"
                    question="What is it called if an object has its own lifecycle and there is no owner? "
                    correctAnswer="Association"
                    v1="Aggregation"
                    v2="Composition"
                    v3="Encapsulation"
                    v4=" Association"
                    counter={this.counter}
                  />{" "}
                  <Quize
                    quizeNo="9"
                    question="Which of these is correct way of inheriting class A by class B? "
                    correctAnswer="class B extends A {}"
                    v1="class B + class A {}"
                    v2="class B inherits class A {}"
                    v3="class B extends A {}"
                    v4=" class B extends class A {}"
                    counter={this.counter}
                  />
                  <Quize
                    quizeNo="10"
                    question="Which of these is an incorrect statement? "
                    correctAnswer="StringBuffer class is used to store string in a buffer for later use"
                    v1=" String objects are immutable, they cannot be changed"
                    v2="String object can point to some other reference of String variable"
                    v3="StringBuffer class is used to store string in a buffer for later use"
                    v4=" None of the mentioned"
                    counter={this.counter}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <h4>For More MCQs Questions</h4>
                  <MCQCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-md-5 mt-3">
              <LearningSideSection language="java" />
              <RightSideSection />
              <Technologies />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default JavaMCQ1;
