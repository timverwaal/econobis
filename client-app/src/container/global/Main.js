import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

import { toggleSidebarClose, toggleSidebarOpen } from '../../actions/general/SidebarActions';
import { fetchMeDetails } from '../../actions/general/MeDetailsActions';
import { fetchSystemData } from '../../actions/general/SystemDataActions';
import NavHeader from '../../components/navigationHeader/NavHeader';
import Sidebar from '../../components/navigationSidebar/Sidebar';
import LoadingPage from './LoadingPage';
import ErrorPage from './ErrorPage';
import Content from './Content';
import AuthAPI from "../../api/general/AuthAPI";
import {hashHistory} from "react-router";


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuActive: false,
            changePasswordActive: false,
        };

        const token = localStorage.getItem('access_token');

        if (this.props.authenticated && token) {
            props.fetchMeDetails();
        }

        this.onMenuEnter = this.onMenuEnter.bind(this);
        this.onMenuLeave = this.onMenuLeave.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleChangePassword = this.toggleChangePassword.bind(this);
    }

    componentDidMount() {
        const token = localStorage.getItem('access_token');

        if (this.props.authenticated && token) {
            this.props.fetchSystemData();
        }
    }

    onMenuEnter() {
        this.setState({
            menuActive: true,
        });
    }

    onMenuLeave() {
        this.setState({
            menuActive: false,
        });
    }

    toggleMenu() {
        this.setState({
            menuActive: !this.state.menuActive,
        });
    }

    toggleChangePassword() {
        this.setState({
            changePasswordActive: !this.state.changePasswordActive,
        });
    }

    render() {
        const contentClass = (this.state.menuActive ? 'content open' : 'content');

        return (
          <div>
              {
                    this.props.systemDataHasError || this.props.meDetailsHasError ?
                      <ErrorPage />
                        :
                        this.props.systemDataLoaded && this.props.meDetailsLoaded ?
                            <BlockUi tag="div" blocking={this.props.blockUI} className={"full-screen-loading"} message={"Moment geduld, de gegevens worden opgehaald"}>
                                <div className="wrapper">
                                    <div>
                                        <NavHeader toggleMenu={this.toggleMenu} toggleChangePassword={this.toggleChangePassword}/>
                                        <Sidebar onMenuEnter={this.onMenuEnter} onMenuLeave={this.onMenuLeave} menuActive={this.state.menuActive} />
                                    </div>

                                    <div className={ contentClass }>
                                        <div className="container-fluid">
                                            <div className="col-md-12">
                                                <Content children={this.props.children} menuActive={this.state.menuActive} toggleChangePassword={this.toggleChangePassword} changePasswordActive={this.state.changePasswordActive}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </BlockUi>
                            :
                          <LoadingPage />
                }
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.auth.authenticated,
        systemDataLoaded: state.systemData.isLoaded,
        systemDataHasError: state.systemData.hasError,
        meDetailsLoaded: state.meDetails.isLoaded,
        meDetailsHasError: state.meDetails.hasError,
        blockUI: state.blockUI.blocked,
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchMeDetails, fetchSystemData, toggleSidebarClose, toggleSidebarOpen }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
