export default function Students(props) {
    return (
      <div className="container p-4">
        <div className="row">Students enrolled</div>
        <div className="row border">
          <div className="col-2">
            <img
              src={`https://ui-avatars.com/api/?name=${props.name}`}
              classname="w-100"
            ></img>
          </div>
          <div className="col-10">
            {props.name}
            <br />
            Programming Experience {props.experience} years
          </div>
        </div>
      </div>
    );
  }
  