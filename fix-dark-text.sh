#!/bin/bash

# 修复文档页面的暗黑模式文字颜色问题

echo "开始修复文档页面的暗黑模式文字颜色..."

# 定义要处理的文件列表
files=(
  "src/components/ArchitecturePageContent.tsx"
  "src/components/ChannelsPageContent.tsx"
  "src/components/CherryStudioPageContent.tsx"
  "src/components/ClaudeCodeRouterPageContent.tsx"
  "src/components/ClawCloudPageContent.tsx"
  "src/components/CloudflareAIGatewayPageContent.tsx"
  "src/components/ClusterPageContent.tsx"
  "src/components/ConfigurationPageContent.tsx"
  "src/components/ContributorsPageContent.tsx"
  "src/components/DeploymentPageContent.tsx"
  "src/components/EnvironmentPageContent.tsx"
  "src/components/FaqContent.tsx"
  "src/components/GeminiOpenaiPageContent.tsx"
  "src/components/IntegrationsPageContent.tsx"
  "src/components/IntroductionPageContent.tsx"
  "src/components/KeyManagementPageContent.tsx"
  "src/components/ManagementPageContent.tsx"
  "src/components/NewAPIPageContent.tsx"
  "src/components/PerformancePageContent.tsx"
  "src/components/ProjectConfigurationPageContent.tsx"
  "src/components/QuickStartPageContent.tsx"
  "src/components/RooCodePageContent.tsx"
  "src/components/RoutingStrategyPageContent.tsx"
  "src/components/SecurityContent.tsx"
  "src/components/SourcePageContent.tsx"
  "src/components/SponsorPageContent.tsx"
  "src/components/StandalonePageContent.tsx"
)

# 修复没有dark:前缀的文字颜色类
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "处理文件: $file"
    
    # 修复主标题颜色
    sed -i '' 's/text-gray-900"/text-gray-900 dark:text-white"/g' "$file"
    
    # 修复副标题和段落文字颜色
    sed -i '' 's/text-gray-800"/text-gray-800 dark:text-gray-200"/g' "$file"
    sed -i '' 's/text-gray-700"/text-gray-700 dark:text-gray-300"/g' "$file"
    sed -i '' 's/text-gray-600"/text-gray-600 dark:text-gray-400"/g' "$file"
    sed -i '' 's/text-gray-500"/text-gray-500 dark:text-gray-400"/g' "$file"
    
    # 修复列表项和小字体文字颜色
    sed -i '' 's/text-sm text-gray-600/text-sm text-gray-600 dark:text-gray-400/g' "$file"
    sed -i '' 's/text-xs text-gray-500/text-xs text-gray-500 dark:text-gray-400/g' "$file"
    
    # 修复代码块中的文字颜色
    sed -i '' 's/text-gray-800 font-mono/text-gray-800 dark:text-gray-300 font-mono/g' "$file"
    
    # 修复彩色文字的暗黑模式
    sed -i '' 's/text-blue-600"/text-blue-600 dark:text-blue-400"/g' "$file"
    sed -i '' 's/text-blue-700"/text-blue-700 dark:text-blue-300"/g' "$file"
    sed -i '' 's/text-green-600"/text-green-600 dark:text-green-400"/g' "$file"
    sed -i '' 's/text-green-700"/text-green-700 dark:text-green-300"/g' "$file"
    sed -i '' 's/text-green-800"/text-green-800 dark:text-green-300"/g' "$file"
    sed -i '' 's/text-green-900"/text-green-900 dark:text-green-200"/g' "$file"
    sed -i '' 's/text-red-600"/text-red-600 dark:text-red-400"/g' "$file"
    sed -i '' 's/text-red-700"/text-red-700 dark:text-red-300"/g' "$file"
    sed -i '' 's/text-red-800"/text-red-800 dark:text-red-200"/g' "$file"
    sed -i '' 's/text-yellow-600"/text-yellow-600 dark:text-yellow-400"/g' "$file"
    sed -i '' 's/text-yellow-700"/text-yellow-700 dark:text-yellow-300"/g' "$file"
    sed -i '' 's/text-purple-600"/text-purple-600 dark:text-purple-400"/g' "$file"
    sed -i '' 's/text-purple-700"/text-purple-700 dark:text-purple-300"/g' "$file"
    sed -i '' 's/text-amber-600"/text-amber-600 dark:text-amber-400"/g' "$file"
    sed -i '' 's/text-amber-700"/text-amber-700 dark:text-amber-300"/g' "$file"
    sed -i '' 's/text-orange-600"/text-orange-600 dark:text-orange-400"/g' "$file"
    sed -i '' 's/text-orange-700"/text-orange-700 dark:text-orange-300"/g' "$file"
    
    # 清理重复的dark:前缀
    sed -i '' 's/dark:text-white dark:text-white/dark:text-white/g' "$file"
    sed -i '' 's/dark:text-gray-200 dark:text-gray-200/dark:text-gray-200/g' "$file"
    sed -i '' 's/dark:text-gray-300 dark:text-gray-300/dark:text-gray-300/g' "$file"
    sed -i '' 's/dark:text-gray-400 dark:text-gray-400/dark:text-gray-400/g' "$file"
    sed -i '' 's/dark:text-blue-400 dark:text-blue-400/dark:text-blue-400/g' "$file"
    sed -i '' 's/dark:text-blue-300 dark:text-blue-300/dark:text-blue-300/g' "$file"
    sed -i '' 's/dark:text-green-400 dark:text-green-400/dark:text-green-400/g' "$file"
    sed -i '' 's/dark:text-green-300 dark:text-green-300/dark:text-green-300/g' "$file"
    sed -i '' 's/dark:text-green-200 dark:text-green-200/dark:text-green-200/g' "$file"
    sed -i '' 's/dark:text-red-400 dark:text-red-400/dark:text-red-400/g' "$file"
    sed -i '' 's/dark:text-red-300 dark:text-red-300/dark:text-red-300/g' "$file"
    sed -i '' 's/dark:text-red-200 dark:text-red-200/dark:text-red-200/g' "$file"
    sed -i '' 's/dark:text-yellow-400 dark:text-yellow-400/dark:text-yellow-400/g' "$file"
    sed -i '' 's/dark:text-yellow-300 dark:text-yellow-300/dark:text-yellow-300/g' "$file"
    sed -i '' 's/dark:text-purple-400 dark:text-purple-400/dark:text-purple-400/g' "$file"
    sed -i '' 's/dark:text-purple-300 dark:text-purple-300/dark:text-purple-300/g' "$file"
    sed -i '' 's/dark:text-amber-400 dark:text-amber-400/dark:text-amber-400/g' "$file"
    sed -i '' 's/dark:text-amber-300 dark:text-amber-300/dark:text-amber-300/g' "$file"
    sed -i '' 's/dark:text-orange-400 dark:text-orange-400/dark:text-orange-400/g' "$file"
    sed -i '' 's/dark:text-orange-300 dark:text-orange-300/dark:text-orange-300/g' "$file"
  fi
done

echo "文字颜色修复完成！"