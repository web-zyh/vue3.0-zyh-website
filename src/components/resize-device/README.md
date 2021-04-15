# HkResizeDevice 设备检测

窗口尺寸改变时，检测当前的设备类型。

```js
import HkResizeDevice from '@cmhk/components/resize-device';
```

## Attributes/参数

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| global | 是否检测整个应用的 resize（默认父元素设置为 relative 则检查父元素的 resize） | boolean | true/false | true |

## Events

方法名 | 说明 | 参数
--- | --- | ---
resize | 窗口尺寸改变 | Function(device)) , device 取值: `mobile`, `tablet`, `pc` 
