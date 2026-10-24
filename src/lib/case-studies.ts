import type { CaseStudy } from "@/types";

export const caseStudies: CaseStudy[] = [
  {
    id: "cs-saloniq-lumina",
    slug: "lumina-beauty-saloniq",
    client: "Lumina Beauty Studio",
    industry: "Beauty & Wellness",
    serviceUsed: "SalonIQ",
    challenge:
      "Lumina ran appointments for its 3 branches through WhatsApp and a paper register. No-shows were at 28%, staff schedules clashed every week, and stock was tracked by hand in spreadsheets, so their best-selling products kept running out.",
    solution:
      "We set Lumina up on SalonIQ, configured all 3 branches and moved their client history across. Automated SMS reminders went live from day one, along with scheduling that checks real-time staff availability before confirming a booking.",
    results: [
      { metric: "No-show Rate", value: "-74%", description: "From 28% down to 7% with automated reminders" },
      { metric: "Booking Time", value: "-60%", description: "Appointments confirmed in under 2 minutes" },
      { metric: "Revenue Growth", value: "+32%", description: "More bookings and fewer cancellations in 90 days" },
      { metric: "Inventory Waste", value: "-45%", description: "Less overstock thanks to usage-based alerts" },
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
      "A busy general practice seeing 80+ patients a day was still using paper tokens and handwritten prescriptions. Patients waited more than 45 minutes on average, and almost nobody came back for follow-ups because there was no way to remind them.",
    solution:
      "We rolled out ClinicFlow with online booking, a digital token queue and electronic prescriptions. Automated WhatsApp messages now handle post-consultation check-ins and remind patients when their reports are ready to collect.",
    results: [
      { metric: "Wait Time", value: "-55%", description: "Average wait cut from 45 to 20 minutes" },
      { metric: "Daily Patients", value: "+40%", description: "More patients seen without adding staff" },
      { metric: "Follow-up Rate", value: "3x", description: "Automated reminders brought patients back" },
      { metric: "Paper Usage", value: "-90%", description: "Almost paperless within 30 days" },
    ],
    testimonial: {
      quote:
        "ClinicFlow gave us the efficiency of a corporate hospital without the overhead. My patients notice the difference: shorter waits, digital prescriptions, and we actually follow up with them now.",
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
      "SwiftLog runs a 15,000 sq. ft. warehouse for a retail FMCG client with more than 4,000 SKUs. Stockouts were costing them ₹8L a month in missed orders, overstock was tying up working capital, and every cycle count took 3 full days.",
    solution:
      "We implemented StockSense with barcode scanning at every receiving and dispatch point, set up demand forecasting for their top 500 SKUs, and configured purchase orders to raise themselves automatically when critical items hit their reorder level.",
    results: [
      { metric: "Stockout Incidents", value: "-82%", description: "Forecasting caught shortfalls before they happened" },
      { metric: "Cycle Count Time", value: "-66%", description: "From 3 days to 1 with barcode scanning" },
      { metric: "Working Capital", value: "₹12L freed", description: "Less overstock through smarter reorder rules" },
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
      "TechWave, a 40-person software agency, was hosting client workloads on unmanaged VPS servers. There was no CI/CD and no monitoring, every deployment was manual and took 3 to 4 hours, and they were dealing with downtime about twice a month.",
    solution:
      "We migrated 12 client applications to AWS (ECS, RDS and CloudFront) and built GitHub Actions CI/CD pipelines for every repository. Infrastructure is now managed with Terraform, and Grafana with CloudWatch gives the team full visibility into what's running.",
    results: [
      { metric: "Deployment Time", value: "-95%", description: "From 4 hours to under 12 minutes per release" },
      { metric: "Downtime", value: "-91%", description: "From 2 incidents a month to zero for 4 months straight" },
      { metric: "Infrastructure Cost", value: "-38%", description: "Right-sized servers and AWS Reserved Instances" },
      { metric: "Developer Velocity", value: "2.4x", description: "Developers ship features instead of fighting deployments" },
    ],
    testimonial: {
      quote:
        "NeurologicX didn't just migrate our infrastructure, they changed how our entire engineering team operates. We went from dreading deployments to pushing 8-10 releases a week without breaking a sweat.",
      author: "Sameer Joshi",
      role: "CTO",
      company: "TechWave Solutions",
    },
    tags: ["DevOps", "AWS", "CI/CD", "Cloud Migration", "Agency"],
  },
];
