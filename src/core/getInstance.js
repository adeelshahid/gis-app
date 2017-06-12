import isArray from 'd2-utilizr/lib/isArray';
import isEmpty from 'd2-utilizr/lib/isEmpty';
import isBoolean from 'd2-utilizr/lib/isBoolean';
import isNumber from 'd2-utilizr/lib/isNumber';
import isObject from 'd2-utilizr/lib/isObject';
import isString from 'd2-utilizr/lib/isString';
import arrayClean from 'd2-utilizr/lib/arrayClean';
import arrayContains from 'd2-utilizr/lib/arrayContains';
import arrayFrom from 'd2-utilizr/lib/arrayFrom';

export default function getInstance(init) {
    const conf = {};
    const util = {};
    const api = {};
    const store = {};
    const gis = {};

    let dimConf;

    // tmp
    gis.alert = function() {};

    // conf
    (function() {
        conf.finals = {
            url: {
                path_commons: '/dhis-web-commons-ajax-json/'
            },
            layer: {
                type_base: 'base',
                type_vector: 'vector',
                category_thematic: 'thematic'
            },
            dimension: {
                data: {
                    id: 'data',
                    value: 'data',
                    param: 'dx',
                    dimensionName: 'dx',
                    objectName: 'dx'
                },
                category: {
                    name: GIS.i18n.categories,
                    dimensionName: 'co',
                    objectName: 'co',
                },
                indicator: {
                    id: 'indicator',
                    value: 'indicators',
                    param: 'in',
                    dimensionName: 'dx',
                    objectName: 'in',
                    itemType: 'INDICATOR'
                },
                dataElement: {
                    id: 'dataElement',
                    value: 'dataElement',
                    param: 'de',
                    dimensionName: 'dx',
                    objectName: 'de',
                    itemType: 'AGGREGATE_DATA_ELEMENT'
                },
                operand: {
                    id: 'operand',
                    value: 'operand',
                    param: 'dc',
                    dimensionName: 'dx',
                    objectName: 'dc',
                    itemType: 'DATA_ELEMENT_OPERAND'
                },
                dataSet: {
                    value: 'dataSets',
                    dimensionName: 'dx',
                    objectName: 'ds',
                    itemType: 'DATA_SET'
                },
                eventDataItem: {
                    value: 'eventDataItem',
                    dimensionName: 'dx',
                    objectName: 'di'
                },
                programDataElement: {
                    value: 'programDataElement',
                    dimensionName: 'dx',
                    objectName: 'di',
                    itemType: 'PROGRAM_DATA_ELEMENT'
                },
                programAttribute: {
                    value: 'programAttribute',
                    dimensionName: 'dx',
                    objectName: 'di',
                    itemType: 'PROGRAM_ATTRIBUTE'
                },
                programIndicator: {
                    value: 'programIndicator',
                    dimensionName: 'dx',
                    objectName: 'pi',
                    itemType: 'PROGRAM_INDICATOR'
                },
                period: {
                    id: 'period',
                    value: 'period',
                    param: 'pe',
                    dimensionName: 'pe',
                    objectName: 'pe'
                },
                organisationUnit: {
                    id: 'organisationUnit',
                    value: 'organisationUnit',
                    param: 'ou',
                    dimensionName: 'ou',
                    objectName: 'ou'
                },
                value: {
                    id: 'value',
                    value: 'value',
                    param: 'value',
                    dimensionName: 'value',
                    objectName: 'value'
                }
            },
            widget: {
                value: 'value',
                legendtype_automatic: 'automatic',
                legendtype_predefined: 'predefined',
                symbolizer_color: 'color',
                symbolizer_image: 'image',
                loadtype_organisationunit: 'organisationUnit',
                loadtype_data: 'data',
                loadtype_legend: 'legend'
            },
            openLayers: {
                point_classname: 'OpenLayers.Geometry.Point'
            },
            mapfish: {
                classify_with_bounds: 1,
                classify_by_equal_intervals: 2,
                classify_by_quantils: 3
            },
            root: {
                id: 'root'
            }
        };

        // dimension objectNameMap
        (function() {
            dimConf = conf.finals.dimension;

            dimConf.objectNameMap = {};
            dimConf.objectNameMap[dimConf.indicator.objectName] = dimConf.indicator;
            dimConf.objectNameMap[dimConf.dataElement.objectName] = dimConf.dataElement;
            dimConf.objectNameMap[dimConf.operand.objectName] = dimConf.operand;
            dimConf.objectNameMap[dimConf.dataSet.objectName] = dimConf.dataSet;
            dimConf.objectNameMap[dimConf.programDataElement.objectName] = dimConf.programDataElement;
            dimConf.objectNameMap[dimConf.programAttribute.objectName] = dimConf.programAttribute;
            dimConf.objectNameMap[dimConf.programIndicator.objectName] = dimConf.programIndicator;
        })();

        // dimension itemTypeMap
        (function() {
            dimConf = conf.finals.dimension;

            dimConf.itemTypeMap = {};
            dimConf.itemTypeMap[dimConf.indicator.itemType] = dimConf.indicator;
            dimConf.itemTypeMap[dimConf.dataElement.itemType] = dimConf.dataElement;
            dimConf.itemTypeMap[dimConf.operand.itemType] = dimConf.operand;
            dimConf.itemTypeMap[dimConf.dataSet.itemType] = dimConf.dataSet;
            dimConf.itemTypeMap[dimConf.programDataElement.itemType] = dimConf.programDataElement;
            dimConf.itemTypeMap[dimConf.programAttribute.itemType] = dimConf.programAttribute;
            dimConf.itemTypeMap[dimConf.programIndicator.itemType] = dimConf.programIndicator;
        })();

        conf.layout = {
            widget: {
                item_width: 288,
                itemlabel_width: 95,
                window_width: 306
            },
            tool: {
                item_width: 228,
                itemlabel_width: 95,
                window_width: 250
            },
            grid: {
                row_height: 27
            },
            layer: {
                opacity: 0.8
            }
        };

        conf.period = {
            periodTypes: [
                {id: 'relativePeriods', name: GIS.i18n.relative},
                {id: 'Daily', name: GIS.i18n.daily},
                {id: 'Weekly', name: GIS.i18n.weekly},
                {id: 'Monthly', name: GIS.i18n.monthly},
                {id: 'BiMonthly', name: GIS.i18n.bimonthly},
                {id: 'Quarterly', name: GIS.i18n.quarterly},
                {id: 'SixMonthly', name: GIS.i18n.sixmonthly},
                {id: 'SixMonthlyApril', name: GIS.i18n.sixmonthly_april},
                {id: 'Yearly', name: GIS.i18n.yearly},
                {id: 'FinancialOct', name: GIS.i18n.financial_oct},
                {id: 'FinancialJuly', name: GIS.i18n.financial_july},
                {id: 'FinancialApril', name: GIS.i18n.financial_april}
            ],
            relativePeriods: [
                {id: 'THIS_WEEK', name: GIS.i18n.this_week},
                {id: 'LAST_WEEK', name: GIS.i18n.last_week},
                {id: 'LAST_4_WEEKS', name: GIS.i18n.last_4_weeks},
                {id: 'LAST_12_WEEKS', name: GIS.i18n.last_12_weeks},
                {id: 'LAST_52_WEEKS', name: GIS.i18n.last_52_weeks},
                {id: 'THIS_MONTH', name: GIS.i18n.this_month},
                {id: 'LAST_MONTH', name: GIS.i18n.last_month},
                {id: 'LAST_3_MONTHS', name: GIS.i18n.last_3_months},
                {id: 'LAST_6_MONTHS', name: GIS.i18n.last_6_months},
                {id: 'LAST_12_MONTHS', name: GIS.i18n.last_12_months},
                {id: 'THIS_BIMONTH', name: GIS.i18n.this_bimonth},
                {id: 'LAST_BIMONTH', name: GIS.i18n.last_bimonth},
                {id: 'LAST_6_BIMONTHS', name: GIS.i18n.last_6_bimonths},
                {id: 'THIS_QUARTER', name: GIS.i18n.this_quarter},
                {id: 'LAST_QUARTER', name: GIS.i18n.last_quarter},
                {id: 'LAST_4_QUARTERS', name: GIS.i18n.last_4_quarters},
                {id: 'THIS_SIX_MONTH', name: GIS.i18n.this_sixmonth},
                {id: 'LAST_SIX_MONTH', name: GIS.i18n.last_sixmonth},
                {id: 'LAST_2_SIX_MONTHS', name: GIS.i18n.last_2_sixmonths},
                {id: 'THIS_FINANCIAL_YEAR', name: GIS.i18n.this_financial_year},
                {id: 'LAST_FINANCIAL_YEAR', name: GIS.i18n.last_financial_year},
                {id: 'LAST_5_FINANCIAL_YEARS', name: GIS.i18n.last_5_financial_years},
                {id: 'THIS_YEAR', name: GIS.i18n.this_year},
                {id: 'LAST_YEAR', name: GIS.i18n.last_year},
                {id: 'LAST_5_YEARS', name: GIS.i18n.last_5_years}
            ],
            relativePeriodsMap: {},
            relativePeriodRecordsMap: {}
        };

        // relativePeriodsMap / records
        conf.period.relativePeriods.forEach(obj => {
            conf.period.relativePeriodsMap[obj.id] = obj.name;
            conf.period.relativePeriodRecordsMap[obj.id] = {
                id: obj.id,
                name: obj.name
            };
        });

        conf.valueType = {
            numericTypes: ['NUMBER','UNIT_INTERVAL','PERCENTAGE','INTEGER','INTEGER_POSITIVE','INTEGER_NEGATIVE','INTEGER_ZERO_OR_POSITIVE'],
            textTypes: ['TEXT','LONG_TEXT','LETTER','PHONE_NUMBER','EMAIL'],
            booleanTypes: ['BOOLEAN','TRUE_ONLY'],
            dateTypes: ['DATE','DATETIME'],
            aggregateTypes: ['NUMBER','UNIT_INTERVAL','PERCENTAGE','INTEGER','INTEGER_POSITIVE','INTEGER_NEGATIVE','INTEGER_ZERO_OR_POSITIVE','BOOLEAN','TRUE_ONLY']
        };

        conf.url = {};

        conf.url.baseFields = [
            'id',
            'user',
            'displayName~rename(name)',
            'longitude',
            'latitude',
            'zoom',
            'basemap'
        ];

        conf.url.analysisFields = [
            '*',
            'columns[dimension,filter,items[dimensionItem~rename(id),dimensionItemType,' + init.namePropertyUrl + ']]',
            'rows[dimension,filter,items[dimensionItem~rename(id),dimensionItemType,' + init.namePropertyUrl + ']]',
            'filters[dimension,filter,items[dimensionItem~rename(id),dimensionItemType,' + init.namePropertyUrl + ']]',
            'dataDimensionItems',
            'program[id,' + init.namePropertyUrl + ']',
            'programStage[id,displayName~rename(name)]',
            'legendSet[id,displayName~rename(name)]',
            '!lastUpdated',
            '!href',
            '!created',
            '!publicAccess',
            '!rewindRelativePeriods',
            '!userOrganisationUnit',
            '!userOrganisationUnitChildren',
            '!userOrganisationUnitGrandChildren',
            '!externalAccess',
            '!access',
            '!relativePeriods',
            '!columnDimensions',
            '!rowDimensions',
            '!filterDimensions',
            '!user',
            '!organisationUnitGroups',
            '!itemOrganisationUnitGroups',
            '!userGroupAccesses',
            '!indicators',
            '!dataElements',
            '!dataElementOperands',
            '!dataElementGroups',
            '!dataSets',
            '!periods',
            '!organisationUnitLevels',
            '!organisationUnits',
            '!sortOrder',
            '!topLimit'
        ];

        conf.url.mapFields = [
            conf.url.baseFields.join(','),
            'mapViews[' + conf.url.analysisFields.join(',') + ']'
        ];

        conf.url.legendFields = [
            '*',
            '!created',
            '!lastUpdated',
            '!displayName',
            '!externalAccess',
            '!access',
            '!userGroupAccesses'
        ];

        conf.url.legendSetFields = [
            'id,displayName~rename(name),legends[' + conf.url.legendFields.join(',') + ']'
        ];
    }());

    // util
    (function() {
        util.map = {};

        util.map.isValidCoordinate = function(coord) {
            return isArray(coord)
                && coord.length === 2
                && coord[0] >= -180
                && coord[0] <= 180
                && coord[1] >= -90
                && coord[1] <= 90;
        };

        // Returns the current basemap
        util.map.getBasemap = function() {
            for (let layerId in gis.layer) {
                if (gis.layer.hasOwnProperty(layerId)) {
                    const layer = gis.layer[layerId];

                    if (layer.layerType === 'base' && layer.instance && gis.instance.hasLayer(layer.instance)) {
                        return layerId;
                    }
                }
            }

            return 'none';
        };

        util.map.getVisibleVectorLayers = function() {
            return gis.overlayLayers.filter(layer => layer.instance && gis.instance.hasLayer(layer.instance));
        };

        util.geojson = {};

        // Convert to GeoJSON features
        util.geojson.decode = function(organisationUnits, levelOrder) {
            const features = [];

            levelOrder = levelOrder || 'ASC';

            // sort
            util.array.sort(organisationUnits, levelOrder, 'le');

            organisationUnits.forEach(ou => {
                const coord = JSON.parse(ou.co);
                let gpid = '';
                let gppg = '';
                let type;

                // Only add features with coordinates
                if (coord && coord.length) {
                    type = 'Point';
                    if (ou.ty === 2) {
                        type = 'Polygon';
                        if (ou.co.substring(0, 4) === '[[[[') {
                            type = 'MultiPolygon';
                        }
                    }

                    // grand parent
                    if (isString(ou.pg) && ou.pg.length) {
                        const ids = arrayClean(ou.pg.split('/'));

                        // grand parent id
                        if (ids.length >= 2) {
                            gpid = ids[ids.length - 2];
                        }

                        // grand parent parentgraph
                        if (ids.length > 2) {
                            gppg = '/' + ids.slice(0, ids.length - 2).join('/');
                        }
                    }

                    features.push({
                        type: 'Feature',
                        id: ou.id,
                        geometry: {
                            type: type,
                            coordinates: coord
                        },
                        properties: {
                            id: ou.id,
                            name: ou.na,
                            hasCoordinatesDown: ou.hcd,
                            hasCoordinatesUp: ou.hcu,
                            level: ou.le,
                            grandParentParentGraph: gppg,
                            grandParentId: gpid,
                            parentGraph: ou.pg,
                            parentId: ou.pi,
                            parentName: ou.pn
                        }
                    });
                }

            });

            return features;
        };

        util.gui = {};
        util.gui.combo = {};

        util.gui.combo.setQueryMode = function(cmpArray, mode) {
            cmpArray.forEach(cmp => cmp.queryMode = mode);
        };

        util.object = {};

        util.object.getLength = function(object) {
            let size = 0;

            for (let key in object) {
                if (object.hasOwnProperty(key)) {
                    size++;
                }
            }

            return size;
        };

        util.array = {};

        util.array.getLength = function(array, suppressWarning) {
            if (!isArray(array)) {
                if (!suppressWarning) {
                    console.log('support.prototype.array.getLength: not an array');
                }

                return null;
            }

            return array.length;
        };

        util.array.sort = function(array, direction, key, emptyFirst) {
            // supports [number], [string], [{key: number}], [{key: string}], [[string]], [[number]]

            if (!util.array.getLength(array, true)) {
                return;
            }

            key = !!key || isNumber(key) ? key : 'name';

            array.sort( function(a, b) {

                // if object, get the property values
                if (isObject(a) && isObject(b)) {
                    a = a[key];
                    b = b[key];
                }

                // if array, get from the right index
                if (isArray(a) && isArray(b)) {
                    a = a[key];
                    b = b[key];
                }

                // string
                if (isString(a) && isString(b)) {
                    a = a.toLowerCase();
                    b = b.toLowerCase();

                    if (direction === 'DESC') {
                        return a < b ? 1 : (a > b ? -1 : 0);
                    }
                    else {
                        return a < b ? -1 : (a > b ? 1 : 0);
                    }
                }
                // number
                else if (isNumber(a) && isNumber(b)) {
                    return direction === 'DESC' ? b - a : a - b;
                }

                else if (a === undefined || a === null) {
                    return emptyFirst ? -1 : 1;
                }

                else if (b === undefined || b === null) {
                    return emptyFirst ? 1 : -1;
                }

                return -1;
            });

            return array;
        };

        util.array.getObjectMap = function(array, idProperty, nameProperty, namePrefix) {
            if (!(isArray(array) && array.length)) {
                return {};
            }

            const o = {};
            idProperty = idProperty || 'id';
            nameProperty = nameProperty || 'name';
            namePrefix = namePrefix || '';

            array.forEach(obj => o[namePrefix + obj[idProperty]] = obj[nameProperty]);

            return o;
        };

        util.layout = {};

        util.layout.getAnalytical = function(map) {
            let layout;
            let layer;

            if (isObject(map) && isArray(map.mapViews) && map.mapViews.length) {
                map.mapViews.forEach(view => {
                    const id = view.layer;

                    if (gis.layer.hasOwnProperty(id) && gis.layer[id].layerCategory === gis.conf.finals.layer.category_thematic) {
                        const layout = gis.api.layout.Layout(view);

                        if (layout) {
                            return layout;
                        }
                    }
                });
            }
            else {
                for (let key in gis.layer) {
                    if (gis.layer.hasOwnProperty(key) && key.substring(0, 8) === gis.conf.finals.layer.category_thematic && gis.layer[key].view) {
                        layer = gis.layer[key];
                        layout = gis.api.layout.Layout(layer.view);

                        if (layout) {
                            if (!layout.parentGraphMap && layer.widget) {
                                layout.parentGraphMap = layer.widget.getParentGraphMap();
                            }
                            return layout;
                        }
                    }
                }
            }

            return;
        };

        util.layout.getPluginConfig = function() {
            const layers = gis.util.map.getVisibleVectorLayers();
            const map = {};

            if (gis.map) {
                return gis.map;
            }

            map.mapViews = [];

            layers.forEach(layer => {
                if (layer.view) {
                    layer.view.layer = layer.id;
                    map.mapViews.push(layer.view);
                }
            });

            return map;
        };

        util.layout.setSessionStorage = function(session, obj, url) {
            if (GIS.isSessionStorage) {
                const dhis2 = JSON.parse(sessionStorage.getItem('dhis2')) || {};
                dhis2[session] = obj;
                sessionStorage.setItem('dhis2', JSON.stringify(dhis2));

                if (isString(url)) {
                    window.location.href = url;
                }
            }
        };

        util.layout.getDataDimensionsFromLayout = function(layout) {
            const dimensions = arrayClean([].concat(layout.columns || [], layout.rows || [], layout.filters || []));
            const ignoreKeys = ['pe', 'ou'];

            return dimensions.filter(dim => !arrayContains(ignoreKeys, dim.dimension));
        };

        util.date = {};

        util.date.getYYYYMMDD = function(param) {
            if (!isString(param)) {
                if (!(Object.prototype.toString.call(param) === '[object Date]' && param.toString() !== 'Invalid date')) {
                    return null;
                }
            }

            const date = new Date(param);
            let month = '' + (1 + date.getMonth());
            let day = '' + date.getDate();

            month = month.length === 1 ? '0' + month : month;
            day = day.length === 1 ? '0' + day : day;

            return date.getFullYear() + '-' + month + '-' + day;
        };

        util.message = {};

        util.message.alert = function(obj) {
            if (!obj || (isObject(obj) && !obj.message && !obj.responseText)) {
                return;
            }

            // if response object
            if (isObject(obj) && obj.responseText && !obj.message) {
                obj = JSON.parse(obj.responseText);
            }

            // if string
            if (isString(obj)) {
                obj = {
                    status: 'ERROR',
                    message: obj
                };
            }

            // plugin message
            let html = obj.httpStatusCode ? 'Code: ' + obj.httpStatusCode + '<br>' : '';
            html += obj.httpStatus ? 'Status: ' + obj.httpStatus + '<br><br>' : '';
            html += obj.message + (obj.message.substr(obj.message.length - 1) === '.' ? '' : '.');

            if (!gis.container) {
                Ext.create('Ext.window.Window', {
                    title: obj.status,
                    modal: true,
                    destroyOnBlur: true,
                    html: html,
                    // bodyStyle: 'padding: 12px; background: #fff; max-width: 600px; max-height: ' + gis.viewport.centerRegion.getHeight() / 2 + 'px',
                    bodyStyle: 'padding: 12px; background: #fff; max-width: 600px;',
                    listeners: {
                        /*
                        show(win) {
                            win.setPosition(win.getPosition()[0], win.getPosition()[1] / 2);
                            if (!win.hasDestroyOnBlurHandler) {
                                gis.util.gui.window.addDestroyOnBlurHandler(win);
                            }
                        }*/
                    }
                }).show();
            } else  { // Dashboard
                gis.instance.getContainer().style.display = 'none';
                const alertDiv = document.createElement('div');
                alertDiv.className = 'dhis2-map-widget-alert';
                alertDiv.innerHTML = html;
                gis.container.appendChild(alertDiv);
            }

            if (gis.mask) {
                gis.mask.hide();
            }
        };

        util.dhis = {};

        util.dhis.getDataDimensionItemTypes = function(dataDimensionItems) {
            const types = [];

            if (isArray(dataDimensionItems) && dataDimensionItems.length) {
                for (let i = 0; i < dataDimensionItems.length; i++) {
                    if (isObject(dataDimensionItems[i])) {
                        types.push(dataDimensionItems[i].dataDimensionItemType);
                    }
                }
            }

            return types;
        };
    }());

    gis.init = init;
    gis.conf = conf;
    gis.util = util;

    // api
    (function() {
        const dimConf = gis.conf.finals.dimension;

        api.layout = {};
        api.response = {};

        api.layout.Record = function(config) {
            // id: string

            if (!isObject(config)) {
                //console.log('Record config is not an object', config);
                return;
            }

            if (!isString(config.id)) {
                console.log('Record id is not text', config);
                return;
            }

            const record = Ext.clone(config);

            if (isString(config.name)) {
                record.name = config.name;
            }

            return record;
        };

        api.layout.Dimension = function(config) {
            const dimension = {};

            // dimension: string

            // items: [Record]

            if (!isObject(config)) {
                //console.log('Dimension config is not an object: ' + config);
                return;
            }

            if (!isString(config.dimension)) {
                console.log('Dimension name is not text', config);
                return;
            }

            if (config.dimension !== conf.finals.dimension.category.objectName) {
                const records = [];

                if (!isArray(config.items)) {
                    console.log('Dimension items is not an array', config);
                    return;
                }

                for (let i = 0, record; i < config.items.length; i++) {
                    record = api.layout.Record(config.items[i]);

                    if (record) {
                        records.push(record);
                    }
                }

                config.items = records;
            }

            dimension.dimension = config.dimension;
            dimension.items = config.items;

            if (config.objectName) {
                dimension.objectName = config.objectName;
            }

            if (config.filter) {
                dimension.filter = config.filter;
            }

            return Ext.clone(dimension);
        };

        api.layout.Layout = function(config, applyConfig, forceApplyConfig) {
            config = Ext.apply(config, applyConfig);

            const layout = {};

            const getValidatedDimensionArray = function(dimensionArray) {
                const dimensions = [];

                if (!(dimensionArray && isArray(dimensionArray) && dimensionArray.length)) {
                    return;
                }


                for (let i = 0, dimension; i < dimensionArray.length; i++) {
                    dimension = api.layout.Dimension(dimensionArray[i]);

                    if (dimension) {
                        dimensions.push(dimension);
                    }
                }

                dimensionArray = dimensions;

                return dimensionArray.length ? dimensionArray : null;
            };

            const validateSpecialCases = function(config) {
                const dimensions = arrayClean([].concat(config.columns || [], config.rows || [], config.filters || []));

                let dxDim;
                let peDim;
                let ouDim;

                dimensions.forEach(dim => {
                    if (dim.dimension === dimConf.data.objectName) {
                        dxDim = dim;
                    }
                    else if (dim.dimension === dimConf.period.objectName) {
                        peDim = dim;
                    }
                    else if (dim.dimension === dimConf.organisationUnit.objectName) {
                        ouDim = dim;
                    }
                });

                if (!ouDim) {
                    gis.alert(GIS.i18n.no_organisation_units_specified);
                    return;
                }

                if (dxDim) {
                    dxDim.items = [dxDim.items[0]];
                }

                if (config.layer !== 'event') {
                    config.columns = [dxDim];
                }

                if (config.layer !== 'event') {
                    config.rows = [ouDim];
                }

                if (config.layer !== 'event') {
                    config.filters = [peDim];
                }

                return config;
            };

            return function() {
                const objectNames = [];
                const dimConf = conf.finals.dimension;
                let isOu = false;
                let isOuc = false;
                let isOugc = false;

                config = validateSpecialCases(config);

                if (!config) {
                    return;
                }

                config.columns = getValidatedDimensionArray(config.columns);
                config.rows = getValidatedDimensionArray(config.rows);
                config.filters = getValidatedDimensionArray(config.filters);

                if (!config.rows) {
                    console.log('Organisation unit dimension is invalid', config.rows);
                    return;
                }

                if (arrayContains(['thematic', 'thematic1', 'thematic2', 'thematic3', 'thematic4'], config.layer) && !config.columns) {
                    console.log('Missing columns for thematic layer', config.rows);
                    return;
                }

                // Collect object names and user orgunits
                for (let i = 0, dim, dims = arrayClean([].concat(config.columns, config.rows, config.filters)); i < dims.length; i++) {
                    dim = dims[i];

                    if (dim) {

                        // Object names
                        if (isString(dim.dimension)) {
                            objectNames.push(dim.dimension);
                        }

                        // user orgunits
                        if (dim.dimension === dimConf.organisationUnit.objectName && isArray(dim.items)) {
                            for (let j = 0; j < dim.items.length; j++) {
                                if (dim.items[j].id === 'USER_ORGUNIT') {
                                    isOu = true;
                                }
                                else if (dim.items[j].id === 'USER_ORGUNIT_CHILDREN') {
                                    isOuc = true;
                                }
                                else if (dim.items[j].id === 'USER_ORGUNIT_GRANDCHILDREN') {
                                    isOugc = true;
                                }
                            }
                        }
                    }
                }

                // Layout
                layout.columns = config.columns;
                layout.rows = config.rows;
                layout.filters = config.filters;

                // program
                if (isObject(config.program) && config.program.id) {
                    layout.program = config.program;
                }

                // program stage
                if (isObject(config.programStage) && config.programStage.id) {
                    layout.programStage = config.programStage;
                }

                if (config.startDate) {
                    layout.startDate = config.startDate.substring(0, 10);
                }

                if (config.endDate) {
                    layout.endDate = config.endDate.substring(0, 10);
                }

                if (config.valueType) {
                    layout.valueType = config.valueType;
                }

                if (config.eventCoordinateField) {
                    layout.eventCoordinateField = config.eventCoordinateField;
                }

                if (config.eventClustering) {
                    layout.eventClustering = config.eventClustering;
                }

                if (config.eventPointColor) {
                    layout.eventPointColor = config.eventPointColor;
                }

                if (config.eventPointRadius) {
                    layout.eventPointRadius = config.eventPointRadius;
                }

                // Properties
                layout.layer = isString(config.layer) && !isEmpty(config.layer) ? config.layer : 'thematic1';
                layout.classes = isNumber(config.classes) && !isEmpty(config.classes) ? config.classes : 5;
                layout.method = isNumber(config.method) && !isEmpty(config.method) ? config.method : 2;
                layout.colorLow = isString(config.colorLow) && !isEmpty(config.colorLow) ? config.colorLow : 'ff0000';
                layout.colorHigh = isString(config.colorHigh) && !isEmpty(config.colorHigh) ? config.colorHigh : '00ff00';
                layout.radiusLow = isNumber(config.radiusLow) && !isEmpty(config.radiusLow) ? config.radiusLow : 5;
                layout.radiusHigh = isNumber(config.radiusHigh) && !isEmpty(config.radiusHigh) ? config.radiusHigh : 15;
                layout.opacity = isNumber(config.opacity) && !isEmpty(config.opacity) ? config.opacity : gis.conf.layout.layer.opacity;
                layout.areaRadius = config.areaRadius;

                layout.labels = !!config.labels;

                layout.labelFontSize = config.labelFontSize || '11px';
                layout.labelFontSize = parseInt(layout.labelFontSize) + 'px';

                layout.labelFontWeight = isString(config.labelFontWeight) || isNumber(config.labelFontWeight) ? config.labelFontWeight : 'normal';
                layout.labelFontWeight = arrayContains(['normal', 'bold', 'bolder', 'lighter'], layout.labelFontWeight) ? layout.labelFontWeight : 'normal';
                layout.labelFontWeight = isNumber(parseInt(layout.labelFontWeight)) && parseInt(layout.labelFontWeight) <= 1000 ? layout.labelFontWeight.toString() : layout.labelFontWeight;

                layout.labelFontStyle = arrayContains(['normal', 'italic', 'oblique'], config.labelFontStyle) ? config.labelFontStyle : 'normal';

                layout.labelFontColor = isString(config.labelFontColor) || isNumber(config.labelFontColor) ? config.labelFontColor : 'normal';
                layout.labelFontColor = isNumber(layout.labelFontColor) ? layout.labelFontColor.toString() : layout.labelFontColor;
                layout.labelFontColor = layout.labelFontColor.charAt(0) !== '#' ? '#' + layout.labelFontColor : layout.labelFontColor;

                layout.hidden = !!config.hidden;

                layout.userOrganisationUnit = isOu;
                layout.userOrganisationUnitChildren = isOuc;
                layout.userOrganisationUnitGrandChildren = isOugc;

                layout.parentGraphMap = isObject(config.parentGraphMap) ? config.parentGraphMap : null;

                layout.organisationUnitGroupSet = config.organisationUnitGroupSet;

                layout.dataDimensionItems = config.dataDimensionItems;

                // layout.key = config.key; // Earth Engine layer - TODO: Conflict with react key

                if (config.config) { // JSON string config for Earth Engine layer
                    layout.config = config.config;
                }

                if (config.legendSet) {
                    layout.legendSet = config.legendSet;
                }

                if (config.colorScale) { // Thematic layer
                    layout.colorScale = config.colorScale;
                }

                if (arrayFrom(config.userOrgUnit).length) {
                    layout.userOrgUnit = arrayFrom(config.userOrgUnit);
                }

                // relative period date
                if (util.date.getYYYYMMDD(config.relativePeriodDate)) {
                    layout.relativePeriodDate = support.prototype.date.getYYYYMMDD(config.relativePeriodDate);
                }

                // Aggregation type
                if (config.aggregationType) {
                    layout.aggregationType = config.aggregationType;
                }

                return Ext.apply(layout, forceApplyConfig);
            }();
        };

        api.response.Header = function(config) {
            const header = {};

            // name: string

            // meta: boolean

            return function() {
                if (!isObject(config)) {
                    console.log('Header is not an object', config);
                    return;
                }

                if (!isString(config.name)) {
                    console.log('Header name is not text', config);
                    return;
                }

                if (!isBoolean(config.meta)) {
                    console.log('Header meta is not boolean', config);
                    return;
                }

                header.name = config.name;
                header.meta = config.meta;

                return Ext.clone(header);
            }();
        };

        api.response.Response = function(config) {
            const response = {};

            // headers: [Header]

            return function() {
                const headers = [];

                if (!(config && isObject(config))) {
                    gis.alert('Data response invalid', config);
                    return false;
                }

                if (!(config.headers && isArray(config.headers))) {
                    gis.alert('Data response invalid', config);
                    return false;
                }

                for (let i = 0, header; i < config.headers.length; i++) {
                    header = api.response.Header(config.headers[i]);

                    if (header) {
                        headers.push(header);
                    }
                }

                config.headers = headers;

                if (!config.headers.length) {
                    gis.alert('No valid response headers', config);
                    return;
                }

                if (!(isArray(config.rows) && config.rows.length > 0)) {
                    gis.alert('No values found', config);
                    return false;
                }

                if (config.headers.length !== config.rows[0].length) {
                    gis.alert('Data invalid', config);
                    return false;
                }

                response.headers = config.headers;
                response.metaData = config.metaData;
                response.width = config.width;
                response.height = config.height;
                response.rows = config.rows;

                return response;
            }();
        };
    }());

    // Store usage statistics each time a favorite is loaded (MapLoader.js) or layer update buttons is clicked (WidgetWindow.js)
    gis.postDataStatistics = function(mapId) {
        if (isObject(GIS.app) && !isObject(GIS.plugin, gis.init.apiPath)) {
            Ext.Ajax.request({
                url: gis.init.apiPath + 'dataStatistics?eventType=MAP_VIEW' + (mapId ? '&favorite=' + mapId : ''),
                method: 'POST'
            });
        }
    };

    gis.alert = util.message.alert;

    gis.api = api;
    gis.store = store;

    gis.relocate = {}; // Relocate organisation units

    GIS.core.instances.push(gis);

    return gis;
};
