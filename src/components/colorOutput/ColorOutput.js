import './ColorOutput.css'

export default function ColorOutput({red, green, blue}){

    const colorSum = Number(red) + Number(green) + Number(blue);
    const textColor = (colorSum > 128 * 3) ? 'black' : 'white';
    return(
        <div 
            style={{ background: `rgb(${red}, ${green}, ${blue})` }}
            className="output"
        >
            <h1 style={{ color: `${textColor}`}}>
                RGB: {red} {green} {blue}
            </h1>
        </div>
    )
}
