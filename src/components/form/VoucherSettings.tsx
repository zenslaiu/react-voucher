import React, {useEffect, useState} from "react";
import StringGeneratorSettings from "../token/Generator/StringGeneratorSettings";
import {DefaultPairOfCharacters} from "../token/DefaultTokenStringCharacters";
import StringGenerator from "../token/Generator/StringGenerator";

function VoucherSettings(): React.JSX.Element {

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


    function addVoucherChars(e: any) {

        let value = e.target.value;
        const length: number = value.length;

        if (length >= voucherCodeLength) {
            value = value.substring(e.target.value.length - voucherCodeLength);
        }

        setCurrentVoucherCode(value);
    }


    function updateVoucherCodeLength(e: any) {
        const parsedValue = parseInt(e.target.value);
        const attributes = e.target.attributes;
        const max = parseInt(attributes.max.value);

        if (parsedValue > max) {
            e.target.value = max;
        }

        setVoucherCodeLength(e.target.value);
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3>
                    <strong>Settings</strong>
                </h3>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-5">
                        <label htmlFor="">
                            Code length
                        </label>

                        <input
                            type="number"
                            className={'form-control'}
                            id={'voucher-code-length'}
                            name={'voucher_code_length'}
                            min={5}
                            max={32}
                            placeholder={'Code length'}
                            defaultValue={voucherCodeLength}
                            onChange={e => updateVoucherCodeLength(e)}
                        />

                        <div>

                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="addNumbers"
                                name="addNumbers"
                                checked={addNumbers}
                                onChange={changeAddNumbers}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="addNumbers">
                                Add numbers
                            </label>

                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="addUppercaseLetters"
                                checked={addUpperCaseLetters}
                                name="addUppercaseLetters"
                                onChange={changeAddUpperCaseLetters}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="addUppercaseLetters"> Add uppercase letters</label>



                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="addLowercaseLetters"
                                checked={addLowerCaseLetters}
                                name="addLowercaseLetters"
                                onChange={changeAddLowerCaseLetters}
                            />
                            <label
                                className="form-check-label"
                                htmlFor="addLowercaseLetters"> Add lowercase letters
                            </label>
                        </div>

                    </div>

                    <div className="col-5">
                        <label htmlFor="voucher_code">Voucher code</label>
                        <input
                            type="text"
                            className={'form-control'}
                            name={'voucher_code'}
                            id={'voucher-code'}
                            placeholder={'Voucher code'}
                            value={currentVoucherCode}
                            onChange={(e) => addVoucherChars(e)}
                        />
                        <p>
                            Remaining characters {voucherCodeLength - currentVoucherCode.length}
                        </p>
                    </div>

                    <div className="col-2 justify-content-evenly">
                        <div>
                            <button type="button" className="btn btn-success btn-sm"
                                    disabled={disableGenerationOfCode}
                                    onClick={regenerateCode}>
                                Regenerate code
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VoucherSettings;
