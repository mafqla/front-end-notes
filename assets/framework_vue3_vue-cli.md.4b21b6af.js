import{_ as s,c as a,o as l,a as n}from"./app.e7b0f2af.js";var e="/front-end-notes/assets/1586936282638.a21e8b6e.png",p="/front-end-notes/assets/image-20210116230221236.24dcca7d.png",o="/front-end-notes/assets/Snipaste_2021-03-26_15-24-14.d5470ae3.png",c="/front-end-notes/assets/image-20210212174314768.9d519b0b.png",t="/front-end-notes/assets/image-20210116231815543.e77c1606.png",i="/front-end-notes/assets/image-20210116233035582.72919539.png",r="/front-end-notes/assets/image-20210317201811310.8af9a26e.png",B="/front-end-notes/assets/image-20210326165406694.46039fdc.png",y="/front-end-notes/assets/image-20210326165544865.10b1e1de.png",u="/front-end-notes/assets/image-20210326165606191.9af09e95.png",d="/front-end-notes/assets/image-20210511112152702.f0a36e55.png";const k=JSON.parse('{"title":"2. @vue/cli\u811A\u624B\u67B6","description":"","frontmatter":{},"headers":[{"level":2,"title":"2. @vue/cli\u811A\u624B\u67B6","slug":"_2-vue-cli\u811A\u624B\u67B6"},{"level":2,"title":"2.0_@vue/cli \u811A\u624B\u67B6\u4ECB\u7ECD","slug":"_2-0-vue-cli-\u811A\u624B\u67B6\u4ECB\u7ECD"},{"level":2,"title":"@vue/cli\u7684\u597D\u5904","slug":"vue-cli\u7684\u597D\u5904"},{"level":2,"title":"2.1_@vue/cli\u5B89\u88C5","slug":"_2-1-vue-cli\u5B89\u88C5"},{"level":2,"title":"2.2_@vue/cli \u521B\u5EFA\u9879\u76EE\u542F\u52A8\u670D\u52A1","slug":"_2-2-vue-cli-\u521B\u5EFA\u9879\u76EE\u542F\u52A8\u670D\u52A1"},{"level":2,"title":"2.3 @vue/cli \u76EE\u5F55\u548C\u4EE3\u7801\u5206\u6790","slug":"_2-3-vue-cli-\u76EE\u5F55\u548C\u4EE3\u7801\u5206\u6790"},{"level":2,"title":"2.4_@vue/cli \u9879\u76EE\u67B6\u6784\u4E86\u89E3","slug":"_2-4-vue-cli-\u9879\u76EE\u67B6\u6784\u4E86\u89E3"},{"level":2,"title":"2.5_@vue/cli \u81EA\u5B9A\u4E49\u914D\u7F6E","slug":"_2-5-vue-cli-\u81EA\u5B9A\u4E49\u914D\u7F6E"},{"level":2,"title":"2.6_eslint\u4E86\u89E3","slug":"_2-6-eslint\u4E86\u89E3"},{"level":2,"title":"2.7_@vue/cli \u5355vue\u6587\u4EF6\u8BB2\u89E3","slug":"_2-7-vue-cli-\u5355vue\u6587\u4EF6\u8BB2\u89E3"}],"relativePath":"framework/vue3/vue-cli.md","lastUpdated":1656341824000}'),v={name:"framework/vue3/vue-cli.md"},_=n('<h2 id="_2-vue-cli\u811A\u624B\u67B6" tabindex="-1">2. @vue/cli\u811A\u624B\u67B6 <a class="header-anchor" href="#_2-vue-cli\u811A\u624B\u67B6" aria-hidden="true">#</a></h2><h2 id="_2-0-vue-cli-\u811A\u624B\u67B6\u4ECB\u7ECD" tabindex="-1">2.0_@vue/cli \u811A\u624B\u67B6\u4ECB\u7ECD <a class="header-anchor" href="#_2-0-vue-cli-\u811A\u624B\u67B6\u4ECB\u7ECD" aria-hidden="true">#</a></h2><blockquote><p>\u76EE\u6807: webpack\u81EA\u5DF1\u914D\u7F6E\u73AF\u5883\u5F88\u9EBB\u70E6, \u4E0B\u8F7D@vue/cli\u5305,\u7528vue\u547D\u4EE4\u521B\u5EFA\u811A\u624B\u67B6\u9879\u76EE</p></blockquote><ul><li><p>@vue/cli\u662FVue\u5B98\u65B9\u63D0\u4F9B\u7684\u4E00\u4E2A\u5168\u5C40\u6A21\u5757\u5305(\u5F97\u5230vue\u547D\u4EE4), \u6B64\u5305\u7528\u4E8E\u521B\u5EFA\u811A\u624B\u67B6\u9879\u76EE</p><p>\u811A\u624B\u67B6\u662F\u4E3A\u4E86\u4FDD\u8BC1\u5404\u65BD\u5DE5\u8FC7\u7A0B\u987A\u5229\u8FDB\u884C\u800C\u642D\u8BBE\u7684\u5DE5\u4F5C\u5E73\u53F0</p></li></ul><p><img src="'+e+`" alt="1586936282638"></p><blockquote><h2 id="vue-cli\u7684\u597D\u5904" tabindex="-1">@vue/cli\u7684\u597D\u5904 <a class="header-anchor" href="#vue-cli\u7684\u597D\u5904" aria-hidden="true">#</a></h2></blockquote><ul><li><p>\u5F00\u7BB1\u5373\u7528</p><p>0\u914D\u7F6Ewebpack</p><p>babel\u652F\u6301</p><p>css, less\u652F\u6301</p><p>\u5F00\u53D1\u670D\u52A1\u5668\u652F\u6301</p></li></ul><h2 id="_2-1-vue-cli\u5B89\u88C5" tabindex="-1">2.1_@vue/cli\u5B89\u88C5 <a class="header-anchor" href="#_2-1-vue-cli\u5B89\u88C5" aria-hidden="true">#</a></h2><blockquote><p>\u76EE\u6807: \u628A@vue/cli\u6A21\u5757\u5305\u6309\u5230\u5168\u5C40, \u7535\u8111\u62E5\u6709vue\u547D\u4EE4, \u624D\u80FD\u521B\u5EFA\u811A\u624B\u67B6\u5DE5\u7A0B</p></blockquote><ul><li>\u5168\u5C40\u5B89\u88C5\u547D\u4EE4</li></ul><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#ABB2BF;">yarn global add @vue/cli</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># OR</span></span>
<span class="line"><span style="color:#ABB2BF;">npm install -g @vue/cli</span></span>
<span class="line"></span></code></pre></div><ul><li>\u67E5\u770B<code>vue</code>\u811A\u624B\u67B6\u7248\u672C</li></ul><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#ABB2BF;">vue -V</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-2-vue-cli-\u521B\u5EFA\u9879\u76EE\u542F\u52A8\u670D\u52A1" tabindex="-1">2.2_@vue/cli \u521B\u5EFA\u9879\u76EE\u542F\u52A8\u670D\u52A1 <a class="header-anchor" href="#_2-2-vue-cli-\u521B\u5EFA\u9879\u76EE\u542F\u52A8\u670D\u52A1" aria-hidden="true">#</a></h2><blockquote><p>\u76EE\u6807: \u4F7F\u7528vue\u547D\u4EE4, \u521B\u5EFA\u811A\u624B\u67B6\u9879\u76EE</p></blockquote><p>==\u6CE8\u610F: \u9879\u76EE\u540D\u4E0D\u80FD\u5E26\u5927\u5199\u5B57\u6BCD, \u4E2D\u6587\u548C\u7279\u6B8A\u7B26\u53F7==</p><ol><li>\u521B\u5EFA\u9879\u76EE</li></ol><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;"># vue\u548Ccreate\u662F\u547D\u4EE4, vuecli-demo\u662F\u6587\u4EF6\u5939\u540D</span></span>
<span class="line"><span style="color:#ABB2BF;">vue create vuecli-demo</span></span>
<span class="line"></span></code></pre></div><ol start="2"><li><p>\u9009\u62E9\u6A21\u677F</p><p>==\u53EF\u4EE5\u4E0A\u4E0B\u7BAD\u5934\u9009\u62E9, \u5F04\u9519\u4E86ctrl+c\u91CD\u6765==</p></li></ol><p><img src="`+p+'" alt="image-20210116230221236"></p><p>\u200B \u9009\u62E9\u7528\u4EC0\u4E48\u65B9\u5F0F\u4E0B\u8F7D\u811A\u624B\u67B6\u9879\u76EE\u9700\u8981\u7684\u4F9D\u8D56\u5305<img src="'+o+'" alt="Snipaste_2021-03-26_15-24-14"></p><ol start="3"><li>\u56DE\u8F66\u7B49\u5F85\u751F\u6210\u9879\u76EE\u6587\u4EF6\u5939+\u6587\u4EF6+\u4E0B\u8F7D\u5FC5\u987B\u7684\u7B2C\u4E09\u65B9\u5305\u4EEC</li></ol><p><img src="'+c+`" alt="image-20210212174314768"></p><ol start="4"><li>\u8FDB\u5165\u811A\u624B\u67B6\u9879\u76EE\u4E0B, \u542F\u52A8\u5185\u7F6E\u7684\u70ED\u66F4\u65B0\u672C\u5730\u670D\u52A1\u5668</li></ol><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#ABB2BF;"> vuecil-demo</span></span>
<span class="line"><span style="color:#ABB2BF;">bash</span></span>
<span class="line"><span style="color:#ABB2BF;">npm run serve</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># \u6216</span></span>
<span class="line"><span style="color:#ABB2BF;">yarn serve</span></span>
<span class="line"></span></code></pre></div><p>\u6210\u529F\u521B\u5EFA(\u5E95\u5C42node+webpack\u70ED\u66F4\u65B0\u670D\u52A1)</p><p><img src="`+t+'" alt="image-20210116231815543"></p><p>\u6253\u5F00\u6D4F\u89C8\u5668\u8F93\u5165\u4E0A\u8FF0\u5730\u5740</p><p><img src="'+i+`" alt="image-20210116233035582"></p><blockquote><p>\u603B\u7ED3: vue\u547D\u4EE4\u521B\u5EFA\u5DE5\u7A0B\u76EE\u5F55, \u9879\u76EE\u5185\u7F6Ewebpack\u672C\u5730\u70ED\u66F4\u65B0\u670D\u52A1\u5668, \u5E2E\u6211\u4EEC\u6253\u5305\u9879\u76EE\u9884\u89C8\u9879\u76EE</p></blockquote><h2 id="_2-3-vue-cli-\u76EE\u5F55\u548C\u4EE3\u7801\u5206\u6790" tabindex="-1">2.3 @vue/cli \u76EE\u5F55\u548C\u4EE3\u7801\u5206\u6790 <a class="header-anchor" href="#_2-3-vue-cli-\u76EE\u5F55\u548C\u4EE3\u7801\u5206\u6790" aria-hidden="true">#</a></h2><blockquote><p>\u76EE\u6807: \u8BB2\u89E3\u91CD\u70B9\u6587\u4EF6\u5939, \u6587\u4EF6\u7684\u4F5C\u7528, \u4EE5\u53CA\u6587\u4EF6\u91CC\u4EE3\u7801\u7684\u610F\u601D</p></blockquote><div class="language-bash"><span class="copy"></span><pre><code><span class="line"><span style="color:#ABB2BF;"> vuecil-demo        </span><span style="color:#7F848E;font-style:italic;"># \u9879\u76EE\u76EE\u5F55</span></span>
<span class="line"><span style="color:#ABB2BF;">    \u251C\u2500\u2500 node_modules </span><span style="color:#7F848E;font-style:italic;"># \u9879\u76EE\u4F9D\u8D56\u7684\u7B2C\u4E09\u65B9\u5305</span></span>
<span class="line"><span style="color:#ABB2BF;">    \u251C\u2500\u2500 public       </span><span style="color:#7F848E;font-style:italic;"># \u9759\u6001\u6587\u4EF6\u76EE\u5F55</span></span>
<span class="line"><span style="color:#ABB2BF;">      \u251C\u2500\u2500 favicon.ico# \u6D4F\u89C8\u5668\u5C0F\u56FE\u6807</span></span>
<span class="line"><span style="color:#ABB2BF;">      \u2514\u2500\u2500 index.html </span><span style="color:#7F848E;font-style:italic;"># \u5355\u9875\u9762\u7684html\u6587\u4EF6(\u7F51\u9875\u6D4F\u89C8\u7684\u662F\u5B83)</span></span>
<span class="line"><span style="color:#ABB2BF;">    \u251C\u2500\u2500 src          </span><span style="color:#7F848E;font-style:italic;"># \u4E1A\u52A1\u6587\u4EF6\u5939</span></span>
<span class="line"><span style="color:#ABB2BF;">      \u251C\u2500\u2500 assets     </span><span style="color:#7F848E;font-style:italic;"># \u9759\u6001\u8D44\u6E90</span></span>
<span class="line"><span style="color:#ABB2BF;">        \u2514\u2500\u2500 logo.png </span><span style="color:#7F848E;font-style:italic;"># vue\u7684logo\u56FE\u7247</span></span>
<span class="line"><span style="color:#ABB2BF;">      \u251C\u2500\u2500 components </span><span style="color:#7F848E;font-style:italic;"># \u7EC4\u4EF6\u76EE\u5F55</span></span>
<span class="line"><span style="color:#ABB2BF;">        \u2514\u2500\u2500 HelloWorld.vue </span><span style="color:#7F848E;font-style:italic;"># \u6B22\u8FCE\u9875\u9762vue\u4EE3\u7801\u6587\u4EF6 </span></span>
<span class="line"><span style="color:#ABB2BF;">      \u251C\u2500\u2500 App.vue    </span><span style="color:#7F848E;font-style:italic;"># \u6574\u4E2A\u5E94\u7528\u7684\u6839\u7EC4\u4EF6</span></span>
<span class="line"><span style="color:#ABB2BF;">      \u2514\u2500\u2500 main.js    </span><span style="color:#7F848E;font-style:italic;"># \u5165\u53E3js\u6587\u4EF6</span></span>
<span class="line"><span style="color:#ABB2BF;">    \u251C\u2500\u2500 .gitignore   </span><span style="color:#7F848E;font-style:italic;"># git\u63D0\u4EA4\u5FFD\u7565\u914D\u7F6E</span></span>
<span class="line"><span style="color:#ABB2BF;">    \u251C\u2500\u2500 babel.config.js  </span><span style="color:#7F848E;font-style:italic;"># babel\u914D\u7F6E</span></span>
<span class="line"><span style="color:#ABB2BF;">    \u251C\u2500\u2500 package.json  </span><span style="color:#7F848E;font-style:italic;"># \u4F9D\u8D56\u5305\u5217\u8868</span></span>
<span class="line"><span style="color:#ABB2BF;">    \u251C\u2500\u2500 README.md    </span><span style="color:#7F848E;font-style:italic;"># \u9879\u76EE\u8BF4\u660E</span></span>
<span class="line"><span style="color:#ABB2BF;">	\u2514\u2500\u2500 yarn.lock    </span><span style="color:#7F848E;font-style:italic;"># \u9879\u76EE\u5305\u7248\u672C\u9501\u5B9A\u548C\u7F13\u5B58\u5730\u5740</span></span>
<span class="line"></span></code></pre></div><p>\u4E3B\u8981\u6587\u4EF6\u53CA\u542B\u4E49</p><div class="language-js"><span class="copy"></span><pre><code><span class="line"><span style="color:#E06C75;">node_modules\u4E0B\u90FD\u662F\u4E0B\u8F7D\u7684\u7B2C\u4E09\u65B9\u5305</span></span>
<span class="line"><span style="color:#E06C75;">public</span><span style="color:#56B6C2;">/</span><span style="color:#E5C07B;">index</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;"> \u2013 </span><span style="color:#E06C75;">\u6D4F\u89C8\u5668\u8FD0\u884C\u7684\u7F51\u9875</span></span>
<span class="line"><span style="color:#E06C75;">src</span><span style="color:#56B6C2;">/</span><span style="color:#E5C07B;">main</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">js</span><span style="color:#ABB2BF;"> \u2013 </span><span style="color:#E06C75;">webpack\u6253\u5305\u7684\u5165\u53E3\u6587\u4EF6</span></span>
<span class="line"><span style="color:#E06C75;">src</span><span style="color:#56B6C2;">/</span><span style="color:#E5C07B;">App</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">vue</span><span style="color:#ABB2BF;"> \u2013 </span><span style="color:#E06C75;">vue\u9879\u76EE\u5165\u53E3\u9875\u9762</span></span>
<span class="line"><span style="color:#E5C07B;">package</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">json</span><span style="color:#ABB2BF;"> \u2013 </span><span style="color:#E06C75;">\u4F9D\u8D56\u5305\u5217\u8868\u6587\u4EF6</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-4-vue-cli-\u9879\u76EE\u67B6\u6784\u4E86\u89E3" tabindex="-1">2.4_@vue/cli \u9879\u76EE\u67B6\u6784\u4E86\u89E3 <a class="header-anchor" href="#_2-4-vue-cli-\u9879\u76EE\u67B6\u6784\u4E86\u89E3" aria-hidden="true">#</a></h2><blockquote><p>\u76EE\u6807: \u77E5\u9053\u9879\u76EE\u5165\u53E3, \u4EE5\u53CA\u4EE3\u7801\u6267\u884C\u987A\u5E8F\u548C\u5F15\u5165\u5173\u7CFB</p></blockquote><p><img src="`+r+`" alt="image-20210317201811310"></p><h2 id="_2-5-vue-cli-\u81EA\u5B9A\u4E49\u914D\u7F6E" tabindex="-1">2.5_@vue/cli \u81EA\u5B9A\u4E49\u914D\u7F6E <a class="header-anchor" href="#_2-5-vue-cli-\u81EA\u5B9A\u4E49\u914D\u7F6E" aria-hidden="true">#</a></h2><blockquote><p>\u76EE\u6807\uFF1A\u9879\u76EE\u4E2D\u6CA1\u6709webpack.config.js\u6587\u4EF6\uFF0C\u56E0\u4E3A@vue/cli\u7528\u7684vue.config.js</p></blockquote><p>src\u5E76\u5217\u5904\u65B0\u5EFAvue.config.js</p><div class="language-jsx"><span class="copy"></span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">/* \u8986\u76D6webpack\u7684\u914D\u7F6E */</span></span>
<span class="line"><span style="color:#E5C07B;">module</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">exports</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">devServer</span><span style="color:#ABB2BF;">: { </span><span style="color:#7F848E;font-style:italic;">// \u81EA\u5B9A\u4E49\u670D\u52A1\u914D\u7F6E</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">open</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">, </span><span style="color:#7F848E;font-style:italic;">// \u81EA\u52A8\u6253\u5F00\u6D4F\u89C8\u5668</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">port</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3000</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_2-6-eslint\u4E86\u89E3" tabindex="-1">2.6_eslint\u4E86\u89E3 <a class="header-anchor" href="#_2-6-eslint\u4E86\u89E3" aria-hidden="true">#</a></h2><blockquote><p>\u76EE\u6807: \u77E5\u9053eslint\u7684\u4F5C\u7528, \u548C\u5982\u4F55\u6682\u65F6\u5173\u95ED, \u5B83\u662F\u4E00\u4E2A==\u4EE3\u7801\u68C0\u67E5\u5DE5\u5177==</p></blockquote><p>\u4F8B\u5B50: \u5148\u5728main.js \u968F\u4FBF\u58F0\u660E\u4E2A\u53D8\u91CF, \u4F46\u662F\u4E0D\u8981\u4F7F\u7528</p><p><img src="`+B+'" alt="image-20210326165406694"></p><p>\u53D1\u73B0, \u7EC8\u7AEF\u548C\u9875\u9762\u90FD\u62A5\u9519\u4E86</p><p><img src="'+y+'" alt="image-20210326165544865"></p><p><img src="'+u+'" alt="image-20210326165606191"></p><p>\u65B9\u5F0F1: \u624B\u52A8\u89E3\u51B3\u6389\u9519\u8BEF, \u4EE5\u540E\u9879\u76EE\u4E2D\u4F1A\u8BB2\u5982\u4F55\u81EA\u52A8\u89E3\u51B3</p><p>\u65B9\u5F0F2: \u6682\u65F6\u5173\u95EDeslint\u68C0\u67E5(\u56E0\u4E3A\u73B0\u5728\u4E3B\u8981\u7CBE\u529B\u5728\u5B66\u4E60Vue\u8BED\u6CD5\u4E0A), \u5728vue.config.js\u4E2D\u914D\u7F6E\u540E\u91CD\u542F\u670D\u52A1</p><p><img src="'+d+`" alt="image-20210511112152702"></p><h2 id="_2-7-vue-cli-\u5355vue\u6587\u4EF6\u8BB2\u89E3" tabindex="-1">2.7_@vue/cli \u5355vue\u6587\u4EF6\u8BB2\u89E3 <a class="header-anchor" href="#_2-7-vue-cli-\u5355vue\u6587\u4EF6\u8BB2\u89E3" aria-hidden="true">#</a></h2><blockquote><p>\u76EE\u6807: \u5355vue\u6587\u4EF6\u597D\u5904, \u72EC\u7ACB\u4F5C\u7528\u57DF\u4E92\u4E0D\u5F71\u54CD</p></blockquote><p>Vue\u63A8\u8350\u91C7\u7528.vue\u6587\u4EF6\u6765\u5F00\u53D1\u9879\u76EE</p><p>template\u91CC\u53EA\u80FD\u6709\u4E00\u4E2A\u6839\u6807\u7B7E</p><p>vue\u6587\u4EF6-\u72EC\u7ACB\u6A21\u5757-\u4F5C\u7528\u57DF\u4E92\u4E0D\u5F71\u54CD</p><p>style\u914D\u5408scoped\u5C5E\u6027, \u4FDD\u8BC1\u6837\u5F0F\u53EA\u9488\u5BF9\u5F53\u524Dtemplate\u5185\u6807\u7B7E\u751F\u6548</p><p>vue\u6587\u4EF6\u914D\u5408webpack, \u628A\u4ED6\u4EEC\u6253\u5305\u8D77\u6765\u63D2\u5165\u5230index.html</p><div class="language-vue"><span class="copy"></span><pre><code><span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- template\u5FC5\u987B, \u53EA\u80FD\u6709\u4E00\u4E2A\u6839\u6807\u7B7E, \u5F71\u54CD\u6E32\u67D3\u5230\u9875\u9762\u7684\u6807\u7B7E\u7ED3\u6784 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;\u6B22\u8FCE\u4F7F\u7528vue&lt;/</span><span style="color:#E06C75;">div</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- js\u76F8\u5173 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;App&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">&lt;!-- \u5F53\u524D\u7EC4\u4EF6\u7684\u6837\u5F0F, \u8BBE\u7F6Escoped, \u53EF\u4EE5\u4FDD\u8BC1\u6837\u5F0F\u53EA\u5BF9\u5F53\u524D\u9875\u9762\u6709\u6548 --&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">scoped</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><p>\u6700\u7EC8: Vue\u6587\u4EF6\u914D\u5408webpack, \u628A\u4ED6\u4EEC\u6253\u5305\u8D77\u6765\u63D2\u5165\u5230index.html, \u7136\u540E\u5728\u6D4F\u89C8\u5668\u8FD0\u884C</p>`,61),g=[_];function F(h,A,m,f,E,b){return l(),a("div",null,g)}var q=s(v,[["render",F]]);export{k as __pageData,q as default};