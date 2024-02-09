import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    const icons = document.querySelectorAll(".social-network a");

    icons.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        link.style.transform = `translate(${e.offsetX - 20}px, ${
          e.offsetY - 13
        }px)`;
      });

      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };

  return (
    <div>
      <div className="social-network">
        <ul className="content">
          <a
            href="https://www.facebook.com/digeretmarie/"
            target="blank"
            rel="noopener noreferrer"
            className="hover"
            onMouseOver={anim}
          >
            <li>
              <i className="fab fa-facebook-f"></i>
            </li>
          </a>

          <a
            href="https://www.instagram.com/digermarie.bachata/"
            target="blank"
            rel="noopener noreferrer"
            className="hover"
            onMouseOver={anim}
          >
            <li>
              <i className="fab fa-instagram"></i>
            </li>
          </a>

          <a
            href="https://www.youtube.com/@digeretmarie5617/videos"
            target="blank"
            rel="noopener noreferrer"
            className="hover"
            onMouseOver={anim}
          >
            <li>
              <i class="fa-brands fa-youtube"></i>
            </li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default SocialNetwork;
