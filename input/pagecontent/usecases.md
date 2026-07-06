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
.epi-page ul, .epi-page ol { line-height:1.7; color:#374151; margin:0 0 16px; padding-left:22px; }
.epi-page li { margin:0 0 6px; }
.epi-page a { color:#2563eb; text-decoration:none; }
.epi-page a:hover { text-decoration:underline; }

.epi-page .page-nav { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:14px 18px; margin-bottom:32px; display:flex; flex-wrap:wrap; gap:8px; align-items:center; }
.epi-page .page-nav .lbl { font-size:.78em; font-weight:700; color:#6b7280; }
.epi-page .page-nav a { font-size:.78em; font-weight:600; color:#2563eb; text-decoration:none; padding:4px 10px; border-radius:6px; background:#f0f4ff; }
.epi-page .page-nav a:hover { text-decoration:none; background:#e0e7ff; }

.epi-page .card-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:14px; margin-bottom:28px; }
.epi-page .card { background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:20px; }
.epi-page .card .ctitle { font-weight:700; color:#003087; margin-bottom:6px; font-size:.95em; }
.epi-page .card p { font-size:.86em; color:#4b5563; line-height:1.6; margin:0; }

.epi-page .subhead { font-weight:700; color:#003087; font-size:.9em; text-transform:uppercase; letter-spacing:.04em; margin:0 0 8px; }

.epi-page .alert { border-radius:8px; padding:14px 18px; margin:0 0 20px; font-size:.9em; line-height:1.6; }
.epi-page .alert .alabel { font-weight:800; text-transform:uppercase; font-size:.72em; letter-spacing:.1em; display:block; margin-bottom:5px; }
.epi-page .alert-tip { background:#f0fff4; border:1px solid #bbf7d0; border-left:4px solid #1a7f37; color:#14532d; }
.epi-page .alert-tip a { color:#14532d; text-decoration:underline; }

.epi-page table.styled { width:100%; border-collapse:collapse; font-size:.86em; margin:0 0 24px; background:#fff; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; }
.epi-page table.styled thead { background:#f0f4ff; }
.epi-page table.styled th { padding:10px 14px; font-weight:700; color:#374151; font-size:.82em; text-transform:uppercase; letter-spacing:.04em; border-bottom:1px solid #e5e7eb; text-align:left; }
.epi-page table.styled td { padding:10px 14px; border-bottom:1px solid #f3f4f6; color:#374151; vertical-align:top; line-height:1.6; }
.epi-page table.styled tr:last-child td { border-bottom:none; }

@media (max-width:640px){ .epi-page .card-grid { grid-template-columns:1fr; } }
</style>

<div class="epi-page" markdown="1">

<div class="hero">
  <div class="eyebrow">Implementation · ePI Types</div>
  <h1>Use <span>Cases</span></h1>
  <p>ePI resources are arranged into four types and sub-types so implementers can combine only the resources they need for a given scenario.</p>
</div>

<p class="lead">Not all 14 resources are required to support all ePI-related use cases. Different resources can be combined to support various scenarios. To assist implementers in selecting the appropriate resources, ePI resources are arranged into the following four types and sub-types:</p>

<table class="styled">
    <thead>
        <tr>
            <th>ePI Type</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td>
            <td>Bundle, Composition (contained Binary)</td>
            <td>Reproduces the local label template, including section headings, text, bullets, tables, and images, in a semi-structured format.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Includes Type 1 plus: Organization, Medicinal Product Definition, Regulated Product, Manufactured Product Definition (Ingredient, Molecule), Automated Product Description (Ingredient, Description), Packaged Product</td>
            <td>Captures company details (name, identifier, address, type); details regulatory information (product name, category, regulatory status); specifies authorization details (approval date, license number); describes physical properties of the product in its primary package (strength, ingredients, size, color, shape); details the product's final administrable form (e.g., after reconstitution); describes primary and secondary packaging layers.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>Includes Types 1 and 2 plus: Clinical Use Definition, Medication Statement</td>
            <td>Structures clinical particulars (indications, contraindications, interactions, undesirable effects, warnings); provides structured dose instructions for machine-readable use.</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Includes Types 1, 2, and 3, with: fully structured data components replacing semi-structured narrative, Dose Structure for machine-readable dosing, granular clinical particulars for enhanced personalization and computability</td>
            <td>Represents a digital-first, fully structured ePI where all content is encoded as discrete data elements. Narrative text is minimized and embedded within structured components. Supports advanced personalization, computability, and granular control of clinical and dosing information.</td>
        </tr>
    </tbody>
</table>

<p>Refer to <a href="components.html">ePI Components</a> for an overview of in-scope resources or the <a href="artifacts.html">Artifacts page</a> for details on profiles, terminologies, and examples.</p>

<div class="page-nav">
  <span class="lbl">On this page</span>
  <a href="#type1">ePI Type 1</a>
  <a href="#type2">ePI Type 2</a>
  <a href="#type3">ePI Type 3</a>
  <a href="#type4">ePI Type 4</a>
  <a href="#recommendation">Recommendation</a>
</div>

<div class="section-title" id="type1">ePI Type 1</div>

<p><strong>Description:</strong> ePI Type 1 is the minimum requirement for an ePI, enabling the recreation of existing label templates in a semi-structured format. It supports the creation of Healthcare Professional (HCP) labels, Patient Information Leaflets (PILs), or label text for artwork, such as EMA's QRD template.</p>

<div class="subhead">Benefits</div>
<div class="card-grid">
  <div class="card"><p>Ensures compatibility with existing regulatory label formats.</p></div>
  <div class="card"><p>Facilitates digital rendering of labels for web or mobile applications.</p></div>
  <div class="card"><p>Supports multilingual label generation for global accessibility.</p></div>
</div>

<div class="subhead">Use Cases</div>
<ol>
  <li><strong>Regulatory Compliance:</strong> Generates digital versions of approved labels for submission to regulatory authorities.</li>
  <li><strong>Patient Education:</strong> Provides accessible, readable PILs for patients via apps or websites.</li>
  <li><strong>Artwork Generation:</strong> Supplies structured text for packaging and labeling design.</li>
</ol>

<div class="section-title" id="type2">ePI Type 2 (a to f)</div>

<p><strong>Description:</strong> Builds on Type 1 by adding resources to describe the company, product, authorization, physical properties, dose form, and packaging, enabling advanced search and interoperability.</p>

<div class="subhead">Benefits</div>
<div class="card-grid">
  <div class="card"><p>Enhances product identification across global markets.</p></div>
  <div class="card"><p>Supports supply chain transparency and traceability.</p></div>
  <div class="card"><p>Enables cross-border recognition of medicinal products.</p></div>
</div>

<div class="subhead">Use Cases</div>
<p>ePI Type 2 uses resources like Organization, Medicinal Product Definition, Regulated Product, Manufactured Product Definition, Automated Product Description, and Packaged Product to support various scenarios. The table below lists key use cases and the specific resources required for each, making it easier to implement targeted functionality.</p>

<table class="styled">
    <thead>
        <tr>
            <th>Use Case</th>
            <th>Description</th>
            <th>Key Resources</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Advanced Search</td>
            <td>Search by company, product name, license, manufactured form, administrable form, or packaging details.</td>
            <td>Organization, Medicinal Product Definition, Regulated Product, Manufactured Product Definition, Automated Product Description, Packaged Product</td>
        </tr>
        <tr>
            <td>Drug Shortages</td>
            <td>Identify alternative products by company, product, license, manufactured form, and packaging to address shortages.</td>
            <td>Organization, Medicinal Product Definition, Regulated Product, Manufactured Product Definition, Packaged Product</td>
        </tr>
        <tr>
            <td>Cross-border Travel</td>
            <td>Match prescriptions across borders using company and product details.</td>
            <td>Organization, Medicinal Product Definition, Manufactured Product Definition</td>
        </tr>
        <tr>
            <td>Distribution</td>
            <td>Support ordering and distribution with product and pack identifiers (e.g., GTIN, SKUs).</td>
            <td>Organization, Medicinal Product Definition, Regulated Product, Packaged Product</td>
        </tr>
        <tr>
            <td>Allergens</td>
            <td>Identify potential allergens (e.g., lactose, aspartame) in ingredients.</td>
            <td>Manufactured Product Definition (Ingredient)</td>
        </tr>
        <tr>
            <td>Electronic Health</td>
            <td>Support Electronic Medical Records (EMR) and ePrescription by uniquely identifying products and manufacturers. Optionally, differentiate manufactured and administrable forms.</td>
            <td>Organization, Medicinal Product Definition, Regulated Product, Manufactured Product Definition, Automated Product Description</td>
        </tr>
        <tr>
            <td>Pharmacovigilance</td>
            <td>Track products by manufacturer, authorization, and packaging for adverse event reporting.</td>
            <td>Organization, Medicinal Product Definition, Regulated Product, Packaged Product</td>
        </tr>
        <tr>
            <td>Inventory Management</td>
            <td>Optimize stock management using packaging and product details.</td>
            <td>Organization, Medicinal Product Definition, Regulated Product, Packaged Product</td>
        </tr>
    </tbody>
</table>

<div class="section-title" id="type3">ePI Type 3 (a and b)</div>

<p><strong>Description:</strong> Extends Types 1 and 2 with structured clinical particulars and dosing instructions, supporting personalization and interoperability with electronic health services.</p>

<div class="subhead">Benefits</div>
<div class="card-grid">
  <div class="card"><p>Enables tailored clinical decision support for polypharmacy and allergies.</p></div>
  <div class="card"><p>Supports automated dosing reminders via apps or devices.</p></div>
  <div class="card"><p>Enhances patient safety through structured interaction data.</p></div>
</div>

<div class="subhead">Use Cases</div>
<ol>
  <li><strong>Polypharmacy Personalization:</strong> Use structured interaction data to identify drug:drug, drug:food, drug:lab, or drug:other interactions for individual patients.</li>
  <li><strong>Automated Dosing Instructions:</strong> Encode dosing instructions (e.g., "take two 20 mg tablets daily for two weeks") for delivery to mobile apps or eHealth platforms.</li>
  <li><strong>Clinical Decision Support:</strong> Integrate structured clinical particulars into EMR systems to alert healthcare professionals or patients about interactions, contraindications, or warnings.</li>
  <li><strong>Patient Adherence:</strong> Send automated reminders or alerts to patients via apps.</li>
</ol>

<div class="section-title" id="type4">ePI Type 4</div>

<p><strong>Description:</strong> ePI Type 4 adopts a fully structured, digital-first approach, where all content is encoded as discrete data elements using standardized terminologies (e.g., SNOMED, ICD, MED-RT, MedDRA). Narrative text is minimized and embedded within structured components only where necessary. It incorporates the <strong>Dose Structure</strong> for machine-readable dosing information and provides granular control of clinical particulars, enabling advanced personalization, computability, and interoperability.</p>

<div class="subhead">Benefits</div>
<div class="card-grid">
  <div class="card"><div class="ctitle">Maximized Computability</div><p>Fully structured data supports advanced analytics, AI-driven insights, and integration with clinical systems.</p></div>
  <div class="card"><div class="ctitle">Enhanced Personalization</div><p>Granular clinical and dosing data enables tailored patient care, such as customized dosing regimens or interaction alerts.</p></div>
  <div class="card"><div class="ctitle">Interoperability</div><p>Standardized data facilitates seamless data exchange across global healthcare systems.</p></div>
  <div class="card"><div class="ctitle">Improved Accessibility</div><p>Structured data can be transformed into various formats (e.g., tables, apps, or voice assistants) for diverse user needs.</p></div>
  <div class="card"><div class="ctitle">Regulatory Efficiency</div><p>Structured data simplifies updates, submissions, and review by health authorities.</p></div>
</div>

<div class="subhead">Use Cases</div>
<ol>
  <li><strong>Personalized Medicine:</strong> Use granular clinical particulars (e.g., indications, contraindications) to tailor treatment plans based on patient comorbidities, interactions, or conditions.</li>
  <li><strong>Precision Dosing:</strong> Leverage the Dose Structure to encode complex dosing regimens (e.g., "titrate 10 mg daily for 1 week, then 20 mg daily") for integration with smart devices or apps.</li>
  <li><strong>Advanced Clinical Decision Support:</strong> Integrate structured clinical particulars into EMRs to provide real-time alerts for drug interactions, contraindications, or adverse effects. E.g., Alert a clinician if a prescribed drug interacts with a patient's existing medications.</li>
  <li><strong>Pharmacovigilance Analytics:</strong> Use structured adverse effect data (e.g., frequency, severity) to monitor and analyze safety signals across populations.</li>
  <li><strong>Patient Empowerment:</strong> Transform structured data into patient-friendly formats (e.g., voice assistants, apps) to provide tailored instructions or warnings.</li>
  <li><strong>Automation and Content Reuse:</strong> Streamline label updates by modifying discrete data components and reusing those same components in dependent labels, thereby reducing manual editing and errors.</li>
  <li><strong>AI-Driven Insights:</strong> Enable AI models to analyze structured ePI data for drug discovery, interaction prediction, or population health trends.</li>
  <li><strong>Accessibility:</strong> Use structured, multilingual data to deliver tailored health information to underserved populations via low-bandwidth apps.</li>
</ol>

<div class="section-title" id="recommendation">Recommendation</div>

<div class="alert alert-tip">
  <span class="alabel">Recommendation</span>
  <strong>ePI Type 2</strong> remains the recommended starting point for most implementers, as it enables advanced search, cross-border access, and foundational support for electronic health records, ePrescriptions, and allergen identification. For implementers aiming for advanced personalization, computability, and digital transformation, <strong>ePI Type 4</strong> is the ultimate goal, offering fully structured data, machine-readable dosing, and granular clinical control to support next-generation healthcare applications.
</div>

</div>
