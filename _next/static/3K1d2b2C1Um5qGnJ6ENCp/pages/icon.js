(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"+wNj":function(e,n,t){"use strict";function o(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}t.d(n,"a",(function(){return o}))},HbGN:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var o=t("+wNj");function r(e,n){if(null==e)return{};var t,r,c=Object(o.a)(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}},Km8e:function(e,n,t){"use strict";var o=Object.assign.bind(Object);e.exports=o,e.exports.default=e.exports},ZVZ0:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var o=t("ERkP"),r=t.n(o);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),s=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"===typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=s(e.components);return(r.a.createElement(p.Provider,{value:n},e.children))},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return(r.a.createElement(r.a.Fragment,{},n))}},d=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(t),u=o,d=b["".concat(a,".").concat(u)]||b[u]||m[u]||c;return t?r.a.createElement(d,i(i({ref:n},p),{},{components:t})):r.a.createElement(d,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"===typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"===typeof e?e:o,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},cxan:function(e,n,t){"use strict";function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t.d(n,"a",(function(){return o}))},mNcY:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return s}));var o=t("cxan"),r=t("HbGN"),c=t("ERkP"),a=t.n(c),i=t("ZVZ0"),l=(a.a.createElement,{}),p="wrapper";function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(p,Object(o.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Icon"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Icon")," is used to render SVG icons in a more convenient way. You can extend icons by defining icon keys in ",Object(i.b)("inlineCode",{parentName:"p"},"theme.icons"),"."),Object(i.b)("h2",null,"Import"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import Icon from '@trendmicro/react-styled-ui/Icon';\n// or\nimport { Icon } from '@trendmicro/react-styled-ui';\n")),Object(i.b)("h2",null,"Usage"),Object(i.b)("p",null,"Use an icon by passing the ",Object(i.b)("inlineCode",{parentName:"p"},"icon")," prop. This ",Object(i.b)("inlineCode",{parentName:"p"},"icon")," property value must match an icon key defined in ",Object(i.b)("inlineCode",{parentName:"p"},"theme.icons"),". By default, the icon inherits the font size and color of its parent."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'<Stack direction="row" spacing="1rem">\n  <Icon icon="face-smile-o"/>\n  <Icon icon="face-smile-o" size="6x" color="red:50"/>\n  <Icon icon="face-smile-o" size="8x" color="yellow:50"/>\n  <Icon icon="face-smile-o" size="12x" color="teal:40"/>\n</Stack>\n')),Object(i.b)("h2",null,"Adding custom icons"),Object(i.b)("p",null,"First, you have to add custom icons to the theme. Each icon must be an object containing ",Object(i.b)("inlineCode",{parentName:"p"},"path")," and optional style props passed to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"./svgicon"}),"SVGIcon"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"disabled noInline",disabled:!0,noInline:!0}),'const customIcons = {\n  icon1: {\n    path: (\n      <path fill="currentColor" d="..." />\n    ),\n  },\n  icon2: {\n    path: (\n      <g fill="currentColor">\n        <path d="..." />\n      </g>\n    ),\n\n    // optional style props\n    viewBox: \'0 0 48 48\',\n  },\n};\n\nconst customTheme = {\n  ...theme,\n  icons: {\n    ...theme.icons,\n    ...customIcons,\n  },\n};\n')),Object(i.b)("p",null,"After that simply wrap your app into ",Object(i.b)("inlineCode",{parentName:"p"},"ThemeProvider")," component and pass your theme as a ",Object(i.b)("inlineCode",{parentName:"p"},"theme")," prop. Just like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"disabled noInline",disabled:!0,noInline:!0}),"<ThemeProvider theme={customTheme}>\n  <App />\n</ThemeProvider>\n")),Object(i.b)("p",null,"Pass the icon name as a prop to the ",Object(i.b)("inlineCode",{parentName:"p"},"<Icon>")," component to render the SVG icon:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"disabled noInline",disabled:!0,noInline:!0}),'<Icon icon="icon1" color="blue:50" />\n')),Object(i.b)("h3",null,"Search icons"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:"noInline",noInline:!0}),'const getIcons = (keyword) => tmIconList.map(({ group, icons }) => {\n    const filteredIcons = icons.filter(({ iconset, name }) => (!keyword || name.indexOf(keyword) >= 0));\n    if (filteredIcons.length === 0) {\n      return null\n    }\n    return { group, icons: filteredIcons }\n  }\n);\n\nconst FlexItem = (props) => (\n  <Box {...props} />\n);\n\nconst renderIconGroup = (iconSet, keyword, showCharCode, color) => {\n  if(!iconSet) {\n    return null;\n  }\n  return (<Box key={iconSet.group.name}>\n    <FlexItem pt={iconSet.group.id !== 0 && \'2x\'}>\n      <Text fontSize={"2xl"}>{iconSet.group.name}</Text>    \n    </FlexItem>\n    {<Grid\n      gap={10}\n      templateColumns="repeat(auto-fill, minmax(300px, 1fr));"\n      gap=".5rem"\n      p="4x"\n      pl="6x"\n      pr="4x"\n    >\n      {iconSet.icons.map(icon => (\n        <Flex direction="row" align="center" pb={0} pr={0} overflow="hidden" key={icon.code}>\n          <FlexItem flex="initial" pr="2x">\n            <Icon icon={icon.name}/>\n          </FlexItem>\n          <FlexItem flex="none" pr="2x">\n            <Text display={"inline-block"} fontSize={"md"} color={color}>\n              {icon.name}\n            </Text>\n          </FlexItem>\n          {showCharCode && <FlexItem flex="none" pr="1x" color={color}>\n            <Text fontSize={"md"}>\n              {`(&#x${icon.code})`}\n            </Text>\n          </FlexItem>\n          }\n          <FlexItem flex="none" pb=".2rem">\n            {icon.new && <Badge variantColor="green" badgeContent={"new"} />}\n          </FlexItem>\n        </Flex>\n      ))}\n    </Grid>}\n  </Box>)\n}\n\nfunction Example() {\n  const [keyword, setKeyword] = React.useState(\'\');\n  const [showCharCode, setShowCharCode] = React.useState(false);\n  const { colorMode } = useColorMode();\n  const color = {\n    light: \'black:secondary\',\n    dark: \'white:secondary\',\n  }[colorMode];\n\n  const onChange = (e) => {\n    const keyword = e.target.value;\n    setKeyword(keyword);\n  };\n\n  const onClearInput = (e) => {\n    const keyword = \'\';\n    setKeyword(keyword);\n  };\n\n  const onChecked = () => {\n    setShowCharCode(!showCharCode);\n  }\n\n  return (\n    <>\n      <Flex direction="row" align="center" position="relative">\n        <Box pl="4x">\n          <SearchInput\n            fontSize="md"\n            placeholder="Search"\n            onChange={onChange}\n            onClearInput={onClearInput}\n            width={430}\n          />\n        </Box>\n        <Box position="absolute" right="5px">\n          <Checkbox\n            size="md"\n            onChange={() => onChecked()}>\n            Display character codes\n          </Checkbox>\n        </Box>\n      </Flex>\n      <Grid\n        gap={0}\n        templateRows="1fr"\n        p="4x"\n        transition="all .3s ease-in"\n      >\n        {getIcons(keyword).map((iconSet) => renderIconGroup(iconSet, keyword, showCharCode, color))}\n      </Grid>\n    </>\n  );\n}\n\nrender(<Example />);\n')),Object(i.b)("h2",null,"Props"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Icon")," composes the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"./svgicon"}),Object(i.b)("inlineCode",{parentName:"a"},"SVGIcon"))," component. You can override the default styles with style props."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Name"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Type"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Default"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"icon"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"string"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:"left"})),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:"left"}),"The name of the icon.")))))}s.isMDXComponent=!0},rBOv:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/icon",function(){return t("mNcY")}])}},[["rBOv",0,1]]]);