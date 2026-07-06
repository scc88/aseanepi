<style>
  .epi-page *, .epi-page *::before, .epi-page *::after { box-sizing:border-box; }
  .epi-page { font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif; color:#111827; }

  /* HERO */
  .epi-page .hero { text-align:center; padding:48px 20px 36px; border-bottom:1px solid #e5e7eb; margin-bottom:40px; }
  .epi-page .hero .eyebrow { font-size:.72em; font-weight:700; text-transform:uppercase; letter-spacing:.2em; color:#003087; margin-bottom:14px; }
  .epi-page .hero h1 { font-size:2em; font-weight:800; color:#111827; margin:0 0 12px; line-height:1.15; }
  .epi-page .hero h1 span { background:linear-gradient(135deg,#003087,#2563eb); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
  .epi-page .hero p { font-size:.95em; color:#6b7280; max-width:640px; margin:0 auto; line-height:1.6; }

  /* JUMP NAV */
  .epi-page .page-nav { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:14px 18px; margin-bottom:36px; display:flex; flex-wrap:wrap; gap:8px; align-items:center; }
  .epi-page .page-nav .lbl { font-size:.78em; font-weight:700; color:#6b7280; align-self:center; }
  .epi-page .page-nav a { font-size:.78em; font-weight:600; color:#2563eb; text-decoration:none; padding:4px 10px; border-radius:6px; background:#f0f4ff; }

  /* SECTION TITLE */
  .epi-page .section-title { font-size:1.15em; font-weight:700; color:#111827; margin:38px 0 16px; display:flex; align-items:center; gap:8px; scroll-margin-top:80px; }
  .epi-page .section-title::after { content:''; flex:1; height:1px; background:#e5e7eb; margin-left:8px; }
  .epi-page .sub-title { font-size:.98em; font-weight:700; color:#003087; margin:24px 0 10px; }

  /* PROSE */
  .epi-page p { line-height:1.7; color:#374151; margin:0 0 14px; }
  .epi-page .lead { font-size:1.02em; color:#4b5563; }
  .epi-page ul, .epi-page ol { color:#374151; line-height:1.7; margin:0 0 16px; padding-left:22px; }
  .epi-page li { margin-bottom:6px; }

  /* CARDS */
  .epi-page .card-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(240px,1fr)); gap:14px; margin-bottom:28px; }
  .epi-page .card { background:#f9fafb; border:1px solid #e5e7eb; border-radius:10px; padding:20px; }
  .epi-page .card .icon { font-size:1.4em; margin-bottom:10px; }
  .epi-page .card .ctitle { font-weight:700; color:#003087; margin-bottom:6px; font-size:.95em; }
  .epi-page .card p { font-size:.86em; color:#4b5563; line-height:1.6; margin:0; }
  .epi-page .card ul { font-size:.86em; color:#4b5563; margin:0; padding-left:20px; }

  /* TOPIC CARDS */
  .epi-page .topic-grid { display:grid; grid-template-columns:1fr 1fr 1fr; gap:14px; margin-bottom:36px; }
  .epi-page .topic-card { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:18px; }
  .epi-page .topic-card .icon { font-size:1.3em; margin-bottom:8px; }
  .epi-page .topic-card .ttitle { font-weight:700; color:#003087; margin-bottom:5px; font-size:.88em; }
  .epi-page .topic-card p { font-size:.79em; color:#4b5563; line-height:1.5; }

  /* MINI CARDS */
  .epi-page .mini-grid { display:grid; grid-template-columns:1fr 1fr; gap:14px; margin-bottom:28px; }
  .epi-page .mini-card { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:16px 18px; }
  .epi-page .mini-card .mtitle { font-weight:700; color:#111827; font-size:.88em; margin-bottom:6px; display:flex; align-items:center; gap:8px; }
  .epi-page .mini-card p { font-size:.8em; color:#4b5563; line-height:1.55; margin:0; }

  /* ALERTS */
  .epi-page .alert { border-radius:8px; padding:14px 18px; margin:0 0 20px; font-size:.88em; line-height:1.6; }
  .epi-page .alert .alabel { font-weight:800; text-transform:uppercase; font-size:.72em; letter-spacing:.1em; display:block; margin-bottom:5px; }
  .epi-page .alert-note { background:#eff6ff; border:1px solid #bfdbfe; border-left:4px solid #2563eb; color:#1e40af; }
  .epi-page .alert-important { background:#fff8c5; border:1px solid #fde68a; border-left:4px solid #f59e0b; color:#78350f; }
  .epi-page .alert-tip { background:#f0fff4; border:1px solid #bbf7d0; border-left:4px solid #1a7f37; color:#14532d; }
  .epi-page .alert ul { margin:6px 0 0; padding-left:20px; color:inherit; }
  .epi-page .alert li { color:inherit; }

  /* RULE SECTIONS */
  .epi-page .rule-section { margin-bottom:28px; }
  .epi-page .rule-header { background:#f0f4ff; border:1px solid #e5e7eb; border-bottom:none; border-radius:10px 10px 0 0; padding:10px 16px; font-weight:700; color:#1d4ed8; font-size:.88em; }
  .epi-page .rule-body { background:#fff; border:1px solid #e5e7eb; border-radius:0 0 10px 10px; overflow:hidden; }
  .epi-page .rule-row { display:grid; grid-template-columns:230px 1fr; gap:0; border-bottom:1px solid #f3f4f6; }
  .epi-page .rule-row:last-child { border-bottom:none; }
  .epi-page .rule-col { padding:10px 14px; font-size:.82em; line-height:1.6; color:#374151; }
  .epi-page .rule-col:first-child { background:#fafafa; border-right:1px solid #f3f4f6; font-weight:600; color:#111827; }

  /* STYLED / REF / CLASS TABLES */
  .epi-page table.styled, .epi-page table.ref-table, .epi-page table.class-table, .epi-page table.example-table { width:100%; border-collapse:collapse; font-size:.84em; margin:0 0 24px; background:#fff; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; }
  .epi-page table.styled thead, .epi-page table.ref-table thead, .epi-page table.class-table thead { background:#f0f4ff; }
  .epi-page table.styled th, .epi-page table.ref-table th, .epi-page table.class-table th { padding:10px 14px; font-weight:700; color:#374151; font-size:.82em; text-transform:uppercase; letter-spacing:.04em; border-bottom:1px solid #e5e7eb; text-align:left; }
  .epi-page table.styled td, .epi-page table.ref-table td, .epi-page table.class-table td { padding:10px 14px; border-bottom:1px solid #f3f4f6; color:#374151; vertical-align:top; line-height:1.6; }
  .epi-page table.styled tr:last-child td, .epi-page table.ref-table tr:last-child td, .epi-page table.class-table tr:last-child td { border-bottom:none; }
  .epi-page table.styled.dark thead, .epi-page table.example-table thead { background:#003087; }
  .epi-page table.styled.dark th, .epi-page table.example-table th { color:#fff; padding:10px 14px; font-weight:700; font-size:.82em; text-align:left; }
  .epi-page table.example-table td { padding:10px 14px; border-bottom:1px solid #f3f4f6; vertical-align:top; line-height:1.6; color:#374151; }
  .epi-page table.example-table tr:last-child td { border-bottom:none; }
  .epi-page .class-name { font-family:ui-monospace,'SF Mono',monospace; font-weight:700; color:#2563eb; }
  .epi-page .class-css { font-family:ui-monospace,'SF Mono',monospace; font-size:.92em; color:#6b7280; }

  /* CHIPS */
  .epi-page .table-tags { display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-bottom:20px; }
  .epi-page .tag-chip { background:#f0f4ff; border:1px solid #bfdbfe; border-radius:6px; padding:6px 10px; font-family:ui-monospace,'SF Mono',monospace; font-size:.8em; color:#1d4ed8; }
  .epi-page .tag-chip span { display:block; font-family:sans-serif; color:#6b7280; font-size:.85em; margin-top:2px; }
  .epi-page .chip { display:inline-block; background:#f0f4ff; border:1px solid #bfdbfe; border-radius:6px; padding:5px 10px; font-size:.82em; color:#1d4ed8; font-weight:600; }

  /* REF LIST */
  .epi-page .ref-list { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:20px 24px; margin-bottom:20px; }
  .epi-page .ref-list h4 { font-size:.88em; font-weight:700; color:#003087; margin:0 0 12px; }
  .epi-page .ref-list ul { list-style:none; padding:0; margin:0; }
  .epi-page .ref-list ul li { font-size:.82em; color:#374151; line-height:1.7; padding:5px 0; border-bottom:1px solid #f3f4f6; }
  .epi-page .ref-list ul li:last-child { border-bottom:none; }
  .epi-page .ref-list ul li a { color:#2563eb; text-decoration:none; }

  /* CODE */
  .epi-page code { font-family:ui-monospace,'SF Mono',monospace; font-size:.88em; background:#f0f4ff; color:#2563eb; padding:1px 5px; border-radius:3px; }
  .epi-page pre { font-family:ui-monospace,'SF Mono',monospace; font-size:.82em; color:#1e293b; background:#f8fafc; border:1px solid #e5e7eb; border-radius:8px; padding:14px; overflow-x:auto; white-space:pre; line-height:1.5; margin:0 0 14px; }
  .epi-page .example-table pre { font-size:.9em; background:#f8fafc; border-radius:6px; padding:10px; white-space:pre; margin:0; }
  .epi-page .mono { font-family:ui-monospace,'SF Mono',monospace; color:#2563eb; }
  .epi-page .do { color:#065f46; font-weight:700; }
  .epi-page .dont { color:#991b1b; font-weight:700; }

  @media (max-width:640px){
    .epi-page .card-grid, .epi-page .topic-grid, .epi-page .mini-grid, .epi-page .table-tags { grid-template-columns:1fr; }
    .epi-page .rule-row { grid-template-columns:1fr; }
  }
</style>

<div class="epi-page">

  <div class="hero">
    <div class="eyebrow">ASEAN ePI · Best Practice</div>
    <h1>Technical Style Guide <span>Recommendations</span></h1>
    <p>Standardized instructions for structuring ePI content — ensuring the consistency, clarity, and quality of ePIs across organizations, jurisdictions, and regulators. These recommendations are subject to local regulatory rules.</p>
  </div>

  <div class="page-nav">
    <span class="lbl">Jump to:</span>
    <a href="#objective">Objective</a>
    <a href="#introduction">Introduction</a>
    <a href="#scope">Scope</a>
    <a href="#epi-structure">ePI Structure</a>
    <a href="#style-sheet">Style vs. Style Sheet</a>
    <a href="#accessibility">Accessibility</a>
    <a href="#charset">Character Set</a>
    <a href="#narrative">Narrative Text</a>
    <a href="#paragraphs">Paragraphs</a>
    <a href="#style-attribute">Style Classes</a>
    <a href="#lists">Lists</a>
    <a href="#hyperlinks">Hyperlinks</a>
    <a href="#escape">Escape Chars</a>
    <a href="#symbols">Symbols</a>
    <a href="#diacriticals">Diacriticals</a>
    <a href="#tables">Tables</a>
    <a href="#images">Images</a>
    <a href="#media">Audio &amp; Video</a>
    <a href="#languages">Languages</a>
    <a href="#math">Math</a>
    <a href="#references">References</a>
  </div>

  <div class="section-title" id="objective">Objective</div>
  <p class="lead">To provide standardized instructions for structuring ePI content; and ensure the consistency, clarity and quality of ePIs across organizations, jurisdictions, and regulators. These recommendations are subject to local regulatory rules. Refer to local regulatory guidance for actual requirements.</p>

  <div class="section-title" id="introduction">Introduction</div>
  <p>A Technical Style Guide defines the standard format and structure for writing technical documents within or across organizations. This is of great value to the international ePI project because the associated technologies and standards (e.g., XML, HTML, style sheets) are highly flexible and offer a wide array of options.</p>
  <p>The risk of divergence is therefore high if all organizations and regulators across jurisdictions chose to structure their ePIs in different ways. Although still compliant with FHIR, the resulting divergence could complicate global implementation and maintenance. This results in an unnecessary increase in software development and maintenance costs and process inefficiencies.</p>
  <p>Through standardization, we ensure ePI content is more consistent, accessible, easier to maintain, interoperable across systems, is more search engine friendly, and more friendly for artificial intelligence.</p>
  <p>The content of this guide is not novel. It consolidates a selection of common best practices from Health Level 7 (HL7), web development, and web standards for convenience.</p>

  <div class="section-title" id="scope">Scope</div>
  <div class="card-grid">
    <div class="card">
      <div class="icon">✅</div>
      <div class="ctitle">In-scope</div>
      <ul>
        <li>XML and JSON structure, formatting, attributes, and elements</li>
        <li>HTML and XHTML structure, formatting, attributes, and elements</li>
        <li>Chapters 7-11 (except section 4 of chapter 9) and 15 of the HTML 4.0 standard</li>
        <li>Text, tables, images, and internally contained style attributes</li>
      </ul>
    </div>
    <div class="card">
      <div class="icon">🚫</div>
      <div class="ctitle">Out of scope</div>
      <ul>
        <li>Regulatory content requirements</li>
        <li>Content style (e.g., Font, font colour, font size)</li>
        <li>External style attributes from a style sheet</li>
      </ul>
    </div>
  </div>

  <div class="section-title" id="epi-structure">Guidance — ePI Structure (XML, JSON, XHTML)</div>
  <p>By default, the structured elements of a FHIR document are based on Extensible Markup Language (XML) or JavaScript Object Notation (JSON).</p>
  <p>However, there is an exception for Narrative text (E.g., paragraphs, lists, images, tables, hypertext links). Whether the ePI is XML or JSON, the narrative text is captured as EXtensible HyperText Markup Language (XHTML) or Markdown.</p>
  <p>Markdown is a simplified standard for structuring plain text. In an ePI, Markdown is used in data fields that only require brief, basic text (E.g., Document title, section heading title).</p>
  <p>XHTML is used in data fields that require full rich narrative text of varying lengths (E.g., paragraphs of text, tables, lists, images in the section content of a drug label).</p>
  <p>For example, here is an ePI section structured with XML (Red) and narrative as XHTML (Blue):</p>
  <pre>
&lt;section id="7c4f5a60-0d4e-ee11-be6e-000d3aaa06fe"&gt;
    &lt;title value="1. What X is and what it is used for" /&gt;
    &lt;code&gt;
      &lt;coding&gt;
        &lt;system value="https://spor.ema.europa.eu/v1/lists/200000029659/terms/" /&gt;
        &lt;code value="200000029895" /&gt;
        &lt;display value="1. What X is and what it is used for" /&gt;
      &lt;/coding&gt;
    &lt;/code&gt;
    &lt;text&gt;
      &lt;status value="generated" /&gt;
      &lt;div xmlns="http://www.w3.org/1999/xhtml"&gt;
        &lt;p&gt;The therapeutic indications in line with section 4.1 of the SmPC should be stated here. It should be stated in which age group the medicine is indicated, specifying the age limits, e.g. “X is used to treat {specify indication} in”.&lt;/p&gt;
      &lt;/div&gt;
    &lt;/text&gt;
&lt;/section&gt;
    </pre>
  <p>For example, here is an ePI section structured with JSON (Red) and the narrative as XHTML (Blue):</p>
  <pre>
{
  "title" : "1. What X is and what it is used for",
  "code" : {
    "coding" : [
      {
        "system" : "https://spor.ema.europa.eu/v1/lists/200000029659/terms/",
        "code" : "200000029895",
        "display" : "1. What X is and what it is used for"
      }
    ]
  },
  "text" : {
    "status" : "additional",
    "div" : "&lt;div xmlns=\"http://www.w3.org/1999/xhtml\"&gt;&lt;p&gt;The therapeutic indications in line with section 4.1 of the SmPC should be stated here. It should be stated in which age group the medicine is indicated, specifying the age limits, e.g. “X is used to treat {specify indication} in&lt;/p&gt;&lt;/div&gt;"
  }
}
    </pre>

  <div class="section-title" id="style-sheet">Style vs. Inline Text Formatting vs. Style Sheet</div>
  <p>Text style refers to visual characteristics applied to the whole document to achieve an overall look and feel. E.g., Font type, Font size, Font colour, Table borders, Table cell shading, type of bullets.</p>
  <p>Inline text formatting refers to visual characteristics applied to specific portions of text within the document. E.g., <b>Bold</b>, <i>italic</i>, superscript, subscript, hypertext link.</p>
  <p>Inline text lives within a ePI document. Styles are applied from outside the document using a Style Sheet. A style sheet is made up of one or both of the following:</p>
  <ul>
    <li><b>Extensible Stylesheet Language Transformations (XSLT)</b> is used to transform content from one document format to another (e.g., convert XML to user friendly PDF); move content around (e.g., move Section 2 before Section 1); or transform content (e.g., transform this number format from “10000000” to “10,000,000” or “1x10<sup>7</sup>”).</li>
    <li><b>Cascading Style Sheet (CSS)</b> is used to style the content after transformation. E.g., make all text in the document Aptos font; font size 11pt; black font colour. The CSS can also be used to add interactive elements like expand/collapse buttons; column filters on large tables.</li>
  </ul>
  <p>Keeping style and content separate is a key benefit of structured content. Keeping them separate in an ePI document ensures the following:</p>
  <div class="card-grid">
    <div class="card">
      <div class="icon">🛠️</div>
      <div class="ctitle">Maintenance</div>
      <p>Easier to update a single central style sheet, that applies a global change to all ePIs across a portfolio, rather than updating each ePI individually.</p>
    </div>
    <div class="card">
      <div class="icon">♻️</div>
      <div class="ctitle">Reusability</div>
      <p>Style sheets can be reused across multiple document types to apply a consistent appearance across an organization. E.g., reuse a common house table style across labeling, CMC, and Clinical documents.</p>
    </div>
    <div class="card">
      <div class="icon">🎯</div>
      <div class="ctitle">Context</div>
      <p>Different style sheets can be used to serve different objectives. e.g., transform an ePI into an accessibility friendly webpage with high contrast mode; or use another style sheet to transform the ePI into a print friendly PDF with pagination and page breaks.</p>
    </div>
  </div>

  <div class="section-title" id="accessibility">Accessibility</div>
  <div class="alert alert-tip">
    <span class="alabel">♿ Accessibility</span>
    In most jurisdictions WCAG Level AA is recommended for use.
  </div>

  <div class="section-title" id="charset">Character set</div>
  <p>The default standard for all content characters is Unicode Transformation Format 8-bit (UTF-8).</p>
  <p>UTF-8 is a character encoding standard used to ensure text is presented consistently when exchanged across systems.</p>

  <div class="section-title" id="narrative">Content Guidelines — Narrative Text</div>
  <div class="rule-section">
    <div class="rule-header">📝 All text must be contained within one of the following five tags</div>
    <div class="rule-body">
      <div class="rule-row"><div class="rule-col"><code>&lt;p&gt;</code> — Paragraph</div><div class="rule-col">Standard text blocks.</div></div>
      <div class="rule-row"><div class="rule-col"><code>&lt;ol&gt;</code> — Ordered list</div><div class="rule-col">Numbered or alphabetical list.</div></div>
      <div class="rule-row"><div class="rule-col"><code>&lt;ul&gt;</code> — Unordered list</div><div class="rule-col">Bulleted list.</div></div>
      <div class="rule-row"><div class="rule-col"><code>&lt;table&gt;</code> — Table</div><div class="rule-col">Structured tabular content.</div></div>
      <div class="rule-row"><div class="rule-col"><code>&lt;footer&gt;</code> — Footer</div><div class="rule-col">Footnotes and end-of-section content.</div></div>
    </div>
  </div>
  <p>Content Span <code>&lt;span&gt;</code></p>

  <div class="section-title" id="paragraphs">Paragraphs</div>
  <p>The paragraph tag <code>&lt;p&gt;</code> can contain text and inline formatting tags as children. E.g.,</p>
  <ul>
    <li>Parse <b><code>&lt;strong&gt;</code></b> (instead of Bold <code>&lt;b&gt;</code>)</li>
    <li>Emphasis <i><code>&lt;em&gt;</code></i> (instead of Italics <code>&lt;i&gt;</code>)</li>
    <li>Superscript <code>&lt;sup&gt;</code></li>
    <li>Subscript <code>&lt;sub&gt;</code></li>
    <li>Image <code>&lt;img&gt;</code></li>
    <li>Content Span <code>&lt;span&gt;</code></li>
  </ul>
  <p>The <b><code>&lt;strong&gt;</code></b> and <i><code>&lt;em&gt;</code></i> tags are used to give semantic meaning to text.</p>
  <p><b><code>&lt;strong&gt;</code></b> is used to indicate that the text has strong importance or emphasis. It typically renders the text in bold.</p>
  <p><i><code>&lt;em&gt;</code></i> This tag is used to emphasize text, usually rendering it in italics.</p>
  <p>The bold tag <code>&lt;b&gt;</code> and italics tag <code>&lt;i&gt;</code> are only used to convey the appearance of text and do not convey any semantic meaning.</p>
  <p>Developers can use the semantic meaning behind <b><code>&lt;strong&gt;</code></b> and <i><code>&lt;em&gt;</code></i> tags to deliver benefits like the following:</p>
  <div class="card-grid">
    <div class="card">
      <div class="icon">♿</div>
      <div class="ctitle">Improve Accessibility</div>
      <p>Accessibility services, like screen readers, are already designed to understand the structure and importance of content within semantic tags.</p>
    </div>
    <div class="card">
      <div class="icon">🎨</div>
      <div class="ctitle">Consistent Styling</div>
      <p>Semantic tags can be targeted with style sheets to apply styling consistently across web browsers and devices (mobile, desktop, wearable).</p>
    </div>
    <div class="card">
      <div class="icon">👍</div>
      <div class="ctitle">Better User Experience</div>
      <p>Developers can reuse known and effective best practices to create intuitive and user-friendly experiences.</p>
    </div>
  </div>
  <div class="alert alert-note">
    <span class="alabel">ℹ️ Note</span>
    <ul>
      <li>The Paragraph tag <code>&lt;p&gt;</code> cannot contain lists or tables as children.</li>
      <li>Use Paragraph tags instead of Line Break <code>&lt;br&gt;</code> tags. Line Breaks and white space between content blocks (e.g., paragraphs, tables) should be handled by the style sheet as needed.</li>
    </ul>
  </div>

  <div class="section-title" id="style-attribute">In-line Style Attribute</div>
  <p>The style attribute can be added to tags to apply inline formatting. E.g.,</p>
  <p><code>&lt;p style="text-decoration: underline"&gt;Underlined Sub-heading&lt;/p&gt;</code></p>
  <p>or</p>
  <p><code>&lt;p&gt;Example of how to &lt;span style="text-decoration: underline"&gt;underline&lt;/span&gt; specific text&lt;/p&gt;</code></p>
  <p>The following is a list of classes that can be used together with the style attribute:</p>
  <table class="class-table">
    <thead>
      <tr><th>Class</th><th>Description</th><th>Style</th></tr>
    </thead>
    <tbody>
      <tr><td><span class="class-name">bold</span></td><td>Bold Text</td><td><span class="class-css">{ font-weight: bold }</span></td></tr>
      <tr><td><span class="class-name">italics</span></td><td>Italics Text</td><td><span class="class-css">{ font-style: italic }</span></td></tr>
      <tr><td><span class="class-name">underline</span></td><td>Underlined Text</td><td><span class="class-css">{ text-decoration: underline }</span></td></tr>
      <tr><td><span class="class-name">strikethrough</span></td><td>Strikethrough Text</td><td><span class="class-css">{ text-decoration: line-through }</span></td></tr>
      <tr><td><span class="class-name">left</span></td><td>Left Aligned</td><td><span class="class-css">{ text-align : left }</span></td></tr>
      <tr><td><span class="class-name">right</span></td><td>Right Aligned</td><td><span class="class-css">{ text-align : right }</span></td></tr>
      <tr><td><span class="class-name">center</span></td><td>Center Aligned</td><td><span class="class-css">{ text-align : center }</span></td></tr>
      <tr><td><span class="class-name">justify</span></td><td>Justified</td><td><span class="class-css">{ text-align : justify }</span></td></tr>
      <tr><td><span class="class-name">border-left</span></td><td>Border on the left</td><td><span class="class-css">{ border-left: 1px solid grey }</span></td></tr>
      <tr><td><span class="class-name">border-right</span></td><td>Border on the right</td><td><span class="class-css">{ border-right: 1px solid grey }</span></td></tr>
      <tr><td><span class="class-name">border-top</span></td><td>Border on the top</td><td><span class="class-css">{ border-top: 1px solid grey }</span></td></tr>
      <tr><td><span class="class-name">border-bottom</span></td><td>Border on the bottom</td><td><span class="class-css">{ border-bottom: 1px solid grey }</span></td></tr>
      <tr><td><span class="class-name">arabic</span></td><td>List is ordered using Arabic numerals: 1, 2, 3</td><td><span class="class-css">{ list-style-type: decimal }</span></td></tr>
      <tr><td><span class="class-name">little-roman</span></td><td>List is ordered using little Roman numerals: i, ii, iii</td><td><span class="class-css">{ list-style-type: lower-roman }</span></td></tr>
      <tr><td><span class="class-name">big-roman</span></td><td>List is ordered using big Roman numerals: I, II, III</td><td><span class="class-css">{ list-style-type: upper-roman }</span></td></tr>
      <tr><td><span class="class-name">little-alpha</span></td><td>List is ordered using little alpha characters: a, b, c</td><td><span class="class-css">{ list-style-type: lower-alpha }</span></td></tr>
      <tr><td><span class="class-name">big-alpha</span></td><td>List is ordered using big alpha characters: A, B, C</td><td><span class="class-css">{ list-style-type: upper-alpha }</span></td></tr>
      <tr><td><span class="class-name">disc</span></td><td>List bullets are simple solid discs</td><td><span class="class-css">{ list-style-type: disc }</span></td></tr>
      <tr><td><span class="class-name">circle</span></td><td>List bullets are hollow discs</td><td><span class="class-css">{ list-style-type : circle }</span></td></tr>
      <tr><td><span class="class-name">square</span></td><td>List bullets are solid squares</td><td><span class="class-css">{ list-style-type: square }</span></td></tr>
      <tr><td><span class="class-name">unlist</span></td><td>List with no bullets</td><td><span class="class-css">{ list-style-type: none }</span></td></tr>
    </tbody>
  </table>

  <div class="section-title" id="lists">Lists</div>
  <p>Lists are defined using the Unordered List tag <code>&lt;ul&gt;</code> (i.e., bulleted list) or the Ordered List tag <code>&lt;ol&gt;</code> (i.e., numbered or alphabetical list).</p>
  <p><code>&lt;ul&gt;</code> and <code>&lt;ol&gt;</code> tags must only contain List Item <code>&lt;li&gt;</code> tags as children. List Item <code>&lt;li&gt;</code> tags can contain other tags as children; e.g., divider <code>&lt;div&gt;</code>, paragraph <code>&lt;p&gt;</code>, heading <code>&lt;h1&gt;</code> to <code>&lt;h6&gt;</code>, images <code>&lt;img&gt;</code>, and tables <code>&lt;table&gt;</code>.</p>
  <p>For example, this shows how to multiple paragraphs in a single bullet.</p>
  <table class="example-table">
    <thead>
      <tr><th>XML format</th><th>Display Text Format</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>
<pre>
&lt;ul&gt;
&lt;li&gt;
&lt;div&gt;    
&lt;p&gt;Bullet text with paragraphs&lt;/p&gt;
&lt;p&gt; next paragraph in the bullet &lt;/p&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li&gt;Next bullet&lt;/li&gt;
&lt;/ul&gt;
</pre>
        </td>
        <td>
          Bullet text with paragraphs<br/>
          next paragraph in the bullet<br/>
          Next bullet
        </td>
      </tr>
    </tbody>
  </table>
  <p>Nested lists are made by adding another layer of <code>&lt;ul&gt;</code> or <code>&lt;ol&gt;</code> tags as children to a List.</p>
  <p>For example, this shows how to create a nested list with a leading paragraph.</p>
  <table class="example-table">
    <thead>
      <tr><th>XML format</th><th>Display Text Format</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>
<pre>
&lt;ol&gt;
&lt;li&gt;
Bullet text #1
&lt;/li&gt;
&lt;li&gt;
&lt;div&gt;&lt;p&gt;Bullet text #2&lt;/p&gt;
&lt;ul&gt;
&lt;li&gt;Sub-bullet text #1&lt;/li&gt;
&lt;li&gt;Sub-bullet text #2&lt;/li&gt;
&lt;/ul&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;/ol&gt;
</pre>
        </td>
        <td>
          <ol>
            <li>Bullet text #1</li>
            <li>Bullet text #2
              <ul>
                <li>Sub-bullet text #1</li>
                <li>Sub-bullet text #2</li>
              </ul>
            </li>
          </ol>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="section-title" id="hyperlinks">Hyperlinks</div>
  <div class="mini-grid">
    <div class="mini-card">
      <div class="mtitle">🔗 Anchor Tag Usage</div>
      <p>The Anchor tag <code>&lt;a&gt;</code> and its attributes are used to represent hypertext links. E.g., <a href="https://www.w3schools.com">Visit W3Schools.com!</a></p>
    </div>
  </div>

  <div class="section-title" id="escape">Escape Characters</div>
  <p>The following characters are reserved in XML for specific purposes and must be escaped. E.g., Within the ePI’s XML, ampersand “&amp;” cannot be used in narrative text. “&amp;amp;” must be used in its place.</p>
  <div class="alert alert-note">
    <span class="alabel">ℹ️ Note</span>
    Web browsers and apps will always convert the escaped form “&amp;amp;” back to the normal form “&amp;”. The escaped form is only reserved for the XML content.
  </div>
  <table class="ref-table">
    <thead>
      <tr><th>Special character</th><th>Must be replaced by the escaped form</th><th>Escaped form required in the XML</th></tr>
    </thead>
    <tbody>
      <tr><td>Ampersand</td><td class="mono">&amp;</td><td class="mono">&amp;amp;</td></tr>
      <tr><td>Less-than</td><td class="mono">&lt;</td><td class="mono">&amp;lt;</td></tr>
      <tr><td>Greater-than</td><td class="mono">&gt;</td><td class="mono">&amp;gt;</td></tr>
      <tr><td>Quotes</td><td class="mono">"</td><td class="mono">&amp;quot;</td></tr>
      <tr><td>Apostrophe</td><td class="mono">'</td><td class="mono">&amp;apos;</td></tr>
    </tbody>
  </table>

  <div class="section-title" id="symbols">Common Symbols</div>
  <p>Symbols can be added as regular text as long as they are UTF-8 compliant or they can be replaced with named entities. Like the escape characters mentioned in Section 4.4, web browsers or applications convert named entities back to the normal symbol in the display.</p>
  <p>The following table is a list of commonly use symbols. Refer to the HTML specification or W3C resources for a more comprehensive list.</p>
  <table class="ref-table">
    <thead>
      <tr><th>Result</th><th>Description</th><th>Name</th><th>Number</th></tr>
    </thead>
    <tbody>
      <tr><td class="mono">&nbsp;</td><td>non-breaking space</td><td class="mono">&amp;nbsp;</td><td class="mono">&amp;#160;</td></tr>
      <tr><td class="mono">&lt;</td><td>less than</td><td class="mono">&amp;lt;</td><td class="mono">&amp;#60;</td></tr>
      <tr><td class="mono">&gt;</td><td>greater than</td><td class="mono">&amp;gt;</td><td class="mono">&amp;#62;</td></tr>
      <tr><td class="mono">&le;</td><td>less than or equal to</td><td class="mono"></td><td class="mono">&amp;#8804;</td></tr>
      <tr><td class="mono">&ge;</td><td>greater than or equal to</td><td class="mono"></td><td class="mono">&amp;#8806;</td></tr>
      <tr><td class="mono">&amp;</td><td>ampersand</td><td class="mono">&amp;amp;</td><td class="mono">&amp;#38;</td></tr>
      <tr><td class="mono">&quot;</td><td>double quotation mark</td><td class="mono">&amp;quot;</td><td class="mono">&amp;#34;</td></tr>
      <tr><td class="mono">&apos;</td><td>single quotation mark</td><td class="mono">&amp;apos;</td><td class="mono">&amp;#39;</td></tr>
      <tr><td class="mono">&cent;</td><td>cent</td><td class="mono">&amp;cent;</td><td class="mono">&amp;#162;</td></tr>
      <tr><td class="mono">&pound;</td><td>pound</td><td class="mono">&amp;pound;</td><td class="mono">&amp;#163;</td></tr>
      <tr><td class="mono">&yen;</td><td>yen</td><td class="mono">&amp;yen;</td><td class="mono">&amp;#165;</td></tr>
      <tr><td class="mono">&euro;</td><td>euro</td><td class="mono">&amp;euro;</td><td class="mono">&amp;#8364;</td></tr>
      <tr><td class="mono">&copy;</td><td>copyright</td><td class="mono">&amp;copy;</td><td class="mono">&amp;#169;</td></tr>
      <tr><td class="mono">&reg;</td><td>trademark</td><td class="mono">&amp;reg;</td><td class="mono">&amp;#174;</td></tr>
      <tr><td class="mono">&deg;</td><td>degree sign</td><td class="mono">&amp;deg;</td><td class="mono">&amp;#176;</td></tr>
      <tr><td class="mono">&beta;</td><td>beta</td><td class="mono">&amp;beta;</td><td class="mono"></td></tr>
    </tbody>
  </table>

  <div class="section-title" id="diacriticals">Diacritical Marks</div>
  <p>Diacritical marks work in a similar manner as symbols with named entities. The following table is a list of commonly use marks. Refer to the HTML specification or W3C resources for a more comprehensive list.</p>
  <table class="ref-table">
    <thead>
      <tr><th>Mark</th><th>Character</th><th>Construct</th><th>Result</th></tr>
    </thead>
    <tbody>
      <tr><td class="mono">`</td><td class="mono">a</td><td class="mono">a&amp;#768;</td><td class="mono">à</td></tr>
      <tr><td class="mono">´</td><td class="mono">a</td><td class="mono">a&amp;#769;</td><td class="mono">á</td></tr>
      <tr><td class="mono">^</td><td class="mono">a</td><td class="mono">a&amp;#770;</td><td class="mono">â</td></tr>
      <tr><td class="mono">~</td><td class="mono">a</td><td class="mono">a&amp;#771;</td><td class="mono">ã</td></tr>
      <tr><td class="mono">`</td><td class="mono">O</td><td class="mono">O&amp;#768;</td><td class="mono">Ò</td></tr>
      <tr><td class="mono">´</td><td class="mono">O</td><td class="mono">O&amp;#769;</td><td class="mono">Ó</td></tr>
      <tr><td class="mono">^</td><td class="mono">O</td><td class="mono">O&amp;#770;</td><td class="mono">Ô</td></tr>
      <tr><td class="mono">~</td><td class="mono">O</td><td class="mono">O&amp;#771;</td><td class="mono">Õ</td></tr>
    </tbody>
  </table>

  <div class="section-title" id="tables">Tables</div>
  <p>The table tag <code>&lt;table&gt;</code> and its children (see table below) are used to structure a table.</p>
  <p>Only <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;tfoot&gt;</code>, <code>&lt;caption&gt;</code>, and <code>&lt;colgroup&gt;</code> tags are permitted as children of <code>&lt;table&gt;</code>.</p>
  <p>The <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> tags may contain inline elements, paragraphs, headings, lists, and image tags as children. Only include text or content in <code>&lt;caption&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;td&gt;</code>, and <code>&lt;tfoot&gt;</code>. All other tags are only used for structure.</p>
  <div class="alert alert-important">
    <span class="alabel">⚠️ Note</span>
    Avoid using Tables for formatting and alignment. There are alternative best practice solutions that achieve the same objective in a standardized manner.
  </div>
  <table class="styled">
    <thead>
      <tr><th>Tag</th><th>Description</th></tr>
    </thead>
    <tbody>
      <tr><td class="mono">&lt;table&gt;</td><td>Defines a table</td></tr>
      <tr><td class="mono">&lt;caption&gt;</td><td>Defines a table caption or table title (Always keep the table title inside the table)</td></tr>
      <tr><td class="mono">&lt;th&gt;</td><td>Defines a header cell in a table</td></tr>
      <tr><td class="mono">&lt;tr&gt;</td><td>Defines a row in a table</td></tr>
      <tr><td class="mono">&lt;td&gt;</td><td>Defines a cell in a table</td></tr>
      <tr><td class="mono">&lt;colgroup&gt;</td><td>Specifies a group of one or more columns in a table for formatting</td></tr>
      <tr><td class="mono">&lt;col&gt;</td><td>Specifies column properties for each column within a <code>&lt;colgroup&gt;</code> element</td></tr>
      <tr><td class="mono">&lt;thead&gt;</td><td>Groups the header content in a table</td></tr>
      <tr><td class="mono">&lt;tbody&gt;</td><td>Groups the body content in a table</td></tr>
      <tr><td class="mono">&lt;tfoot&gt;</td><td>Groups the footer content in a table (Always keep the table footnotes inside the table)</td></tr>
      <tr><td class="mono">&lt;rowspan&gt;</td><td>Defines how many cells to merge across rows</td></tr>
      <tr><td class="mono">&lt;colspan&gt;</td><td>Defines how many cells to merge across columns</td></tr>
      <tr><td>Text alignment</td><td>Attribute applied to define text alignment in a table:<br>
        <span class="mono">style="text-align: left; vertical-align: top;"</span><br>
        <span class="mono">style="text-align: center; vertical-align: middle;"</span><br>
        <span class="mono">style="text-align: right; vertical-align: bottom;"</span>
      </td></tr>
    </tbody>
  </table>

  <div class="sub-title">Example: Simple Table</div>
  <table class="styled dark">
    <thead>
      <tr><th>Header 1</th><th>Header 2</th><th>Header 3</th></tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>2</td><td>3</td></tr>
      <tr><td>4</td><td>5</td><td>6</td></tr>
    </tbody>
  </table>

  <div class="sub-title">Example: Merge cells across columns</div>
  <table class="styled dark">
    <thead>
      <tr><th>Header 1</th><th>Header 2</th><th>Header 3</th></tr>
    </thead>
    <tbody>
      <tr><td colspan="2">12</td><td>3</td></tr>
      <tr><td>4</td><td>5</td><td>6</td></tr>
    </tbody>
  </table>

  <div class="sub-title">Example: Merge cells across rows</div>
  <table class="styled dark">
    <thead>
      <tr><th>Header 1</th><th>Header 2</th><th>Header 3</th></tr>
    </thead>
    <tbody>
      <tr><td>1</td><td>2</td><td rowspan="2">36</td></tr>
      <tr><td>4</td><td>5</td></tr>
    </tbody>
  </table>

  <div class="section-title" id="images">Images</div>
  <div class="mini-grid">
    <div class="mini-card">
      <div class="mtitle">🖼️ Preferred Format: SVG</div>
      <p>The preferred format for images is Scalable Vector Graphics (SVG). SVG is an XML based format that can be scaled to any size without losing quality. SVG is ideal for graphics that need to look sharp at any size. This is ideal for ePI since graphics need to be resized for different size screens (wearable, mobile, desktop); or resized to suit printed cartons, paper leaflets, and instructions for use.</p>
    </div>
    <div class="mini-card">
      <div class="mtitle">📦 Embedding: Base64 Binary</div>
      <p>All images must be embedded within the ePI’s XML as Base64 objects. This allows an ePI to be exchanged as a single XML or JSON file. Each image is managed as a single Base64 object in a single Contained Binary resource within the ePI.</p>
    </div>
  </div>
  <p>E.g.,</p>
  <pre>
&lt;contained&gt;
 &lt;Binary&gt;
     &lt;id value="companylogo" /&gt;
     &lt;contentType value="image/svg+xml" /&gt;
     &lt;data value="Base64 data goes here" /&gt;
 &lt;/Binary&gt;
&lt;/contained&gt;
    </pre>
  <p>The image tag <code>&lt;img&gt;</code> is then placed in the content to show where the image is supposed to go. E.g.,</p>
  <pre>
&lt;text&gt;
    &lt;status value="generated" /&gt;
    &lt;div xmlns="http://www.w3.org/1999/xhtml"&gt;
        &lt;p&gt;&lt;img src="#companylogo" alt="Company logo" /&gt;Product Name&lt;/p&gt;
    &lt;/div&gt;
&lt;/text&gt;
    </pre>
  <div class="alert alert-note">
    <span class="alabel">ℹ️ Note</span>
    <ul>
      <li>Include a brief but meaningful description of the image using the “alt” attribute in the image tag <code>&lt;img&gt;</code> to facilitate accessibility features like screen reading.</li>
      <li>Colours should meet the WCAG Level AA for contrast.</li>
    </ul>
  </div>

  <div class="section-title" id="media">Audio and Video</div>
  <p>It is best practice not to embed audio or video files within an ePI given their large size. Instead, the ePI should link to external copies of audio and video files.</p>
  <div class="alert alert-important">
    <span class="alabel">⚠️ Note</span>
    Check local regulations to confirm if audio and video files are allowed to be used with an ePI.
  </div>

  <div class="section-title" id="languages">Languages</div>
  <p>Each language should be a separate ePI document. E.g., one ePI for English and a separate ePI for its French translation.</p>
  <p>The style sheet will be used to control the direction of text. E.g., the XML may show Arabic text as left to right but the style sheet will convert the content to correctly show as right to left; Japanese will appear as left to right but the style sheet can convert the content to show as top to bottom or right to left pages.</p>

  <div class="section-title" id="math">Math formulas</div>
  <p>Mathematical Markup Language (MathML) or similar structured mathematical notations are not compliant with the FHIR specification at this time. Simple formulas can be recreated in the narrative. For example, (a + b)<sup>2</sup> could be expressed as:</p>
  <p><code>&lt;p&gt;a + b&lt;sup&gt;2&lt;/sup&gt;&lt;/p&gt;</code></p>
  <p>Complex formulas must be incorporated into the ePI as an image and then referenced in the text using the image tag <code>&lt;img&gt;</code> (Refer to section 5.4 for guidance on images).</p>

  <div class="section-title" id="references">Appendices &amp; References</div>
  <div class="ref-list">
    <h4>📚 References</h4>
    <ul>
      <li><a href="http://hl7.org/fhir/narrative.html">HL7 FHIR XHTML Styling specification - Narrative - FHIR v5.0.0</a></li>
      <li><a href="https://www.w3schools.com">W3Schools Online Web Tutorials</a></li>
      <li><a href="https://www.w3.org/TR/html4/">HTML specification v4.0 - HTML 4.0 Specification</a></li>
      <li><a href="http://hl7.org/fhir/narrative.html">HL7 FHIR narrative text specification - Narrative - FHIR v5.0.0</a></li>
      <li><a href="https://www.w3.org/TR/MathML/">Mathematical Markup Language (MathML) Version 3.0 2nd Edition</a></li>
      <li><a href="https://www.w3.org/TR/SVG2/struct.html">Scalable Vector Graphics (SVG) 2 specification</a></li>
      <li><a href="https://www.w3.org/TR/xhtml1-schema/">XHTML™ 1.0 in XML Schema</a></li>
      <li><a href="http://www.jfda.jo/EchoBusV3.0/SystemAssets/Leaflet.html">Jordan Food and Drug Administration’s (JFDA) HTML Validator guidance - Leaflet · Debug</a></li>
    </ul>
  </div>
  <div class="ref-list">
    <h4>🔣 Named entities</h4>
    <ul>
      <li><a href="https://www.w3schools.com/charsets/ref_html_8859.asp">W3C Schools HTML ISO-8859-1 Reference</a></li>
      <li>ISO/IEC 8859-1:1998 - Information technology — 8-bit single-byte coded graphic character sets — Part 1: Latin alphabet No. 1</li>
    </ul>
  </div>

</div>
