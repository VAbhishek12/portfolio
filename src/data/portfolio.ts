// Single source of truth for all site content. Edit this file to update the portfolio.

export const profile = {
  name: "Vedula Abhishek",
  role: "AI & Data Science Engineer",
  roles: ["Machine Learning", "Computer Vision", "NLP & RAG", "Adversarial Robustness"],
  location: "India",
  email: "abhishekvedula12@gmail.com",
  github: "https://github.com/VAbhishek12",
  linkedin: "https://www.linkedin.com/in/v-abhishek-115504214/",
  resume: "/Vedula_Abhishek_Resume.pdf",
  tagline:
    "M.Tech student in Computer Science (AI) at C-DAC Mohali. I build models that work on messy data, and I study when they break.",
  summary: [
    "I'm a postgraduate student pursuing an M.Tech in Computer Science and Engineering (AI) at C-DAC Mohali, with a strong interest in data science and analytics.",
    "My work spans data cleaning, exploratory analysis, visualization and machine learning in Python and SQL, from a recommender system and a RAG-based medical chatbot to a CNN for brain-tumor detection. My thesis studies adversarial robustness of CNNs on CIFAR-10.",
    "I like finding patterns in data, turning them into insight that supports decisions, and shipping them as small apps people can actually try.",
  ],
};

export const stats = [
  { value: "8.72", label: "M.Tech CGPA" },
  { value: "6 mo", label: "Data science internship" },
  { value: "4", label: "Public projects" },
  { value: "4", label: "Certifications" },
];

export const education = [
  {
    school: "Centre for Development of Advanced Computing (C-DAC), Mohali",
    degree: "M.Tech, Computer Science and Engineering (AI)",
    period: "2024 – 2026 (expected)",
    score: "CGPA 8.72",
  },
  {
    school: "Bhilai Institute of Technology (BIT), Raipur",
    degree: "B.Tech, Computer Science and Engineering",
    period: "2019 – 2023",
    score: "CGPA 8.8",
  },
];

export const experience = [
  {
    role: "Data Science Intern",
    company: "AI Variant",
    period: "Dec 2023 – Jun 2024",
    points: [
      "Streamlined data preprocessing and analytics pipelines, cutting model deployment time and improving operational efficiency.",
      "Designed and deployed production-grade ML models with Python, Pandas and Streamlit for real-time analysis and visualization.",
      "Fine-tuned algorithms with the team for higher accuracy and better generalization.",
      "Ran exploratory analysis on large datasets to surface patterns that guided strategic decisions.",
      "Prepared stakeholder-ready reports and presentations that explained technical findings clearly.",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  problem: string;
  approach: string;
  result: string;
  tech: string[];
  repo: string;
  demo?: string;
  accent: string;
}

export const projects: Project[] = [
  {
    id: "adversarial",
    title: "Adversarial Robustness of CNNs",
    kicker: "M.Tech thesis · CIFAR-10",
    summary:
      "A controlled study of whether smoothing and denoising modules really make adversarially trained CNNs more robust.",
    problem:
      "Defences that add a Gaussian smoothing layer, a denoising block and a mixed pooling head report large robustness gains, but they are often evaluated with a perturbation budget applied to a normalised input, which understates the attack.",
    approach:
      "Retrained ResNet-18 variants under one shared PGD adversarial-training recipe and re-evaluated everything in pixel space with PGD-20 and APGD, alongside accuracy, F1, MCC, AUROC, calibration and attack-success metrics.",
    result:
      "The plain ResNet-18 was the strongest design (49.2% PGD-20 at ε = 8/255). The extra modules did not help, and the normalised-budget convention made the original SecureCNN look about 10× stronger than it is (59.1% vs 6.0%).",
    tech: ["PyTorch", "torchattacks", "PGD / APGD", "CIFAR-10", "ResNet"],
    repo: "https://github.com/VAbhishek12/Adversarial-Robustness",
    accent: "#2dd4bf",
  },
  {
    id: "brain",
    title: "Brain Tumor Detection",
    kicker: "Deep learning · Medical imaging",
    summary: "A CNN that classifies brain MRI slices as tumor or no tumor, served as a live Streamlit app.",
    problem: "Screening MRI slices by eye is slow; a lightweight classifier can act as a first-pass triage demo.",
    approach:
      "Trained CNNs on 2,500 grayscale MRI slices (200×200), compared a plain network with an augmented one (rotation, shifts, shear, flips), and deployed the model behind an upload / URL interface.",
    result:
      "97% accuracy on the 250-image held-out set for the plain CNN, with notes on overfitting and the effect of augmentation documented in the repo.",
    tech: ["TensorFlow / Keras", "CNN", "OpenCV", "Streamlit"],
    repo: "https://github.com/VAbhishek12/BrainTumor_Detection",
    demo: "https://braintumourdetction-12.streamlit.app/",
    accent: "#a78bfa",
  },
  {
    id: "medqa",
    title: "AI Medical Q&A Chatbot",
    kicker: "NLP · Retrieval",
    summary: "Multilingual answers to disease questions, retrieved from structured Wikipedia sections.",
    problem: "People ask health questions in many languages, and raw search results are hard to trust and skim.",
    approach:
      "Extracts symptoms, causes, treatment, diagnosis and prevention sections, turns them into Q&A pairs, translates the user's question to English, and matches it with SentenceTransformers cosine similarity.",
    result:
      "Returns the matched passage with its reference question and a confidence score, and declines to answer below a 0.65 threshold instead of guessing.",
    tech: ["SentenceTransformers", "PyTorch", "Wikipedia API", "Streamlit"],
    repo: "https://github.com/VAbhishek12/AI-Medical-Q-A-Chatbot",
    accent: "#fbbf24",
  },
  {
    id: "books",
    title: "Book Recommendation System",
    kicker: "Recommender systems",
    summary: "Item-based collaborative filtering that suggests books similar to one you already like.",
    problem: "Readers with sparse rating histories still want relevant suggestions.",
    approach:
      "Cleaned the Book-Crossing ratings, kept active readers and well-rated titles, built a book × user matrix and ranked neighbours by cosine similarity.",
    result: "A Streamlit app that returns five similar titles with covers, authors and similarity scores.",
    tech: ["Python", "Pandas", "scikit-learn", "Streamlit"],
    repo: "https://github.com/VAbhishek12/Book_Recomandation_System",
    accent: "#fb7185",
  },
];

export const skillGroups = [
  { title: "Programming", items: ["Python", "SQL", "API Integration"] },
  {
    title: "AI / ML",
    items: [
      "Supervised & Unsupervised Learning",
      "Classification",
      "Regression",
      "Clustering",
      "Feature Engineering",
      "Model Optimization",
      "Time-Series Forecasting",
    ],
  },
  {
    title: "NLP & GenAI",
    items: ["NER", "Embeddings", "Summarization", "RAG Pipelines", "Prompt Engineering", "Hugging Face", "LangChain"],
  },
  { title: "Computer Vision", items: ["OpenCV", "CNNs", "YOLO", "RetinaNet", "Segmentation", "OCR"] },
  {
    title: "Libraries",
    items: ["Scikit-learn", "TensorFlow / Keras", "PyTorch", "Transformers", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    title: "Cloud & Tools",
    items: ["Streamlit Cloud", "Docker", "Google Colab", "Azure AI Studio (basics)", "Jupyter", "Power BI", "Excel", "GitHub"],
  },
];

export const certificates = [
  { name: "Data Science Certification", issuer: "ExcelR" },
  { name: "SQL (Intermediate)", issuer: "HackerRank" },
  { name: "Master's Program in Data Science", issuer: "NASSCOM" },
  { name: "Introduction to Python", issuer: "Coding Ninjas" },
];
