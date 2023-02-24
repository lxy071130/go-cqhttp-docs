import{r as c,o as n,c as a,a as t,b as p,F as r,e as i,d as e}from"./app.b3c39593.js";import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";const s={},l=i('<h1 id="\u6ED1\u5757\u9A8C\u8BC1\u7801" tabindex="-1"><a class="header-anchor" href="#\u6ED1\u5757\u9A8C\u8BC1\u7801" aria-hidden="true">#</a> \u6ED1\u5757\u9A8C\u8BC1\u7801</h1><p>\u7531\u4E8E tx \u6700\u65B0\u7684\u9650\u5236, \u6240\u6709\u534F\u8BAE\u5728\u964C\u751F\u8BBE\u5907 / IP \u767B\u5F55\u65F6\u90FD\u6709\u53EF\u80FD\u88AB\u8981\u6C42\u901A\u8FC7\u6ED1\u5757\u9A8C\u8BC1\u7801, \u5426\u5219\u5C06\u4F1A\u51FA\u73B0 <code>\u5F53\u524D\u4E0A\u7F51\u73AF\u5883\u5F02\u5E38</code> \u7684\u9519\u8BEF\u3002 \u76EE\u524D\u6211\u4EEC\u51C6\u5907\u4E86\u4E24\u4E2A\u4E34\u65F6\u65B9\u6848\u5E94\u5BF9\u8BE5\u9A8C\u8BC1\u7801\u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><ul><li>\u5982\u679C\u60A8\u6709\u4E00\u53F0\u8FD0\u884C Windows \u7684 PC / Server \u5E76\u4E14\u4E0D\u4F1A\u6293\u5305\u64CD\u4F5C, \u6211\u4EEC\u5EFA\u8BAE\u76F4\u63A5\u4F7F\u7528\u65B9\u6848 B \u3002</li><li>\u76EE\u524D, QQ \u5E76\u4E0D\u4F1A\u9A8C\u8BC1 ticket \u548C login \u7684 ip , \u5982\u679C\u4F60\u4F7F\u7528 Linux \u670D\u52A1\u5668, \u8BF7\u653E\u5FC3\u7684\u590D\u5236\u94FE\u63A5\u5E76\u5728\u4F60\u81EA\u5DF1\u7535\u8111\u7684\u6D4F\u89C8\u5668\u4E0A\u5B8C\u6210\u6293\u5305\u64CD\u4F5C\u3002</li></ul></div><h2 id="\u65B9\u6848a-\u81EA\u884C\u6293\u5305" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848a-\u81EA\u884C\u6293\u5305" aria-hidden="true">#</a> \u65B9\u6848A: \u81EA\u884C\u6293\u5305</h2><p>\u7531\u4E8E\u6ED1\u5757\u9A8C\u8BC1\u7801\u548C QQ \u672C\u4F53\u7684\u534F\u8BAE\u72EC\u7ACB, \u6211\u4EEC\u65E0\u6CD5\u76F4\u63A5\u5904\u7406\u5E76\u63D0\u4EA4. \u9700\u8981\u5728\u6D4F\u89C8\u5668\u901A\u8FC7\u540E\u6293\u5305\u5E76\u83B7\u53D6 <code>Ticket</code> \u63D0\u4EA4.</p><p>\u8BE5\u65B9\u6848\u4E3A\u5177\u4F53\u7684\u6293\u5305\u6559\u7A0B, \u5982\u679C\u60A8\u5DF2\u7ECF\u77E5\u9053\u5982\u4F55\u5728\u6D4F\u89C8\u5668\u4E2D\u6293\u5305\u3002 \u53EF\u4EE5\u7565\u8FC7\u63A5\u4E0B\u6765\u7684\u6587\u6863\u5E76\u76F4\u63A5\u6293\u53D6 <code>cap_union_new_verify</code> \u7684\u8FD4\u56DE\u503C, \u63D0\u53D6 <code>Ticket</code> \u5E76\u5728\u547D\u4EE4\u884C\u63D0\u4EA4.</p><p>\u9996\u5148\u83B7\u53D6\u6ED1\u5757\u9A8C\u8BC1\u7801\u7684\u5730\u5740, \u5E76\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00. \u8FD9\u91CC\u4EE5 <em>Microsoft Edge</em> \u6D4F\u89C8\u5668\u4E3A\u4F8B, <em>Chrome</em> \u540C\u7406.</p><p><img src="https://i.loli.net/2020/12/27/yXdomOnQ8tkauMe.png" alt="image.png"></p><p>\u9996\u5148\u9009\u62E9 <code>1</code> \u5E76\u63D0\u53D6\u94FE\u63A5\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00</p><p><img src="https://i.loli.net/2020/12/27/HYhmZv1wARMV7Uq.png" alt="image.png"></p><p><img src="https://i.loli.net/2020/12/27/otk9Hz7lBCaRFMV.png" alt="image.png"></p><p>\u6B64\u65F6\u4E0D\u8981\u6ED1\u52A8\u9A8C\u8BC1\u7801, \u9996\u5148\u6309\u4E0B <code>F12</code> ( \u952E\u76D8\u53F3\u4E0A\u89D2\u9000\u683C\u952E\u4E0A\u65B9 ) \u6253\u5F00 <em>\u5F00\u53D1\u8005\u5DE5\u5177</em></p><p><img src="https://i.loli.net/2020/12/27/JDioadLPwcKWpt1.png" alt="image.png"></p><p>\u70B9\u51FB <code>Network</code> \u9009\u9879\u5361 (\u5728\u67D0\u4E9B\u6D4F\u89C8\u5668\u5B83\u53EF\u80FD\u53EB\u505A <code>\u7F51\u7EDC</code>)</p><p><img src="https://i.loli.net/2020/12/27/qEzTB5jrDZUWSwp.png" alt="image.png"></p><p>\u70B9\u5F00 <code>Filter</code> (\u7BAD\u5934) \u6309\u94AE\u4EE5\u786E\u5B9A\u60A8\u80FD\u770B\u5230\u4E0B\u9762\u7684\u5DE5\u5177\u680F, \u52FE\u9009 <code>Preserve log</code> ( \u7EA2\u6846 )</p><p>\u6B64\u65F6\u53EF\u4EE5\u6ED1\u52A8\u5E76\u901A\u8FC7\u9A8C\u8BC1\u7801</p><p><img src="https://i.loli.net/2020/12/27/Id4hxzyDprQuF2G.png" alt="image.png"></p><p>\u56DE\u5230 <em>\u5F00\u53D1\u8005\u5DE5\u5177</em>, \u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u5DF2\u7ECF\u6709\u4E86\u4E00\u4E2A\u8BF7\u6C42\u3002</p><p><img src="https://i.loli.net/2020/12/27/3C6Y2XVKBRv1z9E.png" alt="image.png"></p><p>\u6B64\u65F6\u5982\u679C\u6709\u591A\u4E2A\u8BF7\u6C42, \u8BF7\u4E0D\u8981\u614C\u5F20\u3002 \u770B\u5230\u4E0A\u9762\u7684 <code>Filter</code> \u6CA1? \u6B64\u65F6\u5728 <code>Filter</code> \u8F93\u5165\u6846\u4E2D\u8F93\u5165 <code>cap_union_new</code>, \u5C31\u5E94\u8BE5\u53EA\u5269\u4E00\u4E2A\u8BF7\u6C42\u4E86\u3002</p><p>\u7136\u540E\u70B9\u51FB\u8BE5\u8BF7\u6C42\u3002 \u70B9\u5F00 <code>Preview</code> \u9009\u9879\u5361 ( \u7BAD\u5934 ) :</p><p><img src="https://i.loli.net/2020/12/27/P1VtxRWpjY8524Z.png" alt="image.png"></p><p>\u6B64\u65F6\u5C31\u80FD\u770B\u5230\u4E00\u4E2A\u6807\u51C6\u7684 <code>JSON</code> , \u590D\u5236 <code>ticket</code> \u5B57\u6BB5\u5E76\u56DE\u5230 <code>go-cqhttp</code> \u7C98\u8D34\u3002 \u5373\u53EF\u901A\u8FC7\u6ED1\u5757\u9A8C\u8BC1.</p><p>\u5982\u679C\u60A8\u770B\u5230\u8FD9\u91CC\u8FD8\u662F\u4E0D\u4F1A\u5982\u4F55\u64CD\u4F5C, \u6CA1\u5173\u7CFB! \u6211\u4EEC\u8FD8\u51C6\u5907\u4E86\u65B9\u6848B\u3002</p><h2 id="\u65B9\u6848b-\u4F7F\u7528\u4E13\u7528\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6848b-\u4F7F\u7528\u4E13\u7528\u5DE5\u5177" aria-hidden="true">#</a> \u65B9\u6848B: \u4F7F\u7528\u4E13\u7528\u5DE5\u5177</h2><p>\u6B64\u65B9\u6848\u9700\u8981\u60A8\u6709\u4E00\u53F0\u53EF\u4EE5\u64CD\u4F5C\u7684 <code>Windows</code> \u7535\u8111\u3002</p>',27),g=e("\u9996\u5148\u4E0B\u8F7D\u5DE5\u5177: "),h={href:"https://wws.lanzoui.com/i2vn0jrofte",target:"_blank",rel:"noopener noreferrer"},m=e("\u84DD\u594F\u4E91"),_=e(),u={href:"https://drive.google.com/file/d/1peMDHqgP8AgWBVp5vP-cfhcGrb2ksSrE/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},f=e("Google Drive"),k=i('<p>\u89E3\u538B\u5E76\u6253\u5F00\u5DE5\u5177:</p><p><img src="https://i.loli.net/2020/12/27/winG4SkxhgLoNDZ.png" alt="image.png"></p><p>\u6253\u5F00 <code>go-cqhttp</code> \u5E76\u9009\u62E9 <code>2</code>:</p><p><img src="https://i.loli.net/2020/12/27/yXdomOnQ8tkauMe.png" alt="image.png"></p><p>\u590D\u5236 <code>ID</code> \u5E76\u524D\u5F80\u5DE5\u5177\u7C98\u8D34:</p><p><img src="https://i.loli.net/2020/12/27/fIwXx5nN9r8Zbc7.png" alt="image.png"></p><p><img src="https://i.loli.net/2020/12/27/WZsTCyGwSjc9mb5.png" alt="image.png"></p><p>\u70B9\u51FB <code>OK</code> \u5E76\u5904\u7406\u6ED1\u5757, \u5B8C\u6210\u5373\u53EF\u767B\u5F55\u6210\u529F\u3002( \u53EF\u80FD\u53CD\u5E94\u7A0D\u5FAE\u6162\u70B9, \u8BF7\u4E0D\u8981\u591A\u6B21\u70B9\u51FB )</p><p><img src="https://i.loli.net/2020/12/27/UnvAuxreijYzgLC.png" alt="image.png"></p>',9);function v(x,w){const o=c("ExternalLinkIcon");return n(),a(r,null,[l,t("p",null,[g,t("a",h,[m,p(o)]),_,t("a",u,[f,p(o)])]),k],64)}var V=d(s,[["render",v]]);export{V as default};
