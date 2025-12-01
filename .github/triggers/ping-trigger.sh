echo "Attempting POST to ping endpoint"
source ../.secret/ping-tester-token.env
status=$(curl -s -o /dev/null -w "%{http_code}" -L \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/ScintillaTesting/showcase-builder/actions/workflows/web-ping.yml/dispatches \
  -d '{"ref":"actions-experiment","inputs":{}}')
echo "got status: $status"
if [[ "$status" -ge 200 && "$status" -lt 300 ]]; then
    echo "✔️📬 POST request to action succeeded with status $status"
else
    echo "❌📭 POST failed with status $status"
    exit 1
fi