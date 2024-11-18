import { config } from '@/theme/_config';
function hasProperty(configuration, property) {
    const parts = property.split('.');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let currentObj = configuration;
    for (let i = 0; i < parts.length; i += 1) {
        const part = parts[i];
        if (!(part in currentObj)) {
            return false;
        }
        currentObj = currentObj[part];
    }
    return true;
}
export default (variant) => {
    const { variants, ...defaultConfig } = config;
    const variantConfig = variant !== 'default' ? variants[variant] : null;
    const fontColors = {
        ...defaultConfig.fonts.colors,
        ...(variantConfig && hasProperty(variantConfig, 'fonts.colors')
            ? variantConfig.fonts.colors
            : {}),
    };
    const backgroundColors = {
        ...defaultConfig.backgrounds,
        ...(variantConfig && hasProperty(variantConfig, 'backgrounds')
            ? variantConfig.backgrounds
            : {}),
    };
    const borderColors = {
        ...defaultConfig.borders.colors,
        ...(variantConfig && hasProperty(variantConfig, 'borders.colors')
            ? variantConfig.borders.colors
            : {}),
    };
    const navigationColors = {
        ...defaultConfig.navigationColors,
        ...(variantConfig && hasProperty(variantConfig, 'navigationColors')
            ? variantConfig.navigationColors
            : {}),
    };
    const colors = {
        ...defaultConfig.colors,
        ...(variantConfig && hasProperty(variantConfig, 'colors')
            ? variantConfig.colors
            : {}),
    };
    return {
        backgrounds: backgroundColors,
        borders: {
            colors: borderColors,
            radius: defaultConfig.borders.radius,
            widths: defaultConfig.borders.widths,
        },
        colors,
        fonts: {
            colors: fontColors,
            sizes: defaultConfig.fonts.sizes,
        },
        gutters: defaultConfig.gutters,
        navigationColors,
    };
};
