import React from 'react';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import Button from 'd2-ui/lib/button/Button';
import { HEADER_HEIGHT } from '../../constants/layout';

const styles = {
    toolbar: {
        position: 'absolute',
        width: '100%',
        height: HEADER_HEIGHT,
        backgroundColor: 'rgb(39, 102, 150)',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.227451)',
        zIndex: 1050,
    },
    button: {
        color: '#fff',
        height: 40,
        margin: 0,
    },
};

const AppMenu = ({ openOverlaysDialog, openFavoritesDialog, openAboutDialog, contextPath }) => (
    <Toolbar
      style={styles.toolbar}
      className='dhis-gis-menu'
    >
        <ToolbarGroup firstChild={true}>
            <Button
              onClick={openOverlaysDialog}
              style={styles.button}
            >{i18next.t('Add layer')}</Button>
            <Button
              onClick={openFavoritesDialog}
              style={styles.button}
            >{i18next.t('Favorites')}</Button>
            <Button
              disabled={true}
              onClick={() => {}}
              style={styles.button}
            >{i18next.t('Share')}</Button>
        </ToolbarGroup>
        <ToolbarGroup lastChild={true} style={styles.lastToolbar}>
            <Button
              onClick={openAboutDialog}
              style={styles.button}
            >{i18next.t('About')}</Button>
            <Button
              onClick={() => window.location.href = `${contextPath}/dhis-web-commons-about/redirect.action`}
              style={styles.button}
            >{i18next.t('Home')}</Button>
        </ToolbarGroup>
    </Toolbar>
);

AppMenu.contextTypes = {
  d2: PropTypes.object
};

export default AppMenu;
