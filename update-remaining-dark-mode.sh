#!/bin/bash

echo "修复集群部署页面和其他页面的暗黑模式问题..."

# 修复所有 bg-gradient 渐变背景
find src/components -name "*.tsx" -exec sed -i '' \
  -e 's/from-blue-50 to-cyan-50/from-blue-50 to-cyan-50 dark:from-blue-900\/20 dark:to-cyan-900\/20/g' \
  -e 's/from-purple-50 to-violet-50/from-purple-50 to-violet-50 dark:from-purple-900\/20 dark:to-violet-900\/20/g' \
  -e 's/from-green-50 to-emerald-50/from-green-50 to-emerald-50 dark:from-green-900\/20 dark:to-emerald-900\/20/g' \
  -e 's/from-yellow-50 to-amber-50/from-yellow-50 to-amber-50 dark:from-yellow-900\/20 dark:to-amber-900\/20/g' \
  -e 's/from-orange-50 to-red-50/from-orange-50 to-red-50 dark:from-orange-900\/20 dark:to-red-900\/20/g' \
  {} \;

# 修复特定页面的浅色块问题
files=(
  "src/components/ClusterPageContent.tsx"
  "src/components/ClawCloudPageContent.tsx"
  "src/components/ConfigurationPageContent.tsx"
  "src/components/EnvironmentPageContent.tsx"
  "src/components/ManagementPageContent.tsx"
  "src/components/ProjectConfigurationPageContent.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "处理: $file"
    
    # 修复彩色背景块
    sed -i '' 's/bg-blue-50"/bg-blue-50 dark:bg-blue-900\/30"/g' "$file"
    sed -i '' 's/bg-green-50"/bg-green-50 dark:bg-green-900\/30"/g' "$file"
    sed -i '' 's/bg-yellow-50"/bg-yellow-50 dark:bg-yellow-900\/30"/g' "$file"
    sed -i '' 's/bg-purple-50"/bg-purple-50 dark:bg-purple-900\/30"/g' "$file"
    sed -i '' 's/bg-orange-50"/bg-orange-50 dark:bg-orange-900\/30"/g' "$file"
    sed -i '' 's/bg-red-50"/bg-red-50 dark:bg-red-900\/30"/g' "$file"
    sed -i '' 's/bg-amber-50"/bg-amber-50 dark:bg-amber-900\/30"/g' "$file"
    sed -i '' 's/bg-cyan-50"/bg-cyan-50 dark:bg-cyan-900\/30"/g' "$file"
    sed -i '' 's/bg-violet-50"/bg-violet-50 dark:bg-violet-900\/30"/g' "$file"
    
    # 修复彩色边框
    sed -i '' 's/border-blue-200"/border-blue-200 dark:border-blue-800"/g' "$file"
    sed -i '' 's/border-green-200"/border-green-200 dark:border-green-800"/g' "$file"
    sed -i '' 's/border-yellow-200"/border-yellow-200 dark:border-yellow-800"/g' "$file"
    sed -i '' 's/border-purple-200"/border-purple-200 dark:border-purple-800"/g' "$file"
    sed -i '' 's/border-orange-200"/border-orange-200 dark:border-orange-800"/g' "$file"
    sed -i '' 's/border-red-200"/border-red-200 dark:border-red-800"/g' "$file"
    sed -i '' 's/border-amber-200"/border-amber-200 dark:border-amber-800"/g' "$file"
    sed -i '' 's/border-cyan-200"/border-cyan-200 dark:border-cyan-800"/g' "$file"
    sed -i '' 's/border-violet-200"/border-violet-200 dark:border-violet-800"/g' "$file"
    
    # 清理重复的 dark: 前缀
    sed -i '' 's/dark:bg-blue-900\/30 dark:bg-blue-900\/30/dark:bg-blue-900\/30/g' "$file"
    sed -i '' 's/dark:bg-green-900\/30 dark:bg-green-900\/30/dark:bg-green-900\/30/g' "$file"
    sed -i '' 's/dark:bg-yellow-900\/30 dark:bg-yellow-900\/30/dark:bg-yellow-900\/30/g' "$file"
    sed -i '' 's/dark:bg-purple-900\/30 dark:bg-purple-900\/30/dark:bg-purple-900\/30/g' "$file"
    sed -i '' 's/dark:bg-orange-900\/30 dark:bg-orange-900\/30/dark:bg-orange-900\/30/g' "$file"
    sed -i '' 's/dark:bg-red-900\/30 dark:bg-red-900\/30/dark:bg-red-900\/30/g' "$file"
    sed -i '' 's/dark:border-blue-800 dark:border-blue-800/dark:border-blue-800/g' "$file"
    sed -i '' 's/dark:border-green-800 dark:border-green-800/dark:border-green-800/g' "$file"
    sed -i '' 's/dark:border-yellow-800 dark:border-yellow-800/dark:border-yellow-800/g' "$file"
    sed -i '' 's/dark:border-purple-800 dark:border-purple-800/dark:border-purple-800/g' "$file"
    sed -i '' 's/dark:border-orange-800 dark:border-orange-800/dark:border-orange-800/g' "$file"
    sed -i '' 's/dark:border-red-800 dark:border-red-800/dark:border-red-800/g' "$file"
  fi
done

echo "修复完成！"