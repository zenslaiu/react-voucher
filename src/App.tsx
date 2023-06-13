import './App.css';
import React, {useEffect, useState} from "react";
import {DefaultPairOfCharacters} from "./components/token/DefaultTokenStringCharacters";
import StringGeneratorSettings from "./components/token/Generator/StringGeneratorSettings";
import StringGenerator from "./components/token/Generator/StringGenerator";
import Availability from "./components/form/Availability";
import {Voucher} from "./models/Voucher";
import {debug} from "util";
import VoucherSettings from "./components/form/VoucherSettings";
import AvailabilityPeriodCard from "./components/form/AvailabilityPeriodCard";

function App(): React.JSX.Element {


    // @ts-ignore
    function addVoucherToLocalStorage(e) {
        e.preventDefault();

        debugger;
        const voucher = new Voucher();
        voucher.voucher_id = crypto.randomUUID();
        voucher.voucher_code = e.target.elements.voucher_code.value;

        console.log(voucher);
    }

    return (
        <div>
            <br/>
            <form method='post' onSubmit={addVoucherToLocalStorage}>
                <div className="row">
                    <div className="col-12">
                        <VoucherSettings/>
                    </div>
                    <div className="col-12">
                        <br/>
                    </div>
                    <div className="col-12">
                        <AvailabilityPeriodCard/>
                    </div>
                </div>

                <div className="p2-5 mt-3 text-end">
                    <button type="submit" className="btn btn-success">Adauga voucher</button>
                </div>

            </form>
        </div>
    );
}

export default App;
