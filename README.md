
<h1>ExchangeEase — Currency Exchange Application</h1>

<p><strong>ExchangeEase</strong> is a lightweight, user-friendly currency exchange web app that provides live exchange rates, country-wise currency details, conversion history, and support for multiple base currencies. Built with plain HTML, CSS, and JavaScript — perfect for embedding into a portfolio or deploying as a small production app.</p>

<h2>🚀 Live Demo</h2>

<blockquote>
<p>Add your live site URL here:<br>
<a href="https://avishekp18.github.io/CurrencyExchanger/" target="_blank">https://your-username.github.io/ExchangeEase</a><br>
(Replace the placeholder above with the actual URL.)</p>
</blockquote>

<h2>✨ Features</h2>

<ul>
  <li>Live currency exchange rates updated in real-time (via a currency rates API).</li>
  <li>Country-wise currency data (name, code, symbol, flag placeholder).</li>
  <li>Conversion calculator supporting multiple base currencies.</li>
  <li>Conversion history saved locally (browser <code>localStorage</code>).</li>
  <li>Clean, responsive UI built with HTML, CSS, and vanilla JavaScript.</li>
  <li>Easy to extend or integrate into larger projects.</li>
</ul>

<h2>🧩 Tech Stack</h2>

<ul>
  <li><strong>HTML5</strong> — Semantic markup</li>
  <li><strong>CSS3</strong> — Styling and responsive layout (Flexbox / Grid)</li>
  <li><strong>JavaScript (ES6+)</strong> — App logic, API calls, localStorage management</li>
  <li><strong>Git &amp; GitHub</strong> — Version control &amp; hosting (optional GitHub Pages for live demo)</li>
</ul>

<h2>📁 Project Structure (Suggested)</h2>

<pre><code>ExchangeEase/
├── assets/
│   ├── logo.png
│   ├── flags/             # optional country flag images
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   └── api.js
├── index.html
├── README.md
└── LICENSE
</code></pre>

<h2>⚙️ Installation &amp; Setup</h2>

<p><strong>Clone the repo:</strong></p>

<pre><code>git clone https://github.com/your-username/ExchangeEase.git
cd ExchangeEase
</code></pre>

<p><strong>(Optional)</strong> If using a currency API that requires an API key, add it to <code>js/api.js</code> or create a small <code>.env</code> workflow for bundlers. Example:</p>

<pre><code>// js/api.js (example)
const API_KEY = 'YOUR_API_KEY_HERE';
const BASE_URL = `https://api.exchangerate.host/latest`; // or your chosen API
</code></pre>

<p><strong>Open index.html in your browser, or serve locally:</strong></p>

<pre><code># with Python 3
python -m http.server 5500
# then open http://localhost:5500
</code></pre>

<p><strong>For GitHub Pages deployment:</strong></p>

<pre><code># push to your repo and enable GitHub Pages from the repo settings,
# or use gh-pages branch/workflow
</code></pre>

<h2>🧭 Usage</h2>

<ul>
  <li>Select a base currency and a target currency.</li>
  <li>Enter an amount and click <strong>Convert</strong> — the app will fetch the latest rate and display the converted amount.</li>
  <li>Each conversion is stored in the Conversion History panel (persisted in <code>localStorage</code>) so users can review previous conversions.</li>
  <li>Optionally, click a history item to repopulate the converter with the same parameters.</li>
</ul>

<h2>📸 Screenshots</h2>

<blockquote>
<p>Replace these with actual screenshots from your app</p>
</blockquote>

<h2>🔮 Roadmap / Future Enhancements</h2>

<ul>
  <li>Add currency charts (historical rates) with lightweight chart library.</li>
  <li>Add offline caching &amp; service worker for PWA support.</li>
  <li>Add user preferences (default base currency, theme).</li>
  <li>Improve accessibility (ARIA attributes, keyboard support).</li>
  <li>Add multi-language (i18n) support.</li>
</ul>

<h2>🤝 Contributing</h2>

<p>Contributions are welcome! Please follow these steps:</p>

<ol>
  <li>Fork the repository</li>
  <li>Create a branch: <code>git checkout -b feature/YourFeature</code></li>
  <li>Commit your changes: <code>git commit -m "Add some feature"</code></li>
  <li>Push to the branch: <code>git push origin feature/YourFeature</code></li>
  <li>Open a Pull Request</li>
</ol>

<p>Be sure to run the app locally and include screenshots or GIFs for UI changes.</p>

<h2>🧪 Testing</h2>

<ul>
  <li>Manual testing: verify conversion results against a reputable currency site or API.</li>
  <li>Check <code>localStorage</code> to ensure conversion history persists and is correctly formatted.</li>
</ul>

<h2>🔐 Notes on Currency APIs</h2>

<p>When integrating a live currency API, consider these options (some require API keys or have rate limits):</p>

<ul>
  <li><a href="https://api.exchangerate.host" target="_blank">https://api.exchangerate.host</a> — free, no API key required (good starter option).</li>
  <li><a href="https://openexchangerates.org" target="_blank">https://openexchangerates.org</a> — reliable, requires API key for real-time rates.</li>
  <li><a href="https://exchangeratesapi.io" target="_blank">https://exchangeratesapi.io</a> — another popular option (may require key).</li>
</ul>

<p><em>Always check the API provider’s usage limits and pricing before deploying.</em></p>

<h2>📝 License</h2>

<p>This project is licensed under the <strong>MIT License</strong> — see the <a href="./LICENSE">LICENSE</a> file for details.</p>

<h2>🙏 Acknowledgements</h2>

<p>Built with ❤️ using plain HTML, CSS, and JavaScript.<br>
Thanks to the open-source community and public currency APIs.</p>

</body>
</html>
