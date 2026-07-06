<style>
.epi-page *, .epi-page *::before, .epi-page *::after { box-sizing:border-box; }
.epi-page { font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; color:#111827; }
.epi-page .hero { text-align:center; padding:40px 20px 30px; border-bottom:1px solid #e5e7eb; margin-bottom:36px; }
.epi-page .hero .eyebrow { font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.2em; color:#003087; margin-bottom:12px; }
.epi-page .hero h1 { font-size:2em; font-weight:800; color:#111827; margin:0 0 12px; line-height:1.15; }
.epi-page .hero h1 span { background:linear-gradient(135deg,#003087,#2563eb); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.epi-page .hero p { font-size:.95em; color:#6b7280; max-width:620px; margin:0 auto; line-height:1.6; }
.epi-page .section-title { font-size:1.15em; font-weight:700; color:#111827; margin:38px 0 16px; display:flex; align-items:center; gap:8px; }
.epi-page .section-title::after { content:''; flex:1; height:1px; background:#e5e7eb; margin-left:8px; }
.epi-page p { line-height:1.7; color:#374151; margin:0 0 14px; }
.epi-page .lead { font-size:1.02em; color:#4b5563; }
.epi-page a { color:#2563eb; }
.epi-page .card-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:14px; margin-bottom:28px; }
.epi-page .card { background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:20px; display:flex; flex-direction:column; }
.epi-page .card .icon { font-size:1.4em; margin-bottom:10px; }
.epi-page .card .ctitle { font-weight:700; color:#003087; margin-bottom:6px; font-size:.95em; }
.epi-page .card p { font-size:.86em; color:#4b5563; line-height:1.6; margin:0 0 12px; }
.epi-page .card .card-link { margin-top:auto; font-size:.85em; font-weight:600; color:#2563eb; text-decoration:none; }
.epi-page .card .card-link:hover { text-decoration:underline; }
.epi-page .alert { border-radius:8px; padding:14px 18px; margin:0 0 20px; font-size:.9em; line-height:1.6; }
.epi-page .alert .alabel { font-weight:800; text-transform:uppercase; font-size:.72em; letter-spacing:.1em; display:block; margin-bottom:5px; }
.epi-page .alert-note { background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; color:#1e40af; }
@media (max-width:640px){ .epi-page .card-grid { grid-template-columns:1fr; } }
</style>

<div class="epi-page" markdown="1">

<div class="hero">
  <div class="eyebrow">Appendix 2</div>
  <h1>Regional Showcase &amp; Business <span>Benefits</span></h1>
  <p>How a single FHIR ePI data file adapts to five distinct regional leaflet formats across the ASEAN region while sharing the exact same underlying technology.</p>
</div>

<p class="lead">Adopting the ASEAN FHIR ePI standard does <b>not</b> mean abandoning the familiar, local Patient Information Leaflet (PIL) formats used in your jurisdiction.</p>

<p>By leveraging the FHIR ePI standard, a single structured Medicinal Product Information data file can be automatically transformed into beautiful, interactive, and locally-compliant digital leaflets.</p>

<div class="section-title">Core Business Benefits</div>

<div class="card-grid">
  <div class="card">
    <div class="icon">📝</div>
    <div class="ctitle">Write Once, Publish Anywhere</div>
    <p>Manage your core product data centrally. The presentation layer dynamically adapts the data to meet specific regional regulatory requirements (e.g., varying section headings).</p>
  </div>
  <div class="card">
    <div class="icon">🛡️</div>
    <div class="ctitle">Enhanced Patient Safety</div>
    <p>Move beyond static PDFs. FHIR enables interactive "Clinical Details" featuring automated dosage tables, clear warning summaries, and easily accessible side-effect profiles.</p>
  </div>
  <div class="card">
    <div class="icon">💰</div>
    <div class="ctitle">Cost Efficiency</div>
    <p>Accelerate the transition from costly printed paper inserts to dynamic, responsive digital platforms that are easier to update and maintain.</p>
  </div>
</div>

<div class="section-title">Regional Showcase Gallery</div>

<p>Below are interactive mockups demonstrating how the ePI standard seamlessly adapts to five distinct regional formats within the ASEAN region while sharing the exact same underlying technology. <i>Click the links below to view the interactive mockups in your browser.</i></p>

<div class="card-grid">
  <div class="card">
    <div class="ctitle">Indonesia (BPOM Format)</div>
    <p>Demonstrates full localization into <b>Bahasa Indonesia</b>, featuring the comprehensive 25-section (A–Y) <i>Informasi Produk untuk Pasien</i> structure.</p>
    <a class="card-link" href="examples/epi-indonesia-template.html">👉 View Interactive Mockup</a>
  </div>
  <div class="card">
    <div class="ctitle">Malaysia (RiMUP)</div>
    <p>Showcases the 12-section consumer medication information leaflet format in <b>Bahasa Malaysia</b>.</p>
    <a class="card-link" href="examples/epi-malaysia-rimup.html">👉 View Interactive Mockup</a>
  </div>
  <div class="card">
    <div class="ctitle">Thailand PIL</div>
    <p>Fully localized in <b>Thai (ภาษาไทย)</b> implementing the 7-section national format.</p>
    <a class="card-link" href="examples/epi-thailand.html">👉 View Interactive Mockup</a>
  </div>
  <div class="card">
    <div class="ctitle">Philippines PIL</div>
    <p>Features the standard 21-point patient information leaflet layout presented entirely in layperson English.</p>
    <a class="card-link" href="examples/epi-philippines-template.html">👉 View Interactive Mockup</a>
  </div>
  <div class="card">
    <div class="ctitle">ASEAN Core Template</div>
    <p>A unified baseline structure supporting 19 sections for cross-border harmonization.</p>
    <a class="card-link" href="examples/epi-asean-template.html">👉 View Interactive Mockup</a>
  </div>
</div>

<div class="alert alert-note">
<span class="alabel">Note for Implementers</span>
All mockups above are "ePI Type 3" showcases. They feature interactive tabs separating regulatory document metadata, the localized leaflet composition, and tabular clinical details.
</div>

</div>
