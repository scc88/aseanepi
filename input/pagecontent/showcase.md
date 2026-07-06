<head>
<style>
  .sc-gallery { margin-top: 1.5em; }
  .sc-card {
    border: 1px solid #e5e7eb;
    border-radius: 8px;
    margin-bottom: 2em;
    overflow: hidden;
    background: #fff;
  }
  .sc-card > .sc-head {
    padding: 0.75em 1em;
    background: #f9fafb;
    border-bottom: 1px solid #e5e7eb;
  }
  .sc-card > .sc-head h4 { margin: 0 0 0.25em 0; }
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
</head>

### Showcase: ePI HTML Renderings

This page showcases interactive HTML renderings of electronic Product Information (ePI). Each rendering is driven by structured **HL7 FHIR ePI** data and demonstrates how a single, centrally-managed Medicinal Product Information data set can be transformed into locally-compliant, patient-friendly digital leaflets across different APAC markets — *write once, publish anywhere*.

> **Note:** The renderings below are interactive **ePI Type 3** showcases. They feature tabs separating regulatory document metadata, the localized leaflet composition, and tabular clinical details. They are illustrative mockups presented here to demonstrate the presentation layer; the underlying FHIR instance published with this IG is listed at the bottom of the page.

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

### Underlying FHIR ePI instance

The structured FHIR example instance published with this Implementation Guide:

- **[Bundle: Paxlovid — Singapore SmPC](Bundle-epi-paxlovid-sgp-smpc.html)** — a complete ePI document Bundle. See the [Artifacts](artifacts.html) page for the full list of published examples and profiles.
