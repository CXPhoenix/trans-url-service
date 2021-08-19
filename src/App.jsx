import React, { useState } from "react";

function Header({ children }) {
  return (
    <div className="flex justify-center items-center bg-blue-400 text-gray-100">
      {children}
    </div>
  );
}

function InputBar({ id, name, context }) {
  return (
    <div className="flex justify-center items-center p-2">
      <span className="text-lg text-blue-900 mr-5">{context}</span>
      <input
        className="text-lg flex-grow border-2 border-gray-900"
        type="text"
        name={name}
        id={id}
        placeholder={`請輸入`}
      />
    </div>
  );
}

function InputForm({ onSubmit }) {
  return (
    <div className="flex justify-center items-center mt-5">
      <form
        className="w-9/12 p-2 border-2 border-blue-900 rounded-xl text-center"
        onSubmit={onSubmit}
      >
        <InputBar
          id="getPageName"
          name="transUrlData"
          context={`輸入頁面名稱`}
        />
        <InputBar
          id="getPageUrl"
          name="transUrlData"
          context={`輸入頁面網址`}
        />
        <input
          className="text-xl bg-green-800 text-gray-100 p-2"
          type="submit"
          value="轉換網址"
        />
      </form>
    </div>
  );
}

function Output({ context, value, onClick }) {
  return (
    <div className="flex w-10/12 justify-center items-center mt-20">
      <label
        className="text-xl text-gray-800 mr-10"
        htmlFor="showUrl"
        onClick={onClick}
      >
        {context}
      </label>
      <input
        className="flex-grow border-2 border-blue-800 rounded-xl text-lg text-gray-800"
        type="text"
        id="showUrl"
        value={value}
        onChange={() => {}}
      />
    </div>
  );
}

function App() {
  const [getUrl, setUrl] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    const formData = e.target.elements.transUrlData;
    const name = formData[0].value;
    const transUrl = formData[1].value;
    const baseUrl =
      "https://script.google.com/a/gmail.com/macros/s/AKfycbyEEYNyc_h7hlGT6foMg2-iOVV9yTyIFKJWRQgK52oTA27ExC27zKMZX447OKZuuE0y/exec";
    setUrl(`${baseUrl}?name=${name}&transUrl=${transUrl}`);
    alert('轉換成功！\n複製網址後即可產生中轉網站')
  }

  function onClick(e) {
    const url = e.target.control.value;
    console.log(url);
  }

  return (
    <>
      <Header>
        <span className="text-2xl p-2">Google Apps Script 轉址工具</span>
      </Header>
      <InputForm onSubmit={onSubmit} />
      <div className="flex justify-center">
        <Output context="你的轉換網址" value={getUrl} onClick={onClick} />
      </div>
    </>
  );
}

export default App;
