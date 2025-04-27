import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas';

function DisplayDigibook({ show, handleClose, digibook }) {
  return (
    <div>
      {digibook && <Offcanvas
        show={show}
        onHide={handleClose}
        scroll={true}
        backdrop={false}
        placement={'end'}>
        <Offcanvas.Header closeButton>
          <div>
            {digibook.get("name")}
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {digibook.id}
        </Offcanvas.Body>
      </Offcanvas>
      }
    </div>
  )
}

export default DisplayDigibook