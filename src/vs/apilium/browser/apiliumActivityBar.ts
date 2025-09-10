/**
 * Apilium Forge - Activity Bar Integration
 * Adds Apilium icon and view container to VSCode Activity Bar
 */

import { Disposable } from '../../../base/common/lifecycle.js';
import { IWorkbenchContribution } from '../../workbench/common/contributions.js';
import { Registry } from '../../../platform/registry/common/platform.js';
import { IViewContainersRegistry, Extensions as ViewContainerExtensions, ViewContainerLocation } from '../../workbench/common/views.js';
import { SyncDescriptor } from '../../../platform/instantiation/common/descriptors.js';
import { APILIUM_CONSTANTS } from '../common/constants.js';
import { ApiliumViewContainer } from './apiliumViewContainer.js';

export class ApiliumActivityBarContribution extends Disposable implements IWorkbenchContribution {

	constructor() {
		super();
		this.registerApiliumViewContainer();
	}

	private registerApiliumViewContainer(): void {
		const registry = Registry.as<IViewContainersRegistry>(ViewContainerExtensions.ViewContainersRegistry);
		
		// Register Apilium view container in Activity Bar
		const apiliumViewContainer = registry.registerViewContainer({
			id: APILIUM_CONSTANTS.VIEW_CONTAINER_ID,
			title: APILIUM_CONSTANTS.PRODUCT_NAME,
			icon: {
				id: 'rocket' // Using VSCode's built-in rocket icon
			},
			ctorDescriptor: new SyncDescriptor(ApiliumViewContainer),
			storageId: APILIUM_CONSTANTS.VIEW_CONTAINER_ID,
			hideIfEmpty: true,
			order: 100 // Position after built-in views
		}, ViewContainerLocation.Sidebar);
		
		this._register(apiliumViewContainer);
	}
}