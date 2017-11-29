import * as types from '../constants/actionTypes';
import { getOptionSet } from './optionSets';

export const addFilter = (filter) => ({
    type: types.LAYER_EDIT_FILTER_ADD,
    filter,
});

export const removeFilter = (index) => ({
    type: types.LAYER_EDIT_FILTER_REMOVE,
    index,
});

export const changeFilter = (index, filter) => ({
    type: types.LAYER_EDIT_FILTER_CHANGE,
    index,
    filter,
});

// Set program used (event and thematic)
export const setProgram = (program) => ({
    type: types.LAYER_EDIT_PROGRAM_SET,
    program,
});

// Set program stage used (event)
export const setProgramStage = (programStage) => ({
    type: types.LAYER_EDIT_PROGRAM_STAGE_SET,
    programStage,
});

// Set program indicator used (thematic)
export const setProgramIndicator = (programIndicator) => ({
    type: types.LAYER_EDIT_PROGRAM_INDICATOR_SET,
    programIndicator,
});

// Set program indicator used (thematic)
export const setDataElementGroup = (dataElementGroup) => ({
    type: types.LAYER_EDIT_DATA_ELEMENT_GROUP_SET,
    dataElementGroup,
});

// Set program indicator used (thematic)
export const setDataElement = (dataElement) => ({
    type: types.LAYER_EDIT_DATA_ELEMENT_SET,
    dataElement,
});

// Set data element used for styling (event)
export const setStyleDataItem = (dataItem) => ({
    type: types.LAYER_EDIT_STYLE_DATA_ITEM_SET,
    dataItem,
});

// Set options for style data element with option set (options are loaded separately) (event layer)
export const setStyleOptions = (options) => ({
    type: types.LAYER_EDIT_STYLE_DATA_ITEM_OPTIONS_SET,
    options,
});

// Set classification style (method, classes, colorScale)
export const setClassification = (method) => ({
    type: types.LAYER_EDIT_CLASSIFICATION_SET,
    method,
});

export const setColorScale = (colorScale) => ({
    type: types.LAYER_EDIT_COLOR_SCALE_SET,
    colorScale,
});

// Set coordinate field
export const setEventCoordinateField = (fieldId) => ({
    type: types.LAYER_EDIT_EVENT_COORDINATE_FIELD_SET,
    fieldId,
});

// Set if event clustering should be used (event)
export const setEventClustering = (checked) => ({
    type: types.LAYER_EDIT_EVENT_CLUSTERING_SET,
    checked,
});

// Set event point radius (event layer)
export const setEventPointRadius = (radius) => ({
    type: types.LAYER_EDIT_EVENT_POINT_RADIUS_SET,
    radius,
});

// Set event point color (event layer)
export const setEventPointColor = (color) => ({
    type: types.LAYER_EDIT_EVENT_POINT_COLOR_SET,
    color,
});

export const toggleOrganisationUnit = (orgUnit) => ({
    type: types.LAYER_EDIT_ORGANISATIOM_UNIT_TOGGLE,
    orgUnit,
});

export const toggleUserOrganisationUnit = (orgUnit) => ({
    type: types.LAYER_EDIT_USER_ORGANISATIOM_UNIT_TOGGLE,
    orgUnit,
});

// Set organisation unit group set (facility layer)
export const setOrganisationUnitGroupSet = (organisationUnitGroupSet) => ({
    type: types.LAYER_EDIT_ORGANISATION_UNIT_GROUP_SET,
    organisationUnitGroupSet,
});

// Set period type (thematic)
export const setPeriodType = (periodType) => ({
    type: types.LAYER_EDIT_PERIOD_TYPE_SET,
    periodType,
});

// Set period (event & thematic)
export const setPeriod = (period) => ({
    type: types.LAYER_EDIT_PERIOD_SET,
    period,
});

// Set start date (event)
export const setStartDate = (startDate) => ({
    type: types.LAYER_EDIT_START_DATE_SET,
    startDate,
});

// Set end date (event)
export const setEndDate = (endDate) => ({
    type: types.LAYER_EDIT_END_DATE_SET,
    endDate,
});

// Set value type (thematic)
export const setValueType = (valueType) => ({
    type: types.LAYER_EDIT_VALUE_TYPE_SET,
    valueType,
});

// Set indicator group (thematic)
export const setIndicatorGroup = (groupId) => ({
    type: types.LAYER_EDIT_INDICATOR_GROUP_SET,
    groupId,
});

// Set indicator (thematic)
export const setIndicator = (indicator) => ({
    type: types.LAYER_EDIT_INDICATOR_SET,
    indicator,
});

// Set data set item (reporting rate, thematic)
export const setDataSetItem = (dataSetItem) => ({
    type: types.LAYER_EDIT_DATA_SET_ITEM_SET,
    dataSetItem,
});

// Set aggregation type (thematic)
export const setAggregationType = (aggregationType) => ({
    type: types.LAYER_EDIT_AGGREGATION_TYPE_SET,
    aggregationType,
});