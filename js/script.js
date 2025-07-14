window.addEventListener("load", () => {
  const overlay = document.getElementById("loadingOverlay");
  setTimeout(() => {
    overlay.classList.add("fade-out");
    setTimeout(() => {
      overlay.style.display = "none";
    }, 1000); // フェードアウトアニメーションの時間に合わせる
  }, 5000); // ローディングバーのアニメーションと一致
});

const skillData = {
    html: {
      title: "HTML / CSS",
      level: 3,
      descriptions: [
        "★☆☆☆☆: 見出しや段落など基本的なタグ・スタイルが書ける",
        "★★☆☆☆: Flexbox や Grid で簡単なレイアウトが組める",
        "★★★☆☆: レスポンシブ・アニメーションも対応できる",
        "★★★★☆: BEMやSCSSなど設計も意識し、保守性が高いCSSが書ける",
        "★★★★★: 大規模UI設計やCSSアーキテクチャに精通"
      ]
    },
    js: {
      title: "JavaScript",
      level: 3,
      descriptions: [
        "★☆☆☆☆: 変数・関数・if文・ループが使える",
        "★★☆☆☆: DOM操作・イベント処理ができる",
        "★★★☆☆: 非同期処理やモジュール化に対応",
        "★★★★☆: ES6・API連携やクリーンなコードが書ける",
        "★★★★★: パフォーマンスや設計に精通"
      ]
    },
    python: {
      title: "Python",
      level: 4,
      descriptions: [
        "★☆☆☆☆: 基本文法とスクリプト作成ができる",
        "★★☆☆☆: 辞書・ファイル操作や内包表記が使える",
        "★★★☆☆: クラスや外部ライブラリも使える",
        "★★★★☆: Flaskやデータ分析など応用ができる",
        "★★★★★: 最適化や高度な構文に詳しい"
      ]
    },
    sql: {
      title: "SQL",
      level: 3,
      descriptions: [
        "★☆☆☆☆: SELECTでデータ取得ができる",
        "★★☆☆☆: WHEREやORDER BYでの抽出",
        "★★★☆☆: JOINやGROUP BYも使える",
        "★★★★☆: トリガーやビューなどの設計も可能",
        "★★★★★: パフォーマンスチューニングも対応"
      ]
    },
    unity: {
      title: "Unity / Blender",
      level: 3,
      descriptions: [
        "★☆☆☆☆: Unityエディタを使って簡単なオブジェクト配置ができる",
        "★★☆☆☆: プレハブや簡単なアニメーション、Blenderでの基本操作が可能",
        "★★★☆☆: C#でのスクリプト制御、Blenderでの簡単な3Dモデリングができる",
        "★★★★☆: アニメーション、シェーダー、シーン管理などの構築ができる",
        "★★★★★: 複数シーンやマルチプラットフォーム対応の本格ゲームを制作できる"
      ]
    },
    csharp: {
      title: "C#",
      level: 1,
      descriptions: [
        "★☆☆☆☆: 基本的な変数・条件分岐・ループなどが理解できる",
        "★★☆☆☆: クラスやメソッドなどオブジェクト指向の基礎が使える",
        "★★★☆☆: Unityでのイベント処理やコルーチン、UI操作ができる",
        "★★★★☆: ジェネリクスやデリゲート、LINQなど高度な機能が使いこなせる",
        "★★★★★: アーキテクチャ設計（MVC/MVVM）や依存性注入を用いた設計ができる"
      ]
    },
    cpp: {
      title: "C++",
      level: 1,
      descriptions: [
        "★☆☆☆☆: 基本的な文法（変数、if文、forループなど）を使って簡単なプログラムが書ける",
        "★★☆☆☆: 関数定義や配列、ポインタの基本的な操作が理解できる",
        "★★★☆☆: クラスとオブジェクト指向、STL（vector, mapなど）が使いこなせる",
        "★★★★☆: テンプレート、スマートポインタ、ラムダ式、マルチスレッド処理を理解・実装できる",
        "★★★★★: C++の仕様（規格）や最適化、高度なメモリ管理、設計パターンにも精通している"
      ]
    },   
    dart: {
      title: "Dart",
      level: 1,
      descriptions: [
        "★☆☆☆☆: Dartの基本的な文法（変数、if文、forループなど）を使って簡単なプログラムが書ける",
        "★★☆☆☆: 関数、クラス、リストやマップなどの基本的なデータ構造を使って小規模なアプリを作れる",
        "★★★☆☆: 非同期処理（async/await）やパッケージの活用ができ、Flutterアプリのロジック部分を構築できる",
        "★★★★☆: アーキテクチャ（BLoC, MVVMなど）を理解し、状態管理やパフォーマンス最適化を行える",
        "★★★★★: Dart VMやFlutterエンジンの内部動作を理解し、プラグイン開発や独自ツールの構築ができる"
      ]
    },
    php: {
      title: "php",
      level: 1,
      descriptions: [
        "★☆☆☆☆: 基本的な文法や変数、echo、if文、ループが理解できる",
        "★★☆☆☆: 関数、配列、フォーム処理、簡単なファイル操作ができる",
        "★★★☆☆: クラスやオブジェクト指向、セッション、PDOによるDB操作ができる",
        "★★★★☆: フレームワーク（Laravel等）利用、設計パターン、API開発が可能",
        "★★★★★: パフォーマンス最適化、セキュリティ対策、アーキテクチャ設計ができる"
      ]
    }      
  };
  
  function openModal(skill, event) {
    if (event) event.preventDefault(); // ← ページ上部へのジャンプ防止
  
    const data = skillData[skill];
    document.getElementById("modalTitle").textContent = data.title;
  
    const starsDiv = document.getElementById("modalStars");
    starsDiv.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.textContent = "★";
      star.className = i <= data.level ? "active" : "inactive";
      starsDiv.appendChild(star);
    }
  
    const descList = document.getElementById("modalDescription");
    descList.innerHTML = "";
    data.descriptions.forEach(desc => {
      const li = document.createElement("li");
      li.textContent = desc;
      descList.appendChild(li);
    });
  
    document.getElementById("skillModal").style.display = "block";
    document.getElementById("modalOverlay").style.display = "block";
  }
  
  function closeModal() {
    document.getElementById("skillModal").style.display = "none";
    document.getElementById("modalOverlay").style.display = "none";
  }
  