import './App.css';
import Input from "./components/form/Input";
import React, {useEffect, useState} from "react";
import {DefaultPairOfCharacters} from "./components/token/DefaultTokenStringCharacters";
import StringGeneratorSettings from "./components/token/Generator/StringGeneratorSettings";
import StringGenerator from "./components/token/Generator/StringGenerator";
import Availability from "./components/form/Availability";

function App(): React.JSX.Element {

    const generatorSettings: StringGeneratorSettings = new StringGeneratorSettings();
    const defaultPairOfCharacters = new DefaultPairOfCharacters();

    const [voucherCodeLength, setVoucherCodeLength] = useState(generatorSettings.codeLength);
    const [addUpperCaseLetters, setAddUpperCaseLetters] = useState(defaultPairOfCharacters.addUpperCaseCharacters);
    const [addLowerCaseLetters, setAddLowerCaseLetters] = useState(defaultPairOfCharacters.addLowerCaseCharacters);
    const [addNumbers, setAddNumbers] = useState(defaultPairOfCharacters.addNumbers);
    const [disableGenerationOfCode, setToDisableRegenerateVoucherCode] = useState(false);

    generatorSettings.codeLength = voucherCodeLength;
    defaultPairOfCharacters.addUpperCaseCharacters = addUpperCaseLetters;
    defaultPairOfCharacters.addLowerCaseCharacters = addLowerCaseLetters;
    defaultPairOfCharacters.addNumbers = addNumbers;

    const [currentVoucherCode, setCurrentVoucherCode] = useState(generateNewVoucherCode());

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

    function addAvailabilityPeriod() {
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

    function generateNewVoucherCode(): string {
        const generator: StringGenerator = new StringGenerator(defaultPairOfCharacters, generatorSettings);
        return generator.generate();
    }

    function regenerateCode(): void {
        const generatedCode: string = generateNewVoucherCode();
        setCurrentVoucherCode(generatedCode);
    }

    useEffect(() => {
        regenerateCode();
        const allSettingsAreDisabled = addNumbers === false && addLowerCaseLetters === false && addUpperCaseLetters === false;
        setToDisableRegenerateVoucherCode(allSettingsAreDisabled);
        // setToAutomaticallyGenerateCode(voucherCodeLength  <= 0);

    }, [addUpperCaseLetters, addLowerCaseLetters, addNumbers, voucherCodeLength])

    function changeAddUpperCaseLetters() {
        setAddUpperCaseLetters((addUpperCaseLetters: boolean) => !addUpperCaseLetters);
    }

    function changeAddLowerCaseLetters() {
        setAddLowerCaseLetters((addLowerCaseLetters: boolean) => !addLowerCaseLetters);
    }

    function changeAddNumbers() {
        setAddNumbers((addNumbers: boolean) => !addNumbers);
    }

    // @ts-ignore
    function addVoucherToLocalStorage(e) {
        e.preventDefault();
        alert();
    }

    function addVoucherChars(e: any) {

        let value = e.target.value;
        const length: number = value.length;

        if (length >= voucherCodeLength) {
            value = value.substring(e.target.value.length - voucherCodeLength);
        }

        setCurrentVoucherCode(value);
    }

    return (
        <div>
            <br/>
            <form method='post' onSubmit={addVoucherToLocalStorage}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="card p-0 m-0">
                            <div className="card-header">
                                <div className="card">
                                    <div className="card-header">
                                        <h3>
                                            <strong>Setari</strong>
                                        </h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-5">
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
                                                    placeholder: 'Lungime cod',
                                                    defaultValue: voucherCodeLength,
                                                    onChange: ((e: any) => setVoucherCodeLength(e.target.value))
                                                }}/>
                                            </div>

                                            <div className="col-5">
                                                <label htmlFor="voucher_code">Cod Voucher</label>
                                                <input
                                                    type="text"
                                                    className={'form-control'}
                                                    id={'voucher-code'}
                                                    placeholder={'Cod voucher'}
                                                    value={currentVoucherCode}
                                                    onChange={(e) => addVoucherChars(e)}
                                                />
                                                <p>
                                                    Caractere ramase {voucherCodeLength - currentVoucherCode.length}
                                                </p>
                                            </div>

                                            <div className="col-2 justify-content-evenly">
                                                <div>
                                                    <button type="button" className="btn btn-success btn-sm"
                                                            disabled={disableGenerationOfCode}
                                                            onClick={regenerateCode}>
                                                        Regenereaza cod
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="col-12">
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item">

                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="addNumbers"
                                                            name="addNumbers"
                                                            checked={addNumbers}
                                                            onChange={changeAddNumbers}
                                                        />
                                                        <label className="form-check-label" htmlFor="addNumbers">
                                                            Adauga numere
                                                        </label>
                                                    </li>
                                                    <li className="list-group-item">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="addUppercaseLetters"
                                                            checked={addUpperCaseLetters}
                                                            name="addUppercaseLetters"
                                                            onChange={changeAddUpperCaseLetters}
                                                        />
                                                        <label className="form-check-label"
                                                               htmlFor="addUppercaseLetters"> Adauga Litere mari</label>
                                                    </li>
                                                    <li className="list-group-item">

                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id="addLowercaseLetters"
                                                            checked={addLowerCaseLetters}
                                                            name="addLowercaseLetters"
                                                            onChange={changeAddLowerCaseLetters}
                                                        />
                                                        <label className="form-check-label"
                                                               htmlFor="addLowercaseLetters"> Adauga Litere mici</label>
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
                                                    className={"btn btn-dark"}>Adauga o disponitiblitate
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
                <div className="p2-5 mt-3 text-end">
                    <button type="submit" className="btn btn-success">Adauga voucher</button>
                </div>
            </form>
        </div>
    );
}

export default App;
