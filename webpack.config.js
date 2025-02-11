import { DefinePlugin } from 'webpack';

export const plugins = [
    new DefinePlugin({
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(true),
    }),
];
