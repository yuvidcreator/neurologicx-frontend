import type { Service } from "@/types";

export const services: Service[] = [
  {
    id: "cloud-migration",
    name: "Cloud Infrastructure Migration",
    tagline: "A carefully planned move to AWS, Azure or GCP",
    description:
      "We move your servers, databases and applications to AWS, Microsoft Azure or Google Cloud. We start by auditing what you run today, plan the move around your release schedule, and stay on after cutover until everything is stable. You'll know what it costs to run before anything moves.",
    iconName: "Cloud",
    providers: ["AWS", "Azure", "GCP"],
    capabilities: [
      "Infrastructure audit and migration readiness check",
      "Cloud architecture design with cost planning",
      "Lift-and-shift and re-platform migrations",
      "Database migration for PostgreSQL, MySQL, MongoDB and Oracle",
      "Zero-downtime cutover plan with a tested rollback",
      "Networking, VPC, IAM roles and security hardening",
      "Performance monitoring and support after go-live",
      "Multi-cloud and hybrid setups",
    ],
  },
  {
    id: "devops",
    name: "DevOps Engineering",
    tagline: "Ship more often, with fewer late-night fixes",
    description:
      "Our engineers join your team and set up what you need to release with confidence: CI/CD pipelines, containers and infrastructure as code. Agencies work with us to ship faster and stop losing developer hours to manual deployments, without hiring a full-time platform team.",
    iconName: "GitBranch",
    providers: ["AWS", "Azure", "GCP"],
    capabilities: [
      "CI/CD pipelines with GitHub Actions, GitLab CI or Jenkins",
      "Docker and Kubernetes on EKS, AKS or GKE",
      "Infrastructure as code with Terraform, Pulumi or CloudFormation",
      "Monitoring with Prometheus, Grafana, Datadog or CloudWatch",
      "Centralized logs and alerts with ELK or Loki",
      "Secrets management and security scans in every pipeline",
      "Autoscaling, load balancing and cloud cost controls",
      "On-call support with agreed response times",
    ],
  },
];
