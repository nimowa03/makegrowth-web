#!/bin/bash
# MakeGrowth 빌드 + 서버 재시작 + 검증 자동화 스크립트
# 사용법: bash scripts/rebuild.sh

set -e
cd "$(dirname "$0")/.."

echo "=== [1/4] Node 프로세스 정리 ==="
taskkill //F //IM node.exe 2>/dev/null || true
sleep 2

echo "=== [2/4] 빌드 ==="
npx next build
if [ $? -ne 0 ]; then
  echo "❌ 빌드 실패"
  exit 1
fi
echo "✅ 빌드 성공"

echo "=== [3/4] 서버 시작 (port 3000) ==="
npm run dev &
SERVER_PID=$!
sleep 8

echo "=== [4/4] 서버 검증 ==="
STATUS=$(curl -s -o /dev/null -w "%{http_code}" --max-time 10 http://localhost:3000)
if [ "$STATUS" = "200" ]; then
  echo "✅ 서버 정상 (HTTP $STATUS)"
  echo "🌐 http://localhost:3000"
else
  echo "❌ 서버 응답 실패 (HTTP $STATUS)"
  kill $SERVER_PID 2>/dev/null
  exit 1
fi
