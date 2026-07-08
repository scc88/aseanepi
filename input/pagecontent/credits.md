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
.epi-page .card { background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:20px; }
.epi-page .card .ctitle { font-weight:700; color:#003087; margin-bottom:6px; font-size:.95em; }
.epi-page .card p { font-size:.86em; color:#4b5563; line-height:1.6; margin:0; }
.epi-page ul.ack { list-style:none; padding:0; margin:0 0 24px; }
.epi-page ul.ack li { background:#f9fafb; border:1px solid #e5e7eb; border-radius:8px; padding:12px 16px; margin-bottom:10px; font-size:.9em; color:#374151; line-height:1.6; }
.epi-page .alert { border-radius:8px; padding:14px 18px; margin:0 0 20px; font-size:.9em; line-height:1.6; }
.epi-page .alert .alabel { font-weight:800; text-transform:uppercase; font-size:.72em; letter-spacing:.1em; display:block; margin-bottom:5px; }
.epi-page .alert-note { background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; color:#1e40af; }
.epi-page .alert-note a { color:#1e40af; }
@media (max-width:640px){ .epi-page .card-grid { grid-template-columns:1fr; } }
</style>

<div class="epi-page" markdown="1">

<div class="hero">
  <div class="eyebrow">About</div>
  <h1>Credits</h1>
</div>

<p class="lead">This Implementation Guide is published by the <b>Asia Partnership Conference of Pharmaceutical Associations (APAC)</b> to facilitate the implementation and understanding of electronic Product Information (ePI) across APAC markets.</p>

<div class="section-title">Base specification</div>

<div class="alert alert-note" markdown="1">
<span class="alabel">Built on the global core</span>
This IG is an extension of, and is designed to be consistent with, the <b><a href="https://hl7.org/fhir/uv/emedicinal-product-info/">Vulcan Global Core ePI Implementation Guide</a></b> developed by the HL7 Biomedical Research &amp; Regulation (BR&amp;R) Work Group and the Vulcan Accelerator. Terminology, profiles and best-practice guidance derive from that global core.
</div>

<div class="section-title">Acknowledgements</div>

<ul class="ack">
  <li>Asia Partnership Conference of Pharmaceutical Associations (APAC)</li>
  <li>HL7 International and the Vulcan Accelerator</li>
</ul>

<div class="section-title">Contact</div>

<p>For questions or feedback on this Implementation Guide, please raise an issue on the project repository.</p>

</div>
