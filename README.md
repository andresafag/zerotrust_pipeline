# 🛡️ DevSecOps Pipeline: Zero-Trust Architecture

[![Security: Policy-as-Code](https://img.shields.io)](https://www.hashicorp.com)
[![Supply Chain: Secured](https://img.shields.io)](https://www.linuxfoundation.org)
[![License: MIT](https://img.shields.io)](https://opensource.org)

This project demonstrates a robust **Zero-Trust DevSecOps Pipeline**. Our philosophy is simple: **Security is not an extra step; it is part of the code.** Every commit is treated as untrusted until proven secure through automated validation.

---

## 🧠 Core Concepts

*   **DevSecOps:** Shifting security to the left by embedding it into the CI/CD lifecycle.
*   **Supply Chain Security:** Protecting every dependency and container layer.
*   **Policy-as-Code (PaC):** Using automated rules to enforce compliance and security standards.

---

## 🏗️ Pipeline Architecture

The pipeline, built on **GitHub Actions**, follows a strict Zero-Trust flow:

### 🔍 1. Static Analysis (SAST)
*   **Tool:** [SonarQube](https://www.sonarqube.org)
*   **Action:** Deep-scans source code for vulnerabilities, bugs, and "code smells" before any build occurs.

### 📦 2. Software Composition Analysis (SCA)
*   **Tools:** [Snyk](https://snyk.io) & [Trivy](https://aquasecurity.github.io)
*   **Action:** Identifies vulnerabilities in third-party libraries and scans Docker container layers for known CVEs.

### 🔐 3. Secret Management
*   **Tool:** [HashiCorp Vault](https://www.vaultproject.io)
*   **Action:** Eliminates hardcoded credentials. Secrets are injected dynamically at runtime using short-lived tokens.

### 🌐 4. Dynamic Analysis (DAST)
*   **Tool:** [OWASP ZAP](https://www.zaproxy.org)
*   **Action:** Simulates real-world attacks on the running application to find runtime flaws like XSS or SQL Injection.

---

## 🛠️ Tech Stack


| Layer | Technology |
| :--- | :--- |
| **CI/CD Orchestration** | GitHub Actions / GitLab CI |
| **Static Code Analysis** | SonarQube |
| **Dependency & Container Scan** | Snyk / Trivy |
| **Secrets Engine** | HashiCorp Vault |
| **Policy Enforcement** | Open Policy Agent (OPA) |

---

## 🚀 Quick Start

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com
    ```
2.  **Vault Setup:** Ensure `VAULT_ADDR` and `VAULT_TOKEN` are configured in your repository's environment secrets.
3.  **Trigger the Flow:** Push any change to the `main` branch to trigger the automated security gates.

---

## 🛡️ "Security is a process, not a product."

Built with ❤️ by Andrés Acosta García
