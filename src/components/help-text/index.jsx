// @packages
import React from 'react'
import Tooltip from 'react-bootstrap/Tooltip';

function HelpText({ text }) {
  return (
    <Tooltip id="button-tooltip" className='text-white'>
      { text }
    </Tooltip>
  );
};

export default HelpText;
