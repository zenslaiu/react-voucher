import {VoucherValueModel} from "./VoucherValueModel";
import {Voucher} from "./Voucher";

export class VoucherPackage {
    private _Voucher: Voucher;
    private _VoucherValueModels: VoucherValueModel[];

    constructor(Voucher:Voucher, VoucherValueModels: VoucherValueModel[]) {
        this._Voucher = Voucher;
        this._VoucherValueModels = VoucherValueModels;
    }

    set Voucher(value: Voucher) {
        this._Voucher = value;
    }

    set VoucherValueModels(value: VoucherValueModel[]) {
        this._VoucherValueModels = value;
    }

    get Voucher(): Voucher {
        return this._Voucher;
    }

    get VoucherValueModels(): VoucherValueModel[] {
        return this._VoucherValueModels;
    }
}

