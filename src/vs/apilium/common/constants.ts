/**
 * Apilium Forge - AI-Powered IDE based on VSCode
 * Common constants and configuration
 */

export const APILIUM_CONSTANTS = {
	// Product Information
	PRODUCT_NAME: 'Apilium Forge',
	VERSION: '1.0.0-beta',
	
	// API Configuration
	API_BASE_URL: process.env.APILIUM_API_URL || 'https://api.apilium.com',
	
	// Feature Tiers
	TIERS: {
		FREE: {
			name: 'Free',
			aiCallsPerDay: 50,
			contextEntities: 1000,
			cobolFilesPerDay: 10,
			iso27001Controls: 50
		},
		PRO: {
			name: 'Pro',
			aiCallsPerDay: 1000,
			contextEntities: 50000,
			cobolFilesUnlimited: true,
			iso27001Controls: 200
		},
		ENTERPRISE: {
			name: 'Enterprise',
			aiCallsUnlimited: true,
			contextEntitiesUnlimited: true,
			allFeaturesUnlimited: true
		}
	},
	
	// UI Constants
	ACTIVITY_BAR_ID: 'apilium',
	VIEW_CONTAINER_ID: 'apiliumViewContainer',
	
	// Commands
	COMMANDS: {
		SHOW_AI_CHAT: 'apilium.showAIChat',
		SHOW_CONTEXT_INSIGHTS: 'apilium.showContextInsights',
		SHOW_COBOL_ANALYSIS: 'apilium.showCobolAnalysis',
		SHOW_COMPLIANCE: 'apilium.showCompliance',
		REGISTER_USER_KEY: 'apilium.registerUserKey',
		UPGRADE_TO_PRO: 'apilium.upgradeToPro'
	}
};

export const APILIUM_COLORS = {
	PRIMARY: '#2563eb',
	SECONDARY: '#64748b',
	ACCENT: '#f59e0b',
	SUCCESS: '#10b981',
	WARNING: '#f59e0b',
	ERROR: '#ef4444'
};