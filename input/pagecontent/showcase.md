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
  .epi-page p { line-height:1.7; color:#374151; }
  .epi-page a { color:#2563eb; }
  .epi-page .alert { border-radius:8px; padding:14px 18px; margin:0 0 20px; font-size:.9em; line-height:1.6; }
  .epi-page .alert .alabel { font-weight:800; text-transform:uppercase; font-size:.72em; letter-spacing:.1em; display:block; margin-bottom:5px; }
  .epi-page .alert-note { background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; color:#1e40af; }

  /* Showcase gallery (existing structure preserved) */
  .sc-gallery { margin-top: 1.5em; }
  .sc-card {
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    margin-bottom: 2em;
    overflow: hidden;
    background: #fff;
  }
  .sc-card > .sc-head {
    padding: 0.75em 1em;
    background: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
  }
  .sc-card > .sc-head h4 { margin: 0 0 0.25em 0; color:#003087; }
  .sc-card > .sc-head p { margin: 0; color: #6b7280; font-size: 0.9em; }
  .sc-card iframe {
    width: 100%;
    height: 640px;
    border: 0;
    display: block;
  }
  .sc-card .sc-actions {
    padding: 0.6em 1em;
    border-top: 1px solid #e5e7eb;
    font-size: 0.9em;
  }
  .sc-card .sc-actions a { color:#2563eb; }
  .sc-badge {
    display: inline-block;
    font-size: 0.72em;
    font-weight: 600;
    color: #2563eb;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 999px;
    padding: 0.1em 0.6em;
    margin-left: 0.5em;
    vertical-align: middle;
  }
</style>

<div class="epi-page" markdown="1">

<div class="hero">
  <div class="eyebrow">Interactive · ePI Renderings</div>
  <h1>ePI HTML <span>Showcase</span></h1>
  <p>A single, centrally-managed FHIR ePI data set, transformed into locally-compliant, patient-friendly digital leaflets across different APAC markets — <i>write once, publish anywhere</i>.</p>
</div>

<div class="section-title">Showcase: ePI HTML Renderings</div>

This page showcases interactive HTML renderings of electronic Product Information (ePI). Each rendering is driven by structured **HL7 FHIR ePI** data and demonstrates how a single, centrally-managed Medicinal Product Information data set can be transformed into locally-compliant, patient-friendly digital leaflets across different APAC markets — *write once, publish anywhere*.

<div class="alert alert-note">
<span class="alabel">Note</span>
The renderings below are interactive <b>ePI Type 3</b> showcases. They feature tabs separating regulatory document metadata, the localized leaflet composition, and tabular clinical details. They are illustrative mockups presented here to demonstrate the presentation layer; the underlying FHIR instance published with this IG is listed at the bottom of the page.
</div>

<div class="sc-gallery" markdown="1">

<div class="sc-card">
  <div class="sc-head">
    <h4>ASEAN Core Template <span class="sc-badge">Regional harmonized</span></h4>
    <p>A unified baseline structure supporting 19 sections for cross-border harmonization.</p>
  </div>
  <iframe src="examples/epi-asean-template.html" title="ASEAN Core Template ePI rendering" loading="lazy"></iframe>
  <div class="sc-actions">👉 <a href="examples/epi-asean-template.html" target="_blank" rel="noopener">Open full-page rendering in a new tab</a></div>
</div>

<div class="sc-card">
  <div class="sc-head">
    <h4>Indonesia (BPOM Format)</h4>
    <p>Full localization into <b>Bahasa Indonesia</b>, featuring the comprehensive 25-section (A–Y) <i>Informasi Produk untuk Pasien</i> structure.</p>
  </div>
  <iframe src="examples/epi-indonesia-template.html" title="Indonesia ePI rendering" loading="lazy"></iframe>
  <div class="sc-actions">👉 <a href="examples/epi-indonesia-template.html" target="_blank" rel="noopener">Open full-page rendering in a new tab</a></div>
</div>

<div class="sc-card">
  <div class="sc-head">
    <h4>Malaysia (RiMUP)</h4>
    <p>The 12-section consumer medication information leaflet format in <b>Bahasa Malaysia</b>.</p>
  </div>
  <iframe src="examples/epi-malaysia-rimup.html" title="Malaysia RiMUP ePI rendering" loading="lazy"></iframe>
  <div class="sc-actions">👉 <a href="examples/epi-malaysia-rimup.html" target="_blank" rel="noopener">Open full-page rendering in a new tab</a></div>
</div>

<div class="sc-card">
  <div class="sc-head">
    <h4>Thailand PIL</h4>
    <p>Fully localized in <b>Thai (ภาษาไทย)</b>, implementing the 7-section national format.</p>
  </div>
  <iframe src="examples/epi-thailand.html" title="Thailand PIL ePI rendering" loading="lazy"></iframe>
  <div class="sc-actions">👉 <a href="examples/epi-thailand.html" target="_blank" rel="noopener">Open full-page rendering in a new tab</a></div>
</div>

<div class="sc-card">
  <div class="sc-head">
    <h4>Philippines PIL</h4>
    <p>The standard 21-point patient information leaflet layout presented entirely in layperson English.</p>
  </div>
  <iframe src="examples/epi-philippines-template.html" title="Philippines PIL ePI rendering" loading="lazy"></iframe>
  <div class="sc-actions">👉 <a href="examples/epi-philippines-template.html" target="_blank" rel="noopener">Open full-page rendering in a new tab</a></div>
</div>

</div>

<div class="section-title">Underlying FHIR ePI instance</div>

The structured FHIR example instance published with this Implementation Guide:

- **[Bundle: Paxlovid — Singapore SmPC](Bundle-epi-paxlovid-sgp-smpc.html)** — a complete ePI document Bundle. See the [Artifacts](artifacts.html) page for the full list of published examples and profiles.

</div>
