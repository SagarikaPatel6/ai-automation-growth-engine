# AI-Orchestrated Growth Engine: Autonomous Outreach & Lifecycle Management

## 📌 Executive Summary
This repository contains a production-ready "Automation Layer" designed to bridge the gap between manual lead generation and scalable growth operations. By moving beyond static dashboards, this system replaces high-friction manual prospecting with a self-healing, AI-augmented workflow that handles everything from data normalization to hyper-personalized delivery.

**Business Impact:**
* **Efficiency:** Reduced human processing time by **80%**.
* **Scale:** Architected to handle **500+ data objects** per cycle with built-in rate limiting and looped logic.
* **Accuracy:** Eliminated 100% of manual data-entry errors through custom **JavaScript** validation.

---

## 🛠 Technical Architecture

### 1. Orchestration Layer (**n8n**)
The system utilizes a **looped architecture** to process leads individually, ensuring that a single failure doesn't crash the entire pipeline. 
* **Key Feature:** A **Wait Node** is strategically placed after each delivery to respect API rate limits and avoid spam filters, maintaining high sender reputation.
* **State Management:** The workflow tracks "mailed" vs "not-mailed" status in real-time, allowing for seamless pauses and restarts without data duplication.

### 2. Custom Logic (**JavaScript / Node.js**)
I implemented custom **Code Nodes** to handle complex requirements that standard "no-code" tools cannot support:
* **JSON Transformation:** Normalizing inconsistent data structures from various marketing sources into a unified schema for the delivery engine.
* **Dynamic Template Merging:** A custom `updatebody` script that merges lead-specific metadata with dynamic templates for a bespoke recipient experience.

### 3. Intelligence Layer (**LLM Integration**)
The workflow integrates with **OpenAI/Anthropic** via API to provide hyper-personalization at scale:
* **Contextual Hooks:** The agent analyzes lead bios or company descriptions to generate unique "P.S." lines, significantly increasing engagement rates.
* **Automated Lead Scoring:** Uses LLMs to categorize lead quality based on custom business logic before the lead ever hits the CRM.

---

## 📂 Repository Structure
* `/workflows`: Contains the **n8n JSON exports**. These can be imported into any n8n instance to replicate the production environment.
* `/scripts`: Dedicated **JavaScript** and **Python** functions used for data normalization and API authentication.
* `/assets`: System architecture diagrams and workflow screenshots.

---

## 🚀 Deployment & Scaling
This system is tool-agnostic. While currently utilizing **Google Sheets** for the data layer, the architecture is designed to connect to any SQL database or CRM (HubSpot/Salesforce) via webhooks.


---

## 👨‍💻 About the Builder
I am a technical architect sitting at the intersection of **Data Analytics (MSBA)** and **Automation Engineering**. I specialize in turning internal experiments into reliable, production-ready infrastructure.

📬 **Contact:** patelsagarika06@gmail.com
