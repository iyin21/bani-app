export interface PaymentInterface{
    phoneNumber: string;
    firstName: string;
    lastName: string;
    emailAddress: string;
    message?: string;
    amount?: string;
    quantity?: string;
}
export interface PaymentDataInterface{
    payment: PaymentInterface|null
}