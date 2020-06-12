import React from 'react';

const ChildGetObject = (props) => {
  const {
    data
  } = props;
  return(
    <div>
      {data.a} - {data.b} - {data.c}
    </div>
  );
}

export default ChildGetObject;
