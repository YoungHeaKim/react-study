import { combineActions, createAction, handleActions } from 'redux-actions';

const prefix = 'ENVIRONMENT';

// action 생성자
const setUser = createAction(`${prefix}/SET_USER`, user => ({ user })); // user
const setGuestUser = createAction(`${prefix}/SET_GUESTUSER`, guestUser => ({ guestUser })); // guestUser
const setMenus = createAction(`${prefix}/SET_MENUS`, menus => ({ menus })); // guestUser
const setParams = createAction(`${prefix}/SET_PARAMS`, params => ({ params })); // params
const setDecorationTool = createAction(`${prefix}/SET_DECORATIONTOOL`, decorationTools => ({ decorationTools })); // Decoration Tool
const setExhibitionSchedule = createAction(`${prefix}/SET_EXHIBITIONSCHEDULE`, exhibitionSchedules => ({ exhibitionSchedules })); // Exhibition Schedule
const setRealisation = createAction(`${prefix}/SET_REALISATION`, realisations => ({ realisations })); // Realisation
const setInspiration = createAction(`${prefix}/SET_INSPIRATION`, inspirations => ({ inspirations })); // Inspiration
const setNews = createAction(`${prefix}/SET_NEWS`, newses => ({ newses })); // News
const setArtists = createAction(`${prefix}/SET_ARTISTS`, artists => ({ artists })); // Artists

export const actions = {
  setUser,
  setGuestUser,
  setParams,
  setMenus,
  setDecorationTool,
  setExhibitionSchedule,
  setRealisation,
  setInspiration,
  setNews,
  setArtists,
};

// 변하지 않는 값이 들어가는 곳
const immutables = {};

// 변할 수 있는 값이 들어가는 곳
const mutables = {
  user: null,
  guestUser: null,
  menus: [],
  params: {},
  decorationTools: [],
  exhibitionSchedules: [],
  realisations: [],
  inspirations: [],
  newses: [],
  artists: [],
};

// reducer에 틀을 작성
export default handleActions({
  // action을 묶어주는 부분
  [ combineActions(
    setUser,
    setGuestUser,
    setMenus,
    setParams,
    setDecorationTool,
    setExhibitionSchedule,
    setRealisation,
    setInspiration,
    setNews,
    setArtists,
  ) ]: (state, { payload }) => ({
    ...state,
    ...payload,
  }),
}, {
  ...immutables,
  ...mutables,
});