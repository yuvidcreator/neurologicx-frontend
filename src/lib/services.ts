import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "cloud-migration",
    name: "Cloud Infrastructure Migration",
    tagline: "Zero-Downtime Migrations to AWS, Azure & GCP",
    description:
      "We plan, architect, and execute end-to-end cloud migrations for tech agencies and enterprises — moving legacy infrastructure, databases, and workloads to AWS, Microsoft Azure, or Google Cloud Platform with minimal disruption and full cost visibility.",
    iconName: "Cloud",
    providers: ["AWS", "Azure", "GCP"],
    capabilities: [
      "Infrastructure assessment & migration readiness audit",
      "Cloud architecture design & cost optimization planning",
      "Lift-and-shift and re-platform migrations",
      "Database migration (PostgreSQL, MySQL, MongoDB, Oracle)",
      "Zero-downtime cutover strategy & rollback planning",
      "Networking, VPC, IAM roles & security hardening",
      "Post-migration performance monitoring & support",
      "Multi-cloud and hybrid cloud setups",
    ],
  },
  {
    id: "devops",
    name: "DevOps Engineering",
    tagline: "Automate, Deploy & Scale with Confidence",
    description:
      "Our DevOps engineers embed with your team to build and operate robust CI/CD pipelines, containerized workloads, and infrastructure-as-code setups — enabling agencies to ship faster, reduce manual toil, and maintain production-grade reliability.",
    iconName: "GitBranch",
    providers: ["AWS", "Azure", "GCP"],
    capabilities: [
      "CI/CD pipeline design & implementation (GitHub Actions, GitLab CI, Jenkins)",
      "Docker containerization & Kubernetes orchestration (EKS, AKS, GKE)",
      "Infrastructure as Code — Terraform, Pulumi, CloudFormation",
      "Monitoring & observability (Prometheus, Grafana, Datadog, CloudWatch)",
      "Log aggregation & alerting (ELK Stack, Loki)",
      "Secret management & security scanning in pipelines",
      "Auto-scaling, load balancing & cost governance",
      "On-call support & SLA-backed incident response",
    ],
  },
];
