import{_ as t,c as a,a0 as i,o as e}from"./chunks/framework.P9qPzDnn.js";const k=JSON.parse('{"title":"Testing Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"config/testing.md","filePath":"config/testing.md"}'),n={name:"config/testing.md"};function r(o,s,l,p,d,h){return e(),a("div",null,s[0]||(s[0]=[i(`<h1 id="testing-configuration" tabindex="-1">Testing Configuration <a class="header-anchor" href="#testing-configuration" aria-label="Permalink to &quot;Testing Configuration&quot;">​</a></h1><p>Configure testing in your project:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// create-project.config.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  testing: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    framework: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;vitest&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    coverage: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    config: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      // Framework-specific options</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="supported-frameworks" tabindex="-1">Supported Frameworks <a class="header-anchor" href="#supported-frameworks" aria-label="Permalink to &quot;Supported Frameworks&quot;">​</a></h2><ul><li>Vitest (default)</li><li>Jest</li></ul><h2 id="coverage-options" tabindex="-1">Coverage Options <a class="header-anchor" href="#coverage-options" aria-label="Permalink to &quot;Coverage Options&quot;">​</a></h2><table tabindex="0"><thead><tr><th>Option</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td><code>coverage</code></td><td>boolean</td><td><code>true</code></td><td>Enable coverage reporting</td></tr><tr><td><code>threshold</code></td><td>number</td><td><code>80</code></td><td>Coverage threshold</td></tr><tr><td><code>reporter</code></td><td>string[]</td><td><code>[&#39;text&#39;, &#39;html&#39;]</code></td><td>Coverage reporters</td></tr></tbody></table>`,7)]))}const g=t(n,[["render",r]]);export{k as __pageData,g as default};
