// Generated using webpack-cli https://github.com/webpack/webpack-cli

/**
 * ? webpack.config.js
 * * 본 설정 파일에는 총 3가지의 주요기능이 포함된다.
 * * ctrl+f를 통해 정보를 따로 확인하시길 바랍니다.
 * * 
 * * 1. isProduction
 * * - 여기서 설명하는 process.env.NODE_ENV는 node.js에서 제공하는 환경변수이다.
 * * - == 동등 연산자를 사용하는 것이 맘에 들지 않지만, 검증된 설정 파일 자동으로 셋팅한 것으로 확인만 한다.
 * * 2. config 객체
 * * 3. module.exports
 * * 
 * * 1, 2, 3번을 따로 확인하면 보다 수월하게 이해할 수 있을 것
 * * 해당 파일은 webpack SW가 읽어들이는 용도이기 때문에,
 * * 프로젝트 코드와는 전혀 관계가 없다.
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    //  * entry, output 필드는 webpack의 핵심이다.
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    // * plugins 필드는 webpack의 확장 기능이다. (플러그인)
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
        }),

        // Add your plugins here
        // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    ],
    // * module 필드는 webpack의 확장 기능이다. (loader 로더)

    /**
     * loader, loading 개념이 매우 중요, webpack은 기본적으로 javascript 및 json 파일만 이해한다.
     * 따라서, webpack은 css, 이미지, 폰트와 같은 비 Javascript파일을 처리할 수 없다.
     * 로더는 webpack이 JS파일이 아닌 모든 유형의 파일을 처리할 수 있도록 도와준다.
     * 로더는 webpack.config.js 파일의 module.rules 필드에 정의된다.
     * 
     * * 난이도가 높은 설명 : module.rules는 로더를 정의하는 배열이다.
     * * 난이도가 높은 설명 : 각 로더는 test, use, include, exclude 및 기타 속성을 가진 객체이다.
     * * 난이도가 높은 설명 : 테스트는 로더가 처리할 파일을 지정하는 정규식이다.
     * * 난이도가 높은 설명 : 사용은 로더가 처리할 파일에 대한 경로를 지정하는 문자열이다.
     * * 난이도가 높은 설명 : include는 로더가 처리할 파일에 대한 경로를 지정하는 문자열이다.
     * *난이도가 높은 설명 : exclude는 로더가 처리하지 않을 파일에 대한 경로를 지정하는 문자열이다.
     * 
     * * 기타 속성은 로더가 처리할 파일에 대한 경로를 지정하는 문자열이다.
     * * 로더는 오른쪽에서 왼쪽으로 실행된다. ★ (매우 중요한 부분)
     * * 배열의 마지막 순부터 읽어 들인다.
     */
    module: {
        rules: [
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
};

module.exports = () => {
    // * 아래의 config 객체의 mode 필드를 동적으로 할당하는 코드이다.
    // * config 객체에 mode key가 추가된 채 내보내진다.
    if (isProduction) {
        config.mode = 'production';
        
        
    } else {
        config.mode = 'development';
    }
    return config;
};
