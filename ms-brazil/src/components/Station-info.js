import * as React from 'react';

function StationInfo(props) {
  const name = props.name;
  const river = props.river;

  return (
    <div>
      <div style={{borderRadius: "5px", fontSize: "14px", padding: "3px", paddingTop: "8px"}}>
        {name}<br></br>
        {river}
      </div>
    </div>
  );
}

export default React.memo(StationInfo);
