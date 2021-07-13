import * as React from 'react';

function CityInfo(props) {
  const {info} = props;
  const displayName = `${info.site_name}`;

  return (
    <div>
      <div style={{borderRadius: "5px", fontSize: "14px", padding: "3px", paddingTop: "8px"}}>
        {displayName}
      </div>
    </div>
  );
}

export default React.memo(CityInfo);