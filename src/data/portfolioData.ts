import { Project, Experience, TechCategory, StatItem, BlogPost } from '../types';

export const PERSONAL_INFO = {
  name: "Tushar",
  title: "DevOps Engineer",
  email: "tushar.codespace@gmail.com",
  github: "https://github.com/Tushar-CodeSpace",
  linkedin: "https://linkedin.com",
  twitter: "https://x.com",
  location: "India",
  status: "Available for opportunities",
  remotePreference: "Available for remote / hybrid",
  bio: "I'm a DevOps Engineer with 4+ years of experience in industrial automation and cloud infrastructure. I enjoy building automation systems, managing Linux servers, deploying applications and working on real-world problems. I'm always learning and exploring new technologies.",
  heroDescription: "I build, deploy and maintain reliable systems for cloud, on-premise and industrial automation. Passionate about automation, infrastructure, and solving real-world problems.",
};

export const STATS: StatItem[] = [
  { value: "4+", label: "Years Experience" },
  { value: "20+", label: "Projects Deployed" },
  { value: "132+", label: "Repositories Migrated" },
  { value: "99.9%", label: "System Uptime" },
  { value: "10+", label: "Live Deployments" },
];

export const HERO_COMPETENCIES = [
  {
    title: "CI/CD Automation",
    subtitle: "Jenkins, GitHub Actions, Azure DevOps",
    icon: "git-branch",
  },
  {
    title: "Cloud Infrastructure",
    subtitle: "AWS, Azure, Linux Servers",
    icon: "cloud",
  },
  {
    title: "Containerization",
    subtitle: "Docker, Kubernetes, Dokploy",
    icon: "box",
  },
  {
    title: "Monitoring & Observability",
    subtitle: "Prometheus, Grafana, ELK, Custom Agents",
    icon: "activity",
  },
  {
    title: "Industrial Automation",
    subtitle: "WMS, WCS, SCADA, PLC Integration",
    icon: "cpu",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "octyn-devops",
    title: "OcTyn-DevOps-Services",
    category: "DevOps Platform",
    categoryColor: "blue",
    description: "CI/CD, Monitoring, Server Setup, Deployment Automation",
    fullDescription: "A production-grade unified DevOps pipeline and infrastructure platform engineered for rapid microservice deployments, zero-downtime rolling upgrades, automated SSL certificate lifecycle management, and Prometheus metrics telemetry.",
    image: "./assets/project-octyn.jpg",
    tags: ["GitHub Actions", "Docker", "Kubernetes", "AWS", "Bash"],
    features: [
      "End-to-end automated GitOps workflows with GitHub Actions & Webhooks",
      "Multi-environment Kubernetes deployment with custom Helm charts",
      "Automated Nginx reverse proxy configuration with Let's Encrypt SSL auto-renewal",
      "Integrated Prometheus metrics exporter and Grafana monitoring dashboards"
    ],
    architecture: ["GitHub Push", "GitHub Actions Runner", "Docker Registry", "Kubernetes Ingress", "Prometheus Agent"],
    metrics: [
      { label: "Deployment Speed", value: "< 3 mins" },
      { label: "Failure Rate", value: "< 0.1%" },
      { label: "Clusters Managed", value: "6+" }
    ],
    githubUrl: "https://github.com/Tushar-CodeSpace/OcTyn-DevOps-Services",
    featured: true,
  },
  {
    id: "nidoworkz-deployment",
    title: "NIDOWORKZ Deployment",
    category: "Industrial Automation",
    categoryColor: "orange",
    description: "Industrial WMS/Sorter Systems PLC Integration, Monitoring",
    fullDescription: "Enterprise deployment suite for high-volume automated warehouse sorting systems. Orchestrates communication between hardware PLC control boards, Warehouse Management Systems (WMS), and Warehouse Control Systems (WCS) with resilient error failover.",
    image: "./assets/project-nidoworkz.jpg",
    tags: ["Python", "Docker", "Linux", "C/PLC", "Dokploy"],
    features: [
      "Low-latency telemetry pipeline connecting industrial PLC controllers to cloud servers",
      "High-availability sorter logic with fallback routing for zero sorting bottlenecks",
      "Dockerized microservices deployed via Dokploy on edge industrial Linux gateways",
      "Real-time visual monitoring dashboard displaying parcel sorting throughput and fault states"
    ],
    architecture: ["PLC Hardware Sorter", "Industrial Edge Gateway", "Python Telemetry Daemon", "WMS / WCS Core", "Central DB"],
    metrics: [
      { label: "Parcel Throughput", value: "10,000 / hr" },
      { label: "PLC Response Time", value: "< 15 ms" },
      { label: "Uptime", value: "99.98%" }
    ],
    githubUrl: "https://github.com/Tushar-CodeSpace",
    featured: true,
  },
  {
    id: "central-monitoring",
    title: "Central Monitoring Agent",
    category: "Monitoring System",
    categoryColor: "green",
    description: "Python Agent, Alerts, System Metrics",
    fullDescription: "Lightweight, cross-platform Linux daemon written in Python that continuously tracks hardware performance, system services, memory consumption, disk I/O, and network bottlenecks with instant notification dispatcher.",
    image: "./assets/project-monitoring.jpg",
    tags: ["Python", "Grafana", "Prometheus", "ELK", "Linux"],
    features: [
      "Ultra-low CPU footprint (< 0.5% overhead) designed for edge and production servers",
      "Real-time push metrics into Prometheus pushgateway and Elasticsearch",
      "Automated alerting triggers sending incident alerts to Slack, Discord, and Telegram",
      "Custom systemd service monitor with automated auto-restart recovery triggers"
    ],
    architecture: ["Host System Kernel", "Python Agent Daemon", "Prometheus / ELK", "Grafana Dashboard", "Alert Webhooks"],
    metrics: [
      { label: "Agent Memory Footprint", value: "< 24 MB" },
      { label: "Sample Rate", value: "1 sec" },
      { label: "Alert Latency", value: "< 2s" }
    ],
    githubUrl: "https://github.com/Tushar-CodeSpace",
    featured: true,
  },
  {
    id: "glitch-devops",
    title: "GLiTch - DevOps as a Service",
    category: "Self Project",
    categoryColor: "purple",
    description: "SaaS Platform for Automated Deployments, Monitoring and Server Management",
    fullDescription: "An all-in-one PaaS / DevOps-as-a-Service portal allowing developers to connect their own VPS or bare-metal servers and deploy containers, databases, and microservices in one click without manual CLI setup.",
    image: "./assets/project-glitch.jpg",
    tags: ["Node.js", "React", "Docker", "Cloud", "Nginx"],
    features: [
      "One-click multi-server orchestration across AWS, DigitalOcean, and on-premise boxes",
      "Automatic SSL provisioning, DNS routing, and reverse proxy generation",
      "Built-in database provisioning with automated daily snapshot backups to S3",
      "Live terminal streaming and log viewer directly in the browser via WebSockets"
    ],
    architecture: ["Web Console UI", "API Gateway", "Node Worker Agents", "Docker Engine", "S3 Storage"],
    metrics: [
      { label: "Deploy Time", value: "45s" },
      { label: "VPS Supported", value: "Any Linux" },
      { label: "SSL Certs", value: "Automated" }
    ],
    githubUrl: "https://github.com/Tushar-CodeSpace",
    featured: true,
  },
  {
    id: "edge-k3s-cluster",
    title: "Edge K3s Automation Mesh",
    category: "DevOps Platform",
    categoryColor: "blue",
    description: "Lightweight edge Kubernetes cluster orchestration across ARM64 devices",
    fullDescription: "Fleet management system for deploying and updating lightweight K3s Kubernetes clusters across distributed industrial edge nodes and single-board computers.",
    image: "./assets/project-octyn.jpg",
    tags: ["Kubernetes", "K3s", "Ansible", "Linux", "Docker"],
    features: [
      "Zero-touch provisioning of K3s clusters using Ansible playbooks",
      "Encrypted WireGuard mesh network connecting remote devices across NAT",
      "Automated rolling over-the-air container updates"
    ],
    architecture: ["Ansible Controller", "Edge Nodes", "WireGuard VPN", "K3s Cluster"],
    metrics: [
      { label: "Nodes Managed", value: "25+" },
      { label: "RAM Usage", value: "< 512MB" }
    ],
    githubUrl: "https://github.com/Tushar-CodeSpace",
    featured: false,
  },
  {
    id: "terraform-multicloud",
    title: "Multi-Cloud IaC Baseline",
    category: "DevOps Platform",
    categoryColor: "blue",
    description: "Modular Terraform configurations for redundant AWS & Azure topologies",
    fullDescription: "Enterprise Infrastructure-as-Code modules for provisioning VPCs, IAM roles, Kubernetes clusters (EKS/AKS), and security groups with automated linting and compliance checks.",
    image: "./assets/project-glitch.jpg",
    tags: ["Terraform", "AWS", "Azure", "GitHub Actions", "Security"],
    features: [
      "Modular reusable Terraform modules with state locking in DynamoDB/S3",
      "Automated security scanning with tfsec and checkov in CI pipelines",
      "Multi-region disaster recovery standby configuration"
    ],
    architecture: ["GitHub Actions", "Terraform Cloud", "AWS VPC", "Azure VNet"],
    metrics: [
      { label: "Provisioning Time", value: "12 mins" },
      { label: "Compliance Score", value: "100%" }
    ],
    githubUrl: "https://github.com/Tushar-CodeSpace",
    featured: false,
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "nido",
    period: "2024 - Present",
    role: "Senior DevOps Engineer",
    company: "Nido Machineries Pvt Ltd",
    companyLogoType: "nido",
    location: "India",
    bullets: [
      "Deployed and maintained WMS/WCS systems",
      "CI/CD pipelines, server management, monitoring",
      "Industrial automation and cloud integration"
    ],
    expandedDetails: [
      "Architected robust deployment pipelines reducing release turnaround time from hours to under 15 minutes.",
      "Integrated edge Linux servers with industrial sorting machines and conveyor PLC networks.",
      "Established Prometheus + Grafana observability dashboards monitoring 50+ live industrial nodes 24/7.",
      "Configured automated backup procedures, failover protocols, and secure remote VPN access."
    ],
    technologies: ["Docker", "Kubernetes", "Linux", "Python", "Prometheus", "Grafana", "WMS/WCS", "CI/CD"]
  },
  {
    id: "flipkart",
    period: "2021 - 2024",
    role: "Automation Engineer",
    company: "Flipkart Automation",
    companyLogoType: "flipkart",
    location: "India",
    bullets: [
      "Worked on sorting machines and automation systems",
      "Machine integration and technical support",
      "On-site and remote deployment"
    ],
    expandedDetails: [
      "Led on-site and remote deployment of automated warehouse sorting systems handling peak festival traffic.",
      "Integrated machine sensor telemetry with backend database tracking parcel dimensions, weights, and barcode scans.",
      "Diagnosed and resolved critical hardware-to-software communication bottlenecks with sub-second latency.",
      "Trained engineering and operations teams on software diagnostics and emergency recovery protocols."
    ],
    technologies: ["Automation Systems", "Sorting Machines", "Python", "Linux", "Troubleshooting", "System Integration"]
  },
  {
    id: "nedo",
    period: "2019 - 2021",
    role: "Technical Support Engineer",
    company: "Nedo Automation",
    companyLogoType: "nedo",
    location: "India",
    bullets: [
      "Installation, troubleshooting and support",
      "PLC, SCADA, industrial control systems"
    ],
    expandedDetails: [
      "Installed and commissioned PLC and SCADA industrial automation control systems across client facilities.",
      "Conducted on-site technical diagnostics, electrical loop testing, and sensor calibration.",
      "Authored standardized operational procedures (SOPs) and technical documentation for field engineers.",
      "Maintained 99.5%+ uptime for mission-critical client automation lines."
    ],
    technologies: ["PLC", "SCADA", "Industrial Control", "Hardware Integration", "Diagnostics", "Linux"]
  }
];

export const TECH_STACK: TechCategory[] = [
  {
    category: "Cloud",
    skills: [
      { name: "AWS", icon: "aws", level: "Advanced" },
      { name: "Azure", icon: "azure", level: "Advanced" },
      { name: "GCP", icon: "gcp", level: "Intermediate" },
      { name: "DigitalOcean", icon: "digitalocean", level: "Advanced" },
    ]
  },
  {
    category: "Containers",
    skills: [
      { name: "Docker", icon: "docker", level: "Expert" },
      { name: "Kubernetes", icon: "kubernetes", level: "Advanced" },
      { name: "Helm", icon: "helm", level: "Advanced" },
      { name: "Portainer", icon: "portainer", level: "Intermediate" },
    ]
  },
  {
    category: "CI/CD",
    skills: [
      { name: "GitHub Actions", icon: "github", level: "Expert" },
      { name: "Jenkins", icon: "jenkins", level: "Advanced" },
      { name: "Azure Pipelines", icon: "azuredevops", level: "Advanced" },
      { name: "GitLab CI", icon: "gitlab", level: "Intermediate" },
    ]
  },
  {
    category: "Monitoring",
    skills: [
      { name: "Grafana", icon: "grafana", level: "Expert" },
      { name: "Prometheus", icon: "prometheus", level: "Expert" },
      { name: "ELK Stack", icon: "elk", level: "Intermediate" },
      { name: "Datadog", icon: "datadog", level: "Intermediate" },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "postgresql", level: "Advanced" },
      { name: "MongoDB", icon: "mongodb", level: "Intermediate" },
      { name: "Redis", icon: "redis", level: "Advanced" },
      { name: "MySQL", icon: "mysql", level: "Advanced" },
    ]
  },
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: "python", level: "Expert" },
      { name: "JavaScript", icon: "javascript", level: "Intermediate" },
      { name: "TypeScript", icon: "typescript", level: "Intermediate" },
      { name: "Bash / Shell", icon: "bash", level: "Expert" },
    ]
  },
  {
    category: "Others",
    skills: [
      { name: "Nginx", icon: "nginx", level: "Expert" },
      { name: "Linux", icon: "linux", level: "Expert" },
      { name: "Terraform", icon: "terraform", level: "Intermediate" },
      { name: "Ansible", icon: "ansible", level: "Intermediate" },
    ]
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "zero-downtime-wms",
    title: "Building Zero-Downtime CI/CD Pipelines for Industrial WMS Systems",
    date: "October 2026",
    readTime: "6 min read",
    excerpt: "How we decoupled industrial PLC hardware dependencies to safely run continuous automated deployments in 24/7 high-throughput warehouse environments.",
    tags: ["DevOps", "CI/CD", "Industrial Automation", "Docker"],
    slug: "zero-downtime-wms"
  },
  {
    id: "lightweight-edge-agents",
    title: "Monitoring Edge Devices & PLC Gateways using Lightweight Python Agents",
    date: "August 2026",
    readTime: "8 min read",
    excerpt: "Engineering a sub-20MB daemon that collects telemetry from ARM64 gateway controllers and pushes real-time metrics to Prometheus and Grafana without CPU latency spikes.",
    tags: ["Monitoring", "Python", "Prometheus", "Linux"],
    slug: "lightweight-edge-agents"
  },
  {
    id: "migrating-130-repos",
    title: "Migrating 130+ Repositories to GitHub Actions: A Complete Post-Mortem",
    date: "May 2026",
    readTime: "10 min read",
    excerpt: "Lessons learned, automation scripts used, and pitfalls avoided while migrating legacy self-hosted Jenkins pipelines into centralized reusable GitHub Actions workflows.",
    tags: ["GitHub Actions", "CI/CD", "Automation", "Jenkins"],
    slug: "migrating-130-repos"
  }
];
