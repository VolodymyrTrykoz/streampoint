import {v1 as uuid} from "uuid";

export const initialState = [
  {
    id: uuid(),
    titleText: 'Custom title',
    titleColor: '#0E2748',
    titleTextSize: 36,
    textBodyColor: '#4F4F4F',
    inputBodyText: 'Custom body text',
    bodyTextSize: 16,
    panelBorderRadius: 16,
    panelColor: '#ffffff',
  },
]

export const reducer = (state = initialState, {type, payload}) => {
  switch(type){
    case 'copy': {
      const index = state.findIndex(el => el.id === payload.card.id);
      const newState = [...state];
      newState.splice(index + 1, 0, {
        id: uuid(),
        titleText: payload.inputTitle || payload.card.titleText,
        titleColor: payload.card.titleColor,
        titleTextSize: payload.card.titleTextSize,
        textBodyColor: payload.card.textBodyColor,
        inputBodyText: payload.inputBodyText || payload.card.inputBodyText,
        bodyTextSize: payload.card.bodyTextSize,
        panelColor: payload.card.panelColor,
        panelBorderRadius: payload.card.panelBorderRadius,
      });
      return newState;
    }
    case 'delete': return [...state].filter((el) => el.id !== payload.card.id)
    case 'titleColor': {
      const newState = [];
      state.map((el) => {
        if(el.id === payload.card.id){
          el.titleColor = payload.color.hex;
          newState.push(el);
        } else {
          newState.push(el);
        }
      })
      return newState;
    }
    case 'bodyColor': {
      const newState = [];
      state.map((el) => {
        if(el.id === payload.card.id){
          el.textBodyColor = payload.color.hex;
          newState.push(el);
        } else {
          newState.push(el);
        }
      })
      return newState;
    }
    case 'panelColor': {
      const newState = [];
      state.map((el) => {
        if(el.id === payload.card.id){
          el.panelColor = payload.color.hex;
          newState.push(el);
        } else {
          newState.push(el);
        }
      })
      return newState;
    }
    case 'titleTextSize': {
      const newState = [];
      state.map((el) => {
        if(el.id === payload.card.id){
          el.titleTextSize = payload.value;
          newState.push(el);
        } else {
          newState.push(el);
        }
      })
      return newState;
    }
    case 'bodyTextSize': {
      const newState = [];
      state.map((el) => {
        if(el.id === payload.card.id){
          el.bodyTextSize = payload.value;
          newState.push(el);
        } else {
          newState.push(el);
        }
      })
      return newState;
    }
    case 'panelBorderRadius': {
      const newState = [];
      state.map((el) => {
        if(el.id === payload.card.id){
          el.panelBorderRadius = payload.value;
          newState.push(el);
        } else {
          newState.push(el);
        }
      })
      return newState;
    }
  }
}
