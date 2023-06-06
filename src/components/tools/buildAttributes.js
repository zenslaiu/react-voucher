
import {buildDatasets} from "./buildDatasets";
import {buildClasses} from "./buildClasses";
import {buildId} from "./buildId";


export const buildAttributes = (attributes) => {

    let finalAttributes = {};

    attributes.forEach((attribute, value) => {
        console.log(attribute, value);
    });


    return {};

    //
    //
    // const hasID = attributes.hasOwnProperty('id') && attributes.id.length > 0;
    // const classNames = attributes.className || [];
    // const datasets = attributes.dataset || {};
    // return {
    //     ...(hasID && buildId(attributes.id)),
    //     ...buildClasses(classNames),
    //     ...buildDatasets(datasets)
    // };
}


