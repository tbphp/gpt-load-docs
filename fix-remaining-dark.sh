#!/bin/bash

echo "修复剩余的暗黑模式文字颜色问题..."

# 定义所有组件文件
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

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "处理: $file"
    
    # 修复所有没有 dark: 前缀的文字颜色
    # 主标题 - h1, h2, h3
    sed -i '' 's/className="\([^"]*\)text-gray-900\([^"]*\)"/className="\1text-gray-900 dark:text-white\2"/g' "$file"
    
    # 副标题 - h4, h5
    sed -i '' 's/className="\([^"]*\)text-gray-800\([^"]*\)"/className="\1text-gray-800 dark:text-gray-200\2"/g' "$file"
    
    # 段落文字
    sed -i '' 's/className="\([^"]*\)text-gray-700\([^"]*\)"/className="\1text-gray-700 dark:text-gray-300\2"/g' "$file"
    sed -i '' 's/className="\([^"]*\)text-gray-600\([^"]*\)"/className="\1text-gray-600 dark:text-gray-400\2"/g' "$file"
    sed -i '' 's/className="\([^"]*\)text-gray-500\([^"]*\)"/className="\1text-gray-500 dark:text-gray-400\2"/g' "$file"
    
    # 修复特定的彩色文字
    sed -i '' 's/text-blue-900\([^"]*\)"/text-blue-900 dark:text-blue-200\1"/g' "$file"
    sed -i '' 's/text-blue-800\([^"]*\)"/text-blue-800 dark:text-blue-300\1"/g' "$file"
    sed -i '' 's/text-green-900\([^"]*\)"/text-green-900 dark:text-green-200\1"/g' "$file"
    sed -i '' 's/text-purple-900\([^"]*\)"/text-purple-900 dark:text-purple-200\1"/g' "$file"
    sed -i '' 's/text-purple-800\([^"]*\)"/text-purple-800 dark:text-purple-300\1"/g' "$file"
    sed -i '' 's/text-purple-700\([^"]*\)"/text-purple-700 dark:text-purple-300\1"/g' "$file"
    sed -i '' 's/text-purple-600\([^"]*\)"/text-purple-600 dark:text-purple-400\1"/g' "$file"
    sed -i '' 's/text-yellow-900\([^"]*\)"/text-yellow-900 dark:text-yellow-200\1"/g' "$file"
    sed -i '' 's/text-yellow-800\([^"]*\)"/text-yellow-800 dark:text-yellow-300\1"/g' "$file"
    sed -i '' 's/text-amber-900\([^"]*\)"/text-amber-900 dark:text-amber-200\1"/g' "$file"
    sed -i '' 's/text-amber-800\([^"]*\)"/text-amber-800 dark:text-amber-300\1"/g' "$file"
    sed -i '' 's/text-orange-900\([^"]*\)"/text-orange-900 dark:text-orange-200\1"/g' "$file"
    sed -i '' 's/text-orange-800\([^"]*\)"/text-orange-800 dark:text-orange-300\1"/g' "$file"
    sed -i '' 's/text-cyan-900\([^"]*\)"/text-cyan-900 dark:text-cyan-200\1"/g' "$file"
    sed -i '' 's/text-cyan-800\([^"]*\)"/text-cyan-800 dark:text-cyan-300\1"/g' "$file"
    sed -i '' 's/text-violet-900\([^"]*\)"/text-violet-900 dark:text-violet-200\1"/g' "$file"
    sed -i '' 's/text-violet-800\([^"]*\)"/text-violet-800 dark:text-violet-300\1"/g' "$file"
    
    # 修复背景颜色
    sed -i '' 's/bg-gray-100\([^"]*\)"/bg-gray-100 dark:bg-gray-800\1"/g' "$file"
    sed -i '' 's/bg-gray-50\([^"]*\)"/bg-gray-50 dark:bg-gray-900\1"/g' "$file"
    sed -i '' 's/bg-white\([^"]*\)"/bg-white dark:bg-gray-800\1"/g' "$file"
    
    # 修复边框颜色
    sed -i '' 's/border-gray-200\([^"]*\)"/border-gray-200 dark:border-gray-700\1"/g' "$file"
    sed -i '' 's/border-gray-300\([^"]*\)"/border-gray-300 dark:border-gray-600\1"/g' "$file"
    
    # 清理重复的 dark: 前缀
    sed -i '' 's/dark:text-white dark:text-white/dark:text-white/g' "$file"
    sed -i '' 's/dark:text-gray-200 dark:text-gray-200/dark:text-gray-200/g' "$file"
    sed -i '' 's/dark:text-gray-300 dark:text-gray-300/dark:text-gray-300/g' "$file"
    sed -i '' 's/dark:text-gray-400 dark:text-gray-400/dark:text-gray-400/g' "$file"
    sed -i '' 's/dark:bg-gray-800 dark:bg-gray-800/dark:bg-gray-800/g' "$file"
    sed -i '' 's/dark:bg-gray-900 dark:bg-gray-900/dark:bg-gray-900/g' "$file"
    sed -i '' 's/dark:border-gray-700 dark:border-gray-700/dark:border-gray-700/g' "$file"
    sed -i '' 's/dark:border-gray-600 dark:border-gray-600/dark:border-gray-600/g' "$file"
  fi
done

echo "完成！"