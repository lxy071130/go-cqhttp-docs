import{r as e,o as p,c as t,a as n,b as o,F as l,e as c,d as s}from"./app.b3c39593.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=c(`<h1 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h1><p>go-cqhttp \u5305\u542B <code>config.yml</code> \u548C <code>device.json</code> \u4E24\u4E2A\u914D\u7F6E\u6587\u4EF6, \u5176\u4E2D <code>config.yml</code> \u4E3A\u8FD0\u884C\u914D\u7F6E <code>device.json</code> \u4E3A\u865A\u62DF\u8BBE\u5907\u4FE1\u606F\u3002</p><p><code>config.yml</code> \u4F1A\u5728\u9996\u6B21\u8FD0\u884C go-cqhttp \u7684\u65F6\u5019\u81EA\u52A8\u751F\u6210\uFF0C<code>device.json</code> \u4F1A\u5728\u9996\u6B21\u767B\u9646\u8D26\u6237\u7684\u65F6\u5019\u81EA\u52A8\u751F\u6210\u3002</p><h2 id="\u914D\u7F6E\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u4FE1\u606F" aria-hidden="true">#</a> \u914D\u7F6E\u4FE1\u606F</h2><p>\u9ED8\u8BA4\u751F\u6210\u7684\u8FD0\u884C\u914D\u7F6E\u6587\u4EF6 <code>config.yml</code> \u5982\u4E0B\u6240\u793A:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># go-cqhttp \u9ED8\u8BA4\u914D\u7F6E\u6587\u4EF6</span>

<span class="token key atrule">account</span><span class="token punctuation">:</span> <span class="token comment"># \u8D26\u53F7\u76F8\u5173</span>
  <span class="token key atrule">uin</span><span class="token punctuation">:</span> <span class="token number">1233456</span> <span class="token comment"># QQ\u8D26\u53F7</span>
  <span class="token key atrule">password</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span> <span class="token comment"># \u5BC6\u7801\u4E3A\u7A7A\u65F6\u4F7F\u7528\u626B\u7801\u767B\u5F55</span>
  <span class="token key atrule">encrypt</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>  <span class="token comment"># \u662F\u5426\u5F00\u542F\u5BC6\u7801\u52A0\u5BC6</span>
  <span class="token key atrule">status</span><span class="token punctuation">:</span> <span class="token number">0</span>      <span class="token comment"># \u5728\u7EBF\u72B6\u6001 \u8BF7\u53C2\u8003 https://docs.go-cqhttp.org/guide/config.html#\u5728\u7EBF\u72B6\u6001</span>
  <span class="token key atrule">relogin</span><span class="token punctuation">:</span> <span class="token comment"># \u91CD\u8FDE\u8BBE\u7F6E</span>
    <span class="token key atrule">delay</span><span class="token punctuation">:</span> <span class="token number">3</span>   <span class="token comment"># \u9996\u6B21\u91CD\u8FDE\u5EF6\u8FDF, \u5355\u4F4D\u79D2</span>
    <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">3</span>   <span class="token comment"># \u91CD\u8FDE\u95F4\u9694</span>
    <span class="token key atrule">max-times</span><span class="token punctuation">:</span> <span class="token number">0</span>  <span class="token comment"># \u6700\u5927\u91CD\u8FDE\u6B21\u6570, 0\u4E3A\u65E0\u9650\u5236</span>

  <span class="token comment"># \u662F\u5426\u4F7F\u7528\u670D\u52A1\u5668\u4E0B\u53D1\u7684\u65B0\u5730\u5740\u8FDB\u884C\u91CD\u8FDE</span>
  <span class="token comment"># \u6CE8\u610F, \u6B64\u8BBE\u7F6E\u53EF\u80FD\u5BFC\u81F4\u5728\u6D77\u5916\u670D\u52A1\u5668\u4E0A\u8FDE\u63A5\u60C5\u51B5\u66F4\u5DEE</span>
  <span class="token key atrule">use-sso-address</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># \u662F\u5426\u5141\u8BB8\u53D1\u9001\u4E34\u65F6\u4F1A\u8BDD\u6D88\u606F</span>
  <span class="token key atrule">allow-temp-session</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">heartbeat</span><span class="token punctuation">:</span>
  <span class="token comment"># \u5FC3\u8DF3\u9891\u7387, \u5355\u4F4D\u79D2</span>
  <span class="token comment"># -1 \u4E3A\u5173\u95ED\u5FC3\u8DF3</span>
  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">5</span>

<span class="token key atrule">message</span><span class="token punctuation">:</span>
  <span class="token comment"># \u4E0A\u62A5\u6570\u636E\u7C7B\u578B</span>
  <span class="token comment"># \u53EF\u9009: string,array</span>
  <span class="token key atrule">post-format</span><span class="token punctuation">:</span> string
  <span class="token comment"># \u662F\u5426\u5FFD\u7565\u65E0\u6548\u7684CQ\u7801, \u5982\u679C\u4E3A\u5047\u5C06\u539F\u6837\u53D1\u9001</span>
  <span class="token key atrule">ignore-invalid-cqcode</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># \u662F\u5426\u5F3A\u5236\u5206\u7247\u53D1\u9001\u6D88\u606F</span>
  <span class="token comment"># \u5206\u7247\u53D1\u9001\u5C06\u4F1A\u5E26\u6765\u66F4\u5FEB\u7684\u901F\u5EA6</span>
  <span class="token comment"># \u4F46\u662F\u517C\u5BB9\u6027\u4F1A\u6709\u4E9B\u95EE\u9898</span>
  <span class="token key atrule">force-fragment</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># \u662F\u5426\u5C06url\u5206\u7247\u53D1\u9001</span>
  <span class="token key atrule">fix-url</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># \u4E0B\u8F7D\u56FE\u7247\u7B49\u8BF7\u6C42\u7F51\u7EDC\u4EE3\u7406</span>
  <span class="token key atrule">proxy-rewrite</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token comment"># \u662F\u5426\u4E0A\u62A5\u81EA\u8EAB\u6D88\u606F</span>
  <span class="token key atrule">report-self-message</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># \u79FB\u9664\u670D\u52A1\u7AEF\u7684Reply\u9644\u5E26\u7684At</span>
  <span class="token key atrule">remove-reply-at</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># \u4E3AReply\u9644\u52A0\u66F4\u591A\u4FE1\u606F</span>
  <span class="token key atrule">extra-reply-data</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>
  <span class="token comment"># \u8DF3\u8FC7 Mime \u626B\u63CF, \u5FFD\u7565\u9519\u8BEF\u6570\u636E</span>
  <span class="token key atrule">skip-mime-scan</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>

<span class="token key atrule">output</span><span class="token punctuation">:</span>
  <span class="token comment"># \u65E5\u5FD7\u7B49\u7EA7 trace,debug,info,warn,error</span>
  <span class="token key atrule">log-level</span><span class="token punctuation">:</span> warn
  <span class="token comment"># \u65E5\u5FD7\u65F6\u6548 \u5355\u4F4D\u5929. \u8D85\u8FC7\u8FD9\u4E2A\u65F6\u95F4\u4E4B\u524D\u7684\u65E5\u5FD7\u5C06\u4F1A\u88AB\u81EA\u52A8\u5220\u9664. \u8BBE\u7F6E\u4E3A 0 \u8868\u793A\u6C38\u4E45\u4FDD\u7559.</span>
  <span class="token key atrule">log-aging</span><span class="token punctuation">:</span> <span class="token number">15</span>
  <span class="token comment"># \u662F\u5426\u5728\u6BCF\u6B21\u542F\u52A8\u65F6\u5F3A\u5236\u521B\u5EFA\u5168\u65B0\u7684\u6587\u4EF6\u50A8\u5B58\u65E5\u5FD7. \u4E3A false \u7684\u60C5\u51B5\u4E0B\u5C06\u4F1A\u5728\u4E0A\u6B21\u542F\u52A8\u65F6\u521B\u5EFA\u7684\u65E5\u5FD7\u6587\u4EF6\u7EED\u5199</span>
  <span class="token key atrule">log-force-new</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># \u662F\u5426\u542F\u7528\u65E5\u5FD7\u989C\u8272</span>
  <span class="token key atrule">log-colorful</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
  <span class="token comment"># \u662F\u5426\u542F\u7528 DEBUG</span>
  <span class="token key atrule">debug</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># \u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F</span>

<span class="token comment"># \u9ED8\u8BA4\u4E2D\u95F4\u4EF6\u951A\u70B9</span>
<span class="token key atrule">default-middlewares</span><span class="token punctuation">:</span> <span class="token important">&amp;default</span>
  <span class="token comment"># \u8BBF\u95EE\u5BC6\u94A5, \u5F3A\u70C8\u63A8\u8350\u5728\u516C\u7F51\u7684\u670D\u52A1\u5668\u8BBE\u7F6E</span>
  <span class="token key atrule">access-token</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token comment"># \u4E8B\u4EF6\u8FC7\u6EE4\u5668\u6587\u4EF6\u76EE\u5F55</span>
  <span class="token key atrule">filter</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>
  <span class="token comment"># API\u9650\u901F\u8BBE\u7F6E</span>
  <span class="token comment"># \u8BE5\u8BBE\u7F6E\u4E3A\u5168\u5C40\u751F\u6548</span>
  <span class="token comment"># \u539F cqhttp \u867D\u7136\u542F\u7528\u4E86 rate_limit \u540E\u7F00, \u4F46\u662F\u57FA\u672C\u6CA1\u63D2\u4EF6\u9002\u914D</span>
  <span class="token comment"># \u76EE\u524D\u8BE5\u9650\u901F\u8BBE\u7F6E\u4E3A\u4EE4\u724C\u6876\u7B97\u6CD5, \u8BF7\u53C2\u8003:</span>
  <span class="token comment"># https://baike.baidu.com/item/%E4%BB%A4%E7%89%8C%E6%A1%B6%E7%AE%97%E6%B3%95/6597000?fr=aladdin</span>
  <span class="token key atrule">rate-limit</span><span class="token punctuation">:</span>
    <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span> <span class="token comment"># \u662F\u5426\u542F\u7528\u9650\u901F</span>
    <span class="token key atrule">frequency</span><span class="token punctuation">:</span> <span class="token number">1</span>  <span class="token comment"># \u4EE4\u724C\u56DE\u590D\u9891\u7387, \u5355\u4F4D\u79D2</span>
    <span class="token key atrule">bucket</span><span class="token punctuation">:</span> <span class="token number">1</span>     <span class="token comment"># \u4EE4\u724C\u6876\u5927\u5C0F</span>

<span class="token key atrule">database</span><span class="token punctuation">:</span> <span class="token comment"># \u6570\u636E\u5E93\u76F8\u5173\u8BBE\u7F6E</span>
  <span class="token key atrule">leveldb</span><span class="token punctuation">:</span>
    <span class="token comment"># \u662F\u5426\u542F\u7528\u5185\u7F6Eleveldb\u6570\u636E\u5E93</span>
    <span class="token comment"># \u542F\u7528\u5C06\u4F1A\u589E\u52A010-20MB\u7684\u5185\u5B58\u5360\u7528\u548C\u4E00\u5B9A\u7684\u78C1\u76D8\u7A7A\u95F4</span>
    <span class="token comment"># \u5173\u95ED\u5C06\u65E0\u6CD5\u4F7F\u7528 \u64A4\u56DE \u56DE\u590D get_msg \u7B49\u4E0A\u4E0B\u6587\u76F8\u5173\u529F\u80FD</span>
    <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>

  <span class="token comment"># \u5A92\u4F53\u6587\u4EF6\u7F13\u5B58\uFF0C \u5220\u9664\u6B64\u9879\u5219\u4F7F\u7528\u7F13\u5B58\u6587\u4EF6(\u65E7\u7248\u884C\u4E3A)</span>
  <span class="token key atrule">cache</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> data/image.db
    <span class="token key atrule">video</span><span class="token punctuation">:</span> data/video.db

<span class="token comment"># \u8FDE\u63A5\u670D\u52A1\u5217\u8868</span>
<span class="token key atrule">servers</span><span class="token punctuation">:</span>
  <span class="token comment"># \u6DFB\u52A0\u65B9\u5F0F\uFF0C\u540C\u4E00\u8FDE\u63A5\u65B9\u5F0F\u53EF\u6DFB\u52A0\u591A\u4E2A\uFF0C\u5177\u4F53\u914D\u7F6E\u8BF4\u660E\u8BF7\u67E5\u770B\u6587\u6863</span>
  <span class="token comment">#- http: # http \u901A\u4FE1</span>
  <span class="token comment">#- ws:   # \u6B63\u5411 Websocket</span>
  <span class="token comment">#- ws-reverse: # \u53CD\u5411 Websocket</span>
  <span class="token comment">#- pprof: #\u6027\u80FD\u5206\u6790\u670D\u52A1\u5668</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br></div></div><p><code>servers</code> \u90E8\u5206\u53C2\u8003\u914D\u7F6E\uFF1A</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">servers</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">http</span><span class="token punctuation">:</span> <span class="token comment"># HTTP \u901A\u4FE1\u8BBE\u7F6E</span>
      <span class="token key atrule">address</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">5700</span> <span class="token comment"># HTTP\u76D1\u542C\u5730\u5740</span>
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> <span class="token number">5</span>      <span class="token comment"># \u53CD\u5411 HTTP \u8D85\u65F6\u65F6\u95F4, \u5355\u4F4D\u79D2\uFF0C&lt;5 \u65F6\u5C06\u88AB\u5FFD\u7565</span>
      <span class="token key atrule">long-polling</span><span class="token punctuation">:</span>   <span class="token comment"># \u957F\u8F6E\u8BE2\u62D3\u5C55</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">false</span>       <span class="token comment"># \u662F\u5426\u5F00\u542F</span>
        <span class="token key atrule">max-queue-size</span><span class="token punctuation">:</span> <span class="token number">2000</span> <span class="token comment"># \u6D88\u606F\u961F\u5217\u5927\u5C0F\uFF0C0 \u8868\u793A\u4E0D\u9650\u5236\u961F\u5217\u5927\u5C0F\uFF0C\u8C28\u614E\u4F7F\u7528</span>
      <span class="token key atrule">middlewares</span><span class="token punctuation">:</span>
        <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*default</span> <span class="token comment"># \u5F15\u7528\u9ED8\u8BA4\u4E2D\u95F4\u4EF6</span>
      <span class="token key atrule">post</span><span class="token punctuation">:</span>           <span class="token comment"># \u53CD\u5411HTTP POST\u5730\u5740\u5217\u8868</span>
      <span class="token comment">#- url: &#39;&#39;                # \u5730\u5740</span>
      <span class="token comment">#  secret: &#39;&#39;             # \u5BC6\u94A5</span>
      <span class="token comment">#  max-retries: 3         # \u6700\u5927\u91CD\u8BD5\uFF0C0 \u65F6\u7981\u7528</span>
      <span class="token comment">#  retries-interval: 1500 # \u91CD\u8BD5\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C0 \u65F6\u7ACB\u5373</span>
      <span class="token comment">#- url: http://127.0.0.1:5701/ # \u5730\u5740</span>
      <span class="token comment">#  secret: &#39;&#39;                  # \u5BC6\u94A5</span>
      <span class="token comment">#  max-retries: 10             # \u6700\u5927\u91CD\u8BD5\uFF0C0 \u65F6\u7981\u7528</span>
      <span class="token comment">#  retries-interval: 1000      # \u91CD\u8BD5\u65F6\u95F4\uFF0C\u5355\u4F4D\u6BEB\u79D2\uFF0C0 \u65F6\u7ACB\u5373</span>

  <span class="token comment"># LambdaServer \u914D\u7F6E</span>
  <span class="token punctuation">-</span> <span class="token key atrule">lambda</span><span class="token punctuation">:</span>
      <span class="token key atrule">type</span><span class="token punctuation">:</span> scf <span class="token comment"># scf: \u817E\u8BAF\u4E91\u51FD\u6570 aws: aws Lambda</span>
      <span class="token key atrule">middlewares</span><span class="token punctuation">:</span>
        <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*default</span> <span class="token comment"># \u5F15\u7528\u9ED8\u8BA4\u4E2D\u95F4\u4EF6</span>

  <span class="token comment"># \u6B63\u5411WS\u8BBE\u7F6E</span>
  <span class="token punctuation">-</span> <span class="token key atrule">ws</span><span class="token punctuation">:</span>
      <span class="token comment"># \u6B63\u5411WS\u670D\u52A1\u5668\u76D1\u542C\u5730\u5740</span>
      <span class="token key atrule">address</span><span class="token punctuation">:</span> 0.0.0.0<span class="token punctuation">:</span><span class="token number">8080</span>
      <span class="token key atrule">middlewares</span><span class="token punctuation">:</span>
        <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*default</span> <span class="token comment"># \u5F15\u7528\u9ED8\u8BA4\u4E2D\u95F4\u4EF6</span>

  <span class="token comment"># \u53CD\u5411WS\u8BBE\u7F6E</span>
  <span class="token punctuation">-</span> <span class="token key atrule">ws-reverse</span><span class="token punctuation">:</span>
      <span class="token comment"># \u53CD\u5411WS Universal \u5730\u5740</span>
      <span class="token comment"># \u6CE8\u610F \u8BBE\u7F6E\u4E86\u6B64\u9879\u5730\u5740\u540E\u4E0B\u9762\u4E24\u9879\u5C06\u4F1A\u88AB\u5FFD\u7565</span>
      <span class="token key atrule">universal</span><span class="token punctuation">:</span> ws<span class="token punctuation">:</span>//your_websocket_universal.server
      <span class="token comment"># \u53CD\u5411WS API \u5730\u5740</span>
      <span class="token key atrule">api</span><span class="token punctuation">:</span> ws<span class="token punctuation">:</span>//your_websocket_api.server
      <span class="token comment"># \u53CD\u5411WS Event \u5730\u5740</span>
      <span class="token key atrule">event</span><span class="token punctuation">:</span> ws<span class="token punctuation">:</span>//your_websocket_event.server
      <span class="token comment"># \u91CD\u8FDE\u95F4\u9694 \u5355\u4F4D\u6BEB\u79D2</span>
      <span class="token key atrule">reconnect-interval</span><span class="token punctuation">:</span> <span class="token number">3000</span>
      <span class="token key atrule">middlewares</span><span class="token punctuation">:</span>
        <span class="token key atrule">&lt;&lt;</span><span class="token punctuation">:</span> <span class="token important">*default</span> <span class="token comment"># \u5F15\u7528\u9ED8\u8BA4\u4E2D\u95F4\u4EF6</span>

  <span class="token comment"># \u53EF\u6DFB\u52A0\u66F4\u591A</span>
  <span class="token comment">#- ws-reverse:</span>
  <span class="token comment">#- ws:</span>
  <span class="token comment">#- http:</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5F00\u542F\u5BC6\u7801\u52A0\u5BC6\u540E\u7A0B\u5E8F\u5C06\u5728\u6BCF\u6B21\u542F\u52A8\u65F6\u8981\u6C42\u8F93\u5165\u89E3\u5BC6\u5BC6\u94A5, \u5BC6\u94A5\u9519\u8BEF\u4F1A\u5BFC\u81F4\u767B\u5F55\u65F6\u63D0\u793A\u5BC6\u7801\u9519\u8BEF.</p><p>\u89E3\u5BC6\u540E\u5BC6\u7801\u5C06\u50A8\u5B58\u5728\u5185\u5B58\u4E2D, \u7528\u4E8E\u81EA\u52A8\u91CD\u8FDE\u7B49\u529F\u80FD. \u6240\u4EE5\u6B64\u52A0\u5BC6\u5E76\u4E0D\u80FD\u9632\u6B62\u5185\u5B58\u8BFB\u53D6.</p><p>\u89E3\u5BC6\u5BC6\u94A5\u5728\u4F7F\u7528\u5B8C\u6210\u540E\u5E76\u4E0D\u4F1A\u7559\u5B58\u5728\u5185\u5B58\u4E2D, \u6240\u4EE5\u53EF\u7528\u76F8\u5BF9\u7B80\u5355\u7684\u5B57\u7B26\u4E32\u4F5C\u4E3A\u5BC6\u94A5.</p></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5206\u7247\u53D1\u9001\u4E3A\u539F\u9177Q\u53D1\u9001\u957F\u6D88\u606F\u7684\u8001\u65B9\u6848, \u53D1\u9001\u901F\u5EA6\u66F4\u4F18/\u517C\u5BB9\u6027\u66F4\u597D</p><p>\u4F46\u5728\u6709\u53D1\u8A00\u9891\u7387\u9650\u5236\u7684\u7FA4\u91CC\uFF0C\u53EF\u80FD\u65E0\u6CD5\u53D1\u9001\u3002</p><p>\u5173\u95ED\u540E\u5C06\u4F18\u5148\u4F7F\u7528\u65B0\u65B9\u6848, \u80FD\u53D1\u9001\u66F4\u957F\u7684\u6D88\u606F,</p><p>\u4F46\u53D1\u9001\u901F\u5EA6\u66F4\u6162\uFF0C\u5728\u90E8\u5206\u8001\u5BA2\u6237\u7AEF\u5C06\u65E0\u6CD5\u89E3\u6790.</p></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5BF9\u4E8E\u4E0D\u9700\u8981\u7684\u901A\u4FE1\u65B9\u5F0F\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528\u6CE8\u91CA\u5C06\u5176\u505C\u7528(\u63A8\u8350)\uFF0C\u6216\u8005\u6DFB\u52A0\u914D\u7F6E <code>disabled: true</code> \u5C06\u5176\u5173\u95ED</p></div><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u5173\u95ED\u5FC3\u8DF3\u670D\u52A1\u53EF\u80FD\u5F15\u8D77\u65AD\u7EBF, \u8BF7\u8C28\u614E\u5173\u95ED</p></div><h2 id="\u5728\u7EBF\u72B6\u6001" tabindex="-1"><a class="header-anchor" href="#\u5728\u7EBF\u72B6\u6001" aria-hidden="true">#</a> \u5728\u7EBF\u72B6\u6001</h2><table><thead><tr><th>\u72B6\u6001</th><th>\u503C</th></tr></thead><tbody><tr><td>\u5728\u7EBF</td><td>0</td></tr><tr><td>\u79BB\u5F00</td><td>1</td></tr><tr><td>\u9690\u8EAB</td><td>2</td></tr><tr><td>\u5FD9</td><td>3</td></tr><tr><td>\u542C\u6B4C\u4E2D</td><td>4</td></tr><tr><td>\u661F\u5EA7\u8FD0\u52BF</td><td>5</td></tr><tr><td>\u4ECA\u65E5\u5929\u6C14</td><td>6</td></tr><tr><td>\u9047\u89C1\u6625\u5929</td><td>7</td></tr><tr><td>Timi\u4E2D</td><td>8</td></tr><tr><td>\u5403\u9E21\u4E2D</td><td>9</td></tr><tr><td>\u604B\u7231\u4E2D</td><td>10</td></tr><tr><td>\u6C6A\u6C6A\u6C6A</td><td>11</td></tr><tr><td>\u5E72\u996D\u4E2D</td><td>12</td></tr><tr><td>\u5B66\u4E60\u4E2D</td><td>13</td></tr><tr><td>\u71AC\u591C\u4E2D</td><td>14</td></tr><tr><td>\u6253\u7403\u4E2D</td><td>15</td></tr><tr><td>\u4FE1\u53F7\u5F31</td><td>16</td></tr><tr><td>\u5728\u7EBF\u5B66\u4E60</td><td>17</td></tr><tr><td>\u6E38\u620F\u4E2D</td><td>18</td></tr><tr><td>\u5EA6\u5047\u4E2D</td><td>19</td></tr><tr><td>\u8FFD\u5267\u4E2D</td><td>20</td></tr><tr><td>\u5065\u8EAB\u4E2D</td><td>21</td></tr></tbody></table><h2 id="\u8BBE\u5907\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u5907\u4FE1\u606F" aria-hidden="true">#</a> \u8BBE\u5907\u4FE1\u606F</h2><p>\u9ED8\u8BA4\u751F\u6210\u7684\u865A\u62DF\u8BBE\u5907\u4FE1\u606F\u6587\u4EF6 <code>device.json</code> \u5982\u4E0B\u6240\u793A:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;display&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;product&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;device&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;board&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;finger_print&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;boot_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;proc_version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;imei&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;brand&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bootloader&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;base_band&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;incremental&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;release&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;codename&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sdk&quot;</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token comment">// \u968F\u673A</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sim_info&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;os_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;mac_address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;ip_address&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;wifi_bssid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;wifi_ssid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;imsi_md5&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;android_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;apn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vendor_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;vendor_os_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><p>\u5728\u5927\u90E8\u5206\u60C5\u51B5\u4E0B \u6211\u4EEC\u53EA\u9700\u8981\u5173\u5FC3 <code>protocol</code> \u5B57\u6BB5:</p><table><thead><tr><th>\u503C</th><th>\u7C7B\u578B</th><th>\u9650\u5236</th></tr></thead><tbody><tr><td>0</td><td>Default/Unset</td><td>\u5F53\u524D\u7248\u672C\u4E0B\u9ED8\u8BA4\u4E3AiPad</td></tr><tr><td>1</td><td>Android Phone</td><td>\u65E0</td></tr><tr><td>2</td><td>Android Watch</td><td>\u65E0\u6CD5\u63A5\u6536 <code>notify</code> \u4E8B\u4EF6\u3001\u65E0\u6CD5\u63A5\u6536\u53E3\u4EE4\u7EA2\u5305\u3001\u65E0\u6CD5\u63A5\u6536\u64A4\u56DE\u6D88\u606F</td></tr><tr><td>3</td><td>MacOS</td><td>\u65E0</td></tr><tr><td>4</td><td>\u4F01\u70B9</td><td>\u53EA\u80FD\u767B\u5F55\u4F01\u70B9\u8D26\u53F7\u6216\u4F01\u70B9\u5B50\u8D26\u53F7</td></tr><tr><td>5</td><td>iPad</td><td>\u65E0</td></tr><tr><td>6</td><td>aPad</td><td>\u65E0</td></tr></tbody></table><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6839\u636E\u534F\u8BAE\u7684\u4E0D\u540C, \u5404\u7C7B\u6D88\u606F\u6709\u6240\u9650\u5236</p></div><h2 id="\u81EA\u5B9A\u4E49\u670D\u52A1\u5668ip" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u670D\u52A1\u5668ip" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u670D\u52A1\u5668IP</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u67D0\u4E9B\u6D77\u5916\u670D\u52A1\u5668\u4F7F\u7528\u9ED8\u8BA4\u5730\u5740\u53EF\u80FD\u4F1A\u5B58\u5728\u94FE\u8DEF\u95EE\u9898, \u6B64\u529F\u80FD\u53EF\u4EE5\u6307\u5B9A go-cqhttp \u8FDE\u63A5\u54EA\u4E9B\u5730\u5740\u4EE5\u8FBE\u5230\u6700\u4F18\u5316.</p></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5047\u5982\u4F60\u5728\u4F7F\u7528 <code>use-sso-address</code> \u540E\u4F9D\u7136\u767B\u5F55\u5931\u8D25\uFF0C\u53EF\u5C1D\u8BD5\u5F00\u542F <code>debug</code> \u6A21\u5F0F\u540E\u900F\u8FC7\u67E5\u770B\u8BB0\u5F55 <br><code>got new server addr: aaa.bbb.ccc.ddd location: xxxx</code><br> \u6765\u83B7\u5F97\u670D\u52A1\u5668IP\uFF0C\u7136\u540E\u624B\u52A8\u8F93\u5165 <code>aaa.bbb.ccc.ddd:xxxx</code> \u5230 <code>address.txt</code></p></div><p>\u5C06\u6587\u4EF6 <code>address.txt</code> \u521B\u5EFA\u5230 <code>go-cqhttp</code> \u5DE5\u4F5C\u76EE\u5F55, \u5E76\u952E\u5165 <code>IP:PORT</code> \u4EE5\u6362\u884C\u7B26\u4E3A\u5206\u5272\u5373\u53EF.</p><p>\u793A\u4F8B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1.1.1.1:53
1.1.2.2:8899
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u4E91\u51FD\u6570\u90E8\u7F72" tabindex="-1"><a class="header-anchor" href="#\u4E91\u51FD\u6570\u90E8\u7F72" aria-hidden="true">#</a> \u4E91\u51FD\u6570\u90E8\u7F72</h2>`,27),m=s("\u4F7F\u7528CustomRuntime\u8FDB\u884C\u90E8\u7F72\uFF0C bootstrap \u6587\u4EF6\u5728 "),k={href:"https://github.com/Mrs4s/go-cqhttp/blob/master/scripts/bootstrap",target:"_blank",rel:"noopener noreferrer"},b=s("scripts/bootstrap"),d=s(" \u4E2D\u5DF2\u7ED9\u51FA\u3002 \u5728\u90E8\u7F72\u524D\uFF0C\u8BF7\u5728\u672C\u5730\u5B8C\u6210\u767B\u5F55\uFF0C\u5E76\u5C06 "),y=n("code",null,"config.yml",-1),q=s(" \uFF0C "),x=n("code",null,"device.json",-1),g=s(" \uFF0C"),h=n("code",null,"bootstrap",-1),v=s(" \u548C "),_=n("code",null,"go-cqhttp",-1),f=s(" \u4E00\u8D77\u6253\u5305\u3002"),w=n("p",null,[s("\u5728\u89E6\u53D1\u5668\u4E2D\u521B\u5EFA\u4E00\u4E2A API \u7F51\u5173\u89E6\u53D1\u5668\uFF0C\u5E76\u542F\u7528\u96C6\u6210\u54CD\u5E94\uFF0C \u521B\u5EFA\u5B8C\u6210\u540E\u5373\u53EF\u901A\u8FC7api\u7F51\u5173\u8BBF\u95EE "),n("code",null,"go-cqhttp"),s(" (\u5EFA\u8BAE\u914D\u7F6E AccessToken)\u3002")],-1),P=n("blockquote",null,[n("p",null,[n("code",null,"scripts/bootstrap"),s(" \u4E2D\u4F7F\u7528\u7684\u5DE5\u4F5C\u8DEF\u5F84\u4E3A /tmp, \u8FD9\u4E2A\u76EE\u5F55\u6700\u5927\u80FD\u5BB9\u4E0B 500M \u6587\u4EF6, \u5982\u9700\u957F\u671F\u4F7F\u7528\uFF0C \u8BF7\u6302\u8F7D\u6587\u4EF6\u5B58\u50A8(CFS).")])],-1);function T(E,S){const a=e("ExternalLinkIcon");return p(),t(l,null,[i,n("p",null,[m,n("a",k,[b,o(a)]),d,y,q,x,g,h,v,_,f]),w,P],64)}var W=r(u,[["render",T]]);export{W as default};
