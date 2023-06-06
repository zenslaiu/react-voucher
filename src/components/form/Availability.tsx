import Input from "./Input";
import React from "react";
import {VoucherValueModel} from "../../models/VoucherValueModel";

export default function Availability(vvModel: VoucherValueModel): React.JSX.Element {

    const fieldClass: string = 'col-4';

    const fieldsIDs = {
        voucherIsAvailableFromDate: `voucher_is_available_from_date-${vvModel.voucher_id}`,
        voucherExpiresAtDate: `voucher_expires_at_date-${vvModel.voucher_id}`,
        voucherUsagesInThatTimePeriod: `voucher_usages_in_time_period-${vvModel.voucher_id}`,
        voucherValue: `voucher_value-${vvModel.voucher_id}`,
        voucherIsPercentage: `voucher_is_percentage-${vvModel.voucher_id}`,
    }


    function removeMe() {

    }

    return (
        <div className={'card mb-3'}>
            <div className="card-body">
                <div className="container-fluid">
                    <div className="row pl-0 pr-0">
                        <div className={'col-4'} data-voucher-id={vvModel.voucher_id}>
                            <div>
                                <label htmlFor={fieldsIDs.voucherIsAvailableFromDate}>
                                    Voucherul este disponibil de la
                                </label>
                                <br/>
                                <Input attributes={{
                                    type: 'datetime-local',
                                    className: ['form-control'],
                                    id: fieldsIDs.voucherIsAvailableFromDate,
                                    placeholder: 'Voucherul este disponibil de la data de'
                                }}
                                />
                            </div>
                        </div>

                        <div className={'col-4'}>
                            <div>
                                <label htmlFor={fieldsIDs.voucherExpiresAtDate}>
                                    Voucherul expira la
                                </label>
                                <br/>
                                <Input attributes={{
                                    type: 'datetime-local',
                                    className: ['form-control'],
                                    id: fieldsIDs.voucherExpiresAtDate,
                                    placeholder: 'Voucherul expira la data de',
                                }}
                                />
                            </div>
                        </div>


                        <div className={fieldClass}>
                            <div>
                                <label htmlFor={fieldsIDs.voucherUsagesInThatTimePeriod}>
                                    Utilizari maxime
                                </label>
                                <br/>
                                <Input attributes={{
                                    type: 'input',
                                    className: ['form-control'],
                                    id: fieldsIDs.voucherUsagesInThatTimePeriod,
                                    placeholder: 'Voucherul expira la data de',
                                    min: vvModel.voucher_usages_in_time_period
                                }}
                                />
                            </div>
                        </div>

                        <div className={'col-4'}>
                            <div>
                                <label htmlFor={fieldsIDs.voucherValue}>
                                    Valoarea voucherului
                                </label>
                                <br/>
                                <Input attributes={{
                                    type: 'number',
                                    className: ['form-control'],
                                    id: fieldsIDs.voucherValue,
                                    placeholder: 'Valoarea voucherului'
                                }}
                                />
                            </div>
                        </div>

                        <div className={'col-4'}>
                            <div className={'form-check'}>
                                <br/>
                                <Input attributes={{
                                    type: 'checkbox',
                                    className:['form-check-input'],
                                    id: fieldsIDs.voucherIsPercentage,
                                    placeholder: 'voucher_is_percentage'
                                }}
                                />
                                <label className={'form-check-label'} htmlFor={fieldsIDs.voucherIsPercentage}>
                                    Voucherul este procentual
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}