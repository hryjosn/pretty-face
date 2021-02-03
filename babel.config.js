module.exports = {
    presets: [
        'module:metro-react-native-babel-preset',
        'module:react-native-dotenv',
    ],
    plugins: [
        [
            '@babel/plugin-proposal-decorators',
            {
                legacy: true,
            },
        ],
        [
            'module-resolver',
            {
                root: ['./src'],
                extensions: ['.js', '.json'],
                alias: {
                    '@translations': './src/translations',
                    '@styles': './src/styles',
                    '@components': './src/components',
                    '@container': './src/container',
                    '@store': './src/store',
                    '@api': './src/api/api',
                    '@constants': './src/constants',
                    '@helpers': './src/helpers',
                    '@image': './src/image',
                    '@validators': './src/helpers/validators',
                },
            },
        ],
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-proposal-nullish-coalescing-operator',
    ],
};
