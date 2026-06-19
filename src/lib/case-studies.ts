import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-saloniq-lumina",
    slug: "lumina-beauty-saloniq",
    client: "Lumina Beauty Studio",
    industry: "Beauty & Wellness",
    serviceUsed: "SalonIQ",
    challenge:
      "Lumina was managing appointments through WhatsApp and a paper register across 3 branches. No-shows were running at 28%, staff schedules clashed weekly, and inventory was tracked manually on spreadsheets — leading to frequent stock-outs of high-demand products.",
    solution:
      "We onboarded Lumina onto SalonIQ, configured their 3 branches, migrated client history, and enabled automated SMS reminders and smart scheduling with real-time staff availability sync.",
    results: [
      { metric: "No-show Rate", value: "↓ 74%", description: "From 28% down to 7% with automated reminders" },
      { metric: "Booking Time", value: "↓ 60%", description: "Appointments confirmed in under 2 minutes" },
      { metric: "Revenue Growth", value: "↑ 32%", description: "More bookings, fewer cancellations in 90 days" },
      { metric: "Inventory Waste", value: "↓ 45%", description: "Overstocking reduced with usage-based alerts" },
    ],
    testimonial: {
      quote:
        "SalonIQ completely transformed how we run our studios. Our staff spends less time on admin and more time with clients. The no-show drop alone paid for the platform in the first month.",
      author: "Priya Mehta",
      role: "Founder",
      company: "Lumina Beauty Studio",
    },
    tags: ["SalonIQ", "Beauty", "Appointment Management", "Multi-Branch"],
  },
  {
    id: "cs-clinicflow-drchoudhary",
    slug: "dr-choudhary-clinic-clinicflow",
    client: "Dr. Choudhary Family Clinic",
    industry: "Healthcare",
    serviceUsed: "ClinicFlow",
    challenge:
      "A busy general practice with 80+ daily patients was still running on manual tokens and handwritten prescriptions. Average patient wait time exceeded 45 minutes, and follow-up rates were near zero due to no reminder system.",
    solution:
      "Deployed ClinicFlow with online booking, digital token queue, electronic prescription module, and automated WhatsApp follow-ups for post-consultation check-ins and report collection.",
    results: [
      { metric: "Wait Time", value: "↓ 55%", description: "Average wait reduced from 45 to 20 minutes" },
      { metric: "Daily Patients", value: "↑ 40%", description: "Capacity increased without adding staff" },
      { metric: "Follow-up Rate", value: "↑ 3×", description: "Automated reminders drove patient return visits" },
      { metric: "Paper Usage", value: "↓ 90%", description: "Near-paperless operations within 30 days" },
    ],
    testimonial: {
      quote:
        "ClinicFlow gave us the efficiency of a corporate hospital without the overhead. My patients notice the difference — shorter waits, digital prescriptions, and we actually follow up with them now.",
      author: "Dr. Rajesh Choudhary",
      role: "Physician & Owner",
      company: "Dr. Choudhary Family Clinic",
    },
    tags: ["ClinicFlow", "Healthcare", "Clinic Management", "Digital Prescriptions"],
  },
  {
    id: "cs-stocksense-swiftlog",
    slug: "swiftlog-stocksense",
    client: "SwiftLog Distribution",
    industry: "Logistics & Warehousing",
    serviceUsed: "StockSense",
    challenge:
      "SwiftLog managed a 15,000 sq.ft. warehouse for a retail FMCG client with over 4,000 SKUs. Stockouts were costing ₹8L/month in missed orders; overstocking tied up working capital; and cycle counts took 3 full days.",
    solution:
      "Implemented StockSense with barcode scanning at all receiving and dispatch points, configured demand forecasting for their top 500 SKUs, and automated purchase order triggers for critical reorder levels.",
    results: [
      { metric: "Stockout Incidents", value: "↓ 82%", description: "Demand forecasting prevented critical shortfalls" },
      { metric: "Cycle Count Time", value: "↓ 66%", description: "3 days reduced to 1 day with barcode scanning" },
      { metric: "Working Capital", value: "↑ ₹12L freed", description: "Overstock reduced through smart reorder rules" },
      { metric: "Order Accuracy", value: "99.2%", description: "Up from 94% with real-time pick confirmations" },
    ],
    testimonial: {
      quote:
        "We had visibility into 4,000 SKUs within the first week. The forecasting alerts alone saved us from two major stockout crises in the first month. StockSense paid for itself in under 60 days.",
      author: "Ankit Sharma",
      role: "Operations Head",
      company: "SwiftLog Distribution",
    },
    tags: ["StockSense", "Warehousing", "Logistics", "FMCG", "Inventory"],
  },
  {
    id: "cs-devops-techwave",
    slug: "techwave-devops-aws-migration",
    client: "TechWave Solutions",
    industry: "Software Agency",
    serviceUsed: "DevOps Engineering + Cloud Migration",
    challenge:
      "TechWave, a 40-person software agency, was running client workloads on unmanaged VPS servers with no CI/CD, no monitoring, and manual deployments that took 3–4 hours. Downtime incidents averaged twice a month.",
    solution:
      "Migrated 12 client applications to AWS (ECS + RDS + CloudFront), built GitHub Actions CI/CD pipelines for all repos, set up Terraform for infrastructure management, and deployed Grafana + CloudWatch for full observability.",
    results: [
      { metric: "Deployment Time", value: "↓ 95%", description: "From 4 hours to under 12 minutes per release" },
      { metric: "Downtime", value: "↓ 91%", description: "2 incidents/month → zero in 4 consecutive months" },
      { metric: "Infrastructure Cost", value: "↓ 38%", description: "Right-sizing and Reserved Instances on AWS" },
      { metric: "Developer Velocity", value: "↑ 2.4×", description: "Teams ship features, not deployments" },
    ],
    testimonial: {
      quote:
        "NeurologicX didn't just migrate our infrastructure — they changed how our entire engineering team operates. We went from dreading deployments to pushing 8–10 releases a week without breaking a sweat.",
      author: "Sameer Joshi",
      role: "CTO",
      company: "TechWave Solutions",
    },
    tags: ["DevOps", "AWS", "CI/CD", "Cloud Migration", "Agency"],
  },
];
