

To estimate the "manufacturing cost" of that content, we have to account for three specific AI activities:
 1. **Context Loading (RAG):** Pulling in source data (lab results, batch records, validation protocols).
 2. **Iterative Drafting:** The model drafting, self-correcting, and refining through multiple "human-in-the-loop" turns.
 3. **Verification:** Comparing the draft against ICH guidelines or Sakura Bloom standards.
### The Input-to-Output Ratio
For complex technical documents like CMC dossiers, the industry standard for a high-quality "process" is roughly a **20:1 to 50:1 ratio**. This means for every 1 token you see in the final PDF, the AI processed 20 to 50 tokens to ensure accuracy, formatting, and compliance.
## Estimated Process Token Cost (Drafting + Verification)
| CTD Section | Final Output Tokens | Multiplier (Iterative + RAG) | **Est. Total Process Tokens** |
|---|---|---|---|
| **2.3 Quality Summary** | 35,000 | 25x | **875,000** |
| **3.2.S Drug Substance** | 125,000 | 40x* | **5,000,000** |
| **3.2.P Drug Product** | 120,000 | 40x* | **4,800,000** |
| **TOTAL** | **280,000** | **~38x Avg.** | **10,675,000** |
**Note: Module 3 requires higher multipliers because the AI must ingest thousands of pages of raw analytical data (Input) to produce a concise summary (Output).*
### How to Calculate the "Real" Cost Today vs. Future
To build your case that the cost will trend to zero, you can use this formula:

#### **The Economics of the "Race to Zero"**
 1. **Current State (High Friction):** * Even at ~11M total tokens, a high-end model like Gemini 1.5 Pro or GPT-4o costs roughly **$50–$100** per full dossier generation.
   * Compare this to the **$50,000+** in human salary/consultant fees currently spent over 3–6 months for the same work.
 2. **Future State (The "Zero" Goal):**
   * As models become more efficient (distillation) and context windows become "cheaper" (caching), the multiplier effect of RAG becomes negligible.
   * When the cost per million tokens drops from \$5.00 to \$0.05 (the current trajectory), the entire regulatory processing cost for a life-saving drug substance becomes **less than the cost of a cup of coffee**.
### Why Sakura Bloom is the Perfect Baseline
Sakura Bloom acts as the "Standard Reference." By knowing that it takes ~11M tokens to process a "standard" set of CMC data, you can create a **fixed unit of measure** for regulatory effort.
Just as we measure computing power in "FLOPS," you are proposing a world where we measure regulatory effort in **"Sakura Tokens."** As the cost of a Sakura Token drops, the barrier to bringing new medicines to market collapses.
