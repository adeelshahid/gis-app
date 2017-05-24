import * as types from '../constants/actionTypes';

export const selectBasemap = (id) => ({
    type: types.BASEMAP_SELECTED,
    id,
});

export const toggleBasemapExpand = () => ({
    type: types.BASEMAP_TOGGLE_EXPAND,
});

export const toggleBasemapVisibility = () => ({
    type: types.BASEMAP_TOGGLE_VISIBILITY,
});

export const changeBasemapOpacity = (opacity) => ({
    type: types.BASEMAP_CHANGE_OPACITY,
    opacity,
});