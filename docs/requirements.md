# 要件定義

| 項目 | 内容 |
| --- | --- |
| Rank | 62 |
| Domain | ProjectManagement |
| Idea No. | 7 |
| Repository | project-artifact-catalog |
| 主な公開先 | GitHub Release |

## 背景

素材や完成物が増えると再利用候補や重複を探しづらい。

## 目的

タグ、検索、プレビュー、重複検出、関連ファイル棚を統合する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

## 必須要件

- artifact record を複数件まとめて検証できる。
- required fields: `id`, `title`, `artifactPath`, `version`, `owner`, `usage`。
- warning field: `licenseNote`。
- 代表シナリオ、QCDS metrics、docs ZIP、release evidence を再生成できる。
