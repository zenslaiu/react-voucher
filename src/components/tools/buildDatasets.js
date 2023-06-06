export const buildDatasets = (datasets) => {

    const hasData = Object.keys(datasets).length > 0;

    let attributes = {};

    if (hasData) {

        const entries = Object.entries(datasets).map(([key, value]) => {
            const dataKey = `data-${key}`;
            return {[dataKey]: value}
        })

        entries.forEach((entry) => {
            attributes = {...attributes, ...entry};
        });
    }

    return attributes;

}