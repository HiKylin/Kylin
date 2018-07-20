webpackJsonp([0x6e6bdb1340b7],{352:function(n,s){n.exports={data:{markdownRemark:{html:'<p>在我们对一组相同元素作不同表现形式的操作时，在还没有选择器<code class="language-text">:nth-child</code>与<code class="language-text">:nth-of-type</code>时，我们常用到的方法可能是利用 JS 来控制表现形式，或者采用 CSS 选择器类处理这类问题。</p>\n<p>我们需要在 HTML 中加入一些类属性，如果数量非常大时，又或者我们只给奇数或偶数或其它规则的元素定义不同样式呢，这样我们代码就非常不容易维护，或许你会说通过 JS 脚本就容易多了，但是脚本它也是通过改变元素节点的 style 属性或类属性来达到需要的。相对来说，当数据量大了时，都不太容易维护。</p>\n<p>以 CSS 类选择器示例，如下：</p>\n<div class="gatsby-highlight" data-language="html">\n      <pre class="language-html"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>example-red<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Red.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>example-orange<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Orange.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>example-yellow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Yellow.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>example-green<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Green.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>example-blue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Blue.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">.example</span> <span class="token punctuation">{</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.example-red</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.example-orange</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> orange<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.example-yellow</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.example-green</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> green<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector">.example-blue</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>从上面例子我们已经看出，html 与 css 相对已经变得复杂。所幸现在我们可以用 CSS3 子选择器:nth-child 与:nth-of-type 来实现这类需求。</p>\n<hr>\n<h3>CSS3 选择器 :nth-child</h3>\n<p><strong>解释</strong></p>\n<ul>\n<li>:nth-child：选择所有子节点中的元素（包括各种不同元素）</li>\n<li>:nth-of-type：选择所有子节点中的同种元素</li>\n</ul>\n<p><strong>用法</strong></p>\n<ul>\n<li>:nth-child(an+b)</li>\n<li>:nth-of-type(an+b)</li>\n</ul>\n<p><strong>解释</strong></p>\n<p>还记得高中我们所学的数列知识吗？此处 an+b 就是我们高中所学数列公式，可以是等比、等差、差比等，不过此处 a、b 为整数常量，n 为自增倍数，通过组合不同 an+b 可以达到不同的子元素的筛选。</p>\n<hr>\n<h3>常用方式简介</h3>\n<p><strong>简单数字序号写法</strong><br>\n:nth-child(number)：直接匹配第 number 个元素。参数 number 必须为大于 0 的整数。</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">li:nth-child(5)</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token comment">/* 选择第5个元素 */</span></code></pre>\n      </div>\n<p><strong>倍数写法</strong><br>\n:nth-child(an)：匹配所有倍数为 a 的元素。其中参数 an 中的字母 n 不可缺省，它是倍数写法的标志，如 2n、3n、5n</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">li:nth-child(5n)</span> <span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token comment">/* 选择5的倍数的元素 */</span></code></pre>\n      </div>\n<p><strong>倍数分组</strong><br>\n:nth-child(an+b)：a、b 为常量，其中字母 n 和加号+不可缺省，位置不可调换，这是该写法的标志，其中 a,b 均为整数（0、正整数、负整数）。如 3n+1、5n+1、2n-1。</p>\n<ul>\n<li>\n<p>当 a、b 均为正整数，或 b 为负时，是我们常见的写法。</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">li:nth-child(3n + 1)</span> <span class="token punctuation">{</span>\n<span class="token property">background</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token comment">/*匹配第1、第4、第7、…、每3个为一组的第1个LI*/</span>\n\n<span class="token selector">li:nth-child(3n + 5)</span> <span class="token punctuation">{</span>\n<span class="token property">background</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token comment">/*匹配第5、第8、第11、…、从第5个开始每3个为一组的第1个LI*/</span>\n\n<span class="token selector">li:nth-child(5n-1)</span> <span class="token punctuation">{</span>\n<span class="token property">background</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token comment">/*匹配第5-1=4、第10-1=9、…、第5的倍数减1个LI*/</span>\n\n<span class="token selector">li:nth-child(3n±0)</span> <span class="token punctuation">{</span>\n<span class="token property">background</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token comment">/*相当于(3n)*/</span>\n\n<span class="token selector">li:nth-child(±0n + 3)</span> <span class="token punctuation">{</span>\n<span class="token property">background</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token comment">/*相当于(3)*/</span></code></pre>\n      </div>\n</li>\n<li>\n<p>当 a 为负，b 为正时，是比较特别的一种分组我们称之为 反向倍数分组。此处一负一正，均不可缺省，否则无意义。此时与:nth-child(an+1)相似，都是匹配第 1 个，但不同的是它是倒着算的，即从第 b 个开始往回算，固它所匹配的最多也不会超过 b 个。</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">li:nth-child(-3n + 8)</span> <span class="token punctuation">{</span>\n<span class="token property">background</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token comment">/*匹配第8、第5和第2个LI*/</span>\n<span class="token selector">li:nth-child(-n + 8)</span> <span class="token punctuation">{</span>\n<span class="token property">background</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token comment">/*匹配前8个（包括第8个）LI*/</span></code></pre>\n      </div>\n</li>\n</ul>\n<p><strong>奇偶匹配</strong></p>\n<ul>\n<li>:nth-child(odd)：匹配序号为奇数的元素，等同于(2n+1)。</li>\n<li>:nth-child(even)：匹配序号为偶数的元素，等同于(2n+0)及(2n)。</li>\n</ul>\n<hr>\n<h3>技巧示例</h3>\n<ul>\n<li>\n<p>选择第 5 个元素</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">li:nth-child(5)</span> <span class="token punctuation">{</span>\n<span class="token property">background</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n<li>\n<p>选择大于 5 的元素</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">li:nth-child(n + 6)</span> <span class="token punctuation">{</span>\n<span class="token property">background</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n<li>\n<p>选择前 5 个元素</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">li:nth-child(-n + 5)</span> <span class="token punctuation">{</span>\n<span class="token property">background</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n<li>\n<p>从第一个开始，选择每第四个</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">li:nth-child(4n-7)</span> <span class="token punctuation">{</span>\n<span class="token comment">/* or 4n+1 */</span>\n<span class="token property">background</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n</li>\n<li>\n<p>选择奇数或者偶数</p>\n<div class="gatsby-highlight" data-language="css">\n      <pre class="language-css"><code class="language-css"><span class="token selector">li:nth-child(odd)</span> <span class="token punctuation">{</span>\n<span class="token property">background</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token comment">/* or 2n+1 */</span>\n<span class="token selector">li:nth-child(even)</span> <span class="token punctuation">{</span>\n<span class="token property">background</span><span class="token punctuation">:</span> #00f<span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token comment">/* or 2n */</span></code></pre>\n      </div>\n</li>\n</ul>\n<p><strong>扩展</strong></p>\n<ul>\n<li>:nth-last-child(n)</li>\n<li>:nth-last-of-type(n)</li>\n<li>:nth-of-type(n)</li>\n</ul>\n<p>上述三种选择器使用方法与规则类似:nth-child(n),此处就不过多赘述。</p>',frontmatter:{title:"CSS3选择器之nth-child"}}},pathContext:{slug:"2016/05/05/css3-nth-child/",next:{frontmatter:{title:"正则表达式"},fields:{slug:"2015/05/05/RegExp/"}},prev:{frontmatter:{title:"元素居中排版"},fields:{slug:"2017/05/05/css-centered/"}}}}}});
//# sourceMappingURL=path---2016-05-05-css-3-nth-child-b785a51cd8efc5794ec9.js.map