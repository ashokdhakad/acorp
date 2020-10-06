import React, { Component } from "react";
import HeaderBannerSection from "../../../../HeaderBannerSection";
import QuizeTest from "../quizeTest";
import ScoreCard from "../../scoreCard";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import FooterComponentUpper from "../../../../../footer_component/FooterComponentUpper";
import MCQTestCardCarousel from "../MCQTestCardCarousel";
import RecommendPost from "../../../../../right_section/RecommendPost";
import RightSideSection from "../../../../../right_section/RightSideSection";
class CQuizeTest2 extends Component {
  state = {
    isCorrect: false,
    isClicked: false,
    count: 0,
    status: "",
    show: false,
  };
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  counter = (count) => {
    this.setState({ count: this.state.count + 1 });
  };

  showQuizeScore = () => {
    this.setState({ show: true });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  render() {
    return (
      <>
        <HeaderBannerSection imgsource="headerdark.jpeg" />

        <div class="container-fluid">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-7 ">
              <div className="row">
                <div className="col text-center mt-3 mb-3">
                  <h2>C Quiz Test Intermediate</h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Link to="/home" className="badge badge-primary mr-1">
                    Home >>
                  </Link>
                  <Link
                    to="/index_quize_tests"
                    className="badge badge-warning mr-1"
                  >
                    Quize Test >>
                  </Link>
                  <Link
                    to="/c_quize_tests"
                    className="badge badge-success mr-1"
                  >
                    C Quiz >>
                  </Link>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <QuizeTest
                    quizeNo="1"
                    language="c"
                    question="What will happen if the below program is executed?"
                    code={`#include <stdio.h>
int main()
{
    int main = 3;
    printf("%d", main);
    return 0;
}
                `}
                    correctAnswer="It will run without any error and prints 3"
                    v1="It will cause a compile-time error"
                    v2="It will cause a run-time error"
                    v3="It will run without any error and prints 3"
                    v4="It will experience infinite looping"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="2"
                    language="c"
                    question="What is the output of this C code?"
                    code={`#include  <stdio.h>
int main()
{
    char chr;
    chr = 128;
    printf("%d\n", chr);
    return 0;
}
                `}
                    correctAnswer="-128"
                    v1="128"
                    v2="-128 "
                    v3="Depends on the compiler"
                    v4="None of the mentioned"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="3"
                    language="c"
                    question="What is the output of this C code?"
                    code={`#include <stdio.h>
int main()
{
      char *p[1] = {"hello"};
      printf("%s", (p)[0]);
      return 0;
}
                `}
                    correctAnswer="hello"
                    v1="Compile time error"
                    v2="Undefined behaviour"
                    v3="hello"
                    v4="None of the mentioned"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="4"
                    language="c"
                    question="What is the output of this C code?"
                    code={`#include <stdio.h>
int main()
{
    int a = 10;
    if (a == a--)
        printf("TRUE 1/t");
    a = 10;
    if (a == --a)
        printf("TRUE 2/t");
}
                `}
                    correctAnswer="TRUE 1 TRUE 2"
                    v1="TRUE 1"
                    v2="TRUE 2"
                    v3="TRUE 1 TRUE 2"
                    v4=" No output"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="5"
                    language="c"
                    question="What is the output of this C code?"
                    code={`#include <stdio.h>
void main()
{
    int x = 97;
    int y = sizeof(x++);
    printf("x is %d", x);
}
                `}
                    correctAnswer="x is 97"
                    v1="x is 97"
                    v2="x is 98"
                    v3=" x is 99"
                    v4="Run time error"
                    counter={this.counter}
                  />
                  <QuizeTest
                    quizeNo="6"
                    language="c"
                    question="What is the output of this C code?"
                    code={`#include <stdio.h>
struct student
{
    char a[5];
};
void main()
{
     struct student s[] = {"hi", "hey"};
     printf("%c", s[0].a[1]);
}
                `}
                    correctAnswer="i"
                    v1="h"
                    v2="i"
                    v3="e"
                    v4="y"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="7"
                    language="c"
                    question="What is the output of this C code?"
                    code={`#include <stdio.h>
int main()
{
    char *str = "hello, world";
    char *str1 = "hello, world";
    if (strcmp(str, str1))
        printf("equal");
    else
        printf("unequal");
}
                `}
                    correctAnswer="Compilation error"
                    v1="equal"
                    v2="unequal"
                    v3="Compilation error"
                    v4="Depends on the compiler"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="8"
                    language="c"
                    question=" What is the output of the below c code?"
                    code={`int main()
{
    static int i;
    int j;
    for(j=0;j<=5;j+=2)
    switch(j)
    {
        case 1: i++;break;
        case 2: i+=2;
        case 4: i%=2;j=-1;continue;
        default: --i; continue;
    }
    printf ("%d", i);
    return 0;
}
                `}
                    correctAnswer="Run time error
                "
                    v1="Different address is printed"
                    v2="Same address is printed"
                    v3="Run time error"
                    v4="Nothing"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="9"
                    language="c"
                    question="What is the output of this C code?"
                    code={`int main(){
    int a=10;
    switch(0)
    printf("%d",a);
    switch(1)
    printf("%d",a);
    return 0;
}
              `}
                    correctAnswer="No output"
                    v1="10 10"
                    v2="10"
                    v3="Compilation Error"
                    v4="No output"
                    counter={this.counter}
                  />

                  <QuizeTest
                    quizeNo="10"
                    language="c"
                    question="Output?"
                    code={`int main()
{
    int arri[] = {1, 2 ,3};
    int *ptri = arri;
    char arrc[] = {1, 2 ,3};
    char *ptrc = arrc;
    printf("sizeof arri[] = %d ", sizeof(arri));
    printf("sizeof ptri = %d ", sizeof(ptri));
    printf("sizeof arrc[] = %d ", sizeof(arrc));
    printf("sizeof ptrc = %d ", sizeof(ptrc));
    return 0;
}`}
                    correctAnswer="sizeof arri[] = 12 sizeof ptri = 8 sizeof arrc[] = 3 sizeof ptrc = 8"
                    v1="sizeof arri[] = 12 sizeof ptri = 8 sizeof arrc[] = 12 sizeof ptrc = 8"
                    v2="sizeof arri[] = 12 sizeof ptri = 8 sizeof arrc[] = 3 sizeof ptrc = 8"
                    v3="sizeof arri[] = 12 sizeof ptri = 4 sizeof arrc[] = 3 sizeof ptrc = 8"
                    v4="sizeof arri[] = 12 sizeof ptri = 4 sizeof arrc[] = 3 sizeof ptrc = 8"
                    counter={this.counter}
                  />
                </div>
              </div>

              <div className="text-center mb-3">
                <Button variant="primary" onClick={this.handleShow}>
                  Show Score
                </Button>
              </div>
              <div className="row">
                <div className="col">
                  <h5> For More Quiz Test</h5>
                  <MCQTestCardCarousel />
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-md-4">
              <h4>Recommendation</h4>
              <RecommendPost
                imgsource="python_mcqs.jpeg"
                RecPostHading="Python MCQs Questions"
                link="/index_python_mcqs"
              />
              <RecommendPost
                imgsource="java_mcqs.jpeg"
                RecPostHading="Java MCQs Questions"
                link="/index_java_mcqs"
              />
              <RecommendPost
                imgsource="c_mcq.jpeg"
                RecPostHading="C MCQs Questions"
                link="/index_c_mcqs"
              />
              <RightSideSection />
            </div>
          </div>
        </div>
        <ScoreCard
          handleShow={this.handleShow}
          handleClose={this.handleClose}
          show={this.state.show}
          count={this.state.count}
        />
        <div className="container-fluid mt-5">
          <FooterComponentUpper />
        </div>
      </>
    );
  }
}

export default CQuizeTest2;
