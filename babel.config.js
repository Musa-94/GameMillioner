module.exports = {
    env: {
        test: {
            presets: [
                ['@babel/preset-env'],
                ['@babel/preset-react'],
            ],
            plugins: [
                'babel-plugin-styled-components',
                'babel-plugin-dynamic-import-node',
                ['@babel/plugin-proposal-decorators', { legacy: true }],
                ['@babel/plugin-proposal-class-properties', { loose: true }],
                '@babel/plugin-transform-runtime',
            ],
        },
    },
};