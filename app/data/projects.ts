export type Project = {
  slug: string; title: string; year: string; description: string; long: string; tags: string[]; image: string;
  links?: { demo?: string; repo?: string };
};
export const projects: Project[] = [
  { slug: "phishing-detection", title: "Phishing Detection Model", year: "2025",
    description: "Binary classifier for phishing URLs using engineered features.",
    long: "Built a feature pipeline (URL length, tokens, entropy, TLD flags). Trained Logistic Regression and XGBoost; best model AUC 0.96. Added SHAP explanations and a small FastAPI demo.",
    tags: ["Python", "Pandas", "Scikit-learn", "SHAP"], image: "/phishing.jpg", links: { demo: "#", repo: "#" } },
  { slug: "credit-risk-analysis", title: "Credit Risk Analysis", year: "2025",
    description: "Logistic regression & decision trees to assess loan default risk.",
    long: "Cleaned dataset in R (MICE, outliers via IQR). Compared CART vs. Logistic Regression. Calibrated threshold; visualized lift and KS charts with ggplot2.",
    tags: ["R", "ggplot2", "Decision Tree"], image: "/credit.jpg", links: { demo: "#", repo: "#" } },
  { slug: "e-library-management", title: "E-Library Management System", year: "2024",
    description: "Relational schema and SQL queries for library operations.",
    long: "Designed ERD → 3NF, added indexes, stored procedures for overdue reminders, and monthly KPIs.",
    tags: ["SQL", "Database Design"], image: "/library.jpg", links: { demo: "#", repo: "#" } },
];
