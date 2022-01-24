import { useState, useEffect } from 'react';
import { Card, Button, Modal, Tabs, Input, Tooltip } from 'antd';
import {
  EditOutlined,
  CopyOutlined,
  DeleteOutlined,
  SettingOutlined,
  FormatPainterOutlined
} from '@ant-design/icons';
import TextColorPicker from './TextColorPicker';
import ChangePropertySize from './ChangePropertySize';

const { TextArea } = Input;

const CustomCard = ({card, dispatch, disableDelete}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [textColor, setTextColor] = useState('#0E2748');
  const [textBodyColor, setTextBodyColor] = useState('#0E2748');
  const [inputTitle, setInputTitle] = useState('');
  const [inputBodyText, setInputBodyText] = useState('');
  const { TabPane } = Tabs;

  useEffect(() => {
    setTextColor(card.titleColor);
  }, [card.titleColor]);

  useEffect(() => {
    setTextBodyColor(card.textBodyColor);
  }, [card.textBodyColor]);

  const tooltipBg = 'rgba(3,3,3,0.3)';

  const handleCloneCard = () => {
    dispatch({
      type:'copy',
      payload: {card, inputTitle, inputBodyText}});
  }

  return (
    <>
      <Card
        style={{
        borderRadius: `${card.panelBorderRadius}px`,
        backgroundColor: card.panelColor
      }}
        title={inputTitle || card.titleText}
        headStyle={{
          color: textColor,
          fontSize: Number(card.titleTextSize)
        }}
        className={isModalOpen ? "app__card modal-open" : "app__card" }
        extra={
          <>
            <Tooltip title="Edit" color={tooltipBg}>
              <Button
                type="text"
                icon={<EditOutlined/>}
                onClick={() => {setIsModalOpen(true)}}
                style={{ backgroundColor: card.panelColor }}
              />
            </Tooltip>
            <Tooltip title="Copy" color={tooltipBg}>
              <Button
                type="text"
                icon={<CopyOutlined/>}
                onClick={handleCloneCard}
                style={{ backgroundColor: card.panelColor }}
              />
            </Tooltip>
            <Tooltip title={ disableDelete ? 'You cannot delete the last card' : 'Delete' } color={tooltipBg}>
              <Button
                disabled={disableDelete}
                type="text"
                icon={<DeleteOutlined/>}
                onClick={() => dispatch({type:'delete', payload: {card}})}
                style={{ backgroundColor: card.panelColor }}
              />
            </Tooltip>
          </>
        }
      >
        <div style={{ color: textBodyColor, fontSize: `${card.bodyTextSize}px` }}>
          {inputBodyText || card.inputBodyText}
        </div>
      </Card>
      <Modal
        className="card-modal"
        title="Basic Modal"
        visible={isModalOpen}
        onOk={() => setIsModalOpen(true)}
        onCancel={() => setIsModalOpen(false)}
        style={{
          position: "fixed",
        }}
      >
        <Tabs defaultActiveKey="1">
          <TabPane tab={<SettingOutlined />} key="1">
            <div className="card-modal__text-content">
              <form action="" name="card-modal__text-content-form">
                <label htmlFor="title text" className="card-modal__form-title">
                  Title Text
                  <Input
                    placeholder="Enter custom title"
                    value={inputTitle}
                    onChange={(e) => setInputTitle(e.target.value)}
                  />
                </label>
                <label htmlFor="body text" className="card-modal__form-body">
                  Body text
                  <TextArea
                    rows={4}
                    value={inputBodyText}
                    placeholder="Enter custom text"
                    onChange={(e) => setInputBodyText(e.target.value)}
                  />
                </label>
              </form>
            </div>
          </TabPane>
          <TabPane tab={<FormatPainterOutlined />} key="2" className="tab-pane">
            <div className="tab-pane__item">
              <div className="tab-pane__title">Title</div>
              <div className="tab-pane__settings">
                <ChangePropertySize
                  dispatch={dispatch}
                  card={card}
                  type='titleTextSize'
                />
                <TextColorPicker
                  dispatch={dispatch}
                  card={card}
                  type='titleColor'
                />
              </div>
            </div>
            <div className="tab-pane__item">
              <div className="tab-pane__title">Body</div>
              <div className="tab-pane__settings">
                <ChangePropertySize
                  dispatch={dispatch}
                  card={card}
                  type='bodyTextSize'
                />
                <TextColorPicker
                  dispatch={dispatch}
                  card={card}
                  type='bodyColor'
                />
              </div>
            </div>
            <div className="tab-pane__item">
              <div className="tab-pane__title">Panel</div>
              <div className="tab-pane__settings">
                <ChangePropertySize
                  dispatch={dispatch}
                  card={card}
                  type='panelBorderRadius'
                />
                <TextColorPicker
                  dispatch={dispatch}
                  card={card}
                  type='panelColor'
                />
              </div>
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    </>
  )
}
export default CustomCard;
