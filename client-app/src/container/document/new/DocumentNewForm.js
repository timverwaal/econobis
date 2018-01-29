import React from 'react';

import DocumentNewFormGeneral from "./general/DocumentNewFormGeneral";
import PanelFooter from "../../../components/panel/PanelFooter";
import Panel from "../../../components/panel/Panel";
import PanelBody from "../../../components/panel/PanelBody";
import ButtonText from '../../../components/button/ButtonText';
import DocumentNewFormCreateDocument from "./create-document/DocumentNewFormCreateDocument";
import DocumentNewFormUpload from "./upload/DocumentNewFormUpload";

const DocumentNewForm = ({document, contacts, contactGroups, templates, registrations, opportunities, errors, handleSubmit, handleInputChange, handleDocumentGroupChange, onDropAccepted, onDropRejected}) => {
    const submitText = document.documentType === 'internal' ? 'Maak document' : 'Upload document';

    return (
        <form className="form-horizontal" onSubmit={handleSubmit}>
            <Panel>
                <PanelBody>
                    <DocumentNewFormGeneral
                        document={document}
                        contacts={contacts}
                        contactGroups={contactGroups}
                        registrations={registrations}
                        opportunities={opportunities}
                        errors={errors}
                        handleInputChange={handleInputChange}
                    />
                    {
                        document.documentType === 'internal' ?
                            <DocumentNewFormCreateDocument
                                document={document}
                                errors={errors}
                                handleInputChange={handleInputChange}
                                templates={templates}
                                handleDocumentGroupChange={handleDocumentGroupChange}
                            />
                            :
                            <DocumentNewFormUpload
                                document={document}
                                errors={errors}
                                handleInputChange={handleInputChange}
                                onDropAccepted={onDropAccepted}
                                onDropRejected={onDropRejected}
                            />
                    }

                    <PanelFooter>
                        <div className="pull-right">
                            <ButtonText buttonText={submitText} onClickAction={handleSubmit} type={"submit"} value={"Submit"}/>
                        </div>
                    </PanelFooter>
                </PanelBody>
            </Panel>
        </form>
    );
};

export default DocumentNewForm;