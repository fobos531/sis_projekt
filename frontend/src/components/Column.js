import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Column = ({ children, good, bad, width = 6 }) => {
  return (
    <Col lg={width} xl={width} md={width} className={`p-4 rounded ${good && "green"} ${bad && "red"}`}>
      <div className="text-center mb-3">
        <FontAwesomeIcon icon={good ? faCheck : faTimesCircle} size="3x" />
      </div>
      {children}
    </Col>
  );
};

export default Column;
