import React, { useEffect, useRef } from "react";
import './Pending.css'
import { Link } from "react-router-dom";

function Pending() {
  const svgRef = useRef(null);

  function PathLoader(el) {
    this.el = el;
    this.strokeLength = el.getTotalLength();

    // set dash offset to 0
    this.el.style.strokeDasharray = this.el.style.strokeDashoffset = this.strokeLength;
  }

  PathLoader.prototype._draw = function (val) {
    this.el.style.strokeDashoffset = this.strokeLength * (1 - val);
  };

  PathLoader.prototype.setProgress = function (val, cb) {
    this._draw(val);
    if (cb && typeof cb === "function") cb();
  };

  PathLoader.prototype.setProgressFn = function (fn) {
    if (typeof fn === "function") fn(this);
  };

  useEffect(() => {
    const svg = new PathLoader(svgRef.current);

    const timerId = setTimeout(() => {
      document.body.classList.add("active");
      svg.setProgress(1);
    }, 200);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <div className="success-message">
    <svg viewBox="0 0 76 76" className="success-message__icon icon-checkmark">
      <circle cx="38" cy="38" r="36" />
      <path
        fill="none"
        stroke="#FFFFFF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="M17.7,40.9l10.9,10.9l28.7-28.7"
        ref={svgRef}
      />
    </svg>
    <h1 className="success-message__title">Your Team is confirmed!</h1>
    <div className="success-message__content">
      <p>We will send you an email with your login credintials if you are eligible </p>
      <div className="verification-pending-box">
        Verification : Pending
      </div>
     

      
    </div>
    <p style={{marginTop:'30px'}}>
    <Link to='/' className="button">Back Home</Link>

    </p>
     
   
  </div>
  
  );
}

export default Pending;
