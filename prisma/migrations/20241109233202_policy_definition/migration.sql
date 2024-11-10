-- CreateEnum
CREATE TYPE "PolicyType" AS ENUM ('SECURITY', 'LEGAL', 'BREACH', 'ACCESSIBILITY', 'PRIVACY');

-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('COMPLETE', 'DRAFT', 'TO_BE_DRAFTED', 'TDB', 'ARCHIVE');

-- CreateEnum
CREATE TYPE "BusinessUnitScopes" AS ENUM ('ACELERO_INC', 'SHINE_EARLY_LEARNING', 'ACELERO_LEARNING', 'PUBLIC_SYSTEMS', 'RFP', 'LIMITED');

-- CreateEnum
CREATE TYPE "ITApplications" AS ENUM ('CREDIT_CARD_PROCESSING', 'ONLINE_SALES', 'WEBSITES', 'CYBERSECURITY_INSURANCE', 'STAFF_CONTRACTOR_AGREEMENTS');

-- CreateEnum
CREATE TYPE "Website" AS ENUM ('ACELERO_COM', 'SHINEEARLY_COM', 'ACELEROLEARNING_COM', 'SHINEEARLY_STORE', 'YOUNGSTARCONNECT_COM', 'SPARKPHILLYPREK_COM', 'INDIANASPARK_COM', 'SPARKMONTANA_COM', 'PEER_ACELERO_COM');

-- CreateEnum
CREATE TYPE "System" AS ENUM ('WORKDAY', 'GOOGLE', 'NETSUITE', 'CORNERSTONE', 'HUBSPOT', 'AODOCS', 'SHINE_INSIGHT', 'PLAYGROUND');

-- CreateEnum
CREATE TYPE "Product" AS ENUM ('SHINEINSIGHT_COM', 'SHINEHELPCONNECT_COM', 'FAMILYAPPLICATION_SHINEINSIGHT_COM', 'MYSPARKLEARNINGLAB');

-- CreateEnum
CREATE TYPE "LegalFramework" AS ENUM ('HEADSTART', 'FERPA', 'HIPPA');

-- CreateTable
CREATE TABLE "Policy" (
    "id" SERIAL NOT NULL,
    "type" "PolicyType" NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "priority" "Priority" NOT NULL,
    "reasoning" TEXT,
    "status" "Status" NOT NULL,
    "BusinessUnitScopes" "BusinessUnitScopes"[],
    "ITApplications" "ITApplications"[],
    "Websites" "Website"[],
    "Systems" "System"[],
    "Products" "Product"[],
    "LegalFrameworks" "LegalFramework"[],

    CONSTRAINT "Policy_pkey" PRIMARY KEY ("id")
);
