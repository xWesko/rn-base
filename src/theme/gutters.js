export const generateGutters = (configuration) => {
    return configuration.gutters.reduce((acc, curr) => {
        return Object.assign(acc, {
            [`gap_${curr}`]: {
                gap: curr,
            },
            [`margin_${curr}`]: {
                margin: curr,
            },
            [`marginBottom_${curr}`]: {
                marginBottom: curr,
            },
            [`marginHorizontal_${curr}`]: {
                marginHorizontal: curr,
            },
            [`marginLeft_${curr}`]: {
                marginLeft: curr,
            },
            [`marginRight_${curr}`]: {
                marginRight: curr,
            },
            [`marginTop_${curr}`]: {
                marginTop: curr,
            },
            [`marginVertical_${curr}`]: {
                marginVertical: curr,
            },
            [`padding_${curr}`]: {
                padding: curr,
            },
            [`paddingBottom_${curr}`]: {
                paddingBottom: curr,
            },
            [`paddingHorizontal_${curr}`]: {
                paddingHorizontal: curr,
            },
            [`paddingLeft_${curr}`]: {
                paddingLeft: curr,
            },
            [`paddingRight_${curr}`]: {
                paddingRight: curr,
            },
            [`paddingTop_${curr}`]: {
                paddingTop: curr,
            },
            [`paddingVertical_${curr}`]: {
                paddingVertical: curr,
            },
        });
    }, {});
};
export const staticGutterStyles = {};
