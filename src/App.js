import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="inner">
        <h3 className="title">List Lưu trữ Của Tôi!</h3>
        <ul className="list">
          <li className="item">
            <p className="content">Github :</p>

            <ul className="sub-list">
              <li className="sub-item">
                <a
                  href="https://github.com/hoanghiep2001-coder?tab=repositories"
                  className="link"
                  blank
                  target="_"
                >
                  - Git Repositories
                </a>
              </li>
            </ul>
          </li>
          <li className="item">
            <p className="content">Docs :</p>

            <ul className="sub-list">
              <li className="sub-item">
                <a
                  href="https://beta.reactjs.org/"
                  className="link"
                  blank
                  target="_"
                >
                  - React Docs
                </a>
              </li>
              <li className="sub-item">
                <a
                  href="https://getbootstrap.com/docs/5.1/getting-started/introduction/"
                  className="link"
                  blank
                  target="_"
                >
                  - BootStrap 5
                </a>
              </li>
              <li className="sub-item">
                <a
                  href="https://www.w3schools.com/"
                  className="link"
                  blank
                  target="_"
                >
                  - W3 Schools
                </a>
              </li>
            </ul>
          </li>
          <li className="item">
            <p className="content">Figma :</p>

            <ul className="sub-list">
              <li className="sub-item">
                <a
                  href="https://www.figma.com/file/L7UnMkku3fdLcijg8iuW2G/DIGITICKET---Ng%C3%A2n?node-id=611%3A4654"
                  className="link"
                  blank
                  target="_"
                >
                  - Digicket Design
                </a>
              </li>
              <li className="sub-item">
                <a
                  href="https://www.figma.com/file/h8KQQYFDxAurq2wDJ0fe35/DEMO_TRANGCHU_PT?node-id=0%3A1"
                  className="link"
                  blank
                  target="_"
                >
                  - Dự án Khoa học
                </a>
              </li>
              <li className="sub-item">
                <a
                  href="https://drive.google.com/drive/folders/1aQGRKbzdGyl_8LuR8WPSuC__vvf_63gE"
                  className="link"
                  blank
                  target="_"
                >
                  - Resource Dự án Khoa học
                </a>
              </li>
            </ul>
          </li>
          <li className="item">
            <p className="content">Vercel :</p>

            <ul className="sub-list">
              <li className="sub-item">
                <a
                  href="https://vercel.com/hoanghiep2001-coder"
                  className="link"
                  blank
                  target="_"
                >
                  - Trang chủ Vercel
                </a>
              </li>
            </ul>
          </li>
          <li className="item">
            <p className="content">Youtube :</p>

            <ul className="sub-list">
              <li className="sub-item">
                <a
                  href="https://www.youtube.com/watch?v=DYsJDyVB5M4&list=PLncHg6Kn2JT4C0enPGQPK7ZIlEoZ1ZvRy&index=37"
                  className="link"
                  blank
                  target="_"
                >
                  - Học React, Redux
                </a>
              </li>
              <li className="sub-item">
                <a
                  href="https://www.youtube.com/watch?v=E80qwAl0ndY"
                  className="link"
                  blank
                  target="_"
                >
                  - Xem code Sử dụng ReactJS
                </a>
              </li>
            </ul>
          </li>
          <li className="item">
            <p className="content">Trên Trường :</p>

            <ul className="sub-list">
              <li className="sub-item">
                <a
                  href="http://222.255.113.138/Login.aspx"
                  className="link"
                  blank
                  target="_"
                >
                  - Xem Điểm
                </a>
              </li>
              <li className="sub-item">
                <a
                  href="https://www.slidemembers.com/"
                  className="link"
                  blank
                  target="_"
                >
                  - Làm Slide
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
