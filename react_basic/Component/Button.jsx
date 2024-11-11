/* eslint-disable react/prop-types */

export default function Button(props) {

    console.table(props);
    const {text,handleClick} = props;

    return(
        <div style={{ margin : '0 auto', textAlign: 'center'}}>
        <h4>
            <button onClick={handleClick}>{text}</button>
        </h4>
        </div>
    )
};
