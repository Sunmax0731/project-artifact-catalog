export const productProfile = {
  "repository": "project-artifact-catalog",
  "title": "素材・成果物カタログ",
  "domain": "ProjectManagement",
  "hostApp": null,
  "rank": 62,
  "tier": "P2",
  "ideaNo": 7,
  "overview": "タグ、検索、プレビュー、重複検出、関連ファイル棚を統合する。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "素材や完成物が増えると再利用候補や重複を探しづらい。",
  "differentiation": "Issue、PR、設計ドキュメント、エージェント作業、リリース証跡を同じ流れで扱う。 素材、メモ、出力先を同じカードで管理する。",
  "publish": "GitHub Release",
  "surface": "ProjectManagement product spec + CLI validation core",
  "entity": "artifact record",
  "requiredFields": [
    "id",
    "title",
    "artifactPath",
    "version",
    "owner",
    "usage"
  ],
  "warningField": "licenseNote",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/project-portfolio-generator",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
