export class VoucherValueModel {

    // @ts-ignore

    public voucher_id:int;

    public voucher_is_available_from_date: string = '';
    // @ts-ignore

    public voucher_expires_at_date: string = '';
    // @ts-ignore

    public voucher_usages_in_time_period: number = 10;

    // @ts-ignore
    public voucher_value: number = 0;

    // @ts-ignore
    public voucher_is_percentage: boolean = false;

}
