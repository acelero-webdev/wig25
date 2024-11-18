import { z } from 'zod';

const PolicyTypeEnum = z.enum([
    'SECURITY',
    'LEGAL',
    'BREACH',
    'ACCESSIBILITY',
    'PRIVACY',
]);

const PolicyPriorityEnum = z.enum(['HIGH', 'MEDIUM', 'LOW']);

const PolicyStatusEnum = z.enum([
    'COMPLETE',
    'DRAFT',
    'TO_BE_DRAFTED',
    'TBD',
    'ARCHIVE',
]);

const BusinessUnitScopesEnum = z.enum([
    'NOT_AVAILABLE',
    'ACELERO_INC',
    'SHINE_EARLY_LEARNING',
    'ACELERO_LEARNING',
    'PUBLIC_SYSTEMS',
    'RFP',
    'LIMITED',
]);

const ITApplicationsEnum = z.enum([
    'NOT_AVAILABLE',
    'CREDIT_CARD_PROCESSING',
    'ONLINE_SALES',
    'WEBSITES',
    'CYBERSECURITY_INSURANCE',
    'STAFF_CONTRACTOR_AGREEMENTS',
]);

const WebsitesEnum = z.enum([
    'NOT_AVAILABLE',
    'ACELERO_COM',
    'SHINEEARLY_COM',
    'ACELEROLEARNING_COM',
    'SHINEEARLY_STORE',
    'YOUNGSTARCONNECT_COM',
    'SPARKPHILLYPREK_COM',
    'INDIANASPARK_COM',
    'SPARKMONTANA_COM',
    'PEER_ACELERO_COM',
]);

const SystemsEnum = z.enum([
    'NOT_AVAILABLE',
    'WORKDAY',
    'GOOGLE',
    'NETSUITE',
    'CORNERSTONE',
    'HUBSPOT',
    'AODOCS',
    'SHINE_INSIGHT',
    'PLAYGROUND',
]);

const ProductsEnum = z.enum([
    'NOT_AVAILABLE',
    'SHINEINSIGHT_COM',
    'SHINEHELPCONNECT_COM',
    'FAMILYAPPLICATION_SHINEINSIGHT_COM',
    'MYSPARKLEARNINGLAB',
    'SHINE_ACCESS',
]);

const LegalFrameworksEnum = z.enum([
    'NOT_AVAILABLE',
    'HEADSTART',
    'FERPA',
    'HIPAA',
]);

export const policyFormSchema = z.object({
    type: PolicyTypeEnum,
    name: z.string().trim().min(1, {
        message: 'You must provide a name for this policy.',
    }),
    description: z.string().trim().optional(),
    priority: PolicyPriorityEnum,
    reasoning: z.string().trim().optional(),
    status: PolicyStatusEnum,
    businessScopes: BusinessUnitScopesEnum.array().min(1, {
        message: 'Please select at least one business scope for this policy.',
    }),
    itApplications: ITApplicationsEnum.array().min(1, {
        message: 'Please select at least one IT Application for this policy.',
    }),
    websites: WebsitesEnum.array().min(1, {
        message: 'Please select at least one website for this policy.',
    }),
    systems: SystemsEnum.array().min(1, {
        message: 'Please select at least one system for this policy.',
    }),
    products: ProductsEnum.array().min(1, {
        message: 'Please select at least one product for this policy.',
    }),
    legalFrameworks: LegalFrameworksEnum.array().min(1, {
        message: 'Please select at least one legal framework for this policy.',
    }),
});
