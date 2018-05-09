import React from 'react';

import OrderDetailsFormConclusionView from './OrderDetailsFormConclusionView';
import Panel from '../../../../../components/panel/Panel';
import PanelBody from '../../../../../components/panel/PanelBody';
import PanelHeader from '../../../../../components/panel/PanelHeader';

const OrderDetailsFormConclusion = props => {
    return (
        <Panel>
            <PanelHeader>
                <span className="h5 text-bold">Afsluiting gegevens</span>
            </PanelHeader>
            <PanelBody>
                <div className="col-md-12">
                    <OrderDetailsFormConclusionView />
                </div>
            </PanelBody>
        </Panel>
    );
};

export default OrderDetailsFormConclusion;