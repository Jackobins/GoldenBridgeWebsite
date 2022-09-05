import React from "react";
import "../styles.css";

export default function ContactPage() {
  return (
    <div className="contacts">
      <div className="contact">
        <h1>Yongen Wang</h1>
        <ul>
          <strong>Email:</strong> yongnwang@yahoo.com
        </ul>
        <ul>
          <strong>Phone:</strong> 604-728-8096
        </ul>
      </div>
      <div className="contact">
        <h1>Jack Wang</h1>
        <ul>
          <strong>Email:</strong> jackwstwang@gmail.com
        </ul>
        <ul>
          <strong>Phone:</strong> 236-518-9234
        </ul>
        <ul>
          <strong>Instagram:</strong> @jack.wan9
        </ul>
      </div>
    </div>
  );
}
