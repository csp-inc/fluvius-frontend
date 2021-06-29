import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import InfoIcon from "@material-ui/icons/Info";
import Image from "material-ui-image";


export default function ModalInfo(props) {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button
        style={{
          backgroundColor: "transparent",
          color: "white",
          border: "white",
          paddingLeft: 2,
        }}
        onClick={toggle}
      >
        <InfoIcon />
      </Button>

      <Modal size={"lg"} centered={true} isOpen={modal} toggle={toggle}>
        <ModalHeader style={{ backgroundColor: "#CED8D7" }} toggle={toggle}>
          {props.ModalTitle}
        </ModalHeader>
        <ModalBody>{props.ModalBody}</ModalBody>
        <Image src={props.modalImage} style={{padding: "125px"}} disableTransition />
        <ModalFooter style={{ backgroundColor: "#CED8D7" }}>
          <br></br>
          {/* <Button color="secondary" onClick={toggle}>
            Close
          </Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
}
