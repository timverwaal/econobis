import axiosInstance from '../default-setup/AxiosInstance';

export default {
    fetchContact: function(id) {
        const requestUrl = `/jory/contact/${id}`;

        return axiosInstance.get(requestUrl, {
            params: {
                jory: {
                    fld: [
                        'number',
                        'fullName',
                        'firstName',
                        'lastName',
                        'iban',
                        'ibanAttn',
                        'didAgreeAvg',
                        'addressLines',
                    ],
                    rlt: {
                        person: {
                            fld: [
                                'id',
                                'firstName',
                                'lastName',
                                'initials',
                                'titleId',
                                'lastNamePrefix',
                                'dateOfBirth',
                            ],
                        },
                        emailAddresses: { fld: ['id', 'email', 'primary', 'typeId'] },
                        phoneNumbers: { fld: ['id', 'number', 'primary', 'typeId'] },
                        primaryAddress: {
                            fld: ['id', 'street', 'number', 'addition', 'postalCode', 'city', 'countryId'],
                        },
                        primaryContactEnergySupplier: {
                            fld: [
                                'id',
                                'energySupplierId',
                                'esNumber',
                                'eanElectricity',
                                'memberSince',
                                'isCurrentSupplier',
                            ],
                            rlt: { energySupplier: [] },
                            flt: {
                                f: 'isCurrentSupplier',
                                d: true,
                            },
                        },
                    },
                },
            },
        });
    },
};
