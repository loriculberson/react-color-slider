import './ColorSlider.css'

export default function ColorSlider({name, value, updateColor}){
    return(
        <div>
            <span style={{ color: name}}>{name}</span>
            <input
                className="slider"
                type="range"
                min="0"
                max="255"
                value={value}
                onChange={(event) => updateColor(name, event.target.value) }
            />
            <span>{value}</span>
        </div>
    )
}