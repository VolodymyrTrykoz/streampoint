import {BlockPicker} from "react-color";
import {useState} from "react";

const TextColorPicker = ({dispatch, card, type}) => {
  const [isColorPickerOpen, setColorPickerOpen] = useState(false);


  const boxColor = type === 'titleColor' ? card.titleColor :
    type === 'bodyColor' ? card.textBodyColor : card.panelColor

  const handleColorChange = (color) => {
    dispatch({type: type, payload: {card, color}})
  }

  return(
    <div className="setting-color-pick">
      <div className="setting-title">Color</div>
      <button
        className="title-color"
        onClick={() => setColorPickerOpen(!isColorPickerOpen)}
        style={{ backgroundColor: boxColor }}
      />
      {
        isColorPickerOpen && (
          <BlockPicker
            color={ boxColor }
            onChangeComplete={ (color) => handleColorChange(color) }
          />
        )
      }
    </div>
  )
}


export default TextColorPicker;
