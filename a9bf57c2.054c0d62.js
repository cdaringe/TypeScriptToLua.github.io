(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{146:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return m}));var a=t(2),r=t(0),c=t.n(r),l=t(173),s=t(259);function o({children:e,severity:n}){return c.a.createElement("span",{style:{backgroundColor:`var(--ifm-color-${n})`,borderRadius:"2px",color:"var(--ifm-alert-color)",padding:"0.3rem",marginRight:"0.2rem"}},e)}function i({deprecated:e,removed:n}){return c.a.createElement("p",{style:{fontWeight:"bold"}},c.a.createElement(o,{severity:"warning"},"Deprecated:"),c.a.createElement("a",{href:"https://github.com/TypeScriptToLua/TypeScriptToLua/blob/master/CHANGELOG.md#"+e},e)," ",c.a.createElement(o,{severity:"danger"},"Removed:"),c.a.createElement("a",{href:"https://github.com/TypeScriptToLua/TypeScriptToLua/blob/master/CHANGELOG.md#"+n},n))}const b={title:"Compiler Annotations"},p={unversionedId:"advanced/compiler-annotations",id:"advanced/compiler-annotations",isDocsHomePage:!1,title:"Compiler Annotations",description:"To improve translation and compatibility to different Lua interfaces, the TypeScriptToLua transpiler supports several custom annotations that slightly change translation results. This page documents the supported annotations. The syntax of the compiler annotations use the JSDoc syntax.",source:"@site/docs/advanced/compiler-annotations.md",slug:"/advanced/compiler-annotations",permalink:"/docs/advanced/compiler-annotations",editUrl:"https://github.com/TypeScriptToLua/TypeScriptToLua.github.io/edit/source/docs/advanced/compiler-annotations.md",version:"current",sidebar:"docs",previous:{title:"Writing Declarations",permalink:"/docs/advanced/writing-declarations"},next:{title:"Language extensions",permalink:"/docs/advanced/language-extensions"}},u=[{value:"@compileMembersOnly",id:"compilemembersonly",children:[]},{value:"@customConstructor",id:"customconstructor",children:[]},{value:"@forRange",id:"forrange",children:[]},{value:"@luaIterator",id:"luaiterator",children:[]},{value:"@luaTable",id:"luatable",children:[]},{value:"@noResolution",id:"noresolution",children:[]},{value:"@noSelf",id:"noself",children:[]},{value:"@noSelfInFile",id:"noselfinfile",children:[]},{value:"@tupleReturn",id:"tuplereturn",children:[]},{value:"@vararg",id:"vararg",children:[]},{value:"Deprecated",id:"deprecated",children:[{value:"@extension",id:"extension",children:[]},{value:"@metaExtension",id:"metaextension",children:[]},{value:"@phantom",id:"phantom",children:[]},{value:"@pureAbstract",id:"pureabstract",children:[]}]}],d={rightToc:u};function m({components:e,...n}){return Object(l.b)("wrapper",Object(a.a)({},d,n,{components:e,mdxType:"MDXLayout"}),Object(l.b)("p",null,"To improve translation and compatibility to different Lua interfaces, the TypeScriptToLua transpiler supports several custom annotations that slightly change translation results. This page documents the supported annotations. The syntax of the compiler annotations use the JSDoc syntax."),Object(l.b)("h2",{id:"compilemembersonly"},"@compileMembersOnly"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Target elements:")," ",Object(l.b)("inlineCode",{parentName:"p"},"(declare) enum")),Object(l.b)("p",null,"This decorator removes an enumeration's name after compilation and only leaves its members. Primarily used for APIs with implicit enumerations."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"declare enum MyEnum {\n  MY_ENUM_MEMBER_A,\n  MY_ENUM_MEMBER_B,\n}\n\nprint(MyEnum.MY_ENUM_MEMBER_A);\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"print(MyEnum.MY_ENUM_MEMBER_A)\n"))),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/** @compileMembersOnly */\ndeclare enum MyEnum {\n  MY_ENUM_MEMBER_A,\n  MY_ENUM_MEMBER_B,\n}\n\nprint(MyEnum.MY_ENUM_MEMBER_A);\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"print(MY_ENUM_MEMBER_A)\n"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example 2")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'enum MyEnum {\n  MY_ENUM_MEMBER_A,\n  MY_ENUM_MEMBER_B,\n  MY_ENUM_MEMBER_C = "c",\n}\n\nprint(MyEnum.MY_ENUM_MEMBER_A);\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'MyEnum = {}\nMyEnum.MY_ENUM_MEMBER_A = 0\nMyEnum.MY_ENUM_MEMBER_B = 1\nMyEnum.MY_ENUM_MEMBER_C = "c"\n\nprint(MyEnum.MY_ENUM_MEMBER_A)\n'))),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'/** @compileMembersOnly */\nenum MyEnum {\n  MY_ENUM_MEMBER_A,\n  MY_ENUM_MEMBER_B,\n  MY_ENUM_MEMBER_C = "c",\n}\n\nprint(MyEnum.MY_ENUM_MEMBER_A);\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'MY_ENUM_MEMBER_A = 0\nMY_ENUM_MEMBER_B = 1\nMY_ENUM_MEMBER_C = "c"\n\nprint(MY_ENUM_MEMBER_A)\n'))),Object(l.b)("h2",{id:"customconstructor"},"@customConstructor"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Target elements:")," ",Object(l.b)("inlineCode",{parentName:"p"},"declare class")),Object(l.b)("p",null,"Changes the way new instances of this class are made. Takes exactly one argument that is the name of the alternative constructor function."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"declare class MyClass {\n  constructor(x: number);\n}\nconst inst = new MyClass(3);\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"local inst = __TS__New(MyClass, 3)\n"))),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/** @customConstructor MyConstructor */\ndeclare class MyClass {\n  constructor(x: number);\n}\nconst inst = new MyClass(3);\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"local inst = MyConstructor(3)\n"))),Object(l.b)("h2",{id:"forrange"},"@forRange"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Target elements:")," ",Object(l.b)("inlineCode",{parentName:"p"},"declare function")),Object(l.b)("p",null,"Denotes a function declaration is a Lua numerical iterator. When used in a TypeScript ",Object(l.b)("inlineCode",{parentName:"p"},"for...of")," loop, the resulting Lua will use a numerical for loop."),Object(l.b)("p",null,"The function should not be a real function and an error will be thrown if it is used in any other way."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/** @forRange */\ndeclare function forRange(start: number, limit: number, step?: number): number[];\n\nfor (const i of forRange(1, 10)) {}\nfor (const i of forRange(10, 1, -1)) {}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"for i = 1, 10 do end\nfor i = 10, 1, -1 do end\n"))),Object(l.b)("h2",{id:"luaiterator"},"@luaIterator"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Target elements:")," ",Object(l.b)("inlineCode",{parentName:"p"},"(declare) interface")),Object(l.b)("p",null,"Denotes a type is a Lua iterator. When an object of a type with this annotation is used in a for...of statement, it will transpile directly as a lua iterator in a for...in statement, instead of being treated as a TypeScript iterable. Typically, this is used on an interface that extends ",Object(l.b)("inlineCode",{parentName:"p"},"Iterable")," or ",Object(l.b)("inlineCode",{parentName:"p"},"Array")," so that TypeScript will allow it to be used in a for...of statement."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/** @luaIterator */\ntype LuaIterable<T> = Iterable<T>;\n\ndeclare function myIterator(): LuaIterable<string>;\nfor (const s of myIterator()) {}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"for s in myIterator() do end\n"))),Object(l.b)("p",null,"This can also be combined with ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#tuplereturn"}),"@tupleReturn"),", if the iterator returns multiple values."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'/** @luaIterator @tupleReturn */\ntype LuaTupleIterable<T extends any[]> = Iterable<T>;\n\ndeclare namespace string {\n  function gmatch(s: string, pattern: string): LuaTupleIterable<string[]>;\n}\n\nfor (const [a, b] of string.gmatch("foo", "(.)(.)")) {}\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'for a, b in string.gmatch("foo", "(.)(.)") do end\n'))),Object(l.b)("h2",{id:"luatable"},"@luaTable"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Target elements:")," ",Object(l.b)("inlineCode",{parentName:"p"},"type")),Object(l.b)("p",null,"This annotation signals the transpiler to translate a class as a simple lua table for optimization purposes."),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),'/** @luaTable */\ndeclare class Table<K extends {} = {}, V = any> {\n  readonly length: number;\n  set(key: K, value: V | undefined): void;\n  get(key: K): V | undefined;\n}\n\nconst tbl = new Table(); // local tbl = {}\n\nconst foo = {};\ntbl.set(foo, "bar"); // tbl[foo] = "bar"\nprint(tbl.get(foo)); // print(tbl[foo])\n\ntbl.set(1, "baz"); // tbl[1] = "baz"\nprint(tbl.length); // print(#tbl)\n')),Object(l.b)("h2",{id:"noresolution"},"@noResolution"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Target elements:")," ",Object(l.b)("inlineCode",{parentName:"p"},"module")),Object(l.b)("p",null,"Prevents tstl from trying to resolve the module path. When importing this module the path will be exactly the path in the import statement."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'declare module "mymodule" {}\nimport module from "mymodule";\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'...\nlocal module = require("src.mymodule");\n'))),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'/** @noResolution */\ndeclare module "mymodule" {}\nimport module from "mymodule";\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'...\nlocal module = require("mymodule");\n'))),Object(l.b)("h2",{id:"noself"},"@noSelf"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Target elements:")," ",Object(l.b)("inlineCode",{parentName:"p"},"declare class"),", ",Object(l.b)("inlineCode",{parentName:"p"},"(declare) interface")," or ",Object(l.b)("inlineCode",{parentName:"p"},"declare namespace")),Object(l.b)("p",null,"Indicates that functions inside a scope do not take in initial ",Object(l.b)("inlineCode",{parentName:"p"},"self")," argument when called, and thus will be called with a dot ",Object(l.b)("inlineCode",{parentName:"p"},".")," instead of a colon ",Object(l.b)("inlineCode",{parentName:"p"},":"),". It is the same as if each function was declared with an explicit ",Object(l.b)("inlineCode",{parentName:"p"},"this: void")," parameter. Functions that already have an explicit ",Object(l.b)("inlineCode",{parentName:"p"},"this")," parameter will not be affected."),Object(l.b)("p",null,"When applied to a class or interface, this only affects the type's declared methods (including static methods and fields with a function type). It will not affect other function declarations, such as nested functions inside a class' methods."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'declare interface NormalInterface {\n  normalMethod(s: string): void;\n}\ndeclare const x: NormalInterface;\n\n/** @noSelf **/\ndeclare interface NoSelfInterface {\n  noSelfMethod(s: string): void;\n}\ndeclare const y: NoSelfInterface;\n\nx.normalMethod("foo");\ny.noSelfMethod("bar");\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'x:normalMethod("foo")\ny.noSelfMethod("bar")\n'))),Object(l.b)("p",null,"When applied to a namespace, all functions declared within the namespace will treated as if they do not have a ",Object(l.b)("inlineCode",{parentName:"p"},"self")," parameter. In this case, the effect is recursive, so functions in nested namespaces and types declared as parameters will also be affected."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'declare namespace NormalNS {\n  function normalFunc(s: string): string;\n}\n\n/** @noSelf **/\ndeclare namespace NoSelfNS {\n  function noSelfFunc(s: string): string;\n}\n\nNormalNS.normalFunc("foo");\nNoSelfNS.noSelfFunc("bar");\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'NormalNS:normalFunc("foo")\nNoSelfNS.noSelfFunc("bar")\n'))),Object(l.b)("p",null,"For more information about how the ",Object(l.b)("inlineCode",{parentName:"p"},"self")," parameter is handled, see ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/the-self-parameter"}),"Functions and the ",Object(l.b)("inlineCode",{parentName:"a"},"self")," Parameter")),Object(l.b)("h2",{id:"noselfinfile"},"@noSelfInFile"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Target elements:")," ",Object(l.b)("inlineCode",{parentName:"p"},"(declare) file")),Object(l.b)("p",null,"Indicates that functions in a file do not take in initial ",Object(l.b)("inlineCode",{parentName:"p"},"self")," argument when called."),Object(l.b)("p",null,"This is annotation works the same as ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#noself"}),"@noSelf")," being applied to a namespace, but affects the entire file."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"@noSelfInFile")," must be placed at the top of the file, before the first statement."),Object(l.b)("h2",{id:"tuplereturn"},"@tupleReturn"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Target elements:")," ",Object(l.b)("inlineCode",{parentName:"p"},"(declare) function")),Object(l.b)("p",null,"This decorator indicates a function returns a lua tuple instead of a table. It influences both destructing assignments of calls of that function, as well as changing the format of returns inside the function body."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'function myFunction(): [number, string] {\n  return [3, "4"];\n}\nconst [a, b] = myFunction();\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'function myFunction()\n    return {3, "4"}\nend\nlocal a,b = unpack(myFunction())\n'))),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'/** @tupleReturn */\nfunction myFunction(): [number, string] {\n  return [3, "4"];\n}\nconst [a, b] = myFunction();\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),'function myFunction()\n    return 3, "4"\nend\nlocal a, b = myFunction()\n'))),Object(l.b)("p",null,"If you wish to use this annotation on function with overloads, it must be applied to each signature that requires it."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/** @tupleReturn */\ndeclare function myFunction(s: string): [string, string];\n/** @tupleReturn */\ndeclare function myFunction(n: number): [number, number];\n")),Object(l.b)("p",null,"Note that if any overloaded signature of a function implementation has the annotation, all array/tuple return values will unpacked in the transpiled output."),Object(l.b)("h2",{id:"vararg"},"@vararg"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Target elements:")," ",Object(l.b)("inlineCode",{parentName:"p"},"(declare) interface or type")),Object(l.b)("p",null,"Indicates that an array-like type represents a Lua vararg expression (",Object(l.b)("inlineCode",{parentName:"p"},"..."),") and should be transpiled to that when used in a spread expression. This is useful for forwarding varargs instead of wrapping them in a table and unpacking them."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"function varargWrapUnpack(...args: string[]) {\n  console.log(...args);\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function varargWrapUnpack(self, ...)\n    local args = ({...})\n    print(unpack(args))\nend\n"))),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/** @vararg */\ninterface Vararg<T> extends Array<T> {}\n\nfunction varargForward(...args: Vararg<string>) {\n  console.log(...args);\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function varargForward(self, ...)\n    print(...))\nend\n"))),Object(l.b)("p",null,"This can be used to access the file-scope varargs as well."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"declare const arg: Vararg<string>;\nconsole.log(...arg);\nconst [x, y] = [...arg];\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"print(...)\nlocal x, y = ...\n"))),Object(l.b)("p",null,"To also support tuple-typed rest parameters, you can define the type like this:"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/** @vararg */\ntype Vararg<T extends unknown[]> = T & { __luaVararg?: never };\n\nfunction varargForward(...args: Vararg<[string, number]>) {}\n")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"Warning"))),Object(l.b)("p",null,"TypeScriptToLua does not check that the vararg expression is valid in the context it is used. If the array is used in a spread operation in an invalid context (such as a nested function), a deoptimization will occur."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"function outerFunction(...args: Vararg<string>) {\n  function innerFunction() {\n    console.log(...args);\n  }\n  innerFunction();\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function outerFunction(self, ...)\n    local args = {...}\n    local function innerFunction(self)\n        print(unpack(args))\n    end\n    innerFunction(_G)\nend\n"))),Object(l.b)("h2",{id:"deprecated"},"Deprecated"),Object(l.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"warning")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Some annotations are deprecated and will be/have been removed.\nBelow are the deprecated annotations and instructions to recreate their behavior with vanilla TypeScript."))),Object(l.b)("h3",{id:"extension"},"@extension"),Object(l.b)(i,{deprecated:"0.37.0",removed:"TBD",mdxType:"DeprecatedInVersion"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Target elements:")," ",Object(l.b)("inlineCode",{parentName:"p"},"class")),Object(l.b)("p",null,"The Extension decorator marks a class as an extension of an already existing class.\nThis causes the class header to not be translated, preventing instantiation and the override of the existing class."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Default Behavior")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"class MyClass {\n  myFunction(): void {}\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"MyClass = __TS__Class()\n...\nfunction MyClass.prototype.myFunction(self) end\n"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example 1")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/** @extension */\nclass MyClass {\n  myFunction(): void {}\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function MyClass.myFunction(self) end\n"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example 2")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/** @extension ExistingClassTable */\nclass MyClass extends ExistingClass {\n  myFunction(): void {}\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function ExistingClassTable.myFunction(self) end\n"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Upgrade Instructions")),Object(l.b)("p",null,"Use an interface to extend your existing class and declare the table of the existing class as variable."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface ExistingClass {\n  myFunction(): void;\n}\n\ndeclare const ExistingClassTable: ExistingClass;\n\nExistingClassTable.myFunction = function () {};\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function ExistingClassTable.myFunction(self) end\n"))),Object(l.b)("h3",{id:"metaextension"},"@metaExtension"),Object(l.b)(i,{deprecated:"0.37.0",removed:"TBD",mdxType:"DeprecatedInVersion"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Target elements:")," ",Object(l.b)("inlineCode",{parentName:"p"},"class")),Object(l.b)("p",null,"The Extension decorator marks a class as an extension of an already existing meta class/table.\nThis causes the class header to not be translated, preventing instantiation and the override of the existing class."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"class MyBaseClass {\n  myFunction(): void {}\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"MyBaseClass = __TS__Class()\n...\nfunction MyBaseClass.prototype.myFunction(self) end\n"))),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/** @metaExtension */\nclass MyMetaExtension extends MyMetaClass {\n  myFunction(): void {}\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"local __meta__MyMetaClass = debug.getregistry().MyMetaClass\n__meta__MyMetaClass.myFunction = function(self)\nend;\n"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Upgrade Instructions")),Object(l.b)("p",null,"Use an interface to extend your existing class and assign the functions to the meta table of the existing class."),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface MyMetaClass {\n  myFunction(): void;\n}\n\nconst MyMetaClassTable: MyMetaClass = debug.getregistry().MyMetaClass as MyMetaExtension;\n\nMyMetaClassTable.myFunction = function () {};\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"MyMetaClassTable = debug.getregistry().MyMetaClass\nMyMetaClassTable.myFunction = function(self)\nend\n"))),Object(l.b)("h3",{id:"phantom"},"@phantom"),Object(l.b)(i,{deprecated:"0.37.0",removed:"TBD",mdxType:"DeprecatedInVersion"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Target elements:")," ",Object(l.b)("inlineCode",{parentName:"p"},"namespace")),Object(l.b)("p",null,"This decorator marks a namespace as a phantom namespace.\nThis means all members of the namespace will be translated as if they were not in that namespace. Primarily used to prevent scoping issues."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"namespace myNameSpace {\n  function myFunction(): void {}\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"myNameSpace = {}\nfunction myNameSpace.myFunction() end\n"))),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/** @phantom */\nnamespace myNameSpace {\n  function myFunction(): void {}\n}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"function myFunction() end\n"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Upgrade instructions")),Object(l.b)("p",null,"Use ECMAScript modules and import/export. Alternatively, use a real (non-phantom) namespace."),Object(l.b)("h3",{id:"pureabstract"},"@pureAbstract"),Object(l.b)(i,{deprecated:"0.37.0",removed:"TBD",mdxType:"DeprecatedInVersion"}),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Target elements:")," ",Object(l.b)("inlineCode",{parentName:"p"},"declare class")),Object(l.b)("p",null,"This decorator marks a class declaration as purely abstract.\nThe result is that any class extending the purely abstract class will not extend this class in the resulting Lua."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Example")),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"declare class MyAbstractClass {}\nclass MyClass extends MyAbstractClass {}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"MyClass = __TS__Class()\nMyClass.__base = MyAbstractClass\nMyClass.____super = MyAbstractClass\nsetmetatable(MyClass, MyClass.____super)\nsetmetatable(MyClass.prototype, MyClass.____super.prototype)\n"))),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/** @pureAbstract */\ndeclare class MyAbstractClass {}\nclass MyClass extends MyAbstractClass {}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"MyClass = __TS__Class()\n"))),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Upgrade Instructions")),Object(l.b)("p",null,'Try declaring the "classes" of your lua enviroment as interface.\nIf that is not possible use interface merging as suggested below.'),Object(l.b)(s.a,{mdxType:"SideBySide"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"declare class MyAbstractClass {}\ninterface MyClass extends MyAbstractClass {}\n\nclass MyClass {}\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-lua"}),"MyClass = __TS__Class()\n"))))}m.isMDXComponent=!0},173:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),b=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=b(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=b(t),d=a,m=p["".concat(l,".").concat(d)]||p[d]||u[d]||c;return t?r.a.createElement(m,s(s({ref:n},i),{},{components:t})):r.a.createElement(m,s({ref:n},i))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,l=new Array(c);l[0]=d;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<c;i++)l[i]=t[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},259:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t(0),r=t.n(a),c=t(260),l=t.n(c);function s({children:e}){const n=r.a.Children.count(e);if(2!==n)throw new Error("Invalid SideBySide children count: "+n);const[t,a]=r.a.Children.toArray(e);return r.a.createElement("div",{className:l.a.sideBySide},t,a)}},260:function(e,n,t){e.exports={sideBySide:"sideBySide_2tt-"}}}]);