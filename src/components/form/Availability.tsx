
import React, {useEffect, useState} from "react";
import {VoucherValueModel} from "../../models/VoucherValueModel";

export default function Availability(vv: VoucherValueModel): React.JSX.Element {

    const fieldClass: string = 'col-4';
    const [voucherIsPercentage, setValueIsPercentage] = useState(false);
    const [voucherValue, setVoucherValue] = useState(0.1);

    const fieldsIDs = {
        voucherIsAvailableFromDate: `voucher_is_available_from_date-${vv.voucher_id}`,
        voucherExpiresAtDate: `voucher_expires_at_date-${vv.voucher_id}`,
        voucherUsagesInThatTimePeriod: `voucher_usages_in_time_period-${vv.voucher_id}`,
        voucherValue: `voucher_value-${vv.voucher_id}`,
        voucherIsPercentage: `voucher_is_percentage-${vv.voucher_id}`,
    }

    function changeValueIsPercentage() {
        setValueIsPercentage(isPercentage => !isPercentage);
    }

    useEffect(() => {
        if (voucherIsPercentage && voucherValue > 100) {
            setVoucherValue(0);
        }
    }, [voucherIsPercentage, voucherValue])

    function updateVoucherValue(e: React.ChangeEvent<HTMLInputElement>) {
        let value:number = parseFloat(e.target.value);

        if (voucherIsPercentage && value > 100) {
            value = 100;
        }

        setVoucherValue(value);
    }

    return (
        <div className={'card mb-3'}>
            <div className="card-body">
                <div className="container-fluid">
                    <div className="row pl-0 pr-0">
                        <div className={'col-4'} data-voucher-id={vv.voucher_id}>
                            <div>
                                <label htmlFor={fieldsIDs.voucherIsAvailableFromDate}>
                                    Voucher is available from date
                                </label>
                                <br/>

                                <input type="datetime-local"
                                       className={'form-control'}
                                       name={`voucher_availability[${vv.voucher_id}][start_date]`}
                                       id={fieldsIDs.voucherIsAvailableFromDate}
                                       placeholder={'Voucher is available from date'}
                                />
                            </div>
                        </div>

                        <div className={'col-4'}>
                            <div>
                                <label htmlFor={fieldsIDs.voucherExpiresAtDate}>
                                    Voucher expires at date
                                </label>
                                <br/>
                                <input
                                    type="datetime-local"
                                    className="form-control"
                                    name={`voucher_availability[${vv.voucher_id}][expiry_date]`}
                                    id={fieldsIDs.voucherExpiresAtDate}
                                    placeholder="Voucher expires at date"
                                />
                            </div>
                        </div>


                        <div className={fieldClass}>
                            <div>
                                <label htmlFor={fieldsIDs.voucherUsagesInThatTimePeriod}>
                                    Max usages
                                </label>
                                <br/>

                                <input
                                    type="number"
                                    className={'form-control'}
                                    name={`voucher_availability[${vv.voucher_id}][max_usages]`}
                                    id={fieldsIDs.voucherUsagesInThatTimePeriod}
                                    placeholder={'Max usages'}
                                    min={vv.voucher_usages_in_time_period}
                                />
                            </div>
                        </div>

                        <div className={'col-4'}>
                            <div>
                                <label htmlFor={fieldsIDs.voucherValue}>
                                    Value
                                </label>
                                <br/>

                                <input
                                    type="number"
                                    className={'form-control'}
                                    name={`voucher_availability[${vv.voucher_id}][voucher_value]`}
                                    id={fieldsIDs.voucherValue}
                                    placeholder={'Voucher value'}
                                    {...(voucherIsPercentage && {
                                        min:0,
                                        max:100
                                    })}
                                    value={voucherValue}
                                    step={0.01}
                                    onChange={e => updateVoucherValue(e)}
                                />
                            </div>
                        </div>

                        <div className={' col-4'}>
                            <div className={' form-check'}>
                                <br/>

                                <input
                                    type="checkbox"
                                    className={'form-check-input'}
                                    name={`voucher_availability[${vv.voucher_id}][is_percentage ]`}
                                    id={fieldsIDs.voucherIsPercentage}
                                    onChange={changeValueIsPercentage}
                                />
                                <label className={'form-check-label'} htmlFor={fieldsIDs.voucherIsPercentage}>
                                    Value is percentage (1 to 100)
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}