import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Button from '../d2-ui/button/Button.component';
import WidgetWindow from '../../app/WidgetWindow';
import EventDialog from '../../containers/EventDialog';

// Only create one widget per layer (will be changed when we switch to react)
const widgets = {};
const editCounter = {};

let nextOverlayId = 0;

const styles = {
    body: {
        padding: 0,
        minHeight: 300,
    },
    title: {
        padding: '8px 16px',
        fontSize: 18,
    },
    /*
     content: {
     padding: '0 24px 16px',
     minHeight: 300,
     },
     */
};

class LayerEdit extends Component {

    componentDidUpdate(prevProps) {
        const props = this.props;

        if (props.layer) {
            const layer = {...props.layer};
            let id = layer.id;

            if (!id) { // New layer
                id = 'overlay-' + nextOverlayId++;
                layer.id = id;
                layer.isNew = true;
            } else {
                layer.isNew = false;
            }

            if (layer.type === 'external') { // External layers has no edit widget
                layer.editCounter = 1;
                props.getOverlay(layer);
            } else  if (!layer.preview) { // TODO
                if (!widgets[id]) {
                    editCounter[id] = 0;

                    widgets[id] = WidgetWindow(gis, layer, (editedLayer) => {
                        editedLayer.isLoaded = false;

                        editedLayer.editCounter = ++editCounter[editedLayer.id];

                        editedLayer.isNew = layer.isNew;

                        widgets[id].hide();

                        // console.log('editedLayer', JSON.stringify(editedLayer));

                        props.getOverlay(editedLayer);
                    });

                    if (layer.isLoaded) { // Loaded as favorite
                        widgets[id].show();
                        editCounter[id]++;
                        widgets[id].setLayer(layer);
                    }
                } else {
                    layer.isNew = false;
                }

                widgets[id].show();
            }
        }
    }

    addLayer() {
        this.props.layer.id = 'overlay-1'; // TODO

        this.props.getOverlay(this.props.layer);
        this.closeDialog();
    }

    closeDialog() {
        this.props.cancelOverlay();
    }

    onLayerChange(config) {
        this.config = config;
        // console.log('onLayerChange', config);
    }

    // React rendering will happen here later :-)
    render() {
        const layer = this.props.layer;

        if (!layer || !layer.preview) {
            return null;
        }


        const addButton = <FlatButton
            label="Add layer"
            primary={true}
            onTouchTap={() => this.addLayer()}
            // disabled={true}
        />;

        const cancelButton = <FlatButton
            label="Cancel"
            primary={true}
            onTouchTap={() => this.closeDialog()}
        />;

        return (
            <Dialog
                title={layer.title} // TODO: i18n
                bodyStyle={styles.body}
                titleStyle={styles.title}
                open={true}
                actions={[cancelButton, addButton]}
            >
                {layer.type === 'event' ?
                    <EventDialog
                        {...layer}
                        // onChange={(config) => this.onLayerChange(config)}
                    />
                : null}

                <Button>Add layer</Button>
                <Button raised color='primary'>Add layer</Button>
                <Button raised color='accent'>Add layer</Button>
                <Button raised color='accent' disabled>Add layer</Button>
                <div>_</div>

            </Dialog>
        );
    }
}

export default LayerEdit;


