export type CardInformationDTO = {
    holder: string;
    number: string;
    expire: {
        month: string;
        year: string;
    };
    cvc: string;
};
