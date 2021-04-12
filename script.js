$(() => {
  const users = new Array();
  const button = $("button.btn");
  const form = $("form");
  form.submit((e) => {
    e.preventDefault();
    const ss = document.querySelector("#ss");
    const name = document.querySelector("#name");
    console.log({
      ss,
      name,
    });
    if (name && name.value != "") {
      if (!ss) {
        ss.value = 0;
      }
      users.push({
        name: name.value,
        ss: ss.value,
      });
    }
    showUsers(users);
  });
  button.click(() => {
    alert("WOUW");
  });
  function showUsers(users) {
    try {
      document.querySelector("div.users").innerHTML = "";
      users.forEach((user) => {
        const wrapperElement = document.createElement("div");
  
        const name = document.createElement("h2");
        name.textContent = `${user.name}`;
        console.log(name);
  
        const score = document.createElement("h1");
        score.textContent = `${user.ss}`;
        console.log(score);
  
        const button1 = document.createElement("button");
        button1.textContent = `+`;
        button1.classList.add("btn");
        button1.addEventListener("click", () => {
          user.ss++;
          showUsers(users);
        });
        console.log(button1);
  
        const button2 = document.createElement("button");
        button2.textContent = `-`;
        button2.classList.add("btn");
        button2.addEventListener("click", () => {
          user.ss--;
          showUsers(users);
        });
        console.log(button2);
  
        wrapperElement.append(name);
        wrapperElement.append(score);
        wrapperElement.append(button1);
        wrapperElement.append(button2);
        document.querySelector("div.users").append(wrapperElement);
        user.ss = '';
        user.name = ''
      });
    } catch (err) {
      console.error(err);
    }
  }
});
