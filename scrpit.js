document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");
  const post = urlParams.get("post");

  const data = {
      "react-native": ["React Native 소개", "React Native 트러블 슈팅"],
      "flutter": ["Flutter 소개", "Flutter 트러블 슈팅"],
      "spring": ["Spring 소개", "Spring 트러블 슈팅"]
  };

  if (category && document.getElementById("post-list")) {
      document.getElementById("category-title").innerText = category.toUpperCase();
      const list = document.getElementById("post-list");
      data[category].forEach(item => {
          const li = document.createElement("li");
          const link = document.createElement("a");
          link.href = `post.html?category=${category}&post=${item}`;
          link.innerText = item;
          li.appendChild(link);
          list.appendChild(li);
      });
  }

  if (post && document.getElementById("post-title")) {
      document.getElementById("post-title").innerText = post;
      document.getElementById("post-content").innerHTML = `<p>${post}의 내용이 여기에 들어갑니다.</p>`;
  }
});