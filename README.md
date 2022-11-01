# DooHor
*********** แก้ error บน nodmodule น้า **************
1. เปิดไฟล์ node_modules/react-native/index.js 
2. ไปที่บันทัด 436 แก้ตามนี้
```
  get ColorPropType(): $FlowFixMe {
    return require('deprecated-`react-native-prop-types').ColorPropType;
  },
  get EdgeInsetsPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').EdgeInsetsPropType;
  },
  get PointPropType(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').PointPropType;
  },
  get ViewPropTypes(): $FlowFixMe {
    return require('deprecated-react-native-prop-types').ViewPropTypes;
  },

```
เอกสารอ้างอิง 

https://gist.github.com/amjed-ali-k/759aadb265694e0da8590205ccb733c6#file-carousel-js

https://github.com/JungHsuan/react-native-collapsible-tabview
