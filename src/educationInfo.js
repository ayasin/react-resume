import React from 'react';
import PropTypes from 'prop-types';

function EducationInfo(props) {
  console.log(props)
  return (<>
    {props.schools.map((school) => (
      <div className="row" key={`${school.school}${school.degree}`}>
        <div className="col-xs-12 col-md-8">
          <h4>{school.school}</h4>
          {school.degree}<br />
        </div>
        <div className="col-xs-12 col-md-4 text-right">
            {school.dateRange}<br />
        </div>
      </div>
    ))}
  </>)
}

EducationInfo.propTypes = {
    schools: PropTypes.arrayOf(PropTypes.shape({
        school: PropTypes.string,
        dateRange: PropTypes.string,
        degree: PropTypes.string,
    }))
}

export default EducationInfo;
