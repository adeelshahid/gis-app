import React, { PropTypes } from 'react';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ArrowUpIcon from 'material-ui/svg-icons/navigation/arrow-upward';
import ArrowDownIcon from 'material-ui/svg-icons/navigation/arrow-downward';
import InfoIcon from 'material-ui/svg-icons/action/info-outline';
import EditLocationIcon from 'material-ui/svg-icons/action/room';

// https://github.com/callemall/material-ui/issues/2866
const anchorEl = document.getElementById('context-menu');

const ContextMenu = props => {
    const feature = props.feature;
    const iconColor = '#777';
    const iconDisabledColor = '#eee';
    let isPoint;
    let attr = {};

    const style = {
        list: {
            paddingTop: 4,
            paddingBottom: 4,
        },
        menuItem: {
            fontSize: 12,
            lineHeight: '24px',
            minHeight: '24px',
        },
        menuItemInner: {
            padding: '0 8px 0 34px',
        },
        icon: {
            margin: 3,
            left: 6,
            width: 18,
            height: 18,
        }
    };

    if (props.pos) {
        anchorEl.style.left = props.pos[0] + 'px';
        anchorEl.style.top = props.pos[1] + 'px';
    }

    if (feature) {
        isPoint = feature.geometry.type === 'Point';
        attr = feature.properties;
    }

    return (
        <Popover
            open={props.pos ? true : false}
            style={style.popover}
            anchorEl={anchorEl}
            onRequestClose={props.onRequestClose}
        >
            <Menu autoWidth={true} style={style.menu} listStyle={style.list} menuItemStyle={style.menuItem} >
                <MenuItem
                    primaryText="Drill up one level" // TODO: i18n
                    disabled={!attr.hasCoordinatesUp}
                    onTouchTap={() => props.onDrill(props.layerId, attr.grandParentId, attr.grandParentParentGraph, parseInt(attr.level) - 1)}
                    innerDivStyle={style.menuItemInner}
                    leftIcon={
                        <ArrowUpIcon
                            color={attr.hasCoordinatesUp ? iconColor : iconDisabledColor}
                            style={style.icon}
                        />
                    }
                />
                <MenuItem
                    primaryText="Drill down one level" // TODO: i18n
                    disabled={!attr.hasCoordinatesDown}
                    onTouchTap={() => props.onDrill(props.layerId, attr.id, attr.parentGraph, parseInt(attr.level) + 1)}
                    innerDivStyle={style.menuItemInner}
                    leftIcon={
                        <ArrowDownIcon
                            color={attr.hasCoordinatesDown ? iconColor : iconDisabledColor}
                            style={style.icon}
                        />
                    }
                />
                <MenuItem
                    primaryText="Show information"
                    onTouchTap={() => props.onShowInformation(feature.properties)}
                    innerDivStyle={style.menuItemInner}
                    leftIcon={
                        <InfoIcon
                            style={style.icon}
                        />
                    }
                />
                <MenuItem
                    primaryText="Show longitude/latitude"
                    innerDivStyle={style.menuItemInner}
                    leftIcon={
                        <EditLocationIcon
                            style={style.icon}
                        />
                    }
                />
            </Menu>
        </Popover>
    );
};

export default ContextMenu;