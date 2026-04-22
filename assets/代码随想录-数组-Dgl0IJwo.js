import{n as e,o as t,r as n}from"./app-Cs8BO77z.js";import{t as r}from"./plugin-vue_export-helper-CDQIAITX.js";var i=JSON.parse(`{"path":"/posts/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E4%B8%8E%E7%AE%97%E6%B3%95/%E4%BB%A3%E7%A0%81%E9%9A%8F%E6%83%B3%E5%BD%95-%E6%95%B0%E7%BB%84.html","title":"代码随想录","lang":"zh-CN","frontmatter":{"title":"代码随想录","categories":["人工智能与算法"],"description":"数组 二分 直接套用 移除元素 旨在基于原数组本身进行移除特定的某个或某几个元素 常用双指针 快指针 fast : 去前面找能被留下的元素 满指针 slow : 把fast找到的那些能留下的给留下 循环条件：快指针是否溢出 LC.27题解 长度最小的子数组 暴力法：两个内层循环遍历所有子数组 滑动窗口 双指针的一种变种 旨在让快指针不断后移，慢指针视情...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"代码随想录\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-04-03T13:55:16.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ZhiYuan\\",\\"url\\":\\"https://github.com/ZhiYuan-23301024\\"}]}"],["meta",{"property":"og:url","content":"https://zhiyuan-23301024.github.io/ZY-BLOG/ZY-BLOG/posts/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E4%B8%8E%E7%AE%97%E6%B3%95/%E4%BB%A3%E7%A0%81%E9%9A%8F%E6%83%B3%E5%BD%95-%E6%95%B0%E7%BB%84.html"}],["meta",{"property":"og:site_name","content":"ZhiYuan的随笔"}],["meta",{"property":"og:title","content":"代码随想录"}],["meta",{"property":"og:description","content":"数组 二分 直接套用 移除元素 旨在基于原数组本身进行移除特定的某个或某几个元素 常用双指针 快指针 fast : 去前面找能被留下的元素 满指针 slow : 把fast找到的那些能留下的给留下 循环条件：快指针是否溢出 LC.27题解 长度最小的子数组 暴力法：两个内层循环遍历所有子数组 滑动窗口 双指针的一种变种 旨在让快指针不断后移，慢指针视情..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-04-03T13:55:16.000Z"}],["meta",{"property":"article:modified_time","content":"2026-04-03T13:55:16.000Z"}]]},"git":{"createdTime":1775224516000,"updatedTime":1775224516000,"contributors":[{"name":"ZhiYuan-23301024","username":"ZhiYuan-23301024","email":"3100498622@qq.com","commits":1,"url":"https://github.com/ZhiYuan-23301024"}]},"readingTime":{"minutes":1.3,"words":389},"filePathRelative":"posts/人工智能与算法/代码随想录-数组.md","excerpt":"<h2>数组</h2>\\n<h3>二分</h3>\\n<p>直接套用</p>\\n<div class=\\"language- line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code class=\\"language-\\"><span class=\\"line\\"><span>int left = 0;\\\\n</span></span>\\n<span class=\\"line\\"><span>int right = nums.size() - 1;</span></span>\\n<span class=\\"line\\"><span>int middle = 0;</span></span>\\n<span class=\\"line\\"><span>while (left &#x3C;= right) {</span></span>\\n<span class=\\"line\\"><span>\\tmiddle = (left + right) / 2;</span></span>\\n<span class=\\"line\\"><span>\\tif (符合查找条件) {</span></span>\\n<span class=\\"line\\"><span>\\t\\treturn 找到的东西</span></span>\\n<span class=\\"line\\"><span>\\t}</span></span>\\n<span class=\\"line\\"><span>\\tif (移动左边界的条件) {</span></span>\\n<span class=\\"line\\"><span>\\t\\tleft = middle + 1;</span></span>\\n<span class=\\"line\\"><span>\\t}</span></span>\\n<span class=\\"line\\"><span>\\tif (移动右边界的条件) {</span></span>\\n<span class=\\"line\\"><span>\\t\\tright = middle - 1;</span></span>\\n<span class=\\"line\\"><span>\\t}</span></span>\\n<span class=\\"line\\"><span>}</span></span>\\n<span class=\\"line\\"><span>return -1; // 没查找到</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`),a={name:`代码随想录-数组.md`};function o(r,i,a,o,s,c){return t(),e(`div`,null,[...i[0]||=[n(`<h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h2><h3 id="二分" tabindex="-1"><a class="header-anchor" href="#二分"><span>二分</span></a></h3><p>直接套用</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>int left = 0;\\n</span></span>
<span class="line"><span>int right = nums.size() - 1;</span></span>
<span class="line"><span>int middle = 0;</span></span>
<span class="line"><span>while (left &lt;= right) {</span></span>
<span class="line"><span>	middle = (left + right) / 2;</span></span>
<span class="line"><span>	if (符合查找条件) {</span></span>
<span class="line"><span>		return 找到的东西</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if (移动左边界的条件) {</span></span>
<span class="line"><span>		left = middle + 1;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	if (移动右边界的条件) {</span></span>
<span class="line"><span>		right = middle - 1;</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>return -1; // 没查找到</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="移除元素" tabindex="-1"><a class="header-anchor" href="#移除元素"><span>移除元素</span></a></h3><p>旨在基于原数组本身进行移除特定的某个或某几个元素</p><p>常用双指针</p><ul><li>快指针 fast : 去前面找能被留下的元素</li><li>满指针 slow : 把fast找到的那些能留下的给留下</li><li>循环条件：快指针是否溢出</li></ul><p><strong>LC.27题解</strong></p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>class Solution {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 int removeElement(vector&lt;int&gt;&amp; nums, int val) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 int amount = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 if (nums.size() == 0) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 return 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 int fast = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 int slow = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 while (fast != nums.size()) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 if (nums[fast] != val) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 nums[slow] = nums[fast];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 slow++;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 fast++;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 amount++;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 else if (nums[fast] == val) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 fast++;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 return amount;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="长度最小的子数组" tabindex="-1"><a class="header-anchor" href="#长度最小的子数组"><span>长度最小的子数组</span></a></h3><p>暴力法：两个内层循环遍历所有子数组</p><h4 id="滑动窗口" tabindex="-1"><a class="header-anchor" href="#滑动窗口"><span>滑动窗口</span></a></h4><p>双指针的一种变种<br> 旨在让快指针不断后移，慢指针视情况决定是否移动<br><strong>重点在于慢指针如何移动</strong><br> 以及边界条件的判断</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-"><span class="line"><span>class Solution {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 int minSubArrayLen(int s, vector&lt;int&gt;&amp; nums) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 int n = nums.size();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 if (n == 0) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 return 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 int ans = INT_MAX;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 int start = 0, end = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 int sum = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 while (end &lt; n) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 sum += nums[end];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 while (sum &gt;= s) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 ans = min(ans, end - start + 1);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 sum -= nums[start];</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 \xA0 start++;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 \xA0 \xA0 end++;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 \xA0 \xA0 return ans == INT_MAX ? 0 : ans;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>\xA0 \xA0 }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本过程中，end最多比start落后一个身位，并且身位落后刚好就是跳出循环的等价条件，在新循环开始时，end和start同位</p>`,16)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};