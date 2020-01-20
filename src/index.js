import React, { useEffect } from "react";
import { render } from "react-dom";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller
} from "react-scroll";

const Section = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });
    return Events.scrollEvent.remove("begin");
  }, []);

  useEffect(() => {
    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });
    return Events.scrollEvent.remove("end");
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const scrollTo = element => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart"
    });
  };

  return (
    <div>
      <div style={{ height: "1000px", background: "green" }}>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav">
                <li>
                  <Link
                    activeClass="active"
                    className="test1"
                    to="test1"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 1
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test2"
                    to="test2"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 2
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test3"
                    to="test3"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 3
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test4"
                    to="test4"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 4
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    className="test6"
                    to="anchor"
                    spy={true}
                    smooth={true}
                    duration={500}
                  >
                    Test 6 (anchor)
                  </Link>
                </li>
              </ul>
              <button onClick={() => scrollTo("test4")}>
                Scroll To test4!
              </button>
            </div>
          </div>
        </nav>

        <Element name="test1" className="element">
          test 1
        </Element>

        <Element name="test2" className="element">
          test 2
        </Element>

        <Element name="test3" className="element">
          test 3
        </Element>

        <Element name="test4" className="element">
          test 4
        </Element>

        <Element name="test5" className="element">
          test 5
        </Element>

        <div id="anchor" className="element">
          test 6 (anchor)
        </div>
      </div>
      <button onClick={() => scrollToTop()}>To the top!</button>
    </div>
  );
};

render(<Section />, document.getElementById("root"));
