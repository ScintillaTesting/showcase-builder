echo "Attempting POST to ping endpoint"
source ../.secret/ping-tester-token.env
curl -L \
  -v \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/ScintillaTesting/showcase-builder/actions/workflows/web-ping.yml/dispatches \
  -d '{"ref":"actions-experiment","inputs":{}}'