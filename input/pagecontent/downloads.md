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
  .epi-page a { color:#2563eb; }
  .epi-page .dl-primary { display:flex; align-items:center; gap:16px; background:#f0f4ff; border:1px solid #bfdbfe; border-radius:10px; padding:20px 22px; margin-bottom:28px; }
  .epi-page .dl-primary .icon { font-size:1.8em; }
  .epi-page .dl-primary .txt { flex:1; }
  .epi-page .dl-primary .txt .t { font-weight:700; color:#003087; font-size:1em; margin-bottom:3px; }
  .epi-page .dl-primary .txt p { font-size:.86em; color:#4b5563; margin:0; }
  .epi-page .dl-primary a.btn { flex-shrink:0; background:#003087; color:#fff; padding:10px 20px; border-radius:8px; font-weight:700; font-size:.9em; text-decoration:none; }
  .epi-page .dl-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:28px; }
  .epi-page .dl-card { background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:18px 20px; }
  .epi-page .dl-card .ctitle { font-weight:700; color:#003087; margin-bottom:10px; font-size:.95em; }
  .epi-page .dl-links { display:flex; flex-wrap:wrap; gap:8px; }
  .epi-page .dl-links a { font-size:.82em; font-weight:600; color:#1d4ed8; text-decoration:none; padding:6px 14px; border-radius:6px; background:#eff6ff; border:1px solid #bfdbfe; }
  @media (max-width:640px){ .epi-page .dl-grid { grid-template-columns:1fr; } .epi-page .dl-primary { flex-direction:column; text-align:center; } }
</style>

<div class="epi-page">

  <div class="hero">
    <div class="eyebrow">Resources</div>
    <h1>Downloads</h1>
    <p>The complete Implementation Guide and its machine-readable definitions and examples, available in every FHIR serialization format.</p>
  </div>

  <div class="dl-primary">
    <div class="icon">📦</div>
    <div class="txt">
      <div class="t">Full Implementation Guide</div>
      <p>The entire IG — HTML pages, definitions, validation information, and more — as a single archive.</p>
    </div>
    <a class="btn" href="../full-ig.zip">Download ZIP</a>
  </div>

  <div class="section-title">Definitions</div>
  <p>Format-specific definition files for the profiles, extensions, value sets, and code systems in this guide.</p>
  <div class="dl-grid">
    <div class="dl-card">
      <div class="ctitle">Conformance definitions</div>
      <div class="dl-links">
        <a href="../definitions.xml.zip">XML</a>
        <a href="../definitions.json.zip">JSON</a>
        <a href="../definitions.ttl.zip">TTL</a>
      </div>
    </div>
    <div class="dl-card">
      <div class="ctitle">Examples</div>
      <div class="dl-links">
        <a href="../examples.xml.zip">XML</a>
        <a href="../examples.json.zip">JSON</a>
        <a href="../examples.ttl.zip">TTL</a>
      </div>
    </div>
  </div>

  <div class="section-title">FHIR NPM package</div>
  <p>Implementers can install this IG as a FHIR package for use with SUSHI, the IG Publisher, and validation tooling. See the <a href="../package.tgz">package (package.tgz)</a> and the <a href="artifacts.html">Artifacts</a> page for the full list of published profiles, terminology, and examples.</p>

</div>
