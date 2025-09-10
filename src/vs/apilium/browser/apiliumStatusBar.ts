/**
 * Apilium Forge - Status Bar Integration
 * Shows AI quota and tier information in VSCode status bar
 */

import { Disposable } from '../../../base/common/lifecycle.js';
import { IWorkbenchContribution } from '../../workbench/common/contributions.js';
import { IStatusbarService, StatusbarAlignment } from '../../workbench/services/statusbar/browser/statusbar.js';
import { APILIUM_CONSTANTS } from '../common/constants.js';

export class ApiliumStatusBarContribution extends Disposable implements IWorkbenchContribution {

	private readonly statusBarEntryId = 'apilium.quota';

	constructor(
		@IStatusbarService private readonly statusbarService: IStatusbarService
	) {
		super();
		this.registerStatusBarItems();
	}

	private registerStatusBarItems(): void {
		// AI Quota Status Bar Item
		const quotaStatusBarEntry = this.statusbarService.addEntry({
			name: 'Apilium AI Quota',
			text: '$(rocket) Apilium Free',
			tooltip: 'Apilium Forge - AI Quota: 50/50 calls today',
			command: APILIUM_CONSTANTS.COMMANDS.SHOW_AI_CHAT,
			backgroundColor: undefined,
			color: APILIUM_CONSTANTS.COLORS.PRIMARY
		}, this.statusBarEntryId, StatusbarAlignment.LEFT, 10);

		this._register(quotaStatusBarEntry);
	}

	public updateQuota(used: number, total: number, tier: string): void {
		const remaining = total - used;
		const text = `$(rocket) Apilium ${tier}`;
		const tooltip = `Apilium Forge - AI Quota: ${used}/${total} calls today (${remaining} remaining)`;
		
		this.statusbarService.updateEntry(this.statusBarEntryId, {
			name: 'Apilium AI Quota',
			text,
			tooltip,
			command: APILIUM_CONSTANTS.COMMANDS.SHOW_AI_CHAT,
			backgroundColor: remaining === 0 ? APILIUM_CONSTANTS.COLORS.WARNING : undefined,
			color: remaining === 0 ? '#ffffff' : APILIUM_CONSTANTS.COLORS.PRIMARY
		});
	}
}