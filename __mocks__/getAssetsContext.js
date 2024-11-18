jest.mock('@/theme/assets/getAssetsContext', () => jest.fn((type) => {
    const context = (key) => {
        if (type === 'images') {
            return jest.mock('@/theme/assets/images/tom.png');
        }
        if (type === 'icons') {
            return jest.mock('@/theme/assets/icons/send.svg');
        }
        return key;
    };
    context.keys = () => {
        if (type === 'images') {
            return ['images/tom.png'];
        }
        if (type === 'icons') {
            return ['icons/send.svg'];
        }
        return [];
    };
    return context;
}));
export {};
