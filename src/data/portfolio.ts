// Single source of truth for all site content. Edit this file to update the portfolio.

export const profile = {
  name: "Vedula Abhishek",
  status: "Research Fellow · CVIT, IIIT Hyderabad",
  headline: ["Teaching machines", "to read the road."],
  tagline:
    "I build vision-language and detection systems that connect what a camera sees to where it happened and which road-safety rule applies.",
  location: "India",
  email: "abhishekvedula12@gmail.com",
  github: "https://github.com/VAbhishek12",
  linkedin: "https://www.linkedin.com/in/vedula-abhishek-115504214/",
  resume: "/Vedula_Abhishek_Resume.pdf",
  about: [
    "I'm a Research Fellow at the Centre for Visual Information Technology (CVIT), IIIT Hyderabad, working on drone video analytics and on vision-language models for road-infrastructure auditing.",
    "My day-to-day mixes object detection, VLM and LLM fine-tuning, and multi-sensor reasoning: linking braking and swerving events from IMU and GPS data to road conditions and Indian Roads Congress rules.",
    "Before that I worked as a data science intern, building Streamlit apps and analysis pipelines. I like experiments that are controlled, results that are reproducible, and demos people can click.",
  ],
};

export const highlights = [
  { value: "ICVGIP '26", label: "Paper accepted" },
  { value: "9.0", label: "M.Tech CGPA" },
  { value: "3", label: "YOLO generations benchmarked" },
  { value: "24", label: "Object classes across 2 datasets" },
];

export const marquee = [
  "PyTorch",
  "YOLO",
  "Vision-Language Models",
  "PEFT",
  "VQA",
  "RAG",
  "TensorFlow Lite",
  "OpenCV",
  "Adversarial Training",
  "Hugging Face",
  "Docker",
  "Streamlit",
];

export const skillGroups = [
  { title: "Languages", items: ["Python", "SQL"] },
  { title: "Multimodal AI & NLP", items: ["VLMs", "LLMs", "PEFT", "Custom Adapters", "Zero-shot Evaluation", "VQA"] },
  { title: "Retrieval", items: ["Retrieval-Augmented Generation (RAG)", "Embeddings"] },
  {
    title: "Machine Learning & Vision",
    items: ["YOLO", "CNNs", "Object Detection", "Adversarial Training", "OpenCV", "Model Evaluation"],
  },
  {
    title: "Frameworks & Libraries",
    items: ["PyTorch", "TensorFlow / Keras", "scikit-learn", "Hugging Face", "Pandas", "NumPy"],
  },
  { title: "Tools", items: ["GitHub", "Jupyter", "Google Colab", "Streamlit", "Docker", "Matplotlib", "Seaborn"] },
];

export const experience = [
  {
    role: "Research Fellow",
    org: "CVIT, IIIT Hyderabad",
    period: "Mar 2026 – Present",
    kind: "Research",
    points: [
      "Applied YOLO to vehicle detection and drone video analysis within a Drone Analytics Management System.",
      "Worked with VLMs and LLMs on zero-shot evaluation, parameter-efficient fine-tuning (PEFT), custom adapters and visual question answering (VQA).",
      "Investigated road-infrastructure deficiencies using visual events, IMU motion-sensor data, GPS and Indian Roads Congress (IRC) rules, linking braking or swerving to road conditions, location and applicable rules.",
      "Worked on temporal change detection by comparing videos of the same road stretch captured at different times.",
      "Developed a custom vision-language model (VLM).",
    ],
    tags: ["Drone analytics", "VLM", "PEFT", "Change detection", "IRC rules"],
  },
  {
    role: "Data Science Intern",
    org: "AI Variant",
    period: "Dec 2023 – Jun 2024",
    kind: "Industry",
    points: [
      "Prepared and analysed datasets with Python and Pandas, performing data cleaning and exploratory data analysis to support machine-learning experiments.",
      "Built Streamlit applications for model predictions and visualizations; collaborated on model tuning and communicated findings through reports and presentations.",
    ],
    tags: ["Python", "Pandas", "EDA", "Streamlit"],
  },
];

export interface Project {
  id: string;
  title: string;
  kicker: string;
  summary: string;
  points: string[];
  focus: string[];
  tech: string[];
  repo: string;
  demo?: string;
  featured?: boolean;
  accent: "a" | "b" | "c";
}

export const projects: Project[] = [
  {
    id: "drone",
    title: "Drone-Based Road Asset & Vehicle Detection",
    kicker: "Computer vision · Edge deployment",
    summary:
      "Detection of road assets and vehicles from drone video, benchmarked across three YOLO generations and packaged as a web application.",
    points: [
      "Trained and benchmarked YOLOv8, YOLO11 and YOLO26 on an HPC cluster using JATAYU (10 classes) and DRASHTI-HaOBB (14 classes), covering horizontal and oriented bounding-box detection.",
      "Exported YOLOv8n and YOLO11s to INT8 TensorFlow Lite and built a web application with model comparison, FPS monitoring, VLM scene queries and CSV reporting.",
    ],
    focus: ["Object detection", "Oriented boxes", "Edge inference", "VLM queries"],
    tech: ["Python", "PyTorch", "YOLO", "TensorFlow Lite", "VLMs", "Ollama"],
    repo: "https://github.com/VAbhishek12/Drone-Traffic-detection",
    featured: true,
    accent: "a",
  },
  {
    id: "adversarial",
    title: "Adversarial Robustness of CNNs",
    kicker: "Controlled study · CIFAR-10",
    summary:
      "Do Gaussian smoothing, residual denoising and pooling changes really make adversarially trained ResNet-18 models more robust?",
    points: [
      "Compared the modifications under one shared training recipe; PGD-20 on 10,000 test images at a pixel-space budget of 8/255, plus APGD-CE and APGD-DLR on a 1,000-image subset.",
      "Plain ResNet-18 reached 49.18% PGD-20 accuracy versus 46.61% with all three modifications, and the study documents how normalised and pixel-space budgets change the picture.",
    ],
    focus: ["Robustness", "Evaluation protocol", "Reproducibility"],
    tech: ["Python", "PyTorch", "torchvision", "torchattacks", "CIFAR-10"],
    repo: "https://github.com/VAbhishek12/Adversarial-Robustness",
    accent: "b",
  },
  {
    id: "brain",
    title: "Brain Tumor Classification",
    kicker: "Medical imaging · Deep learning",
    summary: "A CNN that classifies MRI slices as tumor or no tumor, with an interactive Streamlit interface.",
    points: [
      "Built the classifier with image preprocessing and augmentation, then wrapped it in a Streamlit app for interactive inference.",
    ],
    focus: ["Image classification", "Augmentation", "Interactive demo"],
    tech: ["Python", "TensorFlow / Keras", "OpenCV", "Streamlit"],
    repo: "https://github.com/VAbhishek12/BrainTumor_Detection",
    demo: "https://braintumourdetction-12.streamlit.app/",
    accent: "c",
  },
];

export const education = [
  {
    degree: "M.Tech, Computer Science and Engineering (AI)",
    school: "Centre for Development of Advanced Computing (C-DAC), Mohali",
    period: "2024 – 2026",
    score: "CGPA 9.0",
  },
  {
    degree: "B.Tech, Computer Science and Engineering",
    school: "Bhilai Institute of Technology, Raipur",
    period: "2019 – 2023",
    score: "CGPA 8.8",
  },
];

export const achievements = ["Paper accepted at ICVGIP 2026"];
