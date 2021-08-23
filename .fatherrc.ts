// export default {
// 	esm: 'rollup',
// 	cjs: 'rollup',
// 	runtimeHelpers: true,
// };


const path = require('path')
const options = {
  entry: 'src/index.ts',
  // doc: {
  //   title: 'starfish-ui',
  //   themeConfig: { mode: 'light' },
  //   base: '/starfish-ui'
  // },
  file: path.resolve(__dirname,'dist'),
  extraBabelPlugins: [
      ['babel-plugin-import', {
          libraryName: 'antd-mobile',
          libraryDirectory: 'es',
          style: true,
      }]
  ],
  // cssModules: true,
  extractCSS: true,
  lessInBabelMode: true,
  // runtimeHelpers: true,
  esm: { type: 'babel', importLibToEs: true },
  cjs: { type: 'babel', lazy: true },
  autoprefixer: {
      browsers: ['ie>9', 'Safari >= 6'],
  }
};

export default options;

