export default function Students(props) {
  return (
    <div className="col-4 p-4">
      <div className="row border">
        <div className="col-2">
          <img
            src={props.headshot}
            className="w-100 py-2"
          ></img>
        </div>
        <div className="col-8">
          {props.name}
          <br />
          Coding Experience {props.experience} years
        </div>
        <div className="col-2">
          {props.children} {/* this will render the StudentReview component */}
        </div>
      </div>
    </div>
  );
}