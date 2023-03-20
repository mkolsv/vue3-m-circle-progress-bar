# Welcome to MCircleProgressBar! 

![Circle Progress Bar](https://lh6.googleusercontent.com/fLQLNNyHZoBeyAkqRDEBqZwm5GN_ROBnm0OVIiZ4gw4DJa6i2KbGwiOisZl6UdyA9c4=w2400)

Hi! 
Highly customizable & lightweight & responsive circular progressbar component for Vue 3, built with SVG and extensively customizable.

***Only 12 Kb!!***

## Installation

```
npm install --save vue3-m-circle-progress-bar
```
## Adding into app

```
import  Vue  from  'vue'

import  CircleProgressBar  from  'vue3-m-circle-progress-bar'

Vue.use(CircleProgressBar)
```

## Props

Please write me, if you need more props :)
You can customize your progress bars as you want. For example:

| Props          | Type                | HTML                             |
|----------------|---------------------|----------------------------------|
|max*            | `Number           ` | Max value                        |
|value*          | `Number`            | Current value.                   |
|colorFilled     | `String`            | Circle color if limit exceed     |
|colorUnfilled   | `String`            | Circle color if limit not exceed |
|percentage      | `BooleaN`           | Show percentage                  |
|rounded         | `BooleaN`           | Rounding the circle line         |
|animationDuration   | `String`            | Animation Duration               |


## Other

Also you can use slots to throw your custom content. For example:

```
<CircleProgressBar  
  :value="value"  
  :max="max"  
  percentage  
 rounded>
{{ value }} / {{ max }}
</CircleProgressBar>
```