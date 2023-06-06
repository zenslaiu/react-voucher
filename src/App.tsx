import './App.css';
import Input from "./components/form/Input";
import React, {useState} from "react";
import {DefaultPairOfCharacters} from "./components/token/DefaultTokenStringCharacters";
import StringGeneratorSettings from "./components/token/Generator/StringGeneratorSettings";
import StringGenerator from "./components/token/Generator/StringGenerator";
import Availability from "./components/form/Availability";
import {VoucherValueModel} from "./models/VoucherValueModel";

function App(): React.JSX.Element {

    const [numberOfAvailabilityPeriods, setNumberOfAvailabilityPeriods] = useState(1);

    const [availabilityContent, setAvailabilityContent] = useState([
        <Availability
            voucher_id={crypto.randomUUID()}
            key={crypto.randomUUID()}
            voucher_is_available_from_date={''}
            voucher_expires_at_date={''}
            voucher_usages_in_time_period={10}
            voucher_value={5}
            voucher_is_percentage={false}
        />
    ]);

    // let i = 0;
    // while (i < numberOfAvailabilityPeriods) {
    //     setAvailabilityContent((availabilityContent) => [...availabilityContent, <Availability />])
    // }

    const pairs: DefaultPairOfCharacters = new DefaultPairOfCharacters();
    const generatorSettings: StringGeneratorSettings = new StringGeneratorSettings();
    const generator: StringGenerator = new StringGenerator(pairs, generatorSettings);

    function addAvailabilityPeriod() {
        setNumberOfAvailabilityPeriods(counter => ++counter);
        // @ts-ignore
        setAvailabilityContent(availabilityContent => [...availabilityContent, [
            <Availability
                voucher_id={crypto.randomUUID()}
                key={crypto.randomUUID()}
                voucher_is_available_from_date={''}
                voucher_expires_at_date={''}
                voucher_usages_in_time_period={10}
                voucher_value={5}
                voucher_is_percentage={false}
            />
        ]]);
    }

    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <form action="" method='post'>
            <br/>

            <div className="container-fluid">
                <div className="row">

                    <div className="card">
                        <div className="card-header">
                            <div className="card">
                                <div className="card-header">
                                    Setari
                                </div>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-6">
                                            <label htmlFor="">
                                                Lungime Cod
                                            </label>
                                            <Input attributes={{
                                                type: 'number',
                                                className: ['form-control'],
                                                id: 'voucher_code',
                                                name: "codeLength",
                                                min: 6,
                                                max: 15,
                                                placeholder: 'Lungime cod'
                                            }}/>
                                        </div>

                                        <div className="col-6">
                                            <label htmlFor="voucher_code">Cod Voucher</label>
                                            <Input attributes={{
                                                type: 'text',
                                                className: ['form-control'],
                                                id: 'voucher_code',
                                                placeholder: 'Cod voucher'
                                            }}
                                            />
                                        </div>

                                        <div className="col-12">
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">
                                                    <Input attributes={{
                                                        type: 'checkbox',
                                                        className: ['form-check-input'],
                                                        id: 'addNumbers',
                                                        name: "addNumbers"
                                                    }}/>
                                                    <label className="form-check-label" htmlFor="addNumbers"> Adauga numere</label>
                                                </li>
                                                <li className="list-group-item">
                                                    <Input attributes={{
                                                        type: 'checkbox',
                                                        className: ['form-check-input'],
                                                        id: 'addUppercaseLetters',
                                                        name: "addUppercaseLetters"
                                                    }}/>
                                                    <label className="form-check-label" htmlFor="addUppercaseLetters"> Adauga Litere mari</label>
                                                </li>
                                                <li className="list-group-item">
                                                    <Input attributes={{
                                                        type: 'checkbox',
                                                        className: ['form-check-input'],
                                                        id: 'addLowercaseLetters',
                                                        name: "addLowercaseLetters"
                                                    }}/>
                                                    <label className="form-check-label" htmlFor="addLowercaseLetters"> Adauga Litere mici</label>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Disponibilitate voucher</h3>
                                </div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <button type={"button"} onClick={addAvailabilityPeriod}
                                                className={"btn btn-primary"}>Adauga o disponitiblitate
                                        </button>
                                    </div>
                                    <div id={"availability"}>
                                        <div className="container-fluid">
                                            <div className="row">
                                                {availabilityContent}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default App;
