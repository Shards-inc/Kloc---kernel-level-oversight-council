# KLOC v1.0 — Kernel-Level Oversight Council

> **"KLOC is not here to help ideas succeed. It is here to help bad ideas die early."**

KLOC (Kernel-Level Oversight Council) is an operational epistemic firewall and forced disagreement engine. It is designed to stress-test technical and strategic proposals using a simulated council of five independent adversarial AI agents. 

Most AI assistants are biased toward helpfulness and compliance. KLOC is biased toward rejection and skepticism.

## 🏛 The Council Seats
Each seat operates in isolation to prevent consensus drift:

*   **🛡 SECURITY**: Identifies exploit surfaces, privilege escalation, and data poisoning.
*   **⚙️ SYSTEMS INTEGRITY**: Detects non-determinism, hidden state, and observability gaps.
*   **💰 ECONOMIC RISK**: Identifies cost blowouts, runaway spend, and tail risks.
*   **👺 FOUNDER-ADVERSARY**: Assumes the proposer is wrong, biased, or euphoric.
*   **🌐 EXTERNAL REALITY**: Identifies legal unknowns, dependency fragility, and vendor lock-in.

## ⚖️ Operational Protocol
1.  **No Approval Votes**: The only valid outputs are `NO_OBJECTION`, `SOFT_REJECT`, `HARD_REJECT`, or `ESCALATE`.
2.  **Deterministic Resolution**: 
    *   Any `HARD_REJECT` = **BLOCK**
    *   Any `ESCALATE` = **MANUAL REVIEW**
    *   2+ `SOFT_REJECT` = **DEFER**
3.  **Hypothesis Verification**: Stated "Success Criteria" are treated as attack surfaces, not facts.
4.  **Unknown Enforcement**: If information is missing, the engine is programmed to increase friction, not bypass it.

## 🚀 Getting Started

### Prerequisites
*   A Google Gemini API Key.
*   A modern browser.

### Installation
1.  Clone the repository:
    ```bash
    git clone https://github.com/your-org/kloc.git
    ```
2.  Set your environment variable:
    ```bash
    export API_KEY='your-gemini-api-key'
    ```
3.  Serve the project root (e.g., using `npx serve` or simply opening `index.html` in an environment that supports ES modules).

## 🛠 Tech Stack
*   **Core**: React 19 (via ESM)
*   **Styling**: Tailwind CSS
*   **Intelligence**: @google/genai (Gemini 2.5 Flash)
*   **Icons**: Lucide React

## 📄 License
MIT License. See [LICENSE](LICENSE) for details.

---
*Created for the Shards Inc Ecosystem. Internal use only. No execution authority.*
