import logo from "../images/react.svg"

function MainHeader() {
    return (
        <div className="pt-3 py-1 pl-2" style={{ backgroundColor: "black"}}>
            <img src={logo} style={{height: "35px", verticalAlign: "top"}}></img>
            <span className="h2 pt-4 text-white-50">React Course - TaskoPedia</span>
        </div>
    );
}

const subHeaderStyle = {
    color: "black",
    fontWeight: "bold", 
    backgroundColor: "lightgray",
    padding: 4

};

function SubHeader() {
    return <p style={subHeaderStyle} className="text-center">This will be an exciting course.</p>;
}

const Header = () => {
    return (
        <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
        </div>
    );
}

export default Header;