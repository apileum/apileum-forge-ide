/**
 * Apilium Forge - View Container
 * Main container for all Apilium views and panels
 */

import { Disposable } from '../../../base/common/lifecycle.js';
import { IViewDescriptorService } from '../../workbench/common/views.js';
import { IInstantiationService } from '../../../platform/instantiation/common/instantiation.js';
import { APILIUM_CONSTANTS } from '../common/constants.js';

export class ApiliumViewContainer extends Disposable {

	constructor(
		@IViewDescriptorService private readonly viewDescriptorService: IViewDescriptorService,
		@IInstantiationService private readonly instantiationService: IInstantiationService
	) {
		super();
		this.registerViews();
	}

	private registerViews(): void {
		// Register Free Tier views
		this.registerFreeViews();
	}

	private registerFreeViews(): void {
		// User Key Input View
		this.viewDescriptorService.registerViews([{
			id: 'apilium.userKeyInput',
			name: 'User Key Setup',
			ctorDescriptor: null, // Will be implemented later
			canToggleVisibility: true,
			canMoveView: true,
			order: 1
		}], this.viewDescriptorService.getViewContainerById(APILIUM_CONSTANTS.VIEW_CONTAINER_ID)!);

		// AI Chat Panel
		this.viewDescriptorService.registerViews([{
			id: 'apilium.aiChat',
			name: 'AI Assistant',
			ctorDescriptor: null, // Will be implemented later
			canToggleVisibility: true,
			canMoveView: true,
			order: 2
		}], this.viewDescriptorService.getViewContainerById(APILIUM_CONSTANTS.VIEW_CONTAINER_ID)!);

		// Context Insights Panel
		this.viewDescriptorService.registerViews([{
			id: 'apilium.contextInsights',
			name: 'Context Insights',
			ctorDescriptor: null, // Will be implemented later
			canToggleVisibility: true,
			canMoveView: true,
			order: 3
		}], this.viewDescriptorService.getViewContainerById(APILIUM_CONSTANTS.VIEW_CONTAINER_ID)!);

		// COBOL Analysis Panel
		this.viewDescriptorService.registerViews([{
			id: 'apilium.cobolAnalysis',
			name: 'COBOL Analysis',
			ctorDescriptor: null, // Will be implemented later
			canToggleVisibility: true,
			canMoveView: true,
			order: 4
		}], this.viewDescriptorService.getViewContainerById(APILIUM_CONSTANTS.VIEW_CONTAINER_ID)!);

		// Compliance Dashboard
		this.viewDescriptorService.registerViews([{
			id: 'apilium.compliance',
			name: 'ISO27001 Compliance',
			ctorDescriptor: null, // Will be implemented later
			canToggleVisibility: true,
			canMoveView: true,
			order: 5
		}], this.viewDescriptorService.getViewContainerById(APILIUM_CONSTANTS.VIEW_CONTAINER_ID)!);
	}
}