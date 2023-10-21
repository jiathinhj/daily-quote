import React, { useEffect, useRef, useState } from "react";
import { Toast } from "react-bootstrap";

const ErrorToast = () => {
  const [show, setShow] = useState(true);
  const useClickOutside = (ref) => {
    useEffect(() => {
      //  close toast if clicked on outside of element
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setShow(false);
        }
      };
      // bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // unbind the event listener to clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = useRef(null);
  useClickOutside(wrapperRef);
  return (
    <Toast
      // onClose={() => setShow(false)}
      show={show}
      // autohide
      // delay={5000}
      // ref={wrapperRef}
      className="toast-error"
    >
      <Toast.Body>Something went wrong! Please try again!</Toast.Body>
    </Toast>
  );
};

export default ErrorToast;
