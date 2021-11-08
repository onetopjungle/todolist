import React from 'react';
import moment from 'moment';



const Header = ({checkOn, checkOff} : any) => {
    const date = new Date();
    
    return (
        <div className="date_update">
          <div className="date">
          <h1>{moment().format('LL')}</h1>
          </div>
          <div className="update">
          <p>{checkOn.length} incomplete, {checkOff.length} complete</p>
          </div>
          <hr />
        </div>
    )
}

export default Header
