(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{"+r8+":function(e,t,a){"use strict";var n=a("HbGN"),l=a("ERkP"),r=a.n(l),c=a("4dwc"),b=a("UVB/"),i=a.n(b),o=a("vUXE"),d=r.a.createElement;t.a=function(e){var t=e.theme,a=e.mode,l=(Object(n.a)(e,["theme","mode"]),Object(c.useTheme)()),r=i()(a),b=!!a,u=l[t]||r[t];if(!u)return"Theme field not found";"space"!==t&&"sizes"!==t||(u=Object.keys(u).filter((function(e){return!e.toString().match(/[qh]$/)})).reduce((function(e,t){return e[t]=u[t],e}),{}));var m=function(e,t){return t?JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"  $1:").replace(/{/g," {").replace(/}/g,"  }"):JSON.stringify(e,null,2).replace(/\"/g,"'").replace(/\'(\d+|[a-z]+)\':/g,"$1:")}(u,b);return d(o.a,null,a?"export const ".concat(a," = {\n  ").concat(t,":").concat(m," \n}"):"export const ".concat(t," = ").concat(m))}},"UVB/":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=b(b(b({},{dark:d,light:o}[null!==e&&void 0!==e?e:"dark"]),m),u);return Object.defineProperty(t,"get",{value:function(e,a){return(0,n.default)(t,e,a)},writable:!1,enumerable:!1,configurable:!1}),t},t.gradientColor=t.blindnessColor=t.dark=t.light=void 0;var n=r(a("2uJw")),l=r(a("GS+q"));function r(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var o={text:{emphasis:l.default["black:emphasis"],primary:l.default["black:primary"],secondary:l.default["black:secondary"],tertiary:l.default["black:tertiary"],disabled:l.default["black:disabled"],link:l.default["blue:60"],error:l.default["red:60"],warning:l.default["orange:50"]},risk:{high:l.default["red:60"],medium:l.default["orange:50"],low:l.default["yellow:50"],safe:l.default["green:50"],information:l.default["blue:60"],unknown:l.default["gray:50"]},chart:{1:l.default["blue:60"],2:l.default["green:50"],3:l.default["orange:50"],4:l.default["cyan:40"],5:l.default["red:60"],6:l.default["purple:60"],7:l.default["teal:40"],8:l.default["magenta:50"],9:l.default["green:30"],10:l.default["yellow:50"],other:l.default["gray:50"]}};t.light=o;var d={text:{emphasis:l.default["white:emphasis"],primary:l.default["white:primary"],secondary:l.default["white:secondary"],tertiary:l.default["white:tertiary"],disabled:l.default["white:disabled"],link:l.default["blue:40"],error:l.default["red:50"],warning:l.default["orange:50"]},risk:{high:l.default["red:50"],medium:l.default["orange:50"],low:l.default["yellow:50"],safe:l.default["green:40"],information:l.default["blue:50"],unknown:l.default["gray:50"]},chart:{1:l.default["blue:50"],2:l.default["green:40"],3:l.default["orange:50"],4:l.default["cyan:40"],5:l.default["red:50"],6:l.default["purple:50"],7:l.default["teal:40"],8:l.default["magenta:40"],9:l.default["green:30"],10:l.default["yellow:50"],other:l.default["gray:50"]}};t.dark=d;var u={blindness:{risk:{high:l.default["magenta:60"],medium:l.default["orange:50"],low:l.default["yellow:50"],safe:l.default["green:30"],information:l.default["blue:30"],unknown:l.default["gray:50"]},chart:{1:l.default["blue:30"],2:l.default["green:30"],3:l.default["orange:50"],4:l.default["cyan:30"],5:l.default["magenta:60"],6:l.default["purple:50"],7:l.default["teal:40"],8:l.default["purple:30"],9:l.default["cyan:70"],10:l.default["yellow:50"],other:l.default["gray:50"]},gradient:{high:"linear-gradient(45deg, ".concat(l.default["purple:60"],", ").concat(l.default["magenta:60"],")"),medium:"linear-gradient(45deg, ".concat(l.default["magenta:60"],", ").concat(l.default["orange:50"],")"),low:"linear-gradient(45deg, ".concat(l.default["orange:50"],", ").concat(l.default["yellow:50"],")"),safe:"linear-gradient(45deg, ".concat(l.default["teal:50"],", ").concat(l.default["green:30"],")")}}};t.blindnessColor=u;var m={gradient:{high:"linear-gradient(45deg, ".concat(l.default["purple:60"],", ").concat(l.default["red:50"],")"),medium:"linear-gradient(45deg, ".concat(l.default["red:50"],", ").concat(l.default["orange:50"],")"),low:"linear-gradient(45deg, ".concat(l.default["orange:50"],", ").concat(l.default["yellow:50"],")"),safe:"linear-gradient(45deg, ".concat(l.default["teal:50"],", ").concat(l.default["green:40"],")"),1:"linear-gradient(45deg, ".concat(l.default["purple:50"],", ").concat(l.default["magenta:40"],")"),2:"linear-gradient(45deg, ".concat(l.default["purple:60"],", ").concat(l.default["blue:50"],")"),3:"linear-gradient(45deg, ".concat(l.default["blue:50"],", ").concat(l.default["teal:40"],")"),4:"linear-gradient(45deg, ".concat(l.default["cyan:40"],", ").concat(l.default["teal:30"],")"),5:"linear-gradient(45deg, ".concat(l.default["blue:60"],", ").concat(l.default["teal:40"],")"),6:"linear-gradient(45deg, ".concat(l.default["green:40"],", ").concat(l.default["cyan:30"],")"),7:"linear-gradient(45deg, ".concat(l.default["magenta:60"],", ").concat(l.default["red:40"],")"),8:"linear-gradient(45deg, ".concat(l.default["magenta:50"],", ").concat(l.default["blue:60"],")")}};t.gradientColor=m},sYh6:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return m}));var n=a("cxan"),l=a("HbGN"),r=a("ERkP"),c=a.n(r),b=a("ZVZ0"),i=a("4dwc"),o=a("+r8+"),d=(c.a.createElement,{}),u="wrapper";function m(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(b.b)(u,Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h1",null,"Typography"),Object(b.b)("p",null,"To manage Typography options, the theme object supports the following keys:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"fonts")," (font family)"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"fontSizes")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"fontWeights")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"lineHeights"))),Object(b.b)("h2",null,"Font Family"),Object(b.b)(o.a,{theme:"fonts",mdxType:"ThemeParser"}),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing=".5rem" alignItems="center">\n  <Box fontFamily="heading" fontWeight="medium">Segoe UI Sans-Serif</Box>\n  <Box fontFamily="base">Segoe UI Sans-Serif</Box>\n  <Box fontFamily="mono">Segoe UI Mono</Box>\n</Stack>\n')),Object(b.b)("h2",null,"Font Size"),Object(b.b)(o.a,{theme:"fontSizes",mdxType:"ThemeParser"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Size"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Pixels"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"xs"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),".75rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"12px"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)(i.Box,{fontSize:"xs",mdxType:"Box"},"Font Size 12px"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),".875rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"14px"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)(i.Box,{fontSize:"sm",mdxType:"Box"},"Font Size 14px"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"md"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"16px"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)(i.Box,{fontSize:"md",mdxType:"Box"},"Font Size 16px"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lg"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.125rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"18px"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)(i.Box,{fontSize:"lg",mdxType:"Box"},"Font Size 18px"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"xl"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.25rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20px"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)(i.Box,{fontSize:"xl",mdxType:"Box"},"Font Size 20px"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2xl"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.5rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"24px"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)(i.Box,{fontSize:"2xl",mdxType:"Box"},"Font Size 24px"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3xl"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.75rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"28px"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)(i.Box,{fontSize:"3xl",mdxType:"Box"},"Font Size 28px"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4xl"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.2rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"32px"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)(i.Box,{fontSize:"4xl",mdxType:"Box"},"Font Size 32px"))))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing=".5rem" alignItems="center">\n  <Box fontSize="sm">Font Size 14px</Box>\n  <Box fontSize="md">Font Size 16px</Box>\n  <Box fontSize="lg">Font Size 18px</Box>\n</Stack>\n')),Object(b.b)("h2",null,"Font Weight"),Object(b.b)(o.a,{theme:"fontWeights",mdxType:"ThemeParser"}),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing=".5rem" alignItems="center">\n  <Box fontWeight="normal">Regular (400)</Box>\n  <Box fontWeight="medium">Semibold (600)</Box>\n  <Box fontWeight="semibold">Bold (600)</Box>\n</Stack>\n')),Object(b.b)("h2",null,"Line Height"),Object(b.b)(o.a,{theme:"lineHeights",mdxType:"ThemeParser"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Line height"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Pixels"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"xs"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.125rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"18px")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"sm"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.25rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"20px")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"md"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.375rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"22px")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"lg"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.5rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"24px")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"xl"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1.75rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"28px")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2xl"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"32px")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3xl"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.25rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"36px")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"4xl"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2.5rem"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"40px")))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="row" spacing="12x" justifyContent="center">\n  <Box width="324px" lineHeight="sm">\n    <Box>Line height 1.25rem</Box>\n    <Box>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</Box>\n  </Box>\n  <Box width="324px" lineHeight="lg">\n    <Box>Line height 1.5rem</Box>\n    <Box>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</Box>\n  </Box>\n  <Box width="324px" lineHeight="2xl">\n    <Box>Line height 2rem</Box>\n    <Box>Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus.</Box>\n  </Box>\n</Stack>\n')),Object(b.b)("h2",null,"Configuration Reference"),Object(b.b)("p",null,"Except for breakpoints, colors, and spacing, all keys in the theme object map to one of the core themes. All keys can be replaced or extended."),Object(b.b)("p",null,"For more information, see the complete properties ",Object(b.b)("a",{href:"https://styled-system.com/table",target:"_blank"},"reference table"),"."))}m.isMDXComponent=!0},tPH4:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/typography",function(){return a("sYh6")}])}},[["tPH4",0,1,6,3,4,5,2,7]]]);