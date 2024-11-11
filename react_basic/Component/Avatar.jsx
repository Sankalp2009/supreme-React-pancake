/* eslint-disable react/prop-types */
export default function Avatar(props) {
    const {Name, src, rounded} = props;
    let Userstyle;
    // 1st way
    // if(rounded){
    //     Userstyle={
    //         borderRadius: '50px',
    //         width: '200px',
    //         height : 'auto',
    //     }
    // }
       Userstyle={
            borderRadius: rounded ?  '80px' : '20px',
            width: '200px',
            height : 'auto',
        }
    return (
        <>
        <img src={src} alt="alt" style={Userstyle} /> 
        <p>{Name}</p>
        </>
    )
};
