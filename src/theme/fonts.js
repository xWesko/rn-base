import { config } from '@/theme/_config';
export const generateFontColors = (configuration) => {
    return Object.entries(configuration.fonts.colors ?? {}).reduce((acc, [key, value]) => {
        return Object.assign(acc, {
            [`${key}`]: {
                color: value,
            },
        });
    }, {});
};
export const generateFontSizes = () => {
    return config.fonts.sizes.reduce((acc, size) => {
        return Object.assign(acc, {
            [`size_${size}`]: {
                fontSize: size,
            },
        });
    }, {});
};
export const staticFontStyles = {
    alignCenter: {
        textAlign: 'center',
    },
    bold: {
        fontWeight: 'bold',
    },
    capitalize: {
        textTransform: 'capitalize',
    },
    uppercase: {
        textTransform: 'uppercase',
    },
};
