const Activity = ({ content }) => {
  return (
    <div className={`activity ${content.title} `}>
      <div>
        <h1>{content.title}</h1>
        <p>current : {content.timeFrames.daily.previous}</p>
        <p>current : {content.timeFrames.daily.current}</p>
        <div>
          <img src="../../public/images/icon-ellipsis.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Activity;
