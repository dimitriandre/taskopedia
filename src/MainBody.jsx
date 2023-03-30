import Student from "./Components/Students/Student";
import StudentReview from "./Components/Students/StudentReview";

function MainBody() {
    const whatWeWillLearn = "React JS";
    const lectureCount = 3;
    return (
      <div style={{height: "100%"}}>
        <p>
          In this course, we will learn {whatWeWillLearn} by building TaskOPedia!
        </p>
        <p>Total Lecture - {lectureCount}</p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and Class Components</li>
        </ul>
        {/*<div>
          Enter Task :{" "}
          <input maxLength={5} readOnly={false} placeholder="Ben"></input>
        </div>*/}
        <div className="container p-1">Students Enrolled</div>
        <Student
            experience={2}
            name="Emmanuel Macron"
            headshot="https://api.lorem.space/image/face?w=150&h=150"
        >
          <StudentReview />
        </Student>
        <Student
            experience={5}
            name="Angel Patrice"
            headshot="https://api.lorem.space/image/face?w=150&h=155"
        >
          <StudentReview />
        </Student>
        <Student
            experience={7}
            name="Angel Patrice"
            headshot="https://api.lorem.space/image/face?w=150&h=156"
        />
        <Student
            experience={8}
            name="Kia Cool"
            headshot="https://api.lorem.space/image/face?w=150&h=159"
        />

      </div>
    );
  }

export default MainBody;