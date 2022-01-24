import {Input} from "antd";

const ChangePropertySize = ({type, card, dispatch}) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    if(isNaN(value)) return null;
    dispatch({type: type, payload: {card, value} })
  }

  const title = type === 'panelBorderRadius' ? 'Corner Radius' : 'Size';

  return (
    <div>
      <div className="setting-title">{title}</div>
      <div className="setting-input">
        <Input
          value={Number(card[type])}
          onChange={handleInputChange}
          maxLength={2}
          suffix="px"
        />
      </div>
    </div>

  )
}

export default ChangePropertySize;
