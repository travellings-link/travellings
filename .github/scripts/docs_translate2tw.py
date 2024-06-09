import os
import requests
import opencc
import json

# Initialize the OpenCC converter
converter = opencc.OpenCC('s2twp.json')

# Get the GitHub token and repository information from environment variables
token = os.getenv('GITHUB_TOKEN')
repo_name = os.getenv('GITHUB_REPOSITORY')

# Get the PR number
with open(os.getenv('GITHUB_EVENT_PATH')) as f:
    event_data = json.load(f)
pr_number = event_data['number']

# Get the list of files changed
headers = {'Authorization': f'token {token}'}
url = f'https://api.github.com/repos/{repo_name}/pulls/{pr_number}/files'
response = requests.get(url, headers=headers)

# Catching errors
if response.status_code != 200:
    print(f"Failed to fetch PR files: {response.status_code} {response.text} \nUrl: {url}")
    exit(1)

files = response.json()

# Translate docs
translations = []
directories_to_check = ['docs/', 'announcements/', 'blog/']
translations.append(f'''
若您進行了檔案改動，請修改`zh_TW`中相應內容。

若您是修改原有檔案，請僅修改翻譯中您改動的部分！不要覆蓋整個檔案。

以下是翻譯建議。若您對翻譯內容不滿意，請在`zh_TW`中相應位置新增簡體中文原文，並 @ScaredCube 進行翻譯

<details>

<summary>展開翻譯建議</summary>

''')

for file in files:
    raw_url = file['raw_url']
    original_content_response = requests.get(raw_url, headers=headers)
    original_content = original_content_response.text
    translated_content = converter.convert(original_content)
    translations.append(f'''
### File: `{file["filename"]}`:

```markdown
{translated_content}
```
''')

translations.append(f'''
by [OpenCC](https://github.com/BYVoid/OpenCC)

</details>''')

# Write the translation suggestions to a file
with open('translation_output.txt', 'w', encoding='utf-8') as f:
    f.write('\n\n'.join(translations))

with open('translation_output.txt', 'r', encoding='utf-8') as f:
    print(f.read())
