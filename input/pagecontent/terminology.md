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

.epi-page .card-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:14px; margin-bottom:28px; }
.epi-page .card { background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:20px; }
.epi-page .card .ctitle { font-weight:700; color:#003087; margin-bottom:6px; font-size:.95em; }
.epi-page .card p { font-size:.86em; color:#4b5563; line-height:1.6; margin:0; }

.epi-page table.styled { width:100%; border-collapse:collapse; font-size:.86em; margin:0 0 24px; background:#fff; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; }
.epi-page table.styled thead { background:#f0f4ff; }
.epi-page table.styled th { padding:10px 14px; font-weight:700; color:#374151; font-size:.82em; text-transform:uppercase; letter-spacing:.04em; border-bottom:1px solid #e5e7eb; text-align:left; }
.epi-page table.styled td { padding:10px 14px; border-bottom:1px solid #f3f4f6; color:#374151; vertical-align:top; line-height:1.6; }
.epi-page table.styled tr:last-child td { border-bottom:none; }

@media (max-width:640px){ .epi-page .card-grid { grid-template-columns:1fr; } }
</style>

<div class="epi-page">

<div class="hero">
  <div class="eyebrow">Controlled Terminology</div>
  <h1>Termin<span>ology</span></h1>
  <p>Controlled terminology gives FHIR a consistent, standardized method for naming identified terms across the ePI.</p>
</div>

<p class="lead">Controlled terminology is a key part of FHIR since it provides a consistent and standardized method for naming identified terms.</p>

<p>Each Resource contains a set of elements and attributes. Some elements are bound to a controlled terminology. The bindings offer various degrees of flexibility:</p>

<div class="section-title">Binding Strengths</div>

<div class="card-grid">
    <div class="card">
        <div class="ctitle">Required</div>
        <p>Required to comply with this specific set of terms.</p>
    </div>
    <div class="card">
        <div class="ctitle">Extensible</div>
        <p>Required to comply with this specific set of terms but additional terms can be added.</p>
    </div>
    <div class="card">
        <div class="ctitle">Preferred</div>
        <p>Not required but encouraged to use these terms to facilitate international harmonization.</p>
    </div>
    <div class="card">
        <div class="ctitle">Example</div>
        <p>Not required. Terms are optional and only presented as an example.</p>
    </div>
</div>

<div class="section-title">Preferred Standards</div>

<p>The following is a list of controlled terminologies that are preferred because they support international harmonization. Refer to Appendix XX for a complete list in-scope elements and their corresponding terminologies.</p>

<table class="styled">
    <thead>
        <tr>
            <th>Topic</th>
            <th>Type of standard</th>
            <th>Preferred Standard</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Language</td>
            <td>International</td>
            <td>ISO 639-1 (Two letter)</td>
        </tr>
        <tr>
            <td>Country code</td>
            <td>International</td>
            <td>ISO 3166-1 alpha-2 (Two letter)</td>
        </tr>
        <tr>
            <td>Pack Type</td>
            <td>EU</td>
            <td>EDQM Standard Terms</td>
        </tr>
        <tr>
            <td>Pack Material</td>
            <td>EU</td>
            <td>EDQM Standard Terms</td>
        </tr>
        <tr>
            <td>Route of administration</td>
            <td>EU</td>
            <td>EDQM Standard Terms</td>
        </tr>
        <tr>
            <td>Pharmaceutical dose form</td>
            <td>EU</td>
            <td>EDQM Standard Terms</td>
        </tr>
        <tr>
            <td>Combined Pharmaceutical dose form</td>
            <td>EU</td>
            <td>EDQM Standard Terms</td>
        </tr>
        <tr>
            <td>Unit of presentation</td>
            <td>EU</td>
            <td>EDQM Standard Terms</td>
        </tr>
        <tr>
            <td>Units of Measure</td>
            <td>International</td>
            <td>EDQM Standard Terms</td>
        </tr>
        <tr>
            <td>Substance code</td>
            <td>US</td>
            <td>FDA’s UNII (from Global Substance Registration System (G-SRS))</td>
        </tr>
        <tr>
            <td>Substance name</td>
            <td>International</td>
            <td>WHO INN</td>
        </tr>
        <tr>
            <td>Colour</td>
            <td>US</td>
            <td>FDA SPL Resources</td>
        </tr>
        <tr>
            <td>Shape</td>
            <td>US</td>
            <td>FDA SPL Resources</td>
        </tr>
        <tr>
            <td>Flavour</td>
            <td>US</td>
            <td>FDA SPL Resources</td>
        </tr>
    </tbody>
</table>

</div>
