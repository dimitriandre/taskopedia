export default function Students() {
    const fullName = "Kris Walley";
    const programmingExp = 2;
    return (
      <div className="container p-4">
        <div className="row">Students enrolled</div>
        <div className="row border">
          <div className="col-2">
            <img
              src={`https://ui-avatars.com/api/?name=${fullName}`}
              classname="w-100"
            ></img>
          </div>
          <div className="col-10">
            {fullName}
            <br />
            Programming Experience {programmingExp} years
          </div>
        </div>
      </div>
    );
  }
  