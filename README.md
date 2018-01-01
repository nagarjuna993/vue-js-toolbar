### Vue.js 2 toolbar / toggle bar.

![Imgur](https://i.imgur.com/TDLOOMh.png)

Install:
```bash
npm install vue-js-toolbar --save
```
Import:
```javascript
import Toolbar from 'vue-js-toolbar'
Vue.use(Toolbar)
```
Use:
```xml
<toolbar :value="true"
         :position="top" />

<toolbar :value="true"
         :position="left"
         :height="64"
         :width="64"
         :color="#4285F4" />
```

### Properties

| Name      | Type              | Default    | Description                        |
| ---       | ---               | ---        | ---                                |
| value     | Boolean           | false      | Initial state of the toolbar |
| position  | String            | `top`      | Position of the toolbar, accepts `top`, `left`, `right`, `bottom` |
| height    | Number            | 64         | Height of the toolbar only applicable if the position is `top` or `bottom`. For `left` and `right` position the default height is `100%` |
| width     | Number            | 64         | Width of the toolbar only applicable if the position is `left` or `right` |
| color     | String            | `#4285F4`  | Background color of the toolbar only accepts Hex value with `#` |

### Extra customization
To further customize, simply add style with required css changes:

```vue
<toolbar style="box-shadow: none;" />
```

### License

[MIT](https://github.com/nagarjuna993/vue-js-toolbar/blob/master/LICENSE)
