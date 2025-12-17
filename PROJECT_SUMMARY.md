# 🧱 樂高配件交易平台 - Project Summary
**生成時間**: E:\Lego\lego-vite

## 📁 Project Tree

```
├── public
│   ├── bulk.jpg
│   ├── og-image.jpg
│   ├── promotion.png
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── MessageCenter
│   │   │   ├── ChatWindow.jsx
│   │   │   ├── ConversationList.jsx
│   │   │   ├── MessageBubble.jsx
│   │   │   ├── MessageCenter.jsx
│   │   │   └── QuickChatModal.jsx
│   │   ├── AdminPanel.jsx
│   │   ├── BulkSalePromo.jsx
│   │   ├── ContactSupportModal.jsx
│   │   ├── CreatePostModal.jsx
│   │   ├── EarnTokenModal.jsx
│   │   ├── EditPostModal.jsx
│   │   ├── Header.jsx
│   │   ├── ImageLightbox.jsx
│   │   ├── LoginModal.jsx
│   │   ├── MyPostsModal.jsx
│   │   ├── PostCard.jsx
│   │   ├── PostDetailModal.jsx
│   │   ├── PromotionBanner.jsx
│   │   ├── RegisterModal.jsx
│   │   ├── ResourcesPage.jsx
│   │   └── SearchBar.jsx
│   ├── data
│   │   └── mockData.js
│   ├── hooks
│   ├── utils
│   │   └── imageCompression.js
│   ├── .env
│   ├── App.css
│   ├── App.jsx
│   ├── api.js
│   ├── index.css
│   ├── main.jsx
│   └── supabaseClient.js
├── .env.production
├── .gitignore
├── README.md
├── clean_sql.py
├── eslint.config.js
├── generate_summary.py
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── sql.sql
├── supabase_ready.sql
├── tailwind.config.js
└── vite.config.js
```

## 📄 File Contents

### 📄 `eslint.config.js`

```javascript
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])

```

### 📄 `index.html`

```html
<!doctype html>
<html lang="zh-HK">
  <head>

    <!-- ✅ Google AdSense -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1325843653205172"
         crossorigin="anonymous"></script>


         <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-QMXK1BBSKM"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-QMXK1BBSKM');
</script>

    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- ✅ 改標題 -->
    <title>嬰幼兒產品交易/贈送/徵收平台 | 香港二手母嬰用品買賣/交換 | 免費發佈</title>
    
    <!-- ✅ 改 meta description -->
    <meta name="description" content="香港最大嬰幼兒產品交易平台，免費發佈二手母嬰用品、玩具、嬰兒車、奶粉等，安全可靠的買賣交流平台。" />
    
    <!-- ✅ 改 keywords -->
    <meta name="keywords" content="嬰幼兒產品, 母嬰用品, 二手嬰兒用品, 香港, 買賣, 交易平台, 嬰兒車, 奶粉, 玩具" />
    
    <!-- Open Graph (Facebook 分享) -->
    <meta property="og:title" content="嬰幼兒產品交易平台 | 香港二手母嬰用品買賣" />
    <meta property="og:description" content="免費發佈及搜尋嬰幼兒產品，安全可靠的交易平台" />
    <meta property="og:type" content="website" />
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="嬰幼兒產品交易/贈送/徵收平台" />
    <meta name="twitter:description" content="香港二手母嬰用品買賣平台" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### 📄 `package-lock.json`

```json
{
  "name": "lego-vite",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "lego-vite",
      "version": "0.0.0",
      "dependencies": {
        "@supabase/supabase-js": "^2.87.1",
        "lucide-react": "^0.555.0",
        "react": "^19.2.0",
        "react-dom": "^19.2.0",
        "react-router-dom": "^7.10.0"
      },
      "devDependencies": {
        "@eslint/js": "^9.39.1",
        "@tailwindcss/postcss": "^4.1.17",
        "@types/react": "^19.2.5",
        "@types/react-dom": "^19.2.3",
        "@vitejs/plugin-react": "^5.1.1",
        "autoprefixer": "^10.4.22",
        "eslint": "^9.39.1",
        "eslint-plugin-react-hooks": "^7.0.1",
        "eslint-plugin-react-refresh": "^0.4.24",
        "globals": "^16.5.0",
        "postcss": "^8.5.6",
        "tailwindcss": "^4.1.17",
        "vite": "npm:rolldown-vite@7.2.5"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.5.tgz",
      "integrity": "sha512-6uFXyCayocRbqhZOB+6XcuZbkMNimwfVGFji8CTZnCzOHVGvDqzvitu1re2AU5LROliz7eQPhB8CpAMvnx9EjA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.5.tgz",
      "integrity": "sha512-e7jT4DxYvIDLk1ZHmU/m/mB19rex9sv0c2ftBtjSBv+kVM/902eh0fINUzD7UwLLNR+jU585GxUJ8/EBfAM5fw==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.4",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.5.tgz",
      "integrity": "sha512-3EwLFhZ38J4VyIP6WNtt2kUdW9dokXA9Cr4IVIFHuCpZ3H8/YFOl5JjZHisrn1fATPBmKKqXzDFvh9fUwHz6CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.5",
        "@babel/types": "^7.28.5",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
      "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
      "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.28.5.tgz",
      "integrity": "sha512-qSs4ifwzKJSV39ucNjsvc6WVHs6b7S03sOh2OcHF9UHfVPqWWALUsNUVzhSBiItjRZoLHx7nIarVjqKVusUZ1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.4",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.4.tgz",
      "integrity": "sha512-HFN59MmQXGHVyYadKLVumYsA9dBFun/ldYxipEjzA4196jpLZd8UjEEBLkbEkvfYreDqJhZxYAWFPtrfhNpj4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.4"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.5.tgz",
      "integrity": "sha512-KKBU1VGYR7ORr3At5HAtUQ+TV3SzRCXmA/8OdDZiLDBIZxVyzXuztPjfLd3BV1PRAQGCMWWSHYhL0F8d5uHBDQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.5"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.27.1.tgz",
      "integrity": "sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.27.1.tgz",
      "integrity": "sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.28.5.tgz",
      "integrity": "sha512-TCCj4t55U90khlYkVV/0TfkJkAkUg3jZFA3Neb7unZT8CPok7iiRfaX0F+WnqWqt7OxhOn0uBKXCw4lbL8W0aQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.5",
        "@babel/helper-globals": "^7.28.0",
        "@babel/parser": "^7.28.5",
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.5",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.28.5",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.28.5.tgz",
      "integrity": "sha512-qQ5m48eI/MFLQ5PxQj4PFaprjyCTLI37ElWMmNs0K8Lk3dVeOdNpB3ks8jc7yM5CDmVC73eMVk/trk3fgmrUpA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.28.5"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@emnapi/core": {
      "version": "1.7.1",
      "resolved": "https://registry.npmjs.org/@emnapi/core/-/core-1.7.1.tgz",
      "integrity": "sha512-o1uhUASyo921r2XtHYOHy7gdkGLge8ghBEQHMWmyJFoXlpU58kIrhhN3w26lpQb6dspetweapMn2CSNwQ8I4wg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/wasi-threads": "1.1.0",
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/runtime": {
      "version": "1.7.1",
      "resolved": "https://registry.npmjs.org/@emnapi/runtime/-/runtime-1.7.1.tgz",
      "integrity": "sha512-PVtJr5CmLwYAU9PZDMITZoR5iAOShYREoR45EyyLrbntV50mdePTgUn4AmOw90Ifcj+x2kRjdzr1HP3RrNiHGA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@emnapi/wasi-threads": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@emnapi/wasi-threads/-/wasi-threads-1.1.0.tgz",
      "integrity": "sha512-WI0DdZ8xFSbgMjR1sFsKABJ/C5OnRrjT06JXbZKexJGrDuPTzZdDYfFlsgcCXCyf+suG5QU2e/y1Wo2V/OapLQ==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.9.0",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.9.0.tgz",
      "integrity": "sha512-ayVFHdtZ+hsq1t2Dy24wCmGXGe4q9Gu3smhLYALJrr473ZH27MsnSL+LKUlimp4BWJqMDMLmPpx/Q9R3OAlL4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/eslint-utils/node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.2",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.2.tgz",
      "integrity": "sha512-EriSTlt5OC9/7SXkRSCAhfSxxoSUgBm33OH+IkwbdpgoqsSsUg7y3uh+IICI/Qg4BBWr3U2i39RpmycbxMq4ew==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/config-array": {
      "version": "0.21.1",
      "resolved": "https://registry.npmjs.org/@eslint/config-array/-/config-array-0.21.1.tgz",
      "integrity": "sha512-aw1gNayWpdI/jSYVgzN5pL0cfzU02GT3NBpeT/DXbx1/1x7ZKxFPd9bwrzygx/qiwIQiJ1sw/zD8qY/kRvlGHA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/object-schema": "^2.1.7",
        "debug": "^4.3.1",
        "minimatch": "^3.1.2"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/config-helpers": {
      "version": "0.4.2",
      "resolved": "https://registry.npmjs.org/@eslint/config-helpers/-/config-helpers-0.4.2.tgz",
      "integrity": "sha512-gBrxN88gOIf3R7ja5K9slwNayVcZgK6SOUORm2uBzTeIEfeVaIhOpCtTox3P6R7o2jLFwLFTLnC7kU/RGcYEgw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/core": {
      "version": "0.17.0",
      "resolved": "https://registry.npmjs.org/@eslint/core/-/core-0.17.0.tgz",
      "integrity": "sha512-yL/sLrpmtDaFEiUj1osRP4TI2MDz1AddJL+jZ7KSqvBuliN4xqYY54IfdN8qD8Toa6g1iloph1fxQNkjOxrrpQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@types/json-schema": "^7.0.15"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-3.3.3.tgz",
      "integrity": "sha512-Kr+LPIUVKz2qkx1HAMH8q1q6azbqBAsXJUxBl/ODDuVPX45Z9DfwB8tPjTi6nNZ8BuM3nbJxC5zCAg5elnBUTQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^10.0.1",
        "globals": "^14.0.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.1",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/globals": {
      "version": "14.0.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-14.0.0.tgz",
      "integrity": "sha512-oahGvuMGQlPw/ivIYBjVSrWAfWLBeku5tpPE2fOPLi+WHffIWbuh2tCjhyQhTBPMf5E9jDEH4FOmTYgYwbKwtQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@eslint/js": {
      "version": "9.39.1",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-9.39.1.tgz",
      "integrity": "sha512-S26Stp4zCy88tH94QbBv3XCuzRQiZ9yXofEILmglYTh/Ug/a9/umqvgFtYBAo3Lp0nsI/5/qH1CCrbdK3AP1Tw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      }
    },
    "node_modules/@eslint/object-schema": {
      "version": "2.1.7",
      "resolved": "https://registry.npmjs.org/@eslint/object-schema/-/object-schema-2.1.7.tgz",
      "integrity": "sha512-VtAOaymWVfZcmZbp6E2mympDIHvyjXs/12LqWYjVw6qjrfF+VK+fyG33kChz3nnK+SU5/NeHOqrTEHS8sXO3OA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@eslint/plugin-kit": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/@eslint/plugin-kit/-/plugin-kit-0.4.1.tgz",
      "integrity": "sha512-43/qtrDUokr7LJqoF2c3+RInu/t4zfrpYdoSDfYyhg52rwLV6TnOvdG4fXm7IkSB3wErkcmJS9iEhjVtOSEjjA==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@eslint/core": "^0.17.0",
        "levn": "^0.4.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      }
    },
    "node_modules/@humanfs/core": {
      "version": "0.19.1",
      "resolved": "https://registry.npmjs.org/@humanfs/core/-/core-0.19.1.tgz",
      "integrity": "sha512-5DyQ4+1JEUzejeK1JGICcideyfUbGixgS9jNgex5nqkW+cY7WZhxBigmieN5Qnw9ZosSNVC9KQKyb+GUaGyKUA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanfs/node": {
      "version": "0.16.7",
      "resolved": "https://registry.npmjs.org/@humanfs/node/-/node-0.16.7.tgz",
      "integrity": "sha512-/zUx+yOsIrG4Y43Eh2peDeKCxlRt/gET6aHfaKpuq267qXdYDFViVHfMaLyygZOnl0kGWxFIgsBy8QFuTLUXEQ==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanfs/core": "^0.19.1",
        "@humanwhocodes/retry": "^0.4.0"
      },
      "engines": {
        "node": ">=18.18.0"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/retry": {
      "version": "0.4.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/retry/-/retry-0.4.3.tgz",
      "integrity": "sha512-bV0Tgo9K4hfPCek+aMAn81RppFKv2ySDQeMoSZuvTASywNTnVJCArCZE2FWqpvIatKu7VMRLWlR1EazvVhDyhQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18.18"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.13",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.13.tgz",
      "integrity": "sha512-2kkt/7niJ6MgEPxF0bYdQ6etZaA+fQvDcLKckhy1yIQOzaoKjBBjSj63/aLVjYE3qhRt5dvM+uUyfCg6UKCBbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/remapping": {
      "version": "2.3.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/remapping/-/remapping-2.3.5.tgz",
      "integrity": "sha512-LI9u/+laYG4Ds1TDKSJW2YPrIlcVYOwi2fUC6xB43lueCjgxV4lffOCZCtYFiH6TNOX+tQKXx97T4IKHbhyHEQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.5",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.5.tgz",
      "integrity": "sha512-cYQ9310grqxueWbl+WuIUIaiUaDcj7WOq5fVhEljNVgRfOUhY9fy2zTvfoqWsnebh8Sl70VScFbICvJnLKB0Og==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.31",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.31.tgz",
      "integrity": "sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@napi-rs/wasm-runtime": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/@napi-rs/wasm-runtime/-/wasm-runtime-1.1.0.tgz",
      "integrity": "sha512-Fq6DJW+Bb5jaWE69/qOE0D1TUN9+6uWhCeZpdnSBk14pjLcCWR7Q8n49PTSPHazM37JqrsdpEthXy2xn6jWWiA==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.7.1",
        "@emnapi/runtime": "^1.7.1",
        "@tybys/wasm-util": "^0.10.1"
      }
    },
    "node_modules/@oxc-project/runtime": {
      "version": "0.97.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/runtime/-/runtime-0.97.0.tgz",
      "integrity": "sha512-yH0zw7z+jEws4dZ4IUKoix5Lh3yhqIJWF9Dc8PWvhpo7U7O+lJrv7ZZL4BeRO0la8LBQFwcCewtLBnVV7hPe/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@oxc-project/types": {
      "version": "0.97.0",
      "resolved": "https://registry.npmjs.org/@oxc-project/types/-/types-0.97.0.tgz",
      "integrity": "sha512-lxmZK4xFrdvU0yZiDwgVQTCvh2gHWBJCBk5ALsrtsBWhs0uDIi+FTOnXRQeQfs304imdvTdaakT/lqwQ8hkOXQ==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/Boshen"
      }
    },
    "node_modules/@rolldown/binding-android-arm64": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-android-arm64/-/binding-android-arm64-1.0.0-beta.50.tgz",
      "integrity": "sha512-XlEkrOIHLyGT3avOgzfTFSjG+f+dZMw+/qd+Y3HLN86wlndrB/gSimrJCk4gOhr1XtRtEKfszpadI3Md4Z4/Ag==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-arm64": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-arm64/-/binding-darwin-arm64-1.0.0-beta.50.tgz",
      "integrity": "sha512-+JRqKJhoFlt5r9q+DecAGPLZ5PxeLva+wCMtAuoFMWPoZzgcYrr599KQ+Ix0jwll4B4HGP43avu9My8KtSOR+w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-darwin-x64": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-darwin-x64/-/binding-darwin-x64-1.0.0-beta.50.tgz",
      "integrity": "sha512-fFXDjXnuX7/gQZQm/1FoivVtRcyAzdjSik7Eo+9iwPQ9EgtA5/nB2+jmbzaKtMGG3q+BnZbdKHCtOacmNrkIDA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-freebsd-x64": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-freebsd-x64/-/binding-freebsd-x64-1.0.0-beta.50.tgz",
      "integrity": "sha512-F1b6vARy49tjmT/hbloplzgJS7GIvwWZqt+tAHEstCh0JIh9sa8FAMVqEmYxDviqKBaAI8iVvUREm/Kh/PD26Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm-gnueabihf": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm-gnueabihf/-/binding-linux-arm-gnueabihf-1.0.0-beta.50.tgz",
      "integrity": "sha512-U6cR76N8T8M6lHj7EZrQ3xunLPxSvYYxA8vJsBKZiFZkT8YV4kjgCO3KwMJL0NOjQCPGKyiXO07U+KmJzdPGRw==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-gnu": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-gnu/-/binding-linux-arm64-gnu-1.0.0-beta.50.tgz",
      "integrity": "sha512-ONgyjofCrrE3bnh5GZb8EINSFyR/hmwTzZ7oVuyUB170lboza1VMCnb8jgE6MsyyRgHYmN8Lb59i3NKGrxrYjw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-arm64-musl": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-arm64-musl/-/binding-linux-arm64-musl-1.0.0-beta.50.tgz",
      "integrity": "sha512-L0zRdH2oDPkmB+wvuTl+dJbXCsx62SkqcEqdM+79LOcB+PxbAxxjzHU14BuZIQdXcAVDzfpMfaHWzZuwhhBTcw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-gnu": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-gnu/-/binding-linux-x64-gnu-1.0.0-beta.50.tgz",
      "integrity": "sha512-gyoI8o/TGpQd3OzkJnh1M2kxy1Bisg8qJ5Gci0sXm9yLFzEXIFdtc4EAzepxGvrT2ri99ar5rdsmNG0zP0SbIg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-linux-x64-musl": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-linux-x64-musl/-/binding-linux-x64-musl-1.0.0-beta.50.tgz",
      "integrity": "sha512-zti8A7M+xFDpKlghpcCAzyOi+e5nfUl3QhU023ce5NCgUxRG5zGP2GR9LTydQ1rnIPwZUVBWd4o7NjZDaQxaXA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-openharmony-arm64": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-openharmony-arm64/-/binding-openharmony-arm64-1.0.0-beta.50.tgz",
      "integrity": "sha512-eZUssog7qljrrRU9Mi0eqYEPm3Ch0UwB+qlWPMKSUXHNqhm3TvDZarJQdTevGEfu3EHAXJvBIe0YFYr0TPVaMA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openharmony"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-wasm32-wasi": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-wasm32-wasi/-/binding-wasm32-wasi-1.0.0-beta.50.tgz",
      "integrity": "sha512-nmCN0nIdeUnmgeDXiQ+2HU6FT162o+rxnF7WMkBm4M5Ds8qTU7Dzv2Wrf22bo4ftnlrb2hKK6FSwAJSAe2FWLg==",
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@napi-rs/wasm-runtime": "^1.0.7"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@rolldown/binding-win32-arm64-msvc": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-arm64-msvc/-/binding-win32-arm64-msvc-1.0.0-beta.50.tgz",
      "integrity": "sha512-7kcNLi7Ua59JTTLvbe1dYb028QEPaJPJQHqkmSZ5q3tJueUeb6yjRtx8mw4uIqgWZcnQHAR3PrLN4XRJxvgIkA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-ia32-msvc": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-ia32-msvc/-/binding-win32-ia32-msvc-1.0.0-beta.50.tgz",
      "integrity": "sha512-lL70VTNvSCdSZkDPPVMwWn/M2yQiYvSoXw9hTLgdIWdUfC3g72UaruezusR6ceRuwHCY1Ayu2LtKqXkBO5LIwg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/binding-win32-x64-msvc": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/binding-win32-x64-msvc/-/binding-win32-x64-msvc-1.0.0-beta.50.tgz",
      "integrity": "sha512-4qU4x5DXWB4JPjyTne/wBNPqkbQU8J45bl21geERBKtEittleonioACBL1R0PsBu0Aq21SwMK5a9zdBkWSlQtQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      }
    },
    "node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.47",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-beta.47.tgz",
      "integrity": "sha512-8QagwMH3kNCuzD8EWL8R2YPW5e4OrHNSAHRFDdmFqEwEaD/KcNKjVoumo+gP2vW5eKB2UPbM6vTYiGZX0ixLnw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@supabase/auth-js": {
      "version": "2.87.1",
      "resolved": "https://registry.npmjs.org/@supabase/auth-js/-/auth-js-2.87.1.tgz",
      "integrity": "sha512-6RDeOf5TVoaXFtEstN188ykp3pXLZaU9qoAWfx8dc50FFAAqt+kcFJ96V0IvSmcpb4mDAWcpTJ7BegmVDn/WIw==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/functions-js": {
      "version": "2.87.1",
      "resolved": "https://registry.npmjs.org/@supabase/functions-js/-/functions-js-2.87.1.tgz",
      "integrity": "sha512-rWmYo4gRD0XAjMhYDlz7IH67bp4TIQ1UE4VqwIQtl1gGPwtLDq6wcRnu7jLKlXx0Gtrknw/eoiHYG9//XrCTzQ==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/postgrest-js": {
      "version": "2.87.1",
      "resolved": "https://registry.npmjs.org/@supabase/postgrest-js/-/postgrest-js-2.87.1.tgz",
      "integrity": "sha512-Yzu5eL3iGmZW0C/8x+vEojAOou63FI9oVw8HI8YOq63+5yM8g8aGh7Y1E2vbXFb7+gHGsPqLnaC6dPhrYt7qBA==",
      "license": "MIT",
      "dependencies": {
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/realtime-js": {
      "version": "2.87.1",
      "resolved": "https://registry.npmjs.org/@supabase/realtime-js/-/realtime-js-2.87.1.tgz",
      "integrity": "sha512-XvLtEznxmYZXA7LYuy5zbSXpSYjDLJq2wQeRh3MzON2OR4U8Kq+RtPz2E2Wi8HEzvBfsc+nNu1TG8LQ9+3DRkA==",
      "license": "MIT",
      "dependencies": {
        "@types/phoenix": "^1.6.6",
        "@types/ws": "^8.18.1",
        "tslib": "2.8.1",
        "ws": "^8.18.2"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/storage-js": {
      "version": "2.87.1",
      "resolved": "https://registry.npmjs.org/@supabase/storage-js/-/storage-js-2.87.1.tgz",
      "integrity": "sha512-0Uc8tNV4yzkNNmp1inpXru0RB4a7ECq05G2S6BDvSpMxTxJrDVJ4vVDwyhqB8ZZ+O9+8prHaQYoByQeuDnwpFQ==",
      "license": "MIT",
      "dependencies": {
        "iceberg-js": "^0.8.1",
        "tslib": "2.8.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@supabase/supabase-js": {
      "version": "2.87.1",
      "resolved": "https://registry.npmjs.org/@supabase/supabase-js/-/supabase-js-2.87.1.tgz",
      "integrity": "sha512-tVgqZqnHZVum584KuUKSQZgcy6ZkhVd6gG8QWg2QfIXH9HmXdamauxdVsLXwaNPJxEdOyfAfwIyi5XUsiVYWtg==",
      "license": "MIT",
      "dependencies": {
        "@supabase/auth-js": "2.87.1",
        "@supabase/functions-js": "2.87.1",
        "@supabase/postgrest-js": "2.87.1",
        "@supabase/realtime-js": "2.87.1",
        "@supabase/storage-js": "2.87.1"
      },
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.1.17.tgz",
      "integrity": "sha512-csIkHIgLb3JisEFQ0vxr2Y57GUNYh447C8xzwj89U/8fdW8LhProdxvnVH6U8M2Y73QKiTIH+LWbK3V2BBZsAg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/remapping": "^2.3.4",
        "enhanced-resolve": "^5.18.3",
        "jiti": "^2.6.1",
        "lightningcss": "1.30.2",
        "magic-string": "^0.30.21",
        "source-map-js": "^1.2.1",
        "tailwindcss": "4.1.17"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.1.17.tgz",
      "integrity": "sha512-F0F7d01fmkQhsTjXezGBLdrl1KresJTcI3DB8EkScCldyKp3Msz4hub4uyYaVnk88BAS1g5DQjjF6F5qczheLA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.1.17",
        "@tailwindcss/oxide-darwin-arm64": "4.1.17",
        "@tailwindcss/oxide-darwin-x64": "4.1.17",
        "@tailwindcss/oxide-freebsd-x64": "4.1.17",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.1.17",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.1.17",
        "@tailwindcss/oxide-linux-arm64-musl": "4.1.17",
        "@tailwindcss/oxide-linux-x64-gnu": "4.1.17",
        "@tailwindcss/oxide-linux-x64-musl": "4.1.17",
        "@tailwindcss/oxide-wasm32-wasi": "4.1.17",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.1.17",
        "@tailwindcss/oxide-win32-x64-msvc": "4.1.17"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.1.17.tgz",
      "integrity": "sha512-BMqpkJHgOZ5z78qqiGE6ZIRExyaHyuxjgrJ6eBO5+hfrfGkuya0lYfw8fRHG77gdTjWkNWEEm+qeG2cDMxArLQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.1.17.tgz",
      "integrity": "sha512-EquyumkQweUBNk1zGEU/wfZo2qkp/nQKRZM8bUYO0J+Lums5+wl2CcG1f9BgAjn/u9pJzdYddHWBiFXJTcxmOg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.1.17.tgz",
      "integrity": "sha512-gdhEPLzke2Pog8s12oADwYu0IAw04Y2tlmgVzIN0+046ytcgx8uZmCzEg4VcQh+AHKiS7xaL8kGo/QTiNEGRog==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.1.17.tgz",
      "integrity": "sha512-hxGS81KskMxML9DXsaXT1H0DyA+ZBIbyG/sSAjWNe2EDl7TkPOBI42GBV3u38itzGUOmFfCzk1iAjDXds8Oh0g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.1.17.tgz",
      "integrity": "sha512-k7jWk5E3ldAdw0cNglhjSgv501u7yrMf8oeZ0cElhxU6Y2o7f8yqelOp3fhf7evjIS6ujTI3U8pKUXV2I4iXHQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.1.17.tgz",
      "integrity": "sha512-HVDOm/mxK6+TbARwdW17WrgDYEGzmoYayrCgmLEw7FxTPLcp/glBisuyWkFz/jb7ZfiAXAXUACfyItn+nTgsdQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.1.17.tgz",
      "integrity": "sha512-HvZLfGr42i5anKtIeQzxdkw/wPqIbpeZqe7vd3V9vI3RQxe3xU1fLjss0TjyhxWcBaipk7NYwSrwTwK1hJARMg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.1.17.tgz",
      "integrity": "sha512-M3XZuORCGB7VPOEDH+nzpJ21XPvK5PyjlkSFkFziNHGLc5d6g3di2McAAblmaSUNl8IOmzYwLx9NsE7bplNkwQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.1.17.tgz",
      "integrity": "sha512-k7f+pf9eXLEey4pBlw+8dgfJHY4PZ5qOUFDyNf7SI6lHjQ9Zt7+NcscjpwdCEbYi6FI5c2KDTDWyf2iHcCSyyQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-wasm32-wasi": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-wasm32-wasi/-/oxide-wasm32-wasi-4.1.17.tgz",
      "integrity": "sha512-cEytGqSSoy7zK4JRWiTCx43FsKP/zGr0CsuMawhH67ONlH+T79VteQeJQRO/X7L0juEUA8ZyuYikcRBf0vsxhg==",
      "bundleDependencies": [
        "@napi-rs/wasm-runtime",
        "@emnapi/core",
        "@emnapi/runtime",
        "@tybys/wasm-util",
        "@emnapi/wasi-threads",
        "tslib"
      ],
      "cpu": [
        "wasm32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "@emnapi/core": "^1.6.0",
        "@emnapi/runtime": "^1.6.0",
        "@emnapi/wasi-threads": "^1.1.0",
        "@napi-rs/wasm-runtime": "^1.0.7",
        "@tybys/wasm-util": "^0.10.1",
        "tslib": "^2.4.0"
      },
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.1.17.tgz",
      "integrity": "sha512-JU5AHr7gKbZlOGvMdb4722/0aYbU+tN6lv1kONx0JK2cGsh7g148zVWLM0IKR3NeKLv+L90chBVYcJ8uJWbC9A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.1.17.tgz",
      "integrity": "sha512-SKWM4waLuqx0IH+FMDUw6R66Hu4OuTALFgnleKbqhgGU30DY20NORZMZUKgLRjQXNN2TLzKvh48QXTig4h4bGw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.1.17.tgz",
      "integrity": "sha512-+nKl9N9mN5uJ+M7dBOOCzINw94MPstNR/GtIhz1fpZysxL/4a+No64jCBD6CPN+bIHWFx3KWuu8XJRrj/572Dw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.1.17",
        "@tailwindcss/oxide": "4.1.17",
        "postcss": "^8.4.41",
        "tailwindcss": "4.1.17"
      }
    },
    "node_modules/@tybys/wasm-util": {
      "version": "0.10.1",
      "resolved": "https://registry.npmjs.org/@tybys/wasm-util/-/wasm-util-0.10.1.tgz",
      "integrity": "sha512-9tTaPJLSiejZKx+Bmog4uSubteqTvFrVrURwkmHixBo0G4seD0zUxp98E1DzUBJxLQ3NPwXrGKDiVjwx/DpPsg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "dependencies": {
        "tslib": "^2.4.0"
      }
    },
    "node_modules/@types/babel__core": {
      "version": "7.20.5",
      "resolved": "https://registry.npmjs.org/@types/babel__core/-/babel__core-7.20.5.tgz",
      "integrity": "sha512-qoQprZvz5wQFJwMDqeseRXWv3rqMvhgpbXFfVyWhbx9X47POIA6i/+dXefEmZKoAgOaTdaIgNSMqMIU61yRyzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.20.7",
        "@babel/types": "^7.20.7",
        "@types/babel__generator": "*",
        "@types/babel__template": "*",
        "@types/babel__traverse": "*"
      }
    },
    "node_modules/@types/babel__generator": {
      "version": "7.27.0",
      "resolved": "https://registry.npmjs.org/@types/babel__generator/-/babel__generator-7.27.0.tgz",
      "integrity": "sha512-ufFd2Xi92OAVPYsy+P4n7/U7e68fex0+Ee8gSG9KX7eo084CWiQ4sdxktvdl0bOPupXtVJPY19zk6EwWqUQ8lg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__template": {
      "version": "7.4.4",
      "resolved": "https://registry.npmjs.org/@types/babel__template/-/babel__template-7.4.4.tgz",
      "integrity": "sha512-h/NUaSyG5EyxBIp8YRxo4RMe2/qQgvyowRwVMzhYhBCONbW8PUsg4lkFMrhgZhUe5z3L3MiLDuvyJ/CaPa2A8A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.1.0",
        "@babel/types": "^7.0.0"
      }
    },
    "node_modules/@types/babel__traverse": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@types/babel__traverse/-/babel__traverse-7.28.0.tgz",
      "integrity": "sha512-8PvcXf70gTDZBgt9ptxJ8elBeBjcLOAcOtoO/mPJjtji1+CdGbHgm77om1GrsPxsiE+uXIpNSK64UYaIwQXd4Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.2"
      }
    },
    "node_modules/@types/estree": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.8.tgz",
      "integrity": "sha512-dWHzHa2WqEXI/O1E9OjrocMTKJl2mSrEolh1Iomrv6U+JuNwaHXsXx9bLu5gG7BUWFIN0skIQJQ/L1rIex4X6w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "25.0.1",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-25.0.1.tgz",
      "integrity": "sha512-czWPzKIAXucn9PtsttxmumiQ9N0ok9FrBwgRWrwmVLlp86BrMExzvXRLFYRJ+Ex3g6yqj+KuaxfX1JTgV2lpfg==",
      "license": "MIT",
      "dependencies": {
        "undici-types": "~7.16.0"
      }
    },
    "node_modules/@types/phoenix": {
      "version": "1.6.7",
      "resolved": "https://registry.npmjs.org/@types/phoenix/-/phoenix-1.6.7.tgz",
      "integrity": "sha512-oN9ive//QSBkf19rfDv45M7eZPi0eEXylht2OLEXicu5b4KoQ1OzXIw+xDSGWxSxe1JmepRR/ZH283vsu518/Q==",
      "license": "MIT"
    },
    "node_modules/@types/react": {
      "version": "19.2.7",
      "resolved": "https://registry.npmjs.org/@types/react/-/react-19.2.7.tgz",
      "integrity": "sha512-MWtvHrGZLFttgeEj28VXHxpmwYbor/ATPYbBfSFZEIRK0ecCFLl2Qo55z52Hss+UV9CRN7trSeq1zbgx7YDWWg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "csstype": "^3.2.2"
      }
    },
    "node_modules/@types/react-dom": {
      "version": "19.2.3",
      "resolved": "https://registry.npmjs.org/@types/react-dom/-/react-dom-19.2.3.tgz",
      "integrity": "sha512-jp2L/eY6fn+KgVVQAOqYItbF0VY/YApe5Mz2F0aykSO8gx31bYCZyvSeYxCHKvzHG5eZjc+zyaS5BrBWya2+kQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "@types/react": "^19.2.0"
      }
    },
    "node_modules/@types/ws": {
      "version": "8.18.1",
      "resolved": "https://registry.npmjs.org/@types/ws/-/ws-8.18.1.tgz",
      "integrity": "sha512-ThVF6DCVhA8kUGy+aazFQ4kXQ7E1Ty7A3ypFOe0IcJV8O/M511G99AW24irKrW56Wt44yG9+ij8FaqoBGkuBXg==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@vitejs/plugin-react": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/@vitejs/plugin-react/-/plugin-react-5.1.1.tgz",
      "integrity": "sha512-WQfkSw0QbQ5aJ2CHYw23ZGkqnRwqKHD/KYsMeTkZzPT4Jcf0DcBxBtwMJxnu6E7oxw5+JC6ZAiePgh28uJ1HBA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.28.5",
        "@babel/plugin-transform-react-jsx-self": "^7.27.1",
        "@babel/plugin-transform-react-jsx-source": "^7.27.1",
        "@rolldown/pluginutils": "1.0.0-beta.47",
        "@types/babel__core": "^7.20.5",
        "react-refresh": "^0.18.0"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "peerDependencies": {
        "vite": "^4.2.0 || ^5.0.0 || ^6.0.0 || ^7.0.0"
      }
    },
    "node_modules/acorn": {
      "version": "8.15.0",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.15.0.tgz",
      "integrity": "sha512-NZyJarBfL7nWwIq+FDL6Zp/yHEhePMNnnJ0y3qfieCrmNvYct8uvtiV41UvlSe6apAfk0fY1FbWx+NwfmpvtTg==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/autoprefixer": {
      "version": "10.4.22",
      "resolved": "https://registry.npmjs.org/autoprefixer/-/autoprefixer-10.4.22.tgz",
      "integrity": "sha512-ARe0v/t9gO28Bznv6GgqARmVqcWOV3mfgUPn9becPHMiD3o9BwlRgaeccZnwTpZ7Zwqrm+c1sUSsMxIzQzc8Xg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/autoprefixer"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "browserslist": "^4.27.0",
        "caniuse-lite": "^1.0.30001754",
        "fraction.js": "^5.3.4",
        "normalize-range": "^0.1.2",
        "picocolors": "^1.1.1",
        "postcss-value-parser": "^4.2.0"
      },
      "bin": {
        "autoprefixer": "bin/autoprefixer"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      },
      "peerDependencies": {
        "postcss": "^8.1.0"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/baseline-browser-mapping": {
      "version": "2.8.32",
      "resolved": "https://registry.npmjs.org/baseline-browser-mapping/-/baseline-browser-mapping-2.8.32.tgz",
      "integrity": "sha512-OPz5aBThlyLFgxyhdwf/s2+8ab3OvT7AdTNvKHBwpXomIYeXqpUUuT8LrdtxZSsWJ4R4CU1un4XGh5Ez3nlTpw==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "baseline-browser-mapping": "dist/cli.js"
      }
    },
    "node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/browserslist": {
      "version": "4.28.0",
      "resolved": "https://registry.npmjs.org/browserslist/-/browserslist-4.28.0.tgz",
      "integrity": "sha512-tbydkR/CxfMwelN0vwdP/pLkDwyAASZ+VfWm4EOwlB6SWhx1sYnWLqo8N5j0rAzPfzfRaxt0mM/4wPU/Su84RQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "baseline-browser-mapping": "^2.8.25",
        "caniuse-lite": "^1.0.30001754",
        "electron-to-chromium": "^1.5.249",
        "node-releases": "^2.0.27",
        "update-browserslist-db": "^1.1.4"
      },
      "bin": {
        "browserslist": "cli.js"
      },
      "engines": {
        "node": "^6 || ^7 || ^8 || ^9 || ^10 || ^11 || ^12 || >=13.7"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/caniuse-lite": {
      "version": "1.0.30001757",
      "resolved": "https://registry.npmjs.org/caniuse-lite/-/caniuse-lite-1.0.30001757.tgz",
      "integrity": "sha512-r0nnL/I28Zi/yjk1el6ilj27tKcdjLsNqAOZr0yVjWPrSQyHgKI2INaEWw21bAQSv2LXRt1XuCS/GomNpWOxsQ==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/caniuse-lite"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "CC-BY-4.0"
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/convert-source-map": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/convert-source-map/-/convert-source-map-2.0.0.tgz",
      "integrity": "sha512-Kvp459HrV2FEJ1CAsi1Ku+MY3kasH19TFykTz2xWmMeq6bk2NU3XXvfJ+Q61m0xktWwt+1HSYf3JZsTms3aRJg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/cookie": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-1.1.1.tgz",
      "integrity": "sha512-ei8Aos7ja0weRpFzJnEA9UHJ/7XQmqglbRwnf2ATjcB9Wq874VKH9kfjjirM6UhU2/E5fFYadylyhFldcqSidQ==",
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/express"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/csstype": {
      "version": "3.2.3",
      "resolved": "https://registry.npmjs.org/csstype/-/csstype-3.2.3.tgz",
      "integrity": "sha512-z1HGKcYy2xA8AGQfwrn0PAy+PB7X/GSj3UVJW9qKyn43xWa+gl5nXmU4qqLMRzWVLFC8KusUX8T/0kCiOYpAIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/debug": {
      "version": "4.4.3",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.3.tgz",
      "integrity": "sha512-RGwwWnwQvkVfavKVt22FGLw+xYSdzARwm0ru6DhTVA3umU5hZc28V3kO4stgYryrTlLpuvgI9GiijltAjNbcqA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/detect-libc": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-2.1.2.tgz",
      "integrity": "sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/electron-to-chromium": {
      "version": "1.5.263",
      "resolved": "https://registry.npmjs.org/electron-to-chromium/-/electron-to-chromium-1.5.263.tgz",
      "integrity": "sha512-DrqJ11Knd+lo+dv+lltvfMDLU27g14LMdH2b0O3Pio4uk0x+z7OR+JrmyacTPN2M8w3BrZ7/RTwG3R9B7irPlg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.18.3",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.3.tgz",
      "integrity": "sha512-d4lC8xfavMeBjzGr2vECC3fsGXziXZQyJxD868h2M/mBI3PwAuODxAkLkq5HYuvrPYcUtiLzsTo8U3PgX3Ocww==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/escalade": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/escalade/-/escalade-3.2.0.tgz",
      "integrity": "sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "9.39.1",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-9.39.1.tgz",
      "integrity": "sha512-BhHmn2yNOFA9H9JmmIVKJmd288g9hrVRDkdoIgRCRuSySRUHH7r/DI6aAXW9T1WwUuY3DFgrcaqB+deURBLR5g==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.8.0",
        "@eslint-community/regexpp": "^4.12.1",
        "@eslint/config-array": "^0.21.1",
        "@eslint/config-helpers": "^0.4.2",
        "@eslint/core": "^0.17.0",
        "@eslint/eslintrc": "^3.3.1",
        "@eslint/js": "9.39.1",
        "@eslint/plugin-kit": "^0.4.1",
        "@humanfs/node": "^0.16.6",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@humanwhocodes/retry": "^0.4.2",
        "@types/estree": "^1.0.6",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.6",
        "debug": "^4.3.2",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^8.4.0",
        "eslint-visitor-keys": "^4.2.1",
        "espree": "^10.4.0",
        "esquery": "^1.5.0",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^8.0.0",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://eslint.org/donate"
      },
      "peerDependencies": {
        "jiti": "*"
      },
      "peerDependenciesMeta": {
        "jiti": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-plugin-react-hooks": {
      "version": "7.0.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-hooks/-/eslint-plugin-react-hooks-7.0.1.tgz",
      "integrity": "sha512-O0d0m04evaNzEPoSW+59Mezf8Qt0InfgGIBJnpC0h3NH/WjUAR7BIKUfysC6todmtiZ/A0oUVS8Gce0WhBrHsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/core": "^7.24.4",
        "@babel/parser": "^7.24.4",
        "hermes-parser": "^0.25.1",
        "zod": "^3.25.0 || ^4.0.0",
        "zod-validation-error": "^3.5.0 || ^4.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "eslint": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0-0 || ^9.0.0"
      }
    },
    "node_modules/eslint-plugin-react-refresh": {
      "version": "0.4.24",
      "resolved": "https://registry.npmjs.org/eslint-plugin-react-refresh/-/eslint-plugin-react-refresh-0.4.24.tgz",
      "integrity": "sha512-nLHIW7TEq3aLrEYWpVaJ1dRgFR+wLDPN8e8FpYAql/bMV2oBEfC37K0gLEGgv9fy66juNShSMV8OkTqzltcG/w==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "eslint": ">=8.40"
      }
    },
    "node_modules/eslint-scope": {
      "version": "8.4.0",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-8.4.0.tgz",
      "integrity": "sha512-sNXOfKCn74rt8RICKMvJS7XKV/Xk9kA7DyJr8mJik3S7Cwgy3qlkkmyS2uQB3jiJg6VNdZd/pDBJu0nvG2NlTg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "4.2.1",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-4.2.1.tgz",
      "integrity": "sha512-Uhdk5sfqcee/9H/rCOJikYz67o0a2Tw2hGRPOG2Y1R2dg7brRe1uG0yaNQDHu+TO/uQPF/5eCapvYSmHUjt7JQ==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/espree": {
      "version": "10.4.0",
      "resolved": "https://registry.npmjs.org/espree/-/espree-10.4.0.tgz",
      "integrity": "sha512-j6PAQ2uUr79PZhBjP5C5fhl8e39FmRnOjsD5lGnWrFU8i2G776tBK7+nP8KuQUTTyAZUwfQqXAgrVH5MbH9CYQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.15.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^4.2.1"
      },
      "engines": {
        "node": "^18.18.0 || ^20.9.0 || >=21.1.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fdir": {
      "version": "6.5.0",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.5.0.tgz",
      "integrity": "sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0.0"
      },
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/file-entry-cache": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-8.0.0.tgz",
      "integrity": "sha512-XXTUwCvisa5oacNGRP9SfNtYBNAMi+RPwBFmblZEF7N7swHYQS6/Zfk7SRwx4D5j3CH211YNRco1DEMNVfZCnQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^4.0.0"
      },
      "engines": {
        "node": ">=16.0.0"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-4.0.1.tgz",
      "integrity": "sha512-f7ccFPK3SXFHpx15UIGyRJ/FJQctuKZ0zVuN3frBo4HnK3cay9VEW0R6yPYFHC0AgqhukPzKjq22t5DmAyqGyw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.4"
      },
      "engines": {
        "node": ">=16"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.3",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.3.tgz",
      "integrity": "sha512-GX+ysw4PBCz0PzosHDepZGANEuFCMLrnRTiEy9McGjmkCQYwRq4A/X786G/fjM/+OjsWSU1ZrY5qyARZmO/uwg==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fraction.js": {
      "version": "5.3.4",
      "resolved": "https://registry.npmjs.org/fraction.js/-/fraction.js-5.3.4.tgz",
      "integrity": "sha512-1X1NTtiJphryn/uLQz3whtY6jK3fTqoE3ohKs0tT+Ujr1W59oopxmoEh7Lu5p6vBaPbgoM0bzveAW4Qi5RyWDQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "*"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/rawify"
      }
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/gensync": {
      "version": "1.0.0-beta.2",
      "resolved": "https://registry.npmjs.org/gensync/-/gensync-1.0.0-beta.2.tgz",
      "integrity": "sha512-3hN7NaskYvMDLQY55gnW3NQ+mesEAepTqlg+VEbj7zzqEMBVNhzcGYYeqFo/TlYz6eQiFcp1HcsCZO+nGgS8zg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/globals": {
      "version": "16.5.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-16.5.0.tgz",
      "integrity": "sha512-c/c15i26VrJ4IRt5Z89DnIzCGDn9EcebibhAOjw5ibqEHsE1wLUgkPn9RDmNcUKyU87GeaL633nyJ+pplFR2ZQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/hermes-estree": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-estree/-/hermes-estree-0.25.1.tgz",
      "integrity": "sha512-0wUoCcLp+5Ev5pDW2OriHC2MJCbwLwuRx+gAqMTOkGKJJiBCLjtrvy4PWUGn6MIVefecRpzoOZ/UV6iGdOr+Cw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/hermes-parser": {
      "version": "0.25.1",
      "resolved": "https://registry.npmjs.org/hermes-parser/-/hermes-parser-0.25.1.tgz",
      "integrity": "sha512-6pEjquH3rqaI6cYAXYPcz9MS4rY6R4ngRgrgfDshRptUZIc3lw0MCIJIGDj9++mfySOuPTHB4nrSW99BCvOPIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "hermes-estree": "0.25.1"
      }
    },
    "node_modules/iceberg-js": {
      "version": "0.8.1",
      "resolved": "https://registry.npmjs.org/iceberg-js/-/iceberg-js-0.8.1.tgz",
      "integrity": "sha512-1dhVQZXhcHje7798IVM+xoo/1ZdVfzOMIc8/rgVSijRK38EDqOJoGula9N/8ZI5RD8QTxNQtK/Gozpr+qUqRRA==",
      "license": "MIT",
      "engines": {
        "node": ">=20.0.0"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.1",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.1.tgz",
      "integrity": "sha512-TR3KfrTZTYLPB6jUjfx6MF9WcWrHL9su5TObK4ZkYgBdWKPOFoSoQIdEuTuR82pmtxH2spWG9h6etwfr1pLBqQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/jiti": {
      "version": "2.6.1",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.6.1.tgz",
      "integrity": "sha512-ekilCSN1jwRvIbgeg/57YFh8qQDNbwDb9xT/qu2DAHbFFZUicIl4ygVaAvzveMhMVr3LnpSKTNnwt8PoOfmKhQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/js-yaml": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.1.tgz",
      "integrity": "sha512-qQKT4zQxXl8lLwBtHMWwaTcGfFOZviOJet3Oy/xmGk2gZH677CJM9EvtfdSkgWcATZhj/55JZ0rmy3myCT5lsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsesc": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/jsesc/-/jsesc-3.1.0.tgz",
      "integrity": "sha512-/sM3dO2FOzXjKQhJuo0Q173wf2KOo8t4I8vHy6lF9poUp7bKT0/NHE8fPX23PwfhnykfqnC2xRxOnVw5XuGIaA==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jsesc": "bin/jsesc"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json5": {
      "version": "2.2.3",
      "resolved": "https://registry.npmjs.org/json5/-/json5-2.2.3.tgz",
      "integrity": "sha512-XmOWe7eyHYH14cLdVPoyg+GOH3rYX++KpzrylJwSW98t3Nk+U8XOl8FWKOgwtzdb8lXGf6zYwDUzeHMWfxasyg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "json5": "lib/cli.js"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.30.2.tgz",
      "integrity": "sha512-utfs7Pr5uJyyvDETitgsaqSyjCb2qNRAtuqUeWIAKztsOYdcACf2KtARYXg2pSvhkt+9NfoaNY7fxjl6nuMjIQ==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^2.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-android-arm64": "1.30.2",
        "lightningcss-darwin-arm64": "1.30.2",
        "lightningcss-darwin-x64": "1.30.2",
        "lightningcss-freebsd-x64": "1.30.2",
        "lightningcss-linux-arm-gnueabihf": "1.30.2",
        "lightningcss-linux-arm64-gnu": "1.30.2",
        "lightningcss-linux-arm64-musl": "1.30.2",
        "lightningcss-linux-x64-gnu": "1.30.2",
        "lightningcss-linux-x64-musl": "1.30.2",
        "lightningcss-win32-arm64-msvc": "1.30.2",
        "lightningcss-win32-x64-msvc": "1.30.2"
      }
    },
    "node_modules/lightningcss-android-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-android-arm64/-/lightningcss-android-arm64-1.30.2.tgz",
      "integrity": "sha512-BH9sEdOCahSgmkVhBLeU7Hc9DWeZ1Eb6wNS6Da8igvUwAe0sqROHddIlvU06q3WyXVEOYDZ6ykBZQnjTbmo4+A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.30.2.tgz",
      "integrity": "sha512-ylTcDJBN3Hp21TdhRT5zBOIi73P6/W0qwvlFEk22fkdXchtNTOU4Qc37SkzV+EKYxLouZ6M4LG9NfZ1qkhhBWA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.30.2.tgz",
      "integrity": "sha512-oBZgKchomuDYxr7ilwLcyms6BCyLn0z8J0+ZZmfpjwg9fRVZIR5/GMXd7r9RH94iDhld3UmSjBM6nXWM2TfZTQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.30.2.tgz",
      "integrity": "sha512-c2bH6xTrf4BDpK8MoGG4Bd6zAMZDAXS569UxCAGcA7IKbHNMlhGQ89eRmvpIUGfKWNVdbhSbkQaWhEoMGmGslA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.30.2.tgz",
      "integrity": "sha512-eVdpxh4wYcm0PofJIZVuYuLiqBIakQ9uFZmipf6LF/HRj5Bgm0eb3qL/mr1smyXIS1twwOxNWndd8z0E374hiA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.30.2.tgz",
      "integrity": "sha512-UK65WJAbwIJbiBFXpxrbTNArtfuznvxAJw4Q2ZGlU8kPeDIWEX1dg3rn2veBVUylA2Ezg89ktszWbaQnxD/e3A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.30.2.tgz",
      "integrity": "sha512-5Vh9dGeblpTxWHpOx8iauV02popZDsCYMPIgiuw97OJ5uaDsL86cnqSFs5LZkG3ghHoX5isLgWzMs+eD1YzrnA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.30.2.tgz",
      "integrity": "sha512-Cfd46gdmj1vQ+lR6VRTTadNHu6ALuw2pKR9lYq4FnhvgBc4zWY1EtZcAc6EffShbb1MFrIPfLDXD6Xprbnni4w==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.30.2.tgz",
      "integrity": "sha512-XJaLUUFXb6/QG2lGIW6aIk6jKdtjtcffUT0NKvIqhSBY3hh9Ch+1LCeH80dR9q9LBjG3ewbDjnumefsLsP6aiA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.30.2.tgz",
      "integrity": "sha512-FZn+vaj7zLv//D/192WFFVA0RgHawIcHqLX9xuWiQt7P0PtdFEVaxgF9rjM/IRYHQXNnk61/H/gb2Ei+kUQ4xQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.30.2",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.30.2.tgz",
      "integrity": "sha512-5g1yc73p+iAkid5phb4oVFMB45417DkRevRbt/El/gKXJk4jid+vPFF/AXbxn05Aky8PapwzZrdJShv5C0avjw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lru-cache": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-5.1.1.tgz",
      "integrity": "sha512-KpNARQA3Iwv+jTA0utUVVbrh+Jlrr1Fv0e56GGzAFOXN7dk/FviaDW8LHmK52DlcH4WP2n6gI8vN1aesBFgo9w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "yallist": "^3.0.2"
      }
    },
    "node_modules/lucide-react": {
      "version": "0.555.0",
      "resolved": "https://registry.npmjs.org/lucide-react/-/lucide-react-0.555.0.tgz",
      "integrity": "sha512-D8FvHUGbxWBRQM90NZeIyhAvkFfsh3u9ekrMvJ30Z6gnpBHS6HC6ldLg7tL45hwiIz/u66eKDtdA23gwwGsAHA==",
      "license": "ISC",
      "peerDependencies": {
        "react": "^16.5.1 || ^17.0.0 || ^18.0.0 || ^19.0.0"
      }
    },
    "node_modules/magic-string": {
      "version": "0.30.21",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.21.tgz",
      "integrity": "sha512-vd2F4YUyEXKGcLHoq+TEyCjxueSeHnFxyyjNp80yg0XV4vUhnDer/lvvlqM/arB5bXQN5K2/3oinyCRyx8T2CQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.5"
      }
    },
    "node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.11",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.11.tgz",
      "integrity": "sha512-N8SpfPUnUp1bK+PMYW8qSWdl9U+wwNWI4QKxOYDy9JAro3WMX7p2OeVRF9v+347pnakNevPmiHhNmZ2HbFA76w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/node-releases": {
      "version": "2.0.27",
      "resolved": "https://registry.npmjs.org/node-releases/-/node-releases-2.0.27.tgz",
      "integrity": "sha512-nmh3lCkYZ3grZvqcCH+fjmQ7X+H0OeZgP40OierEaAptX4XofMh5kwNbWh7lBduUzCcV/8kZ+NDLCwm2iorIlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/normalize-range": {
      "version": "0.1.2",
      "resolved": "https://registry.npmjs.org/normalize-range/-/normalize-range-0.1.2.tgz",
      "integrity": "sha512-bdok/XvKII3nUpklnV6P2hxtMNrCboOjAcyBuQnWEhO665FwrSNRxU+AqpsyvO6LgGYPspN+lu5CLtw4jPRKNA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.3.tgz",
      "integrity": "sha512-5gTmgEY/sqK6gFXLIsQNH19lWb4ebPDLA4SdLP7dsWkIXHWlG66oPuVvXSGFPppYZz8ZDZq0dYYrbHfBCVUb1Q==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.6",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.6.tgz",
      "integrity": "sha512-3Ybi1tAuwAP9s0r1UQ2J4n5Y0G05bJkpUIO0/bI9MhwmD70S5aTWbXGBwxHrelT+XM1k6dM0pk+SwNkpTRN7Pg==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "nanoid": "^3.3.11",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-value-parser": {
      "version": "4.2.0",
      "resolved": "https://registry.npmjs.org/postcss-value-parser/-/postcss-value-parser-4.2.0.tgz",
      "integrity": "sha512-1NNCs6uurfkVbeXG4S8JFT9t19m45ICnif8zWLd5oPSZ50QnwMfK+H3jv408d4jw/7Bttv5axS5IiHoLaVNHeQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/react": {
      "version": "19.2.0",
      "resolved": "https://registry.npmjs.org/react/-/react-19.2.0.tgz",
      "integrity": "sha512-tmbWg6W31tQLeB5cdIBOicJDJRR2KzXsV7uSK9iNfLWQ5bIZfxuPEHp7M8wiHyHnn0DD1i7w3Zmin0FtkrwoCQ==",
      "license": "MIT",
      "peer": true,
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "19.2.0",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-19.2.0.tgz",
      "integrity": "sha512-UlbRu4cAiGaIewkPyiRGJk0imDN2T3JjieT6spoL2UeSf5od4n5LB/mQ4ejmxhCFT1tYe8IvaFulzynWovsEFQ==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "scheduler": "^0.27.0"
      },
      "peerDependencies": {
        "react": "^19.2.0"
      }
    },
    "node_modules/react-refresh": {
      "version": "0.18.0",
      "resolved": "https://registry.npmjs.org/react-refresh/-/react-refresh-0.18.0.tgz",
      "integrity": "sha512-QgT5//D3jfjJb6Gsjxv0Slpj23ip+HtOpnNgnb2S5zU3CB26G/IDPGoy4RJB42wzFE46DRsstbW6tKHoKbhAxw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-router": {
      "version": "7.10.0",
      "resolved": "https://registry.npmjs.org/react-router/-/react-router-7.10.0.tgz",
      "integrity": "sha512-FVyCOH4IZ0eDDRycODfUqoN8ZSR2LbTvtx6RPsBgzvJ8xAXlMZNCrOFpu+jb8QbtZnpAd/cEki2pwE848pNGxw==",
      "license": "MIT",
      "dependencies": {
        "cookie": "^1.0.1",
        "set-cookie-parser": "^2.6.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      },
      "peerDependenciesMeta": {
        "react-dom": {
          "optional": true
        }
      }
    },
    "node_modules/react-router-dom": {
      "version": "7.10.0",
      "resolved": "https://registry.npmjs.org/react-router-dom/-/react-router-dom-7.10.0.tgz",
      "integrity": "sha512-Q4haR150pN/5N75O30iIsRJcr3ef7p7opFaKpcaREy0GQit6uCRu1NEiIFIwnHJQy0bsziRFBweR/5EkmHgVUQ==",
      "license": "MIT",
      "dependencies": {
        "react-router": "7.10.0"
      },
      "engines": {
        "node": ">=20.0.0"
      },
      "peerDependencies": {
        "react": ">=18",
        "react-dom": ">=18"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/rolldown": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/rolldown/-/rolldown-1.0.0-beta.50.tgz",
      "integrity": "sha512-JFULvCNl/anKn99eKjOSEubi0lLmNqQDAjyEMME2T4CwezUDL0i6t1O9xZsu2OMehPnV2caNefWpGF+8TnzB6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@oxc-project/types": "=0.97.0",
        "@rolldown/pluginutils": "1.0.0-beta.50"
      },
      "bin": {
        "rolldown": "bin/cli.mjs"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "optionalDependencies": {
        "@rolldown/binding-android-arm64": "1.0.0-beta.50",
        "@rolldown/binding-darwin-arm64": "1.0.0-beta.50",
        "@rolldown/binding-darwin-x64": "1.0.0-beta.50",
        "@rolldown/binding-freebsd-x64": "1.0.0-beta.50",
        "@rolldown/binding-linux-arm-gnueabihf": "1.0.0-beta.50",
        "@rolldown/binding-linux-arm64-gnu": "1.0.0-beta.50",
        "@rolldown/binding-linux-arm64-musl": "1.0.0-beta.50",
        "@rolldown/binding-linux-x64-gnu": "1.0.0-beta.50",
        "@rolldown/binding-linux-x64-musl": "1.0.0-beta.50",
        "@rolldown/binding-openharmony-arm64": "1.0.0-beta.50",
        "@rolldown/binding-wasm32-wasi": "1.0.0-beta.50",
        "@rolldown/binding-win32-arm64-msvc": "1.0.0-beta.50",
        "@rolldown/binding-win32-ia32-msvc": "1.0.0-beta.50",
        "@rolldown/binding-win32-x64-msvc": "1.0.0-beta.50"
      }
    },
    "node_modules/rolldown/node_modules/@rolldown/pluginutils": {
      "version": "1.0.0-beta.50",
      "resolved": "https://registry.npmjs.org/@rolldown/pluginutils/-/pluginutils-1.0.0-beta.50.tgz",
      "integrity": "sha512-5e76wQiQVeL1ICOZVUg4LSOVYg9jyhGCin+icYozhsUzM+fHE7kddi1bdiE0jwVqTfkjba3jUFbEkoC9WkdvyA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/scheduler": {
      "version": "0.27.0",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.27.0.tgz",
      "integrity": "sha512-eNv+WrVbKu1f3vbYJT/xtiF5syA5HPIMtf9IgY/nKg0sWqzAUEvqY/xm7OcZc/qafLx/iO9FgOmeSAp4v5ti/Q==",
      "license": "MIT"
    },
    "node_modules/semver": {
      "version": "6.3.1",
      "resolved": "https://registry.npmjs.org/semver/-/semver-6.3.1.tgz",
      "integrity": "sha512-BR7VvDCVHO+q2xBEWskxS6DJE1qRnb7DxzUrogb71CWoSficBxYsiAGd+Kl0mmq/MprG9yArRkyrQxTO6XjMzA==",
      "dev": true,
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      }
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.2",
      "resolved": "https://registry.npmjs.org/set-cookie-parser/-/set-cookie-parser-2.7.2.tgz",
      "integrity": "sha512-oeM1lpU/UvhTxw+g3cIfxXHyJRc/uidd3yK1P242gzHds0udQBYzs3y8j4gCCW+ZJ7ad0yctld8RYO+bdurlvw==",
      "license": "MIT"
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.1.17",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.1.17.tgz",
      "integrity": "sha512-j9Ee2YjuQqYT9bbRTfTZht9W/ytp5H+jJpZKiYdP/bpnXARAuELt9ofP0lPnmHjbga7SNQIxdTAXCmtKVYjN+Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.3.0.tgz",
      "integrity": "sha512-g9ljZiwki/LfxmQADO3dEY1CbpmXT5Hm2fJ+QaGKwSXUylMybePR7/67YW7jOrrvjEgL1Fmz5kzyAjWVWLlucg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/webpack"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.15",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.15.tgz",
      "integrity": "sha512-j2Zq4NyQYG5XMST4cbs02Ak8iJUdxRM0XI5QyxXuZOzKOINmWurp3smXu3y5wDcJrptwpSjgXHzIQxR0omXljQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.5.0",
        "picomatch": "^4.0.3"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "license": "0BSD"
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/undici-types": {
      "version": "7.16.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.16.0.tgz",
      "integrity": "sha512-Zz+aZWSj8LE6zoxD+xrjh4VfkIG8Ya6LvYkZqtUQGJPZjYl53ypCaUwWqo7eI0x66KBGeRo+mlBEkMSeSZ38Nw==",
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.4.tgz",
      "integrity": "sha512-q0SPT4xyU84saUX+tomz1WLkxUbuaJnR1xWt17M7fJtEJigJeWUNGUqrauFXsHnqev9y9JTRGwk13tFBuKby4A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/vite": {
      "name": "rolldown-vite",
      "version": "7.2.5",
      "resolved": "https://registry.npmjs.org/rolldown-vite/-/rolldown-vite-7.2.5.tgz",
      "integrity": "sha512-u09tdk/huMiN8xwoiBbig197jKdCamQTtOruSalOzbqGje3jdHiV0njQlAW0YvzoahkirFePNQ4RYlfnRQpXZA==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "@oxc-project/runtime": "0.97.0",
        "fdir": "^6.5.0",
        "lightningcss": "^1.30.2",
        "picomatch": "^4.0.3",
        "postcss": "^8.5.6",
        "rolldown": "1.0.0-beta.50",
        "tinyglobby": "^0.2.15"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^20.19.0 || >=22.12.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^20.19.0 || >=22.12.0",
        "esbuild": "^0.25.0",
        "jiti": ">=1.21.0",
        "less": "^4.0.0",
        "sass": "^1.70.0",
        "sass-embedded": "^1.70.0",
        "stylus": ">=0.54.8",
        "sugarss": "^5.0.0",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "esbuild": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ws": {
      "version": "8.18.3",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.18.3.tgz",
      "integrity": "sha512-PEIGCY5tSlUt50cqyMXfCzX+oOPqN0vuGqWzbcJ2xvnkzkq46oOpz7dQaTDBdfICb4N14+GARUDw2XV2N4tvzg==",
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zod": {
      "version": "4.1.13",
      "resolved": "https://registry.npmjs.org/zod/-/zod-4.1.13.tgz",
      "integrity": "sha512-AvvthqfqrAhNH9dnfmrfKzX5upOdjUVJYFqNSlkmGf64gRaTzlPwz99IHYnVs28qYAybvAlBV+H7pn0saFY4Ig==",
      "dev": true,
      "license": "MIT",
      "peer": true,
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "node_modules/zod-validation-error": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/zod-validation-error/-/zod-validation-error-4.0.2.tgz",
      "integrity": "sha512-Q6/nZLe6jxuU80qb/4uJ4t5v2VEZ44lzQjPDhYJNztRQ4wyWc6VF3D3Kb/fAuPetZQnhS3hnajCf9CsWesghLQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "zod": "^3.25.0 || ^4.0.0"
      }
    }
  }
}

```

### 📄 `package.json`

```json
{
  "name": "lego-vite",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.87.1",
    "lucide-react": "^0.555.0",
    "react": "^19.2.0",
    "react-dom": "^19.2.0",
    "react-router-dom": "^7.10.0"
  },
  "devDependencies": {
    "@eslint/js": "^9.39.1",
    "@tailwindcss/postcss": "^4.1.17",
    "@types/react": "^19.2.5",
    "@types/react-dom": "^19.2.3",
    "@vitejs/plugin-react": "^5.1.1",
    "autoprefixer": "^10.4.22",
    "eslint": "^9.39.1",
    "eslint-plugin-react-hooks": "^7.0.1",
    "eslint-plugin-react-refresh": "^0.4.24",
    "globals": "^16.5.0",
    "postcss": "^8.5.6",
    "tailwindcss": "^4.1.17",
    "vite": "npm:rolldown-vite@7.2.5"
  },
  "overrides": {
    "vite": "npm:rolldown-vite@7.2.5"
  }
}

```

### 📄 `postcss.config.js`

```javascript
export default {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
```

### 📄 `src\App.css`

```css
/* ==================== 桌面版（預設）==================== */

/* Header */
.header-container {
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.header-logo h1 {
  font-size: 24px;
  font-weight: bold;
  color: #1f2937;
  margin: 0;
  white-space: nowrap;
}

.header-buttons {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* SearchBar */
.searchbar-tabs {
  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.searchbar-tabs-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  gap: 8px;
}

.searchbar-filters-wrapper {
  background-color: white;
  padding: 20px 0;
  border-bottom: 1px solid #e5e7eb;
}

.searchbar-filters-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
}

.searchbar-filters-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 12px;
  align-items: end;
}

/* Main Container */
.main-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 24px 24px 120px 24px;
}

/* Content Grid (Left Ad + Posts + Right Ad) */
.content-grid {
  display: grid;
  grid-template-columns: 160px 1fr 160px;
  gap: 30px; /* ✅ 先清零 */
  margin-top: 24px;
}

.side-ad {
  position: sticky;
  top: 100px;
  height: fit-content;
}



/* Posts Grid */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 0px;
  align-content: start;
}

/* Bottom Ad */
.bottom-ad {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background-color: #f3f4f6;
  border-top: 2px dashed #d1d5db;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 14px;
  z-index: 100;
}

/* ==================== 📱 手機版 (< 768px) ==================== */
@media (max-width: 768px) {
  /* Header */
  .header-content {
    padding: 0 16px;
    flex-wrap: wrap;
    gap: 12px;
  }

  .header-logo h1 {
    font-size: 18px !important;
  }

  .header-buttons {
    flex-wrap: wrap;
    gap: 8px !important;
  }

  .header-buttons button,
  .header-buttons > div {
    font-size: 12px !important;
    padding: 8px 12px !important;
  }

  /* SearchBar */
  .searchbar-tabs-content {
    padding: 0 16px;
  }

  .searchbar-filters-content {
    padding: 0 16px;
  }

  .searchbar-filters-grid {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
  }

  /* Main Container */
  .main-container {
    padding: 12px 12px 80px 12px !important;
  }

  /* 隱藏左右廣告 */
  .content-grid {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
  }

  .side-ad {
    display: none !important;
  }

  /* PostCard 變單列 */
  .posts-grid {
    grid-template-columns: 1fr !important;
  }

  /* 底部廣告 */
  .bottom-ad {
    height: 60px !important;
    font-size: 12px !important;
  }
}

/* ==================== 📱 平板版 (768px ~ 1024px) ==================== */
@media (min-width: 768px) and (max-width: 1024px) {
  /* 隱藏左右廣告 */
  .content-grid {
    grid-template-columns: 1fr !important;
  }

  .side-ad {
    display: none !important;
  }

  /* PostCard 變 2 列 */
  .posts-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

/* ==================== PostDetailModal 手機版 ==================== */
@media (max-width: 768px) {
  .post-detail-modal {
    margin: 10px !important;
    max-height: 95vh !important;
  }

  .post-detail-modal h2 {
    font-size: 16px !important;
  }

  .post-detail-modal h3 {
    font-size: 14px !important;
  }

  /* Header 區域 */
  .post-detail-modal > div:first-child {
    padding: 16px !important;
  }

  /* 內容區域 */
  .post-detail-modal > div:last-child {
    padding: 16px !important;
  }
}

/* ==================== MyPostsModal 手機版 ==================== */
@media (max-width: 768px) {
  .my-posts-modal {
    margin: 10px !important;
    max-height: 95vh !important;
  }

  .my-posts-header {
    padding: 16px !important;
    flex-direction: column;
    align-items: flex-start !important;
    gap: 12px;
  }

  .my-posts-header h2 {
    font-size: 20px !important;
  }

  .my-posts-header p {
    font-size: 12px !important;
  }

  .my-posts-modal > div:last-child {
    padding: 16px !important;
  }

  .post-card {
    padding: 16px !important;
  }

  .post-card-header {
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  .post-actions {
    width: 100%;
    justify-content: flex-start;
  }

  .post-actions button {
    flex: 1;
    min-width: 100px;
  }

  .item-card {
    padding: 10px !important;
  }

  .item-card > div {
    flex-direction: column !important;
    align-items: flex-start !important;
  }
}

/* 平板版 (768px - 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .my-posts-modal {
    max-width: 90% !important;
  }

  .post-card-header {
    gap: 16px;
  }
}

      /* ========================================
          📱 Responsive CSS (內嵌在組件中)
          ======================================== */

        /* ==================== 手機版 (< 768px) ==================== */
        @media (max-width: 768px) {
          .create-post-overlay {
            padding: 10px !important;
          }

          .create-post-modal {
            padding: 16px !important;
            margin: 0 !important;
          }

          .modal-header h2 {
            font-size: 18px !important;
          }

          .modal-header p {
            font-size: 12px !important;
          }

          .type-selector {
            padding: 12px !important;
          }

          .type-selector button {
            font-size: 13px !important;
            padding: 10px !important;
          }

          /* 隱藏桌面版 Table Header */
          .table-header-desktop {
            display: none !important;
          }

          /* 隱藏桌面版 Grid */
          .item-row-desktop {
            display: none !important;
          }

          /* 顯示手機版 Card */
          .item-row-mobile {
            display: block !important;
          }

          .custom-input {
            padding-left: 0 !important;
          }

          .modal-footer {
            flex-direction: column !important;
          }

          .modal-footer button {
            width: 100% !important;
            min-width: unset !important;
          }
        }

        /* ==================== 平板版 (768px ~ 1024px) ==================== */
        @media (min-width: 768px) and (max-width: 1024px) {
          .table-header-desktop {
            font-size: 12px !important;
          }

          .item-row-desktop {
            grid-template-columns: 1.5fr 1fr 1fr 0.8fr 1fr 50px !important;
            gap: 8px !important;
          }

          .item-row-desktop input,
          .item-row-desktop select {
            font-size: 13px !important;
            padding: 8px 10px !important;
          }
        }

        /* ==================== 桌面版 (>= 1024px) ==================== */
        @media (min-width: 1024px) {
          .item-row-mobile {
            display: none !important;
          }
        }
/* ========================================
   ✅ EditPostModal Responsive
   ======================================== */

/* 📱 手機版 (< 768px) */
@media (max-width: 768px) {
  .edit-post-overlay {
    padding: 0 !important;
  }

  .edit-post-modal {
    max-width: 100% !important;
    max-height: 100vh !important;
    border-radius: 0 !important;
    height: 100vh !important;
  }

  .edit-modal-header {
    padding: 16px !important;
  }

  .edit-modal-header h2 {
    font-size: 18px !important;
  }

  .edit-modal-warning {
    margin: 16px !important;
    padding: 12px !important;
    font-size: 12px !important;
  }

  .edit-modal-content {
    padding: 0 16px 16px 16px !important;
  }

  /* 手機版：改用 Card Layout */
  .edit-item-card {
    grid-template-columns: 1fr !important;
    gap: 12px !important;
    padding: 16px !important;
  }

  .edit-item-header {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    padding-bottom: 12px !important;
    border-bottom: 2px solid #e5e7eb !important;
  }

  .edit-item-part-number {
    font-size: 16px !important;
  }

  .edit-item-color-badge {
    font-size: 11px !important;
    padding: 4px 8px !important;
  }

  /* 手機版：2 欄排列 */
  .edit-item-fields {
    display: grid !important;
    grid-template-columns: 1fr 1fr !important;
    gap: 12px !important;
  }

  .edit-item-field label {
    font-size: 11px !important;
    margin-bottom: 4px !important;
  }

  .edit-item-field input,
  .edit-item-field select {
    padding: 8px 10px !important;
    font-size: 14px !important;
  }

  /* 手機版：小計滿寬 */
  .edit-item-total {
    grid-column: 1 / -1 !important;
  }

  .edit-item-total-value {
    padding: 12px !important;
    font-size: 16px !important;
    text-align: center !important;
  }

  .edit-modal-footer {
    flex-direction: column !important;
    gap: 10px !important;
  }

  .edit-modal-footer button {
    width: 100% !important;
    flex: none !important;
  }
}

/* 📱 平板版 (768px ~ 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .edit-post-modal {
    max-width: 90% !important;
  }

  .edit-item-card {
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr !important;
    gap: 10px !important;
  }

  .edit-item-header {
    display: none !important;
  }

  .edit-item-fields {
    display: contents !important;
  }

  .edit-item-field label {
    font-size: 11px !important;
  }

  .edit-item-field input,
  .edit-item-field select {
    font-size: 13px !important;
    padding: 8px 10px !important;
  }
}

/* 💻 桌面版 (>= 1024px) */
@media (min-width: 1024px) {
  .edit-item-header {
    display: none !important;
  }

  .edit-item-fields {
    display: contents !important;
  }
}

/* ========================================
   ✅ QuickChatModal Responsive
   ======================================== */

/* 📱 手機版 (< 768px) */
@media (max-width: 768px) {
  .quick-chat-overlay {
    padding: 0 !important;
  }

  .quick-chat-modal {
    max-width: 100% !important;
    max-height: 100vh !important;
    border-radius: 0 !important;
    height: 100vh !important;
  }

  .quick-chat-header {
    padding: 16px !important;
  }

  .quick-chat-header h3 {
    font-size: 16px !important;
  }

  .quick-chat-item-info {
    flex-direction: column !important;
    gap: 10px !important;
  }

  .quick-chat-item-icon {
    width: 50px !important;
    height: 50px !important;
  }

  .quick-chat-item-details {
    font-size: 12px !important;
  }

  .quick-chat-messages {
    padding: 16px !important;
  }

  .quick-chat-ad {
    padding: 16px !important;
    font-size: 12px !important;
  }

  .quick-chat-input-form {
    padding: 12px 16px !important;
  }

  .quick-chat-textarea {
    min-height: 45px !important;
    font-size: 14px !important;
    padding: 10px !important;
  }

  .quick-chat-send-btn {
    padding: 10px 16px !important;
    font-size: 13px !important;
  }
}

/* ========================================
   ✅ MessageCenter Responsive
   ======================================== */

/* 📱 手機版 (< 768px) */
@media (max-width: 768px) {
  .message-center-overlay {
    padding: 0 !important;
  }

  .message-center-modal {
    max-width: 100% !important;
    height: 100vh !important;
    border-radius: 0 !important;
  }

  .message-center-header {
    padding: 16px !important;
  }

  .message-center-header h2 {
    font-size: 18px !important;
  }

  .message-center-main {
    grid-template-columns: 1fr !important;
  }

  /* 手機版：當有選中對話時隱藏列表 */
  .conversation-list.has-selection {
    display: none !important;
  }

  /* 手機版：當沒選中對話時隱藏聊天窗 */
  .chat-window.no-selection {
    display: none !important;
  }

  /* 手機版：顯示返回按鈕 */
  .chat-back-button {
    display: flex !important;
  }
}

/* 💻 桌面版 (>= 768px) */
@media (min-width: 768px) {
  .chat-back-button {
    display: none !important;
  }
}

/* ========================================
   ✅ ConversationList Responsive
   ======================================== */

/* 📱 手機版 (< 768px) */
@media (max-width: 768px) {
  .conversation-item {
    padding: 14px !important;
  }

  .conversation-icon {
    width: 45px !important;
    height: 45px !important;
  }

  .conversation-username {
    font-size: 13px !important;
  }

  .conversation-part-number {
    font-size: 11px !important;
  }

  .conversation-last-message {
    font-size: 12px !important;
  }

  .conversation-time {
    font-size: 10px !important;
  }

  .conversation-badge {
    font-size: 9px !important;
    padding: 2px 5px !important;
  }
}

/* ========================================
   ✅ ChatWindow Responsive
   ======================================== */

/* 📱 手機版 (< 768px) */
@media (max-width: 768px) {
  .chat-window-header {
    padding: 14px 16px !important;
  }

  .chat-user-avatar {
    width: 36px !important;
    height: 36px !important;
    font-size: 14px !important;
  }

  .chat-user-name {
    font-size: 15px !important;
  }

  .chat-post-title {
    font-size: 11px !important;
  }

  .chat-messages-container {
    padding: 16px !important;
  }

  .chat-input-form {
    padding: 12px 16px !important;
  }

  .chat-textarea {
    min-height: 45px !important;
    font-size: 14px !important;
    padding: 10px !important;
  }

  .chat-send-btn {
    padding: 10px 16px !important;
    font-size: 13px !important;
  }
}

/* ========================================
   ✅ MessageBubble Responsive
   ======================================== */

/* 📱 手機版 (< 768px) */
@media (max-width: 768px) {
  .message-bubble-wrapper {
    max-width: 85% !important;
  }

  .message-bubble {
    font-size: 13px !important;
    padding: 9px 12px !important;
  }

  .message-sender-name {
    font-size: 10px !important;
    padding-left: 10px !important;
  }

  .message-time {
    font-size: 9px !important;
  }
}
```

### 📄 `src\App.jsx`

```jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PostCard from './components/PostCard';
import CreatePostModal from './components/CreatePostModal';
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';
import MessageCenter from './components/MessageCenter/MessageCenter';
import PostDetailModal from './components/PostDetailModal';
import ResourcesPage from './components/ResourcesPage'; // ✅ 新增
import { postsAPI, authAPI, tokenManager, userManager } from './api';
import PromotionBanner from './components/PromotionBanner';
import BulkSalePromo from './components/BulkSalePromo';


function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('sell');
  const [filters, setFilters] = useState({ itemDescription: '', category: '' });
  const [showCreatePost, setShowCreatePost] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const [showMessageCenter, setShowMessageCenter] = useState(false);
  const [selectedPostDetail, setSelectedPostDetail] = useState(null);
  const [selectedConversationId, setSelectedConversationId] = useState(null);
  
  const [currentPage, setCurrentPage] = useState('home'); // ✅ 新增：頁面狀態

  useEffect(() => {
    initializeApp();
  }, []);

  const initializeApp = async () => {
    try {
      if (tokenManager.isAuthenticated()) {
        const user = userManager.getUser();
        setCurrentUser(user);
        
        try {
          const freshUser = await authAPI.getCurrentUser();
          setCurrentUser(freshUser);
          userManager.setUser(freshUser);
        } catch (error) {
          console.error('刷新用戶資料失敗:', error);
          handleLogout();
        }
      }

      await loadPosts();
      
    } catch (error) {
      console.error('初始化失敗:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadPosts = async () => {
    try {
      const data = await postsAPI.getAll();
      setPosts(data);
      setFilteredPosts(data);
    } catch (error) {
      console.error('載入帖子失敗:', error);
      alert('載入帖子失敗，請重新整理頁面');
    }
  };

  useEffect(() => {
    let filtered = posts;

    if (activeTab) {
      filtered = filtered.filter(post => post.type === activeTab);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(post =>
        post.username?.toLowerCase().includes(query) ||
        post.items?.some(item => 
          item.item_description?.toLowerCase().includes(query) ||
          item.category?.toLowerCase().includes(query) ||
          item.brand?.toLowerCase().includes(query)
        )
      );
    }

    if (filters.itemDescription) {
      filtered = filtered.filter(post =>
        post.items?.some(item => 
          item.item_description?.toLowerCase().includes(filters.itemDescription.toLowerCase())
        )
      );
    }

    if (filters.category) {
      filtered = filtered.filter(post =>
        post.items?.some(item => item.category === filters.category)
      );
    }

    setFilteredPosts(filtered);
  }, [searchQuery, activeTab, filters, posts]);

  const handleLogin = async (username, password) => {
    try {
      const result = await authAPI.login({ username, password });
      setCurrentUser(result.user);
      setShowLogin(false);
      alert(`歡迎返嚟，${result.user.username}！`);
      
      try {
        await loadPosts();
      } catch (err) {
        console.error('重新載入帖子失敗:', err);
      }
    } catch (error) {
      alert('登入失敗：' + error.message);
      throw error;
    }
  };

  const handleRegister = async (userData) => {
    try {
      const result = await authAPI.register(userData);
      setCurrentUser(result.user);
      setShowRegister(false);
      alert(`註冊成功！歡迎 ${result.user.username}！`);
      
      try {
        await loadPosts();
      } catch (err) {
        console.error('重新載入帖子失敗:', err);
      }
    } catch (error) {
      alert('註冊失敗：' + error.message);
      throw error;
    }
  };

  const handleLogout = async () => {
    try {
      await authAPI.logout();
      setCurrentUser(null);
      alert('已成功登出！');
      await loadPosts();
    } catch (error) {
      console.error('登出失敗:', error);
    }
  };

  const handleCreatePost = async (postData) => {
    try {
      await postsAPI.create(postData);
      alert('帖子發佈成功！');
      setShowCreatePost(false);
      
      await Promise.allSettled([
        loadPosts(),
        authAPI.getCurrentUser().then(user => {
          setCurrentUser(user);
          userManager.setUser(user);
        })
      ]);
    } catch (error) {
      alert('發佈失敗：' + error.message);
      throw error;
    }
  };

  const handleLike = async (postId) => {
    if (!currentUser) {
      alert('請先登入才能點讚！');
      setShowLogin(true);
      return;
    }

    try {
      const result = await postsAPI.toggleLike(postId);
      
      const updatePost = (post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes_count: result.likes_count,
            is_liked: result.is_liked
          };
        }
        return post;
      };

      setPosts(posts.map(updatePost));
      
      if (selectedPostDetail && selectedPostDetail.id === postId) {
        setSelectedPostDetail({
          ...selectedPostDetail,
          likes_count: result.likes_count,
          is_liked: result.is_liked
        });
      }
    } catch (error) {
      alert('點讚失敗：' + error.message);
    }
  };

  const handleShowDetail = (post) => {
    setSelectedPostDetail(post);
  };

  const handleMessageCenterClick = () => {
    if (!currentUser) {
      alert('請先登入！');
      setShowLogin(true);
      return;
    }
    setSelectedConversationId(null);
    setShowMessageCenter(true);
  };

  const handleUserUpdate = (updatedUser) => {
    setCurrentUser(updatedUser);
    userManager.setUser(updatedUser);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-2">載入中...</div>
          <div className="text-gray-600">請稍候</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentUser={currentUser}
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
        onLogout={handleLogout}
        onCreatePostClick={() => {
          if (!currentUser) {
            alert('請先登入！');
            setShowLogin(true);
          } else if (currentUser.tokens <= 0) {
            alert('你已經冇發佈機會喇！請聯絡管理員。');
          } else {
            setShowCreatePost(true);
          }
        }}
        onMessageCenterClick={handleMessageCenterClick}
        onUserUpdate={handleUserUpdate}
        onResourcesClick={() => setCurrentPage('resources')} // ✅ 新增
        onHomeClick={() => setCurrentPage('home')}           // ✅ 新增
      />

      {/* ✅ 根據 currentPage 顯示不同內容 */}
      {currentPage === 'home' ? (
        <main className="main-container">
          <SearchBar 
            activeTab={activeTab}
            onTabChange={setActiveTab}
            searchTerm={searchQuery}
            onSearchChange={setSearchQuery}
            filters={filters}
            onFilterChange={setFilters}
          />

          <div className="content-grid">
            <div className="side-ad">
              <PromotionBanner onRegisterClick={() => setShowRegister(true)} />
            </div>

            <div className="posts-grid">
              {filteredPosts.length === 0 ? (
                <div 
                  className="text-center py-12 bg-white rounded-lg shadow" 
                  style={{ gridColumn: '1 / -1' }}
                >
                  <p className="text-gray-500 text-lg">
                    {searchQuery || filters.itemDescription || filters.category ? '搵唔到相關帖子' : '暫時未有帖子'}
                  </p>
                </div>
              ) : (
                filteredPosts.map(post => (
                  <PostCard
                    key={post.id}
                    post={post}
                    currentUser={currentUser}
                    onLike={handleLike}
                    onShowDetail={handleShowDetail}
                  />
                ))
              )}
            </div>

            <div className="side-ad">
              <BulkSalePromo onRegisterClick={() => setShowRegister(true)} />
            </div>
          </div>
        </main>
      ) : (
        // ✅ 顯示 BB 資源頁面
        <ResourcesPage currentUser={currentUser} />
      )}

      <div className="bottom-ad">
        🖼️ 底部廣告位（待申請）
      </div>

      {/* Modals */}
      {showCreatePost && (
        <CreatePostModal
          onClose={() => setShowCreatePost(false)}
          onCreatePost={handleCreatePost}
          currentUser={currentUser}
        />
      )}

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={handleLogin}
          onSwitchToRegister={() => {
            setShowLogin(false);
            setShowRegister(true);
          }}
        />
      )}

      {showRegister && (
        <RegisterModal
          onClose={() => setShowRegister(false)}
          onRegister={handleRegister}
          onSwitchToLogin={() => {
            setShowRegister(false);
            setShowLogin(true);
          }}
        />
      )}

      {showMessageCenter && (
        <MessageCenter
          currentUser={currentUser}
          initialConversationId={selectedConversationId}
          onClose={() => {
            setShowMessageCenter(false);
            setSelectedConversationId(null);
          }}
        />
      )}

      {selectedPostDetail && (
        <PostDetailModal
          post={selectedPostDetail}
          currentUser={currentUser}
          onClose={() => setSelectedPostDetail(null)}
          onLike={handleLike}
        />
      )}
    </div>
  );
}

export default App;
```

### 📄 `src\api.js`

```javascript
const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

export const tokenManager = {
  setToken: (token) => {
    localStorage.setItem('authToken', token);
  },
  getToken: () => {
    return localStorage.getItem('authToken');
  },
  removeToken: () => {
    localStorage.removeItem('authToken');
  },
  isAuthenticated: () => {
    return !!localStorage.getItem('authToken');
  }
};

export const userManager = {
  setUser: (user) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
  },
  getUser: () => {
    const userStr = localStorage.getItem('currentUser');
    return userStr ? JSON.parse(userStr) : null;
  },
  removeUser: () => {
    localStorage.removeItem('currentUser');
  }
};

async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  };

  const token = tokenManager.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  try {
    const response = await fetch(url, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || '請求失敗');
    }

    return data;
  } catch (error) {
    console.error('API 錯誤:', error);
    throw error;
  }
}

export const authAPI = {
  register: async (userData) => {
    const result = await request('/auth/register', {
      method: 'POST',
      body: JSON.stringify(userData),
    });
    
    if (result.token) {
      tokenManager.setToken(result.token);
      userManager.setUser(result.user);
    }
    
    return result;
  },

  login: async (credentials) => {
    const result = await request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password
      }),
    });
    
    if (result.token) {
      tokenManager.setToken(result.token);
      userManager.setUser(result.user);
    }
    
    return result;
  },

  logout: async () => {
    try {
      await request('/auth/logout', { method: 'POST' });
    } catch (error) {
      console.error('登出錯誤:', error);
    } finally {
      tokenManager.removeToken();
      userManager.removeUser();
    }
  },

  getCurrentUser: async () => {
    return await request('/auth/me');
  }
};

export const postsAPI = {
  getAll: async () => {
    return await request('/posts');
  },

  getById: async (id) => {
    return await request(`/posts/${id}`);
  },

  create: async (postData) => {
    return await request('/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  },

  update: async (id, postData) => {
    return await request(`/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
    });
  },

  delete: async (id) => {
    return await request(`/posts/${id}`, {
      method: 'DELETE',
    });
  },

  toggleLike: async (id) => {
    return await request(`/posts/${id}/like`, {
      method: 'POST',
    });
  }
};

export const conversationsAPI = {
  getAll: async () => {
    return await request('/conversations');
  },

  startOrGet: async (postId) => {
    return await request('/conversations', {
      method: 'POST',
      body: JSON.stringify({ post_id: postId }),
    });
  },

  getMessages: async (conversationId) => {
    return await request(`/conversations/${conversationId}/messages`);
  },

  sendMessage: async (conversationId, content) => {
    return await request(`/conversations/${conversationId}/messages`, {
      method: 'POST',
      body: JSON.stringify({ content }),
    });
  },

  markAsRead: async (conversationId) => {
    return await request(`/conversations/${conversationId}/read`, {
      method: 'PUT',
    });
  },

  getUnreadCount: async () => {
    return await request('/conversations/unread-count');
  }
};

export const tokensAPI = {
  earnByWatchingAd: async () => {
    return await request('/tokens/earn', {
      method: 'POST',
      body: JSON.stringify({})
    });
  }
};

export const statsAPI = {
  getUserStats: async () => {
    return await request('/stats/user');
  },

  getGlobalStats: async () => {
    return await request('/stats/global');
  }
};

// ✅ Export request function 俾其他組件用
export { request }; 
```

### 📄 `src\components\AdminPanel.jsx`

```jsx
import { useState, useEffect } from 'react';
import { X, Users, Plus, RefreshCw } from 'lucide-react';
import { request } from '../api';  // ✅ 加呢行

function AdminPanel({ onClose, currentUser }) {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [tokenAmount, setTokenAmount] = useState('');
  const [tokenDescription, setTokenDescription] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      
      // ✅ 改用 request
      const [usersData, statsData] = await Promise.all([
        request('/admin/users'),
        request('/admin/stats/overview')
      ]);

      setUsers(usersData);
      setStats(statsData);
    } catch (error) {
      console.error('載入數據失敗:', error);
      alert('載入失敗：' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTokens = async () => {
    if (!selectedUser || !tokenAmount || tokenAmount <= 0) {
      alert('請填寫有效數量！');
      return;
    }

    try {
      // ✅ 改用 request
      const result = await request(`/admin/users/${selectedUser.id}/add-tokens`, {
        method: 'POST',
        body: JSON.stringify({
          amount: parseInt(tokenAmount),
          description: tokenDescription || `管理員增加 ${tokenAmount} 次發佈機會`
        })
      });

      alert(result.message);
      setTokenAmount('');
      setTokenDescription('');
      setSelectedUser(null);
      await loadData();
    } catch (error) {
      alert('操作失敗：' + error.message);
    }
  };

  const formatDate = (dateString) => {
    if (!dateString) return '從未登入';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return '從未登入';
    }
  };

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999
      }}>
        <div style={{
          backgroundColor: 'white',
          padding: '40px',
          borderRadius: '12px',
          fontSize: '18px',
          fontWeight: '600',
          color: '#3b82f6'
        }}>
          載入中...
        </div>
      </div>
    );
  }

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        padding: '20px',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '1400px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '24px',
          borderBottom: '2px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f9fafb'
        }}>
          <div>
            <h2 style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: '700',
              color: '#1f2937'
            }}>
              ⚙️ 管理員後台
            </h2>
            <p style={{
              margin: '4px 0 0 0',
              fontSize: '14px',
              color: '#6b7280'
            }}>
              管理用戶 Token 及查看統計數據
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              onClick={loadData}
              style={{
                padding: '10px 16px',
                backgroundColor: '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
            >
              <RefreshCw size={16} />
              重新整理
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fee2e2'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <X size={24} color="#dc2626" />
            </button>
          </div>
        </div>

        {/* 統計卡片 */}
        {stats && (
          <div style={{
            padding: '24px',
            borderBottom: '2px solid #e5e7eb',
            backgroundColor: '#ffffff'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px'
            }}>
              <StatCard
                title="總用戶數"
                value={stats.total_users}
                icon="👥"
                color="#3b82f6"
              />
              <StatCard
                title="活躍貼文"
                value={stats.active_posts}
                icon="📝"
                color="#10b981"
              />
              <StatCard
                title="出售貼文"
                value={stats.sell_posts}
                icon="💰"
                color="#f59e0b"
              />
              <StatCard
                title="求購貼文"
                value={stats.buy_posts}
                icon="🛒"
                color="#6366f1"
              />
              <StatCard
                title="剩餘 Token"
                value={stats.total_tokens_remaining}
                icon="🎟️"
                color="#8b5cf6"
              />
              <StatCard
                title="已用 Token"
                value={stats.total_tokens_used}
                icon="📊"
                color="#ef4444"
              />
              <StatCard
                title="7天活躍用戶"
                value={stats.active_users_7d}
                icon="⚡"
                color="#ec4899"
              />
            </div>
          </div>
        )}

        {/* 用戶列表 */}
        <div style={{
          flex: 1,
          overflow: 'auto',
          padding: '24px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Users size={20} color="#3b82f6" />
            用戶管理
          </h3>

          <div style={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            overflow: 'hidden'
          }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse'
            }}>
              <thead>
                <tr style={{
                  backgroundColor: '#f9fafb',
                  borderBottom: '2px solid #e5e7eb'
                }}>
                  <th style={tableHeaderStyle}>用戶</th>
                  <th style={tableHeaderStyle}>電郵</th>
                  <th style={tableHeaderStyle}>電話</th>
                  <th style={tableHeaderStyle}>Token 餘額</th>
                  <th style={tableHeaderStyle}>已用 Token</th>
                  <th style={tableHeaderStyle}>貼文數</th>
                  <th style={tableHeaderStyle}>點讚數</th>
                  <th style={tableHeaderStyle}>最後登入</th>
                  <th style={tableHeaderStyle}>操作</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr 
                    key={user.id}
                    style={{
                      backgroundColor: index % 2 === 0 ? 'white' : '#f9fafb',
                      borderBottom: '1px solid #e5e7eb'
                    }}
                  >
                    <td style={tableCellStyle}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                      }}>
                        <div style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '50%',
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          flexShrink: 0
                        }}>
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <div style={{ fontWeight: '600', color: '#1f2937' }}>
                            {user.username}
                          </div>
                          {user.is_admin && (
                            <div style={{
                              fontSize: '10px',
                              color: '#ef4444',
                              fontWeight: '600'
                            }}>
                              👑 管理員
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ fontSize: '13px', color: '#6b7280' }}>
                        {user.email}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ fontSize: '13px', color: '#6b7280', fontFamily: 'monospace' }}>
                        {user.phone}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        backgroundColor: user.tokens > 0 ? '#dcfce7' : '#fee2e2',
                        color: user.tokens > 0 ? '#15803d' : '#dc2626',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: '700'
                      }}>
                        {user.tokens}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: '600' }}>
                        {user.total_tokens_used}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: '600' }}>
                        {user.posts_count}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: '600' }}>
                        {user.likes_count}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <div style={{ fontSize: '12px', color: '#9ca3af' }}>
                        {formatDate(user.last_login)}
                      </div>
                    </td>
                    <td style={tableCellStyle}>
                      <button
                        onClick={() => setSelectedUser(user)}
                        style={{
                          padding: '6px 12px',
                          backgroundColor: '#3b82f6',
                          color: 'white',
                          border: 'none',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                      >
                        <Plus size={14} />
                        增加
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 增加 Token 彈窗 */}
      {selectedUser && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999999
          }}
          onClick={() => setSelectedUser(null)}
        >
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              padding: '32px',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#1f2937',
              marginBottom: '8px'
            }}>
              💰 增加 Token 給 {selectedUser.username}
            </h3>
            <p style={{
              fontSize: '14px',
              color: '#6b7280',
              marginBottom: '24px'
            }}>
              目前餘額：<strong style={{ color: '#3b82f6', fontSize: '16px' }}>{selectedUser.tokens}</strong> 次
            </p>

            <div style={{ marginBottom: '16px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                增加數量 *
              </label>
              <input
                type="number"
                min="1"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(e.target.value)}
                placeholder="輸入數量"
                autoFocus
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '16px',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: '#374151',
                marginBottom: '8px'
              }}>
                備註（可選）
              </label>
              <input
                type="text"
                value={tokenDescription}
                onChange={(e) => setTokenDescription(e.target.value)}
                placeholder="例如：客戶購買 10 次發佈機會"
                style={{
                  width: '100%',
                  padding: '12px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px',
                  boxSizing: 'border-box'
                }}
                onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
              />
            </div>

            <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <button
                onClick={() => setSelectedUser(null)}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              >
                取消
              </button>
              <button
                onClick={handleAddTokens}
                disabled={!tokenAmount || tokenAmount <= 0}
                style={{
                  flex: 2,
                  padding: '12px',
                  backgroundColor: tokenAmount > 0 ? '#10b981' : '#d1d5db',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: tokenAmount > 0 ? 'pointer' : 'not-allowed',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => {
                  if (tokenAmount > 0) {
                    e.currentTarget.style.backgroundColor = '#059669';
                  }
                }}
                onMouseOut={(e) => {
                  if (tokenAmount > 0) {
                    e.currentTarget.style.backgroundColor = '#10b981';
                  }
                }}
              >
                <Plus size={18} />
                確認增加
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// 統計卡片組件
function StatCard({ title, value, icon, color }) {
  return (
    <div style={{
      padding: '20px',
      backgroundColor: 'white',
      border: '1px solid #e5e7eb',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      transition: 'all 0.2s'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }}>
      <div style={{
        width: '48px',
        height: '48px',
        borderRadius: '12px',
        backgroundColor: `${color}15`,
        color: color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px'
      }}>
        {icon}
      </div>
      <div>
        <div style={{
          fontSize: '12px',
          color: '#6b7280',
          fontWeight: '500',
          marginBottom: '4px'
        }}>
          {title}
        </div>
        <div style={{
          fontSize: '24px',
          fontWeight: '700',
          color: '#1f2937'
        }}>
          {value}
        </div>
      </div>
    </div>
  );
}

const tableHeaderStyle = {
  padding: '12px 16px',
  textAlign: 'left',
  fontSize: '12px',
  fontWeight: '700',
  color: '#374151',
  textTransform: 'uppercase',
  letterSpacing: '0.05em'
};

const tableCellStyle = {
  padding: '16px',
  fontSize: '14px',
  color: '#1f2937'
};

export default AdminPanel;
```

### 📄 `src\components\BulkSalePromo.jsx`

```jsx
import { Mail, Heart, Recycle, Sparkles } from 'lucide-react';

function BulkSalePromo({ onRegisterClick }) {
  return (
    <>
      {/* 🖥️ 桌面版：右側固定 */}
      <div className="bulk-promo-desktop">
        <div className="bulk-promo-content">
          <div className="bulk-promo-badge">
            <Sparkles size={16} />
            <span>平台使命</span>
          </div>
          
          <h3 className="bulk-promo-title">
            🍼 延續BB用品<br/>嘅生命
          </h3>

          <div className="bulk-promo-steps">
            <div className="bulk-promo-step">
              <Heart size={20} color="#fff" fill="#fff" />
              <p>集中交易<br/>更方便搵到</p>
            </div>

            <div className="bulk-promo-step">
              <Recycle size={20} color="#fff" />
              <p>減少浪費<br/>環保育兒</p>
            </div>

            <div className="bulk-promo-step">
              <Mail size={20} color="#fff" />
              <p>互助社群<br/>幫助家庭</p>
            </div>
          </div>

          <div className="bulk-promo-format">
            <div>
              <strong>💚 支持我哋</strong>
              <p>一齊打造可持續育兒文化，讓每件BB用品發揮最大價值</p>
            </div>
          </div>

          <button 
            className="bulk-promo-btn"
            onClick={onRegisterClick}
          >
            <Sparkles size={16} />
            立即加入
          </button>
        </div>
      </div>

      {/* 📱 手機版：彈出訊息（可選） */}
      <style jsx>{`
        .bulk-promo-desktop {
          position: sticky;
          top: 100px;
          width: 180px;
          background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
          border-radius: 16px;
          padding: 24px 16px;
          box-shadow: 0 8px 32px rgba(236, 72, 153, 0.3);
          color: white;
          text-align: center;
        }

        .bulk-promo-badge {
          background: rgba(255, 255, 255, 0.25);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 900;
          margin-bottom: 12px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          backdrop-filter: blur(10px);
        }

        .bulk-promo-title {
          font-size: 17px;
          font-weight: 900;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .bulk-promo-steps {
          margin-bottom: 20px;
        }

        .bulk-promo-step {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          background: rgba(255, 255, 255, 0.2);
          padding: 12px 10px;
          border-radius: 10px;
          text-align: left;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .bulk-promo-step p {
          font-size: 11px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0;
        }

        .bulk-promo-format {
          background: rgba(255, 255, 255, 0.25);
          padding: 14px 12px;
          border-radius: 10px;
          margin-bottom: 20px;
          text-align: left;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .bulk-promo-format strong {
          display: block;
          font-size: 12px;
          margin-bottom: 6px;
          font-weight: 900;
        }

        .bulk-promo-format p {
          font-size: 10px;
          line-height: 1.5;
          margin: 0;
          opacity: 0.95;
        }

        .bulk-promo-btn {
          width: 100%;
          background: white;
          color: #ec4899;
          border: none;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 900;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          transition: all 0.3s;
        }

        .bulk-promo-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          background: #fff;
        }

        .bulk-promo-btn:active {
          transform: translateY(-1px);
        }

        /* 📱 手機版隱藏 */
        @media (max-width: 768px) {
          .bulk-promo-desktop {
            display: none !important;
          }
        }

        @media (max-width: 1024px) {
          .bulk-promo-desktop {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default BulkSalePromo;
```

### 📄 `src\components\ContactSupportModal.jsx`

```jsx
import { X, Mail, MessageCircle, AlertCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactSupportModal({ currentUser, onClose }) {
  const [formType, setFormType] = useState('feedback'); // 'feedback' or 'report'
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const emailSubject = formType === 'feedback' 
      ? `💡 意見反饋 - ${subject}` 
      : `🚨 問題回報 - ${subject}`;
    
    const emailBody = `
類型: ${formType === 'feedback' ? '意見反饋' : '問題回報'}
主題: ${subject}

${currentUser ? `
用戶資料:
- 用戶名: ${currentUser.username}
- Email: ${currentUser.email}
- Phone: ${currentUser.phone}
- User ID: ${currentUser.id}
` : '訪客留言'}

訊息內容:
${message}

---
發送時間: ${new Date().toLocaleString('zh-HK')}
    `.trim();

    // 建立 mailto link
    const mailtoLink = `mailto:legoparts.vercel.app@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // 打開用戶嘅 email client
    window.location.href = mailtoLink;
    
    // 顯示成功訊息
    setShowSuccess(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10000
        }}
        onClick={onClose}
      >
        <div
          style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            padding: '40px',
            textAlign: 'center',
            maxWidth: '400px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            backgroundColor: '#dcfce7',
            margin: '0 auto 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <Mail size={32} color="#10b981" />
          </div>
          <h3 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#1f2937',
            marginBottom: '12px'
          }}>
            ✅ 已開啟 Email 客戶端
          </h3>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            lineHeight: '1.6'
          }}>
            請檢查您嘅 Email 應用程式<br />
            確認內容後發送即可
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10000,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: 'white',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '600px',
          maxHeight: '90vh',
          overflow: 'auto',
          boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid #e5e7eb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          backgroundColor: 'white',
          zIndex: 1
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: '#eff6ff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Mail size={20} color="#3b82f6" />
            </div>
            <div>
              <h2 style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#1f2937',
                margin: 0
              }}>
                📧 聯絡客服
              </h2>
              <p style={{
                fontSize: '13px',
                color: '#6b7280',
                margin: '4px 0 0 0'
              }}>
                legoparts.vercel.app@gmail.com
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '8px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <X size={20} color="#6b7280" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ padding: '24px' }}>
          {/* 類型選擇 */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '12px'
            }}>
              選擇類型
            </label>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                type="button"
                onClick={() => setFormType('feedback')}
                style={{
                  flex: 1,
                  padding: '16px',
                  backgroundColor: formType === 'feedback' ? '#eff6ff' : 'white',
                  border: formType === 'feedback' ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s'
                }}
              >
                <MessageCircle 
                  size={24} 
                  color={formType === 'feedback' ? '#3b82f6' : '#9ca3af'} 
                />
                <span style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: formType === 'feedback' ? '#3b82f6' : '#6b7280'
                }}>
                  💡 意見反饋
                </span>
                <span style={{
                  fontSize: '12px',
                  color: '#9ca3af'
                }}>
                  提供建議或想法
                </span>
              </button>

              <button
                type="button"
                onClick={() => setFormType('report')}
                style={{
                  flex: 1,
                  padding: '16px',
                  backgroundColor: formType === 'report' ? '#fef2f2' : 'white',
                  border: formType === 'report' ? '2px solid #ef4444' : '2px solid #e5e7eb',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s'
                }}
              >
                <AlertCircle 
                  size={24} 
                  color={formType === 'report' ? '#ef4444' : '#9ca3af'} 
                />
                <span style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: formType === 'report' ? '#ef4444' : '#6b7280'
                }}>
                  🚨 回報問題
                </span>
                <span style={{
                  fontSize: '12px',
                  color: '#9ca3af'
                }}>
                  回報 Bug 或錯誤
                </span>
              </button>
            </div>
          </div>

          {/* 主題 */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              主題 *
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder={formType === 'feedback' ? '例如：建議加入夜間模式' : '例如：無法上傳圖片'}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* 訊息內容 */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              詳細內容 *
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={formType === 'feedback' 
                ? '請詳細描述您的建議或想法...\n\n例如：\n- 希望可以...\n- 建議改善...\n- 覺得可以加入...'
                : '請詳細描述遇到的問題...\n\n建議包括：\n- 問題發生時間\n- 操作步驟\n- 錯誤訊息（如有）\n- 使用的瀏覽器/裝置'
              }
              required
              rows={8}
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                resize: 'vertical',
                fontFamily: 'inherit',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {/* 用戶資料顯示（已登入） */}
          {currentUser && (
            <div style={{
              padding: '16px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              marginBottom: '24px',
              fontSize: '13px',
              color: '#6b7280'
            }}>
              <p style={{ margin: '0 0 8px 0', fontWeight: '600', color: '#374151' }}>
                ℹ️ 您的聯絡資料：
              </p>
              <p style={{ margin: '4px 0' }}>👤 用戶名：{currentUser.username}</p>
              <p style={{ margin: '4px 0' }}>📧 Email：{currentUser.email}</p>
              <p style={{ margin: '4px 0' }}>📱 電話：{currentUser.phone}</p>
            </div>
          )}

          {/* 提交按鈕 */}
          <button
            type="submit"
            disabled={!subject || !message}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: formType === 'feedback' ? '#3b82f6' : '#ef4444',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: (!subject || !message) ? 'not-allowed' : 'pointer',
              opacity: (!subject || !message) ? 0.5 : 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              if (subject && message) {
                e.currentTarget.style.backgroundColor = formType === 'feedback' ? '#2563eb' : '#dc2626';
              }
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = formType === 'feedback' ? '#3b82f6' : '#ef4444';
            }}
          >
            <Send size={18} />
            {formType === 'feedback' ? '發送意見' : '回報問題'}
          </button>

          <p style={{
            marginTop: '16px',
            fontSize: '12px',
            color: '#9ca3af',
            textAlign: 'center',
            lineHeight: '1.5'
          }}>
            點擊後會開啟您的 Email 客戶端<br />
            我們會盡快回覆您的訊息 📧
          </p>
        </form>
      </div>
    </div>
  );
}
```

### 📄 `src\components\CreatePostModal.jsx`

```jsx
import { X, Plus, Trash2, DollarSign, ShoppingCart, Upload } from 'lucide-react';
import { useState } from 'react';
import { CATEGORIES, CONDITIONS } from '../data/mockData';  // ✅ 移除 COLORS
import { compressImage, uploadToSupabase } from '../utils/imageCompression';
import ImageLightbox from './ImageLightbox';

function CreatePostModal({ onClose, onCreatePost, currentUser }) {
  const [type, setType] = useState('sell');
  const [items, setItems] = useState([
    { 
      id: 1, 
      itemDescription: '',     // ✅ 改
      category: '',            // ✅ 改
      brand: '',               // ✅ 改（非必填）
      condition: '',
      pricePerUnit: '',        // ✅ 改
      imageUrl: null,
      imageFile: null,
      uploading: false
    }
  ]);
  
  const [customCategories, setCustomCategories] = useState({});  // ✅ 改
  const [customConditions, setCustomConditions] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const addItem = () => {
    setItems([
      ...items,
      { 
        id: Date.now(), 
        itemDescription: '', 
        category: '', 
        brand: '',
        condition: '',
        pricePerUnit: '',
        imageUrl: null,
        imageFile: null,
        uploading: false
      }
    ]);
  };

  const removeItem = (id) => {
    if (items.length === 1) {
      alert('至少要有一個物品！');
      return;
    }
    setItems(items.filter(item => item.id !== id));
    
    const newCustomCategories = {...customCategories};
    const newCustomConditions = {...customConditions};
    delete newCustomCategories[id];
    delete newCustomConditions[id];
    setCustomCategories(newCustomCategories);
    setCustomConditions(newCustomConditions);
  };

  const updateItem = (id, field, value) => {
    setItems(prevItems =>
      prevItems.map(item => 
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  // ✅ handleImageUpload 保持不變
  const handleImageUpload = async (id, file) => {
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('請上傳圖片檔案！');
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, uploading: true } : item
      )
    );

    try {
      const originalSizeKB = (file.size / 1024).toFixed(2);
      console.log(`原始大小: ${originalSizeKB} KB`);

      let processedFile = file;
      if (file.size > 1000 * 1024) {
        console.log('圖片太大，開始壓縮...');
        processedFile = await compressImage(file, 1000);
        const compressedSizeKB = (processedFile.size / 1024).toFixed(2);
        console.log(`壓縮後大小: ${compressedSizeKB} KB`);
      }

      const imageUrl = await uploadToSupabase(processedFile);
      console.log('✅ Upload 成功:', imageUrl);

      setItems(prevItems => {
        const updated = prevItems.map(item =>
          item.id === id 
            ? { 
                ...item, 
                imageUrl: imageUrl,
                imageFile: processedFile,
                uploading: false 
              }
            : item
        );
        
        console.log('📝 更新後的 items:', updated);
        return updated;
      });

    } catch (error) {
      console.error('❌ Upload 失敗:', error);
      alert('圖片上傳失敗：' + error.message);
      
      setItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, uploading: false } : item
        )
      );
    }
  };

  const handleRemoveImage = (id) => {
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id 
          ? { ...item, imageUrl: null, imageFile: null }
          : item
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) return;

    const hasUploadingImages = items.some(item => item.uploading);
    if (hasUploadingImages) {
      alert('⏳ 請等待圖片上傳完成！');
      return;
    }
    
    // ✅ 驗證：產品資料、種類、新舊、價錢 必填；品牌非必填
    const isValid = items.every(item => 
      item.itemDescription &&    // ✅ 改
      item.category &&           // ✅ 改
      item.condition &&
      item.pricePerUnit !== ''   // ✅ 改：允許 $0
    );
    
    if (!isValid) {
      alert('請填寫所有必填欄位（品牌可留空）！');
      return;
    }

    for (const item of items) {
      if (item.category === '其他' && !customCategories[item.id]) {
        alert('請輸入自訂種類！');
        return;
      }
      if (item.condition === '其他' && !customConditions[item.id]) {
        alert('請輸入新舊狀況！');
        return;
      }
    }

    const postData = {
      type: type,
      items: items.map(item => ({
        item_description: item.itemDescription,  // ✅ 改
        category: item.category === '其他' ? customCategories[item.id] : item.category,  // ✅ 改
        brand: item.brand || null,               // ✅ 改：品牌可以係 null
        condition: item.condition === '其他' ? customConditions[item.id] : item.condition,
        price_per_unit: parseFloat(item.pricePerUnit),  // ✅ 改：移除 quantity
        image_url: item.imageUrl || null
      })),
      contact_info: null,
      notes: null
    };

    console.log('📤 發送到後端的數據:', JSON.stringify(postData, null, 2));
    
    setIsSubmitting(true);
    
    try {
      await onCreatePost(postData);
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div 
        className="create-post-overlay"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          zIndex: 999999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          overflowY: 'auto'
        }}
      >
        <div 
          className="create-post-modal"
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '24px',
            maxWidth: '1000px',
            width: '100%',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}
        >
          {/* Header - 保持不變 */}
          <div className="modal-header" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            marginBottom: '24px',
            borderBottom: '2px solid #e5e7eb',
            paddingBottom: '16px',
            gap: '12px'
          }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h2 style={{ 
                fontSize: '24px', 
                fontWeight: 'bold', 
                color: '#1f2937', 
                margin: 0,
                wordBreak: 'break-word'
              }}>
                🍼 發佈嬰幼兒用品
              </h2>
              <p style={{ 
                fontSize: '14px', 
                color: '#6b7280', 
                marginTop: '4px',
                wordBreak: 'break-word'
              }}>
                可以一次過發佈多個物品
              </p>
            </div>
            <button
              onClick={onClose}
              disabled={isSubmitting}
              style={{
                padding: '8px',
                border: 'none',
                background: 'transparent',
                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                borderRadius: '8px',
                flexShrink: 0,
                opacity: isSubmitting ? 0.5 : 1
              }}
              onMouseOver={(e) => {
                if (!isSubmitting) {
                  e.target.style.backgroundColor = '#fee2e2';
                }
              }}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              <X size={24} color="#dc2626" />
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            {/* 出售/徵收切換 - 保持不變 */}
            <div className="type-selector" style={{ 
              display: 'flex', 
              gap: '12px', 
              marginBottom: '24px',
              padding: '16px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px'
            }}>
              <button
                type="button"
                onClick={() => setType('sell')}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: type === 'sell' ? '#10b981' : 'white',
                  color: type === 'sell' ? 'white' : '#6b7280',
                  border: type === 'sell' ? 'none' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap'
                }}
              >
                <DollarSign size={20} />
                出售/送贈
              </button>
              <button
                type="button"
                onClick={() => setType('buy')}
                style={{
                  flex: 1,
                  padding: '12px',
                  backgroundColor: type === 'buy' ? '#3b82f6' : 'white',
                  color: type === 'buy' ? 'white' : '#6b7280',
                  border: type === 'buy' ? 'none' : '1px solid #d1d5db',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  whiteSpace: 'nowrap'
                }}
              >
                <ShoppingCart size={20} />
                徵收
              </button>
            </div>

            {/* ✅ 桌面版：Table Header */}
            <div className="table-header-desktop" style={{
              display: 'grid',
              gridTemplateColumns: '80px 2fr 1fr 1fr 1fr 1fr 60px',  // ✅ 改
              gap: '12px',
              marginBottom: '12px',
              padding: '12px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '14px',
              color: '#374151'
            }}>
              <div>圖片</div>
              <div>產品資料</div>          {/* ✅ 改 */}
              <div>種類</div>              {/* ✅ 改 */}
              <div>品牌（如有）</div>      {/* ✅ 改 */}
              <div>新舊</div>
              <div>{type === 'sell' ? '售價' : '徵收價'} (HK$)</div>  {/* ✅ 改 */}
              <div></div>
            </div>


            {/* 配件列表 */}
            <div style={{ marginBottom: '16px' }}>
              {items.map((item, index) => (
                <div key={item.id} className="item-row-wrapper">
                  {/* ✅ 桌面版：Grid Layout */}
                  <div 
                    className="item-row-desktop"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '80px 2fr 1fr 1fr 1fr 1fr 60px',  // ✅ 改
                      gap: '12px',
                      marginBottom: '8px',
                      padding: '12px',
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb',
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      alignItems: 'center'
                    }}
                  >
                    {/* 圖片上傳區 - 保持不變 */}
                    <div style={{ position: 'relative' }}>
                      {item.imageUrl ? (
                        <div style={{ position: 'relative' }}>
                          <img
                            src={item.imageUrl}
                            alt="物品圖片"
                            style={{
                              width: '80px',
                              height: '80px',
                              objectFit: 'cover',
                              borderRadius: '8px',
                              border: '2px solid #e5e7eb',
                              cursor: 'pointer'
                            }}
                            onClick={() => setLightboxImage(item.imageUrl)}
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(item.id)}
                            style={{
                              position: 'absolute',
                              top: '-8px',
                              right: '-8px',
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              backgroundColor: '#ef4444',
                              color: 'white',
                              border: 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '14px',
                              fontWeight: 'bold'
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <label
                          style={{
                            width: '80px',
                            height: '80px',
                            border: '2px dashed #d1d5db',
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: item.uploading ? 'not-allowed' : 'pointer',
                            backgroundColor: item.uploading ? '#f3f4f6' : '#fafafa',
                            opacity: item.uploading ? 0.6 : 1
                          }}
                        >
                          {item.uploading ? (
                            <div style={{ fontSize: '10px', color: '#6b7280', textAlign: 'center' }}>
                              上傳中...
                            </div>
                          ) : (
                            <>
                              <Upload size={20} color="#9ca3af" />
                              <span style={{ fontSize: '10px', color: '#9ca3af', marginTop: '4px' }}>
                                上傳圖片
                              </span>
                            </>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            disabled={item.uploading}
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                handleImageUpload(item.id, file);
                              }
                            }}
                          />
                        </label>
                      )}
                    </div>

                    {/* ✅ 產品資料（大輸入框） */}
                    <textarea
                      required
                      value={item.itemDescription}
                      onChange={(e) => updateItem(item.id, 'itemDescription', e.target.value)}
                      rows="2"
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                        boxSizing: 'border-box',
                        width: '100%',
                        resize: 'vertical',
                        fontFamily: 'inherit'
                      }}
                      placeholder="例如：Chicco 嬰兒車，輕便可摺疊，帶遮陽罩"
                    />

                    {/* ✅ 種類 */}
                <select
  required
  value={item.category}
  onChange={(e) => {
    const value = e.target.value;
    updateItem(item.id, 'category', value);
    
    if (value !== '其他') {
      const newCustomCategories = {...customCategories};
      delete newCustomCategories[item.id];
      setCustomCategories(newCustomCategories);
    }
  }}
  style={{
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    boxSizing: 'border-box'
  }}
>
  <option value="">選擇...</option>
  
  {/* 🚼 大件用品 */}
  <optgroup label="🚼 大件用品">
    <option value="嬰兒車">🚼 嬰兒車</option>
    <option value="嬰兒床">🛏️ 嬰兒床</option>
    <option value="安全座椅">🚗 安全座椅</option>
    <option value="揹帶 / 腰凳">👶 揹帶 / 腰凳</option>
  </optgroup>

  {/* 🍼 飲食類 */}
  <optgroup label="🍼 飲食類">
    <option value="奶粉">🥛 奶粉</option>
    <option value="嬰兒食品">🍚 嬰兒食品</option>
    <option value="奶樽 / 奶咀">🍼 奶樽 / 奶咀</option>
    <option value="餵食用具">🍴 餵食用具</option>
  </optgroup>

  {/* 🧸 玩具 & 學習 */}
  <optgroup label="🧸 玩具 & 學習">
    <option value="玩具">🧸 玩具</option>
    <option value="圖書">📚 圖書</option>
  </optgroup>

  {/* 👕 衣物類 */}
  <optgroup label="👕 衣物類">
    <option value="衣服">👕 衣服</option>
    <option value="鞋襪">👟 鞋襪</option>
  </optgroup>

  {/* 🧷 清潔護理 */}
  <optgroup label="🧷 清潔護理">
    <option value="尿片">🧷 尿片</option>
    <option value="清潔用品">🧼 清潔用品</option>
    <option value="洗護用品">🛁 洗護用品</option>
  </optgroup>

  {/* 📦 其他 */}
  <option value="其他">📦 其他</option>
</select>

                    {/* ✅ 品牌（非必填） */}
                    <input
                      type="text"
                      value={item.brand}
                      onChange={(e) => updateItem(item.id, 'brand', e.target.value)}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                        boxSizing: 'border-box',
                        width: '100%'
                      }}
                      placeholder="例如：Chicco"
                    />

                    {/* 新舊 - 保持不變 */}
                    <select
                      required
                      value={item.condition}
                      onChange={(e) => {
                        const value = e.target.value;
                        updateItem(item.id, 'condition', value);
                        
                        if (value !== '其他') {
                          const newCustomConditions = {...customConditions};
                          delete newCustomConditions[item.id];
                          setCustomConditions(newCustomConditions);
                        }
                      }}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                        boxSizing: 'border-box',
                        width: '100%'
                      }}
                    >
                      <option value="">選擇...</option>
                      {CONDITIONS.map(cond => (
                        <option key={cond} value={cond}>{cond}</option>
                      ))}
                    </select>

                    {/* ✅ 價錢（允許 $0） */}
                    <input
                      type="number"
                      required
                      min="0"
                      step="0.01"
                      value={item.pricePerUnit}
                      onChange={(e) => updateItem(item.id, 'pricePerUnit', e.target.value)}
                      style={{
                        padding: '10px 12px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px',
                        boxSizing: 'border-box',
                        width: '100%'
                      }}
                      placeholder="0.00"
                    />

                    {/* 刪除按鈕 - 保持不變 */}
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      disabled={items.length === 1}
                      style={{
                        padding: '8px',
                        border: 'none',
                        backgroundColor: items.length === 1 ? '#f3f4f6' : '#fee2e2',
                        color: items.length === 1 ? '#9ca3af' : '#dc2626',
                        borderRadius: '6px',
                        cursor: items.length === 1 ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                        minHeight: '42px'
                      }}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>

                  {/* ✅ 手機版：Card Layout */}
                  <div 
                    className="item-row-mobile"
                    style={{
                      display: 'none',
                      padding: '16px',
                      marginBottom: '12px',
                      backgroundColor: index % 2 === 0 ? '#ffffff' : '#f9fafb',
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb'
                    }}
                  >
                    {/* 圖片上傳區（手機版） */}
                    <div style={{ marginBottom: '12px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>
                        物品圖片
                      </label>
                      {item.imageUrl ? (
                        <div style={{ position: 'relative', width: 'fit-content' }}>
                          <img
                            src={item.imageUrl}
                            alt="物品圖片"
                            style={{
                              width: '100px',
                              height: '100px',
                              objectFit: 'cover',
                              borderRadius: '8px',
                              border: '2px solid #e5e7eb',
                              cursor: 'pointer'
                            }}
                            onClick={() => setLightboxImage(item.imageUrl)}
                          />
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(item.id)}
                            style={{
                              position: 'absolute',
                              top: '-8px',
                              right: '-8px',
                              width: '28px',
                              height: '28px',
                              borderRadius: '50%',
                              backgroundColor: '#ef4444',
                              color: 'white',
                              border: 'none',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '16px',
                              fontWeight: 'bold'
                            }}
                          >
                            ×
                          </button>
                        </div>
                      ) : (
                        <label
                          style={{
                            width: '100px',
                            height: '100px',
                            border: '2px dashed #d1d5db',
                            borderRadius: '8px',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: item.uploading ? 'not-allowed' : 'pointer',
                            backgroundColor: item.uploading ? '#f3f4f6' : '#fafafa',
                            opacity: item.uploading ? 0.6 : 1
                          }}
                        >
                          {item.uploading ? (
                            <div style={{ fontSize: '12px', color: '#6b7280', textAlign: 'center' }}>
                              上傳中...
                            </div>
                          ) : (
                            <>
                              <Upload size={24} color="#9ca3af" />
                              <span style={{ fontSize: '12px', color: '#9ca3af', marginTop: '4px' }}>
                                上傳圖片
                              </span>
                            </>
                          )}
                          <input
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            disabled={item.uploading}
                            onChange={(e) => {
                              const file = e.target.files[0];
                              if (file) {
                                handleImageUpload(item.id, file);
                              }
                            }}
                          />
                        </label>
                      )}
                    </div>

                    {/* ✅ 產品資料 */}
                    <div style={{ marginBottom: '12px' }}>
                      <label style={{
                        display: 'block',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#374151',
                        marginBottom: '6px'
                      }}>
                        產品資料
                      </label>
                      <textarea
                        required
                        value={item.itemDescription}
                        onChange={(e) => updateItem(item.id, 'itemDescription', e.target.value)}
                        rows="3"
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: '1px solid #d1d5db',
                          borderRadius: '6px',
                          fontSize: '14px',
                          boxSizing: 'border-box',
                          resize: 'vertical',
                          fontFamily: 'inherit'
                        }}
                        placeholder="例如：Chicco 嬰兒車，輕便可摺疊，帶遮陽罩"
                      />
                    </div>

                    {/* ✅ 種類 + 品牌 (2欄) */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '12px',
                      marginBottom: '12px'
                    }}>
                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#374151',
                          marginBottom: '6px'
                        }}>
                          種類
                        </label>
                        <select
  required
  value={item.category}
  onChange={(e) => {
    const value = e.target.value;
    updateItem(item.id, 'category', value);
    
    if (value !== '其他') {
      const newCustomCategories = {...customCategories};
      delete newCustomCategories[item.id];
      setCustomCategories(newCustomCategories);
    }
  }}
  style={{
    width: '100%',
    padding: '10px 12px',
    border: '1px solid #d1d5db',
    borderRadius: '6px',
    fontSize: '14px',
    boxSizing: 'border-box'
  }}
>
  <option value="">選擇...</option>
  
  {/* 🚼 大件用品 */}
  <optgroup label="🚼 大件用品">
    <option value="嬰兒車">🚼 嬰兒車</option>
    <option value="嬰兒床">🛏️ 嬰兒床</option>
    <option value="安全座椅">🚗 安全座椅</option>
    <option value="揹帶 / 腰凳">👶 揹帶 / 腰凳</option>
  </optgroup>

  {/* 🍼 飲食類 */}
  <optgroup label="🍼 飲食類">
    <option value="奶粉">🥛 奶粉</option>
    <option value="嬰兒食品">🍚 嬰兒食品</option>
    <option value="奶樽 / 奶咀">🍼 奶樽 / 奶咀</option>
    <option value="餵食用具">🍴 餵食用具</option>
  </optgroup>

  {/* 🧸 玩具 & 學習 */}
  <optgroup label="🧸 玩具 & 學習">
    <option value="玩具">🧸 玩具</option>
    <option value="圖書">📚 圖書</option>
  </optgroup>

  {/* 👕 衣物類 */}
  <optgroup label="👕 衣物類">
    <option value="衣服">👕 衣服</option>
    <option value="鞋襪">👟 鞋襪</option>
  </optgroup>

  {/* 🧷 清潔護理 */}
  <optgroup label="🧷 清潔護理">
    <option value="尿片">🧷 尿片</option>
    <option value="清潔用品">🧼 清潔用品</option>
    <option value="洗護用品">🛁 洗護用品</option>
  </optgroup>

  {/* 📦 其他 */}
  <option value="其他">📦 其他</option>
</select>
                      </div>

                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#374151',
                          marginBottom: '6px'
                        }}>
                          品牌（如有）
                        </label>
                        <input
                          type="text"
                          value={item.brand}
                          onChange={(e) => updateItem(item.id, 'brand', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                          }}
                          placeholder="例如：Chicco"
                        />
                      </div>
                    </div>

                    {/* ✅ 新舊 + 價錢 (2欄) */}
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: '1fr 1fr',
                      gap: '12px',
                      marginBottom: '12px'
                    }}>
                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#374151',
                          marginBottom: '6px'
                        }}>
                          新舊
                        </label>
                        <select
                          required
                          value={item.condition}
                          onChange={(e) => {
                            const value = e.target.value;
                            updateItem(item.id, 'condition', value);
                            
                            if (value !== '其他') {
                              const newCustomConditions = {...customConditions};
                              delete newCustomConditions[item.id];
                              setCustomConditions(newCustomConditions);
                            }
                          }}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                          }}
                        >
                          <option value="">選擇...</option>
                          {CONDITIONS.map(cond => (
                            <option key={cond} value={cond}>{cond}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label style={{
                          display: 'block',
                          fontSize: '13px',
                          fontWeight: '600',
                          color: '#374151',
                          marginBottom: '6px'
                        }}>
                          {type === 'sell' ? '售價' : '求購價'}
                        </label>
                        <input
                          type="number"
                          required
                          min="0"
                          step="0.01"
                          value={item.pricePerUnit}
                          onChange={(e) => updateItem(item.id, 'pricePerUnit', e.target.value)}
                          style={{
                            width: '100%',
                            padding: '10px 12px',
                            border: '1px solid #d1d5db',
                            borderRadius: '6px',
                            fontSize: '14px',
                            boxSizing: 'border-box'
                          }}
                          placeholder="0.00"
                        />
                      </div>
                    </div>

                    {/* 刪除按鈕 */}
                    {items.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        style={{
                          width: '100%',
                          padding: '10px',
                          border: 'none',
                          backgroundColor: '#fee2e2',
                          color: '#dc2626',
                          borderRadius: '6px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '6px',
                          fontSize: '14px',
                          fontWeight: '600'
                        }}
                      >
                        <Trash2 size={16} />
                        移除此物品
                      </button>
                    )}
                  </div>

                  {/* ✅ 自訂種類輸入框 */}
                  {item.category === '其他' && (
                    <div className="custom-input" style={{
                      marginTop: '-4px',
                      marginBottom: '8px',
                      paddingLeft: '12px'
                    }}>
                      <input
                        type="text"
                        required
                        value={customCategories[item.id] || ''}
                        onChange={(e) => setCustomCategories({
                          ...customCategories,
                          [item.id]: e.target.value
                        })}
                        placeholder="✏️ 請輸入種類名稱（例如：揹巾）"
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: '2px solid #3b82f6',
                          borderRadius: '6px',
                          fontSize: '14px',
                          boxSizing: 'border-box',
                          backgroundColor: '#eff6ff'
                        }}
                      />
                    </div>
                  )}

                  {/* 自訂新舊輸入框 - 保持不變 */}
                  {item.condition === '其他' && (
                    <div className="custom-input" style={{
                      marginTop: '-4px',
                      marginBottom: '8px',
                      paddingLeft: '12px'
                    }}>
                      <input
                        type="text"
                        required
                        value={customConditions[item.id] || ''}
                        onChange={(e) => setCustomConditions({
                          ...customConditions,
                          [item.id]: e.target.value
                        })}
                        placeholder="✏️ 請輸入新舊狀況（例如：輕微刮痕）"
                        style={{
                          width: '100%',
                          padding: '10px 12px',
                          border: '2px solid #10b981',
                          borderRadius: '6px',
                          fontSize: '14px',
                          boxSizing: 'border-box',
                          backgroundColor: '#f0fdf4'
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 新增物品按鈕 */}
            <button
              type="button"
              onClick={addItem}
              style={{
                width: '100%',
                padding: '12px',
                backgroundColor: '#f3f4f6',
                color: '#374151',
                border: '2px dashed #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                marginBottom: '24px'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#e5e7eb';
                e.target.style.borderColor = '#9ca3af';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#f3f4f6';
                e.target.style.borderColor = '#d1d5db';
              }}
            >
              <Plus size={20} />
              新增物品
            </button>

            {/* 底部按鈕 */}
            <div className="modal-footer" style={{
              borderTop: '2px solid #e5e7eb',
              paddingTop: '16px',
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                style={{
                  flex: 1,
                  minWidth: '120px',
                  padding: '12px',
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: isSubmitting ? 0.6 : 1
                }}
                onMouseOver={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#e5e7eb';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isSubmitting) {
                    e.target.style.backgroundColor = '#f3f4f6';
                  }
                }}
              >
                取消
              </button>
              <button
                type="submit"
                disabled={isSubmitting || items.some(item => item.uploading)}
                style={{
                  flex: 2,
                  minWidth: '160px',
                  padding: '12px',
                  backgroundColor: (isSubmitting || items.some(item => item.uploading)) 
                    ? '#d1d5db' 
                    : (type === 'sell' ? '#10b981' : '#3b82f6'),
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: (isSubmitting || items.some(item => item.uploading)) 
                    ? 'not-allowed' 
                    : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
              >
                <Plus size={20} />
                <span>
                  {items.some(item => item.uploading) 
                    ? '⏳ 圖片上傳中...' 
                    : isSubmitting 
                      ? '發佈中...' 
                      : `發佈${type === 'sell' ? '出售' : '求購'} (${items.length} 件物品)`
                  }
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* ✅ 圖片放大 Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          imageUrl={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}

export default CreatePostModal;
```

### 📄 `src\components\EarnTokenModal.jsx`

```jsx
import { useState } from 'react';
import { X, Gift, Play, Check } from 'lucide-react';
import { tokensAPI } from '../api';

function EarnTokenModal({ currentUser, onClose, onSuccess }) {
  const [isWatching, setIsWatching] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [hasWatched, setHasWatched] = useState(false);
  const [isClaiming, setIsClaiming] = useState(false);

  const handleWatchAd = () => {
    setIsWatching(true);
    
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          setHasWatched(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const handleClaim = async () => {
    if (isClaiming) return;
    
    setIsClaiming(true);
    
    try {
      const result = await tokensAPI.earnByWatchingAd();
      onSuccess();
      onClose();
      
      setTimeout(() => {
        alert(result.message || '成功領取 1 個發佈代幣！');
      }, 100);
    } catch (error) {
      alert('領取失敗：' + error.message);
      setIsClaiming(false);
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999999,
        padding: '20px'
      }}
      onClick={isWatching && !hasWatched ? undefined : onClose}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '500px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{
          padding: '20px',
          borderBottom: '2px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#fef3c7'
        }}>
          <h2 style={{
            margin: 0,
            fontSize: '20px',
            fontWeight: '700',
            color: '#92400e'
          }}>
            🎁 睇廣告賺 Token
          </h2>
          
          <button
            onClick={onClose}
            disabled={isWatching && !hasWatched}
            style={{
              background: 'none',
              border: 'none',
              cursor: isWatching && !hasWatched ? 'not-allowed' : 'pointer',
              padding: '8px',
              borderRadius: '8px',
              opacity: isWatching && !hasWatched ? 0.5 : 1
            }}
            onMouseOver={(e) => {
              if (!isWatching || hasWatched) {
                e.currentTarget.style.backgroundColor = '#fee2e2';
              }
            }}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <X size={24} color="#dc2626" />
          </button>
        </div>

        <div style={{ padding: '30px' }}>
          {!isWatching && !hasWatched && (
            <>
              <div style={{
                textAlign: 'center',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 16px',
                  borderRadius: '50%',
                  backgroundColor: '#fef3c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '4px solid #fbbf24'
                }}>
                  <Gift size={40} color="#f59e0b" />
                </div>
                
                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: '#1f2937',
                  marginBottom: '8px'
                }}>
                  觀看廣告賺取發佈機會
                </h3>
                
                <p style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  marginBottom: '20px'
                }}>
                  只需觀看 5 秒廣告，即可獲得 <strong style={{ color: '#f59e0b' }}>1 次發佈機會</strong>
                </p>
              </div>

              <button
                onClick={handleWatchAd}
                style={{
                  width: '100%',
                  padding: '14px',
                  backgroundColor: '#fbbf24',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f59e0b'}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#fbbf24'}
              >
                <Play size={20} />
                開始觀看廣告
              </button>
            </>
          )}

          {isWatching && !hasWatched && (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px'
            }}>
              <div style={{
                width: '100%',
                height: '200px',
                backgroundColor: '#f3f4f6',
                border: '2px dashed #d1d5db',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                fontSize: '16px',
                color: '#9ca3af'
              }}>
                🎬 廣告播放中...
              </div>
              
              <div style={{
                fontSize: '32px',
                fontWeight: '700',
                color: '#fbbf24',
                marginBottom: '8px'
              }}>
                {countdown}
              </div>
              
              <p style={{
                fontSize: '14px',
                color: '#6b7280'
              }}>
                請耐心等待...
              </p>
            </div>
          )}

          {hasWatched && (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px'
            }}>
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 20px',
                borderRadius: '50%',
                backgroundColor: '#dcfce7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '4px solid #10b981'
              }}>
                <Check size={50} color="#10b981" strokeWidth={3} />
              </div>
              
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '12px'
              }}>
                🎉 觀看完成！
              </h3>
              
              <p style={{
                fontSize: '14px',
                color: '#6b7280',
                marginBottom: '24px'
              }}>
                點擊下方按鈕領取你的發佈機會
              </p>

              <button
                onClick={handleClaim}
                disabled={isClaiming}
                style={{
                  width: '100%',
                  padding: '14px',
                  backgroundColor: isClaiming ? '#d1d5db' : '#10b981',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: isClaiming ? 'not-allowed' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  opacity: isClaiming ? 0.6 : 1
                }}
                onMouseOver={(e) => {
                  if (!isClaiming) {
                    e.currentTarget.style.backgroundColor = '#059669';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isClaiming) {
                    e.currentTarget.style.backgroundColor = '#10b981';
                  }
                }}
              >
                <Gift size={20} />
                {isClaiming ? '領取中...' : '領取 1 次發佈機會'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EarnTokenModal;
```

### 📄 `src\components\EditPostModal.jsx`

```jsx
import { useState } from 'react';
import { X, Save } from 'lucide-react';
import { request } from '../api';

function EditPostModal({ post, currentUser, onClose, onSuccess }) {
  const [items, setItems] = useState(post.items.map(item => ({
    id: item.id,
    item_description: item.item_description,
    category: item.category,
    price_per_unit: item.price_per_unit,
    originalPrice: item.price_per_unit
  })));

  const updatePrice = (id, value) => {
    setItems(prevItems =>
      prevItems.map(item => 
        item.id === id ? { ...item, price_per_unit: value } : item
      )
    );
  };

  const hasChanges = () => {
    return items.some(item => 
      parseFloat(item.price_per_unit) !== parseFloat(item.originalPrice)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hasChanges()) {
      alert('沒有任何修改！');
      return;
    }

    if (!confirm('確定要儲存修改嗎？')) {
      return;
    }

    try {
      const updateData = {
        items: items.map(item => ({
          id: item.id,
          price_per_unit: parseFloat(item.price_per_unit)
        }))
      };

      const result = await request(`/posts/${post.id}/edit`, {
        method: 'PUT',
        body: JSON.stringify(updateData)
      });

      alert('✅ 修改成功！');
      onSuccess();
    } catch (error) {
      console.error('❌ 編輯失敗:', error);
      alert('修改失敗：' + error.message);
    }
  };

  return (
    <div
      className="edit-post-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999999,
        padding: '20px'
      }}
    >
      <div
        className="edit-post-modal"
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '600px',
          maxHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Header */}
        <div 
          className="edit-modal-header"
          style={{
            padding: '20px',
            borderBottom: '2px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f9fafb'
          }}
        >
          <h2 style={{
            margin: 0,
            fontSize: '20px',
            fontWeight: '700',
            color: '#1f2937'
          }}>
            💰 修改價錢
          </h2>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fee2e2'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <X size={24} color="#dc2626" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{
          flex: 1,
          overflow: 'auto',
          padding: '20px'
        }}>
          <div style={{ display: 'grid', gap: '12px' }}>
            {items.map((item) => {
              const priceChanged = parseFloat(item.price_per_unit) !== parseFloat(item.originalPrice);

              return (
                <div
                  key={item.id}
                  className="edit-item-card"
                  style={{
                    padding: '16px',
                    backgroundColor: priceChanged ? '#eff6ff' : '#f9fafb',
                    border: priceChanged ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                >
                  {/* 產品資料（不可編輯） */}
                  <div style={{
                    fontSize: '15px',
                    fontWeight: '700',
                    color: '#1f2937',
                    marginBottom: '8px'
                  }}>
                    {item.item_description}
                  </div>

                  <div style={{
                    display: 'inline-block',
                    padding: '4px 10px',
                    backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                    color: 'white',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: '600',
                    marginBottom: '12px'
                  }}>
                    {item.category}
                  </div>

                  {/* 價錢（可編輯） */}
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#6b7280',
                      marginBottom: '8px'
                    }}>
                      價錢 {priceChanged && '✏️ (已修改)'}
                    </label>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={item.price_per_unit}
                        onChange={(e) => updatePrice(item.id, e.target.value)}
                        required
                        style={{
                          flex: 1,
                          padding: '12px',
                          border: priceChanged ? '2px solid #3b82f6' : '2px solid #e5e7eb',
                          borderRadius: '8px',
                          fontSize: '16px',
                          fontWeight: '700',
                          boxSizing: 'border-box',
                          backgroundColor: priceChanged ? '#eff6ff' : 'white'
                        }}
                      />

                      {priceChanged && (
                        <div style={{
                          fontSize: '13px',
                          color: '#6b7280'
                        }}>
                          原價: <span style={{ textDecoration: 'line-through' }}>
                            ${item.originalPrice}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div 
            className="edit-modal-footer"
            style={{
              marginTop: '24px',
              padding: '20px',
              backgroundColor: '#f9fafb',
              borderRadius: '8px',
              display: 'flex',
              gap: '12px'
            }}
          >
            <button
              type="button"
              onClick={onClose}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#f3f4f6',
                color: '#374151',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
            >
              取消
            </button>

            <button
              type="submit"
              disabled={!hasChanges()}
              style={{
                flex: 2,
                padding: '12px',
                backgroundColor: hasChanges() ? '#10b981' : '#d1d5db',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: hasChanges() ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Save size={18} />
              {hasChanges() ? '儲存修改' : '沒有修改'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditPostModal;
```

### 📄 `src\components\Header.jsx`

```jsx
import { User, Plus, LogOut, LogIn, UserPlus, Mail, ChevronDown, FileText, Settings, Gift, HelpCircle, BookOpen } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { conversationsAPI, tokensAPI, authAPI } from '../api';
import AdminPanel from './AdminPanel';
import MyPostsModal from './MyPostsModal';
import ContactSupportModal from './ContactSupportModal';

function Header({ 
  currentUser, 
  onLoginClick,
  onRegisterClick,
  onLogout, 
  onCreatePostClick,
  onMessageCenterClick,
  onUserUpdate,
  onResourcesClick,  // ✅ 新增
  onHomeClick        // ✅ 新增
}) {
  const [unreadCount, setUnreadCount] = useState(0);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showMyPosts, setShowMyPosts] = useState(false);
  const [showContactSupport, setShowContactSupport] = useState(false);
  const intervalRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (currentUser) {
      loadUnreadCount();
      
      intervalRef.current = setInterval(loadUnreadCount, 30000);
      
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setUnreadCount(0);
    }
  }, [currentUser?.id]);

  const loadUnreadCount = async () => {
    try {
      const data = await conversationsAPI.getUnreadCount();
      setUnreadCount(data.count);
    } catch (error) {
      console.error('獲取未讀數失敗:', error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
    };

    if (showUserMenu) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showUserMenu]);

  return (
    <>
      <header className="header-container">
        <div className="header-content">
          {/* ✅ Logo 可點擊返回主頁 */}
          <div 
            className="header-logo" 
            onClick={onHomeClick}
            style={{ cursor: 'pointer' }}
          >
            <h1>👶 嬰幼兒產品交易平台</h1>
          </div>

          <div className="header-buttons">
            {/* ✅ BB 資源按鈕（登入/未登入都顯示） */}
            <button
              onClick={onResourcesClick}
              style={{
                padding: '10px 18px',
                backgroundColor: '#8b5cf6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#7c3aed'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#8b5cf6'}
            >
              <BookOpen size={18} />
              BB 資源
            </button>

            {currentUser ? (
              <>
                {/* 聯絡客服按鈕 */}
                <button
                  onClick={() => setShowContactSupport(true)}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: '#f3f4f6',
                    color: '#4b5563',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#e5e7eb';
                    e.currentTarget.style.borderColor = '#9ca3af';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.borderColor = '#d1d5db';
                  }}
                >
                  <HelpCircle size={18} />
                  聯絡客服
                </button>

                <div style={{ position: 'relative' }} ref={menuRef}>
                  <button
                    onClick={() => setShowUserMenu(!showUserMenu)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      backgroundColor: '#eff6ff',
                      borderRadius: '8px',
                      border: '1px solid #bfdbfe',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dbeafe'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#eff6ff'}
                  >
                    <User size={18} color="#3b82f6" />
                    <span style={{ fontSize: '14px', fontWeight: '500', color: '#1e40af' }}>
                      {currentUser.username}
                    </span>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '2px 8px',
                      backgroundColor: '#3b82f6',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '600',
                      color: 'white'
                    }}>
                      🎟️ {currentUser.tokens}
                    </div>
                    <ChevronDown 
                      size={16} 
                      color="#3b82f6"
                      style={{
                        transform: showUserMenu ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s'
                      }}
                    />
                  </button>

                  {showUserMenu && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        right: 0,
                        marginTop: '8px',
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        minWidth: '220px',
                        zIndex: 10000,
                        overflow: 'hidden'
                      }}
                    >
                      <div style={{
                        padding: '16px',
                        borderBottom: '1px solid #e5e7eb',
                        backgroundColor: '#f9fafb'
                      }}>
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '12px',
                          marginBottom: '8px'
                        }}>
                          <div style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#3b82f6',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '18px',
                            fontWeight: 'bold'
                          }}>
                            {currentUser.username.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div style={{
                              fontSize: '14px',
                              fontWeight: '700',
                              color: '#1f2937'
                            }}>
                              {currentUser.username}
                            </div>
                            {currentUser.is_admin && (
                              <div style={{
                                fontSize: '11px',
                                color: '#ef4444',
                                fontWeight: '600'
                              }}>
                                👑 管理員
                              </div>
                            )}
                          </div>
                        </div>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>
                          📧 {currentUser.email}
                        </div>
                        <div style={{ fontSize: '12px', color: '#6b7280' }}>
                          📱 {currentUser.phone}
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          setShowMyPosts(true);
                        }}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: 'white',
                          border: 'none',
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '14px',
                          color: '#374151',
                          fontWeight: '500'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      >
                        <FileText size={16} color="#3b82f6" />
                        我的貼文
                      </button>

                      {currentUser.is_admin && (
                        <button
                          onClick={() => {
                            setShowUserMenu(false);
                            setShowAdminPanel(true);
                          }}
                          style={{
                            width: '100%',
                            padding: '12px 16px',
                            backgroundColor: 'white',
                            border: 'none',
                            borderTop: '1px solid #e5e7eb',
                            textAlign: 'left',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontSize: '14px',
                            color: '#374151',
                            fontWeight: '500'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fef3c7'}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                        >
                          <Settings size={16} color="#f59e0b" />
                          ⚙️ 管理後台
                        </button>
                      )}

                      <button
                        onClick={() => {
                          setShowUserMenu(false);
                          onLogout();
                        }}
                        style={{
                          width: '100%',
                          padding: '12px 16px',
                          backgroundColor: 'white',
                          border: 'none',
                          borderTop: '1px solid #e5e7eb',
                          textAlign: 'left',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontSize: '14px',
                          color: '#dc2626',
                          fontWeight: '500'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fee2e2'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      >
                        <LogOut size={16} />
                        登出
                      </button>
                    </div>
                  )}
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onMessageCenterClick();
                  }}
                  style={{
                    position: 'relative',
                    padding: '10px',
                    backgroundColor: '#eff6ff',
                    color: '#3b82f6',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dbeafe'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#eff6ff'}
                >
                  <Mail size={18} />
                  {unreadCount > 0 && (
                    <span style={{
                      position: 'absolute',
                      top: '-4px',
                      right: '-4px',
                      backgroundColor: '#ef4444',
                      color: 'white',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      padding: '2px 6px',
                      borderRadius: '10px',
                      minWidth: '18px',
                      textAlign: 'center'
                    }}>
                      {unreadCount > 99 ? '99+' : unreadCount}
                    </span>
                  )}
                </button>

                <button
                  onClick={onCreatePostClick}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#10b981',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#059669'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#10b981'}
                >
                  <Plus size={18} />
                  發佈交易
                </button>
              </>
            ) : (
              <>
                {/* 未登入狀態 */}
                <button
                  onClick={() => setShowContactSupport(true)}
                  style={{
                    padding: '10px 16px',
                    backgroundColor: '#f3f4f6',
                    color: '#4b5563',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.2s'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#e5e7eb';
                    e.currentTarget.style.borderColor = '#9ca3af';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                    e.currentTarget.style.borderColor = '#d1d5db';
                  }}
                >
                  <HelpCircle size={18} />
                  聯絡客服
                </button>

                <button
                  onClick={onLoginClick}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                >
                  <LogIn size={18} />
                  登入
                </button>

                <button
                  onClick={onRegisterClick}
                  style={{
                    padding: '10px 20px',
                    backgroundColor: 'white',
                    color: '#3b82f6',
                    border: '2px solid #3b82f6',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#eff6ff'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'white'}
                >
                  <UserPlus size={18} />
                  註冊
                </button>
              </>
            )}
          </div>
        </div>
      </header>

      {showAdminPanel && (
        <AdminPanel
          currentUser={currentUser}
          onClose={() => setShowAdminPanel(false)}
        />
      )}

      {showMyPosts && (
        <MyPostsModal
          currentUser={currentUser}
          onClose={() => setShowMyPosts(false)}
        />
      )}

      {showContactSupport && (
        <ContactSupportModal
          currentUser={currentUser}
          onClose={() => setShowContactSupport(false)}
        />
      )}
    </>
  );
}

export default Header;
```

### 📄 `src\components\ImageLightbox.jsx`

```jsx
import { X } from 'lucide-react';

function ImageLightbox({ imageUrl, onClose }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        zIndex: 99999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        cursor: 'zoom-out'
      }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'rgba(255, 255, 255, 0.2)',
          border: 'none',
          borderRadius: '50%',
          width: '48px',
          height: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          backdropFilter: 'blur(10px)'
        }}
      >
        <X size={24} color="white" />
      </button>
      
      <img
        src={imageUrl}
        alt="放大查看"
        style={{
          maxWidth: '90%',
          maxHeight: '90%',
          objectFit: 'contain',
          borderRadius: '8px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
        }}
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

export default ImageLightbox;
```

### 📄 `src\components\LoginModal.jsx`

```jsx
import { X, LogIn } from 'lucide-react';
import { useState } from 'react';

function LoginModal({ onClose, onLogin, onSwitchToRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (isLoggingIn) return;
  
  if (!username || !password) {
    alert('請填寫所有欄位！');
    return;
  }
  
  setIsLoggingIn(true);
  
  try {
    await onLogin(username, password);
    // ✅ 成功會自動關閉 modal，唔使手動 reset
  } catch (error) {
    // ✅ 失敗要 reset，但 error message 由 onLogin 處理
    setIsLoggingIn(false);
  }
};

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '400px',
          width: '100%',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          position: 'relative'
        }}
      >
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '24px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
            🧱 登入帳戶
          </h2>
          <button
            onClick={onClose}
            disabled={isLoggingIn}
            style={{
              padding: '8px',
              border: 'none',
              background: 'transparent',
              cursor: isLoggingIn ? 'not-allowed' : 'pointer',
              borderRadius: '8px',
              opacity: isLoggingIn ? 0.5 : 1
            }}
            onMouseOver={(e) => {
              if (!isLoggingIn) {
                e.target.style.backgroundColor = '#fee2e2';
              }
            }}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <X size={24} color="#dc2626" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontSize: '14px', 
              fontWeight: '500',
              color: '#374151'
            }}>
              用戶名稱
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoggingIn}
              placeholder="輸入用戶名稱"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: isLoggingIn ? 0.6 : 1
              }}
              onFocus={(e) => {
                if (!isLoggingIn) {
                  e.target.style.borderColor = '#3b82f6';
                }
              }}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontSize: '14px', 
              fontWeight: '500',
              color: '#374151'
            }}>
              密碼
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={isLoggingIn}
              placeholder="輸入密碼"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: isLoggingIn ? 0.6 : 1
              }}
              onFocus={(e) => {
                if (!isLoggingIn) {
                  e.target.style.borderColor = '#3b82f6';
                }
              }}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <button
            type="submit"
            disabled={isLoggingIn}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: isLoggingIn ? '#d1d5db' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: isLoggingIn ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              opacity: isLoggingIn ? 0.6 : 1
            }}
            onMouseOver={(e) => {
              if (!isLoggingIn) {
                e.target.style.backgroundColor = '#2563eb';
              }
            }}
            onMouseOut={(e) => {
              if (!isLoggingIn) {
                e.target.style.backgroundColor = '#3b82f6';
              }
            }}
          >
            <LogIn size={20} />
            {isLoggingIn ? '登入中...' : '登入'}
          </button>

          <p style={{
            marginTop: '16px',
            fontSize: '14px',
            color: '#6b7280',
            textAlign: 'center'
          }}>
            還沒有帳號？{' '}
            <button
              type="button"
              onClick={onSwitchToRegister}
              disabled={isLoggingIn}
              style={{
                background: 'none',
                border: 'none',
                color: isLoggingIn ? '#9ca3af' : '#3b82f6',
                fontWeight: '600',
                cursor: isLoggingIn ? 'not-allowed' : 'pointer',
                textDecoration: 'underline',
                padding: 0
              }}
            >
              立即註冊
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
```

### 📄 `src\components\MessageCenter\ChatWindow.jsx`

```jsx
import { useState, useEffect, useRef } from 'react';
import { Send, Package, ArrowLeft } from 'lucide-react';
import MessageBubble from './MessageBubble';
import { conversationsAPI } from '../../api';

function ChatWindow({ conversation, currentUser, onMessageSent, onBackClick }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (conversation?.id) {
      loadMessages();
    }
  }, [conversation?.id]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadMessages = async () => {
    if (!conversation) return;
    
    try {
      setIsLoading(true);
      const data = await conversationsAPI.getMessages(conversation.id);
      setMessages(data);
    } catch (error) {
      console.error('載入訊息失敗:', error);
    } finally {
      setIsLoading(false);
    }
  };

const handleSendMessage = async (e) => {
  e.preventDefault();
  
  if (!newMessage.trim() || isSending) return;
  
  setIsSending(true);
  
  try {
    await conversationsAPI.sendMessage(conversation.id, newMessage.trim());
    setNewMessage('');
    
    await loadMessages();
    
    if (onMessageSent) {
      onMessageSent();
    }
  } catch (error) {
    alert('發送訊息失敗：' + error.message);
  } finally {
    setIsSending(false); // ✅ 無論成功或失敗都要 reset
  }
};

  if (!conversation) {
    return (
      <div 
        className="chat-window no-selection"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          color: '#9ca3af'
        }}
      >
        <Package size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
        <p style={{ fontSize: '16px' }}>請選擇一個對話</p>
      </div>
    );
  }

  return (
    <div 
      className="chat-window"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      {/* 對話頂部 */}
      <div 
        className="chat-window-header"
        style={{
          padding: '16px 20px',
          borderBottom: '2px solid #e5e7eb',
          backgroundColor: '#f9fafb'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          {/* 返回按鈕（手機版顯示） */}
          {onBackClick && (
            <button
              onClick={onBackClick}
              className="chat-back-button"
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: '#f3f4f6',
                cursor: 'pointer',
                flexShrink: 0
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
            >
              <ArrowLeft size={20} color="#374151" />
            </button>
          )}

          <div 
            className="chat-user-avatar"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              fontWeight: 'bold',
              flexShrink: 0
            }}
          >
            {conversation.other_user.username.charAt(0).toUpperCase()}
          </div>
          
          <div style={{ flex: 1, minWidth: 0 }}>
            <div 
              className="chat-user-name"
              style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '2px'
              }}
            >
              {conversation.other_user.username}
            </div>
            <div 
              className="chat-post-title"
              style={{
                fontSize: '12px',
                color: '#6b7280',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              關於: {conversation.post_title}
            </div>
          </div>
        </div>
      </div>

      {/* 訊息列表 */}
      <div 
        className="chat-messages-container"
        style={{
          flex: 1,
          overflow: 'auto',
          padding: '20px',
          backgroundColor: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {isLoading ? (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: '#9ca3af'
          }}>
            載入訊息中...
          </div>
        ) : messages.length === 0 ? (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            color: '#9ca3af',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '14px', marginBottom: '8px' }}>暫時未有訊息</p>
            <p style={{ fontSize: '12px' }}>發送第一條訊息開始對話</p>
          </div>
        ) : (
          <>
            {messages.map((message) => (
              <MessageBubble
                key={message.id}
                message={message}
                isOwnMessage={message.sender_id === currentUser.id}
              />
            ))}
            <div ref={messagesEndRef} />
          </>
        )}
      </div>

      {/* 輸入框 */}
      <form 
        onSubmit={handleSendMessage}
        className="chat-input-form"
        style={{
          padding: '16px 20px',
          borderTop: '2px solid #e5e7eb',
          backgroundColor: '#f9fafb'
        }}
      >
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-end'
        }}>
          <textarea
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage(e);
              }
            }}
            placeholder="輸入訊息... (Enter 發送，Shift+Enter 換行)"
            className="chat-textarea"
            style={{
              flex: 1,
              padding: '12px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              resize: 'none',
              minHeight: '50px',
              maxHeight: '120px',
              fontFamily: 'inherit',
              outline: 'none'
            }}
            onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
            onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
          />
          
          <button
            type="submit"
            disabled={!newMessage.trim() || isSending}
            className="chat-send-btn"
            style={{
              padding: '12px 20px',
              backgroundColor: newMessage.trim() && !isSending ? '#3b82f6' : '#d1d5db',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: newMessage.trim() && !isSending ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.2s',
              whiteSpace: 'nowrap'
            }}
            onMouseOver={(e) => {
              if (newMessage.trim() && !isSending) {
                e.target.style.backgroundColor = '#2563eb';
              }
            }}
            onMouseOut={(e) => {
              if (newMessage.trim() && !isSending) {
                e.target.style.backgroundColor = '#3b82f6';
              }
            }}
          >
            <Send size={16} />
            {isSending ? '發送中...' : '發送'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ChatWindow;
```

### 📄 `src\components\MessageCenter\ConversationList.jsx`

```jsx
import { Package, Clock } from 'lucide-react';

function ConversationList({ conversations, selectedConversation, onSelectConversation, isLoading }) {
  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    try {
      const date = new Date(timestamp);
      if (isNaN(date.getTime())) return '';
      
      const now = new Date();
      const diffInHours = (now - date) / (1000 * 60 * 60);
      
      if (diffInHours < 1) {
        const diffInMins = Math.floor((now - date) / (1000 * 60));
        return diffInMins < 1 ? '剛剛' : `${diffInMins}分鐘前`;
      } else if (diffInHours < 24) {
        return date.toLocaleTimeString('zh-TW', { hour: '2-digit', minute: '2-digit' });
      } else if (diffInHours < 48) {
        return '昨天';
      } else {
        return date.toLocaleDateString('zh-TW', { month: '2-digit', day: '2-digit' });
      }
    } catch (e) {
      return '';
    }
  };

  if (isLoading) {
    return (
      <div 
        className={`conversation-list ${selectedConversation ? 'has-selection' : ''}`}
        style={{
          borderRight: '2px solid #e5e7eb',
          backgroundColor: '#f9fafb',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#9ca3af'
        }}
      >
        載入對話中...
      </div>
    );
  }

  if (conversations.length === 0) {
    return (
      <div 
        className={`conversation-list ${selectedConversation ? 'has-selection' : ''}`}
        style={{
          borderRight: '2px solid #e5e7eb',
          backgroundColor: '#f9fafb',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px',
          color: '#9ca3af',
          textAlign: 'center'
        }}
      >
        <Package size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
        <p style={{ fontSize: '14px' }}>暫時未有對話</p>
      </div>
    );
  }

  return (
    <div 
      className={`conversation-list ${selectedConversation ? 'has-selection' : ''}`}
      style={{
        borderRight: '2px solid #e5e7eb',
        backgroundColor: '#f9fafb',
        overflowY: 'auto'
      }}
    >
      {conversations.map((conversation) => {
        const isSelected = selectedConversation?.id === conversation.id;
        const item = conversation.post_item || {};
        
        return (
          <div
            key={conversation.id}
            onClick={() => onSelectConversation(conversation)}
            className="conversation-item"
            style={{
              padding: '16px',
              borderBottom: '1px solid #e5e7eb',
              cursor: 'pointer',
              backgroundColor: isSelected ? '#eff6ff' : 'white',
              transition: 'all 0.2s',
              position: 'relative'
            }}
            onMouseOver={(e) => {
              if (!isSelected) {
                e.currentTarget.style.backgroundColor = '#f3f4f6';
              }
            }}
            onMouseOut={(e) => {
              if (!isSelected) {
                e.currentTarget.style.backgroundColor = 'white';
              }
            }}
          >
            <div style={{
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-start'
            }}>
              {/* 商品圖標 */}
              <div 
                className="conversation-icon"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '8px',
                  backgroundColor: '#dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #93c5fd',
                  flexShrink: 0
                }}
              >
                <Package size={24} color="#3b82f6" />
              </div>

              {/* 對話資訊 */}
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* 用戶名稱 + 時間 */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '4px'
                }}>
                  <div 
                    className="conversation-username"
                    style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#1f2937',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {conversation.other_user.username}
                  </div>
                  
                  <div 
                    className="conversation-time"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      fontSize: '11px',
                      color: '#9ca3af',
                      flexShrink: 0
                    }}
                  >
                    <Clock size={12} />
                    {formatTime(conversation.last_message_time)}
                  </div>
                </div>

                {/* ✅ 產品資訊（新 DB 欄位） */}
                {item.item_description && (
                  <div 
                    className="conversation-part-number"
                    style={{
                      fontSize: '12px',
                      color: '#3b82f6',
                      fontWeight: '600',
                      marginBottom: '4px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap'
                    }}
                  >
                    📦 {item.item_description} · {item.category} · ${item.price_per_unit?.toFixed(2) || '0.00'}
                  </div>
                )}

                {/* 類型標籤 */}
                <div 
                  className="conversation-badge"
                  style={{
                    display: 'inline-block',
                    fontSize: '10px',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    backgroundColor: conversation.post_type === 'sell' ? '#dcfce7' : '#fef3c7',
                    color: conversation.post_type === 'sell' ? '#15803d' : '#a16207',
                    fontWeight: '600',
                    marginBottom: '6px'
                  }}
                >
                  {conversation.post_type === 'sell' ? '🏷️ 出售' : '🔍 求購'}
                </div>

                {/* 最後訊息 */}
                <div 
                  className="conversation-last-message"
                  style={{
                    fontSize: '13px',
                    color: '#4b5563',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {conversation.last_message || '開始對話...'}
                </div>
              </div>
            </div>

            {/* 未讀標記 */}
            {conversation.unread_count > 0 && (
              <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                backgroundColor: '#ef4444',
                color: 'white',
                fontSize: '11px',
                fontWeight: 'bold',
                padding: '2px 6px',
                borderRadius: '10px',
                minWidth: '18px',
                textAlign: 'center'
              }}>
                {conversation.unread_count > 99 ? '99+' : conversation.unread_count}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ConversationList;
```

### 📄 `src\components\MessageCenter\MessageBubble.jsx`

```jsx
function MessageBubble({ message, isOwnMessage }) {
  
  const formatTime = (dateString) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${hours}:${minutes}`;
    } catch (e) {
      return '';
    }
  };

  return (
    <div 
      className="message-bubble-container"
      style={{
        display: 'flex',
        justifyContent: isOwnMessage ? 'flex-end' : 'flex-start',
        marginBottom: '8px'
      }}
    >
      <div 
        className="message-bubble-wrapper"
        style={{
          maxWidth: '70%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isOwnMessage ? 'flex-end' : 'flex-start'
        }}
      >
        {/* 發送者名稱（只顯示對方的） */}
        {!isOwnMessage && (
          <div 
            className="message-sender-name"
            style={{
              fontSize: '11px',
              color: '#6b7280',
              marginBottom: '4px',
              paddingLeft: '12px'
            }}
          >
            {message.sender_username}
          </div>
        )}

        {/* 訊息氣泡 */}
        <div 
          className="message-bubble"
          style={{
            padding: '10px 14px',
            borderRadius: isOwnMessage ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
            backgroundColor: isOwnMessage ? '#3b82f6' : '#f3f4f6',
            color: isOwnMessage ? 'white' : '#1f2937',
            fontSize: '14px',
            lineHeight: '1.5',
            wordBreak: 'break-word',
            whiteSpace: 'pre-wrap',
            boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
          }}
        >
          {message.content}
        </div>

        {/* 時間 */}
        <div 
          className="message-time"
          style={{
            fontSize: '10px',
            color: '#9ca3af',
            marginTop: '4px',
            paddingLeft: isOwnMessage ? '0' : '12px',
            paddingRight: isOwnMessage ? '12px' : '0'
          }}
        >
          {formatTime(message.created_at)}
        </div>
      </div>
    </div>
  );
}

export default MessageBubble;
```

### 📄 `src\components\MessageCenter\MessageCenter.jsx`

```jsx
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import ConversationList from './ConversationList';
import ChatWindow from './ChatWindow';
import { conversationsAPI } from '../../api';

function MessageCenter({ currentUser, initialConversationId, onClose }) {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadConversations();
  }, []);

  useEffect(() => {
    if (initialConversationId && conversations.length > 0) {
      const conversation = conversations.find(c => c.id === initialConversationId);
      if (conversation) {
        handleSelectConversation(conversation);
      }
    }
  }, [initialConversationId]);

  const loadConversations = async () => {
    try {
      setIsLoading(true);
      const data = await conversationsAPI.getAll();
      setConversations(data);
    } catch (error) {
      console.error('載入對話失敗:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSelectConversation = async (conversation) => {
    setSelectedConversation(conversation);
    
    try {
      await conversationsAPI.markAsRead(conversation.id);
      await loadConversations();
    } catch (error) {
      console.error('標記已讀失敗:', error);
    }
  };

  const handleMessageSent = () => {
    loadConversations();
  };

  return (
    <div 
      className="message-center-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        padding: '20px'
      }}
      //onClick={onClose}
    >
      <div 
        className="message-center-modal"
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '1200px',
          height: '80vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
       // onClick={(e) => e.stopPropagation()}
      >
        {/* 標題欄 */}
        <div 
          className="message-center-header"
          style={{
            padding: '20px',
            borderBottom: '2px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#f9fafb'
          }}
        >
          <h2 style={{
            margin: 0,
            fontSize: '20px',
            fontWeight: '700',
            color: '#1f2937'
          }}>
            💬 私聊信箱
          </h2>
          
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <X size={24} color="#6b7280" />
          </button>
        </div>

        {/* 主體區域 */}
        <div 
          className="message-center-main"
          style={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: '350px 1fr',
            overflow: 'hidden'
          }}
        >
          {/* 對話列表 */}
          <ConversationList
            conversations={conversations}
            selectedConversation={selectedConversation}
            onSelectConversation={handleSelectConversation}
            isLoading={isLoading}
          />

          {/* 聊天窗口 */}
          <ChatWindow
            conversation={selectedConversation}
            currentUser={currentUser}
            onMessageSent={handleMessageSent}
            onBackClick={() => setSelectedConversation(null)}
          />
        </div>
      </div>
    </div>
  );
}

export default MessageCenter;
```

### 📄 `src\components\MessageCenter\QuickChatModal.jsx`

```jsx
import { useState, useEffect, useRef } from 'react';
import { X, Send, Package } from 'lucide-react';
import MessageBubble from './MessageBubble';
import { conversationsAPI } from '../../api';

function QuickChatModal({ post, otherUser, currentUser, onClose }) {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [conversationId, setConversationId] = useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    loadOrCreateConversation();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadOrCreateConversation = async () => {
    try {
      setIsLoading(true);
      
      const conversations = await conversationsAPI.getAll();
      
      const existing = conversations.find(c => 
        c.post_id === post.id && c.other_user.id === otherUser.id
      );

      if (existing) {
        setConversationId(existing.id);
        const msgs = await conversationsAPI.getMessages(existing.id);
        setMessages(msgs);
        await conversationsAPI.markAsRead(existing.id);
      } else {
        setConversationId(null);
        setMessages([]);
      }
    } catch (error) {
      console.error('載入對話失敗:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim() || isSending) return;
    
    setIsSending(true);
    
    try {
      if (conversationId) {
        await conversationsAPI.sendMessage(conversationId, newMessage.trim());
      } else {
        const response = await conversationsAPI.startOrGet(post.id);
        setConversationId(response.conversation_id);
        await conversationsAPI.sendMessage(response.conversation_id, newMessage.trim());
      }
      
      setNewMessage('');
      await loadOrCreateConversation();
    } catch (error) {
      alert('發送訊息失敗：' + error.message);
    } finally {
      setIsSending(false);
    }
  };

  // ✅ 改用新 DB 欄位名
  const getItemInfo = () => {
    if (post.items && post.items.length > 0) {
      const firstItem = post.items[0];
      return {
        description: firstItem.item_description,    // ✅ 改名
        category: firstItem.category,               // ✅ 改名
        brand: firstItem.brand,                     // ✅ 新增
        condition: firstItem.condition,
        itemCount: post.items.length,               // ✅ 改用項目數
        totalPrice: post.items.reduce((sum, item) => sum + item.price_per_unit, 0) // ✅ 改邏輯
      };
    }
    return null;
  };

  const itemInfo = getItemInfo();

  return (
    <div 
      className="quick-chat-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999999,
        padding: '20px'
      }}
    >
      <div 
        className="quick-chat-modal"
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '600px',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
      >
        {/* 標題欄 */}
        <div 
          className="quick-chat-header"
          style={{
            padding: '16px 20px',
            borderBottom: '2px solid #e5e7eb',
            backgroundColor: '#f9fafb'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}>
            <h3 style={{
              margin: 0,
              fontSize: '16px',
              fontWeight: '700',
              color: '#1f2937'
            }}>
              💬 與 {otherUser.username} 對話
            </h3>
            
            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
                borderRadius: '6px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <X size={20} color="#6b7280" />
            </button>
          </div>

          {/* ✅ 產品資訊卡片（新 DB 欄位） */}
          {itemInfo && (
            <div 
              className="quick-chat-item-info"
              style={{
                display: 'flex',
                gap: '12px',
                padding: '12px',
                backgroundColor: '#eff6ff',
                borderRadius: '8px',
                border: '1px solid #bfdbfe'
              }}
            >
              <div 
                className="quick-chat-item-icon"
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '6px',
                  backgroundColor: '#dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #93c5fd',
                  flexShrink: 0
                }}
              >
                <Package size={30} color="#3b82f6" />
              </div>
              
              <div 
                className="quick-chat-item-details"
                style={{ flex: 1, minWidth: 0 }}
              >
                {/* ✅ 產品資料 */}
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#1e40af',
                  marginBottom: '6px',
                  wordBreak: 'break-word'
                }}>
                  {itemInfo.description}
                </div>
                
                {/* ✅ 種類 + 品牌 */}
                <div style={{
                  display: 'flex',
                  gap: '8px',
                  marginBottom: '6px',
                  flexWrap: 'wrap'
                }}>
                  <span style={{
                    fontSize: '11px',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    backgroundColor: '#dbeafe',
                    color: '#1e40af',
                    fontWeight: '600'
                  }}>
                    📂 {itemInfo.category}
                  </span>
                  
                  {itemInfo.brand && (
                    <span style={{
                      fontSize: '11px',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      backgroundColor: '#f3f4f6',
                      color: '#374151',
                      fontWeight: '600'
                    }}>
                      🏷️ {itemInfo.brand}
                    </span>
                  )}
                </div>
                
                {/* ✅ 新舊程度 */}
                {itemInfo.condition && (
                  <div style={{
                    fontSize: '11px',
                    color: '#10b981',
                    fontWeight: '600',
                    marginBottom: '6px'
                  }}>
                    ✨ {itemInfo.condition}
                  </div>
                )}
                
                {/* ✅ 項目數 + 總價 + 類型 */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  flexWrap: 'wrap'
                }}>
                  <div style={{
                    fontSize: '12px',
                    color: '#3b82f6',
                    fontWeight: '600'
                  }}>
                    {itemInfo.itemCount} 項產品
                  </div>
                  
                  <div style={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: '#3b82f6'
                  }}>
                    ${itemInfo.totalPrice.toFixed(2)}
                  </div>
                  
                  <div style={{
                    fontSize: '11px',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    backgroundColor: post.type === 'sell' ? '#dcfce7' : '#fef3c7',
                    color: post.type === 'sell' ? '#15803d' : '#a16207',
                    fontWeight: '600'
                  }}>
                    {post.type === 'sell' ? '🏷️ 出售' : '🔍 求購'}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 訊息列表 */}
        <div 
          className="quick-chat-messages"
          style={{
            flex: 1,
            overflow: 'auto',
            padding: '20px',
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}
        >
          {isLoading ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: '#9ca3af'
            }}>
              載入訊息中...
            </div>
          ) : messages.length === 0 ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: '#9ca3af',
              textAlign: 'center'
            }}>
              <Package size={48} style={{ marginBottom: '12px', opacity: 0.3 }} />
              <p style={{ fontSize: '14px', marginBottom: '8px', fontWeight: '500' }}>開始新對話</p>
              <p style={{ fontSize: '12px' }}>發送第一條訊息給 {otherUser.username}</p>
            </div>
          ) : (
            <>
              {messages.map((message) => (
                <MessageBubble
                  key={message.id}
                  message={message}
                  isOwnMessage={message.sender_id === currentUser.id}
                />
              ))}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>

        {/* 廣告位 */}
        <div 
          className="quick-chat-ad"
          style={{
            padding: '20px',
            backgroundColor: '#f3f4f6',
            border: '2px dashed #d1d5db',
            borderTop: '2px solid #e5e7eb',
            textAlign: 'center',
            color: '#9ca3af',
            fontSize: '13px'
          }}
        >
          🖼️ 廣告位（待售）
        </div>

        {/* 輸入框 */}
        <form 
          onSubmit={handleSendMessage}
          className="quick-chat-input-form"
          style={{
            padding: '16px 20px',
            borderTop: '2px solid #e5e7eb',
            backgroundColor: '#f9fafb'
          }}
        >
          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'flex-end'
          }}>
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage(e);
                }
              }}
              placeholder="輸入訊息... (Enter 發送，Shift+Enter 換行)"
              autoFocus
              className="quick-chat-textarea"
              style={{
                flex: 1,
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                resize: 'none',
                minHeight: '50px',
                maxHeight: '120px',
                fontFamily: 'inherit',
                outline: 'none'
              }}
              onFocus={(e) => e.target.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
            
            <button
              type="submit"
              disabled={!newMessage.trim() || isSending}
              className="quick-chat-send-btn"
              style={{
                padding: '12px 20px',
                backgroundColor: newMessage.trim() && !isSending ? '#3b82f6' : '#d1d5db',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: newMessage.trim() && !isSending ? 'pointer' : 'not-allowed',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '600',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap'
              }}
              onMouseOver={(e) => {
                if (newMessage.trim() && !isSending) {
                  e.currentTarget.style.backgroundColor = '#2563eb';
                }
              }}
              onMouseOut={(e) => {
                if (newMessage.trim() && !isSending) {
                  e.currentTarget.style.backgroundColor = '#3b82f6';
                }
              }}
            >
              <Send size={16} />
              {isSending ? '發送中...' : '發送'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default QuickChatModal;
```

### 📄 `src\components\MyPostsModal.jsx`

```jsx
import { useState, useEffect } from 'react';
import { X, Trash2, Edit, Package, Shield } from 'lucide-react';
import EditPostModal from './EditPostModal';
import { request } from '../api';  // ✅ 加呢行

function MyPostsModal({ currentUser, onClose }) {
  const [myPosts, setMyPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingPost, setEditingPost] = useState(null);

  const isAdmin = currentUser?.is_admin === true;

  useEffect(() => {
    loadMyPosts();
  }, []);

  const loadMyPosts = async () => {
    try {
      setIsLoading(true);
      // ✅ 改用 request
      const endpoint = isAdmin ? '/posts/all-posts' : '/posts/my-posts';
      const data = await request(endpoint);
      setMyPosts(data);
    } catch (error) {
      console.error('載入我的貼文失敗:', error);
      alert('載入失敗：' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (postId, postUsername) => {
    const isOwnPost = postUsername === currentUser.username;
    const confirmMessage = isOwnPost
      ? '確定要刪除這個貼文嗎？刪除後無法復原！'
      : `⚠️ 管理員操作：確定要刪除 ${postUsername} 的貼文嗎？`;

    if (!confirm(confirmMessage)) {
      return;
    }

    try {
      // ✅ 改用 request
      await request(`/posts/${postId}`, {
        method: 'DELETE'
      });

      alert('刪除成功！');
      await loadMyPosts();
    } catch (error) {
      alert('刪除失敗：' + error.message);
    }
  };

  const getTotalQuantity = (items) => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getTotalValue = (items) => {
    return items.reduce((sum, item) => sum + (item.quantity * item.price_per_unit), 0);
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString('zh-TW', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return dateString;
    }
  };

  const getConditionDisplay = (condition) => {
    const map = {
      'new': '🆕 全新',
      'like_new': '✨ 如新',
      'good': '👍 良好',
      'fair': '👌 尚可',
      'other': '❓ 其他'
    };
    return map[condition] || condition;
  };

  return (
    <div
      className="my-posts-modal-overlay"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999999,
        padding: '20px',
        overflowY: 'auto'
      }}
    >
      <div
        className="my-posts-modal"
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '1200px',
          maxHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
        }}
      >
        {/* Header */}
        <div className="my-posts-header" style={{
          padding: '24px',
          borderBottom: '2px solid #e5e7eb',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: isAdmin ? '#fef3c7' : '#f9fafb'
        }}>
          <div style={{ minWidth: 0, flex: 1 }}>
            <h2 style={{
              margin: 0,
              fontSize: '24px',
              fontWeight: '700',
              color: '#1f2937',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap'
            }}>
              {isAdmin ? '👑 管理員 - 所有貼文' : '📦 我的貼文'}
              {isAdmin && (
                <span style={{
                  fontSize: '12px',
                  padding: '4px 8px',
                  backgroundColor: '#fbbf24',
                  color: 'white',
                  borderRadius: '6px',
                  fontWeight: '600',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Shield size={12} />
                  ADMIN
                </span>
              )}
            </h2>
            <p style={{
              margin: '4px 0 0 0',
              fontSize: '14px',
              color: '#6b7280',
              wordBreak: 'break-word'
            }}>
              共 <strong>{myPosts.length}</strong> 個貼文
              {!isAdmin && (
                <>
                  {' | 剩餘發佈次數：'}
                  <strong style={{ color: '#3b82f6' }}> {currentUser.tokens}</strong>
                </>
              )}
            </p>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px',
              flexShrink: 0
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fee2e2'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
          >
            <X size={24} color="#dc2626" />
          </button>
        </div>

        {/* 內容區 */}
        <div style={{
          flex: 1,
          overflow: 'auto',
          padding: '24px'
        }}>
          {isLoading ? (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '300px',
              color: '#9ca3af',
              fontSize: '16px'
            }}>
              載入中...
            </div>
          ) : myPosts.length === 0 ? (
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '300px',
              color: '#9ca3af'
            }}>
              <Package size={48} style={{ marginBottom: '16px', opacity: 0.3 }} />
              <p style={{ fontSize: '16px' }}>
                {isAdmin ? '目前沒有任何貼文' : '你還沒有發佈任何貼文'}
              </p>
              {!isAdmin && (
                <p style={{ fontSize: '14px', marginTop: '8px' }}>
                  點擊右上角「發佈交易」開始發佈
                </p>
              )}
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gap: '16px'
            }}>
              {myPosts.map((post) => {
                const isOwnPost = post.username === currentUser.username;

                return (
                  <div
                    key={post.id}
                    className="post-card"
                    style={{
                      backgroundColor: post.type === 'sell' ? '#fef3c7' : '#dbeafe',
                      border: `2px solid ${post.type === 'sell' ? '#fbbf24' : '#60a5fa'}`,
                      borderRadius: '8px',
                      padding: '20px',
                      boxShadow: isAdmin && !isOwnPost ? '0 0 0 2px #ef4444' : 'none'
                    }}
                  >
                    {/* 頂部資訊區 */}
                    <div className="post-card-header" style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      marginBottom: '16px',
                      gap: '12px',
                      flexWrap: 'wrap'
                    }}>
                      <div style={{ flex: 1, minWidth: '200px' }}>
                        {isAdmin && (
                          <div style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            padding: '4px 10px',
                            backgroundColor: isOwnPost ? '#10b981' : '#6b7280',
                            color: 'white',
                            borderRadius: '12px',
                            fontSize: '12px',
                            fontWeight: '700',
                            marginBottom: '8px',
                            marginRight: '8px'
                          }}>
                            👤 {post.username}
                            {isOwnPost && ' (你)'}
                          </div>
                        )}

                        <div style={{
                          display: 'inline-block',
                          padding: '4px 12px',
                          backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                          color: 'white',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '700',
                          marginBottom: '8px'
                        }}>
                          {post.type === 'sell' ? '💰 出售' : '🛒 求購'}
                        </div>

                        <div style={{
                          fontSize: '12px',
                          color: '#6b7280',
                          marginBottom: '4px'
                        }}>
                          🕒 發佈時間：{formatDate(post.created_at)}
                        </div>
                        {post.updated_at !== post.created_at && (
                          <div style={{
                            fontSize: '12px',
                            color: '#6b7280'
                          }}>
                            ✏️ 更新時間：{formatDate(post.updated_at)}
                          </div>
                        )}
                        <div style={{
                          fontSize: '12px',
                          color: '#6b7280',
                          marginTop: '4px'
                        }}>
                          ❤️ 點讚數：<strong>{post.likes_count || 0}</strong>
                        </div>
                        {post.condition && (
                          <div style={{
                            fontSize: '12px',
                            color: '#6b7280',
                            marginTop: '4px'
                          }}>
                            📋 產品新舊：<strong>{getConditionDisplay(post.condition)}</strong>
                          </div>
                        )}
                      </div>

                      {/* 操作按鈕 */}
                      <div className="post-actions" style={{
                        display: 'flex',
                        gap: '8px',
                        flexWrap: 'wrap'
                      }}>
                        {isOwnPost && (
                          <button
                            onClick={() => setEditingPost(post)}
                            style={{
                              padding: '8px 16px',
                              backgroundColor: '#3b82f6',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              fontSize: '13px',
                              fontWeight: '600',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              whiteSpace: 'nowrap'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
                          >
                            <Edit size={14} />
                            編輯
                          </button>
                        )}

                        {(isOwnPost || isAdmin) && (
                          <button
                            onClick={() => handleDelete(post.id, post.username)}
                            style={{
                              padding: '8px 16px',
                              backgroundColor: '#ef4444',
                              color: 'white',
                              border: 'none',
                              borderRadius: '6px',
                              fontSize: '13px',
                              fontWeight: '600',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              whiteSpace: 'nowrap'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#ef4444'}
                          >
                            <Trash2 size={14} />
                            {isAdmin && !isOwnPost ? '🔨 強制刪除' : '刪除'}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* 配件列表 */}
                    <div style={{
                      display: 'grid',
                      gap: '8px'
                    }}>
                    {post.items.map((item, index) => (
  <div
    key={index}
    className="item-card"
    style={{
      padding: '14px',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: '8px',
      border: '2px solid rgba(0,0,0,0.08)'
    }}
  >
    {/* ✅ 圖片 */}
    {item.image_url && (
      <div style={{ marginBottom: '12px' }}>
        <img
          src={item.image_url}
          alt={item.item_description}
          style={{
            width: '100%',
            maxHeight: '200px',
            objectFit: 'cover',
            borderRadius: '6px'
          }}
        />
      </div>
    )}

    {/* ✅ 產品資料 */}
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: '12px',
      flexWrap: 'wrap'
    }}>
      <div style={{ flex: 1 }}>
        {/* 產品名稱 */}
        <div style={{
          fontWeight: '700',
          color: '#1f2937',
          fontSize: '15px',
          marginBottom: '8px'
        }}>
          {item.item_description}
        </div>

        {/* 種類 + 品牌 + 新舊 */}
        <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap',
          marginBottom: '8px'
        }}>
          <span style={{
            padding: '3px 10px',
            backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
            color: 'white',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: '600'
          }}>
            {item.category}
          </span>

          {item.brand && (
            <span style={{
              padding: '3px 10px',
              backgroundColor: '#6b7280',
              color: 'white',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              🏷️ {item.brand}
            </span>
          )}

          {item.condition && (
            <span style={{
              padding: '3px 10px',
              backgroundColor: '#10b981',
              color: 'white',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: '600'
            }}>
              {item.condition}
            </span>
          )}
        </div>
      </div>

      {/* 價錢 */}
      <div style={{
        textAlign: 'right',
        minWidth: '120px'
      }}>
        <div style={{
          fontSize: '13px',
          color: '#6b7280',
          marginBottom: '4px'
        }}>
          ${item.price_per_unit}/件
        </div>
        <div style={{
          fontSize: '18px',
          fontWeight: '700',
          color: '#10b981'
        }}>
          HK${(item.price_per_unit).toFixed(2)}
        </div>
      </div>
    </div>
  </div>
))}

                   {/* 📦 總計（只在多於 1 件產品時顯示） */}
{post.items.length > 1 && (
  <div style={{
    padding: '14px',
    backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
    fontWeight: '700',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
    <span style={{ fontSize: '14px' }}>
      📦 總共 {post.items.length} 件產品
    </span>
    <span style={{ fontSize: '20px' }}>
      總值 HK${post.items.reduce((sum, item) => sum + parseFloat(item.price_per_unit || 0), 0).toFixed(2)}
    </span>
  </div>
)}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* 編輯貼文彈窗 */}
      {editingPost && (
        <EditPostModal
          post={editingPost}
          currentUser={currentUser}
          onClose={() => setEditingPost(null)}
          onSuccess={async () => {
            setEditingPost(null);
            await loadMyPosts();
            window.location.reload();
          }}
        />
      )}
    </div>
  );
}

export default MyPostsModal;
```

### 📄 `src\components\PostCard.jsx`

```jsx
import { Package, Heart, Info } from 'lucide-react';

function PostCard({ post, currentUser, onLike, onShowDetail }) {
  const totalValue = post.items.reduce(
    (sum, item) => sum + item.price_per_unit,
    0
  );

  const formatDate = (dateString) => {
    if (!dateString) return 'Invalid Date';
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) return 'Invalid Date';
      
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      
      return `${month}-${day} ${hours}:${minutes}`;
    } catch (e) {
      return 'Invalid Date';
    }
  };

  const getConditionDisplay = (condition) => {
    if (!condition) return null;
    return `📋 ${condition}`;
  };

  const postItColor = post.type === 'sell' ? '#fef3c7' : '#dbeafe';
  const borderColor = post.type === 'sell' ? '#fbbf24' : '#60a5fa';
  const textColor = post.type === 'sell' ? '#92400e' : '#1e3a8a';

  const isLiked = post.is_liked || false;
  const likesCount = post.likes_count || 0;

  return (
    <div style={{
      backgroundColor: postItColor,
      border: `3px solid ${borderColor}`,
      borderRadius: '4px',
      padding: '16px',
      boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.2s',
      position: 'relative',
      minHeight: '320px',
      display: 'flex',
      flexDirection: 'column'
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.boxShadow = '6px 6px 12px rgba(0, 0, 0, 0.2)';
      e.currentTarget.style.transform = 'rotate(1deg) translateY(-4px)';
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.boxShadow = '4px 4px 8px rgba(0, 0, 0, 0.1)';
      e.currentTarget.style.transform = 'rotate(0deg) translateY(0)';
    }}>
      
      <div style={{
        position: 'absolute',
        top: '-8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        backgroundColor: '#ef4444',
        boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3), 0 2px 4px rgba(0,0,0,0.2)',
        border: '2px solid #b91c1c'
      }}></div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '12px',
        paddingBottom: '10px',
        borderBottom: `2px dashed ${borderColor}`
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: textColor,
            color: postItColor,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
            border: `2px solid ${borderColor}`
          }}>
            {post.username ? post.username.charAt(0).toUpperCase() : 'U'}
          </div>
          <div>
            <div style={{ 
              fontSize: '14px',
              fontWeight: '700', 
              color: textColor,
              fontFamily: 'Arial, sans-serif'
            }}>
              {post.username || '未知用戶'}
            </div>
            <div style={{ 
              fontSize: '11px',
              color: textColor,
              opacity: 0.7,
              marginTop: '2px'
            }}>
              {formatDate(post.created_at)}
            </div>
          </div>
        </div>
        
        <div style={{
          padding: '4px 10px',
          backgroundColor: borderColor,
          color: 'white',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '700',
          boxShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          {post.type === 'sell' ? '💰 出售' : '🛒 求購'}
        </div>
      </div>

      {/* ✅ 配件列表（新 DB 欄位名） */}
      <div style={{ 
        flex: 1,
        marginBottom: '12px',
        maxHeight: '180px',
        overflowY: 'auto',
        paddingRight: '4px'
      }}>
        {post.items.map((item, index) => (
          <div
            key={index}
            style={{
              padding: '8px 10px',
              marginBottom: '6px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '6px',
              borderLeft: `4px solid ${borderColor}`,
              fontSize: '13px',
              fontFamily: 'Arial, sans-serif'
            }}
          >
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              marginBottom: '4px',
              flexWrap: 'wrap',
              gap: '4px'
            }}>
              <span style={{ 
                fontWeight: '700',
                color: textColor,
                fontSize: '12px',
                wordBreak: 'break-word'
              }}>
                {item.item_description || '未知產品'}
              </span>
              <span style={{
                backgroundColor: borderColor,
                color: 'white',
                padding: '2px 8px',
                borderRadius: '8px',
                fontSize: '11px',
                fontWeight: '600',
                flexShrink: 0
              }}>
                {item.category}
              </span>
            </div>

            {/* ✅ 顯示品牌（如果有） */}
            {item.brand && (
              <div style={{
                fontSize: '11px',
                color: textColor,
                marginBottom: '4px',
                fontWeight: '600',
                opacity: 0.8
              }}>
                🏷️ {item.brand}
              </div>
            )}

            {/* ✅ 顯示新舊程度（如果有） */}
            {item.condition && getConditionDisplay(item.condition) && (
              <div style={{
                fontSize: '11px',
                color: textColor,
                marginBottom: '4px',
                fontWeight: '600',
                opacity: 0.8
              }}>
                {getConditionDisplay(item.condition)}
              </div>
            )}

            <div style={{ 
              display: 'flex', 
              justifyContent: 'flex-end',
              color: textColor,
              fontSize: '14px'
            }}>
              <span style={{ fontWeight: '700' }}>
                ${item.price_per_unit?.toFixed(2) || '0.00'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        paddingTop: '10px',
        borderTop: `2px dashed ${borderColor}`
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            color: textColor,
            fontWeight: '600'
          }}>
            <Package size={16} />
            <span>{post.items.length} 項產品</span>
          </div>

          <div style={{
            fontSize: '18px',
            fontWeight: '900',
            color: textColor,
            fontFamily: 'Arial, sans-serif',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}>
            HK${totalValue.toFixed(2)}
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '8px',
          paddingTop: '8px',
          borderTop: `1px dashed ${borderColor}`
        }}>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onLike(post.id);
            }}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '8px 12px',
              backgroundColor: isLiked ? '#fee2e2' : 'rgba(255, 255, 255, 0.5)',
              border: `2px solid ${isLiked ? '#ef4444' : borderColor}`,
              borderRadius: '8px',
              color: isLiked ? '#dc2626' : textColor,
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = isLiked ? '#fecaca' : 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = isLiked ? '#fee2e2' : 'rgba(255, 255, 255, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <Heart 
              size={16} 
              fill={isLiked ? '#dc2626' : 'none'}
              color={isLiked ? '#dc2626' : textColor}
            />
            <span>{likesCount}</span>
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onShowDetail(post);
            }}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '8px 12px',
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              border: `2px solid ${borderColor}`,
              borderRadius: '8px',
              color: textColor,
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <Info size={16} />
            <span>詳細</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
```

### 📄 `src\components\PostDetailModal.jsx`

```jsx
import { X, Heart, MessageCircle, Clock, Package } from 'lucide-react';
import { useState } from 'react';
import QuickChatModal from './MessageCenter/QuickChatModal';
import ImageLightbox from './ImageLightbox';

function PostDetailModal({ post, currentUser, onClose, onLike }) {
  const [showQuickChat, setShowQuickChat] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null);

  const getTotalValue = () => {
    return post.items.reduce((sum, item) => sum + item.price_per_unit, 0);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString('zh-TW', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getConditionDisplay = (condition) => {
    if (!condition) return null;
    return condition;
  };

  const handleContactSeller = () => {
    if (!currentUser) {
      alert('請先登入！');
      return;
    }
    if (currentUser.id === post.user_id) {
      alert('你不能同自己聊天！');
      return;
    }
    setShowQuickChat(true);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999999,
          padding: '20px',
          overflowY: 'auto'
        }}
        onClick={onClose}
      >
        <div
          className="post-detail-modal"
          style={{
            backgroundColor: 'white',
            borderRadius: '12px',
            width: '100%',
            maxWidth: '800px',
            maxHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div style={{
            padding: '24px',
            borderBottom: '2px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: post.type === 'sell' ? '#fef3c7' : '#dbeafe'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                flexShrink: 0
              }}>
                {post.username.charAt(0).toUpperCase()}
              </div>
              <div style={{ minWidth: 0 }}>
                <h2 style={{
                  margin: 0,
                  fontSize: '20px',
                  fontWeight: '700',
                  color: '#1f2937',
                  wordBreak: 'break-word'
                }}>
                  {post.username} 的
                  <span style={{
                    color: post.type === 'sell' ? '#f59e0b' : '#3b82f6',
                    marginLeft: '8px'
                  }}>
                    {post.type === 'sell' ? '💰 出售貼文' : '🛒 求購貼文'}
                  </span>
                </h2>
                <p style={{
                  margin: '4px 0 0 0',
                  fontSize: '13px',
                  color: '#6b7280',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  flexWrap: 'wrap'
                }}>
                  <Clock size={13} />
                  發佈時間：{formatDate(post.created_at)}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '8px',
                borderRadius: '8px',
                flexShrink: 0
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#fee2e2'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <X size={24} color="#dc2626" />
            </button>
          </div>

          {/* 內容區 */}
          <div style={{
            flex: 1,
            overflow: 'auto',
            padding: '24px'
          }}>
            {/* 產品列表 */}
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#1f2937',
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Package size={18} color="#3b82f6" />
                產品清單
              </h3>

              <div style={{ display: 'grid', gap: '12px' }}>
                {post.items.map((item, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '16px',
                      backgroundColor: post.type === 'sell' ? '#fef3c7' : '#dbeafe',
                      border: `2px solid ${post.type === 'sell' ? '#fbbf24' : '#60a5fa'}`,
                      borderRadius: '8px'
                    }}
                  >
                    {/* ✅ 圖片區（如果有圖片） */}
                    {item.image_url && (
                      <div style={{ marginBottom: '12px' }}>
                        <img
                          src={item.image_url}
                          alt={`產品 ${item.item_description}`}
                          style={{
                            width: '100px',
                            height: '100px',
                            objectFit: 'cover',
                            borderRadius: '8px',
                            border: '2px solid rgba(0, 0, 0, 0.1)',
                            cursor: 'pointer'
                          }}
                          onClick={() => setLightboxImage(item.image_url)}
                        />
                      </div>
                    )}

                    {/* ✅ 產品資料 */}
                    <div style={{
                      fontSize: '15px',
                      fontWeight: '700',
                      color: '#1f2937',
                      marginBottom: '8px',
                      wordBreak: 'break-word'
                    }}>
                      {item.item_description || '未知產品'}
                    </div>

                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '8px',
                      marginBottom: '8px'
                    }}>
                      {/* ✅ 種類 */}
                      <span style={{
                        padding: '4px 12px',
                        backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                        color: 'white',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '600'
                      }}>
                        📂 {item.category}
                      </span>

                      {/* ✅ 品牌（如果有） */}
                      {item.brand && (
                        <span style={{
                          padding: '4px 12px',
                          backgroundColor: 'rgba(255, 255, 255, 0.7)',
                          color: '#1f2937',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: '600',
                          border: '1px solid rgba(0, 0, 0, 0.1)'
                        }}>
                          🏷️ {item.brand}
                        </span>
                      )}
                    </div>

                    {/* ✅ 新舊程度（如果有） */}
                    {item.condition && getConditionDisplay(item.condition) && (
                      <div style={{
                        fontSize: '13px',
                        color: '#1f2937',
                        marginBottom: '8px',
                        fontWeight: '600',
                        padding: '4px 8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        borderRadius: '4px',
                        display: 'inline-block'
                      }}>
                        📋 {getConditionDisplay(item.condition)}
                      </div>
                    )}

                    {/* ✅ 價錢 */}
                    <div style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#10b981',
                      marginTop: '8px'
                    }}>
                      HK${item.price_per_unit?.toFixed(2) || '0.00'}
                    </div>
                  </div>
                ))}

                {/* 總計 */}
                <div style={{
                  padding: '20px',
                  backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                  borderRadius: '8px',
                  color: 'white'
                }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '18px',
                    fontWeight: '700',
                    flexWrap: 'wrap',
                    gap: '12px'
                  }}>
                    <span>📦 總計：{post.items.length} 項產品</span>
                    <span style={{ fontSize: '24px' }}>
                      HK${getTotalValue().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 操作按鈕區 */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '12px',
              marginTop: '24px'
            }}>
              {/* 點讚按鈕 */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onLike(post.id);
                }}
                style={{
                  padding: '14px',
                  backgroundColor: post.is_liked ? '#ef4444' : '#f3f4f6',
                  color: post.is_liked ? 'white' : '#6b7280',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px'
                }}
                onMouseOver={(e) => {
                  if (!post.is_liked) {
                    e.currentTarget.style.backgroundColor = '#fecaca';
                  }
                }}
                onMouseOut={(e) => {
                  if (!post.is_liked) {
                    e.currentTarget.style.backgroundColor = '#f3f4f6';
                  }
                }}
              >
                <Heart size={18} fill={post.is_liked ? 'white' : 'none'} />
                {post.is_liked ? '已點讚' : '點讚'} ({post.likes_count || 0})
              </button>

              {/* 私聊按鈕 */}
              {currentUser && currentUser.id !== post.user_id && (
                <button
                  onClick={handleContactSeller}
                  style={{
                    padding: '14px',
                    backgroundColor: post.type === 'sell' ? '#fbbf24' : '#60a5fa',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '16px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = post.type === 'sell' ? '#f59e0b' : '#3b82f6';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = post.type === 'sell' ? '#fbbf24' : '#60a5fa';
                  }}
                >
                  <MessageCircle size={18} />
                  私聊賣家
                </button>
              )}
            </div>

            {/* ✅ 底部廣告位 */}
            <div style={{
              marginTop: '24px',
              width: '100%',
              height: '150px',
              backgroundColor: '#f3f4f6',
              border: '2px dashed #d1d5db',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#9ca3af',
              fontSize: '14px',
              textAlign: 'center',
              padding: '20px'
            }}>
              🖼️ 廣告位（待售）
            </div>
          </div>
        </div>
      </div>

      {/* 私聊彈窗 */}
      {showQuickChat && (
        <QuickChatModal
          post={post}
          otherUser={{ id: post.user_id, username: post.username }}
          currentUser={currentUser}
          onClose={() => setShowQuickChat(false)}
        />
      )}

      {/* ✅ 圖片放大 Lightbox */}
      {lightboxImage && (
        <ImageLightbox
          imageUrl={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </>
  );
}

export default PostDetailModal;
```

### 📄 `src\components\PromotionBanner.jsx`

```jsx
import { Mail, Heart, Recycle, Sparkles } from 'lucide-react';

function BulkSalePromo({ onRegisterClick }) {
  return (
    <>
      {/* 🖥️ 桌面版：右側固定 */}
      <div className="bulk-promo-desktop">
        <div className="bulk-promo-content">
          <div className="bulk-promo-badge">
            <Sparkles size={16} />
            <span>平台使命</span>
          </div>
          
          <h3 className="bulk-promo-title">
            🍼 延續BB用品<br/>嘅生命
          </h3>

          <div className="bulk-promo-steps">
            <div className="bulk-promo-step">
              <Heart size={20} color="#fff" fill="#fff" />
              <p>集中交易<br/>更方便搵到</p>
            </div>

            <div className="bulk-promo-step">
              <Recycle size={20} color="#fff" />
              <p>減少浪費<br/>環保育兒</p>
            </div>

            <div className="bulk-promo-step">
              <Mail size={20} color="#fff" />
              <p>互助社群<br/>幫助家庭</p>
            </div>
          </div>

          <div className="bulk-promo-format">
            <div>
              <strong>💚 支持我哋</strong>
              <p>一齊打造可持續育兒文化，讓每件BB用品發揮最大價值</p>
            </div>
          </div>

          <button 
            className="bulk-promo-btn"
            onClick={onRegisterClick}
          >
            <Sparkles size={16} />
            立即加入
          </button>
        </div>
      </div>

      {/* 📱 手機版：彈出訊息（可選） */}
      <style jsx>{`
        .bulk-promo-desktop {
          position: sticky;
          top: 100px;
          width: 180px;
          background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);
          border-radius: 16px;
          padding: 24px 16px;
          box-shadow: 0 8px 32px rgba(236, 72, 153, 0.3);
          color: white;
          text-align: center;
        }

        .bulk-promo-badge {
          background: rgba(255, 255, 255, 0.25);
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 900;
          margin-bottom: 12px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          backdrop-filter: blur(10px);
        }

        .bulk-promo-title {
          font-size: 17px;
          font-weight: 900;
          margin-bottom: 20px;
          line-height: 1.4;
        }

        .bulk-promo-steps {
          margin-bottom: 20px;
        }

        .bulk-promo-step {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
          background: rgba(255, 255, 255, 0.2);
          padding: 12px 10px;
          border-radius: 10px;
          text-align: left;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .bulk-promo-step p {
          font-size: 11px;
          font-weight: 700;
          line-height: 1.4;
          margin: 0;
        }

        .bulk-promo-format {
          background: rgba(255, 255, 255, 0.25);
          padding: 14px 12px;
          border-radius: 10px;
          margin-bottom: 20px;
          text-align: left;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .bulk-promo-format strong {
          display: block;
          font-size: 12px;
          margin-bottom: 6px;
          font-weight: 900;
        }

        .bulk-promo-format p {
          font-size: 10px;
          line-height: 1.5;
          margin: 0;
          opacity: 0.95;
        }

        .bulk-promo-btn {
          width: 100%;
          background: white;
          color: #ec4899;
          border: none;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 900;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
          transition: all 0.3s;
        }

        .bulk-promo-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
          background: #fff;
        }

        .bulk-promo-btn:active {
          transform: translateY(-1px);
        }

        /* 📱 手機版隱藏 */
        @media (max-width: 768px) {
          .bulk-promo-desktop {
            display: none !important;
          }
        }

        @media (max-width: 1024px) {
          .bulk-promo-desktop {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

export default BulkSalePromo;
```

### 📄 `src\components\RegisterModal.jsx`

```jsx
import { X, UserPlus } from 'lucide-react';
import { useState } from 'react';

function RegisterModal({ onClose, onRegister, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [isRegistering, setIsRegistering] = useState(false);

const handleSubmit = async (e) => {
  e.preventDefault();
  
  if (isRegistering) return;
  
  if (!formData.username || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
    alert('請填寫所有欄位！');
    return;
  }
  
  if (formData.password !== formData.confirmPassword) {
    alert('密碼唔一致！');
    return;
  }

  if (formData.password.length < 6) {
    alert('密碼至少要 6 個字符！');
    return;
  }
  
  setIsRegistering(true);
  
  try {
    await onRegister(formData);
    // ✅ 成功會自動關閉 modal，唔使手動 reset
  } catch (error) {
    // ✅ 失敗要 reset，但 error message 由 onRegister 處理
    setIsRegistering(false);
  }
};


  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          padding: '32px',
          maxWidth: '450px',
          width: '100%',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
          position: 'relative',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '24px'
        }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>
            🧱 註冊新帳號
          </h2>
          <button
            onClick={onClose}
            disabled={isRegistering}
            style={{
              padding: '8px',
              border: 'none',
              background: 'transparent',
              cursor: isRegistering ? 'not-allowed' : 'pointer',
              borderRadius: '8px',
              opacity: isRegistering ? 0.5 : 1
            }}
            onMouseOver={(e) => {
              if (!isRegistering) {
                e.target.style.backgroundColor = '#fee2e2';
              }
            }}
            onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <X size={24} color="#dc2626" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontSize: '14px', 
              fontWeight: '500',
              color: '#374151'
            }}>
              用戶名稱
            </label>
            <input
              type="text"
              required
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              disabled={isRegistering}
              placeholder="your_username"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: isRegistering ? 0.6 : 1
              }}
              onFocus={(e) => {
                if (!isRegistering) {
                  e.target.style.borderColor = '#3b82f6';
                }
              }}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontSize: '14px', 
              fontWeight: '500',
              color: '#374151'
            }}>
              電郵地址
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              disabled={isRegistering}
              placeholder="your@email.com"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: isRegistering ? 0.6 : 1
              }}
              onFocus={(e) => {
                if (!isRegistering) {
                  e.target.style.borderColor = '#3b82f6';
                }
              }}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontSize: '14px', 
              fontWeight: '500',
              color: '#374151'
            }}>
              電話號碼
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              disabled={isRegistering}
              placeholder="12345678"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: isRegistering ? 0.6 : 1
              }}
              onFocus={(e) => {
                if (!isRegistering) {
                  e.target.style.borderColor = '#3b82f6';
                }
              }}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontSize: '14px', 
              fontWeight: '500',
              color: '#374151'
            }}>
              密碼
            </label>
            <input
              type="password"
              required
              minLength="6"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              disabled={isRegistering}
              placeholder="至少 6 個字符"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: isRegistering ? 0.6 : 1
              }}
              onFocus={(e) => {
                if (!isRegistering) {
                  e.target.style.borderColor = '#3b82f6';
                }
              }}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{ 
              display: 'block', 
              marginBottom: '8px', 
              fontSize: '14px', 
              fontWeight: '500',
              color: '#374151'
            }}>
              確認密碼
            </label>
            <input
              type="password"
              required
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              disabled={isRegistering}
              placeholder="再次輸入密碼"
              style={{
                width: '100%',
                padding: '12px',
                border: '1px solid #d1d5db',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                opacity: isRegistering ? 0.6 : 1
              }}
              onFocus={(e) => {
                if (!isRegistering) {
                  e.target.style.borderColor = '#3b82f6';
                }
              }}
              onBlur={(e) => e.target.style.borderColor = '#d1d5db'}
            />
          </div>

          <button
            type="submit"
            disabled={isRegistering}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: isRegistering ? '#d1d5db' : '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: isRegistering ? 'not-allowed' : 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              opacity: isRegistering ? 0.6 : 1
            }}
            onMouseOver={(e) => {
              if (!isRegistering) {
                e.target.style.backgroundColor = '#2563eb';
              }
            }}
            onMouseOut={(e) => {
              if (!isRegistering) {
                e.target.style.backgroundColor = '#3b82f6';
              }
            }}
          >
            <UserPlus size={20} />
            {isRegistering ? '註冊中...' : '註冊'}
          </button>

          <p style={{
            marginTop: '16px',
            fontSize: '12px',
            color: '#6b7280',
            textAlign: 'center'
          }}>
            註冊即可獲得 <strong style={{ color: '#3b82f6' }}>10 次免費發佈機會</strong>！
          </p>

          <p style={{
            marginTop: '12px',
            fontSize: '14px',
            color: '#6b7280',
            textAlign: 'center'
          }}>
            已有帳號？{' '}
            <button
              type="button"
              onClick={onSwitchToLogin}
              disabled={isRegistering}
              style={{
                background: 'none',
                border: 'none',
                color: isRegistering ? '#9ca3af' : '#3b82f6',
                fontWeight: '600',
                cursor: isRegistering ? 'not-allowed' : 'pointer',
                textDecoration: 'underline',
                padding: 0
              }}
            >
              立即登入
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default RegisterModal;
```

### 📄 `src\components\ResourcesPage.jsx`

```jsx
import { useState, useEffect } from 'react';
import { Upload, Download, FileText, Search, Filter, X, AlertCircle } from 'lucide-react';
import { request } from '../api';

const CATEGORIES = [
  { value: 'writing', label: '✏️ 字帖', color: '#3b82f6' },
  { value: 'parenting', label: '👶 育兒指南', color: '#10b981' },
  { value: 'health', label: '🏥 健康資訊', color: '#ef4444' },
  { value: 'nutrition', label: '🍎 營養飲食', color: '#f59e0b' },
  { value: 'education', label: '📚 教育資源', color: '#8b5cf6' },
  { value: 'safety', label: '🛡️ 安全須知', color: '#ec4899' }
];

function ResourcesPage({ currentUser }) {
  const [resources, setResources] = useState([]);
  const [filteredResources, setFilteredResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResources();
  }, []);

  useEffect(() => {
    filterResources();
  }, [resources, searchTerm, selectedCategory]);

  const loadResources = async () => {
    try {
      const data = await request('/resources');
      setResources(data);
    } catch (error) {
      console.error('載入資源失敗:', error);
      alert('載入資源失敗');
    } finally {
      setLoading(false);
    }
  };

  const filterResources = () => {
    let filtered = resources;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(r => r.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(r =>
        r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredResources(filtered);
  };

  const handleDownload = async (resource) => {
    try {
      const response = await fetch(`http://localhost:8000${resource.file_path}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = resource.file_name;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('下載失敗:', error);
      alert('下載失敗');
    }
  };

  const getCategoryInfo = (category) => {
    return CATEGORIES.find(c => c.value === category) || CATEGORIES[0];
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px'
    }}>
      {/* Header */}
      <div style={{
        marginBottom: '30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '15px'
      }}>
        <div>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#1f2937',
            margin: '0 0 8px 0'
          }}>
            📚 BB 資源中心
          </h1>
          <p style={{
            fontSize: '14px',
            color: '#6b7280',
            margin: 0
          }}>
            免費下載育兒資源、字帖、健康指南等
          </p>
        </div>

        {currentUser?.is_admin && (
          <button
            onClick={() => setShowUploadModal(true)}
            style={{
              padding: '12px 20px',
              backgroundColor: '#3b82f6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#3b82f6'}
          >
            <Upload size={18} />
            上載資源
          </button>
        )}
      </div>

      {/* Search & Filter */}
      <div style={{
        marginBottom: '24px',
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '12px'
      }}>
        {/* Search */}
        <div style={{ position: 'relative' }}>
          <Search
            size={20}
            color="#9ca3af"
            style={{
              position: 'absolute',
              left: '12px',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
          />
          <input
            type="text"
            placeholder="搜尋資源..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '12px 12px 12px 44px',
              border: '2px solid #e5e7eb',
              borderRadius: '8px',
              fontSize: '14px',
              boxSizing: 'border-box'
            }}
          />
        </div>

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: '12px 16px',
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            minWidth: '180px'
          }}
        >
          <option value="all">📂 全部分類</option>
          {CATEGORIES.map(cat => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* Resources Grid */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '60px 20px', color: '#9ca3af' }}>
          載入中...
        </div>
      ) : filteredResources.length === 0 ? (
        <div style={{
          textAlign: 'center',
          padding: '60px 20px',
          backgroundColor: '#f9fafb',
          borderRadius: '12px',
          border: '2px dashed #d1d5db'
        }}>
          <FileText size={48} color="#d1d5db" style={{ margin: '0 auto 16px' }} />
          <p style={{ color: '#6b7280', margin: 0 }}>暫無資源</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {filteredResources.map(resource => {
            const category = getCategoryInfo(resource.category);
            return (
              <div
                key={resource.id}
                style={{
                  backgroundColor: 'white',
                  border: '2px solid #e5e7eb',
                  borderRadius: '12px',
                  padding: '20px',
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = category.color;
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Category Badge */}
                <div
                  style={{
                    display: 'inline-block',
                    padding: '4px 12px',
                    backgroundColor: category.color,
                    color: 'white',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: '600',
                    marginBottom: '12px'
                  }}
                >
                  {category.label}
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '16px',
                  fontWeight: '700',
                  color: '#1f2937',
                  margin: '0 0 8px 0'
                }}>
                  {resource.title}
                </h3>

                {/* Description */}
                {resource.description && (
                  <p style={{
                    fontSize: '13px',
                    color: '#6b7280',
                    margin: '0 0 16px 0',
                    lineHeight: '1.5'
                  }}>
                    {resource.description}
                  </p>
                )}

                {/* File Info */}
                <div style={{
                  fontSize: '12px',
                  color: '#9ca3af',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <FileText size={14} />
                  {resource.file_name}
                  {resource.file_size && (
                    <span>• {(resource.file_size / 1024).toFixed(1)} KB</span>
                  )}
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(resource)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    backgroundColor: category.color,
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px'
                  }}
                >
                  <Download size={16} />
                  下載 PDF
                </button>
              </div>
            );
          })}
        </div>
      )}

      {/* Upload Modal */}
      {showUploadModal && (
        <UploadModal
          onClose={() => setShowUploadModal(false)}
          onSuccess={() => {
            setShowUploadModal(false);
            loadResources();
          }}
        />
      )}
    </div>
  );
}

// Upload Modal Component
function UploadModal({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'writing'
  });
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert('請選擇檔案！');
      return;
    }

    if (file.type !== 'application/pdf') {
      alert('只接受 PDF 檔案！');
      return;
    }

    setUploading(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('category', formData.category);
      formDataToSend.append('file', file);

      await request('/resources/upload', {
        method: 'POST',
        body: formDataToSend,
        headers: {} // Let browser set Content-Type
      });

      alert('✅ 上載成功！');
      onSuccess();
    } catch (error) {
      console.error('上載失敗:', error);
      alert('上載失敗：' + error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        padding: '20px'
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundColor: 'white',
          borderRadius: '12px',
          width: '100%',
          maxWidth: '500px',
          padding: '24px'
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px'
        }}>
          <h2 style={{
            fontSize: '20px',
            fontWeight: '700',
            color: '#1f2937',
            margin: 0
          }}>
            📤 上載資源
          </h2>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '8px'
            }}
          >
            <X size={24} color="#dc2626" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              資源標題 *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              描述
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={3}
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{ marginBottom: '16px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              分類 *
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            >
              {CATEGORIES.map(cat => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label style={{
              display: 'block',
              fontSize: '14px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '8px'
            }}>
              PDF 檔案 *
            </label>
            <input
              type="file"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
              required
              style={{
                width: '100%',
                padding: '12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                boxSizing: 'border-box'
              }}
            />
            {file && (
              <div style={{
                marginTop: '8px',
                fontSize: '12px',
                color: '#6b7280'
              }}>
                已選擇: {file.name} ({(file.size / 1024).toFixed(1)} KB)
              </div>
            )}
          </div>

          <div style={{
            display: 'flex',
            gap: '12px'
          }}>
            <button
              type="button"
              onClick={onClose}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: '#f3f4f6',
                color: '#374151',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              取消
            </button>
            <button
              type="submit"
              disabled={uploading}
              style={{
                flex: 1,
                padding: '12px',
                backgroundColor: uploading ? '#d1d5db' : '#3b82f6',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: uploading ? 'not-allowed' : 'pointer'
              }}
            >
              {uploading ? '上載中...' : '上載'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ResourcesPage;
```

### 📄 `src\components\SearchBar.jsx`

```jsx
import { Search } from 'lucide-react';

function SearchBar({ 
  activeTab, 
  onTabChange, 
  searchTerm, 
  onSearchChange,
  filters,
  onFilterChange
}) {
  const handleSearch = (e) => {
    onSearchChange(e.target.value);
  };

  return (
    <>
      {/* Tabs */}
      <div className="searchbar-tabs">
        <div className="searchbar-tabs-content">
          <button
            onClick={() => onTabChange('')}
            style={{
              padding: '12px 24px',
              backgroundColor: !activeTab ? '#3b82f6' : 'transparent',
              color: !activeTab ? 'white' : '#6b7280',
              border: 'none',
              borderBottom: !activeTab ? '3px solid #2563eb' : '3px solid transparent',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
          >
            全部
          </button>
          <button
            onClick={() => onTabChange('sell')}
            style={{
              padding: '12px 24px',
              backgroundColor: activeTab === 'sell' ? '#3b82f6' : 'transparent',
              color: activeTab === 'sell' ? 'white' : '#6b7280',
              border: 'none',
              borderBottom: activeTab === 'sell' ? '3px solid #2563eb' : '3px solid transparent',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
          >
            💰 出售 / 免費送出
          </button>
          <button
            onClick={() => onTabChange('buy')}
            style={{
              padding: '12px 24px',
              backgroundColor: activeTab === 'buy' ? '#3b82f6' : 'transparent',
              color: activeTab === 'buy' ? 'white' : '#6b7280',
              border: 'none',
              borderBottom: activeTab === 'buy' ? '3px solid #2563eb' : '3px solid transparent',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}
          >
            🛒 徵收
          </button>
        </div>
      </div>

      {/* ✅ 一行過篩選器（收窄版） */}
      <div className="searchbar-filters-wrapper">
        <div className="searchbar-filters-content">
          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center'
          }}>
            {/* ✅ 搜尋框（固定 400px，手機版 100%） */}
            <div style={{ 
              position: 'relative', 
              width: '400px',
              maxWidth: '100%'
            }}>
              <Search 
                size={18} 
                style={{
                  position: 'absolute',
                  left: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#9ca3af'
                }}
              />
              <input
                type="text"
                placeholder="🔍 搜尋產品資料、種類、品牌..."
                value={searchTerm}
                onChange={handleSearch}
                style={{
                  width: '100%',
                  padding: '10px 10px 10px 40px',
                  border: '2px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px',
                  outline: 'none'
                }}
                onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
              />
            </div>

            {/* ✅ 種類篩選（固定 200px） */}
            <select
              value={filters.category || ''}
              onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
              style={{
                width: '200px',
                padding: '10px 12px',
                border: '2px solid #e5e7eb',
                borderRadius: '8px',
                fontSize: '14px',
                cursor: 'pointer',
                backgroundColor: 'white',
                outline: 'none',
                flexShrink: 0
              }}
              onFocus={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
              onBlur={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
            >
              <option value="">📂 所有種類</option>
              
              {/* 🚼 大件用品 */}
              <optgroup label="🚼 大件用品">
                <option value="嬰兒車">🚼 嬰兒車</option>
                <option value="嬰兒床">🛏️ 嬰兒床</option>
                <option value="安全座椅">🚗 安全座椅</option>
                <option value="揹帶 / 腰凳">👶 揹帶 / 腰凳</option>
              </optgroup>

              {/* 🍼 飲食類 */}
              <optgroup label="🍼 飲食類">
                <option value="奶粉">🥛 奶粉</option>
                <option value="嬰兒食品">🍚 嬰兒食品</option>
                <option value="奶樽 / 奶咀">🍼 奶樽 / 奶咀</option>
                <option value="餵食用具">🍴 餵食用具</option>
              </optgroup>

              {/* 🧸 玩具 & 學習 */}
              <optgroup label="🧸 玩具 & 學習">
                <option value="玩具">🧸 玩具</option>
                <option value="圖書">📚 圖書</option>
              </optgroup>

              {/* 👕 衣物類 */}
              <optgroup label="👕 衣物類">
                <option value="衣服">👕 衣服</option>
                <option value="鞋襪">👟 鞋襪</option>
              </optgroup>

              {/* 🧷 清潔護理 */}
              <optgroup label="🧷 清潔護理">
                <option value="尿片">🧷 尿片</option>
                <option value="清潔用品">🧼 清潔用品</option>
                <option value="洗護用品">🛁 洗護用品</option>
              </optgroup>

              {/* 📦 其他 */}
              <option value="其他">📦 其他</option>
            </select>
          </div>
        </div>
      </div>

      {/* ✅ 手機版：變返直排 */}
      <style jsx>{`
        @media (max-width: 768px) {
          .searchbar-filters-content > div {
            flex-direction: column !important;
          }

          .searchbar-filters-content > div > div,
          .searchbar-filters-content select {
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
}

export default SearchBar;
```

### 📄 `src\data\mockData.js`

```javascript
export const mockUsers = [
  { id: 1, username: 'BabyMom123', email: 'babymom@example.com' },
  { id: 2, username: 'DadSeller', email: 'dadseller@example.com' },
  { id: 3, username: 'ToyCollector', email: 'toycollector@example.com' }
];

// ✅ 種類選項（擴充至 16 個）
export const CATEGORIES = [
  '嬰兒車',
  '嬰兒床',
  '安全座椅',
  '揹帶 / 腰凳',
  '奶粉',
  '嬰兒食品',
  '奶樽 / 奶咀',
  '餵食用具',
  '玩具',
  '圖書',
  '衣服',
  '鞋襪',
  '尿片',
  '清潔用品',
  '洗護用品',
  '其他'
];

// 新舊狀況（保持不變）
export const CONDITIONS = [
  '全新',
  '95新',
  '9成新',
  '8成新',
  '7成新',
  '其他'
];

// ✅ 品牌選項（非必填）
export const BRANDS = [
  'Chicco',
  'Combi',
  'Maclaren',
  'Stokke',
  'Bugaboo',
  'Aprica',
  'Fisher-Price',
  'VTech',
  "Carter's",
  'Baby Gap',
  'Philips Avent',
  'Tommee Tippee',
  'Pigeon',
  'Ergobaby',
  '其他'
];



export const mockPosts = [
  // 出售
  {
    id: 1,
    userId: 1,
    username: 'BabyMom123',
    type: 'sell',
    items: [
      { 
        itemDescription: 'Chicco 嬰兒車，輕便可摺疊', 
        category: '嬰兒車', 
        brand: 'Chicco',
        condition: '8成新',
        pricePerUnit: 800
      }
    ],
    createdAt: new Date('2025-12-01'),
    status: 'available'
  }
];
```

### 📄 `src\index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 📄 `src\main.jsx`

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

### 📄 `src\supabaseClient.js`

```javascript
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

### 📄 `src\utils\imageCompression.js`

```javascript
/**
 * 壓縮圖片到指定大小
 * @param {File} file - 原始圖片 file
 * @param {number} maxSizeKB - 最大 KB（預設 1000KB = 1MB）
 * @returns {Promise<File>} 壓縮後嘅 file
 */
export async function compressImage(file, maxSizeKB = 1000) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = (e) => {
      const img = new Image();
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;
        
        // 計算壓縮比例
        const maxDimension = 1920; // 最大邊長
        if (width > height && width > maxDimension) {
          height = (height * maxDimension) / width;
          width = maxDimension;
        } else if (height > maxDimension) {
          width = (width * maxDimension) / height;
          height = maxDimension;
        }
        
        canvas.width = width;
        canvas.height = height;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        
        // 逐步降低質量直到符合大小
        let quality = 0.9;
        const tryCompress = () => {
          canvas.toBlob(
            (blob) => {
              if (blob.size <= maxSizeKB * 1024 || quality <= 0.1) {
                const compressedFile = new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now()
                });
                resolve(compressedFile);
              } else {
                quality -= 0.1;
                tryCompress();
              }
            },
            'image/jpeg',
            quality
          );
        };
        
        tryCompress();
      };
      
      img.onerror = reject;
      img.src = e.target.result;
    };
    
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Upload 圖片到 Supabase
 * @param {File} file - 要 upload 嘅 file
 * @param {string} folder - 資料夾名稱（預設 'post-images'）
 * @returns {Promise<string>} 返回圖片 URL
 */
export async function uploadToSupabase(file, folder = 'post-images') {
  // ⚠️ 記得改做你嘅 Supabase URL 同 Key
  const SUPABASE_URL = 'https://fifgdbgibdclpztlcxog.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZpZmdkYmdpYmRjbHB6dGxjeG9nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNzI4NzQsImV4cCI6MjA4MDk0ODg3NH0.fuaN7rts5nl6sAO8R92FZOk1MJBviN4mVZ7iZVsfxgU';
  
  const fileName = `${Date.now()}_${Math.random().toString(36).substring(7)}.jpg`;
  const filePath = `${folder}/${fileName}`;
  
  const response = await fetch(
    `${SUPABASE_URL}/storage/v1/object/${folder}/${fileName}`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': file.type
      },
      body: file
    }
  );
  
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Upload 失敗: ${error}`);
  }
  
  return `${SUPABASE_URL}/storage/v1/object/public/${filePath}`;
}
```

### 📄 `tailwind.config.js`

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 📄 `vite.config.js`

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

```

## ✅ 已實現功能

- [ ] 用戶登入/登出
- [ ] 出售/求購分類顯示
- [ ] 一個 Post 包含多個配件
- [ ] 搜尋功能（配件編號、顏色、用戶）
- [ ] 發佈交易（出售/求購）
- [ ] 響應式設計

## 🚀 待開發功能

- [ ] ...

## 🛠️ 技術棧

- **前端框架**: React + Vite
- **UI 組件**: 手寫 inline styles
- **圖標**: lucide-react
- **數據管理**: useState (本地狀態)

