# DooHor

เพิ่มข้อมูลใน nodemudule => npm i --legacy-peer-deps เสร็จแล้วทำตามนี้
 1. ไปที่ไฟล์ โปรเจ็ค ไปที่ไฟล์ node_modules\react-native-datatable-component\src
 2. เอาไฟล์ใน โฟลเด้อ edit ก้อปวางลงไปทั้งหมด

------------------------------------------------------------
```
ใช้อันนี้ถ้า npm i ไม่ได้
npm i --legacy-peer-deps
```


*********** แก้ error บน nodmodule น้า **************
ViewPropTypes has been removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.
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
ถ้าไม่ได้ ทักมาน้ะ น่าจะติดตั้ง ไอพวกนี้ด้วยแต่กุติดตั้งไปแล้วไม่น่าต้องทำอีกรอบ ลองทำอันบนก่อนถ้าไม่ได้ค่อยทำอันนี้
1. ทำแต่แรก npm i patch-package
2. ต่อมา npm install deprecated-react-native-prop-types
3. แล้วไปทำข้างบน
4. ทำข้างบนเสร็จแล้ว ค่อยทำตามนี้ npx patch-package react-native 


เอกสารอ้างอิง 
1. https://gist.github.com/amjed-ali-k/759aadb265694e0da8590205ccb733c6#file-carousel-js
2. https://github.com/JungHsuan/react-native-collapsible-tabview
3. https://www.npmjs.com/package/react-native-table-component
4. https://www.npmjs.com/package/react-native-datatable-component
