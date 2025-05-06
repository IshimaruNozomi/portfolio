const skillData = {
    html: {
      title: "HTML / CSS",
      level: 4,
      descriptions: [
        "★: 見出しや段落など基本的なタグ・スタイルが書ける",
        "★★: Flexbox や Grid で簡単なレイアウトが組める",
        "★★★: レスポンシブ・アニメーションも対応できる",
        "★★★★: BEMやSCSSなど設計も意識し、保守性が高いCSSが書ける",
        "★★★★★: 大規模UI設計やCSSアーキテクチャに精通"
      ]
    },
    js: {
      title: "JavaScript",
      level: 3,
      descriptions: [
        "★: 変数・関数・if文・ループが使える",
        "★★: DOM操作・イベント処理ができる",
        "★★★: 非同期処理やモジュール化に対応",
        "★★★★: ES6・API連携やクリーンなコードが書ける",
        "★★★★★: パフォーマンスや設計に精通"
      ]
    },
    python: {
      title: "Python",
      level: 3,
      descriptions: [
        "★: 基本文法とスクリプト作成ができる",
        "★★: 辞書・ファイル操作や内包表記が使える",
        "★★★: クラスや外部ライブラリも使える",
        "★★★★: Flaskやデータ分析など応用ができる",
        "★★★★★: 最適化や高度な構文に詳しい"
      ]
    },
    sql: {
      title: "SQL",
      level: 3,
      descriptions: [
        "★: SELECTでデータ取得ができる",
        "★★: WHEREやORDER BYでの抽出",
        "★★★: JOINやGROUP BYも使える",
        "★★★★: トリガーやビューなどの設計も可能",
        "★★★★★: パフォーマンスチューニングも対応"
      ]
    }
  };
  
  function openModal(skill) {
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
  }
  
  function closeModal() {
    document.getElementById("skillModal").style.display = "none";
  }

  let scrollY = 0;

function openModal(skill) {
  const data = skillData[skill];

  scrollY = window.scrollY;
  document.body.classList.add("modal-open");
  document.body.style.top = `-${scrollY}px`;

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
}

function closeModal() {
  document.getElementById("skillModal").style.display = "none";
  document.body.classList.remove("modal-open");
  document.body.style.top = "";
  window.scrollTo(0, scrollY);
}
