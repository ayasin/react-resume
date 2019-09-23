import React from "react";
import PropTypes from "prop-types";

function WorkItem(props) {
  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "5px",
        borderTop: "1px solid lightgray"
      }}
    >
      <div className="row">
        <div className="col-xs-12 col-md-8">
          <h4>{props.company}</h4>
          {props.role}
          <br />
        </div>
        <div className="col-xs-12 col-md-4 text-right">
          {props.dateRange}
          <br />
          <span className="small" style={{ color: "lightgray" }}>
            {props.skills.join(", ")}
          </span>
        </div>
      </div>
      {props.projects.map((project, idx) => (
        <div className="row" key={idx}>
          <div className="col-md-12">{project}</div>
        </div>
      ))}
    </div>
  );
}

WorkItem.propTypes = {
  company: PropTypes.string,
  dateRange: PropTypes.string,
  role: PropTypes.string,
  projects: PropTypes.arrayOf(PropTypes.string),
  skills: PropTypes.arrayOf(PropTypes.string)
};

function WorkInfo(props) {
  return (
    <div style={{ borderBottom: "1px solid lightgray" }}>
      {props.jobs.map(job => (
        <WorkItem {...job} key={`${job.company}+${job.dateRange}`} />
      ))}
    </div>
  );
}

WorkInfo.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string,
      dateRange: PropTypes.string,
      role: PropTypes.string,
      projects: PropTypes.arrayOf(PropTypes.string),
      skills: PropTypes.arrayOf(PropTypes.string)
    })
  )
};

export default WorkInfo;
