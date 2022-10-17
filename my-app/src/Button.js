import PropTypes from 'prop-types';

export function Button({text}){
    console.log(text)
    if(!text){
        console.error("texto")
    }
    return <button onClick={ function() {
        console.log("Helloo")
    }}>
       {text}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}