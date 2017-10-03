import * as types from '../constants/actionTypes';

const layerEdit = (state = null, action) => {

    switch (action.type) {

        case types.OVERLAY_EDIT:
            delete action.payload.img;
            return action.payload;

        case types.OVERLAY_CANCEL:
            return null;

        case types.LAYER_EDIT_PROGRAM_SET:
            return {
                ...state,
                program: {
                    ...action.program,
                },
                programStage: null,
                styleDataElement: null,
            };

        case types.LAYER_EDIT_PROGRAM_STAGE_SET:
            return {
                ...state,
                programStage: {
                    ...action.programStage,
                },
                styleDataElement: null,
            };

        case types.LAYER_EDIT_RELATIVE_PERIOD_SET:
            const filters = state.filters || [];
            const newFilters = filters.filter(r => r.dimension !== 'pe');

            newFilters.push({
                dimension: 'pe',
                items: [{
                    id: action.period.id,
                }],
            });

            return {
                ...state,
                filters: newFilters,
            };

        case types.LAYER_EDIT_START_DATE_SET:
            return {
                ...state,
                startDate: action.startDate,
            };

        case types.LAYER_EDIT_END_DATE_SET:
            return {
                ...state,
                endDate: action.endDate,
            };

        case types.LAYER_EDIT_STYLE_DATA_ELEMENT_SET:
            return {
                ...state,
                styleDataElement: action.dataElement,
            };

        // Set options to data element option set
        case types.LAYER_EDIT_STYLE_DATA_ELEMENT_OPTIONS_SET:
            return {
                ...state,
                styleDataElement: {
                    ...state.styleDataElement,
                    optionSet: {
                        ...state.styleDataElement.optionSet,
                        options: action.options,
                    },
                },
            };

            return state;

        case types.LAYER_EDIT_EVENT_POINT_RADIUS_SET:
            return {
                ...state,
                eventPointRadius: action.radius,
            };

        case types.LAYER_EDIT_EVENT_POINT_COLOR_SET:
            return {
                ...state,
                eventPointColor: action.color,
            };

        case types.LAYER_EDIT_ORGANISATION_UNIT_GROUP_SET:
            return {
                ...state,
                organisationUnitGroupSet: {
                    ...action.organisationUnitGroupSet,
                },
            };

      case types.LAYER_EDIT_ORGANISATIOM_UNIT_TOGGLE:
            const rows = state.rows || [];
            const ouDim = rows.filter(r => r.dimension === 'ou')[0];
            const items = ouDim ? ouDim.items.filter((item) => item.id !== action.orgUnit.id) : [];
            const newRows = rows.filter(r => r.dimension !== 'ou');

            if (!ouDim || ouDim.items.length === items.length) { // Don't exist already
                items.push(action.orgUnit);
            }

            if (items.length) {
                newRows.push({
                  dimension: 'ou',
                  items,
                });
            }

            return {
                ...state,
                rows: newRows,
            };

        default:
            return state;

    }
};

export default layerEdit;