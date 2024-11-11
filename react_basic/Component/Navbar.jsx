
const Navbar = ()=>{
    const style = {
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',height:'50px',
        backgroundColor:'blue',
        fontSize:'24px',
        color:'white'
    }
return (
        <div style={style}>
            <div>Home</div>
            <div>Contact</div>
            <div>Login</div>
            <div>signup</div>
        </div>
    )
}

export default Navbar;