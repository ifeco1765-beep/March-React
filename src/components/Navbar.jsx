function Navbar(props) {
    console.log(props)
    return (
    <h1 
    style={{
    backgroundColor: "#01020a12",
    color: "#fff",
    }}
    
    className={props.className}
    >
        {props.name}
        </h1>
    );
}

export default Navbar