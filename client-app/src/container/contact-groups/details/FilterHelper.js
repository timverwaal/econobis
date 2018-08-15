export default (type, field) => {
    switch (type) {
        case 'field':
            switch (field) {
                case 'id': return 'Id';
                case 'number': return 'Contact nummer';
                case 'typeId': return 'Type id';
                case 'fullName': return 'Naam';
                case 'streetAndNumber': return 'Straat';
                case 'postalCode': return 'Postcode';
                case 'city': return 'Woonplaats';
                case 'emailAddress': return 'E-mailadres';
                case 'phoneNumber': return 'Telefoon nummer';
                case 'statusId': return 'Status id';
                case 'name': return 'Naam';
                case 'postalCodeNumber': return 'Postcode nummer';
                case 'currentParticipations': return 'Aantal participaties';
                case 'occupation': return 'Verbinding';
                case 'opportunity': return 'Kans';
                case 'product': return 'Product';
            }
            break;
        case 'comperator':
            switch (field) {
                case 'eq': return 'gelijk aan';
                case 'neq': return 'niet gelijk aan';
                case 'lt': return 'kleiner dan';
                case 'lte': return 'kleiner of gelijk aan';
                case 'gt': return 'groter dan';
                case 'gte': return 'groter dan of gelijk aan';
                case 'nl': return 'is leeg';
                case 'nnl': return 'is niet leeg';
                case 'bw': return 'begint met';
                case 'nbw': return 'begint niet met';
                case 'ew': return 'eindigd met';
                case 'new': return 'eindigd niet met';
            }
    }
};
