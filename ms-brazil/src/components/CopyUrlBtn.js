import React from 'react'
import {Button} from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import swal from '@sweetalert/with-react';
import "./CopyUrlBtn.css"


const CopyUrlBtn = () => {

  const url = window.location.href;

    return (
      <div>
        <CopyToClipboard text={url}>
          <Button onClick={(e) => {swal("URL copied to Clipboard", "", "")}} style={{color: "white"}}>
            <ShareIcon />
          </Button>
        </CopyToClipboard>
      </div>
    );
}

export default CopyUrlBtn
