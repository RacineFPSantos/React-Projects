import React from 'react';

import moment from 'moment';
import 'moment/locale/pt-br';

const index = () => (
  <div className="date-container">
    <div className="date-dmy">
      <div className="date-day">{moment().format('DD')}</div>
      <div className="date-month-year">
        <div className="date-month">{moment().format('MMMM')}</div>
        <div className="date-year">{moment().format('YYYY')}</div>
      </div>
    </div>
    <div className="date-day-name">{moment().format('dddd')}</div>
  </div>
);

export default index;
