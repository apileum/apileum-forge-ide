/**
 * Apilium Forge - Main Contribution File
 * Registers all Apilium components with VSCode workbench
 */

import { Registry } from '../../../platform/registry/common/platform.js';
import { IWorkbenchContributionsRegistry, Extensions as WorkbenchExtensions } from '../../workbench/common/contributions.js';
import { LifecyclePhase } from '../../services/lifecycle/common/lifecycle.js';
import { ApiliumActivityBarContribution } from './apiliumActivityBar.js';
import { ApiliumStatusBarContribution } from './apiliumStatusBar.js';
import { ApiliumViewContribution } from './apiliumViewContainer.js';

// Register Activity Bar contribution
const workbenchContributionsRegistry = Registry.as<IWorkbenchContributionsRegistry>(WorkbenchExtensions.Workbench);
workbenchContributionsRegistry.registerWorkbenchContribution(ApiliumActivityBarContribution, LifecyclePhase.Starting);
workbenchContributionsRegistry.registerWorkbenchContribution(ApiliumStatusBarContribution, LifecyclePhase.Restored);
workbenchContributionsRegistry.registerWorkbenchContribution(ApiliumViewContribution, LifecyclePhase.Starting);