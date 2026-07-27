import { API } from "@/shared/lib/api/axios";
import { ApiEnvelope } from "@/shared/lib/api/apiResponseTypeEnvelope";


export type MeasurementsType = {
    bust?: number;
    underBust?: number;
    acrossChest?: number;
    acrossBack?: number;
    shoulderWidth?: number;
    neckCircumference?: number;
    bustPointToBustPoint?: number;
    shoulderToBustPoint?: number;
    shoulderToWaist?: number;
    frontWaistLength?: number;
    backWaistLength?: number;
    waist?: number;
    highHip?: number;
    fullHip?: number;
    waistToHip?: number;
    armhole?: number;
    bicepCircumference?: number;
    sleeveLength?: number;
    elbowCircumference?: number;
    wristCircumference?: number;
    thighCircumference?: number;
    kneeCircumference?: number;
    calfCircumference?: number;
    ankleCircumference?: number;
    crotch?: number;
    trouserInseam?: number;
    trouserOutseam?: number;
    waistToKnee?: number;
    fullDressLength?: number;
    waistToFloor?: number;
}

export type CreateOrderPayload = {
    clientName: string;
    clientPhone: string;
    clientEmail: string;
    clientAddress: string;
    garmentType: string;
    quantity: number;
    deadline: string;
    description: string;
    measurement: MeasurementsType;
}


export async function createOrder(payload: CreateOrderPayload){
    const { data } = await API.post('/order/custom', payload)
    return data
}