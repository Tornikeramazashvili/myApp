import "./Modal.css";
import { useState } from "react";

const Modal = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        What does that mean?
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay">
            <div className="modal-content">
              <div className="modal-content-information">
                <h2 className="modal-content-information-title">
                  Hello, I am Yuval Noah Harari.
                </h2>
                <br />
                <p>
                  Let me spend some time explaining what does that mean.
                  Firstly, there are three things you definitely need to know in
                  order to survive in 21 century.
                </p>
              </div>
              <br />
              <div className="modal-content-information-lists">
                <li>You are now a hackable animal.</li>
                <li>You will no longer be dominated on the Earth.</li>
                <li>You can survive if you will reinvent yourself.</li>
              </div>
              <br />
              <div className="modal-content-information-question">
                <p>
                  Are you confused? click on close and then on
                  <span className="modal-content-information-question-about">
                    <a> About.</a>
                  </span>
                </p>
              </div>
              <button onClick={toggleModal} className="close-modal">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
