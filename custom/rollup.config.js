// @ts-nocheck
import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';
import esbuild from 'rollup-plugin-esbuild';

const inputFile = "src/custom.js";
export default {
  input : inputFile,
  output: {
    file: `build/custom.es6.js`,
    format: 'es',
    sourcemap: false,
  },
  external: (assetPath) => {
    // remove current working directory for eval
    let asset = assetPath.replace(process.cwd(), '');
    // resolve platform filepaths
    let srcDir
    if(process.platform === 'win32') {
      srcDir = '\\src\\';
    } else {
      srcDir = '/src/';
    }
    // matches input file, or starts with ./ or /src/ then we know it's a local file for processing
    // the goal is to be able to correctly reference @haxtheweb / other project bare assets
    // and correctly assess that they are to be treated as 'external'
    // @todo read off of wc-registry.json to make this assessment if local or otherwise need to hit a CDN based copy
    if (asset.endsWith(inputFile) || asset.startsWith('./') || asset.startsWith(srcDir)) {
      return false;
    }
    // bundle canvas-confetti and the lit family inline since they are not part
    // of the site's import map (@haxtheweb/ bare imports are external and
    // resolved at runtime). the bare specifier and the resolved path are both
    // checked here because rollup calls external for the source import and
    // again for the resolved file
    const bundledPackages = [
      'canvas-confetti',
      'lit',
      'lit-element',
      'lit-html',
      '@lit/reactive-element',
    ];
    const assetSegments = asset.split(/[\\/]/);
    const isBundled = bundledPackages.some(
      (pkg) =>
        asset === pkg ||
        assetSegments.includes(pkg) ||
        (pkg.startsWith('@') && assetSegments.includes(pkg.split('/')[1])),
    );
    if (isBundled) {
      return false;
    }
    return true;
  },
  preserveEntrySignatures: false,
  plugins: [
    /** Resolve bare module imports */
    nodeResolve(),
    /** Minify JS, compile JS to a lower language target */
    esbuild({
      minify: true,
      target: ['chrome120', 'firefox121', 'edge120', 'safari17.2'],
    }),
    /** Bundle assets references via import.meta.url */
    importMetaAssets(),
    /** Minify html and css tagged template literals */
    babel({
      babelHelpers: 'bundled',
    }),
  ],
};