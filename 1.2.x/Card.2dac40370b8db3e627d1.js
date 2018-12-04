webpackJsonpShineoutDoc([26],{1030:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(0),r=a.n(t),o=a(73),d=a(72),l=a(44),c=a(1031),i=a.n(c),s=a(1032),u=a.n(s),m=Object(l.a)(i.a,u.a),C=[{name:"1-base",title:Object(l.a)("基本用法 \n Card 内部由 Header, Body, Footer 三个自组件组成，可以组合或单独使用","Base \n The card is composed of three components: Header, Body, and Footer. It can be combined or used separately."),component:a(1033).default,rawText:a(1034)},{name:"2-boxshadow",title:Object(l.a)("阴影 \n 可以通过 shadow 属性控制阴影","BoxShadow \n Set the shadow property to determined how to display the shadow."),component:a(1035).default,rawText:a(1036)},{name:"3-form",title:Object(l.a)("表单 \n Card.Submit 可以用来触发 Card 内部表单提交","Form \n Use Card.submit to trigger the submimt event of the form in the card."),component:a(1037).default,rawText:a(1038)},{name:"4-collapse",title:Object(l.a)("折叠 \n 设置 collapsible 可以折叠 Card，通过 collapsed 或 defaultCollapsed 属性控制状态","Collapse \n Set collapsible can collapse the Card panel."),component:a(1039).default,rawText:a(1040)},{name:"5-accordion",title:Object(l.a)("手风琴 \n 使用 Card.Accordion 可以使一组 Card 实现手风琴效果（每次打开一个 Card）","Accordion \n Put a group of Card in the Card.Accordion, only one panel can be expanded at the same time."),component:a(1041).default,rawText:a(1042)}];n.default=Object(o.a)(function(e){return r.a.createElement(d.b,Object.assign({},e,{codes:void 0,source:m,examples:C}))})},1031:function(e,n){e.exports="# Card *卡片*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| collapsible | bool | false | 是否可折叠 |\n| collapsed | bool | 无 | 是否折叠，用于受控状态 |\n| defaultCollapsed | bool | true | 初始折叠状态（仅在 collapsible 为 true 时有效） |\n| onCollapse | function | 无 | 折叠状态改变时回调事件 |\n| shadow | \\[true, false, 'hover'] | false | 是否显示阴影<br />'hover' - 鼠标移到元素上显示<br />true - 总是显示<br />false - 从不显示 |\n| style | object | 无 | 最外层扩展样式 |\n\n<br />\n\n#### Card.Header, Card.Body, Card.Footer\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| style | object | 无 | 最外层扩展样式 |\n\n<br />\n\n### Card.Accordion\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| active | number | 无 | 打开的索引，全关闭时为 -1，用于受控状态 |\n| defaultActive | number | 0 | 默认打开的索引，用于非受控状态 |\n| onChange | function | 无 | 面板打开回调 |\n\n<br />\n\n#### Card.Submit\n\n同 [Button](#/components/Button)"},1032:function(e,n){e.exports="# Card\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | none | Extend className |\n| collapsible | bool | false | Whether can be collapsed |\n| collapsed | bool | - | Whether to be collapsed. |\n| defaultCollapsed | bool | true | Initial collapsed state |\n| onCollapse | function | - | Callback when collapsed state changed |\n| shadow | \\[true, false, 'hover'] | false | Whether to show the shadow.<br />'hover' - Display it when the mouse is over the element.<br />true - Always show<br />false - Never show |\n| style | object | - | Container element style |\n\n<br />\n\n#### Card.Header, Card.Body, Card.Footer\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| className | string | - | Extend className |\n| style | object | - | Element style |\n\n<br />\n\n### Card.Accordion\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| active | number | none | Active index. It is -1 when fully closed. Used in controlled state. |\n| defaultActive | number | 0 | The default active index for uncontrolled state |\n| onChange | function | none | The callback function when the panel is opened |\n\n<br />\n\n#### Card.Submit\n\nThe same as [Button](#/components/Button)"},1033:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(0),r=a.n(t),o=a(26),d={width:240,height:300,display:"inline-flex",marginRight:20},l={background:"#f7f7f7"};n.default=function(){return r.a.createElement("div",null,r.a.createElement(o.d,{style:d},r.a.createElement(o.d.Header,null,"Header"),r.a.createElement(o.d.Body,null,"Body"),r.a.createElement(o.d.Footer,null,"Footer")),r.a.createElement(o.d,{style:d},r.a.createElement(o.d.Header,{style:l},"Header"),r.a.createElement(o.d.Body,null,"Body"),r.a.createElement(o.d.Footer,{style:l},"Footer")))}},1034:function(e,n){e.exports="/**\n * cn - 基本用法\n *    -- Card 内部由 Header, Body, Footer 三个自组件组成，可以组合或单独使用\n * en - Base\n *    -- The card is composed of three components: Header, Body, and Footer. It can be combined or used separately.\n */\nimport React from 'react'\nimport { Card } from 'shineout'\n\nconst cardStyle = {\n  width: 240, height: 300, display: 'inline-flex', marginRight: 20,\n}\nconst gray = { background: '#f7f7f7' }\n\nexport default function () {\n  return (\n    <div>\n      <Card style={cardStyle}>\n        <Card.Header>Header</Card.Header>\n        <Card.Body>Body</Card.Body>\n        <Card.Footer>Footer</Card.Footer>\n      </Card>\n\n      <Card style={cardStyle}>\n        <Card.Header style={gray}>Header</Card.Header>\n        <Card.Body>Body</Card.Body>\n        <Card.Footer style={gray}>Footer</Card.Footer>\n      </Card>\n    </div>\n  )\n}\n\n"},1035:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(0),r=a.n(t),o=a(26),d={width:140,display:"inline-flex",marginRight:20};n.default=function(){return r.a.createElement("div",null,r.a.createElement(o.d,{style:d},r.a.createElement(o.d.Body,null,"Never")),r.a.createElement(o.d,{style:d,shadow:"hover"},r.a.createElement(o.d.Body,null,"Hover")),r.a.createElement(o.d,{style:d,shadow:!0},r.a.createElement(o.d.Body,null,"Always")))}},1036:function(e,n){e.exports="/**\n * cn - 阴影\n *    -- 可以通过 shadow 属性控制阴影\n * en - BoxShadow\n *    -- Set the shadow property to determined how to display the shadow.\n */\nimport React from 'react'\nimport { Card } from 'shineout'\n\nconst cardStyle = {\n  width: 140, display: 'inline-flex', marginRight: 20,\n}\n\nexport default function () {\n  return (\n    <div>\n      <Card style={cardStyle}>\n        <Card.Body>Never</Card.Body>\n      </Card>\n\n      <Card style={cardStyle} shadow=\"hover\">\n        <Card.Body>Hover</Card.Body>\n      </Card>\n\n      <Card style={cardStyle} shadow>\n        <Card.Body>Always</Card.Body>\n      </Card>\n    </div>\n  )\n}\n\n"},1037:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(0),r=a.n(t),o=a(26);n.default=function(){return r.a.createElement(o.d,{style:{width:500}},r.a.createElement(o.d.Header,null,"Header"),r.a.createElement(o.d.Body,null,r.a.createElement("br",null),r.a.createElement(o.k,{onSubmit:function(e){console.log(e)}},r.a.createElement(o.k.Item,{label:"User name"},r.a.createElement(o.o,{name:"name",defaultValue:"user"})),r.a.createElement(o.k.Item,{label:"Email"},r.a.createElement(o.o,{name:"email",defaultValue:"test@example.com"})))),r.a.createElement(o.d.Footer,{align:"right"},r.a.createElement(o.d.Submit,null,"Submit")))}},1038:function(e,n){e.exports='/**\n * cn - 表单\n *    -- Card.Submit 可以用来触发 Card 内部表单提交\n * en - Form\n *    -- Use Card.submit to trigger the submimt event of the form in the card.\n */\nimport React from \'react\'\nimport { Card, Form, Input } from \'shineout\'\n\nexport default function () {\n  return (\n    <Card style={{ width: 500 }}>\n      <Card.Header>Header</Card.Header>\n\n      <Card.Body>\n        <br />\n        <Form onSubmit={(data) => { console.log(data) }}>\n          <Form.Item label="User name">\n            <Input name="name" defaultValue="user" />\n          </Form.Item>\n\n          <Form.Item label="Email">\n            <Input name="email" defaultValue="test@example.com" />\n          </Form.Item>\n        </Form>\n      </Card.Body>\n\n      <Card.Footer align="right">\n        <Card.Submit>Submit</Card.Submit>\n      </Card.Footer>\n    </Card>\n  )\n}\n\n'},1039:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(0),r=a.n(t),o=a(26);n.default=function(){return r.a.createElement(o.d,{collapsible:!0},r.a.createElement(o.d.Header,null,"Header"),r.a.createElement(o.d.Body,null,r.a.createElement("div",{style:{height:100}},r.a.createElement(o.h,null))))}},1040:function(e,n){e.exports="/**\n * cn - 折叠\n *    -- 设置 collapsible 可以折叠 Card，通过 collapsed 或 defaultCollapsed 属性控制状态\n * en - Collapse\n *    -- Set collapsible can collapse the Card panel.\n */\nimport React from 'react'\nimport { Card, DatePicker } from 'shineout'\n\nexport default function () {\n  return (\n    <Card collapsible>\n      <Card.Header>Header</Card.Header>\n\n      <Card.Body>\n        <div style={{ height: 100 }}><DatePicker /></div>\n      </Card.Body>\n    </Card>\n  )\n}\n\n"},1041:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=a(0),r=a.n(t),o=a(26);n.default=function(){return r.a.createElement(o.d.Accordion,{defaultActive:1},r.a.createElement(o.d,null,r.a.createElement(o.d.Header,null,"Header 1"),r.a.createElement(o.d.Body,null,"Body")),r.a.createElement(o.d,null,r.a.createElement(o.d.Header,null,"Header 2"),r.a.createElement(o.d.Body,null,"Body")),r.a.createElement(o.d,null,r.a.createElement(o.d.Header,null,"Header 3"),r.a.createElement(o.d.Body,null,"Body")))}},1042:function(e,n){e.exports="/**\n * cn - 手风琴\n *    -- 使用 Card.Accordion 可以使一组 Card 实现手风琴效果（每次打开一个 Card）\n * en - Accordion\n *    -- Put a group of Card in the Card.Accordion, only one panel can be expanded at the same time.\n */\nimport React from 'react'\nimport { Card } from 'shineout'\n\nexport default function () {\n  return (\n    <Card.Accordion defaultActive={1}>\n      <Card>\n        <Card.Header>Header 1</Card.Header>\n        <Card.Body>Body</Card.Body>\n      </Card>\n      <Card>\n        <Card.Header>Header 2</Card.Header>\n        <Card.Body>Body</Card.Body>\n      </Card>\n      <Card>\n        <Card.Header>Header 3</Card.Header>\n        <Card.Body>Body</Card.Body>\n      </Card>\n    </Card.Accordion>\n  )\n}\n\n"}});