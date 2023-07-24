const Activity = ({ content, timeFrame }) => {
  const { current, previous } = content.timeFrames[timeFrame];

  return (
    <div className={`activity ${content.title} `}>
      <ul>
        <li className="title">{content.title}</li>
        <li className="previous">
          {timeFrame === "daily" && "Yesterday - "}
          {timeFrame === "weekly" && "Last Week - "}
          {timeFrame === "monthly" && "Last Month - "}

          {previous}
          {previous > 1 ? "hrs" : "hr"}
        </li>

        <li className="current">
          {current}
          {current > 1 ? "hrs" : "hr"}
        </li>
        <li className="icon">
          <div>
            <img src="/images/icon-ellipsis.svg" alt="" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Activity;
