# MetaFinance - System Requirements & Documentation

System for personal financial management and goal tracking built with modern web standards and database-level security.

## Summary

1. Overview
2. System Architecture
3. Core Features
4. Tech Stack
5. Project Structure
6. Database Model
7. Installation and Setup
8. Security Configuration
9. License

---

## 1. Overview

MetaFinance is a web-based full-stack financial application designed to track user transactions, compute real-time balances, and manage financial goals. Built using modular Vanilla JavaScript and a BaaS (Backend-as-a-Service) architecture via Supabase, the project emphasizes strict separation of concerns, native browser capabilities, and low-latency client-side operations without relying on external frontend frameworks.

---

## 2. System Architecture

The application follows a modular layered architecture utilizing native ES6 Modules:

* UI Layer (Views and Components): Manages DOM updates, user input events, and interface state rendering.
* Service Layer: Handles asynchronous requests and direct communications with the Supabase client SDK.
* State Management: Keeps local dynamic data synchronized across user interaction cycles.
* Utilities: Contains pure helper functions dedicated to formatting, validation, and data transformation.

---

## 3. Core Features

* Authentication System: User signup, signin, and session persistence managed by Supabase Auth.
* Data Isolation (RLS): Database policies ensuring strict user-level data restriction across all entities.
* Financial Transaction Management: CRUD operations for income and expense records with category association.
* Real-Time Calculations: Automatic client-side aggregation of total balance, monthly income, and monthly expenses.
* Goal Tracking: Financial objective definition with automated progress and allocation metrics.

---

## 4. Tech Stack

### Frontend
* Language: JavaScript (ES6+ Native Modules)
* Markup/Styling: HTML5, CSS3 (Custom Properties and Layout Systems)

### Backend & Database
* Platform: Supabase
* Database: PostgreSQL
* Security: Row Level Security (RLS) policies

### Deployment
* Platform: Vercel

---

## 5. Project Structure

```text
metafinance/
├── index.html
├── style.css
├── README.md
└── src/
    ├── config/
    │   └── supabase.js
    ├── services/
    │   ├── authService.js
    │   ├── transactionService.js
    │   ├── goalService.js
    │   └── categoryService.js
    ├── ui/
    │   ├── components/
    │   └── views/
    │       ├── authView.js
    │       ├── dashboardView.js
    │       ├── transactionsView.js
    │       └── goalsView.js
    ├── state/
    │   └── appState.js
    └── utils/
        ├── formatters.js
        └── validators.js
