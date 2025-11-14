// ========================================
// REVISED SUBSCRIPTION STRUCTURE
// Personal Banking: Free + Paid AI
// Business Banking: Paid from Start
// ========================================

export const PRODUCT_LINES = {
  personal: "personal",
  business: "business",
} as const;

export type ProductLine = (typeof PRODUCT_LINES)[keyof typeof PRODUCT_LINES];

// ========================================
// PERSONAL BANKING TIERS
// ========================================

export const PERSONAL_TIERS = {
  personal_free: {
    name: "Personal Free",
    productLine: "personal" as const,
    price: 0,
    billingPeriod: "forever",
    features: {
      maxBankAccounts: 2,
      maxBudgets: 5,
      maxGoals: 3,
      budgetTracking: true,
      aiInsights: false, // LOCKED - Requires upgrade
      cashflowForecasting: false, // LOCKED
      businessMode: false, // Not available for personal
      vatCalculation: false,
      invoiceManagement: false,
      receiptOCR: false, // LOCKED
      advancedReports: false, // LOCKED
      exportData: true, // CSV only
      multiCurrency: false,
      teamCollaboration: false,
      apiAccess: false,
      prioritySupport: false,
    },
    limits: {
      aiQueriesPerMonth: 0,
      ocrScansPerMonth: 0,
      invoicesPerMonth: 0,
      reportsPerMonth: 1, // Basic monthly summary only
    },
    description: "Free personal finance tracking - Perfect to get started",
    highlights: [
      "Connect up to 2 bank accounts",
      "Create 5 budgets",
      "3 savings goals",
      "Basic transaction tracking",
      "Manual categorization",
      "Basic monthly reports",
      "CSV export",
    ],
    cta: "Get Started Free",
  },

  personal_pro: {
    name: "Personal Pro",
    productLine: "personal" as const,
    price: 7.99,
    billingPeriod: "month",
    features: {
      maxBankAccounts: 10,
      maxBudgets: -1, // Unlimited
      maxGoals: -1, // Unlimited
      budgetTracking: true,
      aiInsights: true, // ✅ UNLOCKED
      cashflowForecasting: true, // ✅ UNLOCKED
      businessMode: false, // Not available for personal
      vatCalculation: false,
      invoiceManagement: false,
      receiptOCR: true, // ✅ UNLOCKED
      advancedReports: true, // ✅ UNLOCKED
      exportData: true, // PDF + CSV
      multiCurrency: false,
      teamCollaboration: false,
      apiAccess: false,
      prioritySupport: false,
    },
    limits: {
      aiQueriesPerMonth: 200, // Higher limit for personal
      ocrScansPerMonth: 100,
      invoicesPerMonth: 0,
      reportsPerMonth: -1, // Unlimited
    },
    description: "AI-powered personal finance - Your smart money assistant",
    highlights: [
      "Everything in Free, PLUS:",
      "🤖 AI Financial Assistant",
      "📊 Smart spending insights",
      "📈 30/60/90 day cashflow forecasting",
      "📸 Receipt OCR scanning (100/month)",
      "📑 Advanced reports & insights",
      "💾 PDF & CSV exports",
      "200 AI queries/month",
      "Unlimited budgets & goals",
      "Up to 10 bank accounts",
    ],
    cta: "Upgrade to Pro",
    popularBadge: true,
  },
} as const;

// ========================================
// BUSINESS BANKING TIERS (All Paid)
// ========================================

export const BUSINESS_TIERS = {
  business_starter: {
    name: "Business Starter",
    productLine: "business" as const,
    price: 24.99,
    billingPeriod: "month",
    features: {
      maxBankAccounts: 5,
      maxBudgets: -1,
      maxGoals: -1,
      budgetTracking: true,
      aiInsights: true,
      cashflowForecasting: true,
      businessMode: true, // ✅ Business mode enabled
      vatCalculation: true, // ✅ VAT enabled
      invoiceManagement: true, // ✅ Invoicing enabled
      receiptOCR: true,
      advancedReports: true,
      exportData: true,
      multiCurrency: false,
      teamCollaboration: false, // LOCKED - Requires upgrade
      apiAccess: false, // LOCKED
      prioritySupport: false,
    },
    limits: {
      aiQueriesPerMonth: 300,
      ocrScansPerMonth: 150,
      invoicesPerMonth: 50,
      reportsPerMonth: -1,
    },
    description: "Complete business banking - Run your business like a pro",
    highlights: [
      "💼 Full business banking features",
      "🧾 VAT calculation & returns (MTD compliant)",
      "📄 Invoice generation (50/month)",
      "👥 Client management",
      "📊 Project tracking",
      "📈 P&L statements",
      "🧮 Balance sheets",
      "📉 Cashflow reports",
      "🤖 AI business insights (300 queries/month)",
      "📸 Receipt OCR (150/month)",
      "💾 All export formats",
      "Up to 5 bank accounts",
    ],
    cta: "Start Business Plan",
  },

  business_pro: {
    name: "Business Pro",
    productLine: "business" as const,
    price: 49.99,
    billingPeriod: "month",
    features: {
      maxBankAccounts: -1, // Unlimited
      maxBudgets: -1,
      maxGoals: -1,
      budgetTracking: true,
      aiInsights: true,
      cashflowForecasting: true,
      businessMode: true,
      vatCalculation: true,
      invoiceManagement: true,
      receiptOCR: true,
      advancedReports: true,
      exportData: true,
      multiCurrency: true, // ✅ UNLOCKED
      teamCollaboration: true, // ✅ UNLOCKED (up to 3 users)
      apiAccess: false, // LOCKED
      prioritySupport: true, // ✅ UNLOCKED
    },
    limits: {
      aiQueriesPerMonth: 1000,
      ocrScansPerMonth: 500,
      invoicesPerMonth: 200,
      reportsPerMonth: -1,
      teamMembers: 3,
    },
    description: "Advanced business management - Scale your operations",
    highlights: [
      "Everything in Business Starter, PLUS:",
      "👥 Team collaboration (up to 3 users)",
      "🌍 Multi-currency support",
      "📄 More invoices (200/month)",
      "🤖 More AI queries (1,000/month)",
      "📸 More OCR scans (500/month)",
      "🎯 Priority support",
      "⚡ Advanced automations",
      "📊 Custom report builder",
      "🔔 Smart alerts & notifications",
      "Unlimited bank accounts",
    ],
    cta: "Upgrade to Pro",
    popularBadge: true,
  },

  business_enterprise: {
    name: "Business Enterprise",
    productLine: "business" as const,
    price: 99.99,
    billingPeriod: "month",
    features: {
      maxBankAccounts: -1,
      maxBudgets: -1,
      maxGoals: -1,
      budgetTracking: true,
      aiInsights: true,
      cashflowForecasting: true,
      businessMode: true,
      vatCalculation: true,
      invoiceManagement: true,
      receiptOCR: true,
      advancedReports: true,
      exportData: true,
      multiCurrency: true,
      teamCollaboration: true, // Unlimited users
      apiAccess: true, // ✅ UNLOCKED
      prioritySupport: true,
      whiteLabel: true,
      customIntegrations: true,
      dedicatedAccountManager: true,
    },
    limits: {
      aiQueriesPerMonth: -1, // Unlimited
      ocrScansPerMonth: -1, // Unlimited
      invoicesPerMonth: -1, // Unlimited
      reportsPerMonth: -1,
      teamMembers: -1, // Unlimited
      apiCallsPerMonth: 100000,
    },
    description: "Enterprise-grade solution - Built for scale",
    highlights: [
      "Everything in Business Pro, PLUS:",
      "👥 Unlimited team members",
      "🔌 API access (100k calls/month)",
      "🎨 White-label options",
      "🔗 Custom integrations",
      "🤝 Dedicated account manager",
      "📞 24/7 priority support",
      "🔒 Advanced security features",
      "📊 Custom reporting engine",
      "⚡ Webhook support",
      "🌐 Multi-entity support",
      "Unlimited everything",
    ],
    cta: "Contact Sales",
  },
} as const;

// ========================================
// COMBINED SUBSCRIPTION STRUCTURE
// ========================================

export const ALL_TIERS = {
  ...PERSONAL_TIERS,
  ...BUSINESS_TIERS,
} as const;

export type SubscriptionTierType = keyof typeof ALL_TIERS;

// ========================================
// TIER COMPARISON
// ========================================

export function isPersonalTier(tier: SubscriptionTierType): boolean {
  return tier.startsWith("personal_");
}

export function isBusinessTier(tier: SubscriptionTierType): boolean {
  return tier.startsWith("business_");
}

export function canUpgradeToBusinessFrom(currentTier: SubscriptionTierType): boolean {
  // Personal users can upgrade to business
  return isPersonalTier(currentTier);
}

export function getProductLine(tier: SubscriptionTierType): ProductLine {
  return ALL_TIERS[tier].productLine;
}

// ========================================
// PRICING DISPLAY
// ========================================

export function formatTierPrice(tier: SubscriptionTierType): string {
  const { price, billingPeriod } = ALL_TIERS[tier];

  if (price === 0) {
    return "Free";
  }

  return `$${price.toFixed(2)}/${billingPeriod}`;
}

export function getAnnualSavings(tier: SubscriptionTierType): number {
  const monthlyPrice = ALL_TIERS[tier].price;
  if (monthlyPrice === 0) return 0;

  // 20% discount on annual billing
  const annualPrice = monthlyPrice * 12 * 0.8;
  const savings = monthlyPrice * 12 - annualPrice;

  return savings;
}

// ========================================
// FEATURE ACCESS
// ========================================

export function canAccessFeature(
  tier: SubscriptionTierType,
  feature: keyof typeof PERSONAL_TIERS.personal_free.features
): boolean {
  return ALL_TIERS[tier].features[feature];
}

export function getFeatureLimit(
  tier: SubscriptionTierType,
  limit: keyof typeof PERSONAL_TIERS.personal_free.limits
): number {
  return ALL_TIERS[tier].limits[limit];
}

// ========================================
// UPGRADE PATHS
// ========================================

export function getUpgradePath(currentTier: SubscriptionTierType): {
  nextTier: SubscriptionTierType | null;
  reason: string;
} {
  const upgradeMap: Record<
    SubscriptionTierType,
    { nextTier: SubscriptionTierType | null; reason: string }
  > = {
    personal_free: {
      nextTier: "personal_pro",
      reason: "Unlock AI insights, forecasting, and advanced reports",
    },
    personal_pro: {
      nextTier: "business_starter",
      reason: "Add business features: VAT, invoicing, client management",
    },
    business_starter: {
      nextTier: "business_pro",
      reason: "Enable team collaboration and multi-currency support",
    },
    business_pro: {
      nextTier: "business_enterprise",
      reason: "Get unlimited access, API, and dedicated support",
    },
    business_enterprise: {
      nextTier: null,
      reason: "You're on the highest tier!",
    },
  };

  return upgradeMap[currentTier];
}

// ========================================
// PAYWALL MESSAGES (Updated)
// ========================================

export const PAYWALL_MESSAGES = {
  // Personal tier paywalls
  aiInsights: {
    title: "Unlock Your AI Financial Assistant",
    description:
      "Get personalized insights, spending recommendations, and smart financial advice powered by AI.",
    requiredTier: "personal_pro" as SubscriptionTierType,
    requiredProductLine: "personal" as ProductLine,
    benefit: "Make smarter money decisions with AI",
    cta: "Upgrade to Personal Pro for $7.99/mo",
  },

  cashflowForecasting: {
    title: "See Your Financial Future",
    description:
      "AI-powered cashflow predictions for 30, 60, and 90 days. Know exactly where your money is going.",
    requiredTier: "personal_pro" as SubscriptionTierType,
    requiredProductLine: "personal" as ProductLine,
    benefit: "Plan ahead with confidence",
    cta: "Upgrade to Personal Pro",
  },

  receiptOCR: {
    title: "Scan Receipts Automatically",
    description:
      "Upload receipts and let AI extract amounts, merchants, and categories automatically.",
    requiredTier: "personal_pro" as SubscriptionTierType,
    requiredProductLine: "personal" as ProductLine,
    benefit: "Save hours of manual entry",
    cta: "Upgrade to Personal Pro",
  },

  advancedReports: {
    title: "Advanced Financial Reports",
    description:
      "Generate detailed spending reports, export to PDF/CSV, and track your progress over time.",
    requiredTier: "personal_pro" as SubscriptionTierType,
    requiredProductLine: "personal" as ProductLine,
    benefit: "Professional reporting tools",
    cta: "Upgrade to Personal Pro",
  },

  // Business tier paywalls
  businessMode: {
    title: "Switch to Business Banking",
    description:
      "Separate business and personal finances, track VAT, generate invoices, and manage clients.",
    requiredTier: "business_starter" as SubscriptionTierType,
    requiredProductLine: "business" as ProductLine,
    benefit: "Professional business management",
    cta: "Start Business Plan at $24.99/mo",
  },

  vatCalculation: {
    title: "Automated VAT Tracking",
    description:
      "MTD-compliant VAT calculations, returns, and filing. Never miss a VAT deadline again.",
    requiredTier: "business_starter" as SubscriptionTierType,
    requiredProductLine: "business" as ProductLine,
    benefit: "HMRC compliant, stress-free",
    cta: "Upgrade to Business",
  },

  invoiceManagement: {
    title: "Professional Invoicing",
    description:
      "Create, send, and track invoices. Get paid faster with automatic reminders.",
    requiredTier: "business_starter" as SubscriptionTierType,
    requiredProductLine: "business" as ProductLine,
    benefit: "Get paid 30% faster",
    cta: "Upgrade to Business",
  },

  teamCollaboration: {
    title: "Add Your Team",
    description:
      "Invite team members, set permissions, and collaborate on business finances together.",
    requiredTier: "business_pro" as SubscriptionTierType,
    requiredProductLine: "business" as ProductLine,
    benefit: "Better together",
    cta: "Upgrade to Business Pro",
  },

  apiAccess: {
    title: "API Access & Integrations",
    description:
      "Connect your own tools, build custom integrations, and automate your workflows.",
    requiredTier: "business_enterprise" as SubscriptionTierType,
    requiredProductLine: "business" as ProductLine,
    benefit: "Unlimited possibilities",
    cta: "Contact Sales",
  },
};

// ========================================
// TRIAL PERIODS
// ========================================

export const TRIAL_CONFIG = {
  personal_pro: {
    duration: 14, // days
    features: PERSONAL_TIERS.personal_pro.features,
  },
  business_starter: {
    duration: 14,
    features: BUSINESS_TIERS.business_starter.features,
  },
  business_pro: {
    duration: 14,
    features: BUSINESS_TIERS.business_pro.features,
  },
  business_enterprise: {
    duration: 30,
    features: BUSINESS_TIERS.business_enterprise.features,
  },
};

// ========================================
// PRICING PAGE STRUCTURE
// ========================================

export const PRICING_PAGE_SECTIONS = {
  personal: {
    title: "Personal Banking",
    subtitle: "Smart money management for individuals",
    tiers: ["personal_free", "personal_pro"] as SubscriptionTierType[],
    switchToBusinessCTA: {
      title: "Running a business?",
      description: "Switch to Business Banking for invoicing, VAT, and more",
      cta: "View Business Plans",
    },
  },
  business: {
    title: "Business Banking",
    subtitle: "Professional tools for businesses of all sizes",
    tiers: ["business_starter", "business_pro", "business_enterprise"] as SubscriptionTierType[],
    switchToPersonalCTA: {
      title: "Just need personal banking?",
      description: "Our personal plans start at free with AI available as an upgrade",
      cta: "View Personal Plans",
    },
  },
};

// ========================================
// CONVERSION FUNNELS
// ========================================

export const CONVERSION_STRATEGIES = {
  personal_free_to_pro: {
    triggers: [
      "User hits 2 bank account limit",
      "User tries to use AI features 3+ times",
      "User exports more than 1 report per month",
      "User has been active for 30 days",
    ],
    messages: [
      "You're getting the most out of Personal Free! Upgrade to Pro for AI insights.",
      "Want to see where your money is going? AI insights available in Personal Pro.",
      "Track unlimited accounts and get cashflow forecasting with Personal Pro.",
    ],
  },
  personal_to_business: {
    triggers: [
      'User creates transactions tagged as "business"',
      "User manually tracks expenses frequently",
      "User exports data to accounting software",
      "User searches for invoice or VAT features",
    ],
    messages: [
      "Running a business? Business Banking includes VAT, invoicing, and client management.",
      "Separate your business finances properly with Business Banking.",
      "Get MTD-compliant VAT returns automatically with Business Banking.",
    ],
  },
  business_starter_to_pro: {
    triggers: [
      "User hits 50 invoice limit",
      "User has 2+ people accessing account",
      "User works with international clients",
      "User exports reports 10+ times per month",
    ],
    messages: [
      "Growing fast? Business Pro includes team collaboration and more invoices.",
      "Need multi-currency support? Upgrade to Business Pro.",
      "Add your team and scale together with Business Pro.",
    ],
  },
};

export default ALL_TIERS;
