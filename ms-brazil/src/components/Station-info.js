import * as React from 'react';

function StationInfo(props) {
  const {info} = props;

  return (
    <div>
      <div style={{borderRadius: "5px", fontSize: "14px", padding: "3px", paddingTop: "8px"}}>
        {info}
      </div>
    </div>
  );
}

export default React.memo(StationInfo);