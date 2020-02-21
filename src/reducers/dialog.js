import { combineActions, createAction, handleActions } from 'redux-actions';

const prefix = 'DIALOG';

// action 생성자
const showDialog = createAction(`${prefix}/SHOW_DIALOG`, (message, attention, buttons = [{ label: 'Save' }]) => ({
  type: 'default',
  message,
  attention,
  buttons,
}));
const showCustomDialog = createAction(`${prefix}/SHOW_DIALOG`, Component => ({
  type: 'custom',
  Component,
}));
const dismissDialog = createAction(`${prefix}/DISMISS_DIALOG`, key => ({ key }));

export const actions = {
  showDialog,
  showCustomDialog,
  dismissDialog,
};

const immutables = {};

const mutables = {
  dialogs: [],
};

export default handleActions({
  [combineActions(
    showDialog,
    showCustomDialog,
  )]: (state, { payload }) => {
    const dialogs = [...state.dialogs];
    const dialog = {
      ...payload,
      key: Math.random() * Math.MAX_VALUE | 0,
    };

    dialogs.push(dialog);

    return {
      ...state,
      dialogs,
    };
  },

  [dismissDialog]: (state, { payload }) => {
    const dialogs = [...state.dialogs];
    const { key } = payload;
    const index = dialogs.findIndex(dialog => dialog.key === key);
    if (~index) dialogs.splice(index, 1);
    return {
      ...state,
      dialogs,
    };
  },
}, {
  ...immutables,
  ...mutables,
});