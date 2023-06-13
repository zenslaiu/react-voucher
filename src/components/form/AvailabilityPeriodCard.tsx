import React, {useState} from "react";
import Availability from "./Availability";


function AvailabilityPeriodCard () {

    const [availabilityContent, setAvailabilityContent] = useState([
        <Availability
            voucher_id={0}
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
                voucher_id={availabilityContent.length}
                key={crypto.randomUUID()}
                voucher_is_available_from_date={''}
                voucher_expires_at_date={''}
                voucher_usages_in_time_period={10}
                voucher_value={5}
                voucher_is_percentage={false}
            />
        ]]);
    }

    return (
        <div className="card">
            <div className="card-header">
                <h3 className="card-title">Availability periods and values</h3>
            </div>
            <div className="card-body">
                <div className="mb-3">
                    <button type={"button"} onClick={addAvailabilityPeriod}
                            className={"btn btn-dark"}>Add a new period with his settings
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
    )
}

export default AvailabilityPeriodCard;