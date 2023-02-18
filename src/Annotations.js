import React, { useState } from "react";
import Annotation from "react-image-annotation";
import {
  PointSelector,
  
  RectangleSelector,
  OvalSelector
} from "react-image-annotation/lib/selectors";

const Annotations = (props) => {
  const [annotations, setAnnotations] = useState([]);
  const [annotation, setAnnotation] = useState({});
  const [tool, setTool] = useState(RectangleSelector);

  const onSubmit = (annotation) => {
    const { geometry, data } = annotation;
    setAnnotation({});
    setAnnotations((annotations) =>
      annotations.concat({
        geometry,
        data: {
          ...data,
          id: Math.random(),
        },
      })
    );
  };

  const getToolbarItem = (selector) => {
    return (
      <button
        className={tool === selector ? "selected-tool" : ""}
        onClick={() => setTool(selector)}
      >
        {selector.TYPE}
      </button>
    );
  };

  return (
    <>
      <div className="toolbar">
        {getToolbarItem(RectangleSelector)}
        {getToolbarItem(PointSelector)}
        {getToolbarItem(OvalSelector)}
      </div>
      <hr />
      <Annotation
        src={props.img}
        alt="main_img"
        annotations={annotations}
        type={tool.TYPE}
        value={annotation}
        onChange={(value) => setAnnotation(value)}
        onSubmit={onSubmit}
        allowTouch
      />
    </>
  );
};

export default Annotations;