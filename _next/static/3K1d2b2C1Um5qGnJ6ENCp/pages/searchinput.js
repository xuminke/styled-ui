(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"+wNj":function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},HVG5:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n("cxan"),r=n("HbGN"),c=n("ERkP"),l=n.n(c),i=n("ZVZ0"),b=(l.a.createElement,{}),o="wrapper";function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)(o,Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"SearchInput"),Object(i.b)("h2",null,"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import SearchInput from '@trendmicro/react-styled-ui/SearchInput';\n// or\nimport { SearchInput } from '@trendmicro/react-styled-ui';\n")),Object(i.b)("h2",null,"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x">\n  <SearchInput placeholder="Search" />\n  <SearchInput placeholder="Search" defaultValue="John Doe" />\n  <SearchInput\n    placeholder="Search"\n    defaultValue="John Doe"\n    readOnly\n    isLoading\n  />\n  <SearchInput\n    placeholder="Search"\n    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium ante erat, vitae sodales mi varius quis. Etiam vestibulum lorem vel urna tempor, eu fermentum odio aliquam. Aliquam consequat urna vitae ipsum pulvinar, in blandit purus eleifend."\n    textOverflow="ellipsis"\n  />\n</Stack>\n')),Object(i.b)("h3",null,"Keyword search"),Object(i.b)("p",null,"This example shows how to create a keyword search component with the following features:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Automatically adjust the width of an input element"),Object(i.b)("li",{parentName:"ul"},"Handle focus and blur events"),Object(i.b)("li",{parentName:"ul"},"Trigger search when pressed ",Object(i.b)("inlineCode",{parentName:"li"},"Enter")," key"),Object(i.b)("li",{parentName:"ul"},"Display a loading indicator that recognizes the loading state")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"function Example() {\n  const ref = React.useRef();\n  const [placeholder, setPlaceholder] = React.useState('Search');\n  const [inputWidth, setInputWidth] = React.useState(180);\n  const [keyword, setKeyword] = React.useState('');\n  const [isLoading, setIsLoading] = React.useState(false);\n  const searchKeyword = (keyword) => {\n    setIsLoading(true);\n    setTimeout(() => {\n      setIsLoading(false);\n    }, 1000);\n  };\n  const onChange = (e) => {\n    const keyword = e.target.value;\n    setKeyword(keyword);\n  };\n  const onClearInput = (e) => {\n    const keyword = '';\n    setKeyword(keyword);\n  };\n  const onKeyPress = (e) => {\n    if (e.key === 'Enter') {\n      const keyword = e.target.value;\n      if (!!keyword) {\n        searchKeyword(keyword);\n      }\n    }\n  };\n  const handleClickSearch = (e) => {\n    if (!!keyword) {\n      searchKeyword(keyword);\n    }\n  };\n\n  return (\n    <>\n      <SearchInput\n        ref={ref}\n        placeholder={placeholder}\n        value={keyword}\n        isLoading={isLoading}\n        readOnly={isLoading}\n        onChange={onChange}\n        onClearInput={onClearInput}\n        onFocus={() => {\n          setPlaceholder('Company name, endpoint name');\n          setInputWidth(360);\n          ref.current.select();\n        }}\n        onBlur={() => {\n          setPlaceholder('Search');\n\n          // Shrink width when the value is empty\n          setInputWidth(!!keyword ? 360 : 180);\n        }}\n        onKeyPress={onKeyPress}\n        width={inputWidth}\n        textOverflow=\"ellipsis\"\n      />\n      <Box mt=\"4x\">\n        <Button disabled={!keyword} onClick={handleClickSearch}>\n          Search\n        </Button>\n      </Box>\n    </>\n  );\n}\n")),Object(i.b)("h3",null,"Sizes"),Object(i.b)("p",null,"Use the ",Object(i.b)("inlineCode",{parentName:"p"},"size")," prop to change the size of the ",Object(i.b)("inlineCode",{parentName:"p"},"SearchInput"),". You can set the value to ",Object(i.b)("inlineCode",{parentName:"p"},"sm"),", ",Object(i.b)("inlineCode",{parentName:"p"},"md"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"lg"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x">\n  <SearchInput size="sm" placeholder="Small size (24px)" />\n  <SearchInput size="md" placeholder="Default size (32px)" />\n  <SearchInput size="lg" placeholder="Large size (40px)" />\n</Stack>\n')),Object(i.b)("h3",null,"Variants"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"SearchInput")," component comes in 3 variants: ",Object(i.b)("inlineCode",{parentName:"p"},"outline"),", ",Object(i.b)("inlineCode",{parentName:"p"},"filled"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"unstyled"),". Pass the ",Object(i.b)("inlineCode",{parentName:"p"},"variant")," prop and set it to either of these values."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="column" spacing="4x">\n  <SearchInput variant="outline" placeholder="Search" />\n  <SearchInput variant="filled" placeholder="Search" />\n  <SearchInput variant="unstyled" placeholder="Search" />\n</Stack>\n')),Object(i.b)("h3",null,"Attributes"),Object(i.b)("p",null,"Standard input attributes are supported, e.g., ",Object(i.b)("inlineCode",{parentName:"p"},"disabled"),", ",Object(i.b)("inlineCode",{parentName:"p"},"readOnly"),", ",Object(i.b)("inlineCode",{parentName:"p"},"required"),", etc."),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"disabled")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack directin="column" spacing="4x">\n  <SearchInput disabled placeholder="Placeholder text" />\n  <SearchInput disabled placeholder="Placeholder text" defaultValue="Disabled" />\n</Stack>\n')),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"readOnly")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack directin="column" spacing="4x">\n  <SearchInput readOnly placeholder="Placeholder text" />\n  <SearchInput readOnly placeholder="Placeholder text" defaultValue="Read-only" />\n</Stack>\n')),Object(i.b)("h4",null,Object(i.b)("inlineCode",{parentName:"h4"},"required")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),'<SearchInput required placeholder="Placeholder text" />\n')),Object(i.b)("h2",null,"Props"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"SearchInput")," composes the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"./input"}),Object(i.b)("inlineCode",{parentName:"a"},"Input"))," component."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isInvalid"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", the input will indicate an error. You can style this state by passing the ",Object(i.b)("inlineCode",{parentName:"td"},"_invalid")," prop.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"isLoading"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", then display the loading spinner.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"onChange"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A callback called when the value is changed.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"onClearInput"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"function"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A callback called when the clear button is clicked.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"size"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"'md'"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The visual size of the ",Object(i.b)("inlineCode",{parentName:"td"},"input")," element. One of: ",Object(i.b)("inlineCode",{parentName:"td"},"'sm'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'md'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'lg'"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"variant"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"string"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"'outline'"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The variant of the input style to use. One of: ",Object(i.b)("inlineCode",{parentName:"td"},"'outline'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'filled'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'unstyled'"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"disabled"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", the user cannot interact with the control. This sets ",Object(i.b)("inlineCode",{parentName:"td"},"aria-disabled=true")," and you can style this state by passing the ",Object(i.b)("inlineCode",{parentName:"td"},"_disabled")," prop.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"readOnly"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"boolean"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", prevents the value of the input from being edited.")))))}p.isMDXComponent=!0},HbGN:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("+wNj");function r(e,t){if(null==e)return{};var n,r,c=Object(a.a)(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}},Km8e:function(e,t,n){"use strict";var a=Object.assign.bind(Object);e.exports=a,e.exports.default=e.exports},ZVZ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n("ERkP"),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"===typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return(r.a.createElement(o.Provider,{value:t},e.children))},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return(r.a.createElement(r.a.Fragment,{},t))}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,O=d["".concat(l,".").concat(u)]||d[u]||s[u]||c;return n?r.a.createElement(O,i(i({ref:t},o),{},{components:n})):r.a.createElement(O,i({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"===typeof e||a){var c=n.length,l=new Array(c);l[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i[u]="string"===typeof e?e:a,l[1]=i;for(var o=2;o<c;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},cxan:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},"kH+f":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/searchinput",function(){return n("HVG5")}])}},[["kH+f",0,1]]]);