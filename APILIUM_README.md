# Apilium Forge - AI-Powered IDE

Apilium Forge is a standalone IDE based on VSCode that provides AI-powered development tools while maintaining 100% visual compatibility with VSCode.

## 🚀 Features

### Free Tier
- 50 AI calls per day
- 1,000 contextual entities
- Basic COBOL analysis (10 files/day)  
- Basic ISO27001 compliance (50 controls)
- All VSCode functionality included

### Pro Tier ($29/month)
- 1,000 AI calls per day (20x increase)
- 50,000 contextual entities (50x increase)
- Advanced AI models (GPT-4, Claude Opus)
- Complete COBOL/legacy support
- 200+ ISO27001 compliance controls
- Team collaboration features

## 🏗️ Architecture

Apilium Forge is built as a standalone IDE that:
- Maintains 100% visual compatibility with VSCode
- Only ADDS functionality, never modifies existing VSCode UI/UX
- Uses VSCode native UI methods (TreeDataProvider, Webview, StatusBarItem)
- Integrates through the new Activity Bar section: 🚀 APILIUM

## 📁 Project Structure

```
src/vs/apilium/
├── common/
│   └── constants.ts        # Shared constants and configuration
├── browser/
│   ├── apilium.contribution.ts    # Main registration file
│   ├── apiliumActivityBar.ts      # Activity bar integration
│   ├── apiliumStatusBar.ts        # Status bar integration
│   └── apiliumViewContainer.ts    # View container setup
└── ui/
    ├── userKeyInput.ts     # User key registration (Free tier)
    ├── aiChat.ts          # AI assistant panel
    ├── contextInsights.ts # Code context analysis
    ├── cobolAnalysis.ts   # Legacy code analysis
    └── compliance.ts      # ISO27001 compliance dashboard
```

## 🔧 Development

This IDE is built on VSCode's architecture and follows the same patterns:
- TypeScript throughout
- Dependency injection via constructor parameters
- Service-oriented architecture
- Lifecycle-aware components

## 🎯 Integration Points

Apilium integrates with VSCode through:
- Activity Bar: New 🚀 APILIUM section
- Status Bar: AI quota and tier indicators
- Webviews: Custom panels using VSCode UI Toolkit
- Commands: Registered through VSCode command system

## ⚠️ Critical Rules

1. **NEVER modify existing VSCode components**
2. **ONLY ADD new functionality** through approved integration points
3. **Maintain 100% theme compatibility**
4. **Preserve all keyboard shortcuts** and user workflows
5. **Use VSCode UI Toolkit** for consistent styling

## 🌐 Backend Integration

Apilium Forge connects to:
- **Core API**: Authentication, user management, billing
- **Forge Services**: AI orchestration, context analysis, legacy processing
- **Website**: User registration and tier management

## 📊 Current Status

**Phase 1 Complete**: Free tier MVP with core infrastructure ready for launch.

---

**Apilium Forge** - Where AI meets enterprise development.