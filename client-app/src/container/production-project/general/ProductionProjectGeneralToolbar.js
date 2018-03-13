import React, {Component} from 'react';
import { connect } from 'react-redux';
import {browserHistory, hashHistory} from 'react-router';

import Panel from '../../../components/panel/Panel';
import PanelBody from '../../../components/panel/PanelBody';
import ButtonIcon from '../../../components/button/ButtonIcon';
import ButtonText from "../../../components/button/ButtonText";

class ProductionProjectGeneralToolbar extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { productionProject }  = this.props;

        return (
            <div className="row">
                <div className="col-sm-12">
                    <Panel>
                        <PanelBody className={"panel-small"}>
                            <div className="col-md-2">
                                <div className="btn-group margin-small" role="group">
                                    <ButtonIcon iconName={"glyphicon-arrow-left"} onClickAction={browserHistory.goBack} />
                                    <ButtonText buttonText={`Open detailformulier`}  onClickAction={() => hashHistory.push(`/productie-project/details/${productionProject.id}`)} />
                                </div>
                            </div>
                            <div className="col-md-8"><h4 className="text-center text-success margin-small"><strong>Productie project {productionProject ? productionProject.name : ''}</strong></h4></div>
                            <div className="col-md-2" />
                        </PanelBody>
                    </Panel>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        productionProject: state.productionProjectDetails,
        permissions: state.meDetails.permissions,
    }
};

export default connect(mapStateToProps)(ProductionProjectGeneralToolbar);
