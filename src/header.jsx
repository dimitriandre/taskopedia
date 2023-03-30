import logo from "./images/react.svg"

function MainHeader() {
    return (
        <div className="pt-3 py-1 pl-2" style={{ backgroundColor: "black"}}>
            <img src={logo} style={{height: "35px", verticalAlign: "top"}}></img>
            <span className="h2 pt-4 text-white-50">React Course - TaskoPedia</span>
        </div>
    );
}

const subHeaderStyle = {
    color: "blueviolet",
    backGroundColor: "lightgray",
};

function SubHeader() {
    return <p style={subHeaderStyle}>This will be an exciting course.</p>;
}

export default function Header() {
    return (
        <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
        </div>
    );
}
